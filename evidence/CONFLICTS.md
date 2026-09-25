# Source conflicts found while building the evidence layer

First checked on 2026-09-23 against the live site, résumé v2, `Target_Roles_20.md`, and the project repositories at the commits pinned in `meta.json`. Resolved with Rahul on 2026-09-24 against the Codex project notes, the repositories and the QCNN paper.
Items still **open** are never stated by the assistant, the PDF or the MCP server.

| Topic | Résumé v2 says | What the source shows | Status |
|---|---|---|---|
| TIFIN +19% / +24% | "+19% recommendation accuracy, +24% F1" | Confirmed by Rahul; employer baselines are internal | Resolved: `tifin.gains` verified · self-reported |
| Citizen Health scale | 5,000+ patients, 10,000+ records, 6 sources, 300+ eval cases, 6-person team | Rahul described these as guesses; `CITIZEN_HEALTH_NUMBERS_TO_FIND.md` lists where to find real ones | **Open**: `citizen.metrics` deprecated |
| Athena +15% | "+15% instruction quality across 20+ workflows" | No figure supplied | **Open**: `athena.gain` unsupported |
| Drug agent "GPT-4o fallback" | 4th severity tier is a GPT-4o fallback | Repo: the 4th tier is `Unknown`; the LLM writes explanations only (hosted Qwen3-4B, config default gpt-4o-mini) | **Open** for the résumé wording; the site states the implemented tiers |
| Drug agent latency | "20+ s → under 100 ms with Redis" | Repo: hosted check 5.8 s → 0.25 ms; no 20 s baseline anywhere | Resolved: `dia.cache_smoke` states the measured values; `dia.latency_20s` deprecated |
| Surgical synthesis metrics | PSNR 19–22 dB, SSIM 0.61–0.74 | Confirmed by Rahul; README documents the VAE ceiling (~24–27 dB) above the generator | Resolved: `sssd.metric_values` verified · self-reported, `sssd.vae_ceiling` public |
| QCNN "5× faster" | Stated as a result | Public README states it; the paper has a training-cost comparison | Resolved: `qml.speedup` verified, with the CNN's accuracy lead stated alongside |
| Hack-A-Roo | "3rd place, Quantum Computing" | Rahul: incorrect; he guided a team to 2nd place in the AI Agents track | Resolved: `award.hackaroo` corrected; résumé v2 updated |
| IBM ML certificate | Not listed | Not one of Rahul's certificates | Resolved: removed from the site; `edu.ibm` deprecated |
| ClinIQ corpus | "52,184 public drug reviews" | Repo: Kaggle UCI Drug Review dataset (Drugs.com reviews) | No conflict; dataset now named |

## How to resolve one

1. Find the artifact that supports it (a results file, commit, dashboard screenshot, or manager-approved number).
2. In `evidence/claims.json`, set `"status": "verified"` and `"public_safe": true`, add the source to `evidence/meta.json` → `sources`, and cite it.
3. Run `cd imw && npm run build` (validates the bundle and rebuilds). CI fails if the bundle, site figures, or code links drift.
