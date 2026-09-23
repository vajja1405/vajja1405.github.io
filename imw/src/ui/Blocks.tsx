import { useState } from 'preact/hooks';
import type { Answer, Block } from '../engine/types';
import { useWs } from '../context';
import { CATEGORY_LABEL } from '../engine/coverage';
import { ActionButton, CAT_CLASS, ClaimList, CodeLinks, EntityChip } from './bits';
import { CliniqChart, CoverageBar, EvidenceMap, VoiceQualityChart } from './charts';
import { ArchDiagram } from './Arch';
import { TracePlayer } from './Lab';

export function AnswerView({ a }: { a: Answer }) {
  const { setInspect, ask } = useWs();
  return (
    <div class="imw-answer">
      <div class="imw-answer-head">
        <span class={`imw-engine is-${a.engine}`}>{a.engine === 'model' ? `Claude · validated` : 'Evidence engine'}</span>
        <button class="imw-mini-link" onClick={() => setInspect({ kind: 'basis', retrieved: a.basis?.retrieved ?? [], checks: a.basis?.checks, model: a.basis?.model, engine: a.engine })}>
          Why this answer?
        </button>
        {(a as Answer & { refined?: boolean }).refined && <span class="imw-help">Requirements refined by AI parsing</span>}
      </div>
      {a.blocks.map((b, i) => <BlockView key={i} b={b} />)}
      {a.actions.length > 0 && <div class="imw-actions">{a.actions.map((x, i) => <ActionButton key={i} a={x} />)}</div>}
      {a.followups.length > 0 && (
        <div class="imw-followups" aria-label="Suggested follow-up questions">
          {a.followups.map((f) => <button key={f} class="imw-chip" onClick={() => ask(f)}>{f}</button>)}
        </div>
      )}
    </div>
  );
}

