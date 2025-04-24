import { defineCollection } from 'astro:content';

export const collections = {
  projects: defineCollection({
    type: 'json',
    schema: ({ z }) => ({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      date: z.date(),
    }),
  }),
};





