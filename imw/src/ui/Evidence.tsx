import { useWs } from '../context';
import { isStatable } from '../engine/kb';
import { CATEGORY_LABEL, coverConcept } from '../engine/coverage';
import { ActionButton, CAT_CLASS, ClaimList, CodeLinks, Dot, Eyebrow, statusClass, statusLabel } from './bits';

export function EvidencePanel() {
  const ws = useWs();
  const { inspect, setInspect } = ws;
  return (
    <div class="imw-evidence">
      <div class="imw-evidence-head">
        <span class="imw-eyebrow">Evidence</span>
        {inspect && <button class="imw-icon imw-evidence-close" onClick={() => setInspect(null)} aria-label="Close evidence">✕</button>}
      </div>
      <div class="imw-evidence-body" aria-live="polite">
        {!inspect && <Intro />}
        {inspect?.kind === 'claim' && <ClaimCard id={inspect.id} />}
        {inspect?.kind === 'node' && <NodeCard arch={inspect.arch} node={inspect.node} />}
        {inspect?.kind === 'req' && <ReqCard />}
        {inspect?.kind === 'entity' && <EntityCard id={inspect.id} />}
        {inspect?.kind === 'group' && <GroupCard id={inspect.id} />}
        {inspect?.kind === 'basis' && <BasisCard />}
      </div>
    </div>
  );
}

function Intro() {
  const { kb } = useWs();
  const code = kb.claims.reduce((n, c) => n + (isStatable(c) ? c.code?.length ?? 0 : 0), 0);
  return (
    <div class="imw-intro">
      <p>Select any claim, architecture component or requirement to inspect what supports it: sources, measured results and the exact code.</p>
      <dl class="imw-stats">
        <div><dt>{kb.claims.filter(isStatable).length}</dt><dd>verified claims</dd></div>
        <div><dt>{code}</dt><dd>pinned code links</dd></div>
        <div><dt>{kb.architectures.length}</dt><dd>system X-Rays</dd></div>
        <div><dt>{kb.failures.length}</dt><dd>failure write-ups</dd></div>
      </dl>
      <p class="imw-help">Evidence panels show sources and validation checks. They never show hidden model reasoning.</p>
    </div>
  );
}

function ClaimCard({ id }: { id: string }) {
  const { kb, setInspect } = useWs();
  const c = kb.claim.get(id);
  if (!c) return null;
  const e = kb.entity.get(c.entity);
  const nodes = kb.architectures.flatMap((a) => a.nodes.filter((n) => n.detail.claims.includes(id)).map((n) => ({ a, n })));
  const stories = [...kb.decisions, ...kb.failures].filter((s) => s.claims.includes(id));
  return (
    <article class="imw-card">
      <span class={`imw-st ${statusClass(c)}`}><Dot cls={statusClass(c)} /> {statusLabel(c)}</span>
      <p class="imw-card-claim">{c.text}</p>
      {c.note && <p class="imw-note is-warn">{c.note}</p>}
      {c.metrics?.length ? (
        <dl class="imw-metrics">{c.metrics.map((m) => <div key={m.label}><dt>{m.value}</dt><dd>{m.label}</dd></div>)}</dl>
      ) : null}
      {e && <p class="imw-help">From <button class="imw-mini-link" onClick={() => setInspect({ kind: 'entity', id: e.id })}>{e.name}</button> · verified {c.last_verified}</p>}
      <Eyebrow>Sources</Eyebrow>
      <ul class="imw-sources">
        {c.sources.map((sid) => {
          const s = kb.sources.find((x) => x.id === sid)!;
          return <li key={sid}>{s.url && s.public ? <a href={s.url} target="_blank" rel="noopener">{s.title} ↗</a> : <span>{s.title} <em>(private cross-check)</em></span>}</li>;
        })}
      </ul>
      {c.code?.length ? <><Eyebrow>Show me the code</Eyebrow><CodeLinks refs={c.code} /></> : null}
      {nodes.length ? (
        <>
          <Eyebrow>Appears in</Eyebrow>
          <ul class="imw-sources">{nodes.map(({ a, n }) => <li key={a.id + n.id}><button class="imw-mini-link" onClick={() => setInspect({ kind: 'node', arch: a.id, node: n.id })}>{a.title} → {n.label}</button></li>)}</ul>
        </>
      ) : null}
      {stories.length ? <p class="imw-help">Also referenced by: {stories.map((s) => s.title).join('; ')}</p> : null}
    </article>
  );
}

