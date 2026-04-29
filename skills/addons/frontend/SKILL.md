---
name: frontend-addon
version: 1.0.0
description: Principal Engineering posture for modern React/Next.js frontend applications.
extends: core-posture
author: chitrank2050
---

# Frontend Addon 🎨⚡

> **"A UI is a state machine. Treat it with the same rigor as a database."**

This addon is triggered for any task involving React, Next.js, Styling (CSS/Tailwind), or DOM manipulation. It extends the Core Posture with UX and performance rigor.

## 1. The "State-as-URL" Rule (V18, S9)

- **Primary Truth**: If state can be in the URL (searchParams/path), it MUST be in the URL.
- **Client State**: Only use `useState` for transient, non-persistent UI (e.g., "isDropdownOpen").
- **Syncing**: Avoid `useEffect` to sync URL to local state. Use the platform (V33).

## 2. Performance & Layout Integrity (V2, S33)

- **Cumulative Layout Shift (CLS)**: Every image and skeleton must have a reserved height/width to prevent jumping (S1).
- **Hydration Hygiene**: Zero `window` or `document` calls in the top-level render. Guard with `useEffect` or `useIsMounted`.
- **Image Rigor**: Never use raw `<img>`. Use `next/image` with explicit `priority` for LCP elements.

## 3. Accessibility (a11y) as a Baseline (V21, S5)

- **Semantic HTML**: Use `<main>`, `<section>`, `<article>`, and `<nav>` over generic `<div>`.
- **ARIA Labels**: Interactive elements without text (icons) MUST have `aria-label`.
- **Keyboard Navigation**: Every clickable element must be a `<button>` or `<a>` with a valid `tabIndex`.

## 4. Component Rigor & Composition (V6, V25)

- **Prop Drilling**: Avoid drilling more than 3 levels deep. Reach for Composition or Context.
- **Generic Components**: Earn the cost of a "Reusable Component" (V6). Build it specifically first, then genericize on the 2nd usage.
- **Z-index Management**: Never use arbitrary values like `z-[999]`. Use a centralized Z-index map or layers.

## 5. Styling & Tokenization (V3, S33)

- **Design Tokens**: Use CSS Variables or Tailwind theme tokens. Avoid hardcoded hex values in components.
- **Responsive Design**: Mobile-first by default. Use `sm:`, `md:`, `lg:` prefixes strictly.

## 6. The "Skeptic's" Frontend Gate (Ref 05)

Before submitting UI changes, verify:

1. **Hydration**: Does it flash on refresh?
2. **Error Boundaries**: What happens if the data fetch fails?
3. **Empty States**: What does the component look like with `data: []`?

**Protocol:** If the existing UI uses `any` for props or hardcoded pixel values, flag it as a **Tier 1 Anti-Pattern** before refactoring.
