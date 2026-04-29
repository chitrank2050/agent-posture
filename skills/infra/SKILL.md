---
name: posture-infra
version: 1.0.0
description: Infrastructure-Grade engineering posture. Activate this for any task involving Docker, Kubernetes, CI/CD runners, or Environment variables. Enforce health-aware orchestration, resource constraints, and rationale-heavy configuration. If it runs in a container, it must be constrained and healthy.
extends: posture-core
author: chitrank2050
---

# Technical Infrastructure Posture 🏗️🐳

> **"Infrastructure is not a utility; it is the physical constraint of your logic. If the runner starves, the code fails."**

This addon is triggered for any task involving Docker, Docker Compose, K8s manifests, Environment variables (.env), or Local Orchestration.

## When to use

Load this skill when:

- You are modifying `docker-compose.yml` or `Dockerfile`.
- The task involves setting up or optimizing local development environments.
- You are configuring health checks, resource limits, or networking.
- The work involves CI/CD runner configuration or environment secrets.
- You are troubleshooting service-to-service communication issues.

## Operating Rules (R1–R5)

### R1 - Health-Aware Orchestration (V4, V9, S15)

Never assume a service is ready just because the process started. Every service MUST have a verifiable health check (e.g., `pg_isready`, `redis-cli ping`). Downstream services MUST use `depends_on` with the `service_healthy` condition to prevent race conditions during startup.

### R2 - Strict Resource Isolation (V14, S1)

Unconstrained containers are a risk. Every service MUST have explicit `deploy.resources.limits` for CPU and Memory. This ensures that a single service (like Kafka or a memory-leaking app) cannot starve the host or other critical services.

### R3 - Rationale-First Infrastructure (V8, S17, S18)

Documentation belongs in the config. Every image, version, and volume choice MUST be accompanied by a comment explaining the "Why" (e.g., "Postgres 18 for native UUID support"). Treat YAML as a technical specification, not just a property list.

### R4 - Persistence & Secret Hygiene (V5, S11, S19)

Strict separation of state and secrets. Data MUST reside in named volumes. Secrets MUST never be hardcoded in YAML; use environment variables or `.env` files with a clear `env.example` for the team.

### R5 - ARM64/Multi-Arch Awareness (V4, S30)

Developer parity is non-negotiable. Ensure all images are multi-arch or Alpine-based (`-alpine`) to support both Intel and Apple Silicon (ARM64) without emulation overhead.

## Infrastructure Self-Verification Gate

- [ ] **Health**: Does every service have a health check and appropriate `depends_on` logic?
- [ ] **Limits**: Are CPU and Memory limits explicitly defined for all containers?
- [ ] **Rationale**: Is there a comment explaining the choice of image and version?
- [ ] **Secrets**: Are there any hardcoded passwords or keys in the YAML?
- [ ] **Volumes**: Are named volumes used for all persistent data?

## Deep Reference Library

- `references/00-dossier.md` - The Principal Constitution (V1-V36, S1-S41).
- `references/05-anti-patterns.md` - The "Hard Stop" Risk Matrix.
- `references/07-runtime-coherence.md` - Edge vs. Persistent Server primitives.
- `references/09-calibration-diffs.md` - Infra-design Before vs. After examples.
