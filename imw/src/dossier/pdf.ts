// Lays out a dossier document model as a real text PDF (selectable, searchable, clickable links).
// jsPDF is imported on demand, so it only loads when a visitor actually downloads.
import type { jsPDF as JsPDF } from 'jspdf';
import type { Category } from '../engine/types';
import type { DocLink, Node, Tone } from './model';

type RGB = [number, number, number];
const INK: RGB = [20, 24, 31];
const MUTED: RGB = [90, 99, 110];
const FAINT: RGB = [222, 227, 232];
const ACCENT: RGB = [22, 117, 94];
const NOTE_BG: RGB = [242, 246, 245];
const CAT: Record<Category, RGB> = { direct: ACCENT, related: [40, 104, 184], verification: [150, 98, 16], missing: [118, 124, 133] };
const CAT_TAG: Record<Category, string> = { direct: 'DIRECT', related: 'RELATED', verification: 'TO VERIFY', missing: 'NOT SHOWN' };
const CAT_WORD: Record<Category, string> = { direct: 'direct evidence', related: 'related evidence', verification: 'verification required', missing: 'not demonstrated' };
const TONE: Record<Tone, RGB> = { artifact: ACCENT, self: CAT.related };

const W = 612, H = 792, ML = 56, MT = 64, MB = 64, CW = W - ML * 2;

// The built-in PDF fonts only cover WinAnsi. One character outside it garbles a whole line,
// so map common symbols to ASCII and drop anything else that cannot be drawn.
const WINANSI_EXTRA = '€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ';
const MAP: Record<string, string> = {
  '→': '->', '←': '<-', '⇒': '=>', '↗': '', '↘': '', '⤓': '', '✓': '', '✔': '', '✗': 'x', '✕': 'x', '✦': '', '★': '',
  '≤': '<=', '≥': '>=', '≈': '~', '≠': '!=', '−': '-', '‑': '-', '‐': '-', '′': "'", '″': '"',
  '\u00a0': ' ', '\u2009': ' ', '\u202f': ' ', '\u200b': '', '\u00ad': '', '\t': ' ',
};
export function pdfText(s: string): string {
  let out = '';
  for (const ch of s) {
    if (ch in MAP) { out += MAP[ch]; continue; }
    const c = ch.codePointAt(0)!;
    if (c === 10 || (c >= 0x20 && c <= 0x7e) || (c >= 0xa1 && c <= 0xff) || WINANSI_EXTRA.includes(ch)) { out += ch; continue; }
    const base = ch.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
    if ([...base].every((b) => b.codePointAt(0)! < 0x7f)) out += base;
  }
  return out.replace(/ {2,}/g, ' ');
}

interface WriteOpts { size?: number; style?: 'normal' | 'bold' | 'italic'; color?: RGB; x?: number; width?: number; lh?: number; after?: number }

class Writer {
  y = MT;
  constructor(private d: JsPDF) {}

  private font(size: number, style: WriteOpts['style'] = 'normal', color: RGB = INK) {
    this.d.setFont('helvetica', style);
    this.d.setFontSize(size);
    this.d.setTextColor(...color);
  }

  private need(h: number) {
    if (this.y + h > H - MB) { this.d.addPage(); this.y = MT; }
  }

  private split(text: string, width: number): string[] {
    return this.d.splitTextToSize(pdfText(text), width) as string[];
  }

  write(text: string, o: WriteOpts = {}) {
    const { size = 10, style = 'normal', color = INK, x = ML, width = CW, lh = 1.42, after = 0 } = o;
    this.font(size, style, color);
    const step = size * lh;
    for (const line of this.split(text, width)) {
      this.need(step);
      this.d.text(line, x, this.y, { baseline: 'top' });
      this.y += step;
    }
    this.y += after;
  }

  links(items: DocLink[], { size = 8.5, x = ML, width = CW } = {}) {
    this.font(size, 'normal', ACCENT);
    const step = size * 1.55, gap = 14;
    let cx = x;
    this.need(step);
    for (const it of items) {
      const full = pdfText(it.label);
      let label = full;
      while (this.d.getTextWidth(label) > width && label.length > 8) label = label.slice(0, -3);
      if (label !== full) label = `${label.trimEnd()}…`;
      const w = this.d.getTextWidth(label);
      if (cx > x && cx + w > x + width) { this.y += step; this.need(step); cx = x; }
      this.d.text(label, cx, this.y, { baseline: 'top' });
      this.d.link(cx, this.y - 1, w, size + 2, { url: it.url });
      this.d.setDrawColor(...ACCENT);
      this.d.setLineWidth(0.4);
      this.d.line(cx, this.y + size + 0.5, cx + w, this.y + size + 0.5);
      cx += w + gap;
    }
    this.y += step;
  }

