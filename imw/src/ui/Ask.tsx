import { useEffect, useRef, useState } from 'preact/hooks';
import type { Answer } from '../engine/types';
import { useWs } from '../context';
import { looksLikeJD } from '../engine/jd';
import { isStatable } from '../engine/kb';
import { track } from '../analytics';
import { AnswerView } from './Blocks';

export interface Turn { id: number; q: string; a?: Answer; pending?: boolean }

const STARTERS: { q: string; mode?: 'role' | 'jd' }[] = [
  { q: 'What has Rahul actually shipped?' },
  { q: 'Show me his strongest RAG work.' },
  { q: 'How does he evaluate AI systems?' },
  { q: 'What has he built beyond LLM wrappers?' },
  { q: 'Show me his backend engineering experience.' },
  { q: 'What failure did he find and fix?' },
  { q: 'Evaluate Rahul for a role', mode: 'role' },
  { q: 'Paste a job description', mode: 'jd' },
];

export function AskView({ turns }: { turns: Turn[] }) {
  const { kb, ask, go, persona, setPersona } = useWs();
  const [text, setText] = useState('');
  const input = useRef<HTMLTextAreaElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const last = turns[turns.length - 1];

  // Scroll to the start of the newest answer, not the bottom.
  useEffect(() => {
    const el = log.current?.querySelector<HTMLElement>('.imw-turn:last-child');
    el?.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [turns.length, last?.pending]);

  const submit = () => {
    const q = text.trim();
    if (!q) return;
    setText('');
    ask(q);
  };
  const jd = looksLikeJD(text);
  const codeLinks = kb.claims.reduce((n, c) => n + (isStatable(c) ? c.code?.length ?? 0 : 0), 0);

  return (
    <div class="imw-ask">
      <div class="imw-log" ref={log}>
        {turns.length === 0 && (
          <div class="imw-welcome">
            <div class="imw-eyebrow">✦ Interview My Work</div>
            <h3 data-autofocus tabIndex={-1}>Ask about my projects, engineering decisions, experience, or how my background maps to a role.</h3>
            <p class="imw-lead">Don't just read my résumé. Inspect the evidence behind the work: every answer links to its source, measured result and code.</p>
            <dl class="imw-stats is-inline">
              <div><dt>{kb.claims.filter(isStatable).length}</dt><dd>verified claims</dd></div>
              <div><dt>{codeLinks}</dt><dd>pinned code links</dd></div>
              <div><dt>{kb.architectures.length}</dt><dd>system X-Rays</dd></div>
              <div><dt>{kb.traces.length}</dt><dd>recorded replays</dd></div>
            </dl>
            <div class="imw-eyebrow">Who's asking? <span class="imw-help">(optional)</span></div>
            <div class="imw-personas is-inline" role="radiogroup" aria-label="Who is asking">
              {kb.personas.map((p) => (
                <button key={p.id} role="radio" aria-checked={persona === p.id} class={persona === p.id ? 'is-on' : ''} onClick={() => setPersona(p.id)}>{p.label}</button>
              ))}
            </div>
            <div class="imw-eyebrow">Start with</div>
            <div class="imw-starters">
              {STARTERS.map((s, i) => (
                <button key={s.q} onClick={() => {
                  track('starter_question_selected', { index: i });
                  if (s.mode) go('role', s.mode === 'jd' ? 'jd' : undefined);
                  else ask(s.q);
                }}>
                  <span class="imw-starter-n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{s.q}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {turns.map((t) => (
          <section key={t.id} class="imw-turn" aria-label={`Question: ${t.q}`}>
            <p class="imw-q"><span class="imw-eyebrow">You asked</span>{t.q}</p>
            {t.pending && <div class="imw-pending" role="status"><span class="imw-pulse" aria-hidden="true" />Retrieving evidence and validating the answer…</div>}
            {t.a && <AnswerView a={t.a} />}
          </section>
        ))}
      </div>
      <form class="imw-composer" onSubmit={(e) => { e.preventDefault(); submit(); }}>
        {jd && <p class="imw-jd-hint">This looks like a job description. Sending it runs an evidence-coverage analysis.</p>}
        <label class="sr-only" for="imw-q">Ask a question or paste a job description</label>
        <textarea id="imw-q" ref={input} rows={1} value={text} placeholder="Ask a question, or paste a job description…" maxLength={12000}
          onInput={(e) => { const el = e.target as HTMLTextAreaElement; setText(el.value); el.style.height = 'auto'; el.style.height = `${Math.min(el.scrollHeight, 180)}px`; }}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } }} />
        <button type="submit" class="imw-send" disabled={!text.trim()}>{jd ? 'Analyze' : 'Ask'}</button>
      </form>
    </div>
  );
}
