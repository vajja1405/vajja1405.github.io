"""Evidence coverage and job-description parsing — a port of imw/src/engine/{coverage,jd}.ts.

The website and the MCP server must classify requirements identically; tests/test_mcp.py checks
the same cases as imw/tests/engine.test.ts. There is no score anywhere: each requirement gets a
category (direct, related, verification, missing) plus the evidence behind it.
"""
from __future__ import annotations

import re

from .kb import KB, normalize, statable

CATEGORY_LABEL = {
    "direct": "Direct evidence",
    "related": "Related evidence",
    "verification": "Verification required",
    "missing": "Not currently demonstrated",
}
_STRENGTH_RANK = {"public_artifact": 1, "self_reported": 0.8}
_ORDER = ["direct", "related", "verification", "missing"]


def _statable_by_skill(kb: KB, skill: str) -> list[dict]:
    return [c for c in kb.raw["claims"] if statable(c) and skill in c["tags"]]


def _pending_by_skill(kb: KB, skill: str) -> list[str]:
    return [c["id"] for c in kb.raw["claims"] if c["status"] == "verification_required" and skill in c["tags"]]


def _rank(claims: list[dict]) -> list[dict]:
    return sorted(claims, key=lambda c: (-_STRENGTH_RANK.get(c["strength"], 0), c.get("kind") == "limitation"))


def _uniq(xs):
    return list(dict.fromkeys(xs))


def _title(s: str) -> str:
    return re.sub(r"\b[a-z]", lambda m: m.group().upper(), s)


def cover_concept(kb: KB, cid: str, near: str | None = None, priority: str | None = None) -> dict:
    gap = kb.gaps.get(cid)
    if gap:
        closest = [c for r in gap["related"] for c in _statable_by_skill(kb, r)]
        return {"id": cid, "label": gap["name"], "category": "verification" if gap.get("verify") else "missing", "priority": priority,
                "claims": [], "entities": _uniq(c["entity"] for c in closest)[:4], "statement": gap["statement"]}
    skill = kb.skills.get(cid)
    if not skill:
        return {"id": f"term:{cid}", "label": cid, "category": "missing", "priority": priority, "claims": [], "entities": [],
                "statement": "The evidence database has nothing that addresses this requirement."}
    direct = _statable_by_skill(kb, cid)
    pending = _pending_by_skill(kb, cid)
    if near:
        return {"id": f"near:{near}", "label": _title(near), "category": "related" if direct else "missing", "priority": priority,
                "claims": [c["id"] for c in direct[:6]], "entities": _uniq(c["entity"] for c in direct), "via": cid,
                "statement": (f"{_title(near)} itself is not demonstrated. The closest evidence is {skill['name'].lower()}."
                              if direct else f"{_title(near)} is not demonstrated.")}
    if direct:
        ranked = _rank(direct)
        artifact = any(c["strength"] == "public_artifact" for c in direct)
        return {"id": cid, "label": skill["name"], "category": "direct", "priority": priority, "claims": [c["id"] for c in ranked],
                "entities": _uniq(c["entity"] for c in ranked), "strength": "artifact" if artifact else "self_reported", "pending": pending}
    for rel in skill["related"]:
        r = _statable_by_skill(kb, rel)
        if r:
            rel_name = kb.skills.get(rel, {}).get("name", rel)
            return {"id": cid, "label": skill["name"], "category": "related", "priority": priority, "via": rel,
                    "claims": [c["id"] for c in _rank(r)[:6]], "entities": _uniq(c["entity"] for c in r), "pending": pending,
                    "statement": f"No direct evidence for {skill['name'].lower()}. The closest is {rel_name.lower()}."}
    if pending:
        return {"id": cid, "label": skill["name"], "category": "verification", "priority": priority, "claims": [], "entities": [],
                "pending": pending, "statement": "Only claims that still need verification mention this."}
    return {"id": cid, "label": skill["name"], "category": "missing", "priority": priority, "claims": [], "entities": [],
            "statement": f"{skill['name']} is not currently demonstrated in the portfolio."}


def summarize(kb: KB, title: str, reqs: list[dict], **extra) -> dict:
    counts = {k: 0 for k in _ORDER}
    for r in reqs:
        counts[r["category"]] += 1
    by_entity: dict[str, dict] = {}
    for r in reqs:
        if r["category"] not in ("direct", "related"):
            continue
        for e in r["entities"]:
            cur = by_entity.setdefault(e, {"score": 0.0, "requirements": []})
            # This assistant is real work, but it should not pad a role's evidence ahead of the projects it describes.
            cur["score"] += (1 if r["category"] == "direct" else 0.4) * (0.4 if e == "imw" else 1)
            cur["requirements"].append(r["id"])
    pr = {"required": 0, "preferred": 1, "mentioned": 2, None: 1}
    return {
        "title": title, "notes": [], **extra,
        "requirements": sorted(reqs, key=lambda r: (_ORDER.index(r["category"]), pr.get(r.get("priority"), 1))),
        "counts": counts,
        "entities": sorted(({"id": k, **v} for k, v in by_entity.items() if k in kb.entities), key=lambda e: -e["score"]),
    }


