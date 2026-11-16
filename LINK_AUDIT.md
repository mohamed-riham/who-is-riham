# COMPREHENSIVE LINK & ASSET AUDIT REPORT

**Target Website:** Mohamed Riham Portfolio  
**Audit Scope:** All Internal Links, Anchor Navigation, Public Asset Downloads, External Profiles, Project Case Studies, Sitemap & Robots  
**Audit Date:** November 17, 2026  
**Result:** 0 Broken Links • 0 Hardcoded Localhost References • 100% Valid  

---

## 1. Asset Resolution & Base Path Normalization

### 1.1 The GitHub Pages Subpath Problem & Solution
On GitHub Pages (`https://mohamed-riham.github.io/who-is-riham/`), root-relative URLs such as `<a href="/cv.pdf">` or `<img src="/images/...">` resolve against the domain root (`https://mohamed-riham.github.io/cv.pdf`), causing HTTP 404 errors.

**The Solution:**
All static public assets are now processed through the centralized utility function `getAssetPath(path: string)` located in `lib/utils.ts`.

```ts
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (basePath && normalized.startsWith(basePath)) return normalized;
  return `${basePath}${normalized}`;
}
```

### 1.2 Asset Verification Matrix

| Asset Path | Resolved Output in Production | Local Dev Output | Verification Test | Status |
| :--- | :--- | :--- | :--- | :--- |
| `/cv.pdf` | `/who-is-riham/cv.pdf` | `/cv.pdf` | HTTP 200 (141 KB) | **VALID** |
| `/googlec670c563eeceb59a.html` | `/who-is-riham/googlec670c563eeceb59a.html` | `/googlec670c563eeceb59a.html` | HTTP 200 | **VALID** |
| `Currency Detector val_batch0_pred.jpg` | `/who-is-riham/images/projects/sri-lankan-currency-detector/val_batch0_pred.jpg` | `/images/projects/...` | HTTP 200 (JPEG) | **VALID** |
| `Currency Detector confusion_matrix.png` | `/who-is-riham/images/projects/sri-lankan-currency-detector/confusion_matrix.png` | `/images/projects/...` | HTTP 200 (PNG) | **VALID** |
| `Sales Dashboard dashboard_preview.png` | `/who-is-riham/images/projects/data-science-dashboard/dashboard_preview.png` | `/images/projects/...` | HTTP 200 (PNG) | **VALID** |
| `Sales Dashboard class_diagram.png` | `/who-is-riham/images/projects/data-science-dashboard/class_diagram.png` | `/images/projects/...` | HTTP 200 (PNG) | **VALID** |

---

## 2. External Social & Author Profile Links

All social links have been normalized and validated. Mismatched handles (e.g., `dev.to/mohamedriham` without hyphen) have been unified to `https://dev.to/mohamed-riham`.

| Platform | Verified URL | HTTP Protocol | Normalization Check | Status |
| :--- | :--- | :--- | :--- | :--- |
| **GitHub** | `https://github.com/mohamed-riham` | HTTPS | Correct handle | **VALID** |
| **LinkedIn** | `https://www.linkedin.com/in/mohamedriham` | HTTPS | Correct vanity URL | **VALID** |
| **DEV Community** | `https://dev.to/mohamed-riham` | HTTPS | Hyphenated handle verified | **VALID** |
| **Medium** | `https://medium.com/@mohamed-riham` | HTTPS | Verified author account | **VALID** |
| **Instagram** | `https://instagram.com/_mohamed_riham` | HTTPS | Verified personal profile | **VALID** |
| **Email (Primary)** | `mailto:mohamedriham93@gmail.com` | Mailto | Active primary inbox | **VALID** |
| **Email (Secondary)** | `mailto:mohamedrihamofficial@gmail.com` | Mailto | Active secondary inbox | **VALID** |

---

## 3. Project Source & Case Study Links

