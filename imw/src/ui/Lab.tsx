import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { useWs, reducedMotion } from '../context';
import { track } from '../analytics';
import { ClaimList, CodeLinks } from './bits';
import { VoiceQualityChart } from './charts';
import { evidenceUrl } from '../evidence-url';

// ---- Trace replay -----------------------------------------------------------------------------

export function TracePlayer({ id, compact }: { id: string; compact?: boolean }) {
  const { kb, go } = useWs();
  const t = kb.traces.find((x) => x.id === id);
  const [shown, setShown] = useState(compact ? 0 : Infinity);
  const timer = useRef<number>();
  useEffect(() => () => clearInterval(timer.current), []);
  if (!t) return null;
  if (t.dataset === 'dia_regression') return <RegressionReplay />;
  const steps = compact ? t.steps.slice(0, 4) : t.steps;
  const play = () => {
    track('replay_played', { trace: t.id });
    if (reducedMotion()) { setShown(Infinity); return; }
    setShown(0);
    clearInterval(timer.current);
    let i = 0;
    timer.current = window.setInterval(() => { i++; setShown(i); if (i >= steps.length) clearInterval(timer.current); }, 520);
  };
  const visible = shown === Infinity ? steps.length : shown;
  return (
    <figure class={`imw-trace${compact ? ' is-compact' : ''}`}>
      <div class="imw-chart-head">
        <strong>{t.title}</strong>
        <div class="imw-row">
          <button class="imw-btn" onClick={play} aria-label={`Replay ${t.title}`}>▶ Replay</button>
          {compact && <button class="imw-mini-link" onClick={() => go('lab', t.id)}>Open in proof lab →</button>}
        </div>
      </div>
      <p class="imw-help">{t.summary}</p>
      <ol class="imw-steps" aria-live="polite">
        {steps.map((s, i) => (
          <li key={i} class={`imw-step is-${s.kind}${i < visible ? ' is-shown' : ''}`} aria-hidden={i >= visible}>
            <span class="imw-step-kind">{s.label}</span>
            {s.quote ? <q>{s.quote}</q> : <span>{s.body}</span>}
            {s.status && <span class={`imw-verdict is-${s.status}`}>{s.status === 'pass' ? '✓ PASS' : s.status === 'fail' ? '✕ FAIL' : '! REVIEW'}</span>}
          </li>
        ))}
      </ol>
      {compact && t.steps.length > steps.length && <p class="imw-help">{t.steps.length - steps.length} more steps in the full replay.</p>}
    </figure>
  );
}

