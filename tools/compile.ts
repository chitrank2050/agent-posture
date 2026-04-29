import * as fs from 'fs';
import matter from 'gray-matter';
import * as path from 'path';

/**
 * Principal Skill Compiler
 * Merges Core + References + Addons into a single, optimized System Prompt.
 */
function compile(addonName?: string) {
  const coreDir = path.join(__dirname, '../skills/core');
  const corePath = path.join(coreDir, 'SKILL.md');
  const core = matter(fs.readFileSync(corePath, 'utf8'));

  let finalPrompt = `# PRINCIPAL ENGINEERING CONSTITUTION\n\n[CORE POSTURE]\n${core.content}\n`;

  // Include References (Ref 00 - Ref 09)
  const refsDir = path.join(coreDir, 'references');
  if (fs.existsSync(refsDir)) {
    const refFiles = fs
      .readdirSync(refsDir)
      .filter((f) => f.endsWith('.md'))
      .sort();
    finalPrompt += '\n## ARCHITECTURAL REFERENCES\n';
    for (const refFile of refFiles) {
      const refContent = fs.readFileSync(path.join(refsDir, refFile), 'utf8');
      const refId = refFile.split('-')[0];
      finalPrompt += `\n### [Ref ${refId}] - ${refFile}\n${refContent}\n`;
    }
  }

  // Include Addon if specified
  if (addonName) {
    const addonPath = path.join(__dirname, `../skills/${addonName}/SKILL.md`);
    if (fs.existsSync(addonPath)) {
      const addon = matter(fs.readFileSync(addonPath, 'utf8'));
      finalPrompt += `\n[${addonName.toUpperCase()} ADDON]\n${addon.content}`;
    }
  }

  const outputPath = path.join(__dirname, '../dist/system-prompt.md');
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  fs.writeFileSync(outputPath, finalPrompt);
  console.log(
    `✨ Compiled Full System Prompt to dist/system-prompt.md (${Math.round(finalPrompt.length / 1024)} KB)`,
  );
}

const targetAddon = process.argv[2];
compile(targetAddon);
