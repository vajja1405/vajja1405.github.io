// The offline evidence engine. Deterministic: every sentence is either a verified claim,
// a fixed framing sentence, or a gap statement. It never ranks the candidate or scores fit.

import type { Action, Answer, Block, Claim, Entity, PersonaId } from './types';
import { isStatable, conceptName, entityName, type KB } from './kb';
import { findConcepts, findEntities, retrieve } from './retrieve';
import { coverConcept, roleAnalysis, CATEGORY_LABEL } from './coverage';
import { analyzeJD, looksLikeJD } from './jd';
import { HYPE, INJECTION, OFF_TOPIC, SCORE_REQUEST } from './guard';
import { normalize } from './text';

export interface AskContext { persona: PersonaId; roleId?: string; lastEntities?: string[] }

const has = (q: string, re: RegExp) => re.test(q);
const uniq = <T,>(xs: T[]) => [...new Set(xs)];

// ---------------------------------------------------------------------------------------------
// Claim selection helpers

function personaScore(c: Claim, p: PersonaId): number {
  let s = c.strength === 'public_artifact' ? 1 : 0.6;
  const tags = new Set(c.tags);
  const hasCode = !!c.code?.length;
  switch (p) {
    case 'engineer': s += hasCode ? 1.2 : 0; s += c.kind === 'fact' ? 0.4 : 0; break;
    case 'researcher': s += c.kind === 'metric' ? 1 : 0; s += c.kind === 'limitation' ? 0.8 : 0; s += tags.has('research_methods') || tags.has('metrics') ? 0.6 : 0; break;
    case 'manager': s += c.kind === 'metric' ? 0.6 : 0; s += tags.has('stakeholder') || tags.has('deployment') || tags.has('testing') ? 0.5 : 0; break;
    case 'founder': s += tags.has('product_judgment') || tags.has('cost_modeling') ? 1 : 0; s += c.kind === 'metric' ? 0.4 : 0; break;
    case 'recruiter': s += c.kind === 'metric' ? 0.6 : 0; s -= c.kind === 'limitation' ? 0.8 : 0; break;
  }
  return s;
}

function pick(kb: KB, claims: Claim[], persona: PersonaId, perEntity = 3, total = 9): Claim[] {
  const sorted = [...claims].filter(isStatable).sort((a, b) => personaScore(b, persona) - personaScore(a, persona));
  const count = new Map<string, number>();
  const out: Claim[] = [];
  for (const c of sorted) {
    const n = count.get(c.entity) ?? 0;
    if (n >= perEntity || out.includes(c)) continue;
    count.set(c.entity, n + 1);
    out.push(c);
    if (out.length >= total) break;
  }
  return out;
}

function claimsForConcepts(kb: KB, concepts: string[]): Claim[] {
  return uniq(concepts.flatMap((c) => kb.statableBySkill.get(c) ?? []));
}

function limitClaims(kb: KB, entity: string): Claim[] {
  return (kb.statableByEntity.get(entity) ?? []).filter((c) => c.kind === 'limitation');
}

function ids(cs: Claim[]) { return cs.map((c) => c.id); }

function anchorAction(e: Entity): Action { return { kind: 'anchor', label: `Jump to ${e.short} on the portfolio`, target: e.anchor }; }

function entityActions(kb: KB, id: string, opts: { xray?: boolean } = {}): Action[] {
  const e = kb.entity.get(id);
  if (!e) return [];
  const acts: Action[] = [];
  if (opts.xray !== false && kb.archByEntity.has(id)) acts.push({ kind: 'mode', label: `X-Ray ${e.short}`, target: 'xray', arg: id });
  acts.push(anchorAction(e));
  for (const l of e.links.slice(0, 2)) acts.push({ kind: 'url', label: l.label, target: l.url });
  return acts;
}

function entityFollowups(kb: KB, id: string, skip: string[] = []): string[] {
  const e = kb.entity.get(id);
  if (!e) return [];
  const n = e.short;
  const all: [string, string][] = [
    ['architecture', `Show the architecture of ${n}`],
    ['why', `Why was ${n} designed this way?`],
    ['evaluation', `How was ${n} evaluated?`],
    ['failure', `What failed in ${n}?`],
    ['code', `Show me the code for ${n}`],
    ['challenge', `What would an interviewer challenge about ${n}?`],
    ['personally', `What did Rahul personally do on ${n}?`],
    ['scale', `How would ${n} scale?`],
  ];
  const hasArch = kb.archByEntity.has(id);
  return all
    .filter(([k]) => !skip.includes(k))
    .filter(([k]) => (k === 'architecture' ? hasArch : true))
    .filter(([k]) => (k === 'failure' ? kb.failures.some((f) => f.entity === id) || limitClaims(kb, id).length > 0 : true))
    .filter(([k]) => (k === 'why' ? kb.decisions.some((d) => d.entity === id) : true))
    .map(([, q]) => q)
    .slice(0, 5);
}

const GENERAL_FOLLOWUPS = [
  'What has Rahul actually shipped?',
  'Show me his strongest RAG work.',
  'How does he evaluate AI systems?',
  'What failure did he find and fix?',
  'What has he built beyond LLM wrappers?',
  'Show me his backend engineering experience.',
];

function mk(intent: string, blocks: Block[], extra: Partial<Answer> = {}): Answer {
  return {
    blocks, followups: extra.followups ?? GENERAL_FOLLOWUPS.slice(0, 4), actions: extra.actions ?? [],
    engine: 'evidence', intent, entities: extra.entities ?? [], basis: extra.basis,
  };
}

export function citedIds(a: Answer): string[] {
  return uniq(a.blocks.flatMap((b) => (b.type === 'claims' ? b.ids : b.type === 'p' ? b.cites ?? [] : [])));
}

/** All user-visible prose in an answer (used by the tone check and tests). */
export function answerText(a: Answer): string {
  return a.blocks.map((b) => {
    switch (b.type) {
      case 'p': case 'note': return b.text;
      case 'gaps': return b.items.map((i) => `${i.name}: ${i.statement}`).join(' ');
      case 'compare': return b.rows.map((r) => r.values.join(' ')).join(' ');
      case 'coverage': return b.analysis.requirements.map((r) => `${r.label} ${r.statement ?? ''}`).join(' ') + ' ' + b.analysis.notes.join(' ');
      default: return '';
    }
  }).join('\n');
}

