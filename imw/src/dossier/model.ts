// The downloadable dossier: everything a visitor explored in the workspace, rewritten for their
// perspective. This module only builds a document model from the evidence database and the
// session; it never reads pasted text (job descriptions are kept as detected requirements only)
// and it can only state verified, public-safe claims. pdf.ts turns the model into a PDF.
import type { KB } from '../engine/kb';
import { entityName, isStatable } from '../engine/kb';
import { CATEGORY_LABEL } from '../engine/coverage';
import { citedIds } from '../engine/answer';
import type { Answer, Block, Category, Claim, CoverageAnalysis, Entity, PersonaId } from '../engine/types';

export type Tone = 'artifact' | 'self';
export interface DocLink { label: string; url: string }

export type Node =
  | { t: 'cover'; name: string; headline: string; line: string; contacts: DocLink[] }
  | { t: 'h1'; text: string; lead?: string; keep?: number }
  | { t: 'h2'; text: string; meta?: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string; muted?: boolean }
  | { t: 'kv'; items: [string, string][] }
  | { t: 'bullets'; items: string[] }
  | { t: 'claim'; text: string; tone: Tone; meta: string; links: DocLink[] }
  | { t: 'req'; category: Category; label: string; detail: string }
  | { t: 'counts'; counts: Record<Category, number> }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'links'; items: DocLink[] }
  | { t: 'note'; text: string };

export interface Session {
  turns: { q: string; a?: Answer }[];
  analyses: CoverageAnalysis[];
  /** Entity ids the visitor opened directly (X-Ray, evidence panel), in order. */
  seen: string[];
}

export type SectionId = 'qa' | 'roles' | 'projects' | 'questions' | 'gaps';
export interface Options { persona: PersonaId; sections: Record<SectionId, boolean>; date?: Date }

interface Lens {
  label: string;
  intro: string;
  claims: number;
  code: number;
  decisions: number;
  failures: number;
  arch: boolean;
  projects: number;
}

// What each reader gets more or less of. The evidence is identical; only depth and emphasis change.
export const LENSES: Record<PersonaId, Lens> = {
  recruiter: {
    label: 'Recruiter', projects: 4, claims: 3, code: 1, decisions: 0, failures: 0, arch: false,
    intro: 'Written for screening: what Rahul has done, which parts are publicly verifiable, and what to confirm in a conversation.',
  },
  engineer: {
    label: 'Engineer', projects: 6, claims: 6, code: 3, decisions: 2, failures: 1, arch: true,
    intro: 'Written for a technical review: architecture, evaluation, failure cases and the exact code to open.',
  },
  manager: {
    label: 'Hiring manager', projects: 5, claims: 4, code: 1, decisions: 2, failures: 1, arch: false,
    intro: 'Written for a hiring manager: ownership, how problems were found and fixed, and where the evidence stops.',
  },
  founder: {
    label: 'Founder / Product', projects: 5, claims: 4, code: 1, decisions: 1, failures: 1, arch: false,
    intro: 'Written for a founder or product lead: the problem each system solves, what shipped, and the tradeoffs made.',
  },
  researcher: {
    label: 'Researcher', projects: 6, claims: 6, code: 2, decisions: 2, failures: 1, arch: false,
    intro: 'Written for a research review: methods, baselines, metrics, limitations and reproducibility.',
  },
};

export const SECTION_LABEL: Record<SectionId, string> = {
  qa: 'Your questions and answers',
  roles: 'Role and job-description evidence',
  projects: 'Projects and experience in detail',
  questions: 'Suggested interview questions',
  gaps: 'Gaps and items held back',
};

const WORK_KINDS = new Set(['project', 'research', 'experience']);
const GROUP_FALLBACK: Record<string, string> = { backend: 'Backend', data: 'Data engineering', domain: 'Domains', mlops: 'MLOps & deployment', vision: 'Computer vision', voice: 'Voice AI' };
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** Sort key for "Mar 2025 – May 2026" style ranges: ongoing first, then by end date. */
export function recency(dates: string): number {
  if (/present/i.test(dates)) return 1e6;
  const years = [...dates.matchAll(/\b(19|20)\d{2}\b/g)].map((m) => +m[0]);
  const months = [...dates.toLowerCase().matchAll(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/g)].map((m) => MONTHS.indexOf(m[1]));
  return (years.length ? Math.max(...years) : 0) * 12 + (months.length ? months[months.length - 1] : 0);
}
const uniq = <T,>(xs: T[]) => [...new Set(xs)];

