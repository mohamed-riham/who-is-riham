# COMPREHENSIVE LINK & ASSET AUDIT REPORT
## NOIR EDITORIAL | WARM INDUSTRIAL EDITION

**Target Website:** Mohamed Riham Portfolio
**Audit Scope:** All Internal Links, Anchor Navigation, Public Asset Downloads, External Profiles, Project Case Studies, Sitemap & Robots
**Audit Date:** November 17, 2026
**Result:** 0 Broken Links • 0 Hardcoded Localhost References • 100% Valid

---

## 1. Asset Resolution & Base Path Normalization

### 1.1 The GitHub Pages Subpath Resilience
On GitHub Pages (`https://mohamed-riham.github.io/who-is-riham/`), root-relative URLs such as `<a href="/cv.pdf">` or `<img src="/images/...">` resolve against the domain root (`https://mohamed-riham.github.io/cv.pdf`), causing HTTP 404 errors.

**The Solution:**
All static public assets are processed through the centralized utility function `getAssetPath(path: string)` located in `lib/utils.ts`.

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

### 1.2 CV File Resolution
To guarantee that the Curriculum Vitae resolves at both standard naming conventions on GitHub Pages:
- `public/Mohamed_Riham_CV.pdf` (141 KB)
- `public/cv.pdf` (141 KB)
Both files are generated in `out/`. All navigation buttons, hero actions, contact links, and command palette triggers reference `getAssetPath("/Mohamed_Riham_CV.pdf")` with `download="Mohamed_Riham_CV.pdf"`.

### 1.3 Asset Verification Matrix

| Asset Path | Resolved Output in Production | Local Dev Output | Verification Test | Status |
| :--- | :--- | :--- | :--- | :--- |
| `/Mohamed_Riham_CV.pdf` | `/who-is-riham/Mohamed_Riham_CV.pdf` | `/Mohamed_Riham_CV.pdf` | HTTP 200 (141 KB) | **VALID** |
| `/cv.pdf` | `/who-is-riham/cv.pdf` | `/cv.pdf` | HTTP 200 (141 KB) | **VALID** |
| `/googlec670c563eeceb59a.html` | `/who-is-riham/googlec670c563eeceb59a.html` | `/googlec670c563eeceb59a.html` | HTTP 200 | **VALID** |
| `Currency Detector val_batch0_pred.jpg` | `/who-is-riham/images/projects/sri-lankan-currency-detector/val_batch0_pred.jpg` | `/images/projects/...` | HTTP 200 (JPEG) | **VALID** |
| `Currency Detector confusion_matrix.png` | `/who-is-riham/images/projects/sri-lankan-currency-detector/confusion_matrix.png` | `/images/projects/...` | HTTP 200 (PNG) | **VALID** |
| `Sales Dashboard dashboard_preview.png` | `/who-is-riham/images/projects/data-science-dashboard/dashboard_preview.png` | `/images/projects/...` | HTTP 200 (PNG) | **VALID** |
| `Sales Dashboard class_diagram.png` | `/who-is-riham/images/projects/data-science-dashboard/class_diagram.png` | `/images/projects/...` | HTTP 200 (PNG) | **VALID** |

---

## 2. External Social & Author Profile Links

All social links have been normalized and validated.

| Platform | Verified URL | HTTP Protocol | Normalization Check | Status |
| :--- | :--- | :--- | :--- | :--- |
| **GitHub** | `https://github.com/mohamed-riham` | HTTPS | Correct handle | **VALID** |
| **LinkedIn** | `https://www.linkedin.com/in/mohamedriham` | HTTPS | Correct vanity URL | **VALID** |
| **DEV Community** | `https://dev.to/mohamed-riham` | HTTPS | Hyphenated handle verified | **VALID** |
| **Medium** | `https://medium.com/@mohamed-riham` | HTTPS | Verified author account | **VALID** |
| **Hugging Face** | `https://huggingface.co/mohamedriham` | HTTPS | Verified models & datasets profile | **VALID** |
| **Academia.edu** | `https://cleverchecklist.academia.edu/mohamedriham` | HTTPS | Verified author research profile | **VALID** |
| **Instagram** | `https://www.instagram.com/_mohamed_riham/` | HTTPS | Verified personal profile | **VALID** |
| **Email (Primary)** | `mailto:mohamedriham93@gmail.com` | Mailto | Active primary inbox | **VALID** |
| **Email (Secondary)** | `mailto:mohamedrihamofficial@gmail.com` | Mailto | Active secondary inbox | **VALID** |

---

## 3. Project Source & Case Study Links

All internal case study navigation links use Next.js `<Link>` components, enabling Next.js to automatically prepend the `/who-is-riham/` base path in production without leaking development hostnames.