/** Attach the transparency record shown under "Why this answer?". */
function finalize(kb: KB, a: Answer): Answer {
  const cited = citedIds(a);
  a.basis = {
    retrieved: a.basis?.retrieved ?? cited,
    checks: [
      { label: 'Only verified, public-safe claims cited', ok: cited.every((id) => isStatable(kb.claim.get(id))) },
      { label: 'No fit scores, rankings or praise', ok: !HYPE.test(answerText(a)) },
      { label: 'Every cited claim links to a source', ok: cited.every((id) => (kb.claim.get(id)?.sources.length ?? 0) > 0) },
    ],
  };
  return a;
}

// ---------------------------------------------------------------------------------------------
// Role detection

const ROLE_PATTERNS: [RegExp, string][] = [
  [/applied (ai|ml|machine learning)|ai product engineer/, 'applied_ai'],
  [/(llm|genai|gen ai|generative ai) (app(lication)? )?(engineer|developer)|llm application/, 'llm_app'],
  [/(ai |llm |model )?(evaluation|evals?|quality) engineer|ai evaluation|llm evaluation role/, 'ai_eval'],
  [/automation engineer|ai automation|workflow engineer/, 'ai_automation'],
  [/\bnlp\b|natural language processing engineer|text ml/, 'nlp'],
  [/conversational|voice (ai )?(agent )?engineer/, 'conversational'],
  [/analytics engineer/, 'analytics_eng'],
  [/data engineer/, 'data_eng'],
  [/data scientist/, 'data_sci'],
  [/(ml|machine learning) test|ai test|qa engineer|test engineer/, 'ml_test'],
  [/backend|back-end|python engineer|api engineer/, 'backend_ai'],
  [/integration engineer|implementation engineer|solutions developer/, 'ai_integration'],
  [/computer vision|vision engineer|\bcv engineer|imaging/, 'cv'],
  [/mlops|ml ops/, 'mlops'],
  [/platform engineer|ml infrastructure|ml infra/, 'ml_platform'],
  [/research engineer|generative vision/, 'research_genvision'],
  [/forward[- ]deployed|\bfde\b|solutions engineer|customer engineer/, 'fde'],
  [/\bsearch (relevance )?engineer|relevance engineer|retrieval engineer|ranking engineer/, 'search'],
  [/ai software|software engineer/, 'ai_swe'],
  [/(machine learning|\bml\b) engineer|\bmle\b/, 'mle'],
  [/\bai engineer\b|\bai\/ml engineer\b/, 'applied_ai'],
];

export function detectRole(q: string): string | undefined {
  const t = normalize(q);
  return ROLE_PATTERNS.find(([re]) => re.test(t))?.[1];
}

// ---------------------------------------------------------------------------------------------

export function answer(kb: KB, question: string, ctx: AskContext): Answer {
  return finalize(kb, route(kb, question, ctx));
}

