// Small hand-built SVG charts. Series colors come from a palette validated for the site's dark
// surfaces (scripts/validate_palette.js, all pairs): teal #2ba88a, blue #3987e5, amber #b97d24.
// Text always uses text tokens; every colored mark has a text label or legend beside it.
import { useMemo, useState } from 'preact/hooks';
import type { Category, CoverageAnalysis } from '../engine/types';
import { CATEGORY_LABEL } from '../engine/coverage';
import { useWs, reducedMotion } from '../context';
import { CAT_CLASS } from './bits';

const ORDER: Category[] = ['direct', 'related', 'verification', 'missing'];
const SHORT: Record<Category, string> = { direct: 'direct', related: 'related', verification: 'to verify', missing: 'not shown' };

export function CoverageBar({ counts, compact }: { counts: Record<Category, number>; compact?: boolean }) {
  const total = ORDER.reduce((s, k) => s + counts[k], 0) || 1;
  return (
    <div class={`imw-covbar${compact ? ' is-compact' : ''}`}>
      <div class="imw-covbar-track" role="img" aria-label={ORDER.map((k) => `${counts[k]} ${CATEGORY_LABEL[k]}`).join(', ')}>
        {ORDER.filter((k) => counts[k]).map((k) => (
          <span key={k} class={`imw-covbar-seg ${CAT_CLASS[k]}`} style={{ flexGrow: counts[k] / total }} title={`${counts[k]} · ${CATEGORY_LABEL[k]}`} />
        ))}
      </div>
      <ul class="imw-covbar-legend">
        {ORDER.map((k) => (
          <li key={k}><i class={`imw-cat-dot ${CAT_CLASS[k]}`} aria-hidden="true" /><b>{counts[k]}</b> {compact ? SHORT[k] : CATEGORY_LABEL[k]}</li>
        ))}
      </ul>
    </div>
  );
}

/** Requirement → evidence map: the lines connecting a role's requirements to the work that proves them. */
export function EvidenceMap({ analysis, max = 16 }: { analysis: CoverageAnalysis; max?: number }) {
  const { kb, setInspect } = useWs();
  const [hover, setHover] = useState<string | null>(null);
  const reqs = analysis.requirements.slice(0, max);
  const ents = analysis.entities.slice(0, 7).map((e) => e.id);
  const ROW = 26, TOP = 18, W = 640;
  const H = TOP * 2 + Math.max(reqs.length, ents.length) * ROW;
  const entY = (i: number) => TOP + (i + 0.5) * ROW * (Math.max(reqs.length, ents.length) / Math.max(ents.length, 1));
  const reqY = (i: number) => TOP + (i + 0.5) * ROW;
  const lx = 232, rx = 408;
  const links = reqs.flatMap((r, i) =>
    r.category === 'direct' || r.category === 'related'
      ? r.entities.filter((e) => ents.includes(e)).slice(0, 3).map((e) => ({ r: r.id, e, cat: r.category, y1: reqY(i), y2: entY(ents.indexOf(e)) }))
      : [],
  );
  const lit = (r: string, e: string) => !hover || hover === r || hover === e;
  const animate = !reducedMotion();
  return (
    <figure class="imw-map">
      <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Requirement to evidence map" class={animate ? 'is-anim' : ''}>
        {links.map((l, i) => (
          <path key={i} d={`M${lx},${l.y1} C${lx + 90},${l.y1} ${rx - 90},${l.y2} ${rx},${l.y2}`}
            class={`imw-link ${l.cat === 'direct' ? 'is-direct' : 'is-related'}${lit(l.r, l.e) ? ' is-lit' : ' is-dim'}`}
            style={{ animationDelay: `${Math.min(i * 25, 700)}ms` }} />
        ))}
        {reqs.map((r, i) => (
          <g key={r.id} class={`imw-map-req ${CAT_CLASS[r.category]}${hover && hover !== r.id ? ' is-dim' : ''}`} tabIndex={0} role="button"
            aria-label={`${r.label}: ${CATEGORY_LABEL[r.category]}`}
            onMouseEnter={() => setHover(r.id)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(r.id)} onBlur={() => setHover(null)}
            onClick={() => setInspect({ kind: 'req', req: r })} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setInspect({ kind: 'req', req: r }))}>
            <rect x={0} y={reqY(i) - ROW / 2} width={lx + 6} height={ROW} class="imw-hit" />
            <text x={lx - 12} y={reqY(i) + 4} text-anchor="end">{trim(r.label, 30)}</text>
            <circle cx={lx} cy={reqY(i)} r={4.5} />
          </g>
        ))}
        {ents.map((e, i) => (
          <g key={e} class={`imw-map-ent${hover && hover !== e && !links.some((l) => l.e === e && l.r === hover) ? ' is-dim' : ''}`} tabIndex={0} role="button"
            aria-label={kb.entity.get(e)?.name}
            onMouseEnter={() => setHover(e)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(e)} onBlur={() => setHover(null)}
            onClick={() => setInspect({ kind: 'entity', id: e })} onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), setInspect({ kind: 'entity', id: e }))}>
            <rect x={rx - 6} y={entY(i) - ROW / 2} width={W - rx + 6} height={ROW} class="imw-hit" />
            <circle cx={rx} cy={entY(i)} r={5.5} />
            <text x={rx + 14} y={entY(i) + 4}>{kb.entity.get(e)?.short}</text>
          </g>
        ))}
      </svg>
      <figcaption class="imw-help">
        Solid lines: direct evidence. Dashed: related evidence. Hollow markers have no supporting evidence.
        {analysis.requirements.length > max ? ` Showing ${max} of ${analysis.requirements.length} requirements; the full list is below.` : ''}
      </figcaption>
    </figure>
  );
}

