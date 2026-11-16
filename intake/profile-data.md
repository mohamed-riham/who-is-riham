# Portfolio Intake: Mohamed Riham

## Status: DRAFT (November 16, 2026)

---

## 1. Identity and Positioning

* **Full Legal / Academic Name:** Mohamed Ansar Mohamed Riham `[FROM-FILE]`
* **Display Name on Site:** Mohamed Riham `[CONFIRMED]`
* **Professional Title:** Data Science & AI/ML Engineer \| Software Developer `[FROM-FILE]`
* **Target Roles:** Data Scientist / AI Engineer / Machine Learning Engineer / Software Developer `[CONFIRMED]`
* **Opportunity Type:** All (Internship, Graduate Role, Junior Full-Time, Freelance) `[CONFIRMED]`
* **Location:** Addalaichenai & Dehiwala, Colombo, Sri Lanka `[CONFIRMED]`
* **Open to Remote / Relocation:** Open to remote & relocation opportunities `[FROM-FILE]`
* **Positioning Statement:** Final-year BSc Data Science undergraduate and Software Engineering HND graduate with a proven track record of engineering end-to-end AI systems (computer vision, edge AI, NLP, fraud detection) and full-stack web applications from data curation to production deployment. `[FROM-FILE]`
* **Three Impression Words:** `[TODO]` (Pending user input)
* **Languages:** English, Tamil `[CONFIRMED]`

---

## 2. Education

1. **BSc (Hons) Data Science** `[FROM-FILE]`
   * **Institution:** ICBT Campus Colombo `[FROM-FILE]`
   * **Awarding Body:** Cardiff Metropolitan University, UK `[FROM-FILE]`
   * **Timeline:** November 2025 – Expected June 2027 `[FROM-FILE]`
   * **Current Focus:** Machine Learning Pipelines, Computer Vision, Neural Networks, Statistical Modeling, Business Intelligence `[FROM-FILE]`
   * **GPA / Classification:** `[TODO]` (Optional to display)

2. **BTEC Higher National Diploma (HND) in Computing (Software Engineering)** `[FROM-FILE]`
   * **Institution:** BCAS Campus Kalmunai `[FROM-FILE]`
   * **Awarding Body:** Pearson, UK (Study Completion: 11th March 2025) `[FROM-FILE]`
   * **Grade:** Merit (10 Distinctions, 5 Merits across 15 Units) `[FROM-FILE]`
   * **Key Modules:** Programming (Distinction), Data Structures & Algorithms (Distinction), Database Design & Development (Distinction), Applied Programming and Design Principles (Distinction), Security (Distinction), Planning a Computing Project (Distinction), Internet of Things (Distinction) `[FROM-FILE]`

3. **Diploma in Information Technology** `[FROM-FILE]`
   * **Institution:** BCAS Campus Kalmunai (Pearson Assured) `[FROM-FILE]`
   * **Dates:** July 2023 – November 2023 (Issued May 2024) `[FROM-FILE]`

4. **Certificate in English Language** `[FROM-FILE]`
   * **Institution:** BCAS Campus Kalmunai (Pearson Assured) `[FROM-FILE]`
   * **Date:** Completed May 2024 `[FROM-FILE]`

5. **Certificate in Basic English Language and Literature** `[FROM-FILE]`
   * **Institution:** Technical College, Akkaraipattu `[FROM-FILE]`
   * **Date:** 2022 `[FROM-FILE]`

---

## 3. Experience & Leadership

1. **Web Designer & Web Developer — Axis Academy** `[FROM-FILE]`
   * **Timeline:** January 2025 – July 2025 (7 months) `[FROM-FILE]`
   * **Location:** Addalaichenai, Sri Lanka `[FROM-FILE]`
   * **Outcomes & Responsibilities:**
     * Served as sole developer across the full lifecycle: design, build, deployment, and ongoing maintenance.
     * Developed and launched the academy's official responsive website using HTML5, CSS3, JavaScript, and PHP.
     * Accelerated page load speeds through custom image compression, script minification, and clean responsive UI architecture.
     * Structured online course listings, media pages, and an administrative dashboard for content management.
     * Configured hosting, custom domain routing, and on-page SEO.

