// Degrees, years of experience and work arrangements in a job description. They are not skills, so the
// concept ontology cannot match them: degrees and years are checked against the subject's credentials,
// and work-arrangement lines (hybrid, relocation, visa...) are left out of the comparison.
// api/app/quals.py is a line-for-line port; both are tested on the same cases.
import type { KB } from './kb';
import type { Category, RequirementCoverage } from './types';

type Level = 'bachelor' | 'master' | 'phd' | 'mba';
type Priority = RequirementCoverage['priority'];

const RANK: Record<Level, number> = { bachelor: 1, master: 2, phd: 3, mba: 0 };
const NAME: Record<Level, string> = { bachelor: "Bachelor's", master: "Master's", phd: 'PhD', mba: 'MBA' };
const LEVEL_RES: [Level, RegExp][] = [
  ['bachelor', /\bbachelor|\b(?:b\.s\.?|b\.sc\.?|bsc|b\.a\.|b\.tech|btech|b\.e\.)(?![a-z])|\b(?:bs|ba)(?=\s*(?:\/|or\b|in\b|degree\b|,))|\b(?:undergraduate|college|university|4-year|four-year) degree/i],
  ['master', /\bmaster'?s\b|\bmasters\b|\bmaster of\b|\bmaster degree|\b(?:m\.s\.?|m\.sc\.?|msc|m\.tech|mtech|m\.eng\.?|meng)(?![a-z])|(?<![a-z])ms(?=\s*(?:\/|or\b|in\b|degree\b|,|$))|\b(?:graduate|advanced|post-?graduate) degree/i],
  ['phd', /\bph\.? ?d\b|\bdoctorate\b|\bdoctoral\b/i],
  ['mba', /\bmba\b/i],
];
const FIELD = /\b(?:degree|bachelor'?s?|master'?s?|ph\.? ?d|doctorate|bs|ms|ba|b\.s\.?|m\.s\.?|bsc|msc)\s+(?:degree\s+)?in\s+(.+)/i;
const FIELD_OK = /computer|computing|quantitative|\bstem\b|technical|math|statistic|data|machine learning|artificial intelligence|\bai\b|information|software|engineering|analytics|related|relevant|equivalent|similar/i;
const FIELD_END = /[,;:(]|\s(?:or|and|such as|e\.g|including|preferred|required|with|from|plus)\b/i;
const DEGREE_CONTEXT = /\bdegree\b|\brequired\b|\bpreferred\b|\bor equivalent\b|\brelated field\b|\bminimum\b|\bgpa\b|\bclass of\b|graduat/i;

// Graduation timing, enrollment and GPA: credentials with dates, checked against the degrees' completion months.
const GRAD = /graduat|\bdegree (?:completed|conferred|earned|awarded)\b|\bcompleted (?:a |an |your |their )?(?:bachelor'?s |master'?s |ph\.? ?d |)degree|\bclass of\b|\bnew grad|\brecent grad|\bearly[- ]career\b|\bentry[- ]level\b|within the (?:past|last|previous)/i;
const RECENT = /\bnew grad|\brecent(?:ly)? grad|\bearly[- ]career\b|\bentry[- ]level\b/i;
const ENROLLED = /\bcurrently (?:enrolled|pursuing|attending)\b|\benrolled (?:in|at) (?:a|an)\b|\bpursuing (?:a|an|your) (?:bachelor|master|degree|ph\.? ?d|ms\b|bs\b|graduate)|\breturning to (?:school|university|college)\b|\bmust be a (?:current )?(?:student|undergraduate|graduate student)\b|\bcurrent (?:students?|undergraduates?)\b/i;
const GPA = /\bgpa\b|grade point average/i;
const MONTHS: Record<string, number> = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12, spring: 5, summer: 8, fall: 12, autumn: 12, winter: 12 };
const MONTH_YEAR = /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?|spring|summer|fall|autumn|winter)\.?,?\s+(20\d{2})\b|\b(0?[1-9]|1[0-2])\/(20\d{2})\b/gi;
const WITHIN = /within the (?:past|last|previous) (\d{1,2}|one|two|three|four|five|six|twelve|eighteen|twenty-four) (months?|years?)/i;
const monthIndex = (y: number, m: number) => y * 12 + (m - 1);

const WORDS: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12, eighteen: 18, 'twenty-four': 24 };
const YEARS = /\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*(?:(?:-|to)\s*(?:\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)\s*\+?\s*)?(?:years?|yrs?)\b/i;
const EXPERIENCE_CONTEXT = /experien|professional|industry|hands-on|track record|working|background|building|developing|shipping|\bas an? /i;

