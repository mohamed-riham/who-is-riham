export interface Profile {
  name: string;
  legalName: string;
  role: string;
  positioning: string;
  summary: string;
  location: string;
  email: string;
  secondaryEmail: string;
  cvPath: string;
  languages: string[];
  socials: {
    github: string;
    linkedin: string;
    dev: string;
    medium: string;
    instagram: string;
  };
  stats: {
    value: string;
    label: string;
    sublabel: string;
  }[];
}

export const profile: Profile = {
  name: "Mohamed Riham",
  legalName: "Mohamed Ansar Mohamed Riham",
  role: "Data Science Undergraduate",
  positioning: "I build practical AI, machine learning, computer vision, and intelligent systems that solve real-world problems.",
  summary:
    "Final-year BSc (Hons) Data Science undergraduate delivered through Cardiff Metropolitan University at ICBT Campus, holding a Pearson BTEC Higher National Diploma in Software Engineering with Merit. Specializing in computer vision pipelines, localized offline intelligent automation, edge computing, and data analytics architectures.",
  location: "Addalaichenai & Dehiwala, Colombo, Sri Lanka",
  email: "mohamedriham93@gmail.com",
  secondaryEmail: "mohamedrihamofficial@gmail.com",
  cvPath: "/cv.pdf",
  languages: ["English", "Tamil"],
  socials: {
    github: "https://github.com/mohamed-riham",
    linkedin: "https://www.linkedin.com/in/mohamedriham",
    dev: "https://dev.to/mohamed-riham",
    medium: "https://medium.com/@mohamed-riham",
    instagram: "https://instagram.com/_mohamed_riham",
  },
  stats: [
    {
      value: "99.2%",
      label: "Model mAP@50",
      sublabel: "Verified YOLOv8n currency detector",
    },
    {
      value: "1M+",
      label: "Transactions Analyzed",
      sublabel: "Comparative fraud detection research",
    },
    {
      value: "11",
      label: "HND Distinctions",
      sublabel: "Pearson BTEC Software Engineering",
    },
    {
      value: "1,000+",
      label: "Annotated Images",
      sublabel: "Custom Sri Lankan banknote dataset",
    },
  ],
};
