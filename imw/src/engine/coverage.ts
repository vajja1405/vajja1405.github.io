import type { Category, CoverageAnalysis, RequirementCoverage } from './types';
import { conceptName, type KB } from './kb';

const ENTITY_WEIGHT: Record<string, number> = { public_artifact: 1, self_reported: 0.8 };

/** Evidence coverage for one concept. Never produces a score, only a category with its evidence. */
export function coverConcept(kb: KB, id: string, opts: { near?: string; priority?: RequirementCoverage['priority'] } = {}): RequirementCoverage {
  const gap = kb.gap.get(id);
  if (gap) {
    const closest = gap.related.flatMap((r) => kb.statableBySkill.get(r) ?? []);
    return {
      id, label: gap.name, category: gap.verify ? 'verification' : 'missing', priority: opts.priority,
      claims: [], entities: uniq(closest.map((c) => c.entity)).slice(0, 4), statement: gap.statement,
      via: gap.related[0],
    };
  }
  const skill = kb.skill.get(id);
  if (!skill) {
    return { id: `term:${id}`, label: id, term: id, category: 'missing', priority: opts.priority, claims: [], entities: [],
      statement: 'The evidence database has nothing that addresses this requirement.' };
  }
  const direct = kb.statableBySkill.get(id) ?? [];
  const pending = (kb.pendingBySkill.get(id) ?? []).map((c) => c.id);

  // A "near" term (e.g. Pinecone) is only related evidence, even when the parent skill is direct.
  if (opts.near) {
    return {
      id: `near:${opts.near}`, label: titleCase(opts.near), term: opts.near, category: direct.length ? 'related' : 'missing',
      priority: opts.priority, claims: direct.slice(0, 6).map((c) => c.id), entities: uniq(direct.map((c) => c.entity)),
      via: id, statement: direct.length
        ? `${titleCase(opts.near)} itself is not demonstrated. The closest evidence is ${skill.name.toLowerCase()}.`
        : `${titleCase(opts.near)} is not demonstrated.`,
    };
  }
  if (direct.length) {
    const artifact = direct.some((c) => c.strength === 'public_artifact');
    return { id, label: skill.name, category: 'direct', priority: opts.priority, claims: rank(direct).map((c) => c.id),
      entities: uniq(rank(direct).map((c) => c.entity)), strength: artifact ? 'artifact' : 'self_reported', pending };
  }
  for (const rel of skill.related) {
    const r = kb.statableBySkill.get(rel) ?? [];
    if (r.length) {
      return { id, label: skill.name, category: 'related', priority: opts.priority, via: rel, claims: rank(r).slice(0, 6).map((c) => c.id),
        entities: uniq(r.map((c) => c.entity)), pending,
        statement: `No direct evidence for ${skill.name.toLowerCase()}. The closest is ${conceptName(kb, rel).toLowerCase()}.` };
    }
  }
  if (pending.length) {
    return { id, label: skill.name, category: 'verification', priority: opts.priority, claims: [], entities: [], pending,
      statement: 'Only claims that still need verification mention this.' };
  }
  return { id, label: skill.name, category: 'missing', priority: opts.priority, claims: [], entities: [],
    statement: `${skill.name} is not currently demonstrated in the portfolio.` };
}

function rank<T extends { strength: string; kind: string }>(cs: T[]): T[] {
  return [...cs].sort((a, b) => (ENTITY_WEIGHT[b.strength] ?? 0) - (ENTITY_WEIGHT[a.strength] ?? 0) || (a.kind === 'limitation' ? 1 : 0) - (b.kind === 'limitation' ? 1 : 0));
}

export function summarize(kb: KB, title: string, reqs: RequirementCoverage[], extra: Partial<CoverageAnalysis> = {}): CoverageAnalysis {
  const counts: Record<Category, number> = { direct: 0, related: 0, verification: 0, missing: 0 };
  reqs.forEach((r) => counts[r.category]++);
  const byEntity = new Map<string, { score: number; requirements: string[] }>();
  for (const r of reqs) {
    if (r.category !== 'direct' && r.category !== 'related') continue;
    for (const e of r.entities) {
      const cur = byEntity.get(e) ?? { score: 0, requirements: [] };
      // This workspace is real work, but it should not pad a role's evidence ahead of the projects it describes.
      cur.score += (r.category === 'direct' ? 1 : 0.4) * (e === 'imw' ? 0.4 : 1);
      cur.requirements.push(r.id);
      byEntity.set(e, cur);
    }
  }
  const order: Category[] = ['direct', 'related', 'verification', 'missing'];
  const pr = { required: 0, preferred: 1, mentioned: 2, undefined: 1 } as Record<string, number>;
  return {
    title, source: 'role', notes: [], ...extra,
    requirements: [...reqs].sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category) || pr[String(a.priority)] - pr[String(b.priority)]),
    counts,
    entities: [...byEntity.entries()].map(([id, v]) => ({ id, ...v })).filter((e) => kb.entity.has(e.id)).sort((a, b) => b.score - a.score),
  };
}

export function roleAnalysis(kb: KB, roleId: string): CoverageAnalysis {
  const role = kb.role.get(roleId);
  if (!role) throw new Error(`unknown role ${roleId}`);
  const reqs = [...role.requirements.map((r) => coverConcept(kb, r)), ...role.gaps.map((g) => coverConcept(kb, g))];
  const notes = [role.level_note, kb.subject.level_note].filter(Boolean) as string[];
  return summarize(kb, role.title, reqs, { source: 'role', roleId, notes });
}

export const CATEGORY_LABEL: Record<Category, string> = {
  direct: 'Direct evidence',
  related: 'Related evidence',
  verification: 'Verification required',
  missing: 'Not currently demonstrated',
};

const uniq = <T,>(xs: T[]) => [...new Set(xs)];
const titleCase = (s: string) => s.replace(/\b[a-z]/g, (c) => c.toUpperCase());