| Project | Internal Case Study Route | GitHub Repository | External / Article / SlideShare | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Sri Lankan Currency Detector** | `/projects/sri-lankan-currency-detector` | `https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8` | `https://youtu.be/IeytAWt0NNw`<br>`https://dev.to/mohamed-riham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f` | **VALID** |
| **Credit Card Fraud Detection** | `/projects/credit-card-fraud-detection` | *Proprietary / Academic Dataset* | `https://www.academia.edu/129361586/A_Comparative_Study_of_Random_Forest_and_XGBoost_for_Detecting_Credit_Card_Fraud_Transactions_using_Big_Data`<br>`https://www.slideshare.net/slideshow/a-comparative-study-of-random-forest-and-xgboost-for-detecting-credit-card-fraud-transactions-using-big-data-mohamed-riham-crp-final-presentation-pptx/283983057` | **VALID** |
| **EDITH Voice Assistant** | `/projects/edith-voice-assistant` | *Proprietary / Academic Codebase* | `https://dev.to/mohamed-riham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc` | **VALID** |
| **NOIR Downloader** | `/projects/yt-video-downloader` | `https://github.com/mohamed-riham/yt-video-downloader` | — | **VALID** |
| **Real Estate Tokenization DApp** | `/projects/real-estate-tokenization-dapp` | `https://github.com/mohamed-riham/Real-Estate-Tokenization-DApp` | — | **VALID** |
| **Face Recognition Attendance** | `/projects/face-recognition-attendance-system` | `https://github.com/mohamed-riham/face_recognition_attendance_system` | `https://youtu.be/s1kjEoHqRIo` *(Live Demo Video)*<br>`https://www.academia.edu/129361519/Automated_Student_Attendance_System_Using_Face_Recognition` *(Published Research Paper)* | **VALID** |
| **Data Science Sales Dashboard** | `/projects/data-science-sales-dashboard` | `https://github.com/mohamed-riham/Data-Science-Dashboard-python` | `https://www.youtube.com/watch?v=Ct4KMro4JqU` | **VALID** |
| **Smart Home Door Lock (IoT)** | `/projects/smart-home-door-lock-system` | `https://github.com/mohamed-riham/Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control` | `https://youtu.be/S1Fof4P0N-s` *(Hardware Demo Video)* | **VALID** |
| **CIS6027 E-Commerce BI Analytics** | `/projects/cis6027-ecommerce-bi-analytics` | `https://github.com/mohamed-riham/CIS6027-Ecommerce-Business-Intelligence-Analytics` | — | **VALID** |
| **Rainfall Time-Series Research** | `/projects/sri-lankan-rainfall-forecasting` | *Active Academic Research* | — | **VALID** |
| **Azirah: Don't Let Her See You** | `/projects/azirah-horror-game` | `https://github.com/mohamed-riham` | `public/videos/azirah-gameplay-demo.mp4`<br>`https://dev.to/mohamed-riham/working-on-azirah-dont-let-her-see-you-lessons-from-my-game-development-journey-5aae` | **VALID** |

---

## 4. Technical Writing & Publications Catalog

| Title | Platform | Verified URL | Status |
| :--- | :--- | :--- | :--- |
| **Building an Accessible Currency Detector with YOLOv8 & ESP32-CAM** | DEV Community | `https://dev.to/mohamed-riham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f` | **VALID** |
| **I Built an Offline J.A.R.V.I.S. in Python** | DEV Community | `https://dev.to/mohamed-riham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc` | **VALID** |
| **From Student to Engineer: Journey into Applied AI** | DEV Community | `https://dev.to/mohamed-riham/from-student-to-engineer-my-journey-into-applied-ai-voice-assistants-and-beyond-49e0` | **VALID** |
| **Software Engineering vs Data Science: A Real Talk for Students** | DEV Community | `https://dev.to/mohamed-riham/software-engineering-vs-data-science-a-real-talk-for-students-4hja` | **VALID** |
| **A Comparative Study of Random Forest and XGBoost for Credit Card Fraud** | Academia.edu | `https://www.academia.edu/129361586/A_Comparative_Study_of_Random_Forest_and_XGBoost_for_Detecting_Credit_Card_Fraud_Transactions_using_Big_Data` | **VALID** |
| **Automated Student Attendance System Using Face Recognition** | Academia.edu | `https://www.academia.edu/129361519/Automated_Student_Attendance_System_Using_Face_Recognition` | **VALID** |
| **Credit Card Fraud Big Data Study: CRP Research Presentation Deck** | SlideShare | `https://www.slideshare.net/slideshow/a-comparative-study-of-random-forest-and-xgboost-for-detecting-credit-card-fraud-transactions-using-big-data-mohamed-riham-crp-final-presentation-pptx/283983057` | **VALID** |
| **IT Security for Revuelto Financial Services** | SlideShare | `https://www.slideshare.net/slideshow/it-security-for-revuelto-financial-services-security-presentation-mohamed-riham-pptx/283982894` | **VALID** |
| **Working on Azirah: Don't Let Her See You — Lessons from My Game Development Journey** | DEV Community | `https://dev.to/mohamed-riham/working-on-azirah-dont-let-her-see-you-lessons-from-my-game-development-journey-5aae` | **VALID** |

---

## 5. Internal Routes & Sitemap Audit

All internal anchor navigation links (`/#showcase`, `/#dossier`, `/#systems`, `/#capabilities`, `/#experience`, `/#writing`, `/#contact`) use root-relative anchors so they function seamlessly whether clicked on the homepage or from an individual case study page.

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
- `https://mohamed-riham.github.io/who-is-riham/projects/cis6027-ecommerce-bi-analytics/` (Priority: 0.7, Monthly)
- `https://mohamed-riham.github.io/who-is-riham/projects/azirah-horror-game/` (Priority: 0.7, Monthly)

### 5.2 Robots File (`robots.txt`)
```txt
User-Agent: *
Allow: /

Sitemap: https://mohamed-riham.github.io/who-is-riham/sitemap.xml
```

---

## 6. Localhost & Development URL Scan
A full recursive search across all source files and the static export build (`out/`) verified that **zero absolute localhost URLs exist in production assets or rendered markup**.
