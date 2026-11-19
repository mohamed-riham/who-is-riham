export interface EducationItem {
  degree: string;
  institution: string;
  awardingBody: string;
  period: string;
  location: string;
  status: "In Progress" | "Completed";
  grade?: string;
  modules: string[];
  description: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "BSc (Hons) Data Science (Top-Up)",
    institution: "ICBT Campus",
    awardingBody: "Cardiff Metropolitan University",
    period: "Nov 2025 – Expected Jun 2027",
    location: "Colombo, Sri Lanka",
    status: "In Progress",
    description:
      "Studied at ICBT Campus and delivered through Cardiff Metropolitan University. Advanced undergraduate curriculum specializing in machine learning algorithms, deep neural network architectures, statistical hypothesis testing, and enterprise business intelligence pipelines.",
    modules: [
      "Machine Learning & Statistical Modeling",
      "Deep Learning & Computer Vision",
      "Business Intelligence & Analytics (CIS6027)",
      "Big Data Architectures & Pipelines",
      "Applied Research Methodologies",
    ],
  },
  {
    degree: "Pearson BTEC HND in Software Engineering",
    institution: "BCAS Campus Kalmunai",
    awardingBody: "Pearson, UK",
    period: "Dec 2023 – Mar 2025",
    location: "Kalmunai, Sri Lanka",
    status: "Completed",
    grade: "Merit",
    description:
      "Pearson BTEC Higher National Diploma in Software Engineering completed with Merit, covering software architecture, object-oriented systems, database normalization, algorithms, and security.",
    modules: [
      "Programming",
      "Data Structures & Algorithms",
      "Applied Programming and Design Principles",
      "Database Design & Development",
      "Security",
      "Software Development Lifecycles",
      "Planning a Computing Project",
      "Internet of Things",
      "Networking",
      "Professional Practice",
      "Computing Research Project",
      "Discrete Maths",
    ],
  },
  {
    degree: "Diploma in Information Technology",
    institution: "BCAS Campus Kalmunai",
    awardingBody: "Pearson Assured, UK",
    period: "Jul 2023 – Nov 2023 (Issued May 2024)",
    location: "Kalmunai, Sri Lanka",
    status: "Completed",
    description: "Foundational diploma covering computer architecture, database management, and basic programming.",
    modules: ["Fundamentals of Programming", "Database Systems", "IT Infrastructure"],
  },
  {
    degree: "Certificate in English Language",
    institution: "BCAS Campus Kalmunai",
    awardingBody: "Pearson Assured, UK",
    period: "Completed May 2024",
    location: "Kalmunai, Sri Lanka",
    status: "Completed",
    description: "Professional English language certification covering technical communication and academic composition.",
    modules: ["Technical Writing", "Academic Composition", "Verbal Presentation"],
  },
];
