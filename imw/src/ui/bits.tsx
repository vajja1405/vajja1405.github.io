import type { ComponentChildren } from 'preact';
import type { Action, Category, Claim, CodeRef } from '../engine/types';
import { useWs } from '../context';
import { track } from '../analytics';
import { roleAnalysis } from '../engine/coverage';

export function statusLabel(c: Claim): string {
  if (c.status === 'verified') return c.strength === 'public_artifact' ? 'Verified · public artifact' : 'Verified · self-reported';
  return { verification_required: 'Verification required', unsupported: 'Unsupported', deprecated: 'Withdrawn' }[c.status] ?? c.status;
}

export function statusClass(c: Claim): string {
  if (c.status === 'verified') return c.strength === 'public_artifact' ? 'st-artifact' : 'st-self';
  return c.status === 'verification_required' ? 'st-pending' : 'st-no';
}

export const Dot = ({ cls, label }: { cls: string; label?: string }) => <i class={`imw-dot ${cls}`} aria-hidden={label ? undefined : 'true'} aria-label={label} />;

export function CodeLinks({ refs, max = 4 }: { refs?: CodeRef[]; max?: number }) {
  if (!refs?.length) return null;
  return (
    <ul class="imw-code">
      {refs.slice(0, max).map((r) => (
        <li key={r.url}>
          <a href={r.url} target="_blank" rel="noopener">
            <span class="imw-code-label">{r.label}</span>
            <span class="imw-code-path">{r.path}{r.lines ? `#L${r.lines[0]}–${r.lines[1]}` : ''}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ClaimRow({ id, compact }: { id: string; compact?: boolean }) {
  const { kb, setInspect, inspect } = useWs();
  const c = kb.claim.get(id);
  if (!c) return null;
  const e = kb.entity.get(c.entity);
  const on = inspect?.kind === 'claim' && inspect.id === id;
  return (
    <li class={`imw-claim${on ? ' is-on' : ''}`}>
      <button class="imw-claim-btn" onClick={() => setInspect({ kind: 'claim', id })} aria-label={`View evidence: ${c.text}`}>
        <Dot cls={statusClass(c)} />
        <span class="imw-claim-text">{c.text}</span>
      </button>
      {!compact && (
        <div class="imw-claim-meta">
          <span>{e?.short}</span>
          <span class={`imw-st ${statusClass(c)}`}>{statusLabel(c)}</span>
          {c.code?.length ? <a href={c.code[0].url} target="_blank" rel="noopener" class="imw-mini-link">Code ↗</a> : null}
          <button class="imw-mini-link" onClick={() => setInspect({ kind: 'claim', id })}>Evidence</button>
        </div>
      )}
    </li>
  );
}

export function ClaimList({ ids, title, compact }: { ids: string[]; title?: string; compact?: boolean }) {
  if (!ids.length) return null;
  return (
    <div class="imw-claims">
      {title && <div class="imw-eyebrow">{title}</div>}
      <ul>{ids.map((id) => <ClaimRow key={id} id={id} compact={compact} />)}</ul>
    </div>
  );
}

export function ActionButton({ a }: { a: Action }) {
  const { go, jump, ask, toggleLens, coverage, kb } = useWs();
  if (a.kind === 'url') {
    const contact = a.target.startsWith('mailto:') || a.target.includes('linkedin');
    return <a class="imw-btn" href={a.target} target={a.target.startsWith('mailto:') ? undefined : '_blank'} rel="noopener" onClick={() => contact && track('contact_clicked_from_ai')}>{a.label} <span aria-hidden="true">↗</span></a>;
  }
  const onClick = () => {
    if (a.kind === 'anchor') return jump(a.target);
    if (a.kind === 'ask') return ask(a.target);
    if (a.target === 'transform') {
      return toggleLens(true, a.arg && a.arg !== coverage?.roleId ? roleAnalysis(kb, a.arg) : undefined);
    }
    go(a.target as never, a.arg);
  };
  return <button class="imw-btn" onClick={onClick}>{a.label}{a.kind === 'anchor' ? <span aria-hidden="true"> ↓</span> : null}</button>;
}

export const CAT_CLASS: Record<Category, string> = { direct: 'cat-direct', related: 'cat-related', verification: 'cat-pending', missing: 'cat-missing' };

export function Eyebrow({ children }: { children: ComponentChildren }) {
  return <div class="imw-eyebrow">{children}</div>;
}

export function EntityChip({ id }: { id: string }) {
  const { kb, setInspect } = useWs();
  const e = kb.entity.get(id);
  if (!e) return null;
  return <button class="imw-chip" onClick={() => setInspect({ kind: 'entity', id })}>{e.short}</button>;
}
