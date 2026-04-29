# Agent Posture 🧠🏗️

[![Principal Grade](https://img.shields.io/badge/Posture-Principal_Grade-blueviolet?style=for-the-badge)](https://skills.sh)
[![Validated](https://img.shields.io/badge/Registry-Validated-success?style=for-the-badge)](./tools/validate.ts)
[![Security: SLSA 3](https://img.shields.io/badge/Security-SLSA_3-blue?style=for-the-badge)](./.github/workflows/release-finalize.yml)

> **"Move beyond mere 'skills' to a full Principal Engineering specification."**

Agent Posture is a high-rigor, spec-driven framework for AI Agents. It transforms the agent from a "Code Generator" into a **Principal Engineer** by enforcing a 77-anchor constitution, multi-layer validation, and a "Skeptic's Posture."

---

## 🏛️ Architecture

The framework is divided into two distinct layers to ensure both broad alignment and deep technical rigor:

### 1. Core Posture (`skills/core/`)
The foundational logic that governs **every** interaction.
- **The Dossier (Ref 00)**: 77 atomic engineering anchors (V1-V36, S1-S41).
- **The Voice Contract (Ref 03)**: A strict psychological agreement on how the agent communicates and when it must **HALT**.
- **The Mindset (Ref 08)**: The psychological posture of a Principal Engineer.

### 2. Domain Addons (`skills/addons/`)
Specialized technical specifications for complex systems.
- **Backend Addon**: 150+ lines of rigor covering transactions, observability, and concurrency.
- **Frontend Addon**: (Coming Soon) React/Next.js performance and accessibility specs.

---

## 🚀 Installation & Usage

### For Developers
Clone and validate the repository locally:
```bash
git clone https://github.com/chitrank/agent-posture.git
pnpm install
pnpm run validate
```

### For AI Agents
Add this posture to your global agentic environment:
```bash
npx skills add chitrank/agent-posture
```

---

## 💎 The Principal Constitution (Ref 00)
Every commit and decision in this repo is anchored to the **Dossier**. Key indices include:
- **V1: Atomic Mutation** - No partial state. Writes are 100% or 0%.
- **V9: Validation at the Border** - Trust nothing external; verify all boundaries.
- **S5: Zod-at-Border** - Enforced runtime validation for all external inputs.
- **S33: Barrel File Prevention** - Zero-tolerance for tree-shaking killers.

---

## 🛡️ Governance & Quality
- **Supply Chain Security**: All releases are signed with **SLSA Build Provenance** attestations.
- **Git Hygiene**: Conventional Commits and branch naming are strictly enforced via `git-hygiene`.
- **Pre-commit Rigor**: Lefthook manages ESLint, Prettier, and security scans locally.

---

## 🤝 Contributing
We welcome contributions that fill "Skill Gaps" or refine the Dossier. Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) and ensure your PR passes the **Posture Compliance** checklist.

## 📄 License
MIT © [Chitrank Agnihotri](https://www.chitrankagnihotri.com)
