# Netherlands Friends of Combatants for Peace (NLFCFP)

Website for the **Netherlands Friends of Combatants for Peace** — an independent
supporter group affiliated with the [Combatants for Peace](https://www.cfpeace.org/)
movement. The site is a static, bilingual (English / Dutch) site built with
[Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/),
hosted for free on **GitHub Pages**.

## Tech stack

- **Astro** (static output) with built-in **i18n** — English at `/`, Dutch at `/nl/`.
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no PostCSS config).
- **TypeScript** (strict).
- **Content collection** for events (`src/content/events/`).

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # build the static site into dist/
npm run preview  # preview the production build locally
```

`npm run build` must pass before deploying.

## Project structure

```
src/
  components/        Header, Footer, LanguageSwitcher
  components/pages/  Locale-parametrized page bodies (one per page)
  content/events/    Event entries (Markdown)
  i18n/ui.ts         Translation strings (en / nl)
  layouts/           BaseLayout (html shell, header, footer)
  pages/             Routes — en at /, nl under /nl/
  styles/global.css  Tailwind import + brand theme tokens
public/              logo-teal.png, logo-white.png (copied as-is)
```

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
with `withastro/action` and publishes it via `actions/deploy-pages`. It can also
be run manually from the **Actions** tab (`workflow_dispatch`).

**Before the first deploy:**

1. The repository must be **public** for GitHub Pages (free tier).
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.

## Base path / custom domain

The site is configured for a project page served under a sub-path:

```js
// astro.config.mjs
site: 'https://reutfarkash.github.io',
base: '/netherlands-friends-of-combatants-for-peace',
```

All internal links use Astro's i18n helpers / `import.meta.env.BASE_URL`, so they
resolve correctly under that sub-path.

**When a custom domain is added, set `base` to `'/'`** in `astro.config.mjs`
(and update `site` to the custom domain), then add the domain in Settings → Pages
(GitHub will create a `CNAME` file).
