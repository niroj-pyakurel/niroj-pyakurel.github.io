import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectTags = z.enum(['design', 'web', 'security']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(projectTags),
    stack: z.array(z.string()).default([]),
    securityNotes: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(projectTags).default([]),
  }),
});

export const collections = { projects, writing };
