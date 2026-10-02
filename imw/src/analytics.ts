// Privacy-respecting hooks. Events are dispatched as DOM CustomEvents ("imw:event"); the page's GoatCounter
// snippet (index.html) counts them, without cookies. Pasted text (questions, job descriptions) is never
// included in an event.
export type ImwEvent =
  | 'interview_my_work_opened' | 'starter_question_selected' | 'role_selected' | 'jd_analyzed'
  | 'evidence_opened' | 'project_opened_from_ai' | 'contact_clicked_from_ai' | 'portfolio_lens_applied'
  | 'xray_opened' | 'replay_played' | 'brief_generated' | 'dossier_downloaded'
  | 'persona_selected' | 'hello_opened' | 'hello_sent';

export function track(name: ImwEvent, detail: Record<string, string | number | boolean> = {}) {
  try { window.dispatchEvent(new CustomEvent('imw:event', { detail: { name, ...detail } })); } catch { /* no-op */ }
}
