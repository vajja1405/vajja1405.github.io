import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { useWs, reducedMotion } from '../context';
import { isStatable, type KB } from '../engine/kb';
import { coverConcept, roleAnalysis } from '../engine/coverage';
import type { Category, CoverageAnalysis } from '../engine/types';
import { CAT_CLASS } from './bits';

interface P { x: number; y: number; o: number }
const W = 1000, H = 720, CX = 500, CY = 360, R1 = 170, R2 = 305;
const ENTITY_KINDS = new Set(['project', 'research', 'experience', 'leadership']);

function layout(kb: KB, lens: CoverageAnalysis | null) {
  const groups = kb.groups;
  const ents = kb.entities.filter((e) => ENTITY_KINDS.has(e.kind));
  const skillGroup = new Map(kb.skills.map((s) => [s.id, s.group]));
  // weight[entity][group] = statable claims of the entity tagged with skills in that group
  const weight = new Map<string, Map<string, number>>();
  for (const c of kb.claims.filter(isStatable)) {
    const m = weight.get(c.entity) ?? new Map<string, number>();
    new Set(c.tags.map((t) => skillGroup.get(t)).filter(Boolean) as string[]).forEach((g) => m.set(g, (m.get(g) ?? 0) + 1));
    weight.set(c.entity, m);
  }
  const gAngle = new Map(groups.map((g, i) => [g.id, -Math.PI / 2 + (i / groups.length) * Math.PI * 2]));

  // Relevance under the lens.
  const req = new Set(lens?.requirements.filter((r) => r.category === 'direct' || r.category === 'related').map((r) => r.id) ?? []);
  const gRel = new Map(groups.map((g) => {
    if (!lens) return [g.id, 1];
    const ss = kb.skills.filter((s) => s.group === g.id);
    return [g.id, ss.filter((s) => req.has(s.id)).length / Math.max(1, Math.min(4, ss.length))];
  }));
  const maxE = Math.max(1, ...(lens?.entities.map((e) => e.score) ?? [1]));
  const eRel = new Map(ents.map((e) => [e.id, lens ? (lens.entities.find((x) => x.id === e.id)?.score ?? 0) / maxE : 1]));

  const gPos = new Map<string, P>();
  for (const g of groups) {
    const rel = Math.min(1, gRel.get(g.id)!);
    const r = lens ? R1 * (rel > 0 ? 1 - 0.16 * rel : 1.1) : R1;
    const a = gAngle.get(g.id)!;
    gPos.set(g.id, { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a), o: lens ? (rel > 0 ? 1 : 0.16) : 1 });
  }
  // Entities sit at the weighted circular mean of their groups, then get spread apart.
  const placed = ents.map((e) => {
    const m = weight.get(e.id) ?? new Map();
    let sx = 0, sy = 0;
    m.forEach((w, g) => { const a = gAngle.get(g)!; sx += w * Math.cos(a); sy += w * Math.sin(a); });
    return { id: e.id, a: Math.atan2(sy, sx) };
  }).sort((p, q) => p.a - q.a);
  const minSep = (Math.PI * 2) / placed.length * 0.8;
  for (let pass = 0; pass < 8; pass++) {
    for (let i = 0; i < placed.length; i++) {
      const cur = placed[i], nxt = placed[(i + 1) % placed.length];
      let d = nxt.a - cur.a; if (i === placed.length - 1) d += Math.PI * 2;
      if (d < minSep) { const push = (minSep - d) / 2; cur.a -= push; nxt.a += push; }
    }
  }
  const ePos = new Map<string, P>();
  for (const p of placed) {
    const rel = eRel.get(p.id)!;
    const r = lens ? R2 * (rel > 0 ? 1 - 0.2 * rel : 1.06) : R2;
    ePos.set(p.id, { x: CX + r * Math.cos(p.a), y: CY + r * Math.sin(p.a), o: lens ? (rel > 0 ? 0.35 + 0.65 * rel : 0.14) : 1 });
  }
  return { groups, ents, weight, gPos, ePos };
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function MapView() {
  const { kb, modeArg, coverage, setInspect, go } = useWs();
  const [lensId, setLensId] = useState<string>(modeArg && kb.role.has(modeArg) ? modeArg : '');
  const [focus, setFocus] = useState<string | null>(null);
  const lens = useMemo(() => (lensId === '__current' ? coverage : lensId ? roleAnalysis(kb, lensId) : null), [lensId, kb, coverage]);
  const target = useMemo(() => layout(kb, lens), [kb, lens]);

  // Tween every node from its current position to the target layout.
  const [pos, setPos] = useState<Map<string, P>>(() => new Map([...target.gPos, ...target.ePos].map(([k]) => [k, { x: CX, y: CY, o: 0 }])));
  const cur = useRef(pos);
  useEffect(() => {
    const to = new Map([...target.gPos, ...target.ePos]);
    if (reducedMotion()) { cur.current = to; setPos(to); return; }
    const from = cur.current, t0 = performance.now(), dur = 850;
    let raf = 0;
    const step = (now: number) => {
      const t = ease(Math.min(1, (now - t0) / dur));
      const next = new Map<string, P>();
      to.forEach((b, k) => { const a = from.get(k) ?? { x: CX, y: CY, o: 0 }; next.set(k, { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, o: a.o + (b.o - a.o) * t }); });
      cur.current = next;
      setPos(next);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  const P = (id: string) => pos.get(id) ?? { x: CX, y: CY, o: 0 };
  const maxW = Math.max(1, ...[...target.weight.values()].flatMap((m) => [...m.values()]));
  const gCount = (g: string) => kb.claims.filter((c) => isStatable(c) && c.tags.some((t) => kb.skill.get(t)?.group === g)).length;
  const eCount = (e: string) => kb.statableByEntity.get(e)?.length ?? 0;

  const satellites = focus ? kb.skills.filter((s) => s.group === focus).map((s, i, all) => {
    const g = P(focus);
    const base = Math.atan2(g.y - CY, g.x - CX);
    const spread = Math.min(Math.PI * 0.9, all.length * 0.22);
    const a = base - spread / 2 + (spread * (i + 0.5)) / all.length;
    return { s, cov: coverConcept(kb, s.id), x: g.x + 92 * Math.cos(a), y: g.y + 92 * Math.sin(a) };
  }) : [];

  const priority = kb.roles.filter((r) => r.priority).sort((a, b) => a.priority! - b.priority!);
  return (
    <div class="imw-view is-map">
      <header class="imw-view-head">
        <div class="imw-eyebrow">Explore my engineering</div>
        <h3 data-autofocus tabIndex={-1}>Evidence map</h3>
        <p class="imw-help">Capability areas (inner ring) connect to the projects and roles that evidence them (outer ring). Line weight is the number of verified claims. Apply a role lens to pull relevant work toward the centre.</p>
      </header>
      <div class="imw-row imw-map-controls">
        <label class="imw-select">
          <span>Role lens</span>
          <select value={lensId} onChange={(e) => { setLensId((e.target as HTMLSelectElement).value); setFocus(null); }}>
            <option value="">No lens: everything</option>
            {coverage && <option value="__current">Current analysis: {coverage.title}</option>}
            <optgroup label="Priority roles">{priority.map((r) => <option key={r.id} value={r.id}>{r.title}</option>)}</optgroup>
            <optgroup label="Other roles">{kb.roles.filter((r) => !r.priority).map((r) => <option key={r.id} value={r.id}>{r.title}</option>)}</optgroup>
          </select>
        </label>
        {lens && <button class="imw-mini-link" onClick={() => { go('role'); }}>Open coverage analysis →</button>}
      </div>
      <div class="imw-constellation">
        <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Evidence map of capability areas and projects">
          <circle cx={CX} cy={CY} r={R1} class="imw-orbit" />
          <circle cx={CX} cy={CY} r={R2} class="imw-orbit" />
          {target.groups.map((g) => { const p = P(g.id); return <line key={`c-${g.id}`} x1={CX} y1={CY} x2={p.x} y2={p.y} class="imw-spoke" style={{ opacity: p.o * 0.5 }} />; })}
          {target.ents.flatMap((e) => [...(target.weight.get(e.id) ?? new Map()).entries()].map(([g, w]) => {
            const a = P(g), b = P(e.id);
            const on = focus ? focus === g : true;
            return <line key={`${e.id}-${g}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} class="imw-web" style={{ strokeWidth: 0.6 + (2.2 * w) / maxW, opacity: Math.min(a.o, b.o) * (on ? 0.55 : 0.08) }} />;
          }))}
          <g class="imw-core">
            <circle cx={CX} cy={CY} r={34} />
            <text x={CX} y={CY - 2} text-anchor="middle">Rahul</text>
            <text x={CX} y={CY + 14} text-anchor="middle" class="imw-core-sub">Vajja</text>
          </g>
          {target.groups.map((g) => {
            const p = P(g.id), n = gCount(g.id), r = 6 + Math.sqrt(n) * 1.6;
            const left = p.x < CX - 5;
            return (
              <g key={g.id} class={`imw-gnode${focus === g.id ? ' is-on' : ''}`} style={{ opacity: p.o }} tabIndex={0} role="button" aria-label={`${g.label}: ${n} verified claims`}
                onClick={() => { setFocus(focus === g.id ? null : g.id); setInspect({ kind: 'group', id: g.id }); }}
                onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); setFocus(focus === g.id ? null : g.id); setInspect({ kind: 'group', id: g.id }); } }}>
                <circle cx={p.x} cy={p.y} r={r + 10} class="imw-hit" />
                <circle cx={p.x} cy={p.y} r={r} />
                <text x={p.x + (left ? -r - 7 : r + 7)} y={p.y + 4} text-anchor={left ? 'end' : 'start'}>{g.label}</text>
              </g>
            );
          })}
          {satellites.map(({ s, cov, x, y }) => (
            <g key={s.id} class={`imw-sat ${CAT_CLASS[cov.category as Category]}`} tabIndex={0} role="button" aria-label={`${s.name}: ${cov.category}`}
              onClick={() => setInspect({ kind: 'req', req: cov })} onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), setInspect({ kind: 'req', req: cov }))}>
              <line x1={P(focus!).x} y1={P(focus!).y} x2={x} y2={y} />
              <circle cx={x} cy={y} r={4} />
              <text x={x} y={y - 8} text-anchor="middle">{s.name.length > 22 ? s.name.slice(0, 21) + '…' : s.name}</text>
            </g>
          ))}
          {target.ents.map((e) => {
            const p = P(e.id), n = eCount(e.id), r = 7 + Math.sqrt(n) * 1.4;
            const left = p.x < CX - 5;
            return (
              <g key={e.id} class={`imw-enode is-${e.kind}`} style={{ opacity: p.o }} tabIndex={0} role="button" aria-label={`${e.name}: ${n} verified claims`}
                onClick={() => setInspect({ kind: 'entity', id: e.id })} onKeyDown={(ev) => (ev.key === 'Enter' || ev.key === ' ') && (ev.preventDefault(), setInspect({ kind: 'entity', id: e.id }))}>
                <circle cx={p.x} cy={p.y} r={r + 10} class="imw-hit" />
                <rect x={p.x - r} y={p.y - r} width={r * 2} height={r * 2} rx={e.kind === 'experience' ? r : 3} />
                <text x={p.x + (left ? -r - 8 : r + 8)} y={p.y + 4} text-anchor={left ? 'end' : 'start'}>{e.short}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <ul class="imw-legend-row">
        <li><i class="imw-swatch is-group" aria-hidden="true" /> Capability area</li>
        <li><i class="imw-swatch is-project" aria-hidden="true" /> Project / research</li>
        <li><i class="imw-swatch is-experience" aria-hidden="true" /> Experience</li>
        <li>Select an area to see its skills, coloured by evidence state.</li>
      </ul>
    </div>
  );
}
