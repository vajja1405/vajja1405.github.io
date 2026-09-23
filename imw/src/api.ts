// Client for the optional AI backend. Everything here fails soft: the evidence engine
// answers whenever the API is missing, asleep, slow, rate-limited or returns invalid output.
import type { Answer, Block, PersonaId } from './engine/types';
import { isStatable, type KB } from './engine/kb';
import { HYPE } from './engine/guard';

const DEFAULT_API = 'https://astra6-interview-my-work.hf.space';

export function apiBase(): string {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="imw-api"]');
  return (meta?.content || DEFAULT_API).replace(/\/$/, '');
}

export type ApiStatus = 'checking' | 'waking' | 'ready' | 'offline';

async function fetchJSON(path: string, init: RequestInit & { timeout: number }): Promise<any> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), init.timeout);
  try {
    const res = await fetch(apiBase() + path, { ...init, signal: ctl.signal, headers: { 'Content-Type': 'application/json', ...(init.headers || {}) } });
    if (!res.ok) throw Object.assign(new Error(`HTTP ${res.status}`), { status: res.status });
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

/** Health check that tolerates a sleeping Hugging Face Space: one quick probe, then one patient retry. */
export async function probe(onStatus: (s: ApiStatus) => void): Promise<void> {
  onStatus('checking');
  const settle = (h: { ai_enabled?: boolean }) => onStatus(h?.ai_enabled ? 'ready' : 'offline');
  try {
    settle(await fetchJSON('/api/health', { method: 'GET', timeout: 4000 }));
    return;
  } catch { /* probably asleep */ }
  onStatus('waking');
  try {
    settle(await fetchJSON('/api/health', { method: 'GET', timeout: 45000 }));
  } catch {
    onStatus('offline');
  }
}

interface ModelAnswer {
  sentences: { text: string; cites: string[] }[];
  hypothetical?: string | null;
  gaps?: string[];
  followups?: string[];
  entities?: string[];
  model?: string;
  checks?: { label: string; ok: boolean }[];
  retrieved?: string[];
}

/** Ask the model. Its output is re-validated here against the local evidence before display. */
export async function askModel(kb: KB, question: string, persona: PersonaId, history: { q: string; cites: string[] }[], roleId?: string): Promise<Answer> {
  const data = (await fetchJSON('/api/ask', {
    method: 'POST', timeout: 30000,
    body: JSON.stringify({ question, persona, history: history.slice(-3), role: roleId ?? null }),
  })) as ModelAnswer;

  const cites = data.sentences.flatMap((s) => s.cites);
  const allText = [...data.sentences.map((s) => s.text), data.hypothetical ?? ''].join(' ');
  if (!data.sentences.length || cites.some((id) => !isStatable(kb.claim.get(id))) || HYPE.test(allText)) {
    throw new Error('model answer failed client validation');
  }

  const blocks: Block[] = [];
  let para: { text: string; cites: string[] } = { text: '', cites: [] };
  for (const s of data.sentences) {
    para.text += (para.text ? ' ' : '') + s.text.trim();
    para.cites.push(...s.cites);
    if (para.text.length > 320) { blocks.push({ type: 'p', text: para.text, cites: [...new Set(para.cites)] }); para = { text: '', cites: [] }; }
  }
  if (para.text) blocks.push({ type: 'p', text: para.text, cites: [...new Set(para.cites)] });
  if (data.hypothetical) blocks.push({ type: 'note', tone: 'info', text: `Hypothetical, not implemented: ${data.hypothetical}` });
  const gaps = (data.gaps ?? []).map((g) => kb.gap.get(g)).filter(Boolean);
  if (gaps.length) blocks.push({ type: 'gaps', items: gaps.map((g) => ({ id: g!.id, name: g!.name, statement: g!.statement, closest: [] })) });

  return {
    blocks, followups: (data.followups ?? []).slice(0, 4), actions: [], engine: 'model', intent: 'model',
    entities: (data.entities ?? []).filter((e) => kb.entity.has(e)),
    basis: { retrieved: data.retrieved ?? [...new Set(cites)], checks: data.checks, model: data.model },
  };
}

export async function parseJDRemote(text: string): Promise<string[]> {
  const data = await fetchJSON('/api/jd', { method: 'POST', timeout: 25000, body: JSON.stringify({ text: text.slice(0, 12000) }) });
  return Array.isArray(data.requirements) ? data.requirements.filter((x: unknown) => typeof x === 'string').slice(0, 30) : [];
}
