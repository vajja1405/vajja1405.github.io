"""Public, read-only MCP server over Rahul Vajja's verified portfolio evidence.

Any MCP client (Claude Code, Claude, Cursor, VS Code, …) can connect to /mcp and query the same
status-gated evidence database the website uses. No model runs here: the caller's own AI does the
reasoning, and every result carries the evidence strength and a usage policy so the caller cannot
mistake a self-reported claim for a public artifact or turn coverage into a score.
"""
from __future__ import annotations

from typing import Annotated, Any

from pydantic import Field
from mcp.server.mcpserver import MCPServer
from mcp.types import ToolAnnotations

from .coverage import CATEGORY_LABEL, analyze_jd, cover_concept, find_role, role_analysis, summarize
from .kb import KB, find_entities, load_kb, normalize, statable

SITE = "https://vajja1405.github.io/"

POLICY = (
    "Only verified, public-safe claims are returned. 'public artifact' means a repository, record or live demo backs the "
    "claim; 'self-reported employment' means it comes from Rahul's employment history with no public artifact. "
    "Coverage uses categories (direct, related, verification required, not demonstrated), never scores or percentages. "
    "Do not state anything about Rahul that these tools do not return, and do not present unverified topics as fact."
)

INSTRUCTIONS = f"""Verified engineering evidence about Rahul Vajja, an early-career AI/ML engineer ({SITE}).

Use these tools to answer questions about his projects, skills, architecture decisions, failures and fit for a role.
{POLICY}
Suggested flow: search_evidence or get_skill_evidence for a question; compare_job_description or evaluate_requirements for
a role; get_project / get_architecture / get_failure_cases to go deeper; get_code_reference to open the exact code.
Cite claim ids and links in your answer. When evidence is missing, say the portfolio does not demonstrate it."""

READ_ONLY = ToolAnnotations(read_only_hint=True, destructive_hint=False, idempotent_hint=True, open_world_hint=False)

mcp = MCPServer(
    name="rahul-vajja-evidence",
    title="Rahul Vajja: verified portfolio evidence",
    description="Read-only access to the verified evidence behind Rahul Vajja's AI/ML engineering portfolio.",
    instructions=INSTRUCTIONS,
    website_url=SITE,
    version="1.0.0",
)


def _kb() -> KB:
    return load_kb()


def _claim(kb: KB, c: dict, with_code: bool = True) -> dict[str, Any]:
    ent = kb.entities.get(c["entity"], {})
    out: dict[str, Any] = {
        "id": c["id"],
        "claim": c["text"],
        "project": ent.get("name", c["entity"]),
        "project_id": c["entity"],
        "evidence": "stated limitation" if c.get("kind") == "limitation" else
                    ("public artifact" if c["strength"] == "public_artifact" else "self-reported employment (no public artifact)"),
        "sources": [{"title": s["title"], "url": s["url"]} for s in kb.raw["sources"]
                    if s["id"] in c["sources"] and s.get("public") and s.get("url")],
    }
    if c.get("metrics"):
        out["metrics"] = c["metrics"]
    if with_code and c.get("code"):
        out["code"] = [{"label": r["label"], "url": r["url"]} for r in c["code"]]
    return out


def _entity_id(kb: KB, project: str) -> str | None:
    q = normalize(project)
    if q in kb.entities:
        return q
    for eid, e in kb.entities.items():
        if q in (normalize(e["name"]), normalize(e["short"])):
            return eid
    hits = find_entities(project)
    return next(iter(sorted(hits)), None) if hits else None


def _unknown_project(kb: KB, project: str) -> dict[str, Any]:
    return {"error": f"No project or role matches '{project}'.",
            "available": [{"id": e["id"], "name": e["name"]} for e in kb.raw["entities"] if e["kind"] != "education"]}


def _coverage_view(kb: KB, analysis: dict) -> dict[str, Any]:
    def req(r: dict) -> dict[str, Any]:
        out = {"requirement": r["label"], "category": CATEGORY_LABEL[r["category"]]}
        if r.get("priority"):
            out["listed_as"] = r["priority"]
        if r.get("strength") == "self_reported":
            out["note"] = "Supported only by self-reported employment experience."
        if r.get("statement") and r["category"] != "direct":
            out["explanation"] = r["statement"]
        if r["entities"]:
            out["evidence_from"] = [kb.entities[e]["name"] for e in r["entities"][:4] if e in kb.entities]
        if r["claims"]:
            out["claim_ids"] = r["claims"][:5]
        return out

    return {
        "title": analysis["title"],
        "counts": {CATEGORY_LABEL[k]: v for k, v in analysis["counts"].items()},
        "requirements": [req(r) for r in analysis["requirements"]],
        "strongest_evidence_from": [kb.entities[e["id"]]["name"] for e in analysis["entities"][:4]],
        "notes": analysis.get("notes", []),
        "closest_target_profile": analysis.get("closestRole"),
        "policy": POLICY,
        "view_on_site": f"{SITE}#imw=role:{analysis['roleId']}" if analysis.get("roleId") and analysis.get("source") == "role" else SITE,
    }


