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
    rollupOptions: {
      // jsPDF's HTML renderer is never used; its optional peers stay out of the build.
      external: ['html2canvas', 'dompurify', 'canvg'],
      // jsPDF is split into its own chunk and only fetched when a visitor downloads a PDF.
      output: { assetFileNames: 'imw.[ext]', chunkFileNames: 'chunks/[name]-[hash].js' },
    },
  },
  server: { fs: { allow: ['..'] } },
  test: { environment: 'node', include: ['tests/**/*.test.ts'] },
});
