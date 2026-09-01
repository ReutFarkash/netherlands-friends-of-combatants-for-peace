import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    // Best-known date. For events where the exact date is unconfirmed, this is
    // an approximate anchor used only for ordering — set `dateTbc: true` so the
    // page shows a "date to be confirmed" placeholder instead of this value.
    date: z.coerce.date(),
    dateTbc: z.boolean().optional(),
    // Venue name (and city) only — no street address or postcode.
    location: z.string(),
    description: z.string(),
    // Optional external link (e.g. registration / details / source post).
    link: z.string().url().optional(),
    // Optional image for the card's visual half — a path under public/
    // (e.g. '/events/nakba.jpg') or an absolute URL. Card falls back to
    // text-only when absent.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { events };
