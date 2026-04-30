import matter from 'gray-matter';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Native ANSI colors
const GREEN = '\x1b[32m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

/**
 * Principal Skill Compiler
 * Merges Core + References + Addons into a single, optimized System Prompt.
 */
function compile() {
  const { values, positionals } = parseArgs({
    args: process.argv.slice(2),
    options: {
      addon: { type: 'string', short: 'a' },
    },
    allowPositionals: true,
  });

  const addonName = values.addon || positionals[0];
  const coreDir = path.join(__dirname, '../skills/posture-core');
  const corePath = path.join(coreDir, 'SKILL.md');

  if (!fs.existsSync(corePath)) {
    console.error(`❌ Error: Core skill not found at ${corePath}`);
    process.exit(1);
  }

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
    // Support both 'api' and 'posture-api'
    const name = addonName.startsWith('posture-')
      ? addonName
      : `posture-${addonName}`;
    const addonPath = path.join(__dirname, `../skills/${name}/SKILL.md`);
    if (fs.existsSync(addonPath)) {
      const addon = matter(fs.readFileSync(addonPath, 'utf8'));
      finalPrompt += `\n[${name.toUpperCase()} ADDON]\n${addon.content}`;
    } else {
      console.error(`❌ Error: Addon not found at ${addonPath}`);
    }
  }

  const outputPath = path.join(__dirname, '../dist/system-prompt.md');
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  fs.writeFileSync(outputPath, finalPrompt);
  console.log(
    `${GREEN}${BOLD}✨ Compiled Full System Prompt to dist/system-prompt.md (${Math.round(finalPrompt.length / 1024)} KB)${RESET}`,
  );
}

compile();