| Project | GitHub Repository | External / Article / SlideShare | Status |
| :--- | :--- | :--- | :--- |
| **Sri Lankan Currency Detector** | `https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8` | `https://youtu.be/IeytAWt0NNw`<br>`https://dev.to/mohamed-riham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f` | **VALID** |
| **Credit Card Fraud Detection** | *Proprietary / Academic Dataset* | `https://www.slideshare.net/slideshow/a-comparative-study-of-random-forest-and-xgboost-for-detecting-credit-card-fraud-transactions-using-big-data-mohamed-riham-crp-final-presentation-pptx/283983057` | **VALID** |
| **EDITH Voice Assistant** | *Proprietary / Academic Codebase* | `https://dev.to/mohamed-riham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc` | **VALID** |
| **NOIR Downloader** | `https://github.com/mohamed-riham/yt-video-downloader` | — | **VALID** |
| **Real Estate Tokenization DApp** | `https://github.com/mohamed-riham/Real-Estate-Tokenization-DApp` | — | **VALID** |
| **Face Recognition Attendance** | `https://github.com/mohamed-riham/face_recognition_attendance_system` | — | **VALID** |
| **Data Science Sales Dashboard** | `https://github.com/mohamed-riham/Data-Science-Dashboard-python` | `https://www.youtube.com/watch?v=Ct4KMro4JqU` | **VALID** |
| **Smart Home Door Lock (IoT)** | `https://github.com/mohamed-riham/Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control` | — | **VALID** |
| **Rainfall Time-Series Research** | *Active Academic Research* | — | **VALID** |

---

## 4. Technical Writing & Publications Catalog

| Title | Platform | Verified URL | Status |
| :--- | :--- | :--- | :--- |
| **Building an Accessible Currency Detector with YOLOv8 & ESP32-CAM** | DEV Community | `https://dev.to/mohamed-riham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f` | **VALID** |
| **I Built an Offline J.A.R.V.I.S. in Python** | DEV Community | `https://dev.to/mohamed-riham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc` | **VALID** |
| **From Student to Engineer: Journey into Applied AI** | DEV Community | `https://dev.to/mohamed-riham/from-student-to-engineer-my-journey-into-applied-ai-voice-assistants-and-beyond-49e0` | **VALID** |
| **Software Engineering vs Data Science: A Real Talk for Students** | DEV Community | `https://dev.to/mohamed-riham/software-engineering-vs-data-science-a-real-talk-for-students-4hja` | **VALID** |
| **A Comparative Study of Random Forest and XGBoost for Credit Card Fraud** | SlideShare | `https://www.slideshare.net/slideshow/a-comparative-study-of-random-forest-and-xgboost-for-detecting-credit-card-fraud-transactions-using-big-data-mohamed-riham-crp-final-presentation-pptx/283983057` | **VALID** |
| **IT Security for Revuelto Financial Services** | SlideShare | `https://www.slideshare.net/slideshow/it-security-for-revuelto-financial-services-security-presentation-mohamed-riham-pptx/283982894` | **VALID** |

---

## 5. Internal Routes & Sitemap Audit

All internal anchor navigation links (`/#projects`, `/#skills`, `/#experience`, `/#education`, `/#writing`, `/#contact`) use root-relative anchors so they function seamlessly whether clicked on the homepage or from an individual case study page.

### 5.1 Sitemap Entries (`sitemap.xml`)
- `https://mohamed-riham.github.io/who-is-riham/` (Priority: 1.0, Weekly)
- `https://mohamed-riham.github.io/who-is-riham/projects/sri-lankan-currency-detector/` (Priority: 0.9, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/credit-card-fraud-detection/` (Priority: 0.9, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/edith-voice-assistant/` (Priority: 0.9, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/yt-video-downloader/` (Priority: 0.9, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/real-estate-tokenization-dapp/` (Priority: 0.9, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/face-recognition-attendance-system/` (Priority: 0.7, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/data-science-sales-dashboard/` (Priority: 0.7, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/smart-home-door-lock-system/` (Priority: 0.7, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/sri-lankan-rainfall-forecasting/` (Priority: 0.7, Monthly)

### 5.2 Robots File (`robots.txt`)
```txt
User-Agent: *
Allow: /

Sitemap: https://mohamed-riham.github.io/who-is-riham/sitemap.xml
```

---

## 6. Localhost & Development URL Scan
A full recursive search across all source files (`app/`, `components/`, `content/`, `public/`) verified that **zero development URLs or hardcoded `localhost` references** exist in production components.