function NodeCard({ arch, node }: { arch: string; node: string }) {
  const { kb } = useWs();
  const a = kb.architectures.find((x) => x.id === arch);
  const n = a?.nodes.find((x) => x.id === node);
  if (!a || !n) return null;
  const code = n.detail.claims.flatMap((id) => kb.claim.get(id)?.code ?? []);
  return (
    <article class="imw-card">
      <span class="imw-eyebrow">{a.title} · component</span>
      <h3 class="imw-card-title">{n.label}</h3>
      <p class="imw-help">{n.sub}</p>
      <dl class="imw-kv">
        <dt>Purpose</dt><dd>{n.detail.purpose}</dd>
        <dt>Input → output</dt><dd>{n.detail.input} → {n.detail.output}</dd>
        {n.detail.why && <><dt>Why it matters</dt><dd>{n.detail.why}</dd></>}
        {n.detail.observed && <><dt>Observed</dt><dd>{n.detail.observed}</dd></>}
      </dl>
      <ClaimList ids={n.detail.claims} title="Supporting claims" compact />
      {code.length ? <><Eyebrow>Code</Eyebrow><CodeLinks refs={code} max={3} /></> : null}
    </article>
  );
}

function ReqCard() {
  const { kb, inspect } = useWs();
  if (inspect?.kind !== 'req') return null;
  const r = inspect.req;
  const via = r.via ? kb.skill.get(r.via)?.name : undefined;
  const pending = (r.pending ?? []).map((id) => kb.claim.get(id)).filter(Boolean);
  return (
    <article class="imw-card">
      <span class={`imw-cat ${CAT_CLASS[r.category]}`}>{CATEGORY_LABEL[r.category]}</span>
      <h3 class="imw-card-title">{r.label}</h3>
      {r.priority && <p class="imw-help">Listed as {r.priority} in the description.</p>}
      {r.statement && <p>{r.statement}</p>}
      {r.category === 'direct' && r.strength === 'self_reported' && <p class="imw-note">Supported by self-reported employment experience; no public artifact.</p>}
      {via && r.category === 'related' && <p class="imw-help">Related through: {via}</p>}
      <ClaimList ids={r.claims.slice(0, 8)} title={r.category === 'missing' ? 'Closest evidence' : 'Evidence'} compact />
      {pending.length ? <p class="imw-note is-warn">{pending.length} related statement{pending.length > 1 ? 's are' : ' is'} awaiting verification and not used here.</p> : null}
    </article>
  );
}

export function EntityCard({ id }: { id: string }) {
  const { kb, persona } = useWs();
  const e = kb.entity.get(id);
  if (!e) return null;
  const claims = (kb.statableByEntity.get(id) ?? []).filter((c) => c.kind !== 'limitation').slice(0, 5).map((c) => c.id);
  return (
    <article class="imw-card">
      <span class="imw-eyebrow">{e.kind} · {e.dates}</span>
      <h3 class="imw-card-title">{e.name}</h3>
      {e.role && <p class="imw-help">{e.role}</p>}
      <p>{e.summaries[persona] ?? e.tagline}</p>
      {e.ownership && <p class="imw-help">Ownership: {e.ownership}</p>}
      <div class="imw-actions">
        {kb.archByEntity.has(id) && <ActionButton a={{ kind: 'mode', label: 'X-Ray', target: 'xray', arg: id }} />}
        <ActionButton a={{ kind: 'anchor', label: 'Jump to section', target: e.anchor }} />
        {e.links.slice(0, 2).map((l) => <ActionButton key={l.url} a={{ kind: 'url', label: l.label, target: l.url }} />)}
      </div>
      <ClaimList ids={claims} title="Key evidence" compact />
    </article>
  );
}

function GroupCard({ id }: { id: string }) {
  const { kb, setInspect } = useWs();
  const g = kb.groups.find((x) => x.id === id);
  if (!g) return null;
  const skills = kb.skills.filter((s) => s.group === id).map((s) => ({ s, cov: coverConcept(kb, s.id) }));
  return (
    <article class="imw-card">
      <span class="imw-eyebrow">Capability area</span>
      <h3 class="imw-card-title">{g.label}</h3>
      <ul class="imw-reqs">
        {skills.map(({ s, cov }) => (
          <li key={s.id}>
            <button class="imw-req-btn" onClick={() => setInspect({ kind: 'req', req: cov })}>
              <i class={`imw-cat-dot ${CAT_CLASS[cov.category]}`} aria-hidden="true" />
              <span>{s.name}</span>
              <small>{cov.entities.slice(0, 3).map((e) => kb.entity.get(e)?.short).join(' · ') || CATEGORY_LABEL[cov.category]}</small>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BasisCard() {
  const { inspect } = useWs();
  if (inspect?.kind !== 'basis') return null;
  return (
    <article class="imw-card">
      <span class="imw-eyebrow">Why this answer?</span>
      <p>{inspect.engine === 'model'
        ? `Written by ${inspect.model ?? 'Claude'} from a retrieved evidence pack, then validated by the API and again in your browser before display.`
        : 'Composed by the deterministic evidence engine in your browser. No model was involved.'}</p>
      {inspect.checks?.length ? (
        <ul class="imw-checks">{inspect.checks.map((c) => <li key={c.label} class={c.ok ? 'ok' : 'bad'}><span aria-hidden="true">{c.ok ? '✓' : '✕'}</span> {c.label}</li>)}</ul>
      ) : null}
      <ClaimList ids={inspect.retrieved.slice(0, 12)} title="Evidence used" compact />
      <p class="imw-help">This panel lists sources and checks only. It never shows hidden model reasoning.</p>
    </article>
  );
}
