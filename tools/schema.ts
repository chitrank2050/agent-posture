import { z } from 'zod';

export const SkillSchema = z.object({
  name: z
    .string()
    .regex(/^[a-z0-9-]+$/)
    .max(64),
  description: z.string().min(1).max(1024),
  license: z.string().optional(),
  compatibility: z.string().max(500).optional(),
  'allowed-tools': z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export type Skill = z.infer<typeof SkillSchema>;