2. **Batch Representative — BCAS IT Society (BITS)** `[FROM-FILE]`
   * **Timeline:** May 2024 – April 2025 `[FROM-FILE]`
   * **Outcomes & Responsibilities:**
     * Liaised between the student body and faculty, coordinating technical events and student support.
     * Increased batch participation in coding workshops and peer programming sessions through proactive updates.

3. **Volunteer Hardware Specialist — BCAS PC Clinic** `[FROM-FILE]`
   * **Timeline:** 2024 `[FROM-FILE]`
   * **Award:** Certificate of Appreciation for outstanding voluntary contribution, hardware troubleshooting, OS installations, and system maintenance. `[FROM-FILE]`

---

## 4. Certifications

1. **Introducing Generative AI with AWS** `[FROM-FILE]`
   * **Issuer:** Udacity (in partnership with AWS) `[FROM-FILE]`
   * **Date:** August 3, 2025 `[FROM-FILE]`
   * **Credential URL:** `https://www.udacity.com/certificate/e/1282108e-413f-11f0-be80-6ba7413cea00` `[FROM-FILE]`

2. **AWS Educate Machine Learning Foundations** `[FROM-FILE]`
   * **Issuer:** Amazon Web Services (AWS) `[FROM-FILE]`
   * **Status:** Listed on official CV and LinkedIn profile `[FROM-FILE]`
   * **Credential Link / ID:** `[TODO]`

---

## 5. Candidate Projects (Evaluated & Documented)

### Project Selection Status:
* **Featured Projects (Top 5):**
  1. Sri Lankan Currency Detector (YOLOv8) `[CONFIRMED]`
  2. Data Science Sales Analysis Dashboard `[CONFIRMED]`
  3. YT Video Downloader & Batch Transcoder `[CONFIRMED]`
  4. Real-Time Face Recognition Attendance System `[CONFIRMED]`
  5. Smart Home IoT Door Lock System `[CONFIRMED]`
* **Excluded Projects:**
  * `mokkapix-vault` `[EXCLUDED - BY USER REQUEST]`
  * `AimBot-Panel`, `RST-VMD-DRIVERS`, `pythonProject*`, `LABSHEET02`, `ProgrammingPython`, `PythonMasterRHM`, `Pycharm_LORD`, `Human-Resource-Management`, `ABC_HOSPITAL`, legacy portfolios `[EXCLUDED]`

### Project 1: Sri Lankan Currency Detector (Assistive AI) `[CONFIRMED]`
* **Title:** Accessible Sri Lankan Currency Recognition with YOLOv8 & Real-Time Audio
* **Tagline:** Real-time embedded computer vision system empowering visually impaired individuals to identify Sri Lankan banknotes independently.
* **Category:** ml-app / computer vision
* **The Problem:** Blind and visually impaired individuals face severe financial friction and fraud vulnerability when identifying physical currency banknotes in daily transactions.
* **Exact Role:** Solo developer. Curated dataset, trained deep learning model, built Streamlit testing UI, and integrated audio synthesis.
* **Dataset:** 1,000+ custom-collected and annotated real-world images across varied lighting, angles, and conditions.
* **Approach:** Selected lightweight **YOLOv8 nano (YOLOv8n)** for low-latency inference on resource-constrained devices. Built real-time inference loop supporting webcam, static images, and pre-recorded video feeds. Integrated text-to-speech audio announcements for detected notes.
* **Exact Results (from `Train/results.csv` on epoch 50):**
  * **Precision (B):** 0.9925 (99.25%)
  * **Recall (B):** 0.9918 (99.18%)
  * **mAP@50 (B):** 0.9920 (99.20%)
  * **mAP@50-95 (B):** 0.7971 (79.71%)
  * **Supported Classes:** 6 denominations (Rs. 20, 50, 100, 500, 1000, 5000).
* **Hardware Integration Note:** ESP32-CAM + DFPlayer Mini hardware integration documented in articles / CV; initial repo features Python/OpenCV/Streamlit/gTTS implementation.
* **Tech Stack:** Python, YOLOv8n, PyTorch, OpenCV, Streamlit, gTTS, NumPy.
* **Links:**
  * GitHub: `https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8`
  * YouTube Demo: `https://youtu.be/IeytAWt0NNw`
* **Visuals:** High-res confusion matrix, loss curves, and prediction validation samples in `/intake/images/projects/sri-lankan-currency-detector/`.

---

