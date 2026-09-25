// Written answers for the question families people actually ask about a candidate (teamwork,
// leadership, "why hire him"...), plus the structured-answer helpers the rest of the engine uses.
// Topic text is authored in evidence/topics.json and validated at build time: every point cites
// verified claims, and every number appears in the claims it cites.

import type { Action, Answer, Block, Claim, PersonaId, Topic, TopicPoint } from './types';
import { conceptName, isStatable, type KB } from './kb';
import { normalize } from './text';

const uniq = <T,>(xs: T[]) => [...new Set(xs)];

/** Pushback on an earlier answer: "how can you say that?", "how does that make sense?". */
export const CHALLENGE = /(how (can|could|do|would) you (say|know|tell|claim|conclude)|what makes you (say|think)|why (do|would) you (say|think)|prove (it|that|this)|how (does|do|did) (that|this|it) (make sense|prove|show|follow|answer|mean)|how (that|this|it) makes? sense|(that|this|it) (doesn'?t|does not|didn'?t) make (any )?sense|makes? no sense|what('?s| is) the (evidence|proof|reasoning|logic)|explain (that|this|why|your reasoning|how)|\bhow so\b|^really\b|are you sure|i don'?t (get|understand|buy|see)|not convinced|so what|why does (that|this) matter|^why\??$|^but (how|why|what)\b)/;

const compiled = new Map<string, RegExp[]>();
const patterns = (t: Topic) => {
  let r = compiled.get(t.id);
  if (!r) compiled.set(t.id, (r = t.match.map((m) => new RegExp(m, 'i'))));
  return r;
};

/** The best-matching topic: the one with the most matching patterns (ties go to the earlier, more specific topic). */
export function matchTopic(kb: KB, question: string): Topic | undefined {
  const q = normalize(question);
  let best: Topic | undefined;
  let score = 0;
  for (const t of kb.topics ?? []) {
    const s = patterns(t).reduce((n, re) => n + (re.test(q) ? 1 : 0), 0);
    if (s > score) { best = t; score = s; }
  }
  return best;
}

export const topicById = (kb: KB, id?: string) => (id ? kb.topics?.find((t) => t.id === id) : undefined);

function resolved(kb: KB, t: Topic) {
  const from = (id?: string) => topicById(kb, id);
  return {
    points: t.points ?? from(t.points_from)?.points ?? [],
    takeaway: t.takeaway ?? from(t.takeaway_from)?.takeaway,
    why: t.why ?? from(t.why_from)?.why,
    plain: t.plain ?? from(t.why_from)?.plain,
    failures: t.failures ?? from(t.points_from)?.failures ?? [],
  };
}

export interface StructuredParts {
  lead: string;
  leadCites?: string[];
  points: TopicPoint[];
  takeaway?: string;
  takeawayCites?: string[];
  /** Blocks shown between the points and the bottom line (diagrams, charts, failure cards). */
  extra?: Block[];
  /** Claims listed under the collapsible "Sources"; defaults to everything cited. */
  sources?: string[];
}

/** The shape every conversational answer takes: a direct answer, labeled reasons, a bottom line, sources. */
export function structuredBlocks(p: StructuredParts): Block[] {
  const blocks: Block[] = [{ type: 'p', text: p.lead, cites: p.leadCites?.length ? p.leadCites : undefined, lead: true }];
  if (p.points.length) blocks.push({ type: 'points', items: p.points });
  if (p.extra?.length) blocks.push(...p.extra);
  if (p.takeaway) blocks.push({ type: 'takeaway', text: p.takeaway, cites: p.takeawayCites });
  const sources = p.sources ?? uniq([...(p.leadCites ?? []), ...p.points.flatMap((x) => x.cites), ...(p.takeawayCites ?? [])]);
  if (sources.length) blocks.push({ type: 'claims', title: 'Sources', ids: sources, collapsed: true });
  return blocks;
}

function answerOf(intent: string, blocks: Block[], extra: Partial<Answer>): Answer {
  return { blocks, followups: extra.followups ?? [], actions: extra.actions ?? [], engine: 'evidence', intent, entities: extra.entities ?? [], topic: extra.topic };
}

const entityActions = (kb: KB, ids: string[]): Action[] =>
  ids.map((id) => kb.entity.get(id)).filter((e) => !!e && e.kind !== 'education').slice(0, 2)
    .map((e) => ({ kind: 'anchor' as const, label: `See ${e!.short} on the portfolio`, target: e!.anchor }));

/** Answer a topic. `challenged` leads with the reasoning, for "how can you say that?" follow-ups. */
export function topicAnswer(kb: KB, t: Topic, persona: PersonaId, opts: { challenged?: boolean; again?: boolean; lead?: string } = {}): Answer {
  const r = resolved(kb, t);
  const failures = persona === 'recruiter' || persona === 'founder' ? [] : r.failures.filter((id) => kb.failures.some((f) => f.id === id));
  // Pushed back once: explain the reasoning. Pushed back again: say it plainly instead of repeating it.
  const lead = opts.challenged && opts.again ? r.plain ?? `Put simply: ${r.takeaway?.text.replace(/^(For your team|Bottom line): /, '') ?? t.lead.text}`
    : opts.challenged && r.why ? `Fair question. ${r.why}` : opts.lead ?? t.lead.text;
  const blocks = structuredBlocks({
    lead,
    leadCites: opts.challenged ? [] : t.lead.cites,
    points: r.points,
    takeaway: r.takeaway?.text,
    takeawayCites: r.takeaway?.cites,
    extra: failures.length ? [{ type: 'failures', ids: failures.slice(0, 2) }] : [],
  });
  return answerOf(opts.challenged ? 'reasoning' : 'topic_answer', blocks, {
    entities: t.entities, topic: t.id,
    actions: t.actions ?? entityActions(kb, t.entities),
    followups: t.followups,
  });
}

/** Pushback on an answer that was not a topic: explain what the answer rested on and how it connects. */
export function reasoningAnswer(kb: KB, persona: PersonaId, last: { question?: string; entities?: string[] }): Answer {
  const e = last.entities?.map((id) => kb.entity.get(id)).find(Boolean);
  const claims = e ? (kb.statableByEntity.get(e.id) ?? []).filter((c) => c.kind !== 'limitation').slice(0, 2) : [];
  const points: TopicPoint[] = [
    { label: 'What the answer rests on', text: 'Only verified evidence: public code, data, recordings and papers, plus his employment history, with each item labelled by how it can be checked.', cites: [] },
  ];
  if (e) points.push({ label: `What it shows about ${e.short}`, text: e.summaries[persona] ?? e.tagline, cites: claims.map((c) => c.id) });
  points.push({ label: 'How it connects to your question', text: 'Those are the closest verified items to what you asked. If you meant something more specific, ask it directly, for example "How does he handle disagreements in a team?", and you will get an answer to that exact question.', cites: [] });
  const blocks = structuredBlocks({
    lead: last.question ? `Fair question. The previous answer was about "${last.question}". Here is the reasoning behind it:` : 'Fair question. Here is the reasoning:',
    points,
  });
  return answerOf('reasoning', blocks, {
    entities: e ? [e.id] : [],
    followups: ['How does he work in a team?', 'What has Rahul actually shipped?', 'Why should we hire Rahul?'],
  });
}

/** Label for a claim shown as a point: the most specific skill it demonstrates. */
export function claimLabel(kb: KB, c: Claim): string {
  const generic = new Set(['python', 'metrics', 'healthcare', 'fintech', 'product_judgment', 'testing']);
  const tag = c.tags.find((t) => !generic.has(t)) ?? c.tags[0];
  return tag ? conceptName(kb, tag) : kb.entity.get(c.entity)?.short ?? 'Evidence';
}

/** Group claims into one point per project or role, in the order given. */
export function entityPoints(kb: KB, claims: Claim[], perEntity = 2): TopicPoint[] {
  const groups = new Map<string, Claim[]>();
  for (const c of claims.filter(isStatable)) {
    const g = groups.get(c.entity) ?? groups.set(c.entity, []).get(c.entity)!;
    if (g.length < perEntity) g.push(c);
  }
  return [...groups.entries()].map(([id, cs]) => {
    const e = kb.entity.get(id);
    const label = e ? (e.kind === 'experience' && e.role ? `${e.short} · ${e.role.split(' · ')[0]}` : e.name) : id;
    return { label, text: cs.map((c) => c.text).join(' '), cites: cs.map((c) => c.id) };
  });
}

/** One point per claim, labelled by the skill it shows. */
export function claimPoints(kb: KB, claims: Claim[]): TopicPoint[] {
  return claims.filter(isStatable).map((c) => ({ label: claimLabel(kb, c), text: c.text, cites: [c.id] }));
}
