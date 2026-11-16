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
    link: "https://dev.to/mohamedriham/building-an-accessible-currency-detector-for-the-sri-lankan-visually-impaired-with-yolov8-esp32-cam-audio-feedback-3b5f",
    tags: ["Computer Vision", "YOLOv8", "Assistive AI", "Python"],
  },
  {
    title: "I Built an Offline J.A.R.V.I.S. in Python (No Internet Needed!)",
    platform: "DEV Community",
    date: "2024",
    readTime: "5 min read",
    summary:
      "How to build EDITH, a 100% private and cloud-free voice assistant with custom wake-word listeners, fuzzy string intent parsing, webcam selfie triggers, and edge-tts vocalization.",
    link: "https://dev.to/mohamedriham/i-built-an-offline-jarvis-in-python-no-internet-needed-29bc",
    tags: ["AI Assistant", "Python", "Speech Recognition", "Automation"],
  },
  {
    title: "From Student to Engineer: My Journey into Applied AI, Voice Assistants, and Beyond",
    platform: "DEV Community",
    date: "2024",
    readTime: "7 min read",
    summary:
      "Practical reflections on moving from theoretical academic coursework to engineering working prototypes in computer vision, offline voice automation, and data science.",
    link: "https://dev.to/mohamedriham/from-student-to-engineer-my-journey-into-applied-ai-voice-assistants-and-beyond-49e0",
    tags: ["Career", "Data Science", "Machine Learning", "Software Engineering"],
  },
  {
    title: "A Comparative Study of Random Forest and XGBoost for Detecting Credit Card Fraud Transactions using Big Data",
    platform: "Research Presentation / SlideShare",
    date: "2025",
    readTime: "Research Deck",
    summary:
      "Empirical analysis evaluating tree ensemble architectures on 1M+ transactions with extreme class imbalance (< 1% fraud), proving XGBoost's superior precision, recall, and AUC-ROC under SMOTE resampling.",
    link: "https://dev.to/mohamedriham/software-engineering-vs-data-science-a-real-talk-for-students-4hja",
    tags: ["Big Data", "Fraud Detection", "XGBoost", "Random Forest"],
  },
];