def find_role(kb: KB, role: str) -> dict | None:
    q = normalize(role).replace("-", " ")
    for r in kb.raw["roles"]:
        if q in (r["id"], normalize(r["title"])):
            return r
    for r in kb.raw["roles"]:  # loose: "applied ai" -> Applied AI Engineer
        title = normalize(r["title"]).replace("—", "").replace("-", " ")
        if q and (q in title or title.startswith(q)):
            return r
    return None


def role_analysis(kb: KB, role: dict) -> dict:
    reqs = [cover_concept(kb, r) for r in role["requirements"]] + [cover_concept(kb, g) for g in role["gaps"]]
    notes = [n for n in (role.get("level_note"), kb.raw["subject"]["level_note"]) if n]
    return summarize(kb, role["title"], reqs, source="role", roleId=role["id"], notes=notes)


# ---- Job descriptions -----------------------------------------------------------------------------

HEAD_SKIP = re.compile(r"(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)")
HEAD_PREF = re.compile(r"(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)")
HEAD_REQ = re.compile(r"(requirement|qualification|what you'll need|what you need|must have|must-have|you have|you bring|what we're looking for|minimum|basic|skills|experience|about you)")
HEAD_RESP = re.compile(r"(responsibilit|what you'll do|what you will do|the role|your impact|day to day|in this role)")
RANK = {"required": 3, "preferred": 2, "mentioned": 1, "skip": 0}


def _heading(line: str) -> str | None:
    trimmed = line.strip()
    if re.match(r"^([-*•·▪◦]|\d+[.)])\s", trimmed):
        return None  # bullets are content, never headings
    l = re.sub(r"^#+\s*", "", normalize(trimmed))
    looks = 0 < len(l) < 70 and (re.search(r"[:：]$", l) or trimmed.startswith("#") or (len(l.split(" ")) <= 5 and not re.search(r"[.,;]", l)))
    if not looks:
        return None
    for rx, sec in ((HEAD_SKIP, "skip"), (HEAD_PREF, "preferred"), (HEAD_REQ, "required"), (HEAD_RESP, "mentioned")):
        if rx.search(l):
            return sec
    return None


def analyze_jd(kb: KB, text: str, extra_phrases: list[str] | None = None) -> dict:
    section, found = "mentioned", {}
    for raw in text.splitlines():
        if not raw.strip():
            continue
        h = _heading(raw)
        if h:
            section = h
            continue
        if section == "skip":
            continue
        line_sec = "preferred" if HEAD_PREF.search(normalize(raw)) else section
        for cid, kind, term in kb.concepts(raw):
            key = f"near:{term}" if kind == "near" else cid
            cur = found.get(key)
            if cur:
                cur["count"] += 1
                if RANK[line_sec] > RANK[cur["priority"]]:
                    cur["priority"] = line_sec
            else:
                found[key] = {"id": cid, "near": term if kind == "near" else None, "priority": line_sec, "count": 1}

    t = normalize(text)
    years = [int(y) for y in re.findall(r"(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)", t) if 0 < int(y) < 30]
    sen = re.search(r"\b(senior|staff|principal|lead|head of|director|manager)\b", t)
    skills = {c["id"] for c in found.values() if not c["near"] and c["id"] in kb.skills}
    closest, best = None, 0.0
    for r in kb.raw["roles"]:
        overlap = sum(1 for x in r["requirements"] if x in skills) / len(r["requirements"])
        if overlap > best:
            best, closest = overlap, r
    closest = closest if best >= 0.25 else None

    order = {"required": 0, "preferred": 1, "mentioned": 2}
    reqs, seen = [], set()
    for c in sorted(found.values(), key=lambda c: (order[c["priority"]], -c["count"]))[:26]:
        cov = cover_concept(kb, c["id"], near=c["near"], priority=c["priority"])
        if cov["id"] not in seen:
            seen.add(cov["id"])
            reqs.append(cov)
    for phrase in extra_phrases or []:
        hits = kb.concepts(phrase)
        if hits:
            for cid, kind, term in hits:
                cov = cover_concept(kb, cid, near=term if kind == "near" else None, priority="required")
                if cov["id"] not in seen:
                    seen.add(cov["id"])
                    reqs.append(cov)
        elif len(phrase.strip()) > 2:
            cov = cover_concept(kb, phrase.strip(), priority="required")
            if cov["id"] not in seen:
                seen.add(cov["id"])
                reqs.append(cov)

    notes = []
    level = kb.raw["subject"]["level_note"]
    if years and max(years) >= 3:
        notes.append(f"The description asks for {max(years)}+ years. {level}")
    elif sen:
        notes.append(f'The description uses the word "{sen.group(1)}". {level}')
    if not reqs:
        notes.append("No recognizable technical requirements were found. Try passing the requirements section.")
    return summarize(kb, "Job description", reqs, source="jd", notes=notes,
                     closestRole=closest["title"] if closest else None, roleId=closest["id"] if closest else None)
