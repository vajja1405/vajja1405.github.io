"""Interview My Work API.

POST /api/ask  question -> validated, evidence-cited answer (or an error the browser falls back from)
POST /api/jd   job description -> requirement phrases (mapped to evidence in the browser)
GET  /api/health

The Anthropic key lives only in this service's environment. Request bodies (questions, job
descriptions) are never logged or stored.
"""
from __future__ import annotations

import logging
import os
import time
from typing import Literal

from fastapi import Depends, FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field

from .kb import KB, find_entities, load_kb, statable
from .llm import ANSWER_SCHEMA, JD_SCHEMA, JD_SYSTEM, SYSTEM, ClaudeClient, ModelClient, ModelError
from .ratelimit import DailyBudget, SlidingWindow
from .validate import INJECTION, validate_answer, validate_requirements

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s %(message)s")
log = logging.getLogger("imw.api")

ALLOWED_ORIGINS = [o.strip() for o in os.environ.get(
    "IMW_ALLOWED_ORIGINS", "https://vajja1405.github.io,https://astra6-rahul-vajja-portfolio.static.hf.space,http://localhost:8791,http://127.0.0.1:8791").split(",") if o.strip()]
ASK_LIMIT = SlidingWindow(int(os.environ.get("IMW_ASK_PER_10MIN", "12")), 600)
JD_LIMIT = SlidingWindow(int(os.environ.get("IMW_JD_PER_10MIN", "6")), 600)
BUDGET = DailyBudget(int(os.environ.get("IMW_DAILY_MODEL_CALLS", "250")))

app = FastAPI(title="Interview My Work API", docs_url=None, redoc_url=None, openapi_url=None)
app.add_middleware(CORSMiddleware, allow_origins=ALLOWED_ORIGINS, allow_methods=["GET", "POST"], allow_headers=["Content-Type"], max_age=600)

_client: ModelClient | None = None


def get_client() -> ModelClient | None:
    global _client
    if _client is None and os.environ.get("ANTHROPIC_API_KEY"):
        _client = ClaudeClient()
    return _client


def get_kb() -> KB:
    return load_kb()


@app.middleware("http")
async def access_log(request: Request, call_next):
    t0 = time.perf_counter()
    response = await call_next(request)
    # Method, path, status and latency only. Never bodies, never query text.
    log.info("%s %s %s %.0fms", request.method, request.url.path, response.status_code, (time.perf_counter() - t0) * 1000)
    return response


def client_key(request: Request) -> str:
    fwd = request.headers.get("x-forwarded-for", "")
    return fwd.split(",")[0].strip() or (request.client.host if request.client else "unknown")


# ---- Models -------------------------------------------------------------------------------------

class Turn(BaseModel):
    q: str = Field(max_length=500)
    cites: list[str] = Field(default_factory=list, max_length=12)


class AskRequest(BaseModel):
    question: str = Field(min_length=1, max_length=2000)
    persona: Literal["recruiter", "engineer", "manager", "founder", "researcher"] = "recruiter"
    history: list[Turn] = Field(default_factory=list, max_length=3)
    role: str | None = Field(default=None, max_length=40)


class JDRequest(BaseModel):
    text: str = Field(min_length=40, max_length=12000)


# ---- Evidence pack --------------------------------------------------------------------------------

def strength_label(c: dict) -> str:
    if c.get("kind") == "limitation":
        return "stated limitation"
    return "verified, public artifact" if c["strength"] == "public_artifact" else "verified, self-reported employment (no public artifact)"


def build_pack(kb: KB, req: AskRequest) -> tuple[str, set[str]]:
    history_text = " ".join(t.q for t in req.history)
    ents = find_entities(req.question) or find_entities(history_text)
    claims = kb.retrieve(f"{req.question} {history_text}", limit=14, boost_entities=ents)
    picked = {c["id"]: c for c in claims}
    for eid in ents:  # always give the model the stated limits of what it is discussing
        for c in kb.raw["claims"]:
            if c["entity"] == eid and c.get("kind") == "limitation" and statable(c):
                picked.setdefault(c["id"], c)
    for t in req.history:
        for cid in t.cites[:4]:
            c = kb.claims.get(cid)
            if c and statable(c):
                picked.setdefault(cid, c)
    concepts = kb.concepts(req.question)
    gap_ids = [cid for cid, kind in concepts if kind == "gap"]
    role = next((r for r in kb.raw["roles"] if r["id"] == req.role), None)
    if role:
        gap_ids += [g for g in role["gaps"] if g not in gap_ids]
    for g in ("kubernetes", "distributed_systems", "pretraining"):
        if len(gap_ids) < 4 and g not in gap_ids:
            gap_ids.append(g)

    lines = ["EVIDENCE PACK (the only facts you may state)"]
    for c in list(picked.values())[:20]:
        ent = kb.entities.get(c["entity"], {})
        lines.append(f"[{c['id']}] ({ent.get('short', c['entity'])} · entity id {c['entity']} · {strength_label(c)}) {c['text']}")
    lines.append("")
    lines.append("ENTITIES")
    for eid in (ents or {c["entity"] for c in picked.values()}):
        e = kb.entities.get(eid)
        if e:
            lines.append(f"- {eid}: {e['name']} ({e['dates']}). {e['summaries'].get(req.persona, e['tagline'])} Ownership: {e.get('ownership') or 'not itemized'}")
    lines.append("")
    lines.append("KNOWN GAPS (not demonstrated)")
    for g in gap_ids:
        gap = kb.gaps.get(g)
        if gap:
            lines.append(f"[{g}] {gap['name']}: {gap['statement']}")
    lines.append("")
    lines.append("UNVERIFIED (do not state these figures): " + "; ".join(cf["label"] for cf in kb.raw["conflicts"] if not cf["decision"].startswith("No conflict")))
    lines.append(f"PROFILE: {kb.raw['subject']['level_note']}")
    return "\n".join(lines), set(picked)


