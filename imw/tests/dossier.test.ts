// The downloadable dossier must obey the same evidence rules as the assistant: only verified,
// public-safe claims, no held-back figures, no pasted job-description text, no "contract" wording.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { buildKB, isStatable } from '../src/engine/kb';
import { answer } from '../src/engine/answer';
import { analyzeJD } from '../src/engine/jd';
import { roleAnalysis } from '../src/engine/coverage';
import { buildDossier, dossierText, footerFor, projectsFor, recency, type Options, type Session } from '../src/dossier/model';
import { pdfText, renderPdf } from '../src/dossier/pdf';
import type { Bundle, PersonaId } from '../src/engine/types';

const root = (p: string) => fileURLToPath(new URL(`../../${p}`, import.meta.url));
const kb = buildKB(JSON.parse(readFileSync(root('evidence/dist/evidence.json'), 'utf8')) as Bundle);

const JD = `About the role: We are looking for a Senior Machine Learning Engineer to build retrieval-augmented generation
systems. Requirements: 5+ years of experience with Python, LangChain, vector databases, Kubernetes and AWS SageMaker.
Nice to have: experience with Rust and dbt. Our secret project codename is BLUEHERON-7.`;

const all: Options['sections'] = { qa: true, roles: true, projects: true, questions: true, gaps: true };
const session = (): Session => ({
  turns: [
    { q: 'What has Rahul actually shipped?', a: answer(kb, 'What has Rahul actually shipped?', { persona: 'engineer' }) },
    { q: 'How does he evaluate AI systems?', a: answer(kb, 'How does he evaluate AI systems?', { persona: 'engineer' }) },
    { q: 'Compare DIA and ClinIQ', a: answer(kb, 'Compare the drug interaction app and ClinIQ', { persona: 'engineer' }) },
    { q: 'Job description (pasted)', a: answer(kb, JD, { persona: 'engineer' }) },
  ],
  analyses: [roleAnalysis(kb, 'ai_eval'), analyzeJD(kb, JD)],
  seen: ['voice'],
});
const build = (persona: PersonaId, s: Session = session()) => buildDossier(kb, s, { persona, sections: all, date: new Date(2026, 8, 24) });

describe('dossier content', () => {
  const personas = kb.personas.map((p) => p.id);

  it.each(personas)('states only verified, public-safe claims (%s)', (persona) => {
    const { nodes } = build(persona);
    const texts = new Set(nodes.filter((n) => n.t === 'claim').map((n) => (n as { text: string }).text));
    expect(texts.size).toBeGreaterThan(3);
    for (const c of kb.claims) if (!isStatable(c)) expect(texts.has(c.text), c.id).toBe(false);
  });

  it.each(personas)('holds back unverified figures and never says contract (%s)', (persona) => {
    const text = dossierText(build(persona).nodes);
    for (const f of ['19%', '24%', '5,000+', '10,000+', 'GPT-4o fallback', '20+ seconds', '19–22 dB', '5×', '5x faster']) expect(text).not.toContain(f);
    expect(text).not.toMatch(/\bcontract(s|ed|or)?\b/i);
  });

  it('never includes pasted job-description text', () => {
    const text = dossierText(build('recruiter').nodes);
    expect(text).not.toContain('BLUEHERON');
    expect(text).not.toContain('secret project');
    expect(text).toContain('Your job description');
  });

  it('includes the questions, role analyses and contact details', () => {
    const text = dossierText(build('manager').nodes);
    expect(text).toContain('Q1. What has Rahul actually shipped?');
    expect(text).toContain('AI Evaluation Engineer');
    expect(text).toContain(kb.subject.email);
    expect(text).toContain('Citizen Health');
  });

  it('changes depth by perspective', () => {
    const codeLinks = (p: PersonaId) => build(p).nodes.filter((n) => n.t === 'claim').reduce((s, n) => s + (n as { links: { url: string }[] }).links.filter((l) => l.url.includes('/blob/')).length, 0);
    expect(codeLinks('engineer')).toBeGreaterThan(codeLinks('recruiter'));
    const archHeads = (p: PersonaId) => build(p).nodes.filter((n) => n.t === 'h3' && n.text === 'Architecture').length;
    expect(archHeads('recruiter')).toBe(0);
    expect(archHeads('engineer')).toBeGreaterThan(0);
  });

  it('puts what the visitor opened first and falls back to the strongest work', () => {
    expect(projectsFor(kb, session(), 'engineer').ids[0]).toBe('voice');
    const empty = projectsFor(kb, { turns: [], analyses: [], seen: [] }, 'recruiter');
    expect(empty.defaulted).toBe(true);
    expect(empty.ids.length).toBeGreaterThan(2);
  });

  it('orders experience by recency', () => {
    expect(recency('May 2026 – present')).toBeGreaterThan(recency('Mar 2025 – May 2026'));
    expect(recency('Mar 2025 – May 2026')).toBeGreaterThan(recency('Jan – May 2024'));
    const table = build('recruiter').nodes.find((n) => n.t === 'table');
    expect(table && table.t === 'table' && table.rows[0][0]).toBe('Citizen Health');
  });
});

describe('pdf rendering', () => {
  it('maps symbols the built-in fonts cannot draw', () => {
    expect(pdfText('A → B ✓ ≤ 3 — “ok” · é')).toBe('A -> B <= 3 — “ok” · é');
    expect(pdfText('emoji 🚀 gone')).toBe('emoji gone');
  });

  it.each(['recruiter', 'engineer'] as PersonaId[])('renders a multi-page PDF (%s)', async (persona) => {
    const d = build(persona);
    const doc = await renderPdf(d.nodes, { title: d.title, author: kb.subject.name, footer: footerFor(kb, persona) });
    const bytes = new Uint8Array(doc.output('arraybuffer'));
    expect(new TextDecoder().decode(bytes.slice(0, 5))).toBe('%PDF-');
    expect(doc.getNumberOfPages()).toBeGreaterThan(2);
    if (process.env.DOSSIER_OUT) writeFileSync(`${process.env.DOSSIER_OUT}/${d.filename}`, bytes);
  });

  it('renders an empty session', async () => {
    const d = buildDossier(kb, { turns: [], analyses: [], seen: [] }, { persona: 'recruiter', sections: all });
    const doc = await renderPdf(d.nodes, { title: d.title, author: kb.subject.name, footer: 'test' });
    expect(doc.getNumberOfPages()).toBeGreaterThanOrEqual(2);
  });
});
