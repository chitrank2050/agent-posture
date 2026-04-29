# Contributing to Agent Posture 🧠🏗️

First off, thank you for considering contributing to the **Agent Posture** framework! Help us build the ultimate high-rigor specification for the next generation of AI Agents.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct (standard Contributor Covenant).

## Getting Started

### Prerequisites

- **Node.js**: v24 or higher
- **pnpm**: v10 or higher
- **TypeScript Knowledge**: All skills are validated via Zod schemas.

### Local Setup

1. **Clone the repo**:
   ```bash
   git clone https://github.com/chitrank2050/agent-posture.git
   cd agent-posture
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Explore the Posture**:
   Check `skills/core/SKILL.md` to understand the base engineering principles.

## Development Workflow

### 🌿 Branch Naming

We enforce strict branch naming via CI. Please use the following format:
`type/description` (e.g., `feat/add-frontend-addon`)

Allowed types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`.

### 🧪 Testing & Validation

Before pushing, ensure your skills pass the validation suite:

```bash
pnpm run validate
pnpm run lint
```

### 💬 Commit Messages

We follow **Conventional Commits**. Please format your commit messages as:
`type(scope): description` (e.g., `feat(skill): add rust-posture`)

## Pull Request Process

1. **Link an Issue**: Every PR should ideally address an existing issue or a requested "Skill Gap."
2. **Keep it Surgical (V29)**: Small, surgical PRs are easier to review. Fixes and features should NEVER share a commit.
3. **Principal Mindset**: Ensure your proposed changes adhere to the **Dossier (Ref 00)**.

Happy coding! 🚀✨
