// "Let Rahul know you stopped by": an optional note the visitor writes, emailed to Rahul through Web3Forms.
// Only what the visitor types is sent, plus coarse context (perspective, where they were, coverage counts).
// Pasted job descriptions and questions are never included.
import type { CoverageAnalysis, PersonaId } from './engine/types';

export interface HelloFields { name: string; company: string; role: string; email: string; message: string; botcheck: boolean }
export type HelloWhere = 'jd' | 'pdf';

/** The Web3Forms access key from the page's site config; empty means the card stays hidden. */
export function helloKey(): string {
  try { return (window as unknown as { __siteCfg?: { web3forms?: string } }).__siteCfg?.web3forms ?? ''; } catch { return ''; }
}

const clip = (s: string, n: number) => s.replace(/\s+/g, ' ').trim().slice(0, n);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function helloPayload(key: string, f: HelloFields, ctx: { persona: PersonaId; where: HelloWhere; coverage?: CoverageAnalysis | null }) {
  const name = clip(f.name, 80), company = clip(f.company, 80), email = clip(f.email, 120);
  const c = ctx.coverage;
  return {
    access_key: key,
    subject: `Portfolio visitor: ${[name, company].filter(Boolean).join(', ') || 'someone who left a note'}`,
    from_name: 'vajja1405.github.io',
    name: name || '(not given)',
    company: company || '(not given)',
    their_role: clip(f.role, 80) || '(not given)',
    message: f.message.trim().slice(0, 1000) || '(no message)',
    // Web3Forms uses "email" as the reply-to address, so only a well-formed one is passed on.
    ...(EMAIL.test(email) ? { email } : {}),
    perspective: ctx.persona,
    left_after: ctx.where === 'jd' ? 'a job-description analysis' : 'downloading the PDF',
    ...(c ? { coverage: `${c.counts.direct} direct, ${c.counts.related} related, ${c.counts.verification} to verify, ${c.counts.missing} not demonstrated${c.closestRole ? `; closest profile: ${c.closestRole}` : ''}` } : {}),
    botcheck: f.botcheck,
  };
}

export async function sendHello(payload: ReturnType<typeof helloPayload>): Promise<boolean> {
  const r = await fetch('https://api.web3forms.com/submit', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload),
  });
  const body = await r.json().catch(() => ({})) as { success?: boolean };
  return r.ok && body.success === true;
}
