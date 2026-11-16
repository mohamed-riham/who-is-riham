export interface SkillItem {
  name: string;
  provenIn?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used across production applications, ML models, and firmware.",
    skills: [
      { name: "Python", provenIn: "YOLOv8 Currency Detector, EDITH, Fraud Study" },
      { name: "JavaScript / TypeScript", provenIn: "Next.js Portfolio, Web3 DApp" },
      { name: "C#", provenIn: "BTEC HND Software Engineering" },
      { name: "C++", provenIn: "IoT Smart Home Door Lock System" },
      { name: "SQL (MySQL, SQLite)", provenIn: "Face Recognition Attendance, Axis Academy" },
      { name: "PHP", provenIn: "Axis Academy Website, Web Development" },
      { name: "Solidity", provenIn: "Real Estate Tokenization DApp" },
      { name: "HTML5 / CSS3", provenIn: "Modern Responsive Web Applications" },
    ],
  },
  {
    title: "Machine Learning & AI",
    description: "Applied artificial intelligence, neural networks, and evaluation frameworks.",
    skills: [
      { name: "Computer Vision & YOLOv8n", provenIn: "Sri Lankan Currency Detector (99.2% mAP50)" },
      { name: "Supervised & Ensemble Learning", provenIn: "Random Forest vs XGBoost Fraud Study" },
      { name: "Deep Learning & CNNs", provenIn: "Cardiff Met Data Science Programme" },
      { name: "Class Imbalance & SMOTE", provenIn: "Credit Card Fraud Big Data Research" },
      { name: "Natural Language Processing", provenIn: "EDITH Voice Assistant" },
      { name: "Speech Recognition & edge-tts", provenIn: "EDITH Voice Assistant" },
      { name: "Model Evaluation & Hyperparameter Tuning", provenIn: "Scikit-Learn, PyTorch" },
      { name: "Generative AI Foundations", provenIn: "Udacity & AWS Certified Course" },
    ],
  },
  {
    title: "Data Science & Analytics",
    description: "Statistical modeling, exploratory data analysis, and manipulation libraries.",
    skills: [
      { name: "Pandas & NumPy", provenIn: "Data Science Sales Dashboard" },
      { name: "Scikit-Learn", provenIn: "Fraud Detection & Attendance Pipelines" },
      { name: "PyTorch & Ultralytics", provenIn: "YOLOv8 Banknote Detector" },
      { name: "Matplotlib & Seaborn", provenIn: "Exploratory Retail Sales Visualizations" },
      { name: "Power BI & Business Intelligence", provenIn: "Cardiff Met CIS6027 E-commerce Analytics" },
      { name: "Feature Engineering & Scaling", provenIn: "Financial Anomaly Modeling" },
    ],
  },
  {
    title: "Software Engineering & Architecture",
    description: "Disciplined development practices, design patterns, and clean code principles.",
    skills: [
      { name: "OOP & SOLID Design Principles", provenIn: "Sales Analysis Dashboard (Factory/Observer)" },
      { name: "Automated Unit Testing (`unittest`)", provenIn: "Sales Dashboard Test Suite" },
      { name: "Streamlit UI Development", provenIn: "NOIR Downloader, Currency Detector Testing" },
      { name: "RESTful API Integration", provenIn: "Full-Stack Client-Server Applications" },
      { name: "Git & Version Control", provenIn: "GitHub Repositories, Clean Commit History" },
      { name: "FFmpeg Stream Muxing", provenIn: "NOIR Downloader Media Engine" },
    ],
  },
  {
    title: "Embedded, Cloud & IoT",
    description: "Physical computing, sensor integration, and cloud provider platforms.",
    skills: [
      { name: "ESP32 & ESP8266 Microcontrollers", provenIn: "IoT Smart Door Lock System" },
      { name: "RFID Access Control (MFRC522)", provenIn: "Smart Door Lock Hardware" },
      { name: "Blynk IoT Cloud Platform", provenIn: "Remote Mobile Access & Status Sync" },
      { name: "AWS Cloud Fundamentals", provenIn: "AWS Educate & Udacity Generative AI" },
      { name: "Hardware Diagnostics & Repair", provenIn: "BCAS PC Clinic Volunteer Specialist" },
    ],
  },
];