function BlockView({ b }: { b: Block }) {
  const ws = useWs();
  const { kb, setInspect, go } = ws;
  switch (b.type) {
    case 'p':
      return (
        <p class="imw-p">
          {b.text}
          {b.cites?.map((id, i) => (
            <button key={id} class="imw-cite" onClick={() => setInspect({ kind: 'claim', id })} aria-label={`Evidence ${i + 1}: ${kb.claim.get(id)?.text ?? id}`}>{i + 1}</button>
          ))}
        </p>
      );
    case 'note':
      return <p class={`imw-note${b.tone === 'warn' ? ' is-warn' : ''}`}>{b.text}</p>;
    case 'claims':
      return <ClaimList ids={b.ids} title={b.title} />;
    case 'entity': {
      const e = kb.entity.get(b.id);
      if (!e) return null;
      return (
        <div class="imw-entity">
          <div class="imw-eyebrow">{e.kind} · {e.dates}</div>
          <h3>{e.name}</h3>
          <p class="imw-help">{e.role ?? e.tagline}</p>
        </div>
      );
    }
    case 'coverage':
      return (
        <div class="imw-coverage-inline">
          <CoverageBar counts={b.analysis.counts} />
          <EvidenceMap analysis={b.analysis} max={12} />
          <button class="imw-mini-link" onClick={() => { ws.setCoverage(b.analysis); go('role'); }}>Open the full analysis →</button>
        </div>
      );
    case 'xray': {
      const arch = kb.architectures.find((x) => x.id === b.arch);
      if (!arch) return null;
      return (
        <div class="imw-xray-inline">
          <ArchDiagram arch={arch} scan={false} onSelect={(n) => setInspect({ kind: 'node', arch: arch.id, node: n })} />
          <button class="imw-mini-link" onClick={() => go('xray', arch.entity)}>Open X-Ray view →</button>
        </div>
      );
    }
    case 'failures':
      return <div class="imw-stack">{b.ids.map((id) => <FailureCard key={id} id={id} />)}</div>;
    case 'decisions':
      return <div class="imw-stack">{b.ids.map((id) => <DecisionCard key={id} id={id} />)}</div>;
    case 'compare':
      return (
        <div class="imw-table-wrap">
          <table class="imw-table imw-compare">
            <thead><tr><th scope="col"><span class="sr-only">Field</span></th>{b.entities.map((e) => <th key={e} scope="col">{kb.entity.get(e)?.short}</th>)}</tr></thead>
            <tbody>{b.rows.map((r) => <tr key={r.label}><th scope="row">{r.label}</th>{r.values.map((v, i) => <td key={i}>{v}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    case 'gaps':
      return (
        <ul class="imw-gaps">
          {b.items.map((g) => (
            <li key={g.id}>
              <span class="imw-cat cat-missing">{CATEGORY_LABEL.missing}</span>
              <strong>{g.name}</strong>
              <p>{g.statement}</p>
              {g.closest.length > 0 && <div class="imw-row"><span class="imw-help">Closest:</span>{g.closest.map((e) => <EntityChip key={e} id={e} />)}</div>}
            </li>
          ))}
        </ul>
      );
    case 'chart':
      return b.chart === 'cliniq' ? <CliniqChart /> : <VoiceQualityChart />;
    case 'trace':
      return <TracePlayer id={b.id} compact />;
  }
}

export function FailureCard({ id, open: initial = false }: { id: string; open?: boolean }) {
  const { kb } = useWs();
  const f = kb.failures.find((x) => x.id === id);
  const [open, setOpen] = useState(initial);
  if (!f) return null;
  const rows: [string, string][] = [['Problem', f.problem], ['Detection', f.detection], ['Diagnosis', f.diagnosis], ['Fix', f.fix], ['Prevention', f.prevention], ['Measured', f.measurement]];
  return (
    <article class={`imw-story${open ? ' is-open' : ''}`}>
      <button class="imw-story-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span class="imw-eyebrow">Failure · {kb.entity.get(f.entity)?.short}</span>
        <strong>{f.title}</strong>
        <span class="imw-help">{open ? 'Hide' : 'Problem → detection → fix → prevention'}</span>
      </button>
      {open && (
        <div class="imw-story-body">
          <ol class="imw-flow">{rows.map(([k, v]) => <li key={k}><strong>{k}</strong><span>{v}</span></li>)}</ol>
          <CodeLinks refs={f.code} />
          <ClaimList ids={f.claims} title="Evidence" compact />
        </div>
      )}
    </article>
  );
}

export function DecisionCard({ id }: { id: string }) {
  const { kb } = useWs();
  const d = kb.decisions.find((x) => x.id === id);
  if (!d) return null;
  return (
    <article class="imw-story is-open">
      <div class="imw-story-head is-static">
        <span class="imw-eyebrow">Decision · {kb.entity.get(d.entity)?.short}</span>
        <strong>{d.title}</strong>
      </div>
      <dl class="imw-kv">
        <dt>Choice</dt><dd>{d.choice}</dd>
        <dt>Why</dt><dd>{d.rationale}</dd>
        <dt>Tradeoff</dt><dd>{d.tradeoff}</dd>
      </dl>
    </article>
  );
}

export function ReqList({ analysis }: { analysis: import('../engine/types').CoverageAnalysis }) {
  const { kb, setInspect } = useWs();
  const cats = ['direct', 'related', 'verification', 'missing'] as const;
  return (
    <div class="imw-reqgroups">
      {cats.map((cat) => {
        const reqs = analysis.requirements.filter((r) => r.category === cat);
        if (!reqs.length) return null;
        return (
          <section key={cat}>
            <h4 class={`imw-cat ${CAT_CLASS[cat]}`}>{CATEGORY_LABEL[cat]} · {reqs.length}</h4>
            <ul class="imw-reqs">
              {reqs.map((r) => (
                <li key={r.id}>
                  <button class="imw-req-btn" onClick={() => setInspect({ kind: 'req', req: r })}>
                    <i class={`imw-cat-dot ${CAT_CLASS[r.category]}`} aria-hidden="true" />
                    <span>{r.label}{r.priority === 'preferred' ? <em> · preferred</em> : null}{r.strength === 'self_reported' ? <em> · self-reported</em> : null}</span>
                    <small>{r.entities.length ? r.entities.slice(0, 3).map((e) => kb.entity.get(e)?.short).join(' · ') : r.statement}</small>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