function RegressionReplay() {
  const { kb } = useWs();
  const ds = kb.datasets.dia_regression as { rows: [string, string, string, string, number][]; caveat: string };
  const [n, setN] = useState(ds.rows.length);
  const timer = useRef<number>();
  useEffect(() => () => clearInterval(timer.current), []);
  const run = () => {
    track('replay_played', { trace: 't.dia.regression' });
    if (reducedMotion()) { setN(ds.rows.length); return; }
    setN(0);
    clearInterval(timer.current);
    let i = 0;
    timer.current = window.setInterval(() => { i++; setN(i); if (i >= ds.rows.length) clearInterval(timer.current); }, 70);
  };
  const pass = ds.rows.slice(0, n).filter((r) => r[1] === r[2]).length;
  return (
    <figure class="imw-trace">
      <div class="imw-chart-head">
        <strong>24-pair severity regression · retriever + classifier path</strong>
        <button class="imw-btn" onClick={run}>▶ Re-run from the saved record</button>
      </div>
      <p class="imw-help" aria-live="polite">{n < ds.rows.length ? `Checking ${n}/${ds.rows.length}…` : `${pass}/${ds.rows.length} severities match the authored labels.`}</p>
      <div class="imw-table-wrap is-tall">
        <table class="imw-table">
          <thead><tr><th>Pair</th><th>Expected</th><th>Actual</th><th>Tier</th><th>Conf.</th><th /></tr></thead>
          <tbody>
            {ds.rows.map((r, i) => (
              <tr key={r[0]} class={i < n ? 'is-done' : 'is-wait'}>
                <th scope="row">{r[0]}</th><td>{r[1]}</td><td>{i < n ? r[2] : '…'}</td><td>{r[3]}</td><td>{r[4].toFixed(2)}</td>
                <td>{i < n ? (r[1] === r[2] ? <span class="imw-verdict is-pass">✓</span> : <span class="imw-verdict is-fail">✕</span>) : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p class="imw-note is-warn">{ds.caveat} The final LLM explanation is excluded; this is not a clinical validation.</p>
    </figure>
  );
}

// ---- Break it ---------------------------------------------------------------------------------

export function AttackCard({ id }: { id: string }) {
  const { kb, go } = useWs();
  const a = kb.attacks.find((x) => x.id === id);
  const [open, setOpen] = useState(false);
  if (!a) return null;
  const verdict = { held: '✓ Held', flagged: '! Flagged for review', fixed: '✓ Fixed' }[a.result];
  return (
    <article class={`imw-attack is-${a.result}${open ? ' is-open' : ''}`}>
      <button class="imw-attack-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span class="imw-eyebrow">{kb.entity.get(a.entity)?.short}</span>
        <strong>{a.label}</strong>
        <span class={`imw-verdict is-${a.result === 'flagged' ? 'warn' : 'pass'}`}>{verdict}</span>
      </button>
      {open && (
        <div class="imw-attack-body">
          <dl class="imw-kv">
            <dt>Attempt</dt><dd>{a.attempt}</dd>
            <dt>Expected</dt><dd>{a.expected}</dd>
            <dt>Observed</dt><dd>{a.observed}</dd>
            <dt>What protects it</dt><dd>{a.protection}</dd>
          </dl>
          <CodeLinks refs={a.code} />
          {a.trace && <button class="imw-btn" onClick={() => go('lab', a.trace!)}>▶ Replay the recorded run</button>}
        </div>
      )}
    </article>
  );
}

// ---- ClinIQ workload lab ----------------------------------------------------------------------

/** Port of ClinIQ analysis/review_workload.py:estimate_workload (same formula, same inputs). */
export function estimateWorkload(tp: number, fp: number, fn: number, tn: number, volume: number, prevalence: number, minutes: number) {
  const sens = tp / (tp + fn), fpr = fp / (fp + tn);
  const trueAlerts = volume * prevalence * sens, falseAlerts = volume * (1 - prevalence) * fpr;
  const reviews = trueAlerts + falseAlerts;
  return { trueAlerts, falseAlerts, missed: volume * prevalence * (1 - sens), reviews, hours: (reviews * minutes) / 60, precision: reviews ? trueAlerts / reviews : null };
}

function WorkloadLab() {
  const { kb } = useWs();
  const ds = kb.datasets.cliniq_confusion as { methods: { id: string; label: string; tp: number; fp: number; fn: number; tn: number }[]; caveat: string };
  const [volume, setVolume] = useState(10000);
  const [prev, setPrev] = useState(5);
  const [mins, setMins] = useState(3);
  const rows = useMemo(() => ds.methods.map((m) => ({ m, r: estimateWorkload(m.tp, m.fp, m.fn, m.tn, volume, prev / 100, mins) })), [ds, volume, prev, mins]);
  const maxH = Math.max(...rows.map((x) => x.r.hours), 1);
  const fmt = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  return (
    <div class="imw-workload">
      <div class="imw-sliders">
        <label><span>Reviews per month <b>{fmt(volume)}</b></span><input type="range" min={1000} max={100000} step={1000} value={volume} onInput={(e) => setVolume(+(e.target as HTMLInputElement).value)} /></label>
        <label><span>Prevalence of true signals <b>{prev}%</b></span><input type="range" min={1} max={30} step={1} value={prev} onInput={(e) => setPrev(+(e.target as HTMLInputElement).value)} /></label>
        <label><span>Minutes per human review <b>{mins}</b></span><input type="range" min={1} max={15} step={1} value={mins} onInput={(e) => setMins(+(e.target as HTMLInputElement).value)} /></label>
      </div>
      <div class="imw-table-wrap">
        <table class="imw-table">
          <thead><tr><th>Method</th><th>Alerts</th><th>True</th><th>Missed signals</th><th>Expected precision</th><th>Reviewer hours</th></tr></thead>
          <tbody>
            {rows.map(({ m, r }) => (
              <tr key={m.id}>
                <th scope="row">{m.label}</th>
                <td>{fmt(r.reviews)}</td><td>{fmt(r.trueAlerts)}</td><td>{fmt(r.missed)}</td>
                <td>{r.precision === null ? '—' : r.precision.toFixed(2)}</td>
                <td class="imw-barcell"><span class="imw-inline-bar viz-2" style={{ width: `${(r.hours / maxH) * 100}%` }} aria-hidden="true" /><b>{fmt(r.hours)}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p class="imw-help">Same formula as ClinIQ's <code>estimate_workload()</code>, fed the saved confusion counts. At low prevalence, the embedding detector's false positives dominate reviewer time. {ds.caveat}</p>
      <ClaimList ids={['cliniq.workload']} compact />
    </div>
  );
}

// ---- Assistant report card --------------------------------------------------------------------

interface Report { generated_at: string; suites: { name: string; passed: number; total: number; source: string }[] }

function ReportCard() {
  const [r, setR] = useState<Report | null>(null);
  useEffect(() => {
    fetch(evidenceUrl('evaluation-report.json')).then((x) => (x.ok ? x.json() : null)).then(setR).catch(() => setR(null));
  }, []);
  if (!r) return null;
  const passed = r.suites.reduce((s, x) => s + x.passed, 0), total = r.suites.reduce((s, x) => s + x.total, 0);
  return (
    <section class="imw-lab-section">
      <div class="imw-eyebrow">This assistant's own tests</div>
      <h4>{passed}/{total} evaluation cases passing</h4>
      <p class="imw-help">Generated {new Date(r.generated_at).toLocaleDateString()} by CI. It covers invented skills, false premises, unverified figures, prompt injection, hype language, role mapping and link correctness.</p>
      <ul class="imw-suites">
        {r.suites.map((s) => (
          <li key={s.name}><span class={`imw-verdict is-${s.passed === s.total ? 'pass' : 'fail'}`}>{s.passed === s.total ? '✓' : '✕'}</span><span>{s.name}</span><b>{s.passed}/{s.total}</b></li>
        ))}
      </ul>
    </section>
  );
}

export function LabView() {
  const { kb, modeArg } = useWs();
  const initial = kb.traces.find((t) => t.id === modeArg)?.id ?? 't.voice.emergency';
  const [trace, setTrace] = useState(initial);
  useEffect(() => { if (kb.traces.some((t) => t.id === modeArg)) setTrace(modeArg!); }, [modeArg]);
  const attacks = kb.attacks.filter((a) => !modeArg || !kb.entity.has(modeArg) || a.entity === modeArg);
  return (
    <div class="imw-view">
      <header class="imw-view-head">
        <div class="imw-eyebrow">Proof lab</div>
        <h3 data-autofocus tabIndex={-1}>Don't take the write-up's word for it.</h3>
        <p class="imw-help">Replays use the recorded transcripts, grades and records from the repositories; nothing here is simulated. The calculator runs the project's own formula on its saved results.</p>
      </header>

      <section class="imw-lab-section">
        <div class="imw-eyebrow">Replay a recorded run</div>
        <div class="imw-seg is-scroll" role="tablist" aria-label="Recorded runs">
          {kb.traces.map((t) => <button key={t.id} role="tab" aria-selected={trace === t.id} class={trace === t.id ? 'is-on' : ''} onClick={() => setTrace(t.id)}>{t.title}</button>)}
        </div>
        <TracePlayer id={trace} key={trace} />
      </section>

      <section class="imw-lab-section">
        <div class="imw-eyebrow">Try to break it</div>
        <p class="imw-help">Adversarial and edge cases, what the system did, and the test that keeps it that way.</p>
        <div class="imw-attack-grid">{attacks.map((a) => <AttackCard key={a.id} id={a.id} />)}</div>
      </section>

      <section class="imw-lab-section">
        <div class="imw-eyebrow">Run the numbers · ClinIQ review workload</div>
        <WorkloadLab />
      </section>

      <section class="imw-lab-section">
        <div class="imw-eyebrow">Measured from the audio · Voice QA Harness</div>
        <VoiceQualityChart />
      </section>

      <ReportCard />
    </div>
  );
}