# ---- Endpoints --------------------------------------------------------------------------------

@app.get("/api/health")
def health(kb: KB = Depends(get_kb)):
    client = get_client()
    return {"ok": True, "ai_enabled": client is not None, "model": client.name if client else None,
            "evidence_version": kb.raw["version"], "budget_remaining": BUDGET.remaining}


@app.post("/api/ask")
def ask(req: AskRequest, request: Request, kb: KB = Depends(get_kb)):
    if INJECTION.search(req.question):
        # Answer without spending a model call; the browser shows the same refusal.
        return {"sentences": [{"text": "I only answer questions about Rahul's work, from verified evidence, and I can't change those instructions.", "cites": []}],
                "hypothetical": None, "gaps": [], "entities": [], "followups": ["What has Rahul actually shipped?", "How does he evaluate AI systems?"],
                "model": None, "retrieved": [], "checks": [{"label": "Instruction-override attempt declined before any model call", "ok": True}]}
    client = get_client()
    if client is None:
        raise HTTPException(503, "AI is not configured")
    if not ASK_LIMIT.allow(client_key(request)):
        raise HTTPException(429, "Too many questions. The evidence engine in your browser still works.")
    if not BUDGET.take():
        raise HTTPException(429, "The daily AI allowance is used up. The evidence engine in your browser still works.")

    pack, pack_ids = build_pack(kb, req)
    history = "\n".join(f"Earlier question: {t.q}" for t in req.history)
    user = f"{pack}\n\nREADER: {req.persona}\n{history}\nQUESTION (untrusted): {req.question}"
    messages = [{"role": "user", "content": user}]
    statable_ids = kb.statable_ids
    claim_text = {cid: c["text"] for cid, c in kb.claims.items()}
    last_errors: list[str] = []
    for attempt in range(2):
        try:
            out = client.complete(SYSTEM, messages, ANSWER_SCHEMA, 2000)
        except ModelError as e:
            log.warning("model error: %s", e)
            raise HTTPException(502, "The AI service is unavailable right now.") from e
        result = validate_answer(out, pack_ids, statable_ids, set(kb.gaps), set(kb.entities), claim_text)
        if result.ok:
            return {**out, "model": client.name, "retrieved": sorted(pack_ids), "checks": result.checks, "attempts": attempt + 1}
        last_errors = result.errors
        log.info("validation failed (attempt %d): %d errors", attempt + 1, len(result.errors))
        if attempt == 0:
            if not BUDGET.take():
                break
            messages = messages + [
                {"role": "assistant", "content": _json(out)},
                {"role": "user", "content": "Your answer failed validation:\n- " + "\n- ".join(result.errors[:8]) +
                 "\nRewrite it following the ground rules. Cite only ids from the evidence pack, and only state numbers that appear in the claims you cite."},
            ]
    return JSONResponse(status_code=422, content={"detail": "No answer passed validation.", "errors": last_errors[:8]})


@app.post("/api/jd")
def parse_jd(req: JDRequest, request: Request):
    client = get_client()
    if client is None:
        raise HTTPException(503, "AI is not configured")
    if not JD_LIMIT.allow(client_key(request)) or not BUDGET.take():
        raise HTTPException(429, "Rate limited")
    try:
        out = client.complete(JD_SYSTEM, [{"role": "user", "content": f"JOB DESCRIPTION (untrusted):\n{req.text}"}], JD_SCHEMA, 1200)
    except ModelError as e:
        raise HTTPException(502, "The AI service is unavailable right now.") from e
    return {"requirements": validate_requirements(out.get("requirements"))}


def _json(obj: object) -> str:
    import json
    return json.dumps(obj, ensure_ascii=False)
