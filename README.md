# Agent Posture 🧠🏗️

[![Principal Grade](https://img.shields.io/badge/Posture-Principal_Grade-blueviolet?style=for-the-badge)](https://skills.sh/r/chitrank2050/agent-posture)
[![Validated](https://img.shields.io/badge/Registry-Validated-success?style=for-the-badge)](./tools/validate.ts)
[![Toolchain: Native Node](https://img.shields.io/badge/Toolchain-Native_Node_24-green?style=for-the-badge)](./package.json)
[![Security: Tier 0 Protected](https://img.shields.io/badge/Security-Tier_0_Protected-black?style=for-the-badge)](./skills/core/references/05-anti-patterns.md)

**Agent Posture** is a high-rigor, spec-driven framework for AI Agents. It transcends standard "skills" by enforcing an **Eleven-Pillar Constitution**, multi-layer verification, and an authoritative "Skeptic's Posture." It is built for Principal Engineers who require agents to think like architects, not just coders.

---

## 🏛️ Architecture & Governance

We divide engineering rigor into three distinct layers to ensure both broad alignment and deep technical execution.

### 1. The Core Lens (`posture-core`)
The non-negotiable foundation of all engineering activity.
- **77-Point Dossier**: Atomic engineering anchors (V1-V36, S1-S41) serving as the "ground truth" for all logic.
- **Meta-Rules (The Lens)**: Cognitive filters for substrate-independence and official-docs-first discovery.
- **Voice Contract**: A strict agreement on zero-filler communication and surgical intent.

### 2. Specialized Postures
Domain-specific rigor for complex systems. Each pillar is mapped to the Core Dossier but provides specialized operating rules.

- **Systems Grade (Backend)**: Atomic transactions, jittered resilience, and O(n) border safety.
- **UX Grade (Frontend)**: State-as-URL truth, hydration hygiene, and CLS-zero layout integrity.
- **Automation Grade (Workflows)**: OIDC identity, runner hardening, and SLSA 3 integrity.
- **Search Grade (SEO)**: JSON-LD schema, metadata hierarchy, and indexation hygiene.
- **Data Grade (Data)**: Migration sovereignty, tenant isolation, and deterministic seeding.
- **Zero-Trust Grade (Security)**: PII sanitization, immutable audit trails, and internal entitlements.
- **Contract Grade (API)**: Idempotency keys, response normalization, and contract-first design.
- **Confidence Grade (Testing)**: Production-parity integration, flake-zero resilience, and edge-case focus.
- **Production-Mirror Grade (Infra)**: Health-aware orchestration, resource constraints, and rationale-driven config.
- **Communication Grade (Docs)**: Rationale-first documentation, intent-driven diagrams, and zero-stale ADRs.
- **Spec Grade (README)**: Professional Azure-style structure, GFM admonitions, and author signatures.

### 3. The Compiled Constitution
Our unique compiler merges core directives and **10 Architectural References** into a single, high-density system prompt (`dist/system-prompt.md`).
- **Effect**: The agent carries the full "Principal Mindset" in its active context, enabling autonomous yet governed engineering.

---

## 🛡️ Safety & Safeguards

> [!IMPORTANT]
> **The Consent Handshake**: This framework implements a "Dead Man's Switch." Agents are constitutionally forbidden from performing destructive acts (e.g., `DROP TABLE`, `DELETE ALL`) autonomously. Any Tier 0 (Black) risk requires a mandatory manual bypass.

- **Production Lock**: All database operations assume a production environment by default.
- **The Halt Signal**: Agents MUST **HALT** immediately if they detect a Tier 0 or Tier 1 anti-pattern.
- **Surgical Intent**: Every contribution follows a strict anatomy: **Intent → Boundary → RCA → Approach → Verification**.

---

## ⚡ Technical Specification

> [!TIP]
> **Zero-Bloat Native Toolchain**: Built for the next era of Node.js. We have removed all dependencies like `commander`, `yargs`, and `ts-node`.

- **Native TypeScript**: Runs natively via `node --experimental-strip-types`.
- **Native CLI**: Uses `node:util/parseArgs` for surgical command parsing.
- **Native ESM**: Strictly uses ESM module patterns and explicit `.ts` extensions.
- **Native Styling**: High-density terminal feedback via native ANSI escape codes.

---

## 🚀 Getting Started

### Installation via registry

```bash
# Add the core engineering mind
npx skills add chitrank2050/agent-posture --skill posture-core

# Add the complete Eleven-Pillar constitution
npx skills add chitrank2050/agent-posture --skill \
  posture-core posture-backend posture-frontend posture-workflows \
  posture-seo posture-data posture-security posture-api \
  posture-testing posture-infra posture-docs posture-readme
```

### Local Development

```bash
# Install (Zero External Dependencies)
pnpm install

# Validate all 11 skills against the Zod schema
pnpm run validate

# Compile the full constitution into a single system prompt
pnpm run compile [addon-name]
```

---

## 📜 Reference Library

The framework is supported by 10 high-density reference files:
- `Ref 00`: The 77-Point Dossier (Atomic Anchors).
- `Ref 05`: The Anti-Pattern Protocol (Hard Stops).
- `Ref 09`: Calibration Diffs (Before/After logic).
- ... and 7 others covering Stack Eras, PR Anatomy, and The Canon.

---

<p align="center">
  ❤️ Developed by <b><a href="https://www.chitrankagnihotri.com">Chitrank Agnihotri</a></b>
</p>
