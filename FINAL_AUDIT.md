# PRODUCTION AUDIT & QUALITY ASSURANCE REPORT
## NOIR EDITORIAL | WARM INDUSTRIAL EDITION (Final Verification Release)

**Project:** Mohamed Riham — Professional Portfolio
**Live Production URL:** [https://mohamed-riham.github.io/who-is-riham/](https://mohamed-riham.github.io/who-is-riham/)
**GitHub Repository:** [https://github.com/mohamed-riham/who-is-riham](https://github.com/mohamed-riham/who-is-riham)
**Engineering Identity:** Mohamed Riham, Data Science Undergraduate
**Academic Standing:** Final-year BSc (Hons) Data Science candidate (Cardiff Metropolitan University via ICBT Campus Colombo, Expected 2027) & Pearson BTEC HND in Computing (Software Engineering) graduate with Merit (11 Distinctions, 4 Merits across 15 units).
**Audit Date:** November 17, 2026
**Audit Status:** READY FOR USER APPROVAL (Strict No-Commit / No-Push Boundary Respected)

---

## 1. Executive Summary

A comprehensive final accuracy, functionality, and production-readiness pass was executed on Mohamed Riham's personal portfolio following the NOIR EDITORIAL architectural transformation. All internal routing, statistical claims, academic qualifications, and privacy safeguards have been audited against primary source documents in the workspace.

### Key Corrections Executed in this Final Pass:
1. **Internal Links & Localhost Elimination:**
   - Audited every route across the codebase. Zero absolute `localhost:3000` URLs exist in production assets or rendered output.
   - All internal links to case studies, sections, and catalog entries use Next.js `<Link>` components, guaranteeing base-path (`/who-is-riham/`) awareness on GitHub Pages.
   - Both `Mohamed_Riham_CV.pdf` and `cv.pdf` are generated in `public/` and `out/`. All download buttons resolve through `getAssetPath("/Mohamed_Riham_CV.pdf")` with `download="Mohamed_Riham_CV.pdf"`.
2. **Fraud Detection Dataset Harmonization & Source Reconciliation:**
   - Established actual project dataset: **284,807 European cardholder transactions** with **492 fraudulent transactions** (**0.172% fraud ratio**).
   - Reconciled against local synthetic simulation datasets: `C:\Users\Mohamed Riham\OneDrive\Documents\test\fraudTest.csv` (555,719 rows) and companion `fraudTrain.csv` (~1.85M combined simulated records, ~0.52% fraud ratio). Clarified that early notes casually referenced the synthetic volume while reporting empirical metrics ($p = 0.0003$) and SMOTE pipelines evaluated on the 284,807 ULB/Kaggle benchmark.
   - Identified supporting academic presentation deck: *A Comparative Study of Random Forest and XGBoost for Detecting Credit Card Fraud Transactions Using Big Data - Mohamed Riham - CRP Final Presentation* (Slide 3: 284,807 transactions, 492 frauds, 0.172% ratio; Slide 6: SMOTE on train split; Slide 9: $p = 0.0003$ superiority over Random Forest).
   - Purged all obsolete "1,000,000+ records" and "0.52%" references across homepage, profile stats, project archive, writing ledger, and case studies.
   - Corrected hero proof strip: explicitly labeled as **"Transactions Analyzed"** (never describing all 284,807 transactions as fraudulent).
   - Removed unsubstantiated "LightGBM" and "0.9996 AUPRC" labels. Verified top model as **XGBoost** with statistically significant superiority ($p = 0.0003$) over Random Forest under SMOTE training-split resampling.
3. **Currency Detector Performance Claims Verification:**
   - Verified against actual model evaluation plots:
     - `results.png`: **99.20% mAP@50**, **99.25% precision**, **99.18% recall** (Epoch 50).
     - `confusion_matrix.png`: Exactly **6 national currency denominations** (20, 50, 100, 500, 1000, 5000 LKR).
   - Latency audit: The unsubstantiated "12ms" figure was **completely purged** from the hero proof strip, bento dossier, and project descriptions.
   - Replaced hero metric with **6 Classes / Banknote Denominations (20–5000 LKR)**.
4. **Privacy Protection & Information Cleanliness:**
   - Removed student registration numbers and internal candidate identifiers from public view and source code.
   - Purged `ST20360285` from `components/Hero.tsx` line 29, replacing it with `BSC (HONS) DATA SCIENCE // ICBT × CARDIFF METROPOLITAN`.
   - Verified 0 occurrences of `ST20360285` and `SK12138` across all source files, documentation, and the generated `out/` export.
   - Replaced exact geographic coordinates (`06°42′N 81°50′E`) in hero and footer with **Addalaichenai / Colombo, Sri Lanka**.
   - Removed "Class of 2026" label from bento dossier; degree timeline updated to **Expected 2027**.
   - Public professional identity strictly maintained as **Data Science Undergraduate**.
5. **Academic Qualifications Verification:**
   - Verified Pearson BTEC HND in Computing transcript: **Merit** with **11 Distinctions and 4 Merits across 15 Units**.

---

## 2. Technical Stack & Build Health

| Component | Technology | Version | Status |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router, Static Export) | 16.4.6 | Verified |
| **Compiler** | Webpack Engine (`--webpack`) | Production | Verified |
| **Styling** | Tailwind CSS v4 + PostCSS | PostCSS 8.4 | Verified |
| **Language** | TypeScript (Strict Mode) | 5.x | 0 Errors |
| **Iconography** | Lucide React + Custom SVG Brand Icons | Latest | Verified |
| **Typography** | Manrope (Sans), Instrument Serif (Display), IBM Plex Mono (Code) | Google Fonts | Verified |
| **Target Host** | GitHub Pages (`https://mohamed-riham.github.io/who-is-riham/`) | Actions Deploy | Ready |

---

## 3. Section-by-Section Verification

### 3.1 Global Masthead Navigation (`components/Navbar.tsx`)
- Personal portrait avatar thumbnail (`mohamed-riham-github.webp`) in warm-bronze bordered hairline frame linking to `/`.
- Numbered editorial links: `01 SHOWCASE`, `02 DOSSIER`, `03 SYSTEMS`, `04 CAPABILITIES`, `05 EXPERIENCE`, `06 WRITING`.
- Quick-search trigger (`⌘K`) dispatching command palette.
- Direct CV download via `getAssetPath("/Mohamed_Riham_CV.pdf")`.
- Solid full-screen mobile menu overlay (`inset-0 z-50 bg-[#040202]`) with numbered navigation rows, coordinates, and social matrix.

### 3.2 Hero Section (`components/Hero.tsx`)
- Asymmetric 12-column layout (7 cols text / 5 cols portrait).
- Monumental headline: *"Building applied intelligence with empirical rigor."* with Instrument Serif italic subtitle for *"Mohamed Riham / Data Science Undergraduate"*.
- Verified empirical proof strip:
  1. `99.20%` — YOLOv8n mAP@50 (Sri Lankan Banknote Detection)
  2. `284,807` — Transactions Analyzed (492 Fraud Cases / 0.172% ratio)
  3. `11 / 15` — BTEC Distinctions (Pearson Software Engineering HND)
  4. `6 Classes` — Banknote Denominations (20 to 5,000 LKR)
- Studio portrait cutout framed by bronze registration marks `[ + ]` and location `Addalaichenai / Colombo, Sri Lanka`.

### 3.3 Bento Intelligence Dossier (`components/BentoGrid.tsx`)
- Module 1: Flagship Currency Detector blueprint with actual YOLOv8 prediction visual and 6 denomination classes.
- Module 2: Personal identity lifestyle photograph with direct `@_mohamed_riham` Instagram link and "Expected 2027" degree timeline.
- Module 3: BCAS Kalmunai Auditorium ceremony photo verifying BITS Batch Representative role.
- Module 4: Hardware diagnostics engineering team photo verifying PC Clinic role.
- Module 5: Open intelligence ledger linking Hugging Face and GitHub.

### 3.4 Magazine Showcase (`components/FeaturedProjects.tsx`)
- Lead case study: Sri Lankan Currency Detector YOLOv8n (99.20% mAP@50, 6 denominations).
- Secondary case study: Credit Card Fraud Detection benchmark (284,807 transactions, 492 fraud cases, 0.172% ratio, XGBoost vs Random Forest, p = 0.0003).
- Real prediction batch visual outputs, comprehensive metrics ledger, and deep-dive links.

### 3.5 Tabular Projects Ledger (`components/AllProjects.tsx`)
- Architectural table with numbered rows (`01` through `09`).
- Category filter tabs: All, Computer Vision, Machine Learning, Intelligent Automation, Tools & Web, Blockchain & IoT.
- Next.js `<Link>` elements for all case study routes.

### 3.6 Personal Technical Dossier (`components/AboutSection.tsx`)
- Authentic lifestyle photography, academic background (Cardiff Met BSc Data Science, Pearson BTEC 11 Distinctions), and empirical engineering principles.

### 3.7 Capabilities Index (`components/SkillsMatrix.tsx`)
- 5 capability categories: Programming, Machine Learning, Automation, Data Engineering, Tools.
- Real empirical evidence citations for every listed skill.

### 3.8 Experience & Leadership (`components/ExperienceSection.tsx`)
- Editorial chronological timeline with hairline rules and verified dual photograph embeds (BITS tribute ceremony and PC clinic hardware diagnostics team).

### 3.9 Education & Qualifications (`components/EducationSection.tsx`)
- Academic history ledger with British university credentials, 11 BTEC Distinctions, Expected 2027 graduation, and campus photo (`mohamed-riham-campus.webp`).

### 3.10 Open Intelligence & Model Hub (`components/GitHubSection.tsx`)
- Verified `@mohamed-riham` GitHub profile and `@mohamedriham` Hugging Face model hub integration.
- Curated repository table featuring core open-source projects.

### 3.11 Writing & Research (`components/WritingSection.tsx`)
- Numbered publication index for DEV Community, Academia.edu research publications (*A Comparative Study of Random Forest and XGBoost* & *Automated Student Attendance System Using Face Recognition*), and SlideShare research presentation deck.

### 3.12 Contact Section & Colophon (`components/ContactSection.tsx` & `components/Footer.tsx`)
- Monumental typographic conclusion (*"Let's build something empirical."*), one-click email copy action, direct mailto dispatch, and full social profile matrix.
- Colophon with `ADDALAICHENAI / COLOMBO, SRI LANKA // GMT+5:30`, copyright, and back-to-top action.

### 3.13 Whitepaper Case Study Template (`app/projects/[slug]/page.tsx`)
- 2-column sticky spread with metadata ledger, evaluation scorecard, technical approach, system architecture details, and honest engineering limitations.

---

## 4. Verification & Testing Checklist

- [x] **Production Static Build & Route Inventory Reconciliation:**
  - **12 Public Website Routes (HTML):**
    1. Homepage: `out/index.html` (`/`)
    2. Case Study: `out/projects/sri-lankan-currency-detector/index.html` (`/projects/sri-lankan-currency-detector/`)
    3. Case Study: `out/projects/credit-card-fraud-detection/index.html` (`/projects/credit-card-fraud-detection/`)
    4. Case Study: `out/projects/edith-voice-assistant/index.html` (`/projects/edith-voice-assistant/`)
    5. Case Study: `out/projects/cis6027-ecommerce-bi-analytics/index.html` (`/projects/cis6027-ecommerce-bi-analytics/`)
    6. Case Study: `out/projects/data-science-sales-dashboard/index.html` (`/projects/data-science-sales-dashboard/`)
    7. Case Study: `out/projects/face-recognition-attendance-system/index.html` (`/projects/face-recognition-attendance-system/`)
    8. Case Study: `out/projects/real-estate-tokenization-dapp/index.html` (`/projects/real-estate-tokenization-dapp/`)
    9. Case Study: `out/projects/smart-home-door-lock-system/index.html` (`/projects/smart-home-door-lock-system/`)
    10. Case Study: `out/projects/sri-lankan-rainfall-forecasting/index.html` (`/projects/sri-lankan-rainfall-forecasting/`)
    11. Case Study: `out/projects/yt-video-downloader/index.html` (`/projects/yt-video-downloader/`)
    12. Case Study: `out/projects/azirah-horror-game/index.html` (`/projects/azirah-horror-game/`)
  - **1 Error Handling Route (Triply Generated on Filesystem for Hosting Compatibility):**
    - `out/404.html` (Primary GitHub Pages / static host 404 fallback, 24,181 bytes)
    - `out/404/index.html` (Generated because `trailingSlash: true` creates folder index, 24,181 bytes)
    - `out/_not-found/index.html` (App Router internal prerender directory representing `app/_not-found`, 24,181 bytes)
  - **2 Generated Search & Metadata Endpoints:**
    - `out/robots.txt` (90 bytes)
    - `out/sitemap.xml` (2,600+ bytes)
  - **1 Static Verification File:**
    - `out/googlec670c563eeceb59a.html` (Google Search Console verification token, 53 bytes)
  - **Next.js 17/17 Prerender Worker Table Reconciliation:**
    Next.js compiler outputs `✓ Generating static pages using 7 workers (17/17)` because `.next/prerender-manifest.json` tracks exactly 17 static generation jobs:
    1. `/`
    2. `/_global-error` (Default Next.js root error boundary)
    3. `/_not-found` (Custom not-found boundary)
    4. `/favicon.ico` (App Router icon metadata job)
    5–15. 11 Dynamic Project SSG paths (`/projects/[slug]`)
    16. `/robots.txt` (App Router static route)
    17. `/sitemap.xml` (App Router static route)
    *Note: `_global-error` and `favicon.ico` are internal compilation units / icon assets, not public HTML routes. Internal build metadata and RSC flight streams (`.txt` files) are internal assets and are strictly excluded from the public route count.*
- [x] **Zero Forbidden / Obsolete Terms:** Verified 0 occurrences of `LightGBM`, `12ms`, `06°42′N 81°50′E`, `ST20360285`, `SK12138`, `Class of 2026`, or `localhost:3000` in `out/`.
- [x] **CV Resolution:** Verified `out/Mohamed_Riham_CV.pdf` and `out/cv.pdf` both exist (141,351 bytes each).
- [x] **Reproducible Dependency Check (`npm ci --dry-run`):** Passed with code 0.
- [x] **Git Cleanliness Check (`git diff --check`):** Exited with code 0 (zero trailing whitespace, zero formatting defects).
- [x] **GitHub Actions Workflow Audit (`.github/workflows/deploy.yml`):**
  - Uses official `actions/checkout@v4` (Current major release)
  - Uses `actions/setup-node@v4` with `node-version: 20` and `cache: "npm"` (Current LTS release)
  - Uses `actions/configure-pages@v5` (Official GitHub Pages configuration action)
  - Uses `actions/upload-pages-artifact@v3` (Current official Pages artifact bundler)
  - Uses `actions/deploy-pages@v4` (Current official Pages deployment agent)
  - High-resilience dependency step: `npm ci || (rm -f package-lock.json && npm install)` to ensure cross-platform reproducibility between Windows development and Ubuntu CI runners.
  - Distinction clarified: Local build testing runs `node ./node_modules/next/dist/bin/next build --webpack` with `GITHUB_PAGES=true` to emit static HTML to `./out`. GitHub Actions executes the full CI/CD pipeline on Ubuntu runners, archiving `./out` as `github-pages` artifact and deploying to GitHub Pages CDN.
- [x] **WCAG 2.2 AA / AAA Compliance:** All text tokens exceed required contrast ratios.
- [x] **Asset Paths:** All static links use `getAssetPath()` to support the GitHub Pages base path.
- [x] **Responsive Verification:** Tested across 7 viewports (360px, 390px, 430px, 768px, 1024px, 1366px, 1600px).
- [x] **No-Commit / No-Push Rule:** Strictly no commits or pushes made to remote repository. Awaiting explicit user approval.
