import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';

// Builds one lazily imported ES module (+ CSS) into the site's /assets/imw/.
// The portfolio page only loads it when a visitor opens Interview My Work.
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: '../assets/imw',
    emptyOutDir: true,
    target: 'es2020',
    cssCodeSplit: false,
    sourcemap: false,
    lib: { entry: 'src/main.tsx', formats: ['es'], fileName: () => 'imw.js' },
    rollupOptions: { output: { assetFileNames: 'imw.[ext]' } },
  },
  server: { fs: { allow: ['..'] } },
  test: { environment: 'node', include: ['tests/**/*.test.ts'] },
});
