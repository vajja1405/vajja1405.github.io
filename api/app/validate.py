"""Validation of model output before anything reaches a visitor.

An answer is rejected unless every sentence cites claims from the evidence pack, every cited
claim is verified and public-safe, every number it states appears in the claims it cites, it
contains no ranking or praise language, and any hypothetical design is kept out of the claims
about Rahul.
"""
from __future__ import annotations

import re
from dataclasses import dataclass, field

# Mirrors imw/src/engine/guard.ts
HYPE = re.compile(
    r"\b(perfect (fit|candidate|match)|ideal candidate|exceptional|outstanding|top candidate|rock ?star|world[- ]class|genius|"
    r"best candidate|excellent fit|great fit|strong fit|perfect|10\s?/\s?10|\d{1,3}\s?%\s?(match|fit)|match score|fit score|"
    r"highly recommend|must hire|unmatched|brilliant|superstar)\b",
    re.I,
)
INJECTION = re.compile(
    r"(ignore (all |any |your |the )?(previous|prior|above|earlier) (instructions|prompts?|rules)|system prompt|developer (message|prompt)|"
    r"you are now|pretend (to be|you are)|act as (a|an|if)|jailbreak|reveal (your|the) (prompt|instructions|rules)|"
    r"print (your|the) (instructions|prompt)|disregard (your|the|all)|override (your|the) (rules|instructions)|\bdan mode\b)",
    re.I,
)
NUMBER = re.compile(r"\$?\d[\d,]*(?:\.\d+)?")
CLAIMS_ABOUT_RAHUL = re.compile(r"\b(rahul|he|his)\b[^.]{0,40}\b(built|implemented|deployed|shipped|owned|designed|ran|led|created)\b", re.I)


@dataclass
class Result:
    ok: bool
    errors: list[str] = field(default_factory=list)

    @property
    def checks(self) -> list[dict]:
        return [
            {"label": "Every sentence cites verified, public-safe claims", "ok": not any(e.startswith("cite") for e in self.errors)},
            {"label": "Every number appears in the cited evidence", "ok": not any(e.startswith("number") for e in self.errors)},
            {"label": "No fit scores, rankings or praise", "ok": not any(e.startswith("tone") for e in self.errors)},
            {"label": "Hypotheticals kept separate from claims", "ok": not any(e.startswith("hypothetical") for e in self.errors)},
        ]


def _num_forms(s: str) -> set[str]:
    out = set()
    for m in NUMBER.findall(s):
        n = m.lstrip("$").replace(",", "").rstrip(".")
        if n:
            out.add(n)
            if "." in n:
                out.add(n.rstrip("0").rstrip("."))
                if n.startswith("0."):
                    out.add(n[1:])  # 0.854 <-> .854
            elif n.startswith("."):
                out.add("0" + n)
    return out


def validate_answer(ans: dict, pack_ids: set[str], statable_ids: set[str], gap_ids: set[str], entity_ids: set[str],
                    claim_text: dict[str, str]) -> Result:
    errors: list[str] = []
    sentences = ans.get("sentences")
    if not isinstance(sentences, list) or not 1 <= len(sentences) <= 8:
        return Result(False, ["schema: 1-8 sentences required"])
    for i, s in enumerate(sentences):
        text, cites = s.get("text", ""), s.get("cites", [])
        label = s.get("label") or ""
        if not isinstance(label, str) or len(label) > 80:
            errors.append(f"schema: sentence {i} label invalid")
            label = ""
        if not isinstance(text, str) or not text.strip() or len(text) > 600:
            errors.append(f"schema: sentence {i} text invalid")
            continue
        if not cites:
            # Short framing sentences may omit citations only if they state no figures.
            if NUMBER.search(text) or len(text.split()) > 22:
                errors.append(f"cite: sentence {i} makes a claim without citations")
            continue
        for cid in cites:
            if cid not in pack_ids:
                errors.append(f"cite: sentence {i} cites {cid}, which is not in the evidence pack")
            elif cid not in statable_ids:
                errors.append(f"cite: sentence {i} cites unverified claim {cid}")
        cited_numbers: set[str] = set()
        for cid in cites:
            cited_numbers |= _num_forms(claim_text.get(cid, ""))
        for n in _num_forms(f"{label} {text}"):
            # Counts of one to three ("two paths") are wording, not measurements.
            if n not in cited_numbers and n not in {"1", "2", "3"}:
                errors.append(f"number: sentence {i} states {n}, which its citations do not contain")
    hypo = ans.get("hypothetical")
    if hypo:
        if CLAIMS_ABOUT_RAHUL.search(hypo):
            errors.append("hypothetical: attributes hypothetical work to Rahul")
        if len(hypo) > 700:
            errors.append("hypothetical: too long")
    for g in ans.get("gaps") or []:
        if g not in gap_ids:
            errors.append(f"schema: unknown gap {g}")
    for e in ans.get("entities") or []:
        if e not in entity_ids:
            errors.append(f"schema: unknown entity {e}")
    all_text = " ".join([f"{s.get('label') or ''} {s.get('text', '')}" for s in sentences] + [hypo or ""] + (ans.get("followups") or []))
    if HYPE.search(all_text):
        errors.append("tone: ranking or praise language")
    return Result(not errors, errors)



def validate_requirements(items: object) -> list[str]:
    if not isinstance(items, list):
        return []
    out = []
    for x in items[:30]:
        if isinstance(x, str) and 1 < len(x.strip()) <= 80 and not INJECTION.search(x):
            out.append(x.strip())
    return out
