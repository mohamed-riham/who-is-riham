# SKILLS_USED.md

This document tracks all agent skills discovered, activated, and applied during the design, engineering, and delivery of Mohamed Riham's professional portfolio website.

---

## 1. frontend-design
* **Location:** `.agent/skills/frontend-design/SKILL.md` (and `.agents/skills/frontend-design/SKILL.md`)
* **What it contributes:**
  * Authoritative guidance on visual art direction and high-end aesthetic choices.
  * Prevention of generic AI templates, repetitive card kits, and cliché gradients.
  * Intentional typographic scale, rhythm, and editorial hierarchy.
  * Content-grounded design tailored specifically to a Data Science / AI engineering profile.
* **Where applied:**
  * Overarching visual direction: Dark, cinematic, technical editorial aesthetic (`#070A0F`, `#0B1017`, electric cyan, muted gold).
  * Asymmetric, content-driven layouts for Hero, Case Studies, and Skills proof matrices.
  * Elimination of decorative non-functional elements (no fake percentages, no emojis as icons).

---

## 2. portfolio-design-system
* **Location:** `.agent/skills/portfolio-design-system/SKILL.md`
* **What it contributes:**
  * Design tokens (CSS custom properties) for dark/light themes.
  * Fluid typographic scaling (`clamp()`) for headers, body copy, and monospace metadata labels.
  * Component specification: sticky navbar with active highlight, bento project cards, tag chips, timeline nodes, and copy-to-clipboard interactions.
  * Contrast ratio guarantees (minimum 4.5:1 on text elements) and motion restraint adhering to `prefers-reduced-motion`.
* **Where applied:**
  * `globals.css` design token architecture and Tailwind CSS custom configuration.
  * Fluid responsive scaling from 375px mobile screens up to 1920px desktop viewports.
  * Case study layout structure (Problem → Solution → Architecture → Results → Learnings).

---

## 3. portfolio-website-builder
* **Location:** `.agent/skills/portfolio-website-builder/SKILL.md`
* **What it contributes:**
  * End-to-end delivery framework from verified intake data to Next.js App Router architecture.
  * Single source of truth data modeling (`/content/projects.ts`, `/content/profile.ts`, `/content/skills.ts`, etc.).
  * Strict anti-fabrication standards: every number and claim must trace back to verified documents.
  * Production QA protocols: Lighthouse 90+ targets, semantic HTML (`h1` hierarchy, alt text, ARIA labels), OpenGraph metadata, JSON-LD `Person` schema, and browser agent testing.
* **Where applied:**
  * Project data schema and routing: dynamic case-study pages (`/projects/[slug]`).
  * Strict separation between verified accomplishments and prototypes/academic research.
  * Automated testing and verification in live browser rendering.
