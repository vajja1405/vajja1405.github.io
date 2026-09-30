"""Degrees, years of experience and work arrangements in a job description — a port of imw/src/engine/quals.ts.

They are not skills, so the concept ontology cannot match them: degrees and years are checked against the
subject's credentials, and work-arrangement lines (hybrid, relocation, visa...) are left out of the comparison.
"""
from __future__ import annotations

import re

from .kb import KB

_RANK = {"bachelor": 1, "master": 2, "phd": 3, "mba": 0}
_NAME = {"bachelor": "Bachelor's", "master": "Master's", "phd": "PhD", "mba": "MBA"}
_LEVEL_RES = [
    ("bachelor", re.compile(r"\bbachelor|\b(?:b\.s\.?|b\.sc\.?|bsc|b\.a\.|b\.tech|btech|b\.e\.)(?![a-z])|\b(?:bs|ba)(?=\s*(?:/|or\b|in\b|degree\b|,))|\b(?:undergraduate|college|university|4-year|four-year) degree", re.I)),
    ("master", re.compile(r"\bmaster'?s\b|\bmasters\b|\bmaster of\b|\bmaster degree|\b(?:m\.s\.?|m\.sc\.?|msc|m\.tech|mtech|m\.eng\.?|meng)(?![a-z])|(?<![a-z])ms(?=\s*(?:/|or\b|in\b|degree\b|,|$))|\b(?:graduate|advanced|post-?graduate) degree", re.I)),
    ("phd", re.compile(r"\bph\.? ?d\b|\bdoctorate\b|\bdoctoral\b", re.I)),
    ("mba", re.compile(r"\bmba\b", re.I)),
]
_FIELD = re.compile(r"\b(?:degree|bachelor'?s?|master'?s?|ph\.? ?d|doctorate|bs|ms|ba|b\.s\.?|m\.s\.?|bsc|msc)\s+(?:degree\s+)?in\s+(.+)", re.I)
_FIELD_OK = re.compile(r"computer|computing|quantitative|\bstem\b|technical|math|statistic|data|machine learning|artificial intelligence|\bai\b|information|software|engineering|analytics|related|relevant|equivalent|similar", re.I)
_FIELD_END = re.compile(r"[,;:(]|\s(?:or|and|such as|e\.g|including|preferred|required|with|from|plus)\b", re.I)
_DEGREE_CONTEXT = re.compile(r"\bdegree\b|\brequired\b|\bpreferred\b|\bor equivalent\b|\brelated field\b|\bminimum\b", re.I)

_WORDS = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10}
_YEARS = re.compile(r"\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*(?:(?:-|to)\s*(?:\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*)?(?:years?|yrs?)\b", re.I)
_EXPERIENCE_CONTEXT = re.compile(r"experien|professional|industry|hands-on|track record|working|background|building|developing|shipping|\bas an? ", re.I)

LOGISTICS = re.compile(r"\b(?:hybrid|on-?site|in[- ]office|in[- ]person|remote|days? (?:a|per) week|relocat\w*|visa|sponsorship|work authori[sz]ation|authori[sz]ed to work|citizenship|security clearance|clearance|background check|drug (?:test|screen)\w*|travel|salary|compensation|pay range|benefits|401\(?k\)?|pto|paid time off|shifts?|commute|time ?zones?|full[- ]time|part[- ]time|location)\b", re.I)
LOGISTICS_NOTE = ("Work-arrangement items (location, schedule, travel, authorization) are not skills, so they are left out of this "
                  "comparison. Ask Rahul about them directly.")


