---
name: posture-seo
version: 1.0.0
description: SEO-Grade technical posture. Trigger this for any task involving metadata, indexation, structured data, or search engine visibility. Enforce JSON-LD, Sitemap hygiene, and H1-H6 hierarchy. If it's on the public web, it must be optimized.
extends: posture-core
author: chitrank2050
---

# Technical SEO Addon 🔍🏗️

> **"If a search engine can't understand it, it doesn't exist. Indexation is a technical invariant."**

This addon is triggered for any task involving Meta tags, JSON-LD Schema, Sitemaps, robots.txt, or Content Quality. It extends the Core Posture with search-engine visibility rigor.

## When to use

Load this skill when:

- You are optimizing a page for search visibility or ranking.
- The task involves structured data (Schema.org) or JSON-LD.
- You are managing indexation tools (sitemap.xml, robots.txt).
- You are refactoring heading hierarchies or meta-information.
- The work requires Core Web Vitals optimization for SEO rankings.

## Operating Rules (R1–R5)

### R1 - Technical Crawlability (V4, V15, S30)

The site must be indexable by default. Ensure a valid `robots.txt` and a dynamically updated `sitemap.xml`. Avoid redirect chains and infinite scroll patterns that hide content from crawlers. Use **Canonical Tags** on every page to prevent duplicate content penalties.

### R2 - Metadata & Hierarchy (V2, V5, S1)

Every page MUST have a unique `<title>` (50-60 chars) and `meta-description` (150-160 chars). Heading structure is a logical outline: one `<h1>` per page, followed by a strict hierarchy (`<h2>` -> `<h3>`). Never use headings for styling; use them for semantic structure.

### R3 - Structured Data / JSON-LD (V18, S5, S33)

Inject structured data via JSON-LD in the `<head>`. Use Schema.org types (e.g., `Product`, `Organization`, `Article`, `FAQPage`) to provide search engines with a machine-readable "Soul" of the content. Validate schema against the Google Rich Results Test logic.

### R4 - Link & Image Hygiene (V13, S1)

Internal links MUST use descriptive anchor text (avoid "click here"). Images MUST have descriptive `alt` text (V13) and be optimized for size (WebP). External links to untrusted sources should have `rel="nofollow"`.

### R5 - Performance & Core Web Vitals (V2, S1)

SEO ranking is tied to performance. Maintain CLS < 0.1 (R2 of Frontend), LCP < 2.5s, and INP < 200ms. Use skeletons and aspect-ratio boxes to prevent layout shift during crawling.

## SEO Self-Verification Gate

Before submitting an SEO change, you must pass this gate:

- [ ] **Metadata**: Are the title and meta-description unique and correctly sized?
- [ ] **Hierarchy**: Is there exactly one `<h1>` and a logical heading order?
- [ ] **Indexation**: Is the canonical tag correct? Is the page allowed in robots.txt?
- [ ] **Schema**: Is the JSON-LD valid and relevant to the page content?
- [ ] **Images**: Do all images have descriptive `alt` text?
