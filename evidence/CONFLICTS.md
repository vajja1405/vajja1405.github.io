# Source conflicts found while building the evidence layer

Checked on 2026-09-23 against the live site, résumé v2, `Target_Roles_20.md`, and the project repositories at the commits pinned in `meta.json`.
Until these are resolved, the assistant does **not** state the disputed statement. It says the figure is unverified.

| Topic | Résumé v2 says | What the source shows | Status in `claims.json` |
|---|---|---|---|
| TIFIN +19% / +24% | "+19% recommendation accuracy, +24% F1" | Site: the gains need confirmation; the three models are intent classification, entity extraction and retrieval ranking (no recommender) | `tifin.gains` → verification_required |
| Citizen Health scale | 5,000+ patients, 10,000+ records, 6 sources, 300+ eval cases, 6-person team | Target-roles analysis: withdrawn as guesses. The site shows no numbers | `citizen.metrics` → deprecated |
| Athena +15% | "+15% instruction quality across 20+ workflows" | Target-roles analysis: no confirmed numerical improvement | `athena.gain` → unsupported |
| Drug agent "GPT-4o fallback" | 4th severity tier is a GPT-4o fallback | Repo: the 4th tier is `Unknown`; the LLM writes explanations only; hosted model is Qwen3-4B; config default is gpt-4o-mini | `dia.gpt4o` → unsupported |
| Drug agent latency | "20+ s → under 100 ms with Redis" | Repo: one smoke check, 5.8 s → 0.25 ms (n=1); Redis optional with an LRU fallback; no 20 s baseline recorded | `dia.latency_20s` → verification_required (`dia.cache_smoke` states the measured values) |
| Surgical synthesis metrics | PSNR 19–22 dB, SSIM 0.61–0.74 | Not in the repo or on the site | `sssd.metric_values` → verification_required |
| QCNN "5× faster" | Stated as a result | Repo README: lacks run metadata; should not be advertised | `qml.speedup` → verification_required |
| Hack-A-Roo 3rd place | Listed | Removed from the current site | `award.hackaroo` → verification_required |
| IBM ML certificate | Not listed | Site: "In progress" | `edu.ibm` → verification_required |
| ClinIQ "52,184 patient records" | "52,184 public drug reviews" | Site and repo agree: public review rows, not patient records; $27.5M–$60M labelled as a scenario | No conflict. The outside review's concern was already fixed on the site |

## How to resolve one

1. Find the artifact that supports it (a results file, commit, dashboard screenshot, or manager-approved number).
2. In `evidence/claims.json`, set `"status": "verified"` and `"public_safe": true`, add the source to `evidence/meta.json` → `sources`, and cite it.
3. Run `cd imw && npm run build` (validates the bundle and rebuilds). CI fails if the bundle, site figures, or code links drift.
