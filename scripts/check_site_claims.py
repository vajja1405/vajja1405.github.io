#!/usr/bin/env python3
"""Detect drift between the portfolio page and the evidence database.

Every figure shown on index.html (counts, percentages, metrics, money) must appear in a claim in
the evidence database, or be listed in scripts/site_figures_allowlist.json with a reason. A new
figure on the page that nothing supports fails CI, so the site and the assistant cannot
silently disagree.

    python scripts/check_site_claims.py
"""
from __future__ import annotations

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIGURE = re.compile(r"(?<![A-Za-z]-)\$?\.?\d[\d,]*(?:\.\d+)?(?:\s?(?:%|M|K|ms|s)\b|\+)?")


def visible_text(page: str) -> str:
    page = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", page, flags=re.S | re.I)
    page = re.sub(r"<[^>]+>", " ", page)
    return re.sub(r"\s+", " ", html.unescape(page))


def norm(f: str) -> str:
    f = f.replace(",", "").replace(" ", "").lstrip("$").rstrip("+")
    return "0" + f if f.startswith(".") else f


def ignorable(raw: str, f: str) -> bool:
    digits = re.sub(r"\D", "", f)
    return (len(digits) < 2                      # single digits: counts and list numbering
            or re.fullmatch(r"0\d", raw.strip()) is not None  # section numbers 01, 02 …
            or re.fullmatch(r"(19|20)\d\d", f) is not None)   # years


def main() -> int:
    page = visible_text((ROOT / "index.html").read_text(encoding="utf-8"))
    bundle = json.loads((ROOT / "evidence/dist/evidence.json").read_text(encoding="utf-8"))
    allow = json.loads((ROOT / "scripts/site_figures_allowlist.json").read_text(encoding="utf-8"))
    corpus = " ".join(c["text"] + " " + " ".join(m["value"] for m in c.get("metrics", [])) for c in bundle["claims"])
    known = {norm(m.group()) for m in FIGURE.finditer(corpus)}
    verified = {norm(m.group()) for c in bundle["claims"] if c["status"] == "verified"
                for m in FIGURE.finditer(c["text"] + " " + " ".join(x["value"] for x in c.get("metrics", [])))}
    allowed = {norm(k) for k in allow}

    problems, seen = [], set()
    for m in FIGURE.finditer(page):
        f = norm(m.group())
        if not f or f in seen or ignorable(m.group(), f):
            continue
        seen.add(f)
        ctx = page[max(0, m.start() - 60): m.end() + 60].strip()
        if f in allowed:
            continue
        if f not in known:
            problems.append(f"'{m.group()}' is not in any evidence claim  …{ctx}…")
        elif f not in verified:
            # An unverified figure may appear on the page only alongside an explicit caveat.
            wide = page[max(0, m.start() - 200): m.end() + 200]
            if not re.search(r"(need|needs|require|requires)\s+confirmation|verification|not measured|scenario", wide, re.I):
                problems.append(f"'{m.group()}' matches only an unverified claim  …{ctx}…")
    for p in problems:
        print("DRIFT", p)
    print(f"{len(seen)} figures checked on index.html; {len(problems)} unsupported")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