# ---- Tools ---------------------------------------------------------------------------------------

@mcp.tool(title="Search the evidence", annotations=READ_ONLY)
def search_evidence(
    query: Annotated[str, Field(description="A question or topic, e.g. 'retrieval evaluation' or 'what did he ship'.", max_length=500)],
    limit: Annotated[int, Field(ge=1, le=15, description="Maximum claims to return.")] = 8,
) -> dict[str, Any]:
    """Search Rahul's verified claims (projects, experience, research) by topic. Returns claims with sources and code links."""
    kb = _kb()
    hits = kb.retrieve(query, limit=limit, boost_entities=find_entities(query))
    gaps = [{"gap": kb.gaps[cid]["name"], "statement": kb.gaps[cid]["statement"]}
            for cid, kind, _ in kb.concepts(query) if kind == "gap"]
    return {"query": query, "claims": [_claim(kb, c) for c in hits], "known_gaps_mentioned": gaps,
            "note": None if hits else "No verified evidence matches this query.", "policy": POLICY}


@mcp.tool(title="Evidence for a skill", annotations=READ_ONLY)
def get_skill_evidence(
    skill: Annotated[str, Field(description="A skill, tool or domain, e.g. 'AI evaluation', 'Kubernetes', 'pgvector'.", max_length=200)],
) -> dict[str, Any]:
    """Classify a skill as direct evidence, related evidence, verification required, or not demonstrated, with the proof."""
    kb = _kb()
    hits = kb.concepts(skill)
    if not hits:
        cov = [cover_concept(kb, skill.strip())]
    else:
        # The specific thing asked about (a gap or a named tool) comes before generic words like "production".
        hits = sorted(hits, key=lambda h: {"gap": 0, "near": 1, "skill": 2}[h[1]])
        cov = [cover_concept(kb, cid, near=term if kind == "near" else None) for cid, kind, term in hits[:3]]
    results = []
    for r in cov:
        claims = [kb.claims[i] for i in r["claims"][:5] if i in kb.claims and statable(kb.claims[i])]
        results.append({
            "skill": r["label"],
            "category": CATEGORY_LABEL[r["category"]],
            "explanation": r.get("statement") or (
                f"Direct evidence in {', '.join(kb.entities[e]['name'] for e in r['entities'][:4])}." if r["entities"] else None),
            "self_reported_only": r.get("strength") == "self_reported",
            "evidence": [_claim(kb, c) for c in claims],
            "closest_projects": [kb.entities[e]["name"] for e in r["entities"][:4]] if r["category"] in ("missing", "verification") else None,
        })
    return {"results": results, "policy": POLICY}


@mcp.tool(title="Compare a job description", annotations=READ_ONLY)
def compare_job_description(
    job_description: Annotated[str, Field(description="The full job description text.", min_length=40, max_length=12000)],
) -> dict[str, Any]:
    """Map a job description's requirements to Rahul's evidence. Returns categories per requirement and notes (e.g. years
    of experience). There is deliberately no match score."""
    kb = _kb()
    return _coverage_view(kb, analyze_jd(kb, job_description))


@mcp.tool(title="Check a list of requirements", annotations=READ_ONLY)
def evaluate_requirements(
    requirements: Annotated[list[str], Field(description="Requirement phrases you extracted, e.g. ['production RAG', 'Kubernetes'].", min_length=1, max_length=30)],
    role_title: Annotated[str | None, Field(description="Optional title for the analysis.", max_length=120)] = None,
) -> dict[str, Any]:
    """Classify requirement phrases you already extracted against Rahul's evidence (direct, related, verification, missing)."""
    kb = _kb()
    reqs, seen = [], set()
    for phrase in requirements:
        phrase = phrase.strip()[:120]
        hits = kb.concepts(phrase)
        covs = [cover_concept(kb, cid, near=term if kind == "near" else None, priority="required") for cid, kind, term in hits] \
            if hits else [cover_concept(kb, phrase, priority="required")]
        for c in covs:
            if c["id"] not in seen:
                seen.add(c["id"])
                reqs.append(c)
    return _coverage_view(kb, summarize(kb, role_title or "Requirements", reqs, source="requirements"))


