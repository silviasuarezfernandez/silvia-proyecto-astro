import { defineCollection } from 'astro:content';
import { z } from 'zod';

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date(),
      slug: z.string(),  
    }),
  }),
};




