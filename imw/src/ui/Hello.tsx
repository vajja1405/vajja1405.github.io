import { useState } from 'preact/hooks';
import { useWs } from '../context';
import { track } from '../analytics';
import { helloKey, helloPayload, sendHello, type HelloFields, type HelloWhere } from '../hello';

const SEEN = 'imw-hello-done';
const seen = () => { try { return sessionStorage.getItem(SEEN) === '1'; } catch { return false; } };
const remember = () => { try { sessionStorage.setItem(SEEN, '1'); } catch { /* private mode */ } };

/** Optional "Let Rahul know you stopped by" note, shown after a job-description analysis or a PDF download. */
export function HelloCard({ where }: { where: HelloWhere }) {
  const { kb, persona, coverage } = useWs();
  const key = helloKey();
  const [state, setState] = useState<'closed' | 'open' | 'busy' | 'sent' | 'error' | 'hidden'>(() => (seen() ? 'hidden' : 'closed'));
  const [f, setF] = useState<HelloFields>({ name: '', company: '', role: kb.personas.find((p) => p.id === persona)?.label ?? '', email: '', message: '', botcheck: false });
  if (!key || state === 'hidden') return null;

  const set = (k: keyof HelloFields) => (e: Event) => setF({ ...f, [k]: (e.target as HTMLInputElement).value });
  const dismiss = () => { remember(); setState('hidden'); };
  const send = async (e: Event) => {
    e.preventDefault();
    setState('busy');
    try {
      const ok = await sendHello(helloPayload(key, f, { persona, where, coverage }));
      setState(ok ? 'sent' : 'error');
      if (ok) { remember(); track('hello_sent', { where }); }
    } catch { setState('error'); }
  };

  if (state === 'sent') {
    return <div class="imw-hello" role="status"><b>Thanks{f.name.trim() ? `, ${f.name.trim().split(' ')[0]}` : ''}.</b> Rahul will see your note.</div>;
  }
  if (state === 'closed') {
    return (
      <div class="imw-hello">
        <p><b>{where === 'jd' ? 'Hiring for this role?' : 'Taking this to your team?'}</b> Let Rahul know you stopped by. It's optional and takes ten seconds.</p>
        <div class="imw-actions">
          <button class="imw-btn is-primary" onClick={() => { setState('open'); track('hello_opened', { where }); }}>Leave a note</button>
          <button class="imw-btn" onClick={dismiss}>No thanks</button>
        </div>
      </div>
    );
  }
  return (
    <form class="imw-hello" onSubmit={send}>
      <p><b>Let Rahul know you stopped by</b></p>
      <div class="imw-hello-grid">
        <label>Name<input value={f.name} onInput={set('name')} maxLength={80} autoComplete="name" /></label>
        <label>Company<input value={f.company} onInput={set('company')} maxLength={80} autoComplete="organization" /></label>
        <label>Your role<input value={f.role} onInput={set('role')} maxLength={80} placeholder="Recruiter, hiring manager…" /></label>
        <label>Email, if you'd like a reply<input type="email" value={f.email} onInput={set('email')} maxLength={120} autoComplete="email" /></label>
        <label class="is-wide">Message<textarea rows={3} value={f.message} onInput={set('message')} maxLength={1000} placeholder="What role are you hiring for, or what would you like to talk about?" /></label>
        {/* Honeypot: people never see or fill this; bots that do are rejected. */}
        <input type="checkbox" class="imw-hello-trap" tabIndex={-1} aria-hidden="true" checked={f.botcheck} onChange={(e) => setF({ ...f, botcheck: (e.target as HTMLInputElement).checked })} />
      </div>
      <p class="imw-help">Every field is optional. Your note is emailed to Rahul and not stored on this site. Please leave out anything confidential.</p>
      <div class="imw-actions">
        <button type="submit" class="imw-btn is-primary" disabled={state === 'busy' || !(f.name.trim() || f.company.trim() || f.message.trim() || f.email.trim())}>
          {state === 'busy' ? 'Sending…' : 'Send to Rahul'}
        </button>
        <button type="button" class="imw-btn" onClick={dismiss}>Cancel</button>
      </div>
      {state === 'error' && <p class="imw-note is-warn" role="alert">The note couldn't be sent. You can email Rahul directly at <a href={`mailto:${kb.subject.email}`}>{kb.subject.email}</a>.</p>}
    </form>
  );
}
