# DESIGN SYSTEM SPECIFICATION: NOIR / INTELLIGENCE

**Portfolio:** Mohamed Riham  
**Theme:** NOIR / INTELLIGENCE  
**Version:** 2.0.0 (Production Release)  
**Framework:** Next.js 16 + Tailwind CSS v4  

---

## 1. Color Architecture

The NOIR / INTELLIGENCE palette creates depth through layers of dark slate-navy surfaces rather than flat black, highlighted by high-contrast medical teal and warm gold accents.

### 1.1 Palette Tokens

```css
:root {
  /* Surface Layers */
  --color-bg-primary: #080D18;          /* Base canvas, deep space ink */
  --color-bg-secondary: #0D1422;        /* Secondary panels, card surfaces */
  --color-bg-elevated: #131E30;         /* Elevated cards, modals, popovers */
  --color-bg-subtle: #19263A;           /* High-layer interactive chips */

  /* Typography */
  --color-text-primary: #F2F0E9;        /* Warm off-white, high readability */
  --color-text-secondary: #A4ADBB;      /* Cool slate silver, body paragraphs */
  --color-text-muted: #69778A;          /* Steel gray, timestamps, metadata */
  --color-text-inverted: #080D18;       /* Deep ink for text inside buttons */

  /* Primary Accent: Surgical Teal */
  --color-accent-teal: #63DCC6;         /* Primary brand accent & active states */
  --color-accent-teal-deep: #183F43;    /* Deep tinted badge background */
  --color-accent-teal-glow: rgba(99, 220, 198, 0.12); /* Ambient radial lighting */

  /* Secondary Accent: Academic Gold */
  --color-accent-gold: #D9A441;         /* Academic awards, video demos, honors */
  --color-accent-gold-soft: #F0D49B;    /* Soft gold hover tint */
  --color-accent-gold-deep: rgba(217, 164, 65, 0.15); /* Subdued badge background */

  /* Border Strokes */
  --color-border-subtle: rgba(255, 255, 255, 0.06); /* Default structural line */
  --color-border-medium: rgba(255, 255, 255, 0.12); /* Hover boundary */
  --color-border-teal: rgba(99, 220, 198, 0.35);   /* Active / Focus border */
}
```

---

## 2. Typography Hierarchy

Three typefaces form an intentional editorial trio:

| Role | Font Family | Weights | CSS Variable | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Editorial** | *Instrument Serif* | 400 (Normal & Italic) | `--font-serif` | Hero title accents, section headers, editorial quotations |
| **Interface / Body** | *Manrope* | 400, 500, 600, 700 | `--font-sans` | Primary UI text, narrative paragraphs, navigation |
| **Technical / Code** | *IBM Plex Mono* | 400, 500, 600 | `--font-mono` | Terminal CLI chips, performance metrics, badges, code tags |

### 2.1 Type Scale

| Scale Token | Font Size | Line Height | Tracking | Primary Usage |
| :--- | :--- | :--- | :--- | :--- |
| `display-2xl` | 4.5rem (72px) | 1.08 | `-0.03em` | Hero desktop title |
| `display-xl` | 3.5rem (56px) | 1.12 | `-0.025em` | Hero mobile / Section titles |
| `display-lg` | 2.25rem (36px) | 1.20 | `-0.02em` | Featured project headings |
| `heading-md` | 1.5rem (24px) | 1.30 | `-0.015em` | Card titles, deep-dive section headers |
| `body-lg` | 1.125rem (18px) | 1.65 | `0` | Lead paragraphs, hero positioning statement |
| `body-md` | 0.875rem (14px) | 1.60 | `0` | Standard body text, card summaries |
| `mono-sm` | 0.75rem (12px) | 1.40 | `0.05em` | Category badges, metadata, unit tags |
| `mono-xs` | 0.6875rem (11px) | 1.30 | `0.06em` | Tech stack chips, CLI labels |

---

## 3. Surface & Elevation Systems

### 3.1 Technical Background Grid (`noir-grid`)
```css
.noir-grid {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 56px 56px;
}
```

### 3.2 Atmospheric Radial Lighting
- **Top Atmospheric Glow (`ambient-glow-top`):** Radial ellipse centered at `50% -10%`, `#63DCC6` at 8% opacity fading to transparent over 70%.
- **Bottom Atmospheric Glow (`ambient-glow-bottom`):** Radial ellipse centered at `50% 100%`, `#183F43` at 25% opacity fading to transparent over 70%.

### 3.3 Card System (`noir-card`)
- Base surface: Linear gradient from `rgba(13, 20, 34, 0.85)` to `rgba(8, 13, 24, 0.95)`.
- Border: `1px solid rgba(255, 255, 255, 0.08)`.
- Corner Radius: `24px` (`rounded-3xl`) for major containers; `16px` (`rounded-2xl`) for sub-cards; `8px` (`rounded-lg`) for buttons and badges.
- Hover Elevation: Subtle `-2px` vertical translation with glowing border transition (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 4. Components & Pattern Library

### 4.1 Buttons
- **Primary CTA (`Button.Primary`):** Background `#63DCC6`, Text `#080D18` (Semi-bold), Radius `12px`. Hover: `#78e3ce` with glowing shadow `0 4px 14px rgba(99, 220, 198, 0.25)`.
- **Secondary CTA (`Button.Secondary`):** Background `#0D1422`, Border `1px solid rgba(255, 255, 255, 0.10)`, Text `#F2F0E9`. Hover: Background `#131E30`, Border `rgba(255, 255, 255, 0.20)`.
- **Accent Video CTA (`Button.Video`):** Background `#D9A441`, Text `#080D18`, Radius `12px`. Hover: `#ebaf4c` with warm gold shadow.

### 4.2 Badges & Metric Chips
- **Category Badge:** `#183F43` background with `#63DCC6` text and `rgba(99, 220, 198, 0.20)` border.
- **Metric Tile:** Dark inset surface `#080D18` with subtle border `rgba(255, 255, 255, 0.05)`, uppercase mono label in `#69778A`, and high-contrast bold metric in `#F2F0E9`.
- **CLI Terminal Badge:** Inset pill container with monospaced command and blinking cursor indicator (`animate-pulse`).

### 4.3 Command Palette (`Cmd+K` / `Ctrl+K`)
- Accessible dialog overlay (`fixed inset-0 z-50`) with backdrop blur (`backdrop-blur-md`).
- Live search query input with keyboard navigation.
- Categorized search results: Projects, Quick Actions, and Academic Credentials.

---

## 5. Motion & Interaction Principles

1. **Restraint over Fluff:** No distracting continuous spinners or jarring animations. Every motion serves to inform or delight.
2. **Snappy Response Times:** Micro-interactions (hover, focus, button presses) trigger within `150ms - 200ms`.
3. **Tactile Touch Feedback:** Interactive buttons utilize `active:scale-98` for an unmistakable physical sensation on mobile tap.
4. **Smooth Native Scrolling:** `scroll-behavior: smooth` for elegant anchor navigation without third-party library overhead.