export const LOGISTICS = /\b(?:hybrid|on-?site|in[- ]office|in[- ]person|remote|days? (?:a|per) week|relocat\w*|visa|sponsorship|work authori[sz]ation|authori[sz]ed to work|citizenship|security clearance|clearance|background check|drug (?:test|screen)\w*|travel|salary|compensation|pay range|benefits|401\(?k\)?|pto|paid time off|shifts?|commute|time ?zones?|full[- ]time|part[- ]time|location)\b/i;
export const UNASSESSED_NOTE = (phrases: string[]) =>
  `Not assessed: ${phrases.join('; ')}. These didn't match anything in the evidence database, so they are neither confirmed nor ruled out. Ask Rahul about them.`;
export const LOGISTICS_NOTE = 'Work-arrangement items (location, schedule, travel, authorization) are not skills, so they are left out of this comparison. Ask Rahul about them directly.';

const clean = (s: string) => s.replace(/[’‘`]/g, "'").replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim();
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const uniq = <T,>(xs: T[]) => [...new Set(xs)];

function joinOr(xs: string[]): string {
  return xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;
}

function degreeLevels(s: string): Level[] {
  const levels = LEVEL_RES.filter(([, re]) => re.test(s)).map(([l]) => l);
  // "MBA or MS": the MBA alternative adds nothing once another degree is accepted.
  return levels.length > 1 ? levels.filter((l) => l !== 'mba') : levels;
}

function degreeCoverage(kb: KB, s: string, priority: Priority): RequirementCoverage | null {
  const levels = degreeLevels(s);
  const creds = kb.subject.credentials;
  if (!levels.length || !creds) return null;
  const f = s.match(FIELD);
  const fieldText = f?.[1] ?? '';
  const field = fieldText.split(FIELD_END)[0].replace(/^(?:a|an|the)\s+/i, '').split(' ').slice(0, 5).join(' ').trim();
  const last = levels[levels.length - 1];
  const label = `${joinOr(levels.map((l) => NAME[l]))}${last === 'phd' || last === 'mba' ? '' : ' degree'}${field ? ` in ${field}` : ''}`;
  const min = Math.min(...levels.map((l) => RANK[l]));
  const held = [...creds.degrees].sort((a, b) => RANK[a.level] - RANK[b.level]);
  const meets = min > 0 ? held.filter((d) => RANK[d.level] >= min) : [];
  const base = { id: `degree:${levels.join('+')}`, label, priority, entities: ['education'], strength: 'self_reported' as const };
  if (meets.length) {
    const statement = `Holds ${held.slice().reverse().map((d) => d.short).join(' and ')}.`;
    const offField = !!field && !FIELD_OK.test(fieldText);
    return {
      ...base, category: offField ? 'related' : 'direct', claims: meets.map((d) => d.claim),
      statement: offField ? `${statement} Both are in ${creds.fields}; the description names a different field.` : statement,
    };
  }
  const top = held[held.length - 1];
  const want = levels.map((l) => (l === 'phd' ? 'a PhD' : l === 'mba' ? 'an MBA' : NAME[l])).join(' or ');
  return { ...base, category: 'missing', claims: [top.claim], statement: `His highest degree is ${top.short}; he does not hold ${want}.` };
}

function yearsCoverage(kb: KB, s: string, priority: Priority): RequirementCoverage | null {
  const m = s.match(YEARS);
  const exp = kb.subject.credentials?.experience;
  if (!m || !exp) return null;
  const n = /^\d+$/.test(m[1]) ? Number(m[1]) : WORDS[m[1].toLowerCase()] ?? 0;
  // "0-2 years" is an entry-level range: there is no minimum to fall short of.
  if (n > 29 || (n < 1 && !/^0\s*(?:-|to)/.test(m[0]))) return null;
  const label = cap(s.slice(m.index).split(/[.;(]|,\s/)[0].slice(0, 70).trim());
  const have = exp.years;
  const category: Category = n <= have ? 'direct' : n === have + 1 ? 'related' : 'missing';
  const lead = `${have}+ years of professional ML and data-science experience`;
  const statement = n === 0 ? `${lead}, which fits the entry-level range asked for. Roles: ${exp.summary}.`
    : category === 'direct' ? `${lead}: ${exp.summary}.`
    : category === 'related' ? `${lead}, close to the ${n}+ asked for. Roles: ${exp.summary}.`
    : `${lead}, short of the ${n}+ years asked for. Roles: ${exp.summary}.`;
  const entities = uniq(exp.claims.map((id) => kb.claim.get(id)?.entity).filter((e): e is string => !!e));
  return { id: `years:${n}`, label, category, priority, claims: [...exp.claims], entities, strength: 'self_reported', statement };
}

/** Completion-month window a phrase asks for, or null when it names no timing constraint. */
function gradWindow(s: string, today: Date): [number, number] | null {
  const now = monthIndex(today.getFullYear(), today.getMonth() + 1);
  const dates = [...s.matchAll(MONTH_YEAR)].map((m) => (m[1] ? monthIndex(Number(m[2]), MONTHS[m[1].slice(0, 3).toLowerCase()] ?? MONTHS[m[1].toLowerCase()]) : monthIndex(Number(m[4]), Number(m[3]))));
  if (dates.length >= 2) return [Math.min(...dates), Math.max(...dates)];
  if (dates.length === 1) {
    if (/\b(?:by|before|no later than|prior to|until)\b/i.test(s)) return [0, dates[0]];
    if (/\b(?:after|since|on or after|from)\b/i.test(s)) return [dates[0], Infinity];
    return [dates[0] - 1, dates[0] + 1];
  }
  const w = s.match(WITHIN);
  if (w) {
    const k = /^\d+$/.test(w[1]) ? Number(w[1]) : WORDS[w[1].toLowerCase()];
    return [now - k * (/year/i.test(w[2]) ? 12 : 1), now + 12];
  }
  const years = [...s.matchAll(/\b(20\d{2})\b/g)].map((m) => Number(m[1]));
  if (years.length) return [monthIndex(Math.min(...years), 1), monthIndex(Math.max(...years), 12)];
  if (RECENT.test(s)) return [now - 24, now + 12];
  return null;
}

function gradCoverage(kb: KB, s: string, priority: Priority, today: Date): RequirementCoverage | null {
  const creds = kb.subject.credentials;
  if (!creds || !GRAD.test(s)) return null;
  const levels = degreeLevels(s);
  const min = levels.length ? Math.min(...levels.map((l) => RANK[l]).filter((r) => r > 0)) : 1;
  const held = [...creds.degrees].sort((a, b) => a.date.localeCompare(b.date));
  const eligible = held.filter((d) => RANK[d.level] >= min);
  const win = gradWindow(s, today);
  const at = (d: { date: string }) => monthIndex(Number(d.date.slice(0, 4)), Number(d.date.slice(5, 7)));
  const fits = eligible.filter((d) => !win || (at(d) >= win[0] && at(d) <= win[1]));
  const label = cap(s.split(/[;]|\.\s/)[0].slice(0, 90).trim());
  const base = { id: `grad:${win ? win.join('-') : 'any'}:${min}`, label, priority, entities: ['education'], strength: 'self_reported' as const };
  if (fits.length) {
    const d = fits[fits.length - 1];
    const when = win ? `, within the window asked for` : '';
    return { ...base, category: 'direct', claims: fits.map((x) => x.claim).reverse(), statement: `Completed ${d.short.replace(/ \(UMKC, \d{4}\)$/, '')} at UMKC in ${d.when}${when}.` };
  }
  const list = held.map((d) => `${d.when} (${d.abbr})`).join(' and ');
  return { ...base, category: 'missing', claims: held.map((x) => x.claim).reverse(), statement: `His degrees were completed in ${list}, outside the window asked for.` };
}

function enrollmentCoverage(kb: KB, s: string, priority: Priority): RequirementCoverage | null {
  const creds = kb.subject.credentials;
  if (!creds || !ENROLLED.test(s)) return null;
  const last = [...creds.degrees].sort((a, b) => a.date.localeCompare(b.date)).pop()!;
  return { id: 'enrollment', label: cap(s.slice(0, 90)), category: 'missing', priority, claims: [last.claim], entities: ['education'], strength: 'self_reported',
    statement: `He completed his ${last.abbr} in ${last.when}, so he is not currently enrolled.` };
}

function gpaCoverage(kb: KB, s: string, priority: Priority): RequirementCoverage | null {
  const creds = kb.subject.credentials;
  if (!creds || !GPA.test(s)) return null;
  return { id: 'gpa', label: cap(s.slice(0, 90)), category: 'verification', priority, claims: creds.degrees.map((d) => d.claim), entities: ['education'],
    statement: "His GPA isn't listed in the portfolio. Ask Rahul for it." };
}

/**
 * Degree and years-of-experience requirements in one line or phrase. `strict` (free text outside a requirements
 * section) needs extra context, so "our founders hold PhDs" or "founded 20 years ago" is not read as a requirement.
 */
export function qualifications(kb: KB, text: string, priority: Priority, strict = false, today: Date = new Date()): RequirementCoverage[] {
  const out: RequirementCoverage[] = [];
  for (const clause of clean(text).split(/;\s|\.\s+(?=[A-Z])/)) {
    if (!strict || DEGREE_CONTEXT.test(clause)) {
      // Enrollment and graduation timing say more than the degree level, so they replace the plain degree check.
      const d = enrollmentCoverage(kb, clause, priority) ?? gradCoverage(kb, clause, priority, today) ?? degreeCoverage(kb, clause, priority);
      if (d) out.push(d);
      const g = gpaCoverage(kb, clause, priority);
      if (g) out.push(g);
    }
    if (!strict || EXPERIENCE_CONTEXT.test(clause)) {
      const y = yearsCoverage(kb, clause, priority);
      if (y) out.push(y);
    }
  }
  return out;
}
