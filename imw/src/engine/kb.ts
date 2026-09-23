import type { Bundle, Claim, Entity, Gap, Skill, Architecture, Role } from './types';
import { normalize } from './text';

export interface ConceptRef { id: string; kind: 'skill' | 'gap'; near: boolean; term: string }

export interface KB extends Bundle {
  claim: Map<string, Claim>;
  entity: Map<string, Entity>;
  skill: Map<string, Skill>;
  gap: Map<string, Gap>;
  role: Map<string, Role>;
  archByEntity: Map<string, Architecture>;
  /** Normalized alias → concept. Longest aliases first for greedy matching. */
  aliases: { term: string; ref: ConceptRef; re: RegExp }[];
  statableBySkill: Map<string, Claim[]>;
  statableByEntity: Map<string, Claim[]>;
  pendingBySkill: Map<string, Claim[]>;
}

/** Only verified, public-safe claims may be stated as fact. Everything else is surfaced as a gap or a pending item. */
export type StatableClaim = Claim & { status: 'verified'; public_safe: true };
export const isStatable = (c: Claim | undefined): c is StatableClaim => !!c && c.status === 'verified' && c.public_safe;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function aliasRegex(term: string): RegExp {
  // Word-ish boundaries that also work for terms like "c++", "ci/cd", "a/b testing".
  return new RegExp(`(?<![a-z0-9])${escape(term)}(?![a-z0-9+#])`, 'g');
}

export function buildKB(bundle: Bundle): KB {
  const kb = bundle as KB;
  kb.claim = new Map(bundle.claims.map((c) => [c.id, c]));
  kb.entity = new Map(bundle.entities.map((e) => [e.id, e]));
  kb.skill = new Map(bundle.skills.map((s) => [s.id, s]));
  kb.gap = new Map(bundle.gaps.map((g) => [g.id, g]));
  kb.role = new Map(bundle.roles.map((r) => [r.id, r]));
  kb.archByEntity = new Map(bundle.architectures.map((a) => [a.entity, a]));

  const aliases: KB['aliases'] = [];
  const push = (term: string, ref: Omit<ConceptRef, 'term'>) => {
    const t = normalize(term);
    if (t) aliases.push({ term: t, ref: { ...ref, term }, re: aliasRegex(t) });
  };
  for (const s of bundle.skills) {
    push(s.name, { id: s.id, kind: 'skill', near: false });
    s.aliases.forEach((a) => push(a, { id: s.id, kind: 'skill', near: false }));
    (s.near || []).forEach((a) => push(a, { id: s.id, kind: 'skill', near: true }));
  }
  for (const g of bundle.gaps) g.aliases.forEach((a) => push(a, { id: g.id, kind: 'gap', near: false }));
  aliases.sort((a, b) => b.term.length - a.term.length);
  kb.aliases = aliases;

  kb.statableBySkill = new Map();
  kb.statableByEntity = new Map();
  kb.pendingBySkill = new Map();
  for (const c of bundle.claims) {
    if (isStatable(c)) {
      for (const t of c.tags) (kb.statableBySkill.get(t) ?? kb.statableBySkill.set(t, []).get(t)!).push(c);
      (kb.statableByEntity.get(c.entity) ?? kb.statableByEntity.set(c.entity, []).get(c.entity)!).push(c);
    } else if (c.status === 'verification_required') {
      for (const t of c.tags) (kb.pendingBySkill.get(t) ?? kb.pendingBySkill.set(t, []).get(t)!).push(c);
    }
  }
  return kb;
}

export async function loadKB(url: string): Promise<KB> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`evidence ${res.status}`);
  return buildKB((await res.json()) as Bundle);
}

export const entityName = (kb: KB, id: string) => kb.entity.get(id)?.short ?? id;
export const conceptName = (kb: KB, id: string) => kb.skill.get(id)?.name ?? kb.gap.get(id)?.name ?? id;
