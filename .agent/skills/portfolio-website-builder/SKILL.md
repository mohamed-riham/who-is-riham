---
name: portfolio-website-builder
description: Builds a complete, production-ready personal portfolio website for a Data Science / Software Engineering / AI profile, from discovery through deployment. Use this skill whenever the user mentions a portfolio, personal website, developer site, "my website", showcasing projects, case studies, or hiring-focused web presence, even if they don't say "skill" or give a tech stack. Covers intake interview, content strategy, design system, Next.js + Tailwind build, project case-study pages, SEO, accessibility, performance, browser-based verification, and deployment.
---

# Portfolio Website Builder (for Antigravity)

Build a portfolio that a recruiter or hiring manager can understand in under 30 seconds and that an engineer can trust after 5 minutes. The site is a hiring tool, not an art piece: every design decision must make projects easier to find, understand, and believe.

## How to work in Antigravity

Antigravity gives you a planning flow, a terminal, an editor, and a browser agent. Use all of them, because a portfolio that was never opened in a browser usually has visible bugs.

1. **Plan first.** Use Planning mode. Produce an **Implementation Plan** artifact before writing code, and a **Task List** artifact you tick off as you go. Wait for the user's approval of the plan on the first run, since content and design choices are personal.
2. **Build in phases** (below). Finish and verify one phase before starting the next.
3. **Verify with the browser agent** after each major phase: load the page, check the console for errors, resize to mobile width, click every nav link. Attach screenshots to the **Walkthrough** artifact.
4. **Never invent facts.** Every metric, job title, date, and project claim comes from the user. If a number is missing, leave a clearly marked `TODO` in the content file and list it in the final summary. Fabricated metrics on a hiring document are worse than empty space.

---

## Phase 0: Intake (do this before any code)

Collect what you need, and read what already exists first (CV/resume files, README files, GitHub links, any `/docs` or `/content` folder in the workspace). Only ask about gaps, and ask them together in one message, not one at a time.

**Required**
- Full name, and the role they are targeting (Data Scientist, ML Engineer, Software Engineer, AI Engineer, or a blend)
- One-sentence positioning: what they build and for whom
- 3 to 5 projects to feature, each with: problem, their role, tech stack, results/metrics, repo link, live demo link (if any)
- Work experience and education (titles, organizations, dates, 1 to 3 outcome-focused bullets each)
- Contact: email, GitHub, LinkedIn, optional Kaggle / Medium / X / Instagram
- CV as PDF (for a download button)

**Preferences (offer defaults)**
- Visual direction: minimal / dark technical / playful / editorial. Default: dark-first technical with a light theme toggle.
- Accent color. Default: pick one that is not generic blue or purple-gradient.
- Domain name, if any. Default: deploy to a free Vercel URL and note how to attach a custom domain later.
- Blog section: yes/no. Default: build the structure but hide it until there is a first post.

If the user says "just build it", proceed with defaults and mark every placeholder so nothing fake ships silently.

---

## Phase 1: Content strategy (write words before pixels)

Draft all copy into a single data file first (see Phase 3). Layout follows content, not the other way round.

### Hero
- Line 1: name
- Line 2: positioning statement, specific and outcome-focused
  - Good: "I build end-to-end ML systems, from model to deployed app."
  - Bad: "Passionate developer who loves technology."
- Two buttons: **View projects** (primary) and **Download CV** (secondary)
- Small row of icon links: GitHub, LinkedIn, email

### Featured projects (3 to 5, ordered by strength)
Lead with the project that best matches the target role. For a hybrid profile, make sure the set includes:
- one **deployed end-to-end ML/AI app** (proves shipping)
- one **rigorous analysis or comparison** (proves data science depth: baselines, evaluation, error analysis)
- one **engineering-heavy project** (proves code quality: tests, structure, API)
- optionally one **distinctive project** (hardware + ML, computer vision, AI agent) that makes them memorable

### Case-study template (use for every project)
- **One-line impact statement** (what it does + who it helps)
- **Problem**: 2 to 3 sentences, real-world context
- **Approach**: key technical decisions and why (not just "used XGBoost")
- **Architecture**: simple diagram (SVG or image)
- **Results**: concrete numbers with a baseline (e.g. "F1 0.91 vs 0.78 baseline")
- **Stack tags**
- **Links**: Live demo, Source code, Write-up (only show links that exist)
- **What I learned / what I'd improve**: 2 to 3 honest sentences

