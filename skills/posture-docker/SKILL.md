---
name: posture-docker
description: Container-Grade engineering posture for high-rigor environments. Activate for Dockerfile optimization, secure orchestration, and image size audits. Enforce multi-stage mandates, non-root sovereignty, and deterministic layer caching.
metadata:
  version: 1.0.0
  extends: posture-core
  author: chitrank2050
---

# Technical Container Posture (Docker) 🐳🛡️

> **"A container is not just a wrapper; it is the final frontier of your application's security and efficiency. Bloat is a vulnerability."**

This addon is triggered for any task involving `Dockerfile`, `docker-compose.yml`, container security audits, or image size optimization.

## When to use

Load this skill when:

- You are writing or refactoring a `Dockerfile`.
- You are setting up or optimizing `docker-compose` stacks.
- You are performing a security hardening pass on existing containers.
- The task involves reducing image size or improving build performance.
- You are configuring cross-service networking or volume persistence.

## Operating Rules (D1–D5)

### D1 - Multi-Stage Mandate (V16, S4, S25)

Zero-bloat architecture. Every production image MUST use multi-stage builds. Compilation tools, package manager caches, and raw source code MUST NOT persist in the final runtime layer. Copy only the necessary binary/artifact from the builder stage (V16).

### D2 - Minimal Attack Surface (V16, S25)

Base image hygiene. Prefer `alpine`, `distroless`, or official `slim` variants. Specify exact version tags (e.g., `node:20.11.0-alpine3.19`) to ensure reproducibility (S25). Floating tags like `latest` are **STRICTLY FORBIDDEN** in production contexts.

### D3 - Non-Root Sovereignty (V16, V21, S16)

The "Principal" Edge. A container running as root is a failure of posture. You MUST explicitly create a system user/group and use the `USER` instruction. Use `COPY --chown` to maintain the least privilege principle (V16).

### D4 - Layer Caching Discipline (V2, V5, S18)

Optimize for velocity. Order instructions from least frequently changing to most frequently changing (e.g., `COPY package.json` → `RUN install` → `COPY src/`). Combine related `RUN` commands with `&&` only when it logically reduces layer overhead (V2).

### D5 - Orchestration Integrity (V1, V7, V34)

Compose as the Source of Truth (SOT). Define explicit `networks` (internal vs public), named `volumes`, and `healthchecks` for all critical services. Use `depends_on` with `condition: service_healthy` to ensure atomic service startup (V1).

## Diagnostics & Validation (Procedural)

Before finalizing any Docker configuration, execute the following audit:

1. **Environment Sync**: `docker --version` and `docker compose version` to verify substrate compatibility.
2. **Context Audit**: Check for `.dockerignore`. If missing, you MUST create one excluding `.git`, `node_modules`, and local secrets.
3. **Build Validation**: `docker build --no-cache -t posture-audit .`. Failure to build without cache indicates a deterministic flaw.
4. **Layer Inspection**: `docker history posture-audit`. Verify that no build-time secrets or heavy tools persist in the final layers.
5. **Runtime User Check**: `docker run --rm posture-audit whoami`. If output is `root`, the build FAILS D3.

## Common Pitfalls (Gotchas)

- **The Node_Modules Trap**: Never copy local `node_modules` into the builder. Use `.dockerignore` and `npm ci` inside the container.
- **The PID 1 Problem**: Use `tini` or equivalent init systems if your application doesn't handle signals (SIGTERM) correctly.
- **The Secret Leak**: Never use `ARG` or `ENV` for production secrets. Use Docker Secrets or BuildKit `--mount=type=secret`.
- **The Ghost Volume**: Bind mounts (`-v ./src:/app`) are for development only. Use named volumes or `COPY` for production artifacts.

## Container Self-Verification Gate

- [ ] **Stages**: Does the final image contain ONLY production artifacts?
- [ ] **Privilege**: Is the `USER` set to a non-root UID/GID?
- [ ] **Pinning**: Are all base images pinned to specific version tags?
- [ ] **Context**: Is there a `.dockerignore` pruning the build context?
- [ ] **Health**: Does every long-running service have a `HEALTHCHECK`?

## Deep Reference Library

- `../posture-core/references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `../posture-core/references/04-toolchain-registry.md` - Standards for reproducible infrastructure.
- `../posture-core/references/07-runtime-coherence.md` - Hardening guides for container runtimes.
- `../posture-core/references/09-calibration-diffs.md` - Examples of "Good" vs "Bad" Docker configurations.
- `multi-stage-dockerfile` (github/awesome-copilot) - Optimization patterns.
- `docker-expert` (sickn33/antigravity-awesome-skills) - Advanced diagnostics.
