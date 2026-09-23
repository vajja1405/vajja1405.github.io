// Text utilities shared by retrieval, concept detection and JD parsing.

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’‘`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

const STOP = new Set(
  'a an and are as at be been but by can could did do does for from had has have he her his how i if in into is it its me my of on or our rahul rahuls show tell that the their them there these they this to was we were what when where which who why will with would you your about any some his him he s do does did project projects work'.split(' '),
);

export function tokens(s: string): string[] {
  return normalize(s)
    .replace(/[^a-z0-9+#/. -]/g, ' ')
    .split(/[\s/]+/)
    .map((t) => t.replace(/^[.-]+|[.-]+$/g, ''))
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map(stem);
}

/** Tiny suffix stripper; enough to match evaluate/evaluation/evaluated. */
export function stem(t: string): string {
  if (t.length <= 4) return t;
  for (const suf of ['ations', 'ation', 'ings', 'ing', 'ers', 'ed', 'es', 'ly', 's']) {
    if (t.endsWith(suf) && t.length - suf.length >= 4) return t.slice(0, -suf.length);
  }
  return t;
}

export const hasAny = (text: string, re: RegExp) => re.test(normalize(text));
