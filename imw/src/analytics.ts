// Privacy-respecting hooks. The site has no analytics today, so events are only dispatched as
// DOM CustomEvents ("imw:event") that a future analytics snippet may listen to. Pasted text
// (questions, job descriptions) is never included in an event.
export type ImwEvent =
  | 'interview_my_work_opened' | 'starter_question_selected' | 'role_selected' | 'jd_analyzed'
  | 'evidence_opened' | 'project_opened_from_ai' | 'contact_clicked_from_ai' | 'portfolio_lens_applied'
  | 'xray_opened' | 'replay_played' | 'brief_generated';

export function track(name: ImwEvent, detail: Record<string, string | number | boolean> = {}) {
  try { window.dispatchEvent(new CustomEvent('imw:event', { detail: { name, ...detail } })); } catch { /* no-op */ }
}