### Project 2: Data Science Sales Analysis Dashboard `[FROM-FILE]`
* **Title:** Enterprise Retail Analytics & Data Science Dashboard
* **Tagline:** Modular Python analytics application delivering exploratory data analysis, customer segmentation, and automated testing under SOLID design principles.
* **Category:** analysis / engineering
* **The Problem:** Retail organizations generate complex multi-branch transaction data that requires structured exploratory analysis, outlier filtering, and reliable visualization to extract actionable operational insights.
* **Exact Role:** Solo engineer. Implemented data preprocessing pipelines, interactive dashboards, unit testing suites, and object-oriented architecture.
* **Dataset:** Supermarket sales datasets (`supermarket_sales.csv`, `supermarket_sales_enhanced.csv`, and expanded dataset).
* **Approach:** Applied object-oriented design and design patterns (Singleton, Factory, Observer). Built automated unit tests (`unittest`) and user acceptance testing routines (`user_acceptancy_test.py`).
* **Exact Results:** Automated test suite validating data ingestion, cleaning, and reporting pipelines. Interactive charts tracking product performance, payment distribution, and branch sales.
* **Tech Stack:** Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Tkinter / GUI, unittest.
* **Links:**
  * GitHub: `https://github.com/mohamed-riham/Data-Science-Dashboard-python`
  * YouTube Demo: `https://www.youtube.com/watch?v=Ct4KMro4JqU`
* **Visuals:** Full-HD UI preview (`dashboard_preview.png`) and UML class diagram (`class_diagram.png`) in `/intake/images/projects/data-science-dashboard/`.

---

### Project 3: YouTube Media Capture & Transcoding Utility (`yt-video-downloader`) `[FROM-FILE]`
* **Title:** Local-First YouTube Media Capture & Batch Transcoder
* **Tagline:** High-performance local media download utility featuring 4K 60FPS video stitching and 320 kbps audio metadata tagging via yt-dlp and FFmpeg.
* **Category:** engineering / tools
* **The Problem:** Online media downloaders are fraught with malicious popups, data scraping, rate-limiting, and compressed low-bitrate audio/video output.
* **Exact Role:** Solo developer.
* **Approach:** Built on Python 3.10+ and Streamlit with yt-dlp core and modern FFmpeg audio/video stream muxing. Added cookie authentication support for bot verification bypass and Wi-Fi sync.
* **Tech Stack:** Python, Streamlit, yt-dlp, FFmpeg.
* **Links:**
  * GitHub: `https://github.com/mohamed-riham/yt-video-downloader`

---

### Project 4: Smart Home Door Lock System (IoT & Embedded Access Control) `[FROM-FILE]`
* **Title:** IoT Dual-Access Smart Door Lock & Cloud Security System
* **Tagline:** Embedded security system combining RFID hardware authentication and mobile cloud monitoring via the Blynk IoT platform.
* **Category:** engineering / hardware / IoT
* **The Problem:** Traditional locks suffer from duplicate key risks and lack real-time access logging or remote intervention capabilities.
* **Exact Role:** Solo developer/hardware integration.
* **Tech Stack:** C++, ESP8266 / ESP32, RFID (RC522), Servo Motor, I2C LCD, Blynk IoT Platform.
* **Links:**
  * GitHub: `https://github.com/mohamed-riham/Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control`

---

### Project 5: Real-Time Face Recognition Attendance System `[FROM-FILE]`
* **Title:** Automated Face Recognition Attendance & Alert System
* **Tagline:** Real-time biometric attendance tracker cutting manual classroom logging effort by ~80% with automated MySQL auditing and parent notifications.
* **Category:** ml-app / computer vision
* **The Problem:** Manual paper attendance in institutions is error-prone, time-consuming, and disconnected from parental communication.
* **Results:** Documented ~80% reduction in manual logging overhead; automated instant email alerts via SMTP.
* **Tech Stack:** Python, OpenCV, `face_recognition`, MySQL, PyQt/PySide, `smtplib`.
* **Links:**
  * GitHub: `https://github.com/mohamed-riham/face_recognition_attendance_system`

---

### Non-GitHub Candidate Projects (Pending Details in Step 3)

