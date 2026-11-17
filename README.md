# Mohamed Riham — Professional Portfolio

> **Data Science Undergraduate & AI Systems Builder**  
> Final-Year BSc (Hons) Data Science at ICBT Campus (Cardiff Metropolitan University, UK)  
> Pearson BTEC Higher National Diploma in Software Engineering (Merit — 10 Distinctions, 5 Merits)

---

## 🚀 Overview

A personal, production-ready portfolio website engineered to showcase verified machine learning systems, computer vision models, offline voice automation, and empirical data science research.

- **Positioning:** *"I build practical AI, machine learning, computer vision, and intelligent systems that solve real-world problems."*
- **Aesthetic Direction:** Dark, cinematic technical editorial (`#070A0F` obsidian ground, electric cyan, muted gold accents).
- **Core Pillars:** Strict anti-fabrication standards, verified empirical performance metrics, and responsive cross-viewport craft.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
* **Icons:** [Lucide Icons](https://lucide.dev/) & Bespoke SVG Brand Markings
* **Typography:** [Geist Sans & Geist Mono](https://vercel.com/font) via `next/font`
* **Content Layer:** Typed single source of truth in `/content/`

---

## 📁 Project Architecture

```
NEW-portfolio/
├── app/
│   ├── layout.tsx            # Global layout, fonts, JSON-LD Person schema & SEO metadata
│   ├── page.tsx              # Home page: Hero, Proof Strip, Featured Projects, Skills, Timeline
│   ├── not-found.tsx         # Technical 404 handler
│   ├── sitemap.ts            # Dynamic XML sitemap generator
│   ├── robots.ts             # Search engine robot crawler directives
│   ├── globals.css           # Design tokens, technical grid & custom scrollbars
│   └── projects/[slug]/
│       └── page.tsx          # Dynamic individual case-study deep-dive route
├── components/
│   ├── Navbar.tsx            # Sticky navigation with mobile menu & CV trigger
│   ├── Hero.tsx              # Primary statement, live status badge & verified proof strip
│   ├── FeaturedProjects.tsx  # Asymmetric bento showcase for top 5 projects
│   ├── AllProjects.tsx       # Filterable archive with category selector
│   ├── SkillsMatrix.tsx      # Evidence-backed skills linked to proven projects
│   ├── ExperienceSection.tsx # Chronological career & leadership timeline
│   ├── EducationSection.tsx  # Degree, Pearson HND, and Diploma credentials
│   ├── CertificationsSection.tsx # Udacity AWS GenAI & AWS Educate badges
│   ├── WritingSection.tsx    # DEV Community publications & SlideShare research
│   ├── ContactSection.tsx    # Interactive copy-to-clipboard email action
│   ├── Footer.tsx            # Technical colophon
│   └── Icons.tsx             # Bespoke SVGs for GitHub and LinkedIn
├── content/
│   ├── profile.ts            # Identity, positioning, contact info & key numbers
│   ├── projects.ts           # All verified project specifications & metrics
│   ├── skills.ts             # Grouped skills with project evidence
│   ├── experience.ts         # Career, leadership & volunteer history
│   ├── education.ts          # Academic transcripts & modules
│   ├── certifications.ts     # Verified badges & credential IDs
│   └── writing.ts            # Articles & published analyses
├── public/
│   ├── cv.pdf                # Downloadable CV
│   └── images/projects/      # High-resolution validation batches & diagrams
├── CONTENT_AUDIT.md          # Factual claims verification registry
├── SKILLS_USED.md            # Agent skills discovery & execution audit
├── TODO.md                   # External assets & credentials registry
└── README.md
```

---

## 💻 Local Development

### Prerequisites
* [Node.js](https://nodejs.org/) v18.0.0 or higher
* [npm](https://www.npmjs.com/)

### Installation & Run

1. Clone or navigate to the repository directory:
   ```bash
   cd NEW-portfolio
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Mohamed Riham's professional portfolio"
   git branch -M main
   git remote add origin https://github.com/mohamed-riham/<repo-name>.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the repository. Vercel will automatically detect Next.js and build with zero extra configuration.

---

## 🔒 Content & Privacy Notice

* All metrics (e.g. 99.2% mAP50 on YOLOv8n, 284,807 transactions analyzed with 0.172% fraud ratio) are verified from actual repository files and publications.
* Residential street addresses and personal phone numbers have been intentionally excluded from the public build to respect privacy.
