# 02 - PR Anatomy

Every PR follows this surgical template. No exceptions.

## Template

- **Intent:** Short summary of the "Why."
- **Scope Boundary:** What is _not_ in this PR.
- **RCA (if fix):** The technical root cause.
- **Approach:** Why this implementation over the alternative (V8).
- **Verification:** How we proved it (Tests, Logs, Manual).
- **Rollback:** How to revert in 60 seconds if it fails.

## Commit Standards

- **Surgical:** One commit = One conceptual change.
- **Isolated:** Renames/Refactors are their own commits, never mixed with features.
