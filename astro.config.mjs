// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Host-aware base path: GitHub Pages serves under a repo sub-path; Cloudflare
// (and local dev) serve at root. GitHub Actions sets GITHUB_ACTIONS=true, so we
// only apply the sub-path there. This keeps both hosts working simultaneously.
// When a custom domain is added on Cloudflare, base stays '/' (already correct).
const onGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: onGitHubPages ? 'https://reutfarkash.github.io' : undefined,
  base: onGitHubPages ? '/netherlands-friends-of-combatants-for-peace' : '/',

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
