# Interview My Work

An evidence-gated AI workspace layered onto the static portfolio. The page itself loads a ~1 KB
loader; everything here is lazy-loaded when a visitor opens the workspace.

```
index.html (GitHub Pages)
  └─ loader ─ import('assets/imw/imw.js')      ← built from imw/src (Preact + TypeScript)
       ├─ evidence/dist/evidence.json          ← built from evidence/*.json by scripts/build_evidence.py
       ├─ in-browser evidence engine           ← answers, role coverage, JD parsing, X-Ray, map, replays
       └─ optional API (Hugging Face Space)    ← api/: Claude writes prose; validator gates every answer
                                                  also serves /mcp: the same evidence for external AI clients
```

- **Evidence first.** Only `verified` + `public_safe` claims can be stated. Everything else is held back
  and explained (`evidence/CONFLICTS.md`).
- **No scores.** Role and job-description analysis classify each requirement as direct evidence, related
  evidence, verification required, or not currently demonstrated.
- **Fails soft.** If the API is asleep, rate-limited, or returns an answer that fails validation, the
  offline engine answers. If the module itself fails to load, the portfolio is unaffected.

## Commands

```bash
npm ci
npm run build   # validate evidence → typecheck → bundle to ../assets/imw → stamp loader version
npm test        # engine evaluation suite
npm run eval    # engine + API suites → ../evidence/dist/evaluation-report.json (shown in the proof lab)
npm run lint
```

From the repository root:

```bash
python scripts/check_site_claims.py                  # every figure on index.html is backed by evidence
python scripts/verify_code_refs.py --repos-dir /tmp/repos --clone   # every code link resolves at its commit
```

## Updating evidence

Edit `evidence/*.json`, then `npm run build`. Code links are pinned to commits in `evidence/meta.json`
(`repos`); bump a SHA there when you want links to point at newer code, then re-run the code-reference check.
