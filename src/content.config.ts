import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'


// import type { ImageMetadata } from 'astro';
// export const images = glob({ pattern: ["**/*.png"], base: "./src/posts" })


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