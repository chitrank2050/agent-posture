---
name: posture-frontend
version: 1.0.2
description: Principal Engineering posture for modern React/Next.js frontend applications.
extends: posture-core
author: chitrank2050
---

# Frontend Addon 🎨⚡

> **"A UI is a state machine. Treat it with the same rigor as a database."**

This addon is triggered for any task involving React, Next.js, Styling (CSS/Tailwind), or DOM manipulation. It extends the Core Posture with UX and performance rigor.

## When to use

Load this skill when:

- You are building or refactoring React/Next.js components.
- The task involves state management, URL-driven UI logic, or data-fetching hooks.
- You are optimizing for Core Web Vitals (LCP, CLS, FID).
- The work requires a11y (accessibility) compliance or semantic HTML structure.
- You are implementing a design system or token-based styling.

## Operating Rules (R1–R5)

### R1 - The "State-as-URL" Rule (V18, V34, S9)

If state can be in the URL (searchParams/path), it MUST be in the URL (V34). Only use `useState` for transient, non-persistent UI. Avoid `useEffect` to sync URL to local state; use the platform primitives (`useSearchParams`, `usePathname`).

### R2 - Layout Integrity & Hydration Hygiene (V2, S1, S33)

Cumulative Layout Shift (CLS) is a hard fail. Every image/skeleton must have reserved dimensions (S1). Zero `window` or `document` calls in top-level render; guard with `useIsMounted` or `useEffect` to prevent hydration mismatch.

### R3 - Accessibility (a11y) as a Baseline (V21, S5)

Semantic HTML is non-negotiable (`main`, `section`, `article`). Interactive elements without text MUST have `aria-label`. Every clickable element must be a `<button>` or `<a>` with valid keyboard navigation support.

### R4 - Component Rigor & Composition (V6, V25)

Avoid prop drilling > 3 levels; reach for Composition or Context. Earn the cost of a "Reusable Component" (V6)-build specific first, genericize on the 2nd usage. Manage Z-indices via a centralized token map, never arbitrary values.

### R5 - Styling & Tokenization (V3, S33)

Use Design Tokens (CSS Variables or Tailwind theme). Avoid hardcoded hex values. Mobile-first responsive design is the default.

## Frontend Self-Verification Gate

1. **Hydration** - Does it flash or throw a mismatch error on refresh? (R2)
2. **URL State** - If I refresh, does the UI state (filters, tabs) reset? (R1)
3. **Empty States** - What does it look like with `data: []`? (Ref 05)
4. **Error Boundaries** - What happens if the data fetch fails? (Ref 05)
5. **A11y** - Can I navigate and trigger all actions using only the keyboard? (R3)
6. **Layout** - Does the page jump when images load? (R2)
