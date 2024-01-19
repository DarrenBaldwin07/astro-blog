import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    author: z
      .enum(["Ry Walker", "Darren Baldwin", "Steven Miller"])
      .default("Ry Walker"),
  }),
})

export const collections = { blog }
