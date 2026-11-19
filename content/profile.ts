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
    huggingface: string;
    academia?: string;
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
  role: "Data Science Student",
  positioning: "Data Science student at ICBT Campus pursuing a BSc (Hons) Data Science (Top-Up) delivered through Cardiff Metropolitan University. I build applied AI, computer vision models, and intelligent systems with empirical rigor.",
  summary:
    "Data Science student at ICBT Campus, pursuing a BSc (Hons) Data Science (Top-Up) delivered through Cardiff Metropolitan University. Supported by a completed Pearson BTEC HND in Software Engineering, Merit. Specializing in computer vision pipelines (YOLOv8 99.2% mAP), empirical machine learning validation, offline voice automation, and data analytics architectures.",
  location: "Addalaichenai & Colombo, Sri Lanka",
  email: "mohamedriham93@gmail.com",
  secondaryEmail: "mohamedrihamofficial@gmail.com",
  cvPath: "/Mohamed_Riham_CV.pdf",
  languages: ["English", "Tamil"],
  socials: {
    github: "https://github.com/mohamed-riham",
    linkedin: "https://www.linkedin.com/in/mohamedriham",
    dev: "https://dev.to/mohamed-riham",
    medium: "https://medium.com/@mohamed-riham",
    instagram: "https://www.instagram.com/_mohamed_riham/",
    huggingface: "https://huggingface.co/mohamedriham",
    academia: "https://cleverchecklist.academia.edu/mohamedriham",
  },
  stats: [
    {
      value: "99.2%",
      label: "Model mAP@50",
      sublabel: "Verified YOLOv8n currency detector",
    },
    {
      value: "284,807",
      label: "Transactions Analyzed",
      sublabel: "Comparative fraud research (492 frauds, 0.172%)",
    },
    {
      value: "Pearson",
      label: "BTEC HND",
      sublabel: "Software Engineering, Merit",
    },
    {
      value: "1,000+",
      label: "Annotated Images",
      sublabel: "Custom Sri Lankan banknote dataset",
    },
  ],
};
