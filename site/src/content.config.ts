import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const learn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/learn' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** The exact question this article answers — the query the page targets */
    question: z.string(),
    /** 40–60 word direct answer, quotable by search features and AI engines */
    directAnswer: z.string(),
    cluster: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keyFacts: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Service slugs this article supports commercially */
    services: z.array(z.string()).default([]),
    /** Slugs of related articles in the network */
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { learn };
