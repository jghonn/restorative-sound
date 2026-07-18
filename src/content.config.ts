import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each JSON file in these folders is one editable entry (managed via /admin).
const offerings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/offerings' }),
  schema: z.object({
    order: z.number().default(0),
    title: z.string(),
    meta: z.string().optional().default(''),
    // Media-library path (/src/assets/uploads/...); legacy keys
    // (postpartum/christian/private) still resolve in Offerings.astro.
    image: z.string(),
    alt: z.string(),
    description: z.string(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    order: z.number().default(0),
    question: z.string(),
    answer: z.string(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    order: z.number().default(0),
    name: z.string(),
    context: z.string().optional().default(''),
    quote: z.string(),
    published: z.boolean().default(false),
  }),
});

export const collections = { offerings, faq, testimonials };
