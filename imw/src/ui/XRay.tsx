import { useEffect, useState } from 'preact/hooks';
import { useWs } from '../context';
import { ArchDiagram } from './Arch';
import { ClaimList, CodeLinks } from './bits';
import { DecisionCard, FailureCard } from './Blocks';
import { AttackCard } from './Lab';
import { CliniqChart, VoiceQualityChart } from './charts';

type Tab = 'why' | 'failures' | 'break' | 'evaluation' | 'code' | 'questions';

export function XRayView() {
  const { kb, modeArg, setInspect, inspect, ask } = useWs();
  const archs = kb.architectures;
  const [archId, setArchId] = useState(archs.find((a) => a.entity === modeArg)?.id ?? archs[0].id);
  const arch = archs.find((a) => a.id === archId)!;
  const [tab, setTab] = useState<Tab>('why');

  useEffect(() => { const m = archs.find((a) => a.entity === modeArg); if (m) setArchId(m.id); }, [modeArg]);

  const e = kb.entity.get(arch.entity)!;
  const own = kb.statableByEntity.get(arch.entity) ?? [];
  const decisions = kb.decisions.filter((d) => d.entity === arch.entity);
  const failures = kb.failures.filter((f) => f.entity === arch.entity);
  const attacks = kb.attacks.filter((a) => a.entity === arch.entity);
  const evals = own.filter((c) => c.tags.some((t) => ['eval_design', 'llm_eval', 'regression_testing', 'metrics', 'testing', 'model_comparison'].includes(t)));
  const code = own.flatMap((c) => c.code ?? []);
  const selected = inspect?.kind === 'node' && inspect.arch === arch.id ? inspect.node : undefined;

  const tabs: [Tab, string, number][] = [
    ['why', 'Why this design?', decisions.length],
    ['failures', 'Failure cases', failures.length + own.filter((c) => c.kind === 'limitation').length],
    ['break', 'Try to break it', attacks.length],
    ['evaluation', 'Evaluation', evals.length],
    ['code', 'Code', code.length],
    ['questions', 'Interviewer questions', e.questions.length],
  ];

  return (
    <div class="imw-view">
      <header class="imw-view-head">
        <div class="imw-eyebrow">X-Ray · system anatomy</div>
        <h3 data-autofocus tabIndex={-1}>{arch.title}</h3>
        <p class="imw-help">{arch.note} Select a component to see its purpose, inputs and outputs, why it exists, and the evidence behind it.</p>
      </header>
      <div class="imw-seg is-scroll" role="tablist" aria-label="System">
        {archs.map((a) => (
          <button key={a.id} role="tab" aria-selected={a.id === archId} class={a.id === archId ? 'is-on' : ''} onClick={() => { setArchId(a.id); setInspect(null); }}>
            {kb.entity.get(a.entity)?.short}
          </button>
        ))}
      </div>
      <ArchDiagram arch={arch} selected={selected} onSelect={(n) => setInspect({ kind: 'node', arch: arch.id, node: n })} />

      <div class="imw-subtabs" role="tablist" aria-label="Inspect">
        {tabs.filter(([, , n]) => n > 0).map(([id, label, n]) => (
          <button key={id} role="tab" aria-selected={tab === id} class={tab === id ? 'is-on' : ''} onClick={() => setTab(id)}>{label} <small>{n}</small></button>
        ))}
      </div>
      <div class="imw-tabpanel" role="tabpanel">
        {tab === 'why' && <div class="imw-stack">{decisions.map((d) => <DecisionCard key={d.id} id={d.id} />)}</div>}
        {tab === 'failures' && (
          <div class="imw-stack">
            {failures.map((f, i) => <FailureCard key={f.id} id={f.id} open={i === 0} />)}
            <ClaimList ids={own.filter((c) => c.kind === 'limitation').map((c) => c.id)} title="Stated limitations" />
          </div>
        )}
        {tab === 'break' && <div class="imw-attack-grid">{attacks.map((a) => <AttackCard key={a.id} id={a.id} />)}</div>}
        {tab === 'evaluation' && (
          <div class="imw-stack">
            <ClaimList ids={evals.map((c) => c.id)} />
            {arch.entity === 'cliniq' && <CliniqChart />}
            {arch.entity === 'voice' && <VoiceQualityChart />}
          </div>
        )}
        {tab === 'code' && <CodeLinks refs={code} max={30} />}
        {tab === 'questions' && (
          <div class="imw-stack">
            <p class="imw-help">Questions a skeptical interviewer could press on. Select one to see what the evidence says.</p>
            {e.questions.map((q) => <button key={q} class="imw-question" onClick={() => ask(q.includes(e.short) ? q : `${q} (${e.short})`)}>{q}</button>)}
          </div>
        )}
      </div>
    </div>
  );
}
