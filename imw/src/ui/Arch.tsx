import { useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';
import type { Architecture } from '../engine/types';
import { reducedMotion } from '../context';

const CW = 198, RH = 96, NW = 174, NH = 56, PAD = 28;
const fit = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

/** Architecture diagram. Wide containers get the SVG graph; narrow ones get a stacked flow. */
export function ArchDiagram({ arch, selected, onSelect, scan = true }: { arch: Architecture; selected?: string; onSelect: (id: string) => void; scan?: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  const [narrow, setNarrow] = useState(false);
  const [scanning, setScanning] = useState(false);

  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < 560));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!scan || reducedMotion()) return;
    setScanning(true);
    const t = setTimeout(() => setScanning(false), 1300);
    return () => clearTimeout(t);
  }, [arch.id, scan]);

  const cols = Math.max(...arch.nodes.map((n) => n.col)) + 1;
  const rows = Math.max(...arch.nodes.map((n) => n.row)) + 1;
  const W = PAD * 2 + cols * CW - (CW - NW);
  const H = PAD * 2 + rows * RH - (RH - NH) + (arch.lanes.length ? 14 : 0);
  const pos = (id: string) => {
    const n = arch.nodes.find((x) => x.id === id)!;
    return { x: PAD + n.col * CW, y: PAD + (arch.lanes.length ? 14 : 0) + n.row * RH };
  };
  const key = (e: KeyboardEvent, id: string) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(id); } };

  if (narrow) {
    // Follow the data flow (topological order), breaking ties left-to-right.
    const indeg = new Map(arch.nodes.map((n) => [n.id, 0]));
    arch.edges.forEach(([, b]) => indeg.set(b, (indeg.get(b) ?? 0) + 1));
    const byPos = (a: { col: number; row: number }, b: { col: number; row: number }) => a.col - b.col || a.row - b.row;
    const queue = arch.nodes.filter((n) => !indeg.get(n.id)).sort(byPos);
    const ordered: typeof arch.nodes = [];
    while (queue.length) {
      const n = queue.shift()!;
      ordered.push(n);
      // Depth-first: finish one path before starting the next, so each lane reads as a chain.
      const ready = arch.edges.filter(([a]) => a === n.id).map(([, b]) => b)
        .filter((b) => { indeg.set(b, indeg.get(b)! - 1); return indeg.get(b) === 0; })
        .map((b) => arch.nodes.find((x) => x.id === b)!).sort(byPos);
      queue.unshift(...ready);
    }
    arch.nodes.forEach((n) => { if (!ordered.includes(n)) ordered.push(n); });
    return (
      <div ref={box} class="imw-arch-stack">
        {ordered.map((n, i) => (
          <div key={n.id} class="imw-arch-step">
            {i > 0 && <span class="imw-arch-arrow" aria-hidden="true">↓</span>}
            <button class={`imw-arch-card${selected === n.id ? ' is-on' : ''}`} onClick={() => onSelect(n.id)} aria-pressed={selected === n.id}>
              <strong>{n.label}</strong><small>{n.sub}</small>
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={box} class={`imw-arch${scanning ? ' is-scanning' : ''}`}>
      <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label={`${arch.title} architecture`}>
        <defs>
          <marker id={`ah-${arch.id}`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L8,4 L0,8 z" class="imw-arrowhead" />
          </marker>
        </defs>
        {arch.lanes.map((l) => (
          <text key={l.row} class="imw-lane" x={PAD} y={PAD + l.row * RH + 6}>{l.label.toUpperCase()}</text>
        ))}
        {arch.edges.map(([a, b]) => {
          const p = pos(a), q = pos(b);
          let d: string;
          if (q.x > p.x) {
            const x1 = p.x + NW, y1 = p.y + NH / 2, x2 = q.x - 4, y2 = q.y + NH / 2, mx = (x1 + x2) / 2;
            d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
          } else if (q.x < p.x) {
            const x1 = p.x, y1 = p.y + NH / 2, x2 = q.x + NW + 4, y2 = q.y + NH / 2, mx = (x1 + x2) / 2;
            d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
          } else {
            const down = q.y > p.y;
            const x = p.x + NW / 2, y1 = down ? p.y + NH : p.y, y2 = down ? q.y - 4 : q.y + NH + 4;
            d = `M${x},${y1} L${x},${y2}`;
          }
          const on = selected === a || selected === b;
          return <path key={a + b} d={d} class={`imw-edge${on ? ' is-on' : ''}`} marker-end={`url(#ah-${arch.id})`} />;
        })}
        {arch.nodes.map((n) => {
          const p = pos(n.id);
          return (
            <g key={n.id} class={`imw-node${selected === n.id ? ' is-on' : ''}`} transform={`translate(${p.x},${p.y})`} tabIndex={0} role="button"
              aria-pressed={selected === n.id} aria-label={`${n.label}. ${n.sub}`} style={{ animationDelay: `${n.col * 120}ms` }}
              onClick={() => onSelect(n.id)} onKeyDown={(e) => key(e, n.id)}>
              <rect width={NW} height={NH} rx={4} />
              <text x={12} y={24} class="imw-node-label">{fit(n.label, 22)}</text>
              <text x={12} y={42} class="imw-node-sub">{fit(n.sub, 25)}</text>
            </g>
          );
        })}
        {scanning && <rect class="imw-scan" x={0} y={0} width={3} height={H} />}
      </svg>
    </div>
  );
}
