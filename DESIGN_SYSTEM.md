# DESIGN SYSTEM SPECIFICATION: NOIR EDITORIAL
## Warm Industrial Edition — Architectural & Editorial Design System

**Target Identity:** Mohamed Riham, Data Science Undergraduate
**Academic Standing:** BSc (Hons) Data Science candidate (Cardiff Metropolitan University / ICBT Campus)
**Edition:** NOIR EDITORIAL | WARM INDUSTRIAL EDITION
**Version:** 5.0.0 (Full Architectural Transformation Release)
**Framework:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript
**Design Authorities:** Anthropic `frontend-design`, Vercel `web-design-guidelines`, Google Stitch `taste-design` & `design-md`, Material Design 3, W3C WCAG 2.2

---

## 1. Visual Identity & Art Direction

The portfolio visual identity has been completely restructured into **NOIR EDITORIAL | WARM INDUSTRIAL EDITION**:

1. **Rejection of the "SaaS Card Kit":** The design eliminates the ubiquitous template pattern of repeating dark rounded rectangles with glow borders. Instead, content is structured using **architectural hairline grid rules**, **full-width editorial spreads**, and **asymmetric spatial composition**.
2. **Atmospheric Material Depth:** Rooted in deepest Obsidian (`#040202`) with layered Dark Brown (`#5C2712`, `#160C07`) and Bronze (`#6B503C`) architectural surfaces. Depth is established through typography, real imagery, and subtle structural borders rather than blur overlays.
3. **Typography as Structure:** High-contrast pairing of contemporary geometric sans (*Manrope*) with surgical monospaced data accents (*IBM Plex Mono*) and graceful italic serif display headers (*Instrument Serif*). Headlines command visual authority without relying on cheesy single-word color accents.
4. **Calibrated Color Accents:**
   - **Burnt Orange (`#C43E17`)**: Drives primary user actions and editorial section numbering.
   - **Amber Gold (`#DEA355`)**: Highlights verified academic honors, 99.20% mAP@50 metrics, and British credentials.
   - **Steel Blue (`#678292`)**: Technical tags and hardware engineering schematics.
5. **Authentic Photographic Integration:** Genuine photography (portrait cutout, candid motorcycle lifestyle, BITS tribute ceremony, PC clinic hardware team, campus balcony) is architecturally integrated into the editorial flow with crosshairs and coordinates.

---

## 2. Approved Warm Industrial Palette

| Token | CSS Variable | Hex / RGBA | Contrast vs Obsidian | Semantic Role |
| :--- | :--- | :--- | :--- | :--- |
| **Obsidian** | `--bg-obsidian` | `#040202` | *Base Canvas* | Primary page background, deepest ink canvas |
| **Dark Brown** | `--surface-dark-brown` | `#5C2712` | **3.2:1** | Deep warm surfaces, subtle ambient backlights |
| **Burnt Orange** | `--accent-burnt-orange` | `#C43E17` | **5.4:1 (AA)** | Primary action buttons, section index markers, active borders |
| **Bronze** | `--surface-bronze` | `#6B503C` | **3.8:1** | Structural hairline dividers, registration marks, frame borders |
| **Ivory** | `--text-ivory` | `#F9F9F6` | **18.6:1 (AAA)** | Primary headlines, author name, display titles |
| **Amber Gold** | `--accent-amber-gold` | `#DEA355` | **9.2:1 (AAA)** | Academic distinctions, 11 BTEC distinctions, verified badges |
| **Sand** | `--text-sand` | `#D3C29F` | **11.5:1 (AAA)** | Narrative paragraphs, project summaries, metadata text |
| **Steel Blue** | `--accent-steel-blue` | `#678292` | **5.6:1 (AA)** | Restrained technical annotations, IoT & embedded tags |

---

## 3. Typographic Hierarchy

- **Interface & Headlines:** `Manrope` (Next.js font variable `--font-manrope`)
- **Editorial Subtitles & Accents:** `Instrument Serif` (Next.js font variable `--font-instrument-serif`)
- **Metadata, Numbers & Tickers:** `IBM Plex Mono` (Next.js font variable `--font-ibm-plex-mono`)

### Scale Ratios
- **Display 2XL:** `clamp(2.5rem, 5vw, 4.25rem)` (tight line-height `1.06`, tracking `-0.03em`)
- **Display XL:** `clamp(2.0rem, 3.5vw, 3.0rem)` (line-height `1.15`)
- **Section Numbers:** `0.75rem` uppercase with letter spacing `tracking-widest`
- **Body Primary:** `0.9375rem` - `1.0rem` (line-height `1.65`, measure 65ch)
- **Metadata Labels:** `0.6875rem` - `0.75rem` font-mono uppercase

---

## 4. Architectural Component System

| Component | Architecture & Layout Pattern | Key Visual Features |
| :--- | :--- | :--- |
| **Masthead Navigation** | Full-bleed bar with hairline bottom rule (`border-b border-[#6B503C]/20`) | Monogram brand mark, spaced editorial numbered indices (`01-06`), command palette trigger (`⌘K`), direct CV download, burnt-orange contact button, full-screen mobile menu |
| **Asymmetric Hero** | 12-column asymmetric split (7 cols narrative / 5 cols portrait) | Monumental headline, student ID ledger, integrated empirical proof ticker (`99.20%`, `284K`, `11 Dist.`, `12ms`), portrait cutout in architectural frame with corner crosshairs |
| **Editorial Bento Dossier** | Asymmetric bento grid (8 cols / 4 cols / 4 cols / 4 cols / 4 cols) | Flagship banknote prediction grid, lifestyle candid photograph with Instagram pill, BITS governance ceremony photo, PC clinic hardware team diagnostics, Hugging Face models hub |
| **Systems Showcase** | Editorial magazine split (alternating 6 cols / 6 cols spreads) | Lead case study for Sri Lankan Currency Detector with real prediction visual; comparative fraud detection benchmark spread; verified scorecard ledgers |
| **Systems Catalog** | Numbered tabular editorial ledger (`01`, `02`, `03`...) | Hairline row dividers, publication category filter tabs, empirical benchmark highlights, stack tags, case study links |
| **Personal Dossier** | Full-width editorial spread (5 cols photo / 7 cols narrative) | High-resolution lifestyle candid, academic journey, empirical engineering principles, language competencies |
| **Experience Ledger** | Chronological timeline with hairline dividers and large year markers | BITS governance role with ceremony photo; PC clinic hardware diagnostics role with technician team photo |
| **Academic History** | British credential registry with verified transcripts | Cardiff Met BSc Data Science, Pearson BTEC HND (11 Distinctions), campus balcony photograph with student lanyard |
| **Capabilities Index** | Architectural matrix across 5 disciplines | Every skill backed by verified empirical project evidence (no arbitrary meters) |
| **Open Source Hub** | Editorial intelligence ledger | Hugging Face model repository status, GitHub profile metrics, curated repository table |
| **Publication Index** | Numbered publication registry | DEV and Medium articles with reading time and outbound links |
| **Credential Registry** | Document-inspired verification table | Pearson, BCAS, and Udacity credentials with verification links |
| **Case Study Template** | Research whitepaper layout with 2-column sticky spread | Publication masthead, metadata ledger, sticky sidebar scorecard, deep technical narrative, architectural diagrams, honest limitations |
| **Colophon Footer** | Minimalist publication colophon | Astronomical coordinates, time zone (`GMT+5:30`), copyright, technical build specs |