### Other sections
- **About**: 2 short paragraphs max. Who they are, what they care about, what they're looking for. Include one human detail.
- **Skills**: grouped (Languages, Data/ML, Engineering, Cloud/Tools, Visualization). No percentage bars and no skill-level meters, since they carry no information. Only list what the user can discuss in an interview.
- **Experience and education**: reverse chronological, outcome bullets.
- **Contact**: email link, social links, short sentence on what they're open to.

### Writing rules
- Concrete beats abstract. Numbers beat adjectives.
- Active voice, first person, plain language.
- No filler like "cutting-edge", "passionate", "leveraging synergies".
- Keep paragraphs to 3 lines or less on screen.

---

## Phase 2: Design system

Define tokens once and reuse them everywhere, so the site feels consistent rather than assembled.

### Principles
- **Content is the star.** Restraint beats effects. One strong accent color, one neutral scale.
- **Avoid the template look.** No purple-to-blue gradient hero, no random glassmorphism on everything, no stock "developer at laptop" imagery. Pick a clear aesthetic direction and commit to it.
- **Type:** two fonts at most (one display/heading, one body) plus a monospace for code and tags. Load via `next/font` to avoid layout shift.
- **Spacing:** use a consistent scale (4/8/12/16/24/32/48/64/96).
- **Color:** define CSS variables for background, surface, border, text, muted text, accent, in both light and dark. Check contrast: body text at least 4.5:1 against its background.
- **Motion:** subtle only (fade/slide on scroll, hover states). Respect `prefers-reduced-motion`. Never block content behind an animation.
- **Layout:** max content width around 1100 to 1200px; single column on mobile; project grid goes 1 → 2 columns.

### Components to design
Navbar (sticky, mobile menu), Hero, SectionHeading, ProjectCard, TagChip, Timeline item, SkillGroup, Button (primary/secondary/ghost), ThemeToggle, Footer, ContactLinks.

Use `frontend-design`-style thinking: choose a deliberate aesthetic, then check that it still serves readability.

---

## Phase 3: Build

### Default stack
- **Next.js (App Router) + TypeScript + Tailwind CSS**
- Content as typed data in `/content` (or MDX for long case studies)
- Icons: `lucide-react` (plus brand icons only where needed)
- Animation: CSS first; `framer-motion` only if genuinely needed
- Hosting: Vercel

Use the latest stable versions: scaffold with `npx create-next-app@latest`, and read the generated files rather than assuming older conventions. If the user prefers another stack (Astro, plain React, plain HTML), follow that, since Astro is also excellent for content-heavy portfolios.

### Suggested structure
```
portfolio/
├── app/
│   ├── layout.tsx            # fonts, metadata, theme provider
│   ├── page.tsx              # home: hero, featured projects, skills, experience, contact
│   ├── projects/
│   │   ├── page.tsx          # all projects (filterable)
│   │   └── [slug]/page.tsx   # case-study page
│   ├── blog/                 # optional
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/               # Navbar, Hero, ProjectCard, TagChip, Timeline, ...
├── content/
│   ├── profile.ts            # name, positioning, links, bio
│   ├── projects.ts           # typed array of projects (single source of truth)
│   ├── experience.ts
│   └── skills.ts
├── lib/                      # helpers
├── public/                   # cv.pdf, og-image.png, project images, favicon
└── README.md
```

### Project data model (single source of truth)
```ts
export type Project = {
  slug: string;
  title: string;
  tagline: string;          // one-line impact statement
  featured: boolean;
  category: "ml-app" | "analysis" | "engineering" | "data-eng" | "other";
  problem: string;
  approach: string[];       // key technical decisions
  results: { label: string; value: string }[]; // e.g. { label: "F1", value: "0.91" }
  stack: string[];
  links: { demo?: string; repo?: string; writeup?: string };
  image?: string;           // cover image or GIF in /public
  learned?: string;
  year: number;
};
```
Pages render from this array. Adding a project means adding one object, nothing else.

### Build order
1. Scaffold, install deps, set up fonts, theme tokens, dark/light toggle
2. Layout shell: Navbar, Footer, page container
3. Content files with real copy (placeholders marked `TODO`)
4. Home page sections top to bottom
5. Projects index and `[slug]` case-study pages
6. Contact section, CV download, social links
7. SEO, accessibility, performance pass (Phase 4)
8. Optional: blog, project filters, analytics