  private rule(color: RGB = FAINT, width = 0.6) {
    this.d.setDrawColor(...color);
    this.d.setLineWidth(width);
    this.d.line(ML, this.y, ML + CW, this.y);
  }

  node(n: Node) {
    const d = this.d;
    switch (n.t) {
      case 'cover': {
        this.write(n.name, { size: 26, style: 'bold', lh: 1.15, after: 2 });
        this.write(n.headline, { size: 12, color: MUTED, after: 6 });
        this.links(n.contacts, { size: 9.5 });
        this.y += 6;
        this.rule(ACCENT, 1.6);
        this.y += 10;
        this.write(n.line, { size: 9, style: 'bold', color: ACCENT, after: 8 });
        return;
      }
      case 'h1':
        this.need(n.keep ?? 80);
        this.y += 14;
        this.rule();
        this.y += 12;
        this.write(n.text, { size: 15, style: 'bold', color: ACCENT, lh: 1.25, after: 3 });
        if (n.lead) this.write(n.lead, { size: 9.5, style: 'italic', color: MUTED, after: 6 });
        else this.y += 4;
        return;
      case 'h2':
        this.need(60);
        this.y += 10;
        this.write(n.text, { size: 11.5, style: 'bold', lh: 1.3, after: 1 });
        if (n.meta) this.write(n.meta, { size: 8.5, color: MUTED, after: 5 });
        else this.y += 4;
        return;
      case 'h3':
        this.need(40);
        this.y += 5;
        this.write(n.text.toUpperCase(), { size: 7.5, style: 'bold', color: MUTED, after: 3 });
        return;
      case 'p':
        this.write(n.text, { size: n.muted ? 9.5 : 10, color: n.muted ? MUTED : INK, after: 6 });
        return;
      case 'note': {
        this.font(9);
        const lines = this.split(n.text, CW - 24);
        const h = lines.length * 9 * 1.42 + 14;
        if (h < H - MT - MB) this.need(h);
        const top = this.y;
        d.setFillColor(...NOTE_BG);
        d.rect(ML, top, CW, h, 'F');
        d.setFillColor(...ACCENT);
        d.rect(ML, top, 2, h, 'F');
        this.y = top + 7;
        this.write(n.text, { size: 9, color: MUTED, x: ML + 14, width: CW - 24 });
        this.y = Math.max(this.y, top + h) + 8;
        return;
      }
      case 'kv': {
        const kw = 118;
        for (const [k, v] of n.items) {
          this.need(14);
          this.font(8, 'bold', MUTED);
          const key = this.split(k.toUpperCase(), kw - 12);
          const top = this.y;
          key.forEach((l, i) => d.text(l, ML, top + 1.5 + i * 11, { baseline: 'top' }));
          this.write(v, { size: 9.5, x: ML + kw, width: CW - kw });
          if (this.y > top) this.y = Math.max(this.y, top + key.length * 11 + 2);
          this.y += 4;
        }
        this.y += 2;
        return;
      }
      case 'bullets':
        for (const item of n.items) {
          this.need(14);
          this.font(9.5, 'normal', ACCENT);
          d.text('•', ML + 2, this.y, { baseline: 'top' });
          this.write(item, { size: 9.5, x: ML + 14, width: CW - 14, after: 3 });
        }
        this.y += 3;
        return;
      case 'claim': {
        this.need(30);
        d.setFillColor(...TONE[n.tone]);
        d.circle(ML + 4, this.y + 5.5, 2.6, 'F');
        this.write(n.text, { size: 9.5, x: ML + 14, width: CW - 14, after: 1 });
        this.write(n.meta, { size: 8, color: MUTED, x: ML + 14, width: CW - 14 });
        if (n.links.length) this.links(n.links, { size: 8, x: ML + 14, width: CW - 14 });
        this.y += 5;
        return;
      }
      case 'req': {
        const tw = 70;
        this.need(26);
        this.font(7, 'bold', CAT[n.category]);
        d.text(CAT_TAG[n.category], ML, this.y + 2, { baseline: 'top' });
        this.write(n.label, { size: 9.5, style: 'bold', x: ML + tw, width: CW - tw, after: 1 });
        if (n.detail) this.write(n.detail, { size: 8.5, color: MUTED, x: ML + tw, width: CW - tw });
        this.y += 5;
        return;
      }
      case 'counts': {
        const cats = (['direct', 'related', 'verification', 'missing'] as const).filter((c) => n.counts[c] > 0);
        const total = cats.reduce((s, c) => s + n.counts[c], 0);
        if (!total) return;
        this.need(34);
        let cx = ML;
        for (const c of cats) {
          const w = (CW * n.counts[c]) / total;
          d.setFillColor(...CAT[c]);
          d.rect(cx, this.y, Math.max(w - 1.5, 1), 6, 'F');
          cx += w;
        }
        this.y += 12;
        cx = ML;
        this.font(8.5, 'normal', MUTED);
        for (const c of cats) {
          const label = `${n.counts[c]} ${CAT_WORD[c]}`;
          d.setFillColor(...CAT[c]);
          d.rect(cx, this.y + 1.5, 6, 6, 'F');
          d.text(label, cx + 10, this.y, { baseline: 'top' });
          cx += d.getTextWidth(label) + 26;
        }
        this.y += 18;
        return;
      }
      case 'table': {
        const cols = n.head.length;
        this.font(9);
        const natural = n.head.map((h, i) => Math.max(d.getTextWidth(pdfText(h)), ...n.rows.map((r) => d.getTextWidth(pdfText(r[i] ?? '')))) + 12);
        let widths: number[];
        if (natural.reduce((a, b) => a + b, 0) <= CW) {
          widths = [...natural];
          widths[cols - 1] += CW - natural.reduce((a, b) => a + b, 0);
        } else {
          const first = Math.min(natural[0], 140);
          widths = [first, ...Array(cols - 1).fill((CW - first) / (cols - 1))];
        }
        const xs = widths.map((_, i) => ML + widths.slice(0, i).reduce((a, b) => a + b, 0));
        const measure = (cells: string[], head: boolean) => {
          this.font(head ? 7.5 : 9, 'bold', head ? MUTED : INK);
          const wrapped = cells.map((c, i) => this.split(head ? c.toUpperCase() : c, widths[i] - 10));
          const lh = (head ? 7.5 : 9) * 1.38;
          return { wrapped, lh, h: Math.max(...wrapped.map((w) => w.length)) * lh + 8 };
        };
        const drawRow = (cells: string[], head: boolean) => {
          const { wrapped, lh, h } = measure(cells, head);
          // Never strand a header row: it must fit together with the first body row.
          this.need(head && n.rows.length ? h + measure(n.rows[0], false).h : h);
          wrapped.forEach((lines, i) => {
            this.font(head ? 7.5 : 9, head || i === 0 ? 'bold' : 'normal', head ? MUTED : INK);
            lines.forEach((l, j) => d.text(l, xs[i], this.y + 4 + j * lh, { baseline: 'top' }));
          });
          this.y += h;
          this.rule();
        };
        drawRow(n.head, true);
        n.rows.forEach((r) => drawRow(r, false));
        this.y += 8;
        return;
      }
      case 'links':
        this.links(n.items, { size: 9 });
        this.y += 4;
        return;
    }
  }

  finish(footer: string) {
    const d = this.d;
    const pages = d.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      d.setPage(i);
      this.font(7.5, 'normal', MUTED);
      d.text(pdfText(footer), ML, H - 38, { baseline: 'top' });
      d.text(`Page ${i} of ${pages}`, W - ML, H - 38, { baseline: 'top', align: 'right' });
      d.setDrawColor(...FAINT);
      d.setLineWidth(0.6);
      d.line(ML, H - 46, W - ML, H - 46);
    }
  }
}

export interface RenderMeta { title: string; author: string; footer: string }

export async function renderPdf(nodes: Node[], meta: RenderMeta): Promise<JsPDF> {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'letter', compress: true });
  doc.setProperties({ title: pdfText(meta.title), subject: 'Evidence dossier', author: pdfText(meta.author), creator: 'Interview My Work' });
  const w = new Writer(doc);
  for (const n of nodes) w.node(n);
  w.finish(meta.footer);
  return doc;
}

/** Hand the file to the browser as a normal download. */
export function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
