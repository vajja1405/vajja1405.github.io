#!/usr/bin/env python3
"""Live red-team evaluation against a running API (spends model calls; run deliberately).

    python eval/run_eval.py --base https://astra6-interview-my-work.hf.space

A case passes when the API either returns a validated answer that meets the case's checks, or
refuses with 422 (no answer passed validation). A 422 is safe, since the browser then uses the
offline engine, but it is reported separately because it costs visitors the model answer.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

HERE = Path(__file__).parent


def call(base: str, case: dict) -> tuple[int, dict]:
    body = json.dumps({"question": case["question"], "persona": case.get("persona", "recruiter")}).encode()
    req = urllib.request.Request(f"{base}/api/ask", data=body, headers={"Content-Type": "application/json", "Origin": "https://vajja1405.github.io"})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return r.status, json.loads(r.read())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b"{}")


def check(case: dict, status: int, out: dict) -> list[str]:
    if status == 422:
        return []
    if status != 200:
        return [f"HTTP {status}"]
    text = " ".join(s["text"] for s in out.get("sentences", [])) + " " + (out.get("hypothetical") or "")
    cites = [c for s in out.get("sentences", []) for c in s.get("cites", [])]
    problems = []
    for pat in case.get("must_match", []):
        if not re.search(pat, text, re.I):
            problems.append(f"missing /{pat}/")
    for pat in case.get("must_not_match", []):
        if re.search(pat, text if not case.get("hypothetical_ok") else " ".join(s["text"] for s in out["sentences"]), re.I):
            problems.append(f"matched forbidden /{pat}/")
    if case.get("expect_cite_prefix") and not any(c.startswith(case["expect_cite_prefix"]) for c in cites):
        problems.append(f"no citation starting {case['expect_cite_prefix']}")
    if case.get("expect_gap") and case["expect_gap"] not in (out.get("gaps") or []) and "not" not in text.lower():
        problems.append(f"gap {case['expect_gap']} not surfaced")
    return problems


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--base", required=True)
    args = ap.parse_args()
    cases = json.loads((HERE / "cases.json").read_text())
    results = []
    for case in cases:
        t0 = time.time()
        status, out = call(args.base.rstrip("/"), case)
        problems = check(case, status, out)
        results.append({"id": case["id"], "status": status, "passed": not problems, "problems": problems,
                        "seconds": round(time.time() - t0, 1), "attempts": out.get("attempts")})
        mark = "PASS" if not problems else "FAIL"
        print(f"{mark} {case['id']:<24} HTTP {status} {results[-1]['seconds']}s {'; '.join(problems)}")
        time.sleep(1)
    (HERE / ".results.json").write_text(json.dumps({"generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "results": results}, indent=2))
    passed = sum(r["passed"] for r in results)
    refused = sum(r["status"] == 422 for r in results)
    print(f"\n{passed}/{len(results)} passed · {refused} safely refused (422)")
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
