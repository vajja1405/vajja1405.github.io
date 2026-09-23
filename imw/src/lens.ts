// The "portfolio morphs around a role" layer. It only rearranges and annotates the existing
// page; Restore puts every node, number and class back exactly as it was.
import type { KB } from './engine/kb';
import type { CoverageAnalysis } from './engine/types';
import { CATEGORY_LABEL } from './engine/coverage';
import { reducedMotion } from './context';

interface Saved { parent: Element; order: Element[]; numbers: [Element, string][] }
let saved: Saved | null = null;
const injected: Element[] = [];
const touched = new Set<Element>();

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, cls: string, text?: string) => {
  const n = document.createElement(tag);
  n.className = cls;
  if (text) n.textContent = text;
  return n;
};

export function applyLens(kb: KB, a: CoverageAnalysis, cb: { reopen: () => void; restore: () => void }) {
  clearLens();
  const score = new Map(a.entities.map((e) => [e.id, e.score]));
  const reqsFor = (id: string) => a.requirements.filter((r) => (r.category === 'direct' || r.category === 'related') && r.entities.includes(id));

  // 1. Reorder the selected-work projects by relevance (FLIP animation).
  const work = document.getElementById('work');
  const projects = work ? [...work.querySelectorAll(':scope > article.project')] : [];
  if (projects.length && work) {
    saved = { parent: work, order: [...work.children], numbers: projects.map((p) => [p.querySelector('.project-number')!, p.querySelector('.project-number')?.textContent ?? '']) };
    const entityOf = (p: Element) => kb.entities.find((e) => e.anchor === `#${p.id}`)?.id ?? '';
    const before = new Map(projects.map((p) => [p, p.getBoundingClientRect()]));
    const sorted = [...projects].sort((x, y) => (score.get(entityOf(y)) ?? 0) - (score.get(entityOf(x)) ?? 0));
    const anchor = work.querySelector(':scope > .research');
    sorted.forEach((p, i) => {
      work.insertBefore(p, anchor);
      const num = p.querySelector('.project-number');
      if (num) num.textContent = `${String(i + 1).padStart(2, '0')} —`;
    });
    if (!reducedMotion()) {
      for (const p of sorted) {
        const b = before.get(p)!, now = p.getBoundingClientRect();
        const dy = b.top - now.top;
        if (!dy) continue;
        (p as HTMLElement).animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }], { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)' });
      }
    }
  }

  // 2. Highlight or dim every section that maps to an entity, and tag it with what it proves.
  for (const e of kb.entities) {
    if (e.id === 'imw' || e.kind === 'education') continue;
    const node = document.querySelector(e.anchor);
    if (!node || node.id === 'work' || node.id === 'experience') continue;
    const reqs = reqsFor(e.id);
    node.classList.add(reqs.length ? 'imw-lens-hit' : 'imw-lens-dim');
    touched.add(node);
    if (reqs.length) {
      const tag = el('div', 'imw-lens-tag');
      tag.append(el('span', 'imw-lens-tag-label', `✦ Evidence for ${a.title}`));
      reqs.slice(0, 6).forEach((r) => tag.append(el('span', `imw-lens-chip is-${r.category}`, r.label)));
      node.prepend(tag);
      injected.push(tag);
    }
  }
  const skillNames = a.requirements.filter((r) => r.category === 'direct').flatMap((r) => [r.label, ...(kb.skill.get(r.id)?.aliases ?? [])]).map((s) => s.toLowerCase());
  document.querySelectorAll('#skills .skill').forEach((s) => {
    const text = s.textContent?.toLowerCase() ?? '';
    s.classList.add(skillNames.some((n) => n.length > 2 && text.includes(n)) ? 'imw-lens-hit' : 'imw-lens-dim');
    touched.add(s);
  });

  // 3. A slim bar summarising coverage, with a way back.
  const bar = el('div', 'imw-lens-bar');
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Role lens');
  const head = el('div', 'imw-lens-head');
  head.append(el('span', 'imw-lens-mark', '✦'), el('strong', '', `Viewing as: ${a.title}`));
  const counts = el('div', 'imw-lens-counts');
  (['direct', 'related', 'verification', 'missing'] as const).forEach((k) => counts.append(el('span', `is-${k}`, `${a.counts[k]} ${CATEGORY_LABEL[k].toLowerCase()}`)));
  const missing = a.requirements.filter((r) => r.category === 'missing').map((r) => r.label);
  const miss = el('div', 'imw-lens-missing', missing.length ? `Not demonstrated: ${missing.slice(0, 4).join(', ')}${missing.length > 4 ? '…' : ''}` : 'Every listed requirement has at least related evidence.');
  const actions = el('div', 'imw-lens-actions');
  const open = el('button', 'imw-lens-btn', 'Open analysis');
  const restore = el('button', 'imw-lens-btn is-primary', 'Restore portfolio');
  open.onclick = () => cb.reopen();
  restore.onclick = () => { clearLens(); cb.restore(); };
  actions.append(open, restore);
  const mid = el('div', 'imw-lens-mid');
  mid.append(counts, miss);
  bar.append(head, mid, actions);
  document.body.append(bar);
  injected.push(bar);
  document.documentElement.classList.add('imw-lens');

  requestAnimationFrame(() => (work ?? document.body).scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' }));
  restore.focus({ preventScroll: true });
}

export function clearLens() {
  injected.splice(0).forEach((n) => n.remove());
  touched.forEach((n) => n.classList.remove('imw-lens-hit', 'imw-lens-dim'));
  touched.clear();
  if (saved) {
    saved.order.forEach((n) => saved!.parent.appendChild(n));
    saved.numbers.forEach(([n, t]) => { if (n) n.textContent = t; });
    saved = null;
  }
  document.documentElement.classList.remove('imw-lens');
}

let pill: HTMLElement | null = null;

/** Scroll the page to a section, flash it, and offer a way back to the workspace. */
export function flashSection(anchor: string, back: () => void) {
  const target = document.querySelector<HTMLElement>(anchor);
  if (!target) { back(); return; }
  target.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
  target.classList.add('imw-flash');
  setTimeout(() => target.classList.remove('imw-flash'), 2400);
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  pill?.remove();
  pill = el('button', 'imw-return', '✦ Back to Interview My Work');
  pill.onclick = () => { pill?.remove(); pill = null; back(); };
  document.body.append(pill);
  setTimeout(() => { pill?.remove(); pill = null; }, 20000);
}