export const summaryFor = (e: Entity, p: PersonaId) => e.summaries[p] ?? e.summaries.engineer ?? e.tagline;

function fmtDate(d: Date) {
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function filename(kb: KB, persona: PersonaId, d = new Date()) {
  const slug = kb.subject.name.replace(/[^A-Za-z0-9]+/g, '-');
  const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return `${slug}-evidence-dossier-${persona}-${iso}.pdf`;
}

export const footerFor = (kb: KB, persona: PersonaId) =>
  `${kb.subject.name} · Evidence dossier · ${LENSES[persona].label} perspective · ${(kb.subject.links.site ?? '').replace(/^https?:\/\/|\/$/g, '')}`;

/** Projects worth detailing: what the visitor opened or asked about, then what their role analyses ranked highest. */
export function exploredEntities(kb: KB, s: Session): string[] {
  const fromAnswers = s.turns.flatMap((t) => t.a?.entities.slice(0, 3) ?? []);
  const fromRoles = s.analyses.flatMap((a) => a.entities.slice(0, 3).map((e) => e.id));
  return uniq([...s.seen, ...fromAnswers, ...fromRoles]).filter((id) => WORK_KINDS.has(kb.entity.get(id)?.kind ?? ''));
}

export function projectsFor(kb: KB, s: Session, persona: PersonaId): { ids: string[]; defaulted: boolean } {
  const lens = LENSES[persona];
  const explored = exploredEntities(kb, s);
  if (explored.length) return { ids: explored.slice(0, lens.projects), defaulted: false };
  const fallback = (kb.roles.find((r) => r.priority === 1) ?? kb.roles[0]).focus_entities;
  return { ids: fallback.filter((id) => WORK_KINDS.has(kb.entity.get(id)?.kind ?? '')).slice(0, lens.projects), defaulted: true };
}

function claimNode(kb: KB, c: Claim, lens: Lens): Node | null {
  if (!isStatable(c)) return null;
  const tone: Tone = c.strength === 'public_artifact' ? 'artifact' : 'self';
  const links: DocLink[] = (c.code ?? []).slice(0, lens.code).map((r) => ({
    label: `${r.label} (${r.path}${r.lines ? `, lines ${r.lines[0]}–${r.lines[1]}` : ''})`, url: r.url,
  }));
  if (!links.length) {
    const src = c.sources.map((id) => kb.sources.find((x) => x.id === id)).find((x) => x?.public && x.url);
    if (src?.url) links.push({ label: src.title, url: src.url });
  }
  const status = tone === 'artifact' ? 'Verified · public artifact' : 'Verified · self-reported';
  return { t: 'claim', text: c.text, tone, meta: `${entityName(kb, c.entity)} · ${status}`, links };
}

const claimNodes = (kb: KB, ids: string[], lens: Lens) =>
  uniq(ids).map((id) => kb.claim.get(id)).filter(isStatable).map((c) => claimNode(kb, c, lens)!);

/** Strongest statable claims for an entity: public artifacts and measured results first, limitations last. */
function keyClaims(kb: KB, id: string, n: number): Claim[] {
  const rank = (c: Claim) => (c.strength === 'public_artifact' ? 0 : 2) + (c.kind === 'metric' ? 0 : 1);
  return (kb.statableByEntity.get(id) ?? []).filter((c) => c.kind !== 'limitation').sort((a, b) => rank(a) - rank(b)).slice(0, n);
}

function reqDetail(kb: KB, r: CoverageAnalysis['requirements'][number], used: Set<string>): string {
  if (r.category === 'direct' || r.category === 'related') {
    const where = r.entities.slice(0, 3).map((id) => entityName(kb, id)).join(', ');
    const via = r.category === 'related' && r.via ? `Related through ${kb.skill.get(r.via)?.name ?? r.via}. ` : '';
    // Each example is used once per analysis, so a long list does not repeat the same proof.
    const example = r.claims.map((id) => kb.claim.get(id)).find((c) => isStatable(c) && !used.has(c.id));
    if (example) used.add(example.id);
    return `${via}${where ? `Evidence: ${where}.` : ''}${example ? ` For example: ${example.text}` : ''}`.trim();
  }
  const closest = r.entities.length ? ` Closest evidence: ${r.entities.slice(0, 3).map((id) => entityName(kb, id)).join(', ')}.` : '';
  return `${r.statement ?? ''}${closest}`.trim();
}

function coverageNodes(kb: KB, a: CoverageAnalysis, max = 99): Node[] {
  const out: Node[] = [{ t: 'counts', counts: a.counts }];
  const used = new Set<string>();
  for (const cat of ['direct', 'related', 'verification', 'missing'] as const) {
    a.requirements.filter((r) => r.category === cat).slice(0, max).forEach((r) => out.push({ t: 'req', category: cat, label: r.label, detail: reqDetail(kb, r, used) }));
  }
  uniq(a.notes).forEach((n) => out.push({ t: 'note', text: n }));
  return out;
}

const sameAnalysis = (x: CoverageAnalysis, y: CoverageAnalysis) =>
  x.title === y.title && x.source === y.source && x.requirements.map((r) => r.id).join() === y.requirements.map((r) => r.id).join();

interface Ctx { kb: KB; persona: PersonaId; lens: Lens; detailed: CoverageAnalysis[] }

function blockNodes(x: Ctx, b: Block): Node[] {
  const { kb, persona, lens } = x;
  switch (b.type) {
    case 'p': return [{ t: 'p', text: b.text }];
    case 'note': return [{ t: 'note', text: b.text }];
    case 'claims': return [...(b.title ? [{ t: 'h3', text: b.title } as Node] : []), ...claimNodes(kb, b.ids, lens)];
    case 'entity': {
      const e = kb.entity.get(b.id);
      return e ? [{ t: 'p', text: `${e.name}: ${summaryFor(e, persona)}` }] : [];
    }
    case 'coverage': {
      const head: Node = { t: 'h3', text: `Evidence coverage: ${b.analysis.title}` };
      // The full breakdown is printed once, in the role section; answers point to it.
      if (x.detailed.some((a) => sameAnalysis(a, b.analysis))) {
        return [head, { t: 'counts', counts: b.analysis.counts }, { t: 'p', text: `The full requirement-by-requirement breakdown is in "${SECTION_LABEL.roles}".`, muted: true }];
      }
      return [head, ...coverageNodes(kb, b.analysis, 6)];
    }
    case 'xray': {
      const arch = kb.architectures.find((x) => x.id === b.arch);
      if (!arch) return [];
      return [{ t: 'h3', text: `System X-Ray: ${arch.title}` }, { t: 'bullets', items: arch.nodes.slice(0, 10).map((n) => `${n.label}: ${n.detail.purpose}`) }];
    }
    case 'failures':
      return b.ids.map((id) => kb.failures.find((f) => f.id === id)).filter((f) => !!f).flatMap((f) => [
        { t: 'h3', text: `Failure case: ${f.title}` } as Node,
        { t: 'kv', items: [['Problem', f.problem], ['How it was found', f.detection], ['Fix', f.fix], ['Prevention', f.prevention]] } as Node,
      ]);
    case 'decisions':
      return b.ids.map((id) => kb.decisions.find((d) => d.id === id)).filter((d) => !!d).flatMap((d) => [
        { t: 'h3', text: `Decision: ${d.title}` } as Node,
        { t: 'kv', items: [['Choice', d.choice], ['Why', d.rationale], ['Tradeoff', d.tradeoff]] } as Node,
      ]);
    case 'compare':
      return [{ t: 'table', head: ['', ...b.entities.map((id) => entityName(kb, id))], rows: b.rows.map((r) => [r.label, ...r.values]) }];
    case 'gaps':
      return [{ t: 'bullets', items: b.items.map((g) => `${g.name}: ${g.statement}${g.closest.length ? ` Closest evidence: ${g.closest.map((id) => entityName(kb, id)).join(', ')}.` : ''}`) }];
    case 'trace': {
      const tr = kb.traces.find((x) => x.id === b.id);
      if (!tr) return [];
      return [{ t: 'h3', text: `Recorded replay: ${tr.title}` }, { t: 'p', text: tr.summary, muted: true },
        { t: 'bullets', items: tr.steps.slice(0, 8).map((s) => `${s.label}${s.status ? ` (${s.status})` : ''}`) }];
    }
    case 'chart': return [];
  }
}

function answerNodes(x: Ctx, a: Answer): Node[] {
  const { kb, lens } = x;
  const out: Node[] = [];
  const notes = new Set<string>();
  for (const b of a.blocks) {
    for (const n of blockNodes(x, b)) {
      if (n.t === 'note') { if (notes.has(n.text)) continue; notes.add(n.text); }
      out.push(n);
    }
  }
  const shown = new Set(a.blocks.flatMap((b) => (b.type === 'claims' ? b.ids : [])));
  const cited = citedIds(a).filter((id) => !shown.has(id));
  const cites = claimNodes(kb, cited, lens).slice(0, 8);
  if (cites.length) out.push({ t: 'h3', text: 'Evidence cited' }, ...cites);
  return out;
}

function entityNodes(kb: KB, id: string, persona: PersonaId, lens: Lens): Node[] {
  const e = kb.entity.get(id);
  if (!e) return [];
  const out: Node[] = [
    { t: 'h2', text: e.name, meta: [e.role, e.dates].filter(Boolean).join(' · ') },
    { t: 'p', text: summaryFor(e, persona) },
  ];
  if (e.ownership) out.push({ t: 'kv', items: [['Ownership', e.ownership]] });
  const claims = keyClaims(kb, id, lens.claims).map((c) => claimNode(kb, c, lens)!);
  if (claims.length) out.push({ t: 'h3', text: 'Verified evidence' }, ...claims);
  const limits = (kb.statableByEntity.get(id) ?? []).filter((c) => c.kind === 'limitation').slice(0, 2);
  if (limits.length) out.push({ t: 'h3', text: 'Stated limitations' }, { t: 'bullets', items: limits.map((c) => c.text) });
  kb.decisions.filter((d) => d.entity === id).slice(0, lens.decisions).forEach((d) =>
    out.push({ t: 'h3', text: `Decision: ${d.title}` }, { t: 'kv', items: [['Choice', d.choice], ['Tradeoff', d.tradeoff]] }));
  kb.failures.filter((f) => f.entity === id).slice(0, lens.failures).forEach((f) =>
    out.push({ t: 'h3', text: `Failure case: ${f.title}` }, { t: 'kv', items: [['Problem', f.problem], ['Fix', f.fix], ['Prevention', f.prevention]] }));
  const arch = lens.arch ? kb.archByEntity.get(id) : undefined;
  if (arch) out.push({ t: 'h3', text: 'Architecture' }, { t: 'bullets', items: arch.nodes.slice(0, 8).map((n) => `${n.label}: ${n.detail.purpose}`) });
  const links = e.links.filter((l) => /^https?:/.test(l.url));
  if (links.length) out.push({ t: 'links', items: links.map((l) => ({ label: l.label, url: l.url })) });
  return out;
}

/** Skills that at least one public artifact demonstrates, grouped the way the portfolio groups them. */
export function evidencedSkills(kb: KB): [string, string[]][] {
  const groups = new Map<string, string[]>();
  for (const s of kb.skills) {
    const claims = kb.statableBySkill.get(s.id) ?? [];
    if (!claims.some((c) => c.strength === 'public_artifact')) continue;
    const label = kb.groups.find((g) => g.id === s.group)?.label ?? GROUP_FALLBACK[s.group] ?? s.group;
    (groups.get(label) ?? groups.set(label, []).get(label)!).push(s.name);
  }
  return [...groups.entries()];
}

export function buildDossier(kb: KB, s: Session, o: Options): { title: string; nodes: Node[]; filename: string } {
  const lens = LENSES[o.persona];
  const date = o.date ?? new Date();
  const { subject } = kb;
  const answered = s.turns.filter((t) => t.a);
  const nodes: Node[] = [];

  const contacts: DocLink[] = [
    { label: subject.email, url: `mailto:${subject.email}` },
    ...(subject.links.linkedin ? [{ label: 'LinkedIn', url: subject.links.linkedin }] : []),
    ...(subject.links.github ? [{ label: 'GitHub', url: subject.links.github }] : []),
    ...(subject.links.site ? [{ label: 'Portfolio', url: subject.links.site }] : []),
  ];
  nodes.push({
    t: 'cover', name: subject.name, headline: subject.headline, contacts,
    line: `Evidence dossier · ${lens.label} perspective · ${fmtDate(date)}`,
  });
  nodes.push({ t: 'p', text: lens.intro });
  const explored = [
    answered.length ? `${answered.length} question${answered.length === 1 ? '' : 's'} answered` : '',
    s.analyses.length ? `${s.analyses.length} role analys${s.analyses.length === 1 ? 'is' : 'es'}` : '',
  ].filter(Boolean).join(' · ');
  nodes.push({ t: 'note', text: `How to read this: "Verified · public artifact" means you can open the code, data, recording or paper behind it. "Verified · self-reported" is Rahul's description of work that is not public, such as employer systems. Nothing here is a fit score. ${explored ? `Session: ${explored}.` : ''}`.trim() });

  // At a glance: the experience timeline and the skills with public proof.
  nodes.push({ t: 'h1', text: 'At a glance' });
  nodes.push({ t: 'p', text: subject.level_note, muted: true });
  const exp = kb.entities.filter((e) => e.kind === 'experience').sort((a, b) => recency(b.dates) - recency(a.dates));
  if (exp.length) {
    nodes.push({ t: 'h3', text: 'Experience' });
    nodes.push({ t: 'table', head: ['Where', 'Role', 'Dates'], rows: exp.map((e) => [e.name, e.role ?? '', e.dates]) });
  }
  const other: [string, string][] = [
    ...kb.entities.filter((e) => e.kind === 'education').map((e) => ['Education', [e.name, e.role].filter(Boolean).join(': ')] as [string, string]),
    ...kb.entities.filter((e) => e.kind === 'leadership').map((e) => ['Leadership', `${e.role ? `${e.role}, ` : ''}${e.name} (${e.dates})`] as [string, string]),
  ];
  if (other.length) nodes.push({ t: 'kv', items: other });
  const skills = evidencedSkills(kb);
  if (skills.length) {
    nodes.push({ t: 'h3', text: 'Skills with public evidence' });
    nodes.push({ t: 'kv', items: skills.map(([g, names]) => [g, names.join(', ')] as [string, string]) });
  }

  const ctx: Ctx = { kb, persona: o.persona, lens, detailed: o.sections.roles ? s.analyses : [] };
  if (o.sections.qa && answered.length) {
    nodes.push({ t: 'h1', text: SECTION_LABEL.qa, lead: 'Each answer was generated from the evidence database and checked before it was shown.' });
    answered.forEach((t, i) => {
      nodes.push({ t: 'h2', text: `Q${i + 1}. ${t.q}`, meta: t.a!.engine === 'model' ? 'Written by Claude, validated against the evidence' : 'Answered by the evidence engine' });
      nodes.push(...answerNodes(ctx, t.a!));
    });
  }

  if (o.sections.roles && s.analyses.length) {
    nodes.push({ t: 'h1', text: SECTION_LABEL.roles, lead: 'Each requirement is classified by the evidence behind it. No score is computed.' });
    for (const a of s.analyses) {
      nodes.push({ t: 'h2', text: a.title, meta: a.source === 'jd' ? `Job description you provided${a.closestRole ? ` · closest target role: ${a.closestRole}` : ''}` : 'Target role' });
      nodes.push(...coverageNodes(kb, a));
    }
  }

  const projects = projectsFor(kb, s, o.persona);
  if (o.sections.projects && projects.ids.length) {
    nodes.push({ t: 'h1', text: SECTION_LABEL.projects, lead: projects.defaulted ? 'You did not open specific projects, so these are the strongest for an applied AI role.' : 'The work you explored, in the order you explored it.' });
    projects.ids.forEach((id) => nodes.push(...entityNodes(kb, id, o.persona, lens)));
  }

  if (o.sections.questions) {
    const qs = projects.ids.flatMap((id) => (kb.entity.get(id)?.questions ?? []).slice(0, 2).map((q) => `${entityName(kb, id)}: ${q}`));
    const gapQs = s.analyses.flatMap((a) => a.requirements.filter((r) => r.category === 'missing' || r.category === 'verification').slice(0, 2)
      .map((r) => `${r.label}: what is the closest thing you have done, and how would you close the gap?`));
    const all = uniq([...qs, ...gapQs]);
    if (all.length) {
      nodes.push({ t: 'h1', text: SECTION_LABEL.questions, lead: 'Questions that test the evidence above rather than repeat it.' });
      nodes.push({ t: 'bullets', items: all });
    }
  }

  if (o.sections.gaps) {
    nodes.push({ t: 'h1', text: SECTION_LABEL.gaps });
    const reqGaps = uniq(s.analyses.flatMap((a) => a.requirements.filter((r) => r.category === 'missing').map((r) => `${r.label}: ${r.statement ?? 'Not demonstrated in the evidence.'}`)));
    const gaps = reqGaps.length ? reqGaps : kb.gaps.filter((g) => !g.verify).slice(0, 6).map((g) => `${g.name}: ${g.statement}`);
    nodes.push({ t: 'h3', text: reqGaps.length ? 'Not demonstrated for the roles you checked' : 'Not currently demonstrated' }, { t: 'bullets', items: gaps });
    const held = kb.conflicts.map((c) => c.label).filter(Boolean);
    if (held.length) {
      nodes.push({ t: 'h3', text: 'Held back until verified' });
      nodes.push({ t: 'p', text: 'These résumé items have no public source yet, so this document and the assistant do not state their figures. Ask Rahul about them directly.', muted: true });
      nodes.push({ t: 'bullets', items: held });
    }
  }

  nodes.push({ t: 'h1', text: 'About this document', keep: 150 });
  nodes.push({ t: 'p', text: `Generated in your browser by Interview My Work on ${subject.links.site ?? 'the portfolio'} from evidence version ${kb.version}. Nothing you typed was uploaded to create it. Every claim links to its source, and the live workspace shows the full evidence trail for each one.`, muted: true });
  nodes.push({ t: 'links', items: [
    ...(subject.links.site ? [{ label: 'Open Interview My Work', url: `${subject.links.site.replace(/\/$/, '')}/#imw=ask` }] : []),
    { label: `Email ${subject.first}`, url: `mailto:${subject.email}` },
  ] });

  return { title: `${subject.name}: evidence dossier (${lens.label})`, nodes, filename: filename(kb, o.persona, date) };
}

/** Every string that will be printed, for tests and guards. */
export function dossierText(nodes: Node[]): string {
  return nodes.map((n) => {
    switch (n.t) {
      case 'cover': return [n.name, n.headline, n.line, ...n.contacts.map((c) => c.label)].join(' ');
      case 'h1': return `${n.text} ${n.lead ?? ''}`;
      case 'h2': return `${n.text} ${n.meta ?? ''}`;
      case 'h3': case 'p': case 'note': return n.text;
      case 'kv': return n.items.map(([k, v]) => `${k} ${v}`).join(' ');
      case 'bullets': return n.items.join(' ');
      case 'claim': return `${n.text} ${n.meta} ${n.links.map((l) => l.label).join(' ')}`;
      case 'req': return `${CATEGORY_LABEL[n.category]} ${n.label} ${n.detail}`;
      case 'counts': return '';
      case 'table': return [...n.head, ...n.rows.flat()].join(' ');
      case 'links': return n.items.map((l) => l.label).join(' ');
    }
  }).join('\n');
}
