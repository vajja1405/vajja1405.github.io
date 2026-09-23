import type { Claim } from './types';
import { isStatable, type ConceptRef, type KB } from './kb';
import { normalize, tokens } from './text';

export interface ConceptHit extends ConceptRef { count: number; index: number }

/** Greedy longest-match concept detection over the skill/gap ontology. */
export function findConcepts(kb: KB, text: string): ConceptHit[] {
  const t = normalize(text);
  const taken: [number, number][] = [];
  const hits = new Map<string, ConceptHit>();
  for (const a of kb.aliases) {
    a.re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = a.re.exec(t))) {
      const s = m.index, e = s + m[0].length;
      if (taken.some(([x, y]) => s < y && e > x)) continue;
      taken.push([s, e]);
      const key = a.ref.near ? `near:${a.ref.term}` : a.ref.id;
      const prev = hits.get(key);
      if (prev) prev.count++;
      else hits.set(key, { ...a.ref, count: 1, index: s });
    }
  }
  return [...hits.values()].sort((a, b) => a.index - b.index);
}

const ENTITY_ALIASES: Record<string, string[]> = {
  dia: ['drug interaction', 'drug-interaction', 'drug agent', 'interaction agent', 'medication review', 'medication app', 'medication-label', 'label review', 'rxnorm', 'dailymed', 'drug app'],
  voice: ['voice harness', 'voice-agent', 'voice agent qa', 'qa harness', 'voice qa', 'pretty good ai', 'synthetic patient', 'voice project', 'phone agent', 'harness', 'barge-in', 'barge in'],
  cliniq: ['cliniq', 'clin iq', 'substance', 'research-a-thon', 'nsf'],
  sssd: ['surgical', 'ss-sd', 'sssd', 'kinematic', 'jigsaws', 'video synthesis', 'suturing'],
  qml: ['quantum', 'qcnn', 'qsvm', 'chest x-ray', 'classical vs'],
  tifin: ['tifin', 'portfolio copilot', 'advisor copilot', 'copilot', 'copilots'],
  citizen: ['citizen health', 'citizen'],
  athena: ['athena'],
  nyc: ['citi bike', 'bike share', 'bike-share', 'smartinternz', 'nyc'],
  dac: ['data analytics club', 'student club', 'vice president'],
  education: ['degree', 'masters', "master's", 'education', 'university', 'umkc', 'certification', 'certifications', 'certificate'],
  imw: ['interview my work', 'this assistant', 'this tool', 'this chatbot', 'this workspace', 'you built', 'how do you work', 'how were you built', 'this system'],
};
const ENTITY_RES = Object.entries(ENTITY_ALIASES).map(
  ([id, al]) => [id, new RegExp(`(?<![a-z0-9])(${al.map((a) => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`)] as const,
);

export function findEntities(text: string): string[] {
  const t = normalize(text);
  return ENTITY_RES.filter(([, re]) => re.test(t))
    .map(([id]) => id)
    .sort((a, b) => t.search(ENTITY_RES.find(([i]) => i === a)![1]) - t.search(ENTITY_RES.find(([i]) => i === b)![1]));
}

// ---- BM25 over statable claims -------------------------------------------------------------

interface Index { docs: { claim: Claim; toks: string[] }[]; df: Map<string, number>; avg: number }
const cache = new WeakMap<KB, Index>();

function index(kb: KB): Index {
  let idx = cache.get(kb);
  if (idx) return idx;
  const docs = kb.claims.filter(isStatable).map((claim) => {
    const extra = [kb.entity.get(claim.entity)?.name ?? '', ...claim.tags.map((t) => kb.skill.get(t)?.name ?? '')].join(' ');
    return { claim, toks: tokens(`${claim.text} ${extra}`) };
  });
  const df = new Map<string, number>();
  for (const d of docs) new Set(d.toks).forEach((t) => df.set(t, (df.get(t) ?? 0) + 1));
  idx = { docs, df, avg: docs.reduce((s, d) => s + d.toks.length, 0) / Math.max(1, docs.length) };
  cache.set(kb, idx);
  return idx;
}

export interface Scored { claim: Claim; score: number }

export function retrieve(kb: KB, query: string, opts: { limit?: number; entities?: string[]; concepts?: string[] } = {}): Scored[] {
  const idx = index(kb);
  const q = [...new Set(tokens(query))];
  const concepts = new Set(opts.concepts ?? findConcepts(kb, query).filter((c) => c.kind === 'skill').map((c) => c.id));
  const ents = new Set(opts.entities ?? findEntities(query));
  const N = idx.docs.length, k1 = 1.2, b = 0.75;
  const out: Scored[] = [];
  for (const d of idx.docs) {
    let s = 0;
    for (const term of q) {
      const f = d.toks.filter((x) => x === term).length;
      if (!f) continue;
      const n = idx.df.get(term) ?? 0;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      s += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.toks.length) / idx.avg)));
    }
    for (const t of d.claim.tags) if (concepts.has(t)) s += 2.5;
    if (ents.has(d.claim.entity)) s += 3;
    if (d.claim.kind === 'limitation') s *= 0.8;
    if (s > 0) out.push({ claim: d.claim, score: s });
  }
  return out.sort((a, b) => b.score - a.score).slice(0, opts.limit ?? 12);
}
