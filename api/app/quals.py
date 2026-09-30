"""Degrees, years of experience and work arrangements in a job description — a port of imw/src/engine/quals.ts.

They are not skills, so the concept ontology cannot match them: degrees and years are checked against the
subject's credentials, and work-arrangement lines (hybrid, relocation, visa...) are left out of the comparison.
"""
from __future__ import annotations

import re
from datetime import date

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
_DEGREE_CONTEXT = re.compile(r"\bdegree\b|\brequired\b|\bpreferred\b|\bor equivalent\b|\brelated field\b|\bminimum\b|\bgpa\b|\bclass of\b|graduat", re.I)

# Graduation timing, enrollment and GPA: credentials with dates, checked against the degrees' completion months.
_GRAD = re.compile(r"graduat|\bdegree (?:completed|conferred|earned|awarded)\b|\bcompleted (?:a |an |your |their )?(?:bachelor'?s |master'?s |ph\.? ?d |)degree|\bclass of\b|\bnew grad|\brecent grad|\bearly[- ]career\b|\bentry[- ]level\b|within the (?:past|last|previous)", re.I)
_RECENT = re.compile(r"\bnew grad|\brecent(?:ly)? grad|\bearly[- ]career\b|\bentry[- ]level\b", re.I)
_ENROLLED = re.compile(r"\bcurrently (?:enrolled|pursuing|attending)\b|\benrolled (?:in|at) (?:a|an)\b|\bpursuing (?:a|an|your) (?:bachelor|master|degree|ph\.? ?d|ms\b|bs\b|graduate)|\breturning to (?:school|university|college)\b|\bmust be a (?:current )?(?:student|undergraduate|graduate student)\b|\bcurrent (?:students?|undergraduates?)\b", re.I)
_GPA = re.compile(r"\bgpa\b|grade point average", re.I)
_MONTHS = {"jan": 1, "feb": 2, "mar": 3, "apr": 4, "may": 5, "jun": 6, "jul": 7, "aug": 8, "sep": 9, "oct": 10, "nov": 11, "dec": 12,
           "spring": 5, "summer": 8, "fall": 12, "autumn": 12, "winter": 12}
_MONTH_YEAR = re.compile(r"\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?|spring|summer|fall|autumn|winter)\.?,?\s+(20\d{2})\b|\b(0?[1-9]|1[0-2])/(20\d{2})\b", re.I)
_WITHIN = re.compile(r"within the (?:past|last|previous) (\d{1,2}|one|two|three|four|five|six|twelve|eighteen|twenty-four) (months?|years?)", re.I)


def _month_index(y: int, m: int) -> int:
    return y * 12 + (m - 1)

_WORDS = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
          "twelve": 12, "eighteen": 18, "twenty-four": 24}
_YEARS = re.compile(r"\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*(?:(?:-|to)\s*(?:\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*)?(?:years?|yrs?)\b", re.I)
_EXPERIENCE_CONTEXT = re.compile(r"experien|professional|industry|hands-on|track record|working|background|building|developing|shipping|\bas an? ", re.I)

LOGISTICS = re.compile(r"\b(?:hybrid|on-?site|in[- ]office|in[- ]person|remote|days? (?:a|per) week|relocat\w*|visa|sponsorship|work authori[sz]ation|authori[sz]ed to work|citizenship|security clearance|clearance|background check|drug (?:test|screen)\w*|travel|salary|compensation|pay range|benefits|401\(?k\)?|pto|paid time off|shifts?|commute|time ?zones?|full[- ]time|part[- ]time|location)\b", re.I)


def UNASSESSED_NOTE(phrases: list[str]) -> str:  # noqa: N802 - mirrors the TypeScript constant
    return (f"Not assessed: {'; '.join(phrases)}. These didn't match anything in the evidence database, so they are neither "
            "confirmed nor ruled out. Ask Rahul about them.")


LOGISTICS_NOTE = ("Work-arrangement items (location, schedule, travel, authorization) are not skills, so they are left out of this "
                  "comparison. Ask Rahul about them directly.")


def _clean(s: str) -> str:
    """Also drops a leading list marker ("- ", "• ", "1. "), which would otherwise end up in requirement labels."""
    s = re.sub(r"\s+", " ", re.sub(r"[–—]", "-", re.sub(r"[’‘`]", "'", s))).strip()
    return re.sub(r"^(?:[-*•·▪◦]|\d+[.)])\s+", "", s)


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
    # "0-2 years" is an entry-level range: there is no minimum to fall short of.
    if n > 29 or (n < 1 and not re.match(r"^0\s*(?:-|to)", m.group(0))):
        return None
    text = re.split(r"[.;(]|,\s", s[m.start():])[0][:70].strip()
    label = text[:1].upper() + text[1:]
    have = exp["years"]
    category = "direct" if n <= have else "related" if n == have + 1 else "missing"
    lead = f"{have}+ years of professional ML and data-science experience"
    statement = (f"{lead}, which fits the entry-level range asked for. Roles: {exp['summary']}." if n == 0
                 else f"{lead}: {exp['summary']}." if category == "direct"
                 else f"{lead}, close to the {n}+ asked for. Roles: {exp['summary']}." if category == "related"
                 else f"{lead}, short of the {n}+ years asked for. Roles: {exp['summary']}.")
    entities = list(dict.fromkeys(kb.claims[c]["entity"] for c in exp["claims"] if c in kb.claims))
    return {"id": f"years:{n}", "label": label, "category": category, "priority": priority, "claims": list(exp["claims"]),
            "entities": entities, "strength": "self_reported", "statement": statement}


