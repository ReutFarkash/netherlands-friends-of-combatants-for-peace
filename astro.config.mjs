// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served at root on Cloudflare (and local dev). GitHub Pages (which needed a
// repo sub-path) was retired on 2026-06-27, so the host-aware base is gone.
// When a custom domain is added on Cloudflare, base stays '/'.
// https://astro.build/config
export default defineConfig({
  base: '/',

  // English at `/`, Dutch at `/nl/`.
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
