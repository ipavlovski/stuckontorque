import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.md"], base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    tags: z.string().array(),
  }),
})

export const collections = { posts }