import matter from 'gray-matter';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import { SkillSchema } from './schema.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILLS_DIR = path.join(__dirname, '../skills');

// Native ANSI colors
const GREEN = '\x1b[32m';
const BLUE = '\x1b[34m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

function validateDirectory(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      validateDirectory(fullPath);
    } else if (entry.name === 'SKILL.md') {
      console.log(`${BLUE}🔍 Validating: ${fullPath}${RESET}`);

      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContent);

      const result = SkillSchema.safeParse(data);

      if (!result.success) {
        console.error(`${RED}❌ Validation failed for ${fullPath}:${RESET}`);
        console.error(result.error.format());
        process.exit(1);
      }

      const validatedData = result.data;
      const metadata = validatedData.metadata as
        | Record<string, unknown>
        | undefined;
      const version =
        typeof metadata?.version === 'string' ? metadata.version : 'unknown';
      console.log(
        `${GREEN}✅ ${validatedData.name}@${version} is valid.${RESET}`,
      );
    }
  }
}

console.log('🚀 Starting Skill Validation...');
validateDirectory(SKILLS_DIR);
console.log('✨ All skills are valid.');
