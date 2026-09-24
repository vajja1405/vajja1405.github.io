import { useEffect, useMemo, useState } from 'preact/hooks';
import { useWs } from '../context';
import { roleAnalysis } from '../engine/coverage';
import { isStatable } from '../engine/kb';
import { track } from '../analytics';
import { ClaimList, CodeLinks } from './bits';
import { DecisionCard, FailureCard } from './Blocks';
import { CoverageBar } from './charts';

/** "Technical interview me": a deterministic, evidence-only briefing for a 10-minute review. */
export function BriefView() {
  const { kb, coverage, modeArg, setCoverage, go } = useWs();
  const [roleId, setRoleId] = useState(modeArg && kb.role.has(modeArg) ? modeArg : coverage?.roleId ?? 'applied_ai');
  useEffect(() => { if (modeArg && kb.role.has(modeArg)) setRoleId(modeArg); }, [modeArg]);
  const useCurrent = coverage?.source === 'jd' && !modeArg;
  const a = useMemo(() => (useCurrent && coverage ? coverage : roleAnalysis(kb, roleId)), [kb, roleId, useCurrent, coverage]);
  useEffect(() => { track('brief_generated', { role: a.roleId ?? 'jd' }); }, [a]);

  const top = a.entities.filter((e) => e.id !== 'imw' && kb.entity.get(e.id)?.kind !== 'education').slice(0, 3).map((e) => kb.entity.get(e.id)!);
  const topIds = top.map((e) => e.id);
  const decisions = kb.decisions.filter((d) => topIds.includes(d.entity)).slice(0, 3);
  const failures = kb.failures.filter((f) => topIds.includes(f.entity)).slice(0, 2);
  const limitation = kb.claims.find((c) => isStatable(c) && c.kind === 'limitation' && topIds.includes(c.entity));
  const gaps = a.requirements.filter((r) => r.category === 'missing').slice(0, 2);
  const code = topIds.flatMap((id) => (kb.statableByEntity.get(id) ?? []).flatMap((c) => c.code ?? [])).filter((r) => r.lines).slice(0, 4);
  const research = kb.claims.find((c) => isStatable(c) && c.kind === 'metric' && ['cliniq', 'sssd', 'qml'].includes(c.entity) && (topIds.includes(c.entity) || c.entity === 'cliniq'));
  const questions = top.flatMap((e) => e.questions.slice(0, 2).map((q) => ({ e: e.short, q })));

  const md = () => [
    `# 10-minute technical brief: ${a.title}`,
    `Candidate: ${kb.subject.name}. Evidence-only; no fit score.`,
    '', '## Strongest relevant systems', ...top.map((e) => `- **${e.name}**: ${e.summaries.engineer ?? e.tagline}`),
    '', '## Decisions worth questioning', ...decisions.map((d) => `- ${d.title}. Tradeoff: ${d.tradeoff}`),
    '', '## Failure cases', ...failures.map((f) => `- ${f.title}: ${f.fix}`),
    '', '## Limitations and gaps', ...(limitation ? [`- ${limitation.text}`] : []), ...gaps.map((g) => `- ${g.label}: ${g.statement}`),
    '', '## Code to open', ...code.map((c) => `- ${c.label}: ${c.url}`),
    '', '## Suggested questions', ...questions.map((x) => `- (${x.e}) ${x.q}`),
  ].join('\n');

  const [copied, setCopied] = useState(false);
  return (
    <div class="imw-view imw-brief">
      <header class="imw-view-head">
        <div class="imw-eyebrow">Technical interview brief · 10 minutes</div>
        <h3 data-autofocus tabIndex={-1}>{a.title}</h3>
        <div class="imw-row">
          {!useCurrent && (
            <label class="imw-select">
              <span>Role</span>
              <select value={roleId} onChange={(e) => setRoleId((e.target as HTMLSelectElement).value)}>
                {kb.roles.map((r) => <option key={r.id} value={r.id}>{r.title}</option>)}
              </select>
            </label>
          )}
          <button class="imw-btn" onClick={async () => { try { await navigator.clipboard.writeText(md()); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* ignore */ } }}>{copied ? 'Copied' : 'Copy as Markdown'}</button>
          <button class="imw-btn" onClick={() => { setCoverage(a); go('export'); }}>Download PDF</button>
        </div>
        <CoverageBar counts={a.counts} compact />
      </header>

      <ol class="imw-agenda">
        <li>
          <span class="imw-time">0–2 min</span>
          <h4>Strongest relevant systems</h4>
          {top.map((e) => <p key={e.id}><strong>{e.name}.</strong> {e.summaries.engineer ?? e.tagline}</p>)}
        </li>
        <li>
          <span class="imw-time">2–5 min</span>
          <h4>Decisions worth questioning</h4>
          <div class="imw-stack">{decisions.map((d) => <DecisionCard key={d.id} id={d.id} />)}</div>
        </li>
        <li>
          <span class="imw-time">5–7 min</span>
          <h4>Failure cases</h4>
          <div class="imw-stack">{failures.map((f) => <FailureCard key={f.id} id={f.id} />)}</div>
        </li>
        <li>
          <span class="imw-time">7–8 min</span>
          <h4>Limitations and gaps</h4>
          {limitation && <ClaimList ids={[limitation.id]} compact />}
          {gaps.map((g) => <p key={g.id} class="imw-note">{g.label}: {g.statement}</p>)}
          {research && <><div class="imw-eyebrow">One research result</div><ClaimList ids={[research.id]} compact /></>}
        </li>
        <li>
          <span class="imw-time">8–10 min</span>
          <h4>Code to open</h4>
          <CodeLinks refs={code} />
        </li>
        <li>
          <span class="imw-time">Questions</span>
          <h4>Suggested interview questions</h4>
          <ul class="imw-bullets">{questions.map((x) => <li key={x.q}><em>{x.e}:</em> {x.q}</li>)}</ul>
        </li>
      </ol>
    </div>
  );
}
