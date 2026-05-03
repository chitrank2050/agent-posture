---
name: posture-changelog
description: History-Grade engineering posture. Activate this for any task involving CHANGELOG.md generation, git-cliff configuration, or release notes. Enforce conventional commit mapping, semantic sectioning, and constitutional attribution.
metadata:
  version: 1.0.1
  extends: posture-core
  author: chitrank2050
---

# Technical History Posture (Changelog) 📜🔖

> **"A codebase without a readable history is a codebase without an identity. The changelog is the resume of your repository."**

This addon is triggered for any task involving `CHANGELOG.md`, `git-cliff`, release planning, or commit message auditing.

## When to use

Load this skill when:

- You are configuring or modifying `cliff.toml`.
- You are generating release notes for a new version.
- You are auditing the commit history for conventional compliance.
- The task involves resolving duplicated entries or formatting issues in the changelog.
- You are mapping technical changes back to architectural decisions (ADRs).

## Operating Rules (R1–R5)

### R1 - Conventional Commit Rigor (V5, S4, S41)

History is immutable. Every commit MUST follow the Conventional Commits specification (`feat`, `fix`, `refactor`, `chore`). If the local history contains non-compliant messages, you MUST **HALT** and propose a squash/rebase strategy before generating the changelog.

### R2 - Semantic Sectioning (V2, S17)

Group changes logically. The changelog MUST be divided into clear semantic sections: **🚀 Features**, **🐛 Bug Fixes**, **🚜 Refactor**, **📚 Documentation**, and **⚙️ Maintenance**. Avoid "Miscellaneous" sections; every change has a purpose.

### R3 - Constitutional Attribution (V1, V8, S18)

The "Principal" Edge. For major features or breaking changes, include the corresponding **Dossier V/S codes** in the description (e.g., "Implement atomic upsert (V1) for user creation"). This links the release history directly to the framework's constitution.

### R4 - Duplicate-Free Integrity (V13, S17)

Zero redundancy. Before finalizing a changelog, audit for duplicate entries caused by merge commits or overlapping tags. Ensure the `git-cliff` configuration is tuned to handle the local branching model (e.g., `github_tags` or `git_tags`).

### R5 - Release Hygiene & Automation (V13, S21)

The changelog is part of the artifact. No release is complete without an updated `CHANGELOG.md`. If the project uses automated releases (GitHub Actions), ensure the `git-cliff` step is validated and produces valid GFM (GitHub Flavored Markdown).

## Changelog Self-Verification Gate

- [ ] **Compliance**: Do all commits in the range follow Conventional Commits?
- [ ] **Mapping**: Are changes correctly grouped into semantic sections?
- [ ] **Density**: Are major changes attributed to the Dossier V/S codes?
- [ ] **Cleanliness**: Have all duplicate or redundant entries been pruned?
- [ ] **Format**: Does the output use high-quality GFM formatting?

## Deep Reference Library

- `../posture-core/references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `../posture-core/references/02-pr-anatomy.md` - Aligning changelogs with PR descriptions.
- `../posture-core/references/09-calibration-diffs.md` - Examples of "Good" vs "Bad" commit history.
