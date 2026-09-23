#!/usr/bin/env python3
"""Stamp a content hash into index.html's Interview My Work loader so browsers pick up new builds.

    python scripts/stamp_version.py          # rewrite the version
    python scripts/stamp_version.py --check  # fail if index.html is out of date
"""
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FILES = [ROOT / "assets/imw/imw.js", ROOT / "assets/imw/imw.css", ROOT / "evidence/dist/evidence.json"]
INDEX = ROOT / "index.html"
PATTERN = re.compile(r"var V='[0-9a-z]+'")


def main() -> int:
    digest = hashlib.sha256(b"".join(p.read_bytes() for p in FILES)).hexdigest()[:10]
    html = INDEX.read_text(encoding="utf-8")
    if not PATTERN.search(html):
        print("loader version marker not found in index.html", file=sys.stderr)
        return 1
    updated = PATTERN.sub(f"var V='{digest}'", html, count=1)
    if "--check" in sys.argv:
        if updated != html:
            print("index.html loader version is stale; run scripts/stamp_version.py", file=sys.stderr)
            return 1
        print(f"loader version {digest} is current")
        return 0
    INDEX.write_text(updated, encoding="utf-8")
    print(f"loader version -> {digest}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