const trim = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

// ---- ClinIQ: precision / recall / F1 per method ----------------------------------------------

const SERIES = [
  { key: 'precision', label: 'Precision', cls: 'viz-1' },
  { key: 'recall', label: 'Recall', cls: 'viz-2' },
  { key: 'f1', label: 'F1', cls: 'viz-3' },
] as const;

export function CliniqChart() {
  const { kb } = useWs();
  const ds = kb.datasets.cliniq_confusion as { sample: string; caveat: string; methods: { id: string; label: string; tp: number; fp: number; fn: number; tn: number }[] };
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);
  const [table, setTable] = useState(false);
  const rows = useMemo(() => ds.methods.map((m) => {
    const precision = m.tp / (m.tp + m.fp), recall = m.tp / (m.tp + m.fn);
    return { ...m, precision, recall, f1: (2 * precision * recall) / (precision + recall) };
  }), [ds]);
  const W = 560, H = 230, L = 36, B = 30, T = 12, gw = (W - L - 12) / rows.length, bw = 22, gap = 2;
  const y = (v: number) => T + (1 - v) * (H - T - B);
  return (
    <figure class="imw-chart">
      <div class="imw-chart-head">
        <strong>ClinIQ detectors on {ds.sample}</strong>
        <button class="imw-mini-link" onClick={() => setTable(!table)} aria-pressed={table}>{table ? 'Chart view' : 'Table view'}</button>
      </div>
      {table ? (
        <table class="imw-table">
          <thead><tr><th>Method</th><th>Precision</th><th>Recall</th><th>F1</th><th>TP</th><th>FP</th><th>FN</th><th>TN</th></tr></thead>
          <tbody>{rows.map((r) => <tr key={r.id}><th>{r.label}</th><td>{r.precision.toFixed(3)}</td><td>{r.recall.toFixed(3)}</td><td>{r.f1.toFixed(3)}</td><td>{r.tp}</td><td>{r.fp}</td><td>{r.fn}</td><td>{r.tn}</td></tr>)}</tbody>
        </table>
      ) : (
        <div class="imw-chart-plot" onMouseLeave={() => setTip(null)}>
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Precision, recall and F1 for rules, embedding and LLM plus RAG detectors">
            {[0, 0.25, 0.5, 0.75, 1].map((v) => (
              <g key={v} class="imw-grid"><line x1={L} x2={W - 8} y1={y(v)} y2={y(v)} /><text x={L - 6} y={y(v) + 4} text-anchor="end">{v.toFixed(2)}</text></g>
            ))}
            {rows.map((r, gi) => {
              const x0 = L + gi * gw + (gw - (bw * 3 + gap * 2)) / 2;
              return (
                <g key={r.id}>
                  {SERIES.map((s, si) => {
                    const v = r[s.key];
                    const x = x0 + si * (bw + gap);
                    return (
                      <path key={s.key} class={`imw-bar ${s.cls}`} d={barPath(x, y(v), bw, y(0) - y(v))}
                        onMouseEnter={() => setTip({ x: (x + bw / 2) / W, y: y(v) / H, text: `${r.label} · ${s.label} ${v.toFixed(3)}` })} />
                    );
                  })}
                  <text class="imw-axis-label" x={L + gi * gw + gw / 2} y={H - 10} text-anchor="middle">{r.label}</text>
                </g>
              );
            })}
          </svg>
          {tip && <div class="imw-tip" style={{ left: `${tip.x * 100}%`, top: `${tip.y * 100}%` }}>{tip.text}</div>}
        </div>
      )}
      <ul class="imw-legend-row">{SERIES.map((s) => <li key={s.key}><i class={`imw-swatch ${s.cls}`} aria-hidden="true" />{s.label}</li>)}</ul>
      <figcaption class="imw-help">Rules have the best F1 (0.854). The embedding detector reaches recall 1.000 by flagging 595 of 600 reviews. {ds.caveat}</figcaption>
    </figure>
  );
}

