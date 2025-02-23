import { z } from "zod";

export const zBlog = z.object({
  title: z.string().min(1),
  description: z.string(),
  tag: z.string().optional(),
  team: z.string().optional(),
  date: z.date(),
  cover: z.string().default("/content/cover-default.png"),
});