def _grad_window(s: str, today: date) -> tuple[float, float] | None:
    """Completion-month window a phrase asks for, or None when it names no timing constraint."""
    now = _month_index(today.year, today.month)
    dates = []
    for m in _MONTH_YEAR.finditer(s):
        if m.group(1):
            key = m.group(1).lower()
            dates.append(_month_index(int(m.group(2)), _MONTHS.get(key[:3], _MONTHS.get(key))))
        else:
            dates.append(_month_index(int(m.group(4)), int(m.group(3))))
    if len(dates) >= 2:
        return min(dates), max(dates)
    if len(dates) == 1:
        if re.search(r"\b(?:by|before|no later than|prior to|until)\b", s, re.I):
            return 0, dates[0]
        if re.search(r"\b(?:after|since|on or after|from)\b", s, re.I):
            return dates[0], float("inf")
        return dates[0] - 1, dates[0] + 1
    w = _WITHIN.search(s)
    if w:
        k = int(w.group(1)) if w.group(1).isdigit() else _WORDS[w.group(1).lower()]
        return now - k * (12 if "year" in w.group(2).lower() else 1), now + 12
    years = [int(y) for y in re.findall(r"\b(20\d{2})\b", s)]
    if years:
        return _month_index(min(years), 1), _month_index(max(years), 12)
    if _RECENT.search(s):
        return now - 24, now + 12
    return None


def _grad_coverage(kb: KB, s: str, priority: str | None, today: date) -> dict | None:
    creds = kb.raw["subject"].get("credentials")
    if not creds or not _GRAD.search(s):
        return None
    levels = _degree_levels(s)
    ranks = [_RANK[lvl] for lvl in levels if _RANK[lvl] > 0]
    lowest = min(ranks) if ranks else 1
    held = sorted(creds["degrees"], key=lambda d: d["date"])
    eligible = [d for d in held if _RANK[d["level"]] >= lowest]
    win = _grad_window(s, today)

    def at(d: dict) -> int:
        return _month_index(int(d["date"][:4]), int(d["date"][5:7]))

    fits = [d for d in eligible if not win or win[0] <= at(d) <= win[1]]
    text = re.split(r"[;]|\.\s", s)[0][:90].strip()
    label = text[:1].upper() + text[1:]
    # One graduation-timing row per degree level: the job text and the AI parser often phrase the same requirement twice.
    base = {"id": f"grad:{lowest}", "label": label, "priority": priority, "entities": ["education"], "strength": "self_reported"}
    if fits:
        d = fits[-1]
        name = re.sub(r" \(UMKC, \d{4}\)$", "", d["short"])
        when = ", within the window asked for" if win else ""
        return {**base, "category": "direct", "claims": [x["claim"] for x in reversed(fits)],
                "statement": f"Completed {name} at UMKC in {d['when']}{when}."}
    listed = " and ".join(f"{d['when']} ({d['abbr']})" for d in held)
    return {**base, "category": "missing", "claims": [x["claim"] for x in reversed(held)],
            "statement": f"His degrees were completed in {listed}, outside the window asked for."}


def _enrollment_coverage(kb: KB, s: str, priority: str | None) -> dict | None:
    creds = kb.raw["subject"].get("credentials")
    if not creds or not _ENROLLED.search(s):
        return None
    last = sorted(creds["degrees"], key=lambda d: d["date"])[-1]
    return {"id": "enrollment", "label": s[:90][:1].upper() + s[:90][1:], "category": "missing", "priority": priority, "claims": [last["claim"]],
            "entities": ["education"], "strength": "self_reported",
            "statement": f"He completed his {last['abbr']} in {last['when']}, so he is not currently enrolled."}


def _gpa_coverage(kb: KB, s: str, priority: str | None) -> dict | None:
    creds = kb.raw["subject"].get("credentials")
    if not creds or not _GPA.search(s):
        return None
    return {"id": "gpa", "label": s[:90][:1].upper() + s[:90][1:], "category": "verification", "priority": priority,
            "claims": [d["claim"] for d in creds["degrees"]], "entities": ["education"],
            "statement": "His GPA isn't listed in the portfolio. Ask Rahul for it."}


def qualifications(kb: KB, text: str, priority: str | None, strict: bool = False, today: date | None = None) -> list[dict]:
    """Degree and years-of-experience requirements in one line or phrase. `strict` (free text outside a requirements
    section) needs extra context, so "our founders hold PhDs" or "founded 20 years ago" is not read as a requirement."""
    out = []
    today = today or date.today()
    for clause in re.split(r";\s|\.\s+(?=[A-Z])", _clean(text)):
        if not strict or _DEGREE_CONTEXT.search(clause):
            # Enrollment and graduation timing say more than the degree level, so they replace the plain degree check.
            d = _enrollment_coverage(kb, clause, priority) or _grad_coverage(kb, clause, priority, today) or _degree_coverage(kb, clause, priority)
            if d:
                out.append(d)
            g = _gpa_coverage(kb, clause, priority)
            if g:
                out.append(g)
        if not strict or _EXPERIENCE_CONTEXT.search(clause):
            y = _years_coverage(kb, clause, priority)
            if y:
                out.append(y)
    return out
