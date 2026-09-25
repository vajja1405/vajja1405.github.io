#!/usr/bin/env python3
"""Validate the evidence sources and write one bundle for the browser and the API.

    python scripts/build_evidence.py            # validate + write bundles
    python scripts/build_evidence.py --check    # validate + fail if bundles are stale

Every reference is checked: claim -> entity/skills/sources/code repos, stories and
architectures -> claims, roles -> skills/gaps/entities. Claims that are not
`verified` must not be `public_safe`, so they can never be stated as fact.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "evidence"
OUTPUTS = [ROOT / "evidence" / "dist" / "evidence.json", ROOT / "api" / "app" / "evidence.json"]

STATUSES = {"verified", "verification_required", "unsupported", "deprecated"}
STRENGTHS = {"public_artifact", "self_reported", "resume_only"}
KINDS = {"fact", "metric", "limitation"}
GITHUB_OWNER = "vajja1405"

sys.path.insert(0, str(ROOT / "api"))
from app.validate import HYPE, _num_forms  # noqa: E402  (one source of truth for tone and number grounding)

CONTRACT = re.compile(r"\bcontract(s|ed|or)?\b", re.I)


def check_topics(topics: list[dict], claims: dict, entity_ids: set[str], failure_ids: set[str], errors: list[str]) -> None:
    """Written answers must obey the same rules as model answers: statable citations only, every
    number grounded in the claims cited next to it, and no ranking, praise or "contract" wording."""
    ids = {t["id"] for t in topics}
    statable = {cid for cid, c in claims.items() if c["status"] == "verified" and c.get("public_safe")}

    def text_ok(owner: str, text: str, cites: list[str]) -> None:
        for cid in cites:
            if cid not in claims:
                errors.append(f"{owner}: unknown claim {cid}")
            elif cid not in statable:
                errors.append(f"{owner}: cites unverified claim {cid}")
        grounded: set[str] = set()
        for cid in cites:
            grounded |= _num_forms(claims.get(cid, {}).get("text", ""))
        for n in _num_forms(text):
            if n not in grounded and n not in {"1", "2", "3"}:
                errors.append(f"{owner}: states {n}, which its citations do not contain")
        if HYPE.search(text):
            errors.append(f"{owner}: ranking or praise language")
        if CONTRACT.search(text):
            errors.append(f"{owner}: says 'contract'")

    for t in topics:
        tid = t["id"]
        for field in ("title", "match", "lead", "entities", "followups"):
            if field not in t:
                errors.append(f"topic {tid}: missing {field}")
        for pat in t.get("match", []):
            try:
                re.compile(pat)
            except re.error as e:
                errors.append(f"topic {tid}: bad pattern {pat!r} ({e})")
        for ref in ("points_from", "takeaway_from", "why_from"):
            if t.get(ref) and t[ref] not in ids:
                errors.append(f"topic {tid}: {ref} points at unknown topic {t[ref]}")
        if "points" not in t and not t.get("points_from"):
            errors.append(f"topic {tid}: needs points or points_from")
        lead = t.get("lead", {})
        text_ok(f"topic {tid} lead", lead.get("text", ""), lead.get("cites", []))
        for i, pt in enumerate(t.get("points", [])):
            text_ok(f"topic {tid} point {i}", f"{pt['label']} {pt['text']}", pt.get("cites", []))
            if not pt.get("cites"):
                errors.append(f"topic {tid} point {i}: every point needs a citation")
        if t.get("takeaway"):
            text_ok(f"topic {tid} takeaway", t["takeaway"]["text"], t["takeaway"].get("cites", []))
        if t.get("why"):
            text_ok(f"topic {tid} why", t["why"], [])
        if t.get("plain"):
            text_ok(f"topic {tid} plain", t["plain"], [])
        for e in t.get("entities", []):
            if e not in entity_ids:
                errors.append(f"topic {tid}: unknown entity {e}")
        for f in t.get("failures", []):
            if f not in failure_ids:
                errors.append(f"topic {tid}: unknown failure {f}")


def load(name: str):
    return json.loads((SRC / f"{name}.json").read_text(encoding="utf-8"))


def code_url(repos: dict, ref: dict) -> str:
    repo = repos[ref["repo"]]
    url = f"https://github.com/{GITHUB_OWNER}/{repo['name']}/blob/{repo['sha']}/{ref['path']}"
    if ref.get("lines"):
        a, b = ref["lines"]
        url += f"#L{a}-L{b}"
    return url


def build() -> tuple[dict, list[str]]:
    meta = load("meta")
    entities = load("entities")
    skills_doc = load("skills")
    claims = load("claims")
    stories = load("stories")
    archs = load("architectures")
    replays = load("replays")
    roles = load("roles")
    conflicts = load("conflicts")
    topics = load("topics")

    errors: list[str] = []
    repos = meta["repos"]
    source_ids = {s["id"] for s in meta["sources"]}
    entity_ids = {e["id"] for e in entities}
    skill_ids = {s["id"] for s in skills_doc["skills"]}
    gap_ids = {g["id"] for g in skills_doc["gaps"]}
    group_ids = {g["id"] for g in skills_doc["groups"]}

    def dupes(items, label):
        seen = set()
        for i in items:
            if i in seen:
                errors.append(f"duplicate {label} id: {i}")
            seen.add(i)

    dupes([s["id"] for s in meta["sources"]], "source")
    dupes([e["id"] for e in entities], "entity")
    dupes([s["id"] for s in skills_doc["skills"]] + [g["id"] for g in skills_doc["gaps"]], "skill/gap")
    dupes([c["id"] for c in claims], "claim")

    # Aliases must resolve to exactly one concept, or JD parsing becomes ambiguous.
    alias_owner: dict[str, str] = {}
    for concept in skills_doc["skills"] + skills_doc["gaps"]:
        for alias in concept.get("aliases", []) + concept.get("near", []):
            key = alias.lower()
            if key in alias_owner and alias_owner[key] != concept["id"]:
                errors.append(f"alias '{alias}' used by {alias_owner[key]} and {concept['id']}")
            alias_owner[key] = concept["id"]
        for rel in concept.get("related", []):
            if rel not in skill_ids:
                errors.append(f"{concept['id']}: related skill '{rel}' missing")
    for s in skills_doc["skills"]:
        if s["group"] not in group_ids:
            errors.append(f"skill {s['id']}: unknown group {s['group']}")

    def check_code(owner: str, refs):
        for ref in refs or []:
            if ref.get("repo") not in repos:
                errors.append(f"{owner}: unknown repo {ref.get('repo')}")
                continue
            lines = ref.get("lines")
            if lines and (len(lines) != 2 or lines[0] > lines[1] or lines[0] < 1):
                errors.append(f"{owner}: bad line range {lines}")
            ref["url"] = code_url(repos, ref)

    claim_ids = {c["id"] for c in claims}
    for c in claims:
        cid = c["id"]
        if c["entity"] not in entity_ids:
            errors.append(f"claim {cid}: unknown entity {c['entity']}")
        if c["status"] not in STATUSES:
            errors.append(f"claim {cid}: bad status {c['status']}")
        if c["strength"] not in STRENGTHS:
            errors.append(f"claim {cid}: bad strength {c['strength']}")
        if c.get("kind", "fact") not in KINDS:
            errors.append(f"claim {cid}: bad kind {c.get('kind')}")
        if c["status"] != "verified" and c.get("public_safe"):
            errors.append(f"claim {cid}: only verified claims may be public_safe")
        if c["status"] != "verified" and not c.get("note"):
            errors.append(f"claim {cid}: non-verified claims need a note explaining why")
        for t in c.get("tags", []):
            if t not in skill_ids:
                errors.append(f"claim {cid}: unknown tag {t}")
        for s in c.get("sources", []):
            if s not in source_ids:
                errors.append(f"claim {cid}: unknown source {s}")
        if not c.get("sources"):
            errors.append(f"claim {cid}: no sources")
        check_code(f"claim {cid}", c.get("code"))
        c.setdefault("last_verified", meta["version"])

    def check_claims(owner: str, ids):
        for i in ids or []:
            if i not in claim_ids:
                errors.append(f"{owner}: unknown claim {i}")

    trace_ids = {t["id"] for t in replays["traces"]}
    for kind in ("decisions", "failures", "attacks"):
        for item in stories[kind]:
            if item["entity"] not in entity_ids:
                errors.append(f"{kind} {item['id']}: unknown entity")
            check_claims(f"{kind} {item['id']}", item.get("claims"))
            check_code(f"{kind} {item['id']}", item.get("code"))
            for s in item.get("sources", []):
                if s not in source_ids:
                    errors.append(f"{kind} {item['id']}: unknown source {s}")
            if item.get("trace") and item["trace"] not in trace_ids:
                errors.append(f"{kind} {item['id']}: unknown trace {item['trace']}")

    for a in archs:
        node_ids = {n["id"] for n in a["nodes"]}
        if a["entity"] not in entity_ids:
            errors.append(f"arch {a['id']}: unknown entity")
        for n in a["nodes"]:
            check_claims(f"arch {a['id']}/{n['id']}", n["detail"].get("claims"))
            if not n["detail"].get("claims"):
                errors.append(f"arch {a['id']}/{n['id']}: component has no supporting claim")
        for e in a["edges"]:
            if e[0] not in node_ids or e[1] not in node_ids:
                errors.append(f"arch {a['id']}: edge {e} references a missing node")

    for t in replays["traces"]:
        if t["entity"] not in entity_ids:
            errors.append(f"trace {t['id']}: unknown entity")
        if t.get("dataset") and t["dataset"] not in replays["datasets"]:
            errors.append(f"trace {t['id']}: unknown dataset")

    for r in roles:
        for s in r["requirements"]:
            if s not in skill_ids:
                errors.append(f"role {r['id']}: unknown requirement {s}")
        for g in r.get("gaps", []):
            if g not in gap_ids:
                errors.append(f"role {r['id']}: unknown gap {g}")
        for e in r.get("focus_entities", []):
            if e not in entity_ids:
                errors.append(f"role {r['id']}: unknown entity {e}")

    for cf in conflicts:
        check_claims(f"conflict {cf['id']}", cf.get("claims"))
        if not isinstance(cf.get("open"), bool):
            errors.append(f"conflict {cf['id']}: 'open' must be true or false")

    for e in entities:
        if e.get("repo") and e["repo"] not in repos:
            errors.append(f"entity {e['id']}: unknown repo")

    dupes([t["id"] for t in topics], "topic")
    check_topics(topics, {c["id"]: c for c in claims}, entity_ids, {f["id"] for f in stories["failures"]}, errors)

    bundle = {
        "version": meta["version"],
        "subject": meta["subject"],
        "repos": repos,
        "sources": meta["sources"],
        "personas": meta["personas"],
        "entities": entities,
        "groups": skills_doc["groups"],
        "skills": skills_doc["skills"],
        "gaps": skills_doc["gaps"],
        "claims": claims,
        "decisions": stories["decisions"],
        "failures": stories["failures"],
        "attacks": stories["attacks"],
        "architectures": archs,
        "traces": replays["traces"],
        "datasets": replays["datasets"],
        "roles": roles,
        "conflicts": conflicts,
        "topics": topics,
    }
    return bundle, errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="fail if bundles are out of date")
    args = parser.parse_args()

    bundle, errors = build()
    if errors:
        print("Evidence validation failed:", file=sys.stderr)
        for e in errors:
            print(f"  - {e}", file=sys.stderr)
        return 1

    text = json.dumps(bundle, ensure_ascii=False, separators=(",", ":"), sort_keys=False)
    stale = [p for p in OUTPUTS if not p.exists() or p.read_text(encoding="utf-8") != text]
    if args.check:
        if stale:
            print("Evidence bundles are stale: " + ", ".join(str(p.relative_to(ROOT)) for p in stale), file=sys.stderr)
            print("Run: python scripts/build_evidence.py", file=sys.stderr)
            return 1
    else:
        for p in OUTPUTS:
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(text, encoding="utf-8")

    counts = {s: sum(1 for c in bundle["claims"] if c["status"] == s) for s in sorted(STATUSES)}
    print(f"OK · {len(bundle['claims'])} claims {counts} · {len(bundle['skills'])} skills · "
          f"{len(bundle['gaps'])} gaps · {len(bundle['roles'])} roles · {len(bundle['architectures'])} architectures")
    return 0


if __name__ == "__main__":
    sys.exit(main())
