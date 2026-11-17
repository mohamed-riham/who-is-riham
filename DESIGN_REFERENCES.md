# EXTERNAL DESIGN SKILLS & UPSTREAM REFERENCES
## NOIR EDITORIAL | WARM INDUSTRIAL EDITION

This document catalogs all external design skills, upstream repositories, and design system authorities integrated into the production architecture of **Mohamed Riham's Portfolio**.

---

## 1. Upstream Skills & Authorities Catalog

### 1.1 Anthropic `frontend-design`
- **Source Repository:** [https://github.com/anthropics/skills](https://github.com/anthropics/skills)
- **Target Path:** `skills/frontend-design/SKILL.md`
- **Installation Status:** Integrated & Harmonized in `.agent/skills/frontend-design/SKILL.md`.
- **Core Principles Applied:**
  - **Distinctive Art Direction:** Reject generic AI templates (e.g., purple/cyan glows, standard rounded pill grids, cliché hero badges).
  - **Warm Industrial Aesthetic:** Cohesive palette of Obsidian (`#040202`), Dark Brown (`#5C2712`), Burnt Orange (`#C43E17`), Bronze (`#6B503C`), Ivory (`#F9F9F6`), Amber Gold (`#DEA355`), Sand (`#D3C29F`), and Steel Blue (`#678292`).
  - **Editorial Gravitas:** Purposeful pairing of high-legibility interface typography (*Manrope*) with selective editorial italic accents (*Instrument Serif*) and technical monospaced metadata (*IBM Plex Mono*).
  - **Content-Driven Visuals:** Authentic project artifacts (e.g., real YOLOv8 prediction images with bounding boxes, real confusion matrix graphs) instead of stock illustrations or generic vector artwork.

### 1.2 Vercel `web-design-guidelines`
- **Source Repository:** [https://github.com/vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)
- **Live Guidelines Authority:** [https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md)
- **Installation Status:** Installed in `.agent/skills/web-design-guidelines/SKILL.md`.
- **Core Rules Applied:**
  - **Accessibility:** All icon-only buttons (`GithubIcon`, `LinkedinIcon`, `HuggingFaceIcon`, `InstagramIcon`, `Search`, `Menu`) include explicit `aria-label` tags.
  - **Focus & States:** Visible, high-contrast `:focus-visible` rings with custom burnt orange outline and box-shadow. No bare `outline: none`.
  - **Touch Targets:** Minimum touch target height $\ge 44\text{px}$ across mobile viewports.
  - **Motion Restraint:** All transitions use hardware-accelerated CSS properties (`transform`, `opacity`), keeping duration $\le 300\text{ms}$. Full support for `@media (prefers-reduced-motion: reduce)`.
  - **Typography & Numbers:** Metrics and numerical counters use monospaced or `tabular-nums` alignment to prevent layout shifts.

### 1.3 Vercel `react-best-practices`
- **Source Repository:** [https://github.com/vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)
- **Target Path:** `skills/react-best-practices/SKILL.md`
- **Installation Status:** Installed in `.agent/skills/react-best-practices/SKILL.md`.
- **Core Rules Applied:**
  - **Server/Client Component Boundaries:** Keep data fetching and static page definitions on React Server Components (RSC); isolate `"use client"` exclusively to interactive controls (Command Palette, Mobile Menu drawer, Category tabs, Copy Email button).
  - **Static Prerendering:** Next.js 16 `output: "export"` with `generateStaticParams()` to prerender all project case-study routes at build time.
  - **Base Path Awareness:** Centralized `getAssetPath()` utility avoiding hydration mismatches and hardcoded hostnames.

### 1.4 Google Stitch Design Skills
- **Source Repository:** [https://github.com/google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)
- **Target Skills:** `taste-design` & `design-md`
- **Installation Status:** Installed in `.agent/skills/taste-design/SKILL.md` and `.agent/skills/design-md/SKILL.md`.
- **Core Principles Applied:**
  - **Semantic Design Tokens:** Established semantic color roles (`--bg-obsidian`, `--surface-dark-brown`, `--accent-burnt-orange`, `--surface-bronze`, `--text-ivory`, `--accent-amber-gold`, `--text-sand`, `--accent-steel-blue`).
  - **Asymmetric Composition:** Bento-grid architecture with distinct 12-column lead cards paired with 6-column secondary studies.
  - **Single Source of Truth:** Formalized tokens in `app/globals.css` and documented in `DESIGN_SYSTEM.md`.

### 1.5 W3C Web Accessibility Guidelines (WCAG 2.2) & web.dev
- Strict compliance with WCAG 2.2 Level AA / Level AAA contrast standards across all components.
