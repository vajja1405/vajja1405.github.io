"""Evidence index for the API. Same bundle and the same statability rule as the browser engine."""
from __future__ import annotations

import json
import math
import re
import unicodedata
from dataclasses import dataclass, field
from functools import lru_cache
from pathlib import Path

BUNDLE = Path(__file__).with_name("evidence.json")

STOP = set(
    "a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its "
    "me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where "
    "which who why will with would you your about any some him s project projects work".split()
)


def normalize(s: str) -> str:
    s = unicodedata.normalize("NFKD", s.lower())
    s = "".join(ch for ch in s if not unicodedata.combining(ch))
    s = s.replace("–", "-").replace("—", "-").replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    return re.sub(r"\s+", " ", s).strip()


def stem(t: str) -> str:
    if len(t) <= 4:
        return t
    for suf in ("ations", "ation", "ings", "ing", "ers", "ed", "es", "ly", "s"):
        if t.endswith(suf) and len(t) - len(suf) >= 4:
            return t[: -len(suf)]
    return t


def tokens(s: str) -> list[str]:
    raw = re.split(r"[\s/]+", re.sub(r"[^a-z0-9+#/. -]", " ", normalize(s)))
    return [stem(t.strip(".-")) for t in raw if len(t.strip(".-")) > 1 and t.strip(".-") not in STOP]


def statable(c: dict) -> bool:
    return c.get("status") == "verified" and bool(c.get("public_safe"))


@dataclass
class KB:
    raw: dict
    claims: dict[str, dict] = field(default_factory=dict)
    entities: dict[str, dict] = field(default_factory=dict)
    skills: dict[str, dict] = field(default_factory=dict)
    gaps: dict[str, dict] = field(default_factory=dict)
    aliases: list[tuple[re.Pattern, str, str, str]] = field(default_factory=list)  # (regex, concept id, kind, term)
    docs: list[tuple[dict, list[str]]] = field(default_factory=list)
    df: dict[str, int] = field(default_factory=dict)
    avg_len: float = 1.0

    @property
    def statable_ids(self) -> set[str]:
        return {cid for cid, c in self.claims.items() if statable(c)}

    def concepts(self, text: str) -> list[tuple[str, str, str]]:
        """Greedy longest-match concept detection: (concept id, kind skill|gap|near, matched term)."""
        t, taken, first = normalize(text), [], {}
        for rx, cid, kind, term in self.aliases:
            for m in rx.finditer(t):
                s, e = m.span()
                if any(s < y and e > x for x, y in taken):
                    continue
                taken.append((s, e))
                first.setdefault((cid, kind, term if kind == "near" else ""), s)
        return sorted(first, key=first.get)

    def retrieve(self, query: str, limit: int = 14, boost_entities: set[str] | None = None) -> list[dict]:
        q = set(tokens(query))
        concepts = {cid for cid, kind, _ in self.concepts(query) if kind == "skill"}
        ents = boost_entities or set()
        n, k1, b = len(self.docs), 1.2, 0.75
        scored = []
        for claim, toks in self.docs:
            s = 0.0
            for term in q:
                f = toks.count(term)
                if not f:
                    continue
                df = self.df.get(term, 0)
                idf = math.log(1 + (n - df + 0.5) / (df + 0.5))
                s += idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * len(toks) / self.avg_len))
            s += 2.5 * sum(1 for t in claim["tags"] if t in concepts)
            if claim["entity"] in ents:
                s += 3
            if claim.get("kind") == "limitation":
                s *= 0.8
            if s > 0:
                scored.append((s, claim))
        scored.sort(key=lambda x: -x[0])
        return [c for _, c in scored[:limit]]


ENTITY_ALIASES = {
    "dia": ["drug interaction", "drug-interaction", "drug agent", "interaction agent", "medication", "rxnorm", "dailymed", "label review"],
    "voice": ["voice harness", "voice-agent", "voice qa", "qa harness", "pretty good ai", "synthetic patient", "harness", "barge-in", "barge in"],
    "cliniq": ["cliniq", "clin iq", "substance", "research-a-thon", "nsf"],
    "sssd": ["surgical", "ss-sd", "kinematic", "jigsaws", "video synthesis", "diffusion research"],
    "qml": ["quantum", "qcnn", "qsvm", "chest x-ray"],
    "tifin": ["tifin", "copilot", "advisor"],
    "citizen": ["citizen health", "citizen"],
    "athena": ["athena"],
    "nyc": ["citi bike", "bike share", "smartinternz"],
    "dac": ["data analytics club", "student club", "vice president"],
    "imw": ["interview my work", "this assistant", "this tool", "this chatbot", "how were you built", "this system"],
}


def find_entities(text: str) -> set[str]:
    t = normalize(text)
    return {eid for eid, al in ENTITY_ALIASES.items() if any(re.search(rf"(?<![a-z0-9]){re.escape(a)}", t) for a in al)}


def alias_regex(term: str) -> re.Pattern:
    return re.compile(rf"(?<![a-z0-9]){re.escape(normalize(term))}(?![a-z0-9+#])")


@lru_cache(maxsize=1)
def load_kb(path: str = str(BUNDLE)) -> KB:
    raw = json.loads(Path(path).read_text(encoding="utf-8"))
    kb = KB(raw=raw)
    kb.claims = {c["id"]: c for c in raw["claims"]}
    kb.entities = {e["id"]: e for e in raw["entities"]}
    kb.skills = {s["id"]: s for s in raw["skills"]}
    kb.gaps = {g["id"]: g for g in raw["gaps"]}
    aliases = []
    for s in raw["skills"]:
        for a in [s["name"], *s["aliases"]]:
            aliases.append((normalize(a), s["id"], "skill"))
        for a in s.get("near", []):
            aliases.append((normalize(a), s["id"], "near"))
    for g in raw["gaps"]:
        for a in g["aliases"]:
            aliases.append((normalize(a), g["id"], "gap"))
    aliases.sort(key=lambda x: -len(x[0]))
    kb.aliases = [(alias_regex(a), cid, kind, a) for a, cid, kind in aliases if a]
    for c in raw["claims"]:
        if not statable(c):
            continue
        extra = " ".join([kb.entities.get(c["entity"], {}).get("name", "")] + [kb.skills.get(t, {}).get("name", "") for t in c["tags"]])
        toks = tokens(f"{c['text']} {extra}")
        kb.docs.append((c, toks))
        for t in set(toks):
            kb.df[t] = kb.df.get(t, 0) + 1
    kb.avg_len = sum(len(t) for _, t in kb.docs) / max(1, len(kb.docs))
    return kb