### Behavior details
- Navbar links smooth-scroll to sections on home and route correctly from other pages.
- Project cards are fully clickable, with a visible focus state.
- Hide any link whose URL is empty. No dead buttons and no "coming soon" sections in the shipped version.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Contact: prefer a `mailto:` link. If a form is requested, use a service (Formspree, Resend via a server action) and never expose API keys client-side.
- Images: `next/image`, explicit width/height, meaningful `alt` text. Compress GIFs or use short MP4/WebM loops for demos.

---

## Phase 4: Quality pass

### SEO and sharing
- Per-page `metadata` (title, description), canonical URL
- Open Graph and Twitter card image (1200×630), tested by pasting the URL into a link previewer
- `sitemap.xml`, `robots.txt`, favicon set
- JSON-LD `Person` schema on the home page
- Title format: "Name | Role" for home; "Project Title | Name" for case studies

### Accessibility
- One `h1` per page, logical heading order
- Keyboard navigable, visible focus rings, skip-to-content link
- Contrast at least 4.5:1, never color alone to convey meaning
- Alt text on images; `aria-label` on icon-only links
- Respect `prefers-reduced-motion` and `prefers-color-scheme`

### Performance targets
- Lighthouse: 90+ on Performance, Accessibility, Best Practices, SEO (mobile)
- LCP under 2.5s, CLS near 0
- Total initial JS kept small; lazy-load below-the-fold media
- No render-blocking third-party scripts

### Responsive checks (browser agent)
Test at 375px, 768px, 1280px, and 1920px:
- No horizontal scroll
- Tap targets at least 44px
- Nav collapses cleanly
- Tables and code blocks scroll inside their own container

### Content QA
- Every link works (run a link check)
- No `TODO`, lorem ipsum, or placeholder names left in production content
- Spelling and consistent tense
- Every metric traces back to something the user supplied

---

## Phase 5: Deploy

1. Initialize git, write a clean `.gitignore`, confirm no secrets or `.env` committed
2. Push to GitHub with a sensible commit history
3. Import into Vercel (or Netlify / GitHub Pages for static export); set environment variables if any
4. Verify the production URL in the browser agent: console clean, OG image works, CV downloads, mobile layout fine
5. Optional: custom domain, analytics (Vercel Analytics or Plausible, privacy-friendly)
6. Write the repo `README`: stack, how to run locally, how to add a project, how to deploy

---

## Final deliverables

End with a **Walkthrough** artifact and a short summary in chat that includes:
- Live URL (or local run command)
- Screenshots: desktop and mobile
- Lighthouse scores
- A list of every remaining `TODO` the user must fill (missing metrics, missing demo links, missing images)
- Three suggested next improvements (for example: add a deployed demo for project X, write a first blog post, record a 60-second demo video)

---

## Anti-patterns (check yourself against these)

| Mistake | Why it hurts | Do instead |
|---|---|---|
| Tutorial projects (Titanic, Iris, MNIST) with no twist | Signals no original work | Feature real or distinctive projects, or frame tutorials with a clear extension |
| Metrics invented to look good | Credibility loss, easy to catch in interviews | Leave a `TODO` and ask |
| 10+ projects on the homepage | Dilutes the best work | Feature 3 to 5, put the rest on a secondary page |
| Skill bars and percentages | Meaningless | Grouped lists with evidence in projects |
| Huge hero animation or 3D scene | Slow, hides content on phones | Static or lightly animated hero |
| Demo only via "clone the repo" | Most visitors won't | Link a live demo, GIF, or video |
| Wall of text | Skimmers leave | Short paragraphs, scannable structure |
| Broken links, "coming soon" | Looks unfinished | Hide until real |
| Missing contact or CV | Blocks the whole goal | Always visible in nav and footer |

---

## Customization knobs

If the user asks for changes later, here is where to look:
- Colors and fonts: design tokens in `globals.css` / Tailwind config
- Copy: `/content/*.ts`
- New project: append to `content/projects.ts`
- New section: add a component, then register it in `app/page.tsx` and the Navbar
- Role-specific ordering: change `featured` flags and the sort order in `projects.ts`, so one site can serve multiple job targets
