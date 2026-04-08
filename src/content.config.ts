import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/products' }),
  schema: ({image}) => z.object({
    title: z.string(),
    cover: image(),
    cost: z.float32(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: ({image}) => z.object({
    title: z.string(),
    cover: image(),
    author: z.string(),
    date: z.coerce.date()
  })
})

export const collections = { products, blog };