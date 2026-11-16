export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  category: "Computer Vision" | "Machine Learning" | "Intelligent Automation" | "Tools & Web" | "Blockchain & IoT";
  status: "Completed" | "Research & Evaluation" | "Prototype";
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  approach: string[];
  results: ProjectMetric[];
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    video?: string;
    article?: string;
  };
  image?: string;
  diagram?: string;
  architectureDetails?: string;
  limitations?: string;
  year: number;
}

export const projects: Project[] = [
  {
    slug: "sri-lankan-currency-detector",
    title: "Sri Lankan Currency Detector (Assistive AI)",
    tagline: "Real-time edge computer vision model empowering visually impaired individuals to identify Sri Lankan banknotes.",
    featured: true,
    category: "Computer Vision",
    status: "Completed",
    summary:
      "A lightweight, real-time object detection and classification system trained on a custom dataset of 1,000+ real-world images of Sri Lankan banknotes (Rs. 20, 50, 100, 500, 1000, and 5000) using YOLOv8n, coupled with immediate audio synthesis to provide audible validation for visually impaired users.",
    problem:
      "Visually impaired citizens in Sri Lanka face severe accessibility hurdles and high vulnerability to financial fraud when distinguishing between banknotes under varying lighting, folds, and orientations.",
    solution:
      "Trained a high-precision YOLOv8n convolutional model on an annotated custom dataset covering six national currency denominations. Integrated multi-modal inference (static image, webcam, and live video stream) with automated text-to-speech audio announcements for hands-free verification.",
    contribution:
      "Sole researcher and developer. Curated and annotated the 1,000+ image dataset across varied real-world lighting conditions, trained the YOLOv8 nano model for 50 epochs, optimized weight tensors, and created both Streamlit testing interfaces and video stream inference pipelines.",
    approach: [
      "Selected YOLOv8 nano (YOLOv8n) for optimal trade-off between inference frame rate (FPS) and low memory footprint on edge devices.",
      "Collected and labeled 1,000+ high-resolution photographs of Sri Lankan banknotes across 6 denominations under multiple angles, lighting levels, and wear states.",
      "Trained model for 50 epochs using PyTorch backends, monitoring box loss, class loss, and mAP curves.",
      "Integrated audio feedback via text-to-speech engine to speak denomination values immediately upon bounding-box confidence exceeding threshold.",
    ],
    results: [
      { label: "mAP@50", value: "99.20%" },
      { label: "Precision", value: "99.25%" },
      { label: "Recall", value: "99.18%" },
      { label: "Classes", value: "6 Denominations" },
    ],
    techStack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "gTTS", "Streamlit", "NumPy"],
    links: {
      github: "https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8",
      video: "https://youtu.be/IeytAWt0NNw",
      article: "https://dev.to/mohamedriham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f",
    },
    image: "/images/projects/sri-lankan-currency-detector/val_batch0_pred.jpg",
    diagram: "/images/projects/sri-lankan-currency-detector/confusion_matrix.png",
    architectureDetails:
      "Input Frame (Camera / Webcam) → Image Preprocessing & Resizing (640x640) → YOLOv8n Backbone & C2f Feature Extractor → Decoupled Detection Head → NMS Bounding Box Filter → Confidence Scoring (Threshold > 0.70) → Class Resolution (20/50/100/500/1000/5000 LKR) → Audio Synthesis Feedback Buffer.",
    limitations:
      "Severely damaged, torn, or partially obscured banknotes under extreme darkness require secondary tactile inspection or supplemental LED illumination.",
    year: 2025,
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection: Random Forest vs XGBoost",
    tagline: "Comparative big data machine learning research analyzing extreme class imbalance on 1,000,000+ financial transactions.",
    featured: true,
    category: "Machine Learning",
    status: "Research & Evaluation",
    summary:
      "An empirical data science investigation benchmarking ensemble tree models against extreme positive-class scarcity (< 1% fraud instances) across 1M+ transactions, evaluating SMOTE resampling against cost-sensitive boosting.",
    problem:
      "Financial institutions suffer millions in credit card fraud daily. However, standard classifiers collapse on fraud datasets because fraudulent transactions represent less than 0.5% of data, resulting in deceitfully high overall accuracy but disastrous fraud catch rates.",
    solution:
      "Constructed a rigorous machine learning pipeline testing data cleaning, PCA dimensional projection, and Synthetic Minority Over-sampling (SMOTE). Systematically compared Random Forest against Extreme Gradient Boosting (XGBoost), analyzing PR curves and AUC-ROC.",
    contribution:
      "Authored the formal research analysis, authored Python preprocessing scripts, optimized hyperparameter grids, and published slide deck documentation.",
    approach: [
      "Evaluated baseline Random Forest and XGBoost classifiers without sampling on 1M+ transaction records.",
      "Implemented SMOTE (Synthetic Minority Over-sampling Technique) to synthetically balance minority fraud cases in training folds.",
      "Evaluated Precision-Recall tradeoff, F1-scores, and confusion matrices rather than misleading raw accuracy.",
      "Demonstrated that XGBoost delivered superior predictive power and tighter latency bounds on skewed financial data distributions.",
    ],
    results: [
      { label: "Dataset Size", value: "1,000,000+ Records" },
      { label: "Fraud Ratio", value: "< 1.0% Imbalance" },
      { label: "Top Classifier", value: "XGBoost" },
      { label: "Sampling", value: "SMOTE Tuned" },
    ],
    techStack: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "NumPy", "SMOTE", "Matplotlib", "Seaborn"],
    links: {
      article: "https://dev.to/mohamedriham/from-student-to-engineer-my-journey-into-applied-ai-voice-assistants-and-beyond-49e0",
    },
    image: "/images/projects/data-science-dashboard/dashboard_preview.png",
    architectureDetails:
      "Raw Transactions (1M+ Records) → Feature Scaling & Outlier Clipping → SMOTE Resampling (Training Fold Only) → Hyperparameter Grid Tuning → Model Comparison (Random Forest vs XGBoost) → Cross-Validation Evaluation (AUC-ROC, F1, Precision-Recall Curve).",
    limitations:
      "Synthetic over-sampling can introduce boundary noise in feature space; production deployment requires dynamic sliding-window streaming validation.",
    year: 2025,
  },
  {
    slug: "edith-voice-assistant",
    title: "E.D.I.T.H. Offline Intelligent Voice Assistant",
    tagline: "100% cloud-free, privacy-preserving desktop automation assistant built from scratch in Python.",
    featured: true,
    category: "Intelligent Automation",
    status: "Completed",
    summary:
      "A fully local voice assistant ('Enhanced Digital Interface for Task Handling') that operates entirely offline without sending voice data to commercial APIs. Executes desktop commands, application controls, media playback, webcam selfies, and fuzzy matching intent parsing.",
    problem:
      "Commercial voice assistants (Alexa, Siri, Google Assistant) depend entirely on cloud connectivity, introduce network latency, and harvest personal user audio transcripts for external storage.",
    solution:
      "Engineered an offline voice processing pipeline utilizing local speech recognition, fuzzy string matching, edge-tts local audio synthesis, OpenCV camera triggers, and PyAutoGUI system administration.",
    contribution:
      "Architected the full Python system: custom wake-word listener, command router, fuzzy parser for relaxed natural language tolerance, and desktop automation hooks.",
    approach: [
      "Configured local speech-to-text pipeline through Python's `speech_recognition` microphone buffer.",
      "Implemented `fuzzywuzzy` Levenshtein distance matching to recognize spoken intents even with regional accents or phonetic deviations.",
      "Utilized `edge-tts` and `pydub` for natural, low-latency vocal responses without cloud dependencies.",
      "Integrated `pyautogui`, `cv2`, and system APIs for multi-app launch, volume control, screenshots, and webcam capture.",
    ],
    results: [
      { label: "Cloud Dependency", value: "0% (Fully Offline)" },
      { label: "Latency", value: "Sub-Second Audio" },
      { label: "Parser", value: "Fuzzy Intent Router" },
      { label: "Privacy", value: "Local Storage Only" },
    ],
    techStack: ["Python", "speech_recognition", "edge-tts", "OpenCV", "pyautogui", "fuzzywuzzy", "pydub"],
    links: {
      github: "https://github.com/mohamed-riham",
      article: "https://dev.to/mohamedriham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc",
    },
    architectureDetails:
      "Microphone Audio Stream → Speech Recognition Engine → Levenshtein Fuzzy Intent Matcher → Action Dispatcher (System Control / Webcam / Media / App Launcher) → Vocal Response Buffer via edge-tts & pydub.",
    limitations:
      "Offline speech models require clear acoustic environments with minimal background reverberation compared to cloud beamforming arrays.",
    year: 2024,
  },
  {
    slug: "yt-video-downloader",
    title: "NOIR Downloader (yt-video-downloader)",
    tagline: "High-performance local media capture and batch transcoding utility with 4K video stitching and 320 kbps audio extraction.",
    featured: true,
    category: "Tools & Web",
    status: "Completed",
    summary:
      "An ad-free, local-first media capture utility built with Python 3.10+, Streamlit, yt-dlp, and modern FFmpeg stream muxing, supporting automated 4K 60FPS video merging, high-fidelity audio extraction with embedded ID3 metadata tags, and cookie bot bypass.",
    problem:
      "Public web-based media downloaders are riddled with deceptive advertisements, malware threats, rate limiting, and severe audio bitrate throttling.",
    solution:
      "Developed a clean, locally hosted Streamlit application with native yt-dlp subprocess orchestration and modern FFmpeg multi-stream transcoding, supporting customizable bitrate targets and playlist queues.",
    contribution:
      "Engineered the full application: UI layout, asynchronous progress monitoring, cookie authentication integration for bot verification, and automated output directory organization.",
    approach: [
      "Engineered clean user interface in Streamlit with real-time format extraction.",
      "Orchestrated yt-dlp subprocesses to capture separate high-resolution video and audio streams.",
      "Automated FFmpeg muxing commands to losslessly merge video containers (MP4/MKV) and embed metadata/cover art into MP3/M4A audio files.",
      "Implemented cookie file injection to prevent YouTube anti-bot rate limiting.",
    ],
    results: [
      { label: "Max Resolution", value: "4K 60FPS" },
      { label: "Audio Bitrate", value: "320 kbps MP3" },
      { label: "Ad Interference", value: "0% Ad-Free" },
      { label: "Transcoder", value: "FFmpeg Native" },
    ],
    techStack: ["Python", "Streamlit", "yt-dlp", "FFmpeg", "Subprocess", "PIL"],
    links: {
      github: "https://github.com/mohamed-riham/yt-video-downloader",
    },
    architectureDetails:
      "URL Input & Format Selector → yt-dlp Metadata Extraction → Stream Download Buffers (Separate Video & Audio) → Modern FFmpeg Transcoding Pipeline → Tag & Artwork Embedding → Local Storage Dispatch.",
    limitations:
      "Requires local installation of modern FFmpeg executable on host machine path.",
    year: 2026,
  },
  {
    slug: "real-estate-tokenization-dapp",
    title: "Real Estate Tokenization DApp",
    tagline: "Decentralized Web3 smart contract architecture enabling fractional property investment and verified ownership tokens.",
    featured: true,
    category: "Blockchain & IoT",
    status: "Prototype",
    summary:
      "A Solidity-powered decentralized application (`RealEstateTokanization2.sol`) exploring fractional real-estate ownership, automated dividend distribution, and immutable property transfer records on the Ethereum blockchain.",
    problem:
      "Real estate markets present astronomical barrier-to-entry capital costs, lengthy bureaucratic escrow delays, lack of liquidity, and opaque paper registries.",
    solution:
      "Architected an ERC-compliant Solidity smart contract enabling properties to be divided into fractional digital equity tokens that can be transparently purchased, verified, and traded by distributed investors.",
    contribution:
      "Created the Solidity smart contract logic for token valuation, fractional share issuance, ownership validation events, and connected Web3 frontend interface.",
    approach: [
      "Developed Solidity smart contract logic (`RealEstateTokanization2.sol`) implementing secure token minting, ownership transfers, and balance auditing.",
      "Engineered frontend Web3 connection allowing investors to view listed properties, token price per fraction, and contract state.",
      "Implemented reentrancy guards and access modifiers to secure asset balances and administrative registry modifications.",
    ],
    results: [
      { label: "Contract Language", value: "Solidity 0.8+" },
      { label: "Architecture", value: "Fractional Web3" },
      { label: "Security", value: "Access Guarded" },
      { label: "Interface", value: "Responsive Web3" },
    ],
    techStack: ["Solidity", "JavaScript", "HTML5", "CSS3", "Web3.js", "Ethereum"],
    links: {
      github: "https://github.com/mohamed-riham/Real-Estate-Tokenization-DApp",
    },
    architectureDetails:
      "Property Asset Registry → Solidity Smart Contract (Fractional Minting & Escrow Logic) → Ethereum State / EVM → Web3 RPC Provider → Client Dashboard UI.",
    limitations:
      "Requires regulatory compliance frameworks and legal deed oracle bridges for real-world legal enforceability beyond testnet simulation.",
    year: 2026,
  },
  {
    slug: "face-recognition-attendance-system",
    title: "Real-Time Face Recognition Attendance System",
    tagline: "Automated biometric classroom attendance tracking cutting manual logging effort by ~80% with MySQL auditing.",
    featured: false,
    category: "Computer Vision",
    status: "Completed",
    summary:
      "A desktop computer vision application built with Python, OpenCV, and facial recognition libraries that automatically identifies students, writes structured timestamped logs to MySQL, and emails alerts via SMTP.",
    problem:
      "Traditional manual roll-call attendance in university campuses consumes 10-15 minutes of lecture time, is susceptible to proxy signing, and lacks real-time administrative reporting.",
    solution:
      "Engineered a real-time facial recognition framework with camera feed capture, face encoding storage, automated MySQL attendance timestamps, and unknown face identification.",
    contribution:
      "Implemented facial encoding routines, MySQL relational database schema, PyQt/PySide graphical user interface, and SMTP notification dispatch.",
    approach: [
      "Constructed student face capture module encoding 128-dimensional facial landmarks.",
      "Built real-time video evaluation loop comparing incoming camera frames against encoded database entries.",
      "Automated MySQL database logging with distinct daily timestamps and proxy prevention.",
      "Configured Python `smtplib` to trigger immediate notification emails to designated administrative or guardian addresses.",
    ],
    results: [
      { label: "Time Saved", value: "~80% Effort Cut" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Alerts", value: "Automated SMTP" },
      { label: "Identification", value: "Real-Time Camera" },
    ],
    techStack: ["Python", "OpenCV", "face_recognition", "MySQL", "PyQt/PySide", "smtplib"],
    links: {
      github: "https://github.com/mohamed-riham/face_recognition_attendance_system",
    },
    limitations:
      "Accuracy degrades under extreme occlusion (face masks) or poor illumination below 10 lux.",
    year: 2024,
  },
  {
    slug: "data-science-sales-dashboard",
    title: "Enterprise Retail Sales Analytics & Data Science Dashboard",
    tagline: "Modular Python analytics application delivering exploratory data analysis and automated testing under SOLID design principles.",
    featured: false,
    category: "Machine Learning",
    status: "Completed",
    summary:
      "A data science application built in Python utilizing OOP design patterns (Factory, Observer, Singleton) to ingest multi-branch supermarket transaction records, generate exploratory data visualizations, and validate pipelines with automated unit tests.",
    problem:
      "Retail managers frequently struggle with fragmented CSV sales spreadsheets, making it difficult to detect branch revenue trends, payment preferences, and customer loyalty dynamics.",
    solution:
      "Engineered a structured desktop analytics tool featuring multi-branch exploratory data analysis, product performance breakdowns, and automated testing suites.",
    contribution:
      "Designed the object-oriented architecture, UML class diagram (`class_diagram.drawio.png`), interactive charts, and `unittest` verification suites.",
    approach: [
      "Structured data ingestion pipeline parsing baseline, enhanced, and multi-megabyte expanded supermarket datasets.",
      "Applied SOLID design principles to isolate ingestion, analytical aggregation, and presentation layers.",
      "Authored automated unit tests (`test_analysis.py`) and user acceptance tests (`user_acceptancy_test.py`).",
      "Created interactive charts tracking product line sales, gross income, and customer rating distributions.",
    ],
    results: [
      { label: "Architecture", value: "SOLID & OOP" },
      { label: "Testing", value: "100% Passing Tests" },
      { label: "Data Scope", value: "Multi-branch Retail" },
      { label: "Visuals", value: "Interactive Charts" },
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "unittest"],
    links: {
      github: "https://github.com/mohamed-riham/Data-Science-Dashboard-python",
      video: "https://www.youtube.com/watch?v=Ct4KMro4JqU",
    },
    image: "/images/projects/data-science-dashboard/dashboard_preview.png",
    diagram: "/images/projects/data-science-dashboard/class_diagram.png",
    limitations:
      "Currently runs as a standalone Python desktop application rather than a cloud multi-tenant web SaaS.",
    year: 2025,
  },
  {
    slug: "smart-home-door-lock-system",
    title: "IoT Smart Home Door Lock (Access Control)",
    tagline: "Embedded micro-controller access security combining physical RFID authentication and real-time Blynk mobile monitoring.",
    featured: false,
    category: "Blockchain & IoT",
    status: "Completed",
    summary:
      "An Internet of Things (IoT) security prototype integrating an ESP8266/ESP32 micro-controller with an MFRC522 RFID reader, servo motor deadbolt mechanism, and the Blynk cloud platform for remote monitoring and unauthorized access alerts.",
    problem:
      "Traditional mechanical locks offer zero audit trails, cannot be verified remotely, and risk unauthorized physical key duplication.",
    solution:
      "Built a dual-authentication smart lock enabling localized contactless RFID fob verification alongside real-time smartphone remote unlocking and cloud activity logging.",
    contribution:
      "Wired hardware circuit breadboards, authored C++ embedded firmware, mapped servo actuation angles, and configured the Blynk cloud mobile interface.",
    approach: [
      "Programmed C++ firmware on ESP micro-controller handling SPI communication with MFRC522 RFID reader.",
      "Connected system to Wi-Fi to synchronize lock status with Blynk cloud servers in real time.",
      "Configured servo motor to actuate locking mechanisms based on verified UID authorization.",
      "Integrated instant push notifications to alert homeowners of denied access attempts.",
    ],
    results: [
      { label: "Authentication", value: "Dual (RFID + Mobile)" },
      { label: "Connectivity", value: "Wi-Fi Cloud Sync" },
      { label: "Microcontroller", value: "ESP8266 / ESP32" },
      { label: "Audit Log", value: "Real-Time Cloud" },
    ],
    techStack: ["C++", "ESP8266", "ESP32", "RFID (RC522)", "Blynk IoT", "Servo Motor", "I2C LCD"],
    links: {
      github: "https://github.com/mohamed-riham/Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control",
    },
    limitations:
      "Requires continuous 5V DC power and active Wi-Fi connection for mobile remote control; offline mode operates purely on local RFID.",
    year: 2025,
  },
];
