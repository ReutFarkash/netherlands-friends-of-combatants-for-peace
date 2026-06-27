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
    location: z.string(),
    description: z.string(),
    // Optional external link (e.g. registration / details / source post).
    link: z.string().url().optional(),
  }),
});

export const collections = { events };