/** Bar with 4px rounded top, square baseline. */
function barPath(x: number, y: number, w: number, h: number) {
  const r = Math.min(4, h / 2, w / 2);
  if (h <= 0) return '';
  return `M${x},${y + h} V${y + r} Q${x},${y} ${x + r},${y} H${x + w - r} Q${x + w},${y} ${x + w},${y + r} V${y + h} Z`;
}

// ---- Voice quality: mid-call silence per call -------------------------------------------------

export function VoiceQualityChart() {
  const { kb } = useWs();
  const ds = kb.datasets.voice_quality as { rows: [string, number, number, number, number, number][]; caveat: string };
  const rows = [...ds.rows].sort((a, b) => b[3] - a[3]);
  const [tip, setTip] = useState<{ y: number; text: string } | null>(null);
  const W = 560, ROW = 20, L = 150, R = 40, H = rows.length * ROW + 24;
  const x = (v: number) => L + (v / 60) * (W - L - R);
  const avg = rows.reduce((s, r) => s + r[3], 0) / rows.length;
  return (
    <figure class="imw-chart">
      <div class="imw-chart-head"><strong>Mid-call silence per recorded call (%)</strong></div>
      <div class="imw-chart-plot" onMouseLeave={() => setTip(null)}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Mid-call silence per call; average ${avg.toFixed(1)} percent`}>
          {[0, 20, 40, 60].map((v) => <g key={v} class="imw-grid"><line x1={x(v)} x2={x(v)} y1={0} y2={H - 18} /><text x={x(v)} y={H - 4} text-anchor="middle">{v}</text></g>)}
          {rows.map((r, i) => {
            const yy = i * ROW + 3;
            return (
              <g key={r[0]} onMouseEnter={() => setTip({ y: (yy + ROW / 2) / H, text: `${r[0]} · silence ${r[3]}% · talk-over ${r[2]}% · longest gap ${r[4]}s` })}>
                <rect class="imw-hit" x={0} y={yy - 2} width={W} height={ROW} />
                <text class="imw-axis-label" x={L - 8} y={yy + 11} text-anchor="end">{r[0].replace(/_/g, ' ')}</text>
                <path class="imw-bar viz-1" d={hbarPath(L, yy + 2, x(r[3]) - L, ROW - 8)} />
              </g>
            );
          })}
          <line class="imw-ref" x1={x(avg)} x2={x(avg)} y1={0} y2={H - 18} />
          <text class="imw-ref-label" x={x(avg) + 4} y={10}>avg {avg.toFixed(1)}%</text>
        </svg>
        {tip && <div class="imw-tip" style={{ left: '55%', top: `${tip.y * 100}%` }}>{tip.text}</div>}
      </div>
      <figcaption class="imw-help">Talk-over averaged 0.3% and the mean pause between turns was 0.5 s. {ds.caveat}</figcaption>
    </figure>
  );
}

function hbarPath(x: number, y: number, w: number, h: number) {
  const r = Math.min(4, h / 2, w / 2);
  if (w <= 0) return '';
  return `M${x},${y} H${x + w - r} Q${x + w},${y} ${x + w},${y + r} V${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} H${x} Z`;
}
