#!/usr/bin/env python3
"""Check that every "Show me the code" link resolves at its pinned commit.

    python scripts/verify_code_refs.py --repos-dir /path/to/clones

Each project repository must be cloned under --repos-dir using its GitHub name.
For every code reference in the evidence bundle this verifies that the file
exists at the pinned SHA and that the cited line range is inside the file.
References into this repository ("site") are checked against the working tree.
Use --clone to fetch any missing repositories first.
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BUNDLE = ROOT / "evidence" / "dist" / "evidence.json"


def iter_refs(bundle: dict):
    for c in bundle["claims"]:
        for r in c.get("code") or []:
            yield f"claim {c['id']}", r
    for kind in ("decisions", "failures", "attacks"):
        for item in bundle[kind]:
            for r in item.get("code") or []:
                yield f"{kind} {item['id']}", r


def file_lines(repos_dir: Path, repo: dict, path: str) -> int | None:
    if repo["sha"] == "main" and repo["name"] == "vajja1405.github.io":
        p = ROOT / path
        return len(p.read_text(encoding="utf-8").splitlines()) if p.exists() else None
    clone = repos_dir / repo["name"]
    try:
        out = subprocess.run(["git", "-C", str(clone), "show", f"{repo['sha']}:{path}"],
                             capture_output=True, check=True)
    except subprocess.CalledProcessError:
        return None
    return len(out.stdout.decode("utf-8", "replace").splitlines())


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--repos-dir", required=True, type=Path)
    ap.add_argument("--clone", action="store_true", help="clone missing repositories")
    args = ap.parse_args()
    bundle = json.loads(BUNDLE.read_text(encoding="utf-8"))
    repos = bundle["repos"]

    if args.clone:
        args.repos_dir.mkdir(parents=True, exist_ok=True)
        for key, repo in repos.items():
            if key == "site" or (args.repos_dir / repo["name"]).exists():
                continue
            subprocess.run(["git", "clone", "-q", f"https://github.com/vajja1405/{repo['name']}",
                            str(args.repos_dir / repo["name"])], check=True)

    failures, checked = [], 0
    for owner, ref in iter_refs(bundle):
        checked += 1
        n = file_lines(args.repos_dir, repos[ref["repo"]], ref["path"])
        if n is None:
            failures.append(f"{owner}: {ref['repo']}:{ref['path']} not found at pinned commit")
        elif ref.get("lines") and ref["lines"][1] > n:
            failures.append(f"{owner}: {ref['path']} has {n} lines, cited {ref['lines']}")
    for f in failures:
        print("FAIL", f)
    print(f"{checked - len(failures)}/{checked} code references resolve")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
