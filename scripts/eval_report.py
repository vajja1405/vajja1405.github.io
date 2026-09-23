#!/usr/bin/env python3
"""Merge the engine (vitest), API (pytest) and optional live red-team results into the public
evaluation report shown in the workspace's proof lab: evidence/dist/evaluation-report.json.

    cd imw && npx vitest run --reporter=json --outputFile=../evidence/dist/.engine-eval.json
    cd api && python -m pytest -q --junitxml=../evidence/dist/.api-eval.xml
    python scripts/eval_report.py
"""
from __future__ import annotations

import json
import sys
import time
import xml.etree.ElementTree as ET
from collections import OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "evidence" / "dist"

API_GROUPS = [
    ("API: answers must cite verified evidence and grounded numbers", ("unverified", "numbers", "repair", "valid_answer", "pack")),
    ("API: tone and hypothetical separation", ("hype", "hypothetical")),
    ("API: prompt injection, CORS and privacy", ("injection", "cors", "logged", "jd_output")),
    ("API: failure handling and rate limits", ("503", "without_key", "502", "failure", "rate_limit", "budget", "oversized", "health", "bundle")),
]


def engine_suites() -> list[dict]:
    path = DIST / ".engine-eval.json"
    if not path.exists():
        sys.exit("missing engine results; run vitest with the JSON reporter first")
    data = json.loads(path.read_text())
    groups: "OrderedDict[str, list[bool]]" = OrderedDict()
    for f in data["testResults"]:
        for t in f["assertionResults"]:
            name = f"Engine: {t['ancestorTitles'][0] if t['ancestorTitles'] else 'general'}"
            groups.setdefault(name, []).append(t["status"] == "passed")
    return [{"name": k, "passed": sum(v), "total": len(v), "source": "imw/tests/engine.test.ts"} for k, v in groups.items()]


def api_suites() -> list[dict]:
    path = DIST / ".api-eval.xml"
    if not path.exists():
        sys.exit("missing API results; run pytest with --junitxml first")
    cases = ET.parse(path).getroot().iter("testcase")
    groups: "OrderedDict[str, list[bool]]" = OrderedDict((g, []) for g, _ in API_GROUPS)
    for c in cases:
        ok = not any(child.tag in ("failure", "error") for child in c)
        name = c.get("name", "")
        group = next((g for g, keys in API_GROUPS if any(k in name for k in keys)), API_GROUPS[0][0])
        groups[group].append(ok)
    return [{"name": k, "passed": sum(v), "total": len(v), "source": "api/tests/test_api.py"} for k, v in groups.items() if v]


def live_suite() -> list[dict]:
    path = ROOT / "api" / "eval" / ".results.json"
    if not path.exists():
        return []
    res = json.loads(path.read_text())["results"]
    return [{"name": "Live model red-team (deployed API)", "passed": sum(r["passed"] for r in res), "total": len(res), "source": "api/eval/cases.json"}]


def main() -> int:
    suites = engine_suites() + api_suites() + live_suite()
    report = {"generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "suites": suites}
    (DIST / "evaluation-report.json").write_text(json.dumps(report, indent=2))
    passed, total = sum(s["passed"] for s in suites), sum(s["total"] for s in suites)
    for s in suites:
        print(f"{'PASS' if s['passed'] == s['total'] else 'FAIL'} {s['passed']:>3}/{s['total']:<3} {s['name']}")
    print(f"{passed}/{total} evaluation cases passing")
    return 0 if passed == total else 1


if __name__ == "__main__":
    sys.exit(main())
