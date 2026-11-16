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
    degree: "BSc (Hons) in Data Science",
    institution: "ICBT Campus Colombo",
    awardingBody: "Cardiff Metropolitan University, UK",
    period: "Nov 2025 – Expected Jun 2027",
    location: "Colombo, Sri Lanka",
    status: "In Progress",
    description:
      "Advanced undergraduate curriculum specializing in machine learning algorithms, deep neural network architectures, statistical hypothesis testing, and enterprise business intelligence pipelines.",
    modules: [
      "Machine Learning & Statistical Modeling",
      "Deep Learning & Computer Vision",
      "Business Intelligence & Analytics (CIS6027)",
      "Big Data Architectures & Pipelines",
      "Applied Research Methodologies",
    ],
  },
  {
    degree: "BTEC Higher National Diploma in Computing (Software Engineering)",
    institution: "BCAS Campus Kalmunai",
    awardingBody: "Pearson, UK",
    period: "Dec 2023 – Mar 2025",
    location: "Kalmunai, Sri Lanka",
    status: "Completed",
    grade: "Merit (11 Distinctions, 4 Merits across 15 Units)",
    description:
      "Comprehensive British higher education computing program covering rigorous software architecture, object-oriented systems, database normalization, algorithms, and security.",
    modules: [
      "Programming (Distinction)",
      "Data Structures & Algorithms (Distinction)",
      "Applied Programming and Design Principles (Distinction)",
      "Database Design & Development (Distinction)",
      "Security (Distinction)",
      "Software Development Lifecycles (Distinction)",
      "Planning a Computing Project (Distinction)",
      "Internet of Things (Distinction)",
      "Networking (Distinction)",
      "Professional Practice (Distinction)",
      "Computing Research Project (Merit)",
      "Discrete Maths (Merit)",
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
