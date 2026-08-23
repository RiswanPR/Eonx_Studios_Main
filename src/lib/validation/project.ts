import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  client: z.string().optional(),
  industry: z.string().optional(),
  year: z.number().optional(),
  services: z.array(z.string()),
  technologies: z.array(z.string()),
  summary: z.string().min(1),
  category: z.string().min(1),
});

export type ProjectInput = z.infer<typeof projectSchema>;