@mcp.tool(title="Evidence for a target role", annotations=READ_ONLY)
def get_role_evidence(
    role: Annotated[str, Field(description="A role such as 'Applied AI Engineer', 'AI Evaluation Engineer', 'MLOps Engineer I'.", max_length=120)],
) -> dict[str, Any]:
    """Evidence coverage for one of Rahul's 20 target role profiles, including the known gaps for that role."""
    kb = _kb()
    r = find_role(kb, role)
    if not r:
        return {"error": f"No role profile matches '{role}'. Use compare_job_description for other roles.",
                "roles": [x["title"] for x in kb.raw["roles"]]}
    return _coverage_view(kb, role_analysis(kb, r))


@mcp.tool(title="List projects and roles", annotations=READ_ONLY)
def list_projects() -> dict[str, Any]:
    """List the projects, research and roles in the evidence database with ids for the other tools."""
    kb = _kb()
    return {"items": [{"id": e["id"], "name": e["name"], "kind": e["kind"], "dates": e["dates"], "summary": e["tagline"],
                       "verified_claims": sum(1 for c in kb.raw["claims"] if c["entity"] == e["id"] and statable(c))}
                      for e in kb.raw["entities"] if e["kind"] != "education"]}


@mcp.tool(title="Project details", annotations=READ_ONLY)
def get_project(
    project: Annotated[str, Field(description="Project or role id or name, e.g. 'dia', 'Voice-Agent QA Harness', 'TIFIN'.", max_length=120)],
    depth: Annotated[str, Field(description="'recruiter', 'engineer', 'manager', 'founder' or 'researcher'.")] = "engineer",
) -> dict[str, Any]:
    """A project's summary, verified claims, stated limitations, design decisions, failure cases, links and the questions
    an interviewer could press on."""
    kb = _kb()
    eid = _entity_id(kb, project)
    if not eid:
        return _unknown_project(kb, project)
    e = kb.entities[eid]
    claims = [c for c in kb.raw["claims"] if c["entity"] == eid and statable(c)]
    return {
        "id": eid, "name": e["name"], "dates": e["dates"], "role": e.get("role"), "ownership": e.get("ownership") or None,
        "summary": e["summaries"].get(depth) or e["tagline"],
        "claims": [_claim(kb, c) for c in claims if c.get("kind") != "limitation"],
        "limitations": [c["text"] for c in claims if c.get("kind") == "limitation"],
        "design_decisions": [{"title": d["title"], "choice": d["choice"], "why": d["rationale"], "tradeoff": d["tradeoff"]}
                             for d in kb.raw["decisions"] if d["entity"] == eid],
        "failure_cases": [f["title"] for f in kb.raw["failures"] if f["entity"] == eid],
        "has_architecture": any(a["entity"] == eid for a in kb.raw["architectures"]),
        "links": e["links"], "interviewer_questions": e["questions"],
        "view_on_site": SITE + e["anchor"], "policy": POLICY,
    }


@mcp.tool(title="System architecture", annotations=READ_ONLY)
def get_architecture(
    project: Annotated[str, Field(description="'dia', 'voice', 'cliniq', 'sssd' or 'imw' (or the project name).", max_length=120)],
) -> dict[str, Any]:
    """Component-level architecture as implemented: each component's purpose, inputs/outputs, why it exists, observed
    results, and supporting claim ids. Only components present in the source are included."""
    kb = _kb()
    eid = _entity_id(kb, project)
    arch = next((a for a in kb.raw["architectures"] if a["entity"] == eid), None)
    if not arch:
        return {"error": f"No architecture for '{project}'.", "available": [a["entity"] for a in kb.raw["architectures"]]}
    return {
        "title": arch["title"], "note": arch["note"],
        "components": [{"id": n["id"], "name": n["label"], "summary": n["sub"], **{k: v for k, v in n["detail"].items() if k != "claims"},
                        "claim_ids": n["detail"]["claims"]} for n in arch["nodes"]],
        "data_flow": [f"{a} -> {b}" for a, b in arch["edges"]],
        "status": "Implemented, as recorded in the project repository.",
        "view_on_site": f"{SITE}#imw=xray:{eid}",
    }


