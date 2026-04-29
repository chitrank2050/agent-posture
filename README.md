# Agent Posture 🧠🏗️

[![Principal Grade](https://img.shields.io/badge/Posture-Principal_Grade-blueviolet?style=for-the-badge)](https://skills.sh/r/chitrank2050/agent-posture)
[![Validated](https://img.shields.io/badge/Registry-Validated-success?style=for-the-badge)](./tools/validate.ts)
[![Toolchain: Native Node](https://img.shields.io/badge/Toolchain-Native_Node_24-green?style=for-the-badge)](./package.json)
[![Security: Tier 0 Protected](https://img.shields.io/badge/Security-Tier_0_Protected-black?style=for-the-badge)](./skills/core/references/05-anti-patterns.md)

> **"Code generation is a utility; Engineering Rigor is a Posture."**

**Agent Posture** is a high-rigor, spec-driven framework for AI Agents. It transcends standard "skills" by enforcing an **Eleven-Pillar Constitution**, multi-layer verification, and an authoritative "Skeptic's Posture." It is built for Principal Engineers who require agents to think like architects, not just coders.

---

## 🏛️ The Three-Layer Architecture

We divide engineering rigor into three distinct layers to ensure both broad alignment and deep technical execution:

### 1. The Core Lens (`posture-core`)
The non-negotiable foundation of all engineering activity.
- **77-Point Dossier**: Atomic engineering anchors (V1-V36, S1-S41) that serve as the "ground truth" for all logic.
- **Meta-Rules (The Lens)**: Cognitive filters for substrate-independence and official-docs-first discovery.
- **Voice Contract**: A strict psychological agreement on zero-filler communication and surgical intent.

### 2. Specialized Postures (`posture-backend`, `posture-frontend`, `posture-workflows`, etc.)
Domain-specific rigor for complex systems. Each pillar is mapped to the Core Dossier but provides specialized operating rules:
- **Systems Grade (Backend)**: Atomic transactions, jittered resilience, and O(n) border safety.
- **UX Grade (Frontend)**: State-as-URL truth, hydration hygiene, and CLS-zero layout integrity.
- **Automation Grade (Workflows)**: OIDC identity, runner hardening, and SLSA 3 integrity.
- **Search Grade (SEO)**: JSON-LD schema, metadata hierarchy, and indexation hygiene.
- **Data Grade (Data)**: Migration sovereignty, tenant isolation, and deterministic seeding.
- **Zero-Trust Grade (Security)**: PII sanitization, immutable audit trails, and internal entitlements.
- **Contract Grade (API)**: Idempotency keys, response normalization, and contract-first design.
- **Confidence Grade (Testing)**: Production-parity integration, flake-zero resilience, and edge-case coverage.
- **Production-Mirror Grade (Infra)**: Health-aware orchestration, resource constraints, and rationale-driven config.
- **Communication Grade (Docs)**: Rationale-first documentation, intent-driven diagrams, and zero-stale invariants.

### 3. The Compiled Constitution
Our unique compiler merges core directives and **10 Architectural References** into a single, high-density system prompt (`dist/system-prompt.md`).
- **Effect**: The agent isn't just following a list; it carries the full "Principal Mindset" in its active context, enabling autonomous yet governed engineering.

---

## 🛡️ Governance & Safety (Tier 0 & 1)

This framework implements active governance. The agent is not just following a list; it is constitutionally bound to police the architecture.

- **The Halt Signal (Ref 05)**: The agent MUST **HALT** immediately if it detects a **Tier 0 (Catastrophic)** or **Tier 1 (Hard Stop)** anti-pattern. No silent overrides.
- **The Consent Handshake**: Destructive production mutations (e.g., `DROP TABLE`) are forbidden without an explicit "Dead Man's Switch" manual bypass.
- **Surgical Intent (Ref 02)**: Every Pull Request follows a strict Principal anatomy: **Intent → Boundary → RCA → Approach → Verification**.
- **Self-Verification Gates**: Every specialized posture includes a domain-specific gate (Types, Data, Security, Shape) that must be cleared before submission.

---

## ⚡ Zero-Bloat Native Toolchain

Built for the next era of Node.js. No `commander`, `yargs`, or `ts-node` bloat.

- **Native TypeScript**: Runs natively via `node --experimental-strip-types`.
- **Native CLI**: Uses `node:util/parseArgs` for surgical command parsing.
- **Native ESM**: Strictly uses ESM module patterns and explicit `.ts` extensions.
- **Native Styling**: High-density terminal feedback via native ANSI escape codes.

---

## 🚀 Quick Start (Principal Grade)

### Full Suite Deployment (Recommended)
```bash
# Install the complete Eleven-Pillar constitution
npx skills add chitrank2050/agent-posture --skill \
  posture-core posture-backend posture-frontend posture-workflows \
  posture-seo posture-data posture-security posture-api \
  posture-testing posture-infra posture-docs
```

### Selective Installation
```bash
# Add the core engineering mind
npx skills add chitrank2050/agent-posture --skill posture-core

# Add specialized domain rigor (e.g., Data & Security)
npx skills add chitrank2050/agent-posture --skill posture-data posture-security
```

### Local Development & Compilation
```bash
# Install (Zero External Dependencies)
pnpm install

# Validate all 11 skills against the Zod schema
pnpm run validate

# Compile the full constitution into a single system prompt
pnpm run compile [addon-name]
```

---

## 📜 The Reference Library

The framework is supported by 10 high-density reference files that the agent can traverse for deep context:
- `Ref 00`: The 77-Point Dossier (Atomic Anchors).
- `Ref 05`: The Anti-Pattern Protocol (Hard Stops).
- `Ref 09`: Calibration Diffs (Before/After logic).
- ... and 7 others covering Stack Eras, PR Anatomy, and The Canon.

---

## 🤝 Contributing

We welcome contributions that refine the **77-point Dossier** or expand the **Specialized Postures**. Please ensure any new rules are anchored in architectural invariants and follow the Principal Engineering mindset.

© 2026 Chitrank Agnihotri • Principal Engineering Posture
