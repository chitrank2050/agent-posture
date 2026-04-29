import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

/**
 * Principal Skill Compiler
 * Merges Core + Addons into a single, optimized System Prompt.
 */
function compile(addonName?: string) {
  const corePath = path.join(__dirname, '../skills/core/SKILL.md');
  const core = matter(fs.readFileSync(corePath, 'utf8'));

  let finalPrompt = `[CORE POSTURE]\n${core.content}\n`;

  if (addonName) {
    const addonPath = path.join(__dirname, `../skills/addons/${addonName}/SKILL.md`);
    if (fs.existsSync(addonPath)) {
      const addon = matter(fs.readFileSync(addonPath, 'utf8'));
      finalPrompt += `\n[${addonName.toUpperCase()} ADDON]\n${addon.content}`;
    }
  }

  const outputPath = path.join(__dirname, '../dist/system-prompt.md');
  const outputDir = path.dirname(outputPath);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, finalPrompt);
  
  console.log(`✨ Compiled System Prompt to dist/system-prompt.md`);
}

const targetAddon = process.argv[2];
compile(targetAddon);