* **EDITH Voice Assistant:** `[TODO]` (Details requested: wake word, offline architecture, exact voice response pipelines).
* **Credit Card Fraud Detection Study (Random Forest vs XGBoost):** `[TODO]` (Details requested: dataset size [1M+ transactions], exact precision/recall/AUC metrics, SMOTE parameters).
* **NOIRVPN:** `[TODO]`
* **IRD e-Services Mobile Redesign:** `[TODO]`
* **Sri Lanka Crisis Economic Research:** `[TODO]`
* **Tamil Gaming Tribute Site:** `[TODO]`

---

## 6. Skills Evidenced by Projects & Education

* **Programming Languages:** Python, JavaScript, C#, PHP, C++, SQL (MySQL, SQLite), HTML5, CSS3
* **Machine Learning & AI:** Supervised Learning, Deep Learning, Computer Vision, Object Detection (YOLOv8n), CNNs, NLP, Speech Recognition, Model Evaluation, Hyperparameter Tuning, Anomaly Detection
* **Data Science & ML Libraries:** Scikit-Learn, PyTorch, OpenCV, Pandas, NumPy, XGBoost, Matplotlib, Seaborn, Plotly
* **Software Engineering & Tools:** Git, GitHub, REST APIs, Object-Oriented Programming (OOP), SOLID Principles, Unit Testing (`unittest`), Responsive UI Design, Streamlit, FFmpeg
* **Cloud, Hardware & IoT:** AWS (Generative AI with AWS, Educate ML Foundations), ESP32-CAM, ESP8266, RFID, Edge AI Optimization, Hardware-Software Integration

---

## 7. Links and Contact Details

* **GitHub:** `https://github.com/mohamed-riham` `[FROM-FILE]`
* **LinkedIn:** `https://www.linkedin.com/in/mohamedriham` `[FROM-FILE]`
* **DEV Community:** `https://dev.to/mohamedriham` `[FROM-FILE]`
* **Medium:** `https://medium.com/@mohamed-riham` `[FROM-FILE]`
* **Personal Profile / Existing Site:** `https://mohamed-riham.github.io` `[FROM-FILE]`
* **Instagram:** `@_mohamed_riham` `[FROM-FILE]`
* **Email:** `mohamedrihamofficial@gmail.com` `[CONFIRMED]`
* **Alternate Email (from CV):** `mohamedriham93@gmail.com` (Kept on file, not exposed publicly) `[CONFIRMED]`
* **CV Downloadable:** `intake/images/Mohamed-Riham-CV.pdf` (Available to bundle as `public/cv.pdf`) `[CONFIRMED]`
* **Privacy Controls:** Phone (`+94 75-413-4241`) and Street Address excluded from public website. `[CONFIRMED]`

---

## 8. Images Table

| File Path | Purpose | Dimensions | File Size | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `intake/images/projects/sri-lankan-currency-detector/val_batch0_pred.jpg` | Project Card Cover / Case Study | 1920 × 1464 | 422.5 KB | Clean validation predictions with bounding boxes. No private data. |
| `intake/images/projects/sri-lankan-currency-detector/confusion_matrix.png` | Case Study Technical Metric | 3000 × 2250 | 147.8 KB | High-res confusion matrix across all 6 banknote classes. |
| `intake/images/projects/sri-lankan-currency-detector/results.png` | Case Study Training Curves | 2400 × 1200 | 268.5 KB | Epoch metrics: loss, precision, recall, mAP50. |
| `intake/images/projects/data-science-dashboard/dashboard_preview.png` | Project Card Cover / Case Study | 1920 × 1080 | 232.4 KB | Full-HD screenshot of interactive sales dashboard. |
| `intake/images/projects/data-science-dashboard/class_diagram.png` | Case Study Architecture Diagram | 786 × 689 | 61.0 KB | Clean UML class diagram. |
| `intake/images/profile/` | Hero & About Profile Photo | `[TODO]` | `[TODO]` | Waiting for user photo. |

---

## 9. Open TODOs

1. Select/Confirm which 4 to 5 projects should be **FEATURED** vs **SECONDARY** (see Step 2 selection table below).
2. Choose primary public email: `mohamedrihamofficial@gmail.com` vs `mohamedriham93@gmail.com`.
3. Provide details for Non-GitHub projects (EDITH, Fraud Detection study, etc.) in Step 3 if you wish to feature them.
4. Add profile photo to `intake/images/profile/` (or confirm if you prefer an icon/badge placeholder).
5. Confirm 3 key impression words for the About section.
