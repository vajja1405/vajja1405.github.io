import type { CoverageAnalysis, RequirementCoverage } from './types';
import type { KB } from './kb';
import { findConcepts } from './retrieve';
import { coverConcept, summarize } from './coverage';
import { normalize } from './text';
import { LOGISTICS, LOGISTICS_NOTE, UNASSESSED_NOTE, qualifications } from './quals';

type Section = 'required' | 'preferred' | 'mentioned' | 'skip';

const HEAD_SKIP = /(benefit|perk|what we offer|compensation|salary|pay range|equal opportunit|\beeo\b|about (us|the company|the team|our)|who we are|our (values|mission|culture)|why join|accommodation|privacy notice|disclaimer)/;
const HEAD_PREF = /(preferred|nice to have|nice-to-have|bonus|pluses|a plus|desired|good to have)/;
const HEAD_REQ = /(requirement|qualification|what you('|’)ll need|what you need|must have|must-have|you have|you bring|what we('|’)re looking for|minimum|basic|skills|experience|about you)/;
const HEAD_RESP = /(responsibilit|what you('|’)ll do|what you will do|the role|your impact|day to day|in this role)/;

function headingOf(line: string): Section | null {
  const trimmed = line.trim();
  if (/^([-*•·▪◦]|\d+[.)])\s/.test(trimmed)) return null; // bullets are content, never headings
  const l = normalize(trimmed).replace(/^#+\s*/, '');
  const words = l.split(' ').length;
  const looksHeading = l.length > 0 && l.length < 70 && (/[:：]$/.test(l) || /^#/.test(trimmed) || (words <= 5 && !/[.,;]/.test(l)));
  if (!looksHeading) return null;
  if (HEAD_SKIP.test(l)) return 'skip';
  if (HEAD_PREF.test(l)) return 'preferred';
  if (HEAD_REQ.test(l)) return 'required';
  if (HEAD_RESP.test(l)) return 'mentioned';
  return null;
}

export interface JDParse {
  concepts: { id: string; near?: string; priority: Section; count: number }[];
  /** Content lines with their section, checked for degree and years-of-experience requirements. */
  quals: { text: string; priority: Section }[];
  years?: number;
  seniority?: string;
  closestRole?: string;
}

export function parseJD(kb: KB, text: string): JDParse {
  const lines = text.split(/\r?\n/);
  let section: Section = 'mentioned';
  const found = new Map<string, { id: string; near?: string; priority: Section; count: number }>();
  const quals: JDParse['quals'] = [];
  const rank: Record<Section, number> = { required: 3, preferred: 2, mentioned: 1, skip: 0 };

  for (const raw of lines) {
    if (!raw.trim()) continue;
    const h = headingOf(raw);
    if (h) { section = h; continue; }
    if (section === 'skip') continue;
    const lineSection: Section = HEAD_PREF.test(normalize(raw)) ? 'preferred' : section;
    quals.push({ text: raw, priority: lineSection });
    for (const c of findConcepts(kb, raw)) {
      const key = c.near ? `near:${c.term.toLowerCase()}` : c.id;
      const cur = found.get(key);
      if (cur) {
        cur.count += c.count;
        if (rank[lineSection] > rank[cur.priority]) cur.priority = lineSection;
      } else {
        found.set(key, { id: c.id, near: c.near ? c.term.toLowerCase() : undefined, priority: lineSection, count: c.count });
      }
    }
  }

  const t = normalize(text);
  const years = [...t.matchAll(/(\d{1,2})\s*\+?\s*(?:-\s*\d{1,2}\s*)?(?:years|yrs)/g)].map((m) => Number(m[1])).filter((n) => n > 0 && n < 30);
  const sen = t.match(/\b(senior|staff|principal|lead|head of|director|manager)\b/);

  const skills = new Set([...found.values()].filter((c) => !c.near && kb.skill.has(c.id)).map((c) => c.id));
  let closestRole: string | undefined, best = 0;
  for (const r of kb.roles) {
    const overlap = r.requirements.filter((x) => skills.has(x)).length / r.requirements.length;
    if (overlap > best) { best = overlap; closestRole = r.id; }
  }

  return {
    concepts: [...found.values()],
    quals,
    years: years.length ? Math.max(...years) : undefined,
    seniority: sen?.[1],
    closestRole: best >= 0.25 ? closestRole : undefined,
  };
}

/** Coverage analysis for a pasted job description. Extra phrases (e.g. from the API parser) are mapped the same way. */
export function analyzeJD(kb: KB, text: string, extraPhrases: string[] = [], today: Date = new Date()): CoverageAnalysis {
  const parsed = parseJD(kb, text);
  const reqs: RequirementCoverage[] = [];
  const seen = new Set<string>();
  const order: Record<string, number> = { required: 0, preferred: 1, mentioned: 2 };
  const concepts = [...parsed.concepts].sort((a, b) => order[a.priority] - order[b.priority] || b.count - a.count).slice(0, 26);
  for (const c of concepts) {
    const cov = coverConcept(kb, c.id, { near: c.near, priority: c.priority === 'skip' ? 'mentioned' : c.priority });
    if (seen.has(cov.id)) continue;
    seen.add(cov.id);
    reqs.push(cov);
  }
  const push = (cov: RequirementCoverage) => { if (!seen.has(cov.id)) { seen.add(cov.id); reqs.push(cov); } };
  // Free text outside a requirements section needs extra context before a degree or a year count counts.
  for (const q of parsed.quals) qualifications(kb, q.text, q.priority === 'skip' ? 'mentioned' : q.priority, q.priority === 'mentioned', today).forEach(push);
  let logistics = false;
  const unassessed: string[] = [];
  for (const phrase of extraPhrases) {
    const r = coverPhrase(kb, phrase, HEAD_PREF.test(normalize(phrase)) ? 'preferred' : 'required', today);
    r.covs.forEach(push);
    logistics ||= r.logistics;
    if (r.unmatched && !unassessed.includes(r.unmatched)) unassessed.push(r.unmatched);
  }

  const notes: string[] = [];
  const asked = Math.max(0, ...reqs.filter((r) => r.id.startsWith('years:')).map((r) => Number(r.id.slice(6))));
  if (asked > (kb.subject.credentials?.experience.years ?? 2)) notes.push(`The description asks for ${asked}+ years. ${kb.subject.level_note}`);
  else if (parsed.seniority) notes.push(`The description uses the word "${parsed.seniority}". ${kb.subject.level_note}`);
  if (unassessed.length) notes.push(UNASSESSED_NOTE(unassessed));
  if (logistics) notes.push(LOGISTICS_NOTE);
  if (!reqs.length) notes.push('No recognizable technical requirements were found. Try pasting the requirements section.');

  return summarize(kb, 'Your job description', reqs, {
    source: 'jd', notes, unassessed,
    closestRole: parsed.closestRole ? kb.role.get(parsed.closestRole)?.title : undefined,
    roleId: parsed.closestRole,
  });
}

/**
 * One requirement phrase (from the API parser or an MCP client): credentials first, then skills and gaps.
 * A work-arrangement phrase is dropped with a note. A phrase that matches nothing is returned as `unmatched`:
 * failing to recognize a phrase is not evidence that Rahul lacks it, so it is never reported as a gap.
 */
export function coverPhrase(kb: KB, phrase: string, priority: 'required' | 'preferred' = 'required', today: Date = new Date()):
  { covs: RequirementCoverage[]; logistics: boolean; unmatched?: string } {
  const p = phrase.trim().slice(0, 160);
  const covs = qualifications(kb, p, priority, false, today);
  for (const h of findConcepts(kb, p)) covs.push(coverConcept(kb, h.id, { near: h.near ? h.term.toLowerCase() : undefined, priority }));
  if (covs.length) return { covs, logistics: false };
  if (LOGISTICS.test(p)) return { covs: [], logistics: true };
  return { covs: [], logistics: false, unmatched: p.length > 2 ? p : undefined };
}

export const looksLikeJD = (s: string) =>
  s.length > 280 && /(responsibilit|requirement|qualification|you will|you'll|experience with|years of|we are looking|about the role|nice to have|preferred)/i.test(s);
