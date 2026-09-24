import { useWs } from '../context';
import { CATEGORY_LABEL } from '../engine/coverage';
import { CoverageBar } from './charts';
import { Dot, Eyebrow } from './bits';

export function Rail() {
  const { kb, persona, setPersona, coverage, setCoverage, toggleLens, lensOn, go } = useWs();
  const p = kb.personas.find((x) => x.id === persona)!;
  return (
    <div class="imw-rail">
      <section>
        <Eyebrow>Answer depth</Eyebrow>
        <div class="imw-personas" role="radiogroup" aria-label="Who is asking">
          {kb.personas.map((x) => (
            <button key={x.id} role="radio" aria-checked={persona === x.id} class={persona === x.id ? 'is-on' : ''} onClick={() => setPersona(x.id)}>
              {x.label}
            </button>
          ))}
        </div>
        <p class="imw-help">{p.focus} Persona changes depth, never the facts.</p>
      </section>

      <section>
        <Eyebrow>Role context</Eyebrow>
        {coverage ? (
          <div class="imw-context-card">
            <strong>{coverage.title}</strong>
            {coverage.closestRole && coverage.source === 'jd' && <span class="imw-help">Closest target profile: {coverage.closestRole}</span>}
            <CoverageBar counts={coverage.counts} compact />
            <div class="imw-row">
              <button class="imw-mini-link" onClick={() => go('role')}>Open analysis</button>
              <button class="imw-mini-link" onClick={() => toggleLens(!lensOn)}>{lensOn ? 'Restore portfolio' : 'Show on portfolio'}</button>
              <button class="imw-mini-link" onClick={() => { setCoverage(null); if (lensOn) toggleLens(false); }}>Clear</button>
            </div>
          </div>
        ) : (
          <p class="imw-help">No role selected. <button class="imw-mini-link" onClick={() => go('role')}>Evaluate against a role →</button></p>
        )}
      </section>

      <section>
        <Eyebrow>Evidence states</Eyebrow>
        <ul class="imw-legend">
          <li><Dot cls="st-artifact" /> Verified, public artifact</li>
          <li><Dot cls="st-self" /> Verified, self-reported employment</li>
          <li><Dot cls="st-pending" /> Verification required (never stated)</li>
          <li><Dot cls="st-no" /> {CATEGORY_LABEL.missing}</li>
        </ul>
      </section>

      <section class="imw-rail-about">
        <Eyebrow>How this works</Eyebrow>
        <p class="imw-help">
          Answers come from {kb.claims.filter((c) => c.status === 'verified').length} verified claims with sources and pinned code links.
          {' '}{kb.claims.filter((c) => c.status !== 'verified').length} statements from other sources are held back until verified.
        </p>
        <button class="imw-mini-link" onClick={() => go('xray', 'imw')}>X-Ray this system →</button>
        <button class="imw-mini-link" onClick={() => go('connect')}>Connect your own AI (MCP) →</button>
      </section>
    </div>
  );
}
