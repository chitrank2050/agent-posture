# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| v1.x    | :white_check_mark: |

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

If you discover a security vulnerability within the Agent Posture framework or any core skill, please report it privately.

### How to Report

Please send an email to **chitrank2050@gmail.com** (or open a [GitHub Private Vulnerability Report](https://github.com/chitrank/agent-posture/security/advisories/new)) with the following information:

1. **Description**: A detailed description of the vulnerability.
2. **Steps to Reproduce**: A clear guide to reproducing the issue.
3. **Impact**: What could an attacker achieve?
4. **Suggested Fix**: If you have a fix, please share it!

### Our Process

1. **Acknowledgment**: We will acknowledge receipt within 48 hours.
2. **Investigation**: We will determine the severity and impact.
3. **Disclosure**: Once a fix is ready, we will coordinate a public disclosure date.

## Security Practices

Agent Posture is built with a **Security-First** mindset:

- **PII Scrubbing (S11)**: Recommended logic for masking sensitive data in logs.
- **Dependency Auditing**: Automated security analysis (zizmor) on all workflows.
- **Secret Scanning**: Gitleaks integration in local hooks.
- **Validation (S5)**: Zod-based runtime validation for all external skill inputs.

Thank you for helping keep Agent Posture secure! 🛡️✨