@mcp.tool(title="Failure cases", annotations=READ_ONLY)
def get_failure_cases(
    project: Annotated[str | None, Field(description="Optional project id or name; omit for all.", max_length=120)] = None,
) -> dict[str, Any]:
    """Failures Rahul found and fixed: problem, detection, diagnosis, fix, prevention and what was measured."""
    kb = _kb()
    eid = _entity_id(kb, project) if project else None
    if project and not eid:
        return _unknown_project(kb, project)
    items = [f for f in kb.raw["failures"] if not eid or f["entity"] == eid]
    return {"failures": [{
        "title": f["title"], "project": kb.entities[f["entity"]]["name"], "problem": f["problem"], "detection": f["detection"],
        "diagnosis": f["diagnosis"], "fix": f["fix"], "prevention": f["prevention"], "measured": f["measurement"],
        "code": [{"label": r["label"], "url": r["url"]} for r in f["code"]], "claim_ids": f["claims"],
    } for f in items], "policy": POLICY}


@mcp.tool(title="Code references", annotations=READ_ONLY)
def get_code_reference(
    query: Annotated[str, Field(description="A claim id (e.g. 'voice.bargein') or a topic (e.g. 'barge-in', 'cache key').", max_length=200)],
) -> dict[str, Any]:
    """Links to the exact files and line ranges that implement a claim, pinned to a commit so they do not drift."""
    kb = _kb()
    c = kb.claims.get(query.strip())
    claims = [c] if c and statable(c) else kb.retrieve(query, limit=6, boost_entities=find_entities(query))
    refs = [{"claim_id": c["id"], "claim": c["text"], "label": r["label"], "url": r["url"],
             "lines": r.get("lines")} for c in claims for r in (c.get("code") or [])]
    return {"references": refs[:12], "note": None if refs else "No code reference matches. Employment work (TIFIN, Citizen Health) has no public code."}


@mcp.tool(title="Known gaps", annotations=READ_ONLY)
def get_known_gaps() -> dict[str, Any]:
    """What the portfolio does not demonstrate, with the closest related evidence, plus topics held back pending verification."""
    kb = _kb()
    gaps = []
    for g in kb.raw["gaps"]:
        closest = {c["entity"] for r in g["related"] for c in kb.raw["claims"] if statable(c) and r in c["tags"]}
        gaps.append({"gap": g["name"], "status": "Verification required" if g.get("verify") else "Not currently demonstrated",
                     "statement": g["statement"], "closest_projects": sorted(kb.entities[e]["name"] for e in closest if e in kb.entities)[:4]})
    return {"gaps": gaps,
            "not_stated_until_confirmed": [cf["label"] for cf in kb.raw["conflicts"] if cf.get("open")],
            "level": kb.raw["subject"]["level_note"], "policy": POLICY}


# ---- Resources and prompts -----------------------------------------------------------------------

@mcp.resource("rahul://profile", name="profile", title="Profile and evidence policy", mime_type="text/markdown")
def profile() -> str:
    """Who Rahul is, where to find him, and how to use this evidence."""
    kb = _kb()
    s = kb.raw["subject"]
    return (f"# {s['name']}: {s['headline']}\n\n{s['level_note']}\n\n"
            f"- Portfolio: {s['links']['site']}\n- GitHub: {s['links']['github']}\n- LinkedIn: {s['links']['linkedin']}\n"
            f"- Email: {s['email']}\n\n## Evidence policy\n{POLICY}\n")


@mcp.resource("rahul://roles", name="roles", title="Target role profiles", mime_type="application/json")
def roles() -> dict[str, Any]:
    """The 20 target role profiles with their requirement lists."""
    kb = _kb()
    return {"roles": [{"id": r["id"], "title": r["title"], "tier": r["tier"],
                       "requirements": [kb.skills[x]["name"] for x in r["requirements"] if x in kb.skills]} for r in kb.raw["roles"]]}


@mcp.prompt(title="Evaluate Rahul for a role")
def evaluate_for_role(role_or_job_description: str) -> str:
    """A prompt that walks the model through an evidence-based evaluation."""
    return (
        "Evaluate Rahul Vajja's evidence for the following role using only the rahul-vajja-evidence tools.\n"
        "1. If this is a full job description call compare_job_description; for a role title call get_role_evidence.\n"
        "2. For the three most important requirements, call get_skill_evidence and cite claim ids and links.\n"
        "3. Call get_failure_cases for the strongest project and summarise one failure he found and fixed.\n"
        "4. List what is not demonstrated. Do not give a score, percentage or hiring recommendation.\n\n"
        f"Role:\n{role_or_job_description}"
    )