def _clean(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[–—]", "-", re.sub(r"[’‘`]", "'", s))).strip()


def _join_or(xs: list[str]) -> str:
    return xs[0] if len(xs) < 2 else f"{', '.join(xs[:-1])} or {xs[-1]}"


def _degree_levels(s: str) -> list[str]:
    levels = [lvl for lvl, rx in _LEVEL_RES if rx.search(s)]
    # "MBA or MS": the MBA alternative adds nothing once another degree is accepted.
    return [lvl for lvl in levels if lvl != "mba"] if len(levels) > 1 else levels


def _degree_coverage(kb: KB, s: str, priority: str | None) -> dict | None:
    levels = _degree_levels(s)
    creds = kb.raw["subject"].get("credentials")
    if not levels or not creds:
        return None
    f = _FIELD.search(s)
    field_text = f.group(1) if f else ""
    field = " ".join(re.sub(r"^(?:a|an|the)\s+", "", _FIELD_END.split(field_text)[0], flags=re.I).split(" ")[:5]).strip()
    last = levels[-1]
    label = f"{_join_or([_NAME[lvl] for lvl in levels])}{'' if last in ('phd', 'mba') else ' degree'}{f' in {field}' if field else ''}"
    lowest = min(_RANK[lvl] for lvl in levels)
    held = sorted(creds["degrees"], key=lambda d: _RANK[d["level"]])
    meets = [d for d in held if _RANK[d["level"]] >= lowest] if lowest > 0 else []
    base = {"id": f"degree:{'+'.join(levels)}", "label": label, "priority": priority, "entities": ["education"], "strength": "self_reported"}
    if meets:
        statement = f"Holds {' and '.join(d['short'] for d in reversed(held))}."
        off_field = bool(field) and not _FIELD_OK.search(field_text)
        return {**base, "category": "related" if off_field else "direct", "claims": [d["claim"] for d in meets],
                "statement": f"{statement} Both are in {creds['fields']}; the description names a different field." if off_field else statement}
    top = held[-1]
    want = " or ".join("a PhD" if lvl == "phd" else "an MBA" if lvl == "mba" else _NAME[lvl] for lvl in levels)
    return {**base, "category": "missing", "claims": [top["claim"]], "statement": f"His highest degree is {top['short']}; he does not hold {want}."}


def _years_coverage(kb: KB, s: str, priority: str | None) -> dict | None:
    m = _YEARS.search(s)
    exp = (kb.raw["subject"].get("credentials") or {}).get("experience")
    if not m or not exp:
        return None
    n = int(m.group(1)) if m.group(1).isdigit() else _WORDS.get(m.group(1).lower(), 0)
    if n < 1 or n > 29:
        return None
    text = re.split(r"[.;(]|,\s", s[m.start():])[0][:70].strip()
    label = text[:1].upper() + text[1:]
    have = exp["years"]
    category = "direct" if n <= have else "related" if n == have + 1 else "missing"
    lead = f"{have}+ years of professional ML and data-science experience"
    statement = (f"{lead}: {exp['summary']}." if category == "direct"
                 else f"{lead}, close to the {n}+ asked for. Roles: {exp['summary']}." if category == "related"
                 else f"{lead}, short of the {n}+ years asked for. Roles: {exp['summary']}.")
    entities = list(dict.fromkeys(kb.claims[c]["entity"] for c in exp["claims"] if c in kb.claims))
    return {"id": f"years:{n}", "label": label, "category": category, "priority": priority, "claims": list(exp["claims"]),
            "entities": entities, "strength": "self_reported", "statement": statement}


def qualifications(kb: KB, text: str, priority: str | None, strict: bool = False) -> list[dict]:
    """Degree and years-of-experience requirements in one line or phrase. `strict` (free text outside a requirements
    section) needs extra context, so "our founders hold PhDs" or "founded 20 years ago" is not read as a requirement."""
    out = []
    for clause in re.split(r";\s|\.\s+(?=[A-Z])", _clean(text)):
        if not strict or _DEGREE_CONTEXT.search(clause):
            d = _degree_coverage(kb, clause, priority)
            if d:
                out.append(d)
        if not strict or _EXPERIENCE_CONTEXT.search(clause):
            y = _years_coverage(kb, clause, priority)
            if y:
                out.append(y)
    return out