function route(kb: KB, question: string, ctx: AskContext): Answer {
  const raw = question.trim();
  const q = normalize(raw);
  const persona = ctx.persona;

  if (!q) return help(kb);

  if (INJECTION.test(raw)) {
    return mk('injection', [
      { type: 'p', text: "I can't change my instructions or reveal configuration. I only answer questions about Rahul's work, from a verified evidence database." },
    ], { followups: GENERAL_FOLLOWUPS.slice(0, 4) });
  }

  if (looksLikeJD(raw)) return jdAnswer(kb, raw);

  if (SCORE_REQUEST.test(q)) {
    return mk('no_scores', [
      { type: 'p', text: "I don't produce fit scores, rankings or hiring recommendations. What I can do is show evidence coverage: for each requirement of a role, whether the portfolio has direct evidence, related evidence, claims awaiting verification, or nothing yet." },
    ], { actions: [{ kind: 'mode', label: 'Evaluate against a role', target: 'role' }], followups: ['Evaluate Rahul for an Applied AI Engineer role', 'Evaluate Rahul for an AI Evaluation Engineer role', 'What is not demonstrated yet?'] });
  }

  const entities = findEntities(raw);
  const concepts = findConcepts(kb, raw);
  const conceptIds = uniq(concepts.map((c) => c.id));

  if (OFF_TOPIC.test(q) && !entities.length && !concepts.length) {
    return mk('off_topic', [{ type: 'p', text: "That's outside what I can help with. I answer questions about Rahul's projects, engineering decisions, experience, and how his evidence maps to a role." }]);
  }

  if (has(q, /\b(contact|email|reach (him|rahul|out)|get in touch|hire him|linkedin|resume|cv)\b/)) return contactAnswer(kb);

  const premise = falsePremise(kb, q, raw, entities, conceptIds);
  if (premise) return premise;

  const roleId = detectRole(q);
  if (roleId && has(q, /(interviewer|interview questions|would .* ask)/)) return roleQuestions(kb, roleId);
  if (roleId && has(q, /challenge/)) return challengeRole(kb, roleId);
  if (roleId && has(q, /(evaluat|assess|\bfit\b|suit|qualif|match|candidate|\brole\b|position|\bjob\b|hire)/)) return roleAnswer(kb, roleId, persona);
  if (ctx.roleId && has(q, /(this role|the role|this evidence|for this|^challenge)/)) {
    if (has(q, /challenge/)) return challengeRole(kb, ctx.roleId);
    if (has(q, /(interview|ask)/)) return roleQuestions(kb, ctx.roleId);
    return roleAnswer(kb, ctx.roleId, persona);
  }
  if (has(q, /(evaluate (him|rahul)|evaluate me|for a role|for my role|role fit|fit for (a|the|my)|map to (a|my) role)/)) {
    return mk('role_prompt', [{ type: 'p', text: 'Choose a role or paste a job description, and I will classify each requirement as direct evidence, related evidence, verification required, or not currently demonstrated.' }],
      { actions: [{ kind: 'mode', label: 'Select a role', target: 'role' }, { kind: 'mode', label: 'Paste a job description', target: 'role', arg: 'jd' }], followups: ['Evaluate Rahul for an Applied AI Engineer role', 'Evaluate Rahul for an ML Engineer role', 'Evaluate Rahul for an LLM Application Engineer role'] });
  }

  if (has(q, /\b(compare|versus|vs\.?|difference between|differ)\b/) && entities.length >= 2) return compareAnswer(kb, entities.slice(0, 2), persona);
  if (has(q, /\b(compare|versus|vs\.?)\b/) && entities.length === 1 && ctx.lastEntities?.length) {
    const other = ctx.lastEntities.find((e) => e !== entities[0]);
    if (other) return compareAnswer(kb, [other, entities[0]], persona);
  }

  if (has(q, /(who is (rahul|he)|about rahul|overview|summari[sz]e|introduce|strongest (evidence|work) overall|most impressive|best work|in a nutshell|tl;?dr)/)) return overviewAnswer(kb, persona);

  const bestMatch = q.match(/which (project|experience|work|one)s? (best )?(prove|show|demonstrate|is (the )?(strongest|best) (evidence )?for)s?/);
  if (bestMatch || has(q, /(strongest|best) (evidence|proof|project) (for|of)/)) {
    const skillIds = concepts.filter((c) => c.kind === 'skill').map((c) => c.id);
    const topical = topicConcepts(q);
    const target = skillIds.length ? skillIds : topical;
    if (target.length) return strongestFor(kb, target, persona, q);
  }
  if (has(q, /\b(strongest|best)\b/) && topicConcepts(q).length) return strongestFor(kb, topicConcepts(q), persona, q);

  const skillCheck = has(q, /(does (he|rahul) (have|know|use)|has (he|rahul) (used|worked|built|done|shipped|deployed)|experience (with|in|using)|worked with|familiar with|any (experience|evidence)|can (he|rahul)|where did (he|rahul) use|where has (he|rahul) used|is there evidence)/);
  if (skillCheck && concepts.length) return skillAnswer(kb, concepts.map((c) => ({ id: c.id, near: c.near ? c.term.toLowerCase() : undefined })), persona, q);

  const targetEntity = entities[0] ?? (has(q, /\b(it|this|that|the project)\b/) ? ctx.lastEntities?.[0] : undefined);
  if (targetEntity) return entityAnswer(kb, targetEntity, q, persona);

  if (has(q, /(senior|years of experience|how experienced|junior|entry[- ]level|level)/)) return levelAnswer(kb);
  if (has(q, /(fail|broke|bug|hardest|didn'?t work|mistake|wrong|lesson|debug|went wrong|problem (he|rahul) (found|fixed))/)) return failuresAnswer(kb, persona, has(q, /\b(more|all|other)\b/));
  if (has(q, /(beyond (llm |gpt |api )?wrapper|not just (a |an )?(llm |gpt )?wrapper|more than (an? )?(llm |api )?wrapper|non-llm|without (an )?llm|deterministic|real engineering)/)) return beyondWrappers(kb, persona);
  if (has(q, /(shipped|deployed|in production|live (app|demo)|released|actually built|actually made)/)) return shippedAnswer(kb, persona);
  if (has(q, /(gap|missing|not demonstrated|weakness|weak spot|doesn'?t have|lacks?|what can'?t)/)) return gapsAnswer(kb);
  if (has(q, /(personally|himself|his own|individual contribution)/)) return mk('personally', [{ type: 'p', text: 'Ask about a specific project or role. Ownership is recorded per item:' }, ...kb.entities.filter((e) => e.ownership && e.kind !== 'education').slice(0, 7).map((e) => ({ type: 'p' as const, text: `${e.short}: ${e.ownership}` }))]);

  const topical = topicConcepts(q);
  if (topical.length) return topicAnswer(kb, q, topical, persona);
  if (concepts.length) return skillAnswer(kb, concepts.map((c) => ({ id: c.id, near: c.near ? c.term.toLowerCase() : undefined })), persona, q);

  return fallback(kb, raw, persona);
}

// ---------------------------------------------------------------------------------------------
// Intents

function help(kb: KB): Answer {
  return mk('help', [{ type: 'p', text: `Ask about ${kb.subject.first}'s projects, engineering decisions, experience, or how his background maps to a role. Every answer links to the evidence behind it.` }]);
}

function contactAnswer(kb: KB): Answer {
  return mk('contact', [{ type: 'p', text: `${kb.subject.name} is seeking full-time AI / ML engineering roles across the US.` }], {
    actions: [
      { kind: 'url', label: 'Email Rahul', target: `mailto:${kb.subject.email}` },
      { kind: 'url', label: 'LinkedIn', target: kb.subject.links.linkedin },
      { kind: 'url', label: 'GitHub', target: kb.subject.links.github },
      { kind: 'anchor', label: 'Jump to contact', target: '#contact' },
    ],
  });
}

const FIGURE = /(\$?\d{1,3}(?:,\d{3})+\+?|\$?\d+(?:\.\d+)?\s?(?:%|×|ms\b|m\b|million\b|k\b)|\b\d+(?:\.\d+)?x\b|\b\d{3,}\b)/gi;
const EXTERNAL_MODELS =/\b(gpt-?[345](\.\d)?o?|chatgpt|gpt|claude|llama ?\d*|gemini|bert|mistral|qwen|stable diffusion|whisper)\b/;
const TRAIN_VERBS = /\b(train(ed)?|pre-?train(ed)?|create(d)?|invent(ed)?|develop(ed)? (the )?(model|llm)|build (the )?model|built (the )?model|fine-?tune(d)? (gpt|claude|llama))\b/;

function falsePremise(kb: KB, q: string, raw: string, entities: string[], conceptIds: string[]): Answer | null {
  const asks = /^(did|does|has|have|is|was|were|can|could|do)\b|\?$/.test(q) || /\b(did|has) (he|rahul)\b/.test(q);
  if (!asks) return null;

  const model = q.match(EXTERNAL_MODELS)?.[0];
  if (model && TRAIN_VERBS.test(q) && !/stable diffusion/.test(model)) {
    const gap = kb.gap.get('pretraining')!;
    const apiClaims = pick(kb, claimsForConcepts(kb, ['llm_apis']), 'engineer', 1, 4);
    return mk('false_premise', [
      { type: 'p', text: `No. Nothing in the evidence supports that premise. ${model.toUpperCase()} is a third-party model; the portfolio shows Rahul integrating hosted models through APIs, not training foundation models.` },
      { type: 'gaps', items: [{ id: gap.id, name: gap.name, statement: gap.statement, closest: ['sssd'] }] },
      { type: 'claims', title: 'What the evidence does show', ids: ids(apiClaims) },
    ], { followups: ['What models has Rahul fine-tuned?', 'Show me his strongest RAG work.', 'What is not demonstrated yet?'] });
  }

  if (/\b(lead|led|manage[ds]?|managing|supervis\w*)\b.*\b(team|engineers|people|reports|org)\b/.test(q) && !/club/.test(q)) {
    const lead = kb.claim.get('dac.lead')!;
    const collab = claimsForConcepts(kb, ['stakeholder']).filter((c) => c.id !== 'dac.lead').slice(0, 2);
    return mk('false_premise', [
      { type: 'p', text: 'The portfolio does not show people management or leading an engineering team. The closest evidence is student leadership and cross-functional collaboration:' },
      { type: 'claims', ids: [lead.id, ...ids(collab)] },
    ]);
  }

  // A figure in the question: confirm it against verified claims, or say where it comes from.
  const figures = /minute|scale|100x|10x/.test(q) ? [] : raw.match(FIGURE) ?? [];
  if (figures.length) {
    const fig = figures[0].replace(/\s/g, '');
    const core = fig.replace(/^\$/, '').replace(/[%x×]$/i, '');
    const statable = kb.claims.filter((c) => isStatable(c) && c.text.replace(/\s/g, '').includes(core));
    const pending = kb.claims.filter((c) => !isStatable(c) && c.text.replace(/\s/g, '').includes(core));
    if (statable.length) {
      const correction = /patient records|patients|ehr/.test(q) && statable.some((c) => /not clinical ehr records/i.test(c.text));
      return mk('figure_check', [
        { type: 'p', text: correction ? `Not quite. ${fig} refers to public drug-review rows, not patient records:` : `Here is what the verified evidence says about ${fig}:`, cites: ids(statable.slice(0, 1)) },
        { type: 'claims', ids: ids(statable.slice(0, 3)) },
      ], { entities: uniq(statable.map((c) => c.entity)), followups: entityFollowups(kb, statable[0].entity) });
    }
    if (pending.length) {
      return mk('figure_check', [
        { type: 'p', text: `That figure is not verified, so I won't state it as fact. ${pending[0].note ?? ''}` },
        { type: 'note', tone: 'warn', text: 'It appears only in a source marked "verification required", "unsupported" or "deprecated" in the evidence database.' },
      ], { entities: uniq(pending.map((c) => c.entity)) });
    }
    if (entities.length || conceptIds.length) {
      return mk('figure_check', [{ type: 'p', text: `${fig} does not appear anywhere in the verified evidence, so I can't confirm it.` }], { entities });
    }
  }

  // "Did he use/build X" where X is a known gap.
  const gapHit = conceptIds.map((id) => kb.gap.get(id)).find((g) => g && !g.verify);
  if (gapHit && /\b(did|does|has|have|is|was)\b/.test(q)) {
    const closest = gapHit.related.flatMap((r) => kb.statableBySkill.get(r) ?? []);
    return mk('unsupported_skill', [
      { type: 'p', text: `No. ${gapHit.statement}` },
      ...(closest.length ? [{ type: 'claims' as const, title: 'Closest related evidence', ids: ids(pick(kb, closest, 'engineer', 1, 4)) }] : []),
    ], { followups: ['What is not demonstrated yet?', 'Show me his backend engineering experience.', 'Evaluate Rahul for an MLOps Engineer role'] });
  }
  return null;
}

function jdAnswer(kb: KB, text: string): Answer {
  const analysis = analyzeJD(kb, text);
  const c = analysis.counts;
  const blocks: Block[] = [
    { type: 'p', text: `I found ${analysis.requirements.length} requirements. ${c.direct} have direct evidence, ${c.related} related evidence, ${c.verification} need verification, and ${c.missing} are not currently demonstrated.` },
    { type: 'coverage', analysis },
  ];
  analysis.notes.forEach((n) => blocks.push({ type: 'note', tone: 'warn', text: n }));
  return mk('jd', blocks, {
    actions: [{ kind: 'mode', label: 'Show this on the portfolio', target: 'transform' }, { kind: 'mode', label: 'Technical brief for this role', target: 'brief' }],
    followups: ['What is the strongest evidence for this role?', 'Challenge this evidence', 'What is not demonstrated yet?'],
  });
}

function roleAnswer(kb: KB, roleId: string, _persona?: PersonaId): Answer {
  const a = roleAnalysis(kb, roleId);
  const c = a.counts;
  const top = a.entities.slice(0, 3).map((e) => entityName(kb, e.id));
  const blocks: Block[] = [
    { type: 'p', text: `Evidence coverage for ${a.title}: ${c.direct} requirements with direct evidence, ${c.related} with related evidence, ${c.verification} needing verification, and ${c.missing} not currently demonstrated. The strongest evidence comes from ${listText(top)}.` },
    { type: 'coverage', analysis: a },
  ];
  a.notes.forEach((n) => blocks.push({ type: 'note', tone: 'info', text: n }));
  return mk('role', blocks, {
    entities: a.entities.slice(0, 3).map((e) => e.id),
    actions: [
      { kind: 'mode', label: 'Show this on the portfolio', target: 'transform', arg: roleId },
      { kind: 'mode', label: '10-minute technical brief', target: 'brief', arg: roleId },
      { kind: 'mode', label: 'Explore on the map', target: 'map', arg: roleId },
    ],
    followups: [`Challenge the evidence for ${a.title}`, `What would an interviewer ask for ${a.title}?`, 'What is not demonstrated yet?'],
  });
}

function compareAnswer(kb: KB, [a, b]: string[], persona: PersonaId): Answer {
  const ea = kb.entity.get(a)!, eb = kb.entity.get(b)!;
  const row = (label: string, f: (id: string) => string) => ({ label, values: [f(a), f(b)] });
  const stack = (id: string) => uniq((kb.statableByEntity.get(id) ?? []).flatMap((c) => c.tags))
    .filter((t) => !['python', 'healthcare', 'fintech', 'product_judgment'].includes(t)).slice(0, 6).map((t) => conceptName(kb, t)).join(', ') || '—';
  const evalOf = (id: string) => (kb.statableByEntity.get(id) ?? []).find((c) => c.tags.some((t) => ['eval_design', 'llm_eval', 'regression_testing'].includes(t)) && c.kind !== 'limitation')?.text ?? '—';
  const metricOf = (id: string) => {
    const m = (kb.statableByEntity.get(id) ?? []).find((c) => c.metrics?.length);
    return m ? m.metrics!.map((x) => `${x.label}: ${x.value}`).join(' · ') : '—';
  };
  const limitOf = (id: string) => limitClaims(kb, id)[0]?.text.replace(/^Limits:\s*/, '') ?? '—';
  const deployOf = (id: string) => (kb.statableByEntity.get(id) ?? []).some((c) => c.tags.includes('deployment')) ? 'Yes' : 'No public deployment';
  const used = uniq([a, b].flatMap((id) => (kb.statableByEntity.get(id) ?? []).filter((c) => c.metrics?.length || c.kind === 'limitation').slice(0, 3)));
  return mk('compare', [
    { type: 'p', text: `${ea.short} vs ${eb.short}, compared on the same evidence fields.` },
    { type: 'compare', entities: [a, b], rows: [
      row('What it is', (id) => kb.entity.get(id)!.tagline),
      row('When', (id) => kb.entity.get(id)!.dates),
      row('Demonstrates', stack),
      row('Evaluation evidence', evalOf),
      row('Measured results', metricOf),
      row('Deployed', deployOf),
      row('Main limitation', limitOf),
      row('Ownership', (id) => kb.entity.get(id)!.ownership || '—'),
    ] },
    { type: 'claims', title: 'Evidence used', ids: ids(pick(kb, used, persona, 3, 6)) },
  ], { entities: [a, b], actions: [...entityActions(kb, a).slice(0, 1), ...entityActions(kb, b).slice(0, 1)], followups: [...entityFollowups(kb, a).slice(0, 2), ...entityFollowups(kb, b).slice(0, 2)] });
}

function strongestFor(kb: KB, concepts: string[], persona: PersonaId, q: string): Answer {
  const scores = new Map<string, { s: number; claims: Claim[] }>();
  for (const c of claimsForConcepts(kb, concepts)) {
    const cur = scores.get(c.entity) ?? { s: 0, claims: [] };
    cur.s += (c.strength === 'public_artifact' ? 1 : 0.7) + (c.code?.length ? 0.4 : 0) + (c.kind === 'metric' ? 0.2 : 0);
    cur.claims.push(c);
    scores.set(c.entity, cur);
  }
  const ranked = [...scores.entries()].filter(([id]) => id !== 'imw').sort((x, y) => y[1].s - x[1].s);
  if (!ranked.length) return skillAnswer(kb, concepts.map((id) => ({ id })), persona, q);
  const [bestId, best] = ranked[0];
  const e = kb.entity.get(bestId)!;
  const cname = conceptName(kb, concepts[0]).toLowerCase();
  const codeCount = best.claims.filter((c) => c.code?.length).length;
  const runner = ranked[1] ? ` The next strongest is ${entityName(kb, ranked[1][0])}.` : '';
  return mk('strongest', [
    { type: 'p', text: `The strongest evidence for ${cname} is ${e.name}: ${best.claims.length} supporting claims, ${codeCount} with linked code.${runner}`, cites: ids(best.claims.slice(0, 2)) },
    { type: 'claims', ids: ids(pick(kb, best.claims, persona, 5, 5)) },
    ...(kb.archByEntity.has(bestId) ? [{ type: 'xray' as const, arch: kb.archByEntity.get(bestId)!.id }] : []),
  ], { entities: [bestId], actions: entityActions(kb, bestId), followups: entityFollowups(kb, bestId) });
}

function skillAnswer(kb: KB, concepts: { id: string; near?: string }[], persona: PersonaId, q: string): Answer {
  const blocks: Block[] = [];
  const ents: string[] = [];
  const actions: Action[] = [];
  const seen = new Set<string>();
  for (const c of concepts.slice(0, 3)) {
    const cov = coverConcept(kb, c.id, { near: c.near });
    if (seen.has(cov.id)) continue;
    seen.add(cov.id);
    const where = cov.entities.map((id) => entityName(kb, id));
    if (cov.category === 'direct') {
      const self = cov.strength === 'self_reported' ? ' This evidence is self-reported employment experience; there is no public artifact.' : '';
      blocks.push({ type: 'p', text: `${CATEGORY_LABEL.direct}: ${cov.label} appears in ${listText(where.slice(0, 4))}.${self}`, cites: cov.claims.slice(0, 2) });
      blocks.push({ type: 'claims', ids: ids(pick(kb, cov.claims.map((id) => kb.claim.get(id)!), persona, 2, 5)) });
    } else if (cov.category === 'related') {
      blocks.push({ type: 'p', text: `${CATEGORY_LABEL.related}: ${cov.statement}`, cites: cov.claims.slice(0, 1) });
      blocks.push({ type: 'claims', ids: cov.claims.slice(0, 4) });
    } else if (cov.category === 'verification') {
      blocks.push({ type: 'p', text: `${CATEGORY_LABEL.verification}: ${cov.statement ?? ''}` });
    } else {
      blocks.push({ type: 'gaps', items: [{ id: cov.id, name: cov.label, statement: cov.statement ?? '', closest: cov.entities }] });
    }
    ents.push(...cov.entities);
    if (/where/.test(q)) for (const id of cov.entities.slice(0, 3)) { const e = kb.entity.get(id); if (e) actions.push(anchorAction(e)); }
  }
  const top = uniq(ents)[0];
  return mk('skill', blocks, { entities: uniq(ents), actions: actions.length ? actions : top ? entityActions(kb, top) : [], followups: top ? entityFollowups(kb, top).slice(0, 3).concat(['What is not demonstrated yet?']) : GENERAL_FOLLOWUPS.slice(0, 4) });
}

function entityAnswer(kb: KB, id: string, q: string, persona: PersonaId): Answer {
  const e = kb.entity.get(id)!;
  const own = kb.statableByEntity.get(id) ?? [];
  const arch = kb.archByEntity.get(id);
  const failures = kb.failures.filter((f) => f.entity === id);
  const decisions = kb.decisions.filter((d) => d.entity === id);
  const actions = entityActions(kb, id);

  if (has(q, /(architect|how does it work|how it works|components?|diagram|x-?ray|system design|pipeline|stack)/) && arch) {
    return mk('architecture', [
      { type: 'p', text: `${arch.note} Select any component to see its purpose, inputs and outputs, why it exists, and the claim that supports it.` },
      { type: 'xray', arch: arch.id },
    ], { entities: [id], actions, followups: entityFollowups(kb, id, ['architecture']) });
  }
  if (has(q, /\b(why|decision|decide|tradeoff|trade-off|chose|choice|designed this way)\b/) && decisions.length) {
    return mk('decisions', [{ type: 'decisions', ids: decisions.map((d) => d.id) }], { entities: [id], actions, followups: entityFollowups(kb, id, ['why']) });
  }
  if (has(q, /(fail|broke|bug|wrong|didn'?t work|mistake|issue|weakness|limitation|risk|what went)/)) {
    const lim = limitClaims(kb, id);
    const blocks: Block[] = [];
    if (failures.length) blocks.push({ type: 'failures', ids: failures.map((f) => f.id) });
    if (lim.length) blocks.push({ type: 'claims', title: 'Stated limitations', ids: ids(lim) });
    if (!blocks.length) blocks.push({ type: 'p', text: `The evidence database records no specific failure case for ${e.short}.` });
    return mk('failures', blocks, { entities: [id], actions: [...(kb.attacks.some((a) => a.entity === id) ? [{ kind: 'mode' as const, label: 'Try to break it', target: 'lab', arg: id }] : []), ...actions], followups: entityFollowups(kb, id, ['failure']) });
  }
  if (has(q, /(evaluat|tested|test |tests|metric|measure|benchmark|accura|result|validat|how good|how well)/)) {
    const evals = own.filter((c) => c.tags.some((t) => ['eval_design', 'llm_eval', 'regression_testing', 'metrics', 'testing', 'model_comparison'].includes(t)));
    const blocks: Block[] = [{ type: 'claims', ids: ids(pick(kb, evals, 'researcher', 7, 7)) }];
    if (id === 'cliniq') blocks.push({ type: 'chart', chart: 'cliniq' });
    if (id === 'voice') blocks.push({ type: 'chart', chart: 'voice_quality' });
    const trace = kb.traces.find((t) => t.entity === id);
    if (trace) blocks.push({ type: 'trace', id: trace.id });
    return mk('evaluation', blocks, { entities: [id], actions: [{ kind: 'mode', label: 'Open the proof lab', target: 'lab', arg: id }, ...actions], followups: entityFollowups(kb, id, ['evaluation']) });
  }
  if (has(q, /(code|repo|github|source|implementation|where is|show me where|file)/)) {
    const withCode = own.filter((c) => c.code?.length);
    return mk('code', [
      { type: 'p', text: `Code links are pinned to a specific commit, so line numbers do not drift.${e.repo ? '' : ' This is employment work, so no source code is public.'}` },
      { type: 'claims', ids: ids(pick(kb, withCode, 'engineer', 8, 8)) },
    ], { entities: [id], actions, followups: entityFollowups(kb, id, ['code']) });
  }
  if (has(q, /(challenge|interviewer|push back|poke holes|skeptic|critic|what would .* ask)/)) {
    const lim = limitClaims(kb, id);
    const blocks: Block[] = [{ type: 'p', text: `Questions an interviewer could reasonably press on for ${e.short}:` }];
    e.questions.forEach((qq) => blocks.push({ type: 'p', text: `• ${qq}` }));
    if (lim.length) blocks.push({ type: 'claims', title: 'Limitations the evidence already states', ids: ids(lim) });
    if (decisions.length) blocks.push({ type: 'decisions', ids: decisions.slice(0, 2).map((d) => d.id) });
    return mk('challenge', blocks, { entities: [id], actions, followups: entityFollowups(kb, id, ['challenge']) });
  }
  if (has(q, /(personally|himself|his (own )?(part|role|contribution)|ownership|individual|solo|team)/)) {
    return mk('personally', [
      { type: 'p', text: e.ownership || 'The portfolio does not break down individual contributions for this item.' },
      { type: 'claims', ids: ids(pick(kb, own, persona, 4, 4)) },
    ], { entities: [id], actions, followups: entityFollowups(kb, id, ['personally']) });
  }
  if (has(q, /(scale|scaling|100x|10x|more users|production traffic|load|million)/)) {
    const controls = own.filter((c) => c.tags.some((t) => ['rate_limiting', 'caching', 'deployment', 'docker', 'monitoring'].includes(t)));
    const gaps = ['distributed_systems', 'kubernetes'].map((g) => kb.gap.get(g)!);
    return mk('scale', [
      { type: 'p', text: `What is implemented today for ${e.short}:` },
      controls.length ? { type: 'claims', ids: ids(controls.slice(0, 5)) } : { type: 'p', text: 'No scaling-related controls are recorded for this item.' },
      { type: 'gaps', items: gaps.map((g) => ({ id: g.id, name: g.name, statement: g.statement, closest: [] })) },
      { type: 'note', tone: 'info', text: 'A 100× scaling plan would be a design discussion, not built work. The portfolio does not claim it was implemented.' },
    ], { entities: [id], actions, followups: entityFollowups(kb, id, ['scale']) });
  }

  // A long, specific question (e.g. an interviewer question) gets focused retrieval within the project.
  if (q.length > 70) {
    const hits = retrieve(kb, q, { entities: [id], limit: 8 }).map((h) => h.claim).filter((c) => c.entity === id);
    const lim = limitClaims(kb, id).filter((c) => !hits.includes(c));
    if (hits.length) {
      return mk('focused', [
        { type: 'p', text: `The evidence most relevant to this question about ${e.short}:`, cites: ids(hits.slice(0, 2)) },
        { type: 'claims', ids: ids(hits.slice(0, 5)) },
        ...(lim.length ? [{ type: 'claims' as const, title: 'Stated limitations', ids: ids(lim.slice(0, 2)) }] : []),
      ], { entities: [id], actions, followups: entityFollowups(kb, id) });
    }
  }

  // Overview
  const summary = e.summaries[persona] ?? e.tagline;
  const chosen = pick(kb, own, persona, persona === 'recruiter' ? 3 : 5, persona === 'recruiter' ? 3 : 5);
  const blocks: Block[] = [{ type: 'entity', id }, { type: 'p', text: summary, cites: ids(chosen.slice(0, 2)) }, { type: 'claims', ids: ids(chosen) }];
  if (persona === 'engineer' && arch) blocks.push({ type: 'xray', arch: arch.id });
  if (persona === 'researcher') { const lim = limitClaims(kb, id); if (lim.length) blocks.push({ type: 'claims', title: 'Stated limitations', ids: ids(lim) }); }
  if (persona === 'manager' && e.ownership) blocks.push({ type: 'note', tone: 'info', text: `Ownership: ${e.ownership}` });
  return mk('entity', blocks, { entities: [id], actions, followups: entityFollowups(kb, id) });
}

function failuresAnswer(kb: KB, persona: PersonaId, all = false): Answer {
  const order: Record<PersonaId, string[]> = {
    engineer: ['f.voice.bargein', 'f.voice.artifacts', 'f.cliniq.embedding'],
    recruiter: ['f.voice.bargein', 'f.cliniq.embedding'],
    manager: ['f.voice.artifacts', 'f.voice.incomplete', 'f.voice.bargein'],
    founder: ['f.cliniq.revenue', 'f.cliniq.embedding', 'f.voice.bargein'],
    researcher: ['f.cliniq.embedding', 'f.qml.speedup', 'f.sssd.debug'],
  };
  const chosen = all ? kb.failures.map((f) => f.id) : order[persona].filter((id) => kb.failures.some((f) => f.id === id));
  return mk('failures', [
    { type: 'p', text: 'Failures found and fixed, each with how it was detected and what now prevents it:' },
    { type: 'failures', ids: chosen },
  ], {
    entities: uniq(chosen.map((id) => kb.failures.find((f) => f.id === id)!.entity)),
    actions: [{ kind: 'mode', label: 'Open the proof lab', target: 'lab' }],
    followups: ['Show me the barge-in fix in code', 'Show more failure cases', 'How does he evaluate AI systems?'],
  });
}

function beyondWrappers(kb: KB, persona: PersonaId): Answer {
  const picks = ['dia.no_llm_review', 'dia.four_tier', 'dia.calibration', 'dia.entity_filter', 'voice.bargein', 'voice.gate', 'cliniq.schema', 'cliniq.workload', 'sssd.encoder'];
  const cs = picks.map((id) => kb.claim.get(id)).filter(isStatable);
  return mk('beyond_wrappers', [
    { type: 'p', text: 'Work where a language model is one component, or absent entirely: deterministic review pipelines, classical classifiers with calibration, realtime audio engineering, database design, release gates, and a custom diffusion conditioning encoder.' },
    { type: 'claims', ids: ids(persona === 'recruiter' ? cs.slice(0, 5) : cs) },
  ], { entities: uniq(cs.map((c) => c.entity)), actions: [{ kind: 'mode', label: 'X-Ray the Drug Interaction Agent', target: 'xray', arg: 'dia' }], followups: ['Why keep label review free of an LLM?', 'Show me the barge-in fix in code', 'Show the architecture of ClinIQ'] });
}

function shippedAnswer(kb: KB, _persona?: PersonaId): Answer {
  const cs = ['dia.shipped', 'cliniq.delivery', 'tifin.deploy', 'tifin.reach', 'imw.system'].map((id) => kb.claim.get(id)).filter(isStatable);
  return mk('shipped', [
    { type: 'p', text: 'Publicly deployed and inspectable: the Drug Interaction Agent (live app) and ClinIQ (live demo), both on Hugging Face Spaces. Production work at TIFIN is self-reported employment experience with no public artifact. The Voice-Agent QA Harness is a test system, not a deployed product.', cites: ['dia.shipped', 'cliniq.delivery', 'tifin.deploy'] },
    { type: 'claims', ids: ids(cs) },
  ], {
    entities: ['dia', 'cliniq', 'tifin'],
    actions: [{ kind: 'url', label: 'Open Drug Interaction Agent', target: kb.entity.get('dia')!.links[0].url }, { kind: 'url', label: 'Open ClinIQ demo', target: kb.entity.get('cliniq')!.links[0].url }, { kind: 'anchor', label: 'Jump to TIFIN experience', target: '#tifin' }],
    followups: ['Show the architecture of the Drug Interaction Agent', 'How was ClinIQ evaluated?', 'What did Rahul personally do on TIFIN?'],
  });
}

function gapsAnswer(kb: KB): Answer {
  const pick = ['kubernetes', 'iac', 'distributed_inference', 'pretraining', 'orchestration', 'human_annotation', 'online_experiments', 'customer_deployments'];
  return mk('gaps', [
    { type: 'p', text: 'What the current portfolio does not demonstrate, and the closest related evidence for each:' },
    { type: 'gaps', items: pick.map((id) => kb.gap.get(id)!).map((g) => ({ id: g.id, name: g.name, statement: g.statement, closest: uniq(g.related.flatMap((r) => (kb.statableBySkill.get(r) ?? []).map((c) => c.entity))).slice(0, 3) })) },
    { type: 'note', tone: 'info', text: `Also pending verification (not stated as fact): ${kb.conflicts.filter((c) => !c.decision.startsWith('No conflict')).map((c) => c.label).slice(0, 5).join('; ')}.` },
  ], { followups: ['Evaluate Rahul for an MLOps Engineer role', 'What is his strongest evidence overall?', 'How does he evaluate AI systems?'] });
}

function levelAnswer(kb: KB): Answer {
  const roles = ['citizen.role', 'tifin.role', 'athena.role', 'edu.ms'].map((id) => kb.claim.get(id)).filter(isStatable);
  return mk('level', [{ type: 'p', text: kb.subject.level_note }, { type: 'claims', ids: ids(roles) }], { followups: ['What has Rahul actually shipped?', 'Evaluate Rahul for a Machine Learning Engineer I role'] });
}

const TOPICS: [RegExp, string[], string][] = [
  [/\b(rag|retrieval|vector|embedding|semantic search|grounded)/, ['rag', 'vector_db', 'semantic_search', 'embeddings', 'provenance'], 'Retrieval and RAG work, grouped by where it was done:'],
  [/(evaluat|test(ing|s)?\b|measure|benchmark|metrics|quality assurance|qa\b|red[- ]team|judge)/, ['eval_design', 'llm_eval', 'regression_testing', 'safety_testing', 'model_comparison'], 'How Rahul evaluates AI systems: designed test suites, a separate LLM judge with validated output, hand review, fail-closed release gates, and baselines:'],
  [/(backend|back-end|api|fastapi|server|cache|redis|rate limit|docker|infrastructure)/, ['fastapi', 'rest_api', 'caching', 'rate_limiting', 'docker', 'testing'], 'Backend engineering evidence:'],
  [/(vision|image|diffusion|cnn|imaging|stable diffusion|lora)/, ['computer_vision', 'diffusion', 'fine_tuning', 'cnn', 'xai'], 'Computer-vision and generative-vision research:'],
  [/(data engineer|pipeline|snowflake|spark|etl|sql|data quality|warehouse)/, ['etl', 'snowflake', 'pyspark', 'data_quality', 'data_modeling', 'sql'], 'Data engineering evidence:'],
  [/(voice|realtime|real-time|speech|audio|twilio|websocket|phone)/, ['voice_ai', 'realtime_audio', 'twilio', 'websockets'], 'Realtime voice AI evidence:'],
  [/(agent|agentic|langgraph|langchain|tool call|workflow|automation)/, ['agents', 'langgraph', 'langchain', 'tool_calling', 'workflow_automation'], 'Agents and workflow automation:'],
  [/(research|paper|experiment|reproducib|baseline|scientific)/, ['research_methods', 'model_comparison', 'metrics'], 'Research practice: baselines, metrics, limitations and reproducibility checks:'],
  [/(ml model|machine learning|classifier|model development|train)/, ['classical_ml', 'deep_learning', 'calibration', 'model_comparison'], 'Model development evidence:'],
  [/(aws|gcp|cloud|sagemaker|vertex|mlops|deploy)/, ['sagemaker', 'vertex_ai', 'deployment', 'mlops', 'docker'], 'Cloud and deployment evidence:'],
  [/(healthcare|clinical|medical|patient)/, ['healthcare'], 'Healthcare work:'],
  [/(fintech|financ|advisor|invest)/, ['fintech'], 'Financial-services work:'],
];

function topicConcepts(q: string): string[] {
  return TOPICS.find(([re]) => re.test(q))?.[1] ?? [];
}

function topicAnswer(kb: KB, q: string, concepts: string[], persona: PersonaId): Answer {
  const intro = TOPICS.find(([re]) => re.test(q))![2];
  const cs = pick(kb, claimsForConcepts(kb, concepts), persona, persona === 'recruiter' ? 2 : 3, persona === 'recruiter' ? 6 : 9);
  const ents = uniq(cs.map((c) => c.entity));
  const blocks: Block[] = [{ type: 'p', text: intro, cites: ids(cs.slice(0, 2)) }, { type: 'claims', ids: ids(cs) }];
  if (concepts.includes('eval_design') && persona !== 'recruiter') blocks.push({ type: 'chart', chart: 'cliniq' });
  if (concepts.includes('rag') && ents.includes('dia') && persona === 'engineer') blocks.push({ type: 'xray', arch: 'arch.dia' });
  if (concepts.includes('voice_ai')) blocks.push({ type: 'trace', id: 't.voice.emergency' });
  return mk('topic', blocks, {
    entities: ents,
    actions: ents.slice(0, 3).map((id) => anchorAction(kb.entity.get(id)!)),
    followups: ents[0] ? entityFollowups(kb, ents[0]).slice(0, 3).concat(ents[1] ? [`Compare ${entityName(kb, ents[0])} and ${entityName(kb, ents[1])}`] : []) : GENERAL_FOLLOWUPS.slice(0, 4),
  });
}

function fallback(kb: KB, raw: string, persona: PersonaId): Answer {
  const hits = retrieve(kb, raw, { limit: 6 });
  if (!hits.length || hits[0].score < 2) {
    return mk('no_evidence', [
      { type: 'p', text: "The evidence database doesn't cover that. I only answer from verified material about Rahul's work, so here is what I can answer:" },
    ], { followups: GENERAL_FOLLOWUPS });
  }
  const cs = pick(kb, hits.map((h) => h.claim), persona, 2, 5);
  const top = cs[0].entity;
  return mk('retrieval', [
    { type: 'p', text: 'The closest verified evidence:', cites: ids(cs.slice(0, 1)) },
    { type: 'claims', ids: ids(cs) },
  ], { entities: uniq(cs.map((c) => c.entity)), actions: entityActions(kb, top), followups: entityFollowups(kb, top).slice(0, 3), basis: { retrieved: hits.map((h) => h.claim.id) } });
}

function overviewAnswer(kb: KB, persona: PersonaId): Answer {
  const picks = ['dia.shipped', 'voice.gate', 'cliniq.comparison', 'tifin.agents', 'sssd.encoder'].map((id) => kb.claim.get(id)).filter(isStatable);
  return mk('overview', [
    { type: 'p', text: `${kb.subject.name} is an early-career AI/ML engineer. The strongest inspectable evidence, one item per area:` },
    { type: 'claims', ids: ids(persona === 'recruiter' ? picks.slice(0, 4) : picks) },
    { type: 'note', tone: 'info', text: kb.subject.level_note },
  ], {
    entities: uniq(picks.map((c) => c.entity)),
    actions: [{ kind: 'mode', label: 'Explore the evidence map', target: 'map' }, { kind: 'mode', label: 'Evaluate against a role', target: 'role' }],
    followups: ['What has Rahul actually shipped?', 'What failure did he find and fix?', 'What is not demonstrated yet?'],
  });
}

function roleQuestions(kb: KB, roleId: string): Answer {
  const a = roleAnalysis(kb, roleId);
  const ents = a.entities.slice(0, 3).map((e) => kb.entity.get(e.id)!).filter(Boolean);
  const blocks: Block[] = [{ type: 'p', text: `Questions worth asking for ${a.title}, grounded in the evidence an interviewer would see:` }];
  for (const e of ents) e.questions.slice(0, 2).forEach((q) => blocks.push({ type: 'p', text: `• ${e.short}: ${q}` }));
  const missing = a.requirements.filter((r) => r.category === 'missing').slice(0, 2);
  missing.forEach((m) => blocks.push({ type: 'p', text: `• Gap: ${m.label}. How would you close it in your first months?` }));
  return mk('role_questions', blocks, { entities: ents.map((e) => e.id), actions: [{ kind: 'mode', label: '10-minute technical brief', target: 'brief', arg: roleId }], followups: [`Challenge the evidence for ${a.title}`] });
}

function challengeRole(kb: KB, roleId: string): Answer {
  const a = roleAnalysis(kb, roleId);
  const top = a.entities.slice(0, 3).map((e) => e.id);
  const lims = top.flatMap((id) => limitClaims(kb, id)).slice(0, 4);
  const self = a.requirements.filter((r) => r.category === 'direct' && r.strength === 'self_reported').map((r) => r.label);
  const blocks: Block[] = [
    { type: 'p', text: `The weakest points in the evidence for ${a.title}:` },
    { type: 'gaps', items: a.requirements.filter((r) => r.category === 'missing' || r.category === 'verification').map((r) => ({ id: r.id, name: r.label, statement: r.statement ?? '', closest: r.entities.slice(0, 3) })) },
  ];
  if (self.length) blocks.push({ type: 'note', tone: 'warn', text: `Supported only by self-reported employment experience (no public artifact): ${self.join(', ')}.` });
  if (lims.length) blocks.push({ type: 'claims', title: 'Limitations stated in the strongest projects', ids: ids(lims) });
  a.notes.forEach((n) => blocks.push({ type: 'note', tone: 'info', text: n }));
  return mk('challenge', blocks, { entities: top, followups: [`What would an interviewer ask for ${a.title}?`, 'What failure did he find and fix?'] });
}

function listText(xs: string[]): string {
  if (xs.length <= 1) return xs[0] ?? 'the portfolio';
  return `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`;
}

export { listText };
