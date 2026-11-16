export interface WritingItem {
  title: string;
  platform: string;
  date: string;
  readTime: string;
  summary: string;
  link: string;
  tags: string[];
}

export const writingArticles: WritingItem[] = [
  {
    title: "Building an Accessible Currency Detector for the Sri Lankan Visually Impaired with YOLOv8, ESP32-CAM & Audio Feedback",
    platform: "DEV Community",
    date: "2025",
    readTime: "6 min read",
    summary:
      "A deep dive into curating a 1,000+ custom banknote image dataset, training YOLOv8n to 99.2% mAP@50, and integrating real-time audio announcements to aid blind citizens in Sri Lanka.",
    link: "https://dev.to/mohamed-riham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f",
    tags: ["Computer Vision", "YOLOv8", "Assistive AI", "Python"],
  },
  {
    title: "I Built an Offline J.A.R.V.I.S. in Python (No Internet Needed!)",
    platform: "DEV Community",
    date: "2024",
    readTime: "5 min read",
    summary:
      "How to build EDITH, a local-first voice assistant with custom wake-word listeners, fuzzy string intent parsing, webcam selfie triggers, and low-latency vocalization.",
    link: "https://dev.to/mohamed-riham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc",
    tags: ["AI Assistant", "Python", "Speech Recognition", "Automation"],
  },
  {
    title: "From Student to Engineer: My Journey into Applied AI, Voice Assistants, and Beyond",
    platform: "DEV Community",
    date: "2024",
    readTime: "7 min read",
    summary:
      "Practical reflections on moving from theoretical academic coursework to engineering working prototypes in computer vision, voice automation, and data science.",
    link: "https://dev.to/mohamed-riham/from-student-to-engineer-my-journey-into-applied-ai-voice-assistants-and-beyond-49e0",
    tags: ["Career", "Data Science", "Machine Learning", "Software Engineering"],
  },
  {
    title: "Software Engineering vs Data Science: A Real Talk for Students",
    platform: "DEV Community",
    date: "2024",
    readTime: "5 min read",
    summary:
      "An experience-driven breakdown comparing curricula, technical mindsets, and day-to-day project workflows for computing students deciding between Software Engineering and Data Science.",
    link: "https://dev.to/mohamed-riham/software-engineering-vs-data-science-a-real-talk-for-students-4hja",
    tags: ["Data Science", "Software Engineering", "Career Guidance", "Academic"],
  },
  {
    title: "A Comparative Study of Random Forest and XGBoost for Detecting Credit Card Fraud Transactions using Big Data",
    platform: "SlideShare Research Deck",
    date: "2025",
    readTime: "Academic Presentation",
    summary:
      "Empirical big data research benchmarking Random Forest vs XGBoost on 1,000,000+ transaction records under 99.48% vs 0.52% extreme class imbalance with SMOTE resampling (p = 0.0003).",
    link: "https://www.slideshare.net/slideshow/a-comparative-study-of-random-forest-and-xgboost-for-detecting-credit-card-fraud-transactions-using-big-data-mohamed-riham-crp-final-presentation-pptx/283983057",
    tags: ["Big Data", "Fraud Detection", "XGBoost", "Random Forest"],
  },
  {
    title: "IT Security for Revuelto Financial Services: Security Architecture & Threat Analysis",
    platform: "SlideShare Presentation",
    date: "2024",
    readTime: "Security Deck",
    summary:
      "Enterprise security architecture and threat modeling for Revuelto Financial Services, evaluating threat vectors, access controls, network segmentation, and defense-in-depth mitigations.",
    link: "https://www.slideshare.net/slideshow/it-security-for-revuelto-financial-services-security-presentation-mohamed-riham-pptx/283982894",
    tags: ["Cybersecurity", "Enterprise Security", "Threat Modeling", "Risk Analysis"],
  },
];
