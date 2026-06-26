// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. The repo is served under a sub-path.
  site: 'https://reutfarkash.github.io',
  // When a custom domain is added, set base to '/'.
  base: '/netherlands-friends-of-combatants-for-peace',

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
