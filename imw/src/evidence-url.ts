/** Evidence files are fetched at runtime (kept out of the JS bundle) and carry the loader's version stamp. */
export const evidenceUrl = (file: string) => {
  const u = new URL(['..', '..', 'evidence', 'dist', file].join('/'), import.meta.url);
  const v = new URL(import.meta.url).searchParams.get('v');
  if (v) u.searchParams.set('v', v);
  return u.href;
};
