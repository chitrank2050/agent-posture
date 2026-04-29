import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { SkillSchema } from './schema';

const SKILLS_DIR = path.join(__dirname, '../skills');

function validateDirectory(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      validateDirectory(fullPath);
    } else if (entry.name === 'SKILL.md') {
      console.log(`🔍 Validating: ${fullPath}`);
      
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContent);

      const result = SkillSchema.safeParse(data);
      
      if (!result.success) {
        console.error(`❌ Validation failed for ${fullPath}:`);
        console.error(result.error.format());
        process.exit(1);
      }
      
      console.log(`✅ ${data.name}@${data.version} is valid.`);
    }
  }
}

console.log('🚀 Starting Skill Validation...');
validateDirectory(SKILLS_DIR);
console.log('✨ All skills are valid.');
