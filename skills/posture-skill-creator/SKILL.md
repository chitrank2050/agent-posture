---
name: posture-skill-creator
description: Meta-Grade engineering posture for creating high-rigor agentic skills. Activate this for any task involving the creation, refactoring, or auditing of .md or .json files within the /skills directory. Enforce procedural logic, metadata density, and constitutional alignment.
metadata:
  version: 1.0.0
  extends: posture-core
  author: chitrank2050
---

# Technical Skill Architecture (Skill Creator) 🧠🛠️

> **"A skill is the codified intuition of a Principal Engineer. If the instructions are ambiguous, the agent is unguided. Precision is the only path to autonomy."**

This addon is triggered for any task involving the creation of new skills, modification of existing `SKILL.md` files, or architecture of evaluation suites (`evals.json`).

## When to use

Load this skill when:

- You are initializing a new capability in the `/skills` directory.
- You are refactoring an existing skill to meet "Principal Level" standards.
- You are designing evaluation cases to validate agent performance.
- The task involves auditing skill metadata or structural integrity.

## Operating Rules (S1–S5)

### S1 - Metadata Density (V5, S25)

The Header is the Identity. Every skill MUST contain a valid YAML frontmatter with `name`, `version`, `description`, and `author`. The `description` MUST be a high-density summary (max 1024 characters) that explicitly defines the skill's boundary (V5).

### S2 - Procedure-First Logic (V4, S7, S18)

Omit Vague Declarations. Do not just tell the agent _what_ the goal is; define _how_ to achieve it through deterministic procedures. Use ordered lists for fragile workflows and bullet points for invariants. Favor "If X, then Y" logic over prose (S7).

### S3 - Progressive Disclosure (V25, S33)

Zero-Bloat Core. Keep the primary `SKILL.md` focused and under 500 lines. Move implementation details, long examples, or deep documentation to the `../posture-core/references/` directory. Link to them using relative paths to minimize cognitive load (V25).

### S4 - Adversarial Evals (V9, V21, S30)

Trust but Verify. Every skill MUST have a corresponding `evals/evals.json`. Evals must include:

- **Positive Triggers**: Realistic prompts the skill _should_ handle.
- **Negative Triggers**: Prompts that look similar but should _not_ activate this skill (V9).
- **Edge Cases**: High-complexity or high-risk scenarios.

### S5 - Constitutional Attribution (V13, S18)

The "Principal" Edge. Every operating rule MUST be anchored to the **Dossier V/S codes** (e.g., V16, S4). This ensures every instruction is traceable to the project's core engineering values (V13).

## Skill Self-Verification Gate

- [ ] **Frontmatter**: Is the YAML valid and the description high-density?
- [ ] **Logic**: Are instructions procedural rather than declarative?
- [ ] **Reference**: Are implementation details moved to `../posture-core/references/`?
- [ ] **Evals**: Does the suite include both positive and negative triggers?
- [ ] **Alignment**: Is every rule linked to a Dossier V/S code?

## Deep Reference Library

- `../posture-core/references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `../posture-core/references/03-voice-contract.md` - Guidelines for the "Principal" tone and language.
- `../posture-core/references/08-principal-mindset.md` - Philosophical foundations of high-rigor engineering.
- [Specification - Agent Skills](https://agentskills.io/specification) - Formal structure requirements.
- [Best Practices - Agent Skills](https://agentskills.io/best-practices) - Content optimization guide.
