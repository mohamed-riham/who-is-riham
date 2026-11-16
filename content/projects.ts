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
      article: "https://dev.to/mohamed-riham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f",
    },
    image: "/images/projects/sri-lankan-currency-detector/val_batch0_pred.jpg",
    diagram: "/images/projects/sri-lankan-currency-detector/confusion_matrix.png",
    architectureDetails:
      "Input Frame (Camera / Webcam) → Image Preprocessing & Resizing (640x640) → YOLOv8n Backbone & C2f Feature Extractor → Decoupled Detection Head → NMS Bounding Box Filter → Confidence Scoring (Threshold > 0.70) → Class Resolution (20/50/100/500/1000/5000 LKR) → Audio Synthesis Feedback Buffer.",
    limitations:
      "PC/webcam inference pipeline is fully functional and benchmarked (99.20% mAP@50); ESP32-CAM + DFPlayer Mini edge hardware integration represents the low-cost embedded prototype roadmap. Severely damaged or obscured banknotes under extreme low-light require supplemental illumination.",
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
      "An empirical data science research study benchmarking ensemble tree classifiers against extreme positive-class scarcity (99.48% legitimate vs 0.52% fraudulent transactions) across 1,000,000+ financial records. Proves XGBoost's statistically significant superiority (p = 0.0003) under SMOTE resampling.",
    problem:
      "Financial institutions suffer billions in unauthorized card fraud annually. Standard classifiers fail on transaction datasets because fraud accounts for only ~0.52% of observations, yielding deceitfully high raw accuracy (99.5%) while missing actual fraudulent activity.",
    solution:
      "Constructed a rigorous machine learning pipeline testing data cleaning, PCA projection, and Synthetic Minority Over-sampling (SMOTE) strictly on training splits. Systematically benchmarked Random Forest against XGBoost across Precision-Recall, F1-scores, and ROC curves.",
    contribution:
      "Sole researcher. Authored the comprehensive comparative analysis, designed feature pipelines, evaluated class imbalance techniques, performed statistical significance hypothesis testing (p = 0.0003), and presented the findings.",
    approach: [
      "Evaluated baseline Random Forest and XGBoost classifiers on 1,000,000+ financial transaction records with 99.48% vs 0.52% class imbalance.",
      "Applied SMOTE (Synthetic Minority Over-sampling Technique) exclusively to training folds to prevent data leakage into validation splits.",
      "Prioritized Precision-Recall curves, AUPRC, and F1-scores over misleading overall accuracy.",
      "Demonstrated that XGBoost delivered statistically significant superior predictive accuracy (p = 0.0003) with tighter inference latency bounds.",
    ],
    results: [
      { label: "Dataset Size", value: "1,000,000+ Records" },
      { label: "Class Split", value: "99.48% vs 0.52%" },
      { label: "Top Model", value: "XGBoost (p=0.0003)" },
      { label: "Sampling", value: "SMOTE (Train Split)" },
    ],
    techStack: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "NumPy", "SMOTE", "Matplotlib", "Seaborn"],
    links: {
      article: "https://www.slideshare.net/slideshow/a-comparative-study-of-random-forest-and-xgboost-for-detecting-credit-card-fraud-transactions-using-big-data-mohamed-riham-crp-final-presentation-pptx/283983057",
    },
    architectureDetails:
      "Raw Transactions (1M+ Records) → Feature Scaling & Outlier Filtering → SMOTE Resampling (Training Fold Only) → Hyperparameter Grid Optimization → Model Comparison (Random Forest vs XGBoost) → Statistical Significance Validation (p = 0.0003, AUC-ROC, Precision-Recall Curves).",
    limitations:
      "Synthetic over-sampling can introduce boundary noise in high-dimensional feature spaces; production enterprise deployment requires adaptive sliding-window streaming validation.",
    year: 2025,
  },
  {
    slug: "edith-voice-assistant",
    title: "E.D.I.T.H. Intelligent Voice Assistant",
    tagline: "Local-first, privacy-preserving desktop automation assistant built in Python with neural audio vocalization.",
    featured: true,
    category: "Intelligent Automation",
    status: "Completed",
    summary:
      "A local-first voice assistant ('Enhanced Digital Interface for Task Handling') designed for private desktop execution without transmitting audio telemetry to commercial cloud APIs. Executes system controls, app launches, media playback, webcam captures, and fuzzy intent parsing with low-latency neural speech synthesis.",
    problem:
      "Commercial voice assistants (Alexa, Siri, Google Assistant) depend entirely on cloud connectivity, introduce network latency, and harvest personal user audio transcripts for external storage.",
    solution:
      "Engineered an efficient local voice processing pipeline utilizing local speech recognition, fuzzy string matching, edge-tts neural audio synthesis, OpenCV camera triggers, and PyAutoGUI system administration.",
    contribution:
      "Architected the full Python system: custom wake-word listener, command router, fuzzy parser for relaxed natural language tolerance, and desktop automation hooks.",
    approach: [
      "Configured local speech-to-text pipeline through Python's `speech_recognition` microphone buffer.",
      "Implemented `fuzzywuzzy` Levenshtein distance matching to recognize spoken intents even with regional accents or phonetic deviations.",
      "Utilized `edge-tts` and `pydub` for natural, low-latency vocal responses without cloud dependencies.",
      "Integrated `pyautogui`, `cv2`, and system APIs for multi-app launch, volume control, screenshots, and webcam capture.",
    ],
    results: [
      { label: "Architecture", value: "Local-First / Hybrid" },
      { label: "Response", value: "Neural Audio Synthesis" },
      { label: "Parser", value: "Fuzzy Levenshtein Router" },
      { label: "Privacy", value: "Zero Audio Telemetry" },
    ],
    techStack: ["Python", "speech_recognition", "edge-tts", "OpenCV", "pyautogui", "fuzzywuzzy", "pydub"],
    links: {
      article: "https://dev.to/mohamed-riham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc",
    },
    architectureDetails:
      "Microphone Audio Stream → Speech Recognition Engine → Levenshtein Fuzzy Intent Matcher → Action Dispatcher (System Control / Webcam / Media / App Launcher) → Vocal Response Buffer via edge-tts & pydub.",
    limitations:
      "Source codebase is maintained as a private/academic repository. Relies on edge-tts neural voice generation; microphone speech recognition operates best in low-noise acoustic environments.",
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
  {
    slug: "sri-lankan-rainfall-forecasting",
    title: "Sri Lankan Rainfall Forecasting & Meteorological Time-Series Analysis",
    tagline: "Comparative time-series modeling evaluating classical statistical vs deep recurrent architectures on Department of Meteorology weather data.",
    featured: false,
    category: "Machine Learning",
    status: "Research & Evaluation",
    summary:
      "An active academic research study analyzing multi-decadal historical climate and rainfall records across agro-ecological zones in Sri Lanka. Benchmarks classical econometric time-series models (ARIMA, SARIMAX) against modern deep learning sequence models (LSTM, GRU) for monsoon precipitation forecasting and extreme weather anomaly detection.",
    problem:
      "Monsoon agriculture and hydroelectric power generation in Sri Lanka are acutely vulnerable to climate variability, flash flooding, and severe droughts. Traditional seasonal estimates lack fine-grained temporal resolution and struggle to capture non-linear climatic shifts.",
    solution:
      "Engineered an end-to-end meteorological data pipeline to ingest, clean, decompose, and stationarize multi-station weather data. Benchmarked seasonal auto-regressive models (SARIMAX) with exogenous variables against stacked Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) neural networks.",
    contribution:
      "Sole researcher. Implemented seasonal stationarity testing (ADF, KPSS), seasonal differencing, sequence windowing datasets for PyTorch/TensorFlow, and comparative loss evaluation (RMSE, MAE).",
    approach: [
      "Extracted multi-station meteorological time series, handling sensor missingness via spline interpolation.",
      "Applied Augmented Dickey-Fuller (ADF) tests to assess stationarity and determined optimal seasonal differencing orders (p, d, q) x (P, D, Q)s.",
      "Engineered sliding temporal windows (t-30 ... t) to feed sequential Recurrent Neural Networks (LSTM/GRU).",
      "Benchmarked forecasting error across monsoonal regimes (Yala and Maha seasons) using RMSE, MAE, and directional accuracy.",
    ],
    results: [
      { label: "Temporal Span", value: "Multi-Decadal" },
      { label: "Target Zones", value: "Agro-Ecological" },
      { label: "Deep Sequence", value: "LSTM & GRU" },
      { label: "Statistical", value: "SARIMAX Benchmarked" },
    ],
    techStack: ["Python", "PyTorch", "Statsmodels", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    links: {},
    architectureDetails:
      "Weather Station Ingestion → Missingness Imputation & Feature Scaling → ADF Stationarity Testing & STL Decomposition → Sequence Windowing (t-30) → Comparative Modeling (SARIMAX vs LSTM vs GRU) → Evaluation Metrics (RMSE, MAE, R²).",
    limitations:
      "Extreme microclimate variance across localized mountain ranges requires dense high-altitude sensor station feeds for hyper-local storm prediction.",
    year: 2025,
  },
];
