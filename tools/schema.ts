import { z } from 'zod';

export const SkillSchema = z.object({
  name: z.string().regex(/^[a-z0-9-]+$/),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  description: z.string(),
  extends: z.string().optional(),
  tags: z.array(z.string()).optional(),
  author: z.string().optional(),
});

export type Skill = z.infer<typeof SkillSchema>;
