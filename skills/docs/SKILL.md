---
name: posture-docs
version: 1.0.0
description: Communication-Grade engineering posture. Activate this for any task involving Markdown, MkDocs, ADRs, or technical writing. Enforce rationale-first logic, structural hierarchy, and intent-driven diagrams. If it's not documented, it's a secret.
extends: posture-core
author: chitrank2050
---

# Technical Documentation Posture 📝🛰️

> **"Code explains the 'How'; documentation explains the 'Why'. Without the 'Why', the 'How' is just technical debt."**

This addon is triggered for any task involving Markdown files, Documentation sites (MkDocs, VitePress), Architecture Decision Records (ADRs), or technical diagrams.

## When to use

Load this skill when:

- You are writing or updating `README.md` or a technical guide.
- The task involves creating or modifying an ADR (Architecture Decision Record).
- You are configuring documentation tools like MkDocs or Docusaurus.
- The work involves designing complex workflows that require visualization.
- You are documenting a new API, feature, or integration pattern.

## Operating Rules (R1–R5)

### R1 - Business Intent First (V8, V30, S18)

Documentation is for humans. Always state the **Business Intent** and **Trade-offs** before diving into technical setup. Use the "Problem -> Proposed Solution -> Alternatives considered" pattern for all major architectural changes.

### R2 - Structural Hierarchy (V2, S17, S18)

Maintain a strict logical outline. Every doc MUST have a single `<h1>`, clear `<h2>` sections, and use semantic Markdown. Avoid "Wall of Text" syndrome; use callouts (Notes, Tips, Warnings) to highlight critical invariants.

### R3 - Single Source of Truth (V13, S17)

Don't repeat code in docs. Use snippets or reference specific files/lines. If documentation describes a system prompt or a config file, ensure the doc explains the _Strategy_, while the file contains the _Implementation_.

### R4 - Intent-Driven Diagrams (V18, S1)

Visualize the invisible. For complex logic (auth flows, event streaming), use **Mermaid.js** diagrams. Diagrams MUST follow the same Principal rules as code: clear boundaries, directional flow, and zero ambiguity.

### R5 - Zero-Stale Invariant (V31, S21)

Documentation is part of the "Definition of Done." No code change that alters the "Why" or "How" of a system is complete without a corresponding update to the docs. If a feature is deprecated, it MUST be marked as such in the documentation immediately.

## Documentation Self-Verification Gate

- [ ] **Rationale**: Does this document explain the 'Why' behind the technical choices?
- [ ] **Hierarchy**: Is there a clear, logical heading structure?
- [ ] **Clarity**: Are complex flows visualized with diagrams?
- [ ] **Parity**: Does the documentation match the current state of the code?
- [ ] **Actionable**: Is the "Setup" or "Usage" section verifiable and error-free?

## Deep Reference Library

- `references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `references/02-pr-anatomy.md` - Technical communication in PRs.
- `references/03-voice-contract.md` - The Principal Voice (Consultant Persona).
- `references/06-the-canon.md` - The Intellectual Compass for technical writing.
