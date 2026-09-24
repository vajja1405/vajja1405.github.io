import { useEffect, useMemo, useState } from 'preact/hooks';
import type { PersonaId } from '../engine/types';
import { useWs } from '../context';
import { track } from '../analytics';
import { entityName } from '../engine/kb';
import { buildDossier, filename, LENSES, projectsFor, SECTION_LABEL, type SectionId } from '../dossier/model';
import { renderPdf, saveBlob } from '../dossier/pdf';

type Status = { kind: 'idle' } | { kind: 'busy' } | { kind: 'done'; file: string } | { kind: 'error' };

/** "Take this with you": a PDF of what this visitor explored, written for their perspective. */
export function ExportView() {
  const { kb, persona, session, go } = useWs();
  const [lens, setLens] = useState<PersonaId>(persona);
  useEffect(() => setLens(persona), [persona]);
  const answered = session.turns.filter((t) => t.a);
  const projects = useMemo(() => projectsFor(kb, session, lens), [kb, session, lens]);
  const [sections, setSections] = useState<Record<SectionId, boolean>>({ qa: true, roles: true, projects: true, questions: true, gaps: true });
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  // Start fetching the PDF library while the visitor reviews the options.
  useEffect(() => { void import('jspdf').catch(() => { /* retried on click */ }); }, []);

  const detail: Record<SectionId, { text: string; empty?: string; items?: string[] }> = {
    qa: {
      text: `${answered.length} question${answered.length === 1 ? '' : 's'} with answers and the evidence each one cited`,
      empty: 'Ask a question first and it will be included here.',
      items: answered.map((t) => t.q),
    },
    roles: {
      text: `${session.analyses.length} analys${session.analyses.length === 1 ? 'is' : 'es'}, requirement by requirement`,
      empty: 'Evaluate a role or paste a job description to include it here.',
      items: session.analyses.map((a) => a.title),
    },
    projects: {
      text: projects.defaulted ? 'You have not opened a project yet, so this includes the strongest work for an applied AI role:' : 'The work you explored, with verified evidence, limitations and links:',
      items: projects.ids.map((id) => entityName(kb, id)),
    },
    questions: { text: 'Questions that test the evidence rather than repeat it, including your gaps' },
    gaps: { text: 'What is not demonstrated, and résumé figures held back until a source confirms them' },
  };
  const available = (id: SectionId) => (id === 'qa' ? answered.length > 0 : id === 'roles' ? session.analyses.length > 0 : true);
  const file = filename(kb, lens);

  const download = async () => {
    setStatus({ kind: 'busy' });
    try {
      const doc = buildDossier(kb, session, { persona: lens, sections });
      const pdf = await renderPdf(doc.nodes, {
        title: doc.title, author: kb.subject.name,
        footer: `${kb.subject.name} · Evidence dossier · ${LENSES[lens].label} perspective · ${(kb.subject.links.site ?? '').replace(/^https?:\/\/|\/$/g, '')}`,
      });
      saveBlob(pdf.output('blob'), doc.filename);
      track('dossier_downloaded', { persona: lens, questions: answered.length, analyses: session.analyses.length });
      setStatus({ kind: 'done', file: doc.filename });
    } catch {
      setStatus({ kind: 'error' });
    }
  };

  return (
    <div class="imw-view imw-export">
      <header class="imw-view-head">
        <div class="imw-eyebrow">Download · PDF</div>
        <h3 data-autofocus tabIndex={-1}>Take this with you</h3>
        <p class="imw-lead">A PDF of what you explored here, written for your perspective: your questions with their answers and sources, the roles you checked, and the projects you opened. Every claim keeps its evidence label and link.</p>
      </header>

      <div class="imw-eyebrow">Written for</div>
      <div class="imw-personas is-inline" role="radiogroup" aria-label="Perspective">
        {kb.personas.map((p) => (
          <button key={p.id} role="radio" aria-checked={lens === p.id} class={lens === p.id ? 'is-on' : ''} onClick={() => setLens(p.id)}>{p.label}</button>
        ))}
      </div>
      <p class="imw-help imw-export-intro">{LENSES[lens].intro}</p>

      <div class="imw-eyebrow">Include</div>
      <ul class="imw-export-list">
        <li class="is-fixed">
          <span class="imw-export-check" aria-hidden="true" />
          <span><strong>Contact details and experience at a glance</strong><small>Always included: roles and dates, education, and the skills that public work demonstrates.</small></span>
        </li>
        {(Object.keys(SECTION_LABEL) as SectionId[]).map((id) => {
          const d = detail[id];
          const on = available(id) && sections[id];
          return (
            <li key={id} class={available(id) ? '' : 'is-empty'}>
              <label>
                <input type="checkbox" checked={on} disabled={!available(id)} onChange={(e) => setSections({ ...sections, [id]: (e.target as HTMLInputElement).checked })} />
                <span>
                  <strong>{SECTION_LABEL[id]}</strong>
                  <small>{available(id) ? d.text : d.empty}</small>
                  {available(id) && d.items && d.items.length > 0 && (
                    <span class="imw-export-items">{d.items.slice(0, 6).map((x) => <em key={x}>{x}</em>)}{d.items.length > 6 && <em>+{d.items.length - 6} more</em>}</span>
                  )}
                </span>
              </label>
              {!available(id) && (
                <button class="imw-mini-link" onClick={() => go(id === 'qa' ? 'ask' : 'role')}>{id === 'qa' ? 'Ask a question →' : 'Evaluate a role →'}</button>
              )}
            </li>
          );
        })}
      </ul>

      <div class="imw-export-go">
        <button class="imw-btn is-primary" onClick={download} disabled={status.kind === 'busy'}>
          {status.kind === 'busy' ? 'Building PDF…' : 'Download PDF'}
        </button>
        <span class="imw-help">{file}</span>
      </div>
      <p class="imw-help" role="status" aria-live="polite">
        {status.kind === 'done' && `Downloaded ${status.file}. You can keep exploring and download again; the PDF always reflects the whole session.`}
        {status.kind === 'error' && 'The PDF could not be built. Check your connection and try again; the rest of the workspace still works.'}
        {status.kind !== 'done' && status.kind !== 'error' && 'Built in your browser. Nothing you typed or pasted is uploaded, and pasted job descriptions appear only as the requirements that were detected.'}
      </p>
    </div>
  );
}
