export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  type: "Technical" | "Honors" | "Academic";
  description: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity (in partnership with AWS)",
    date: "August 3, 2025",
    credentialId: "1282108e-413f-11f0-be80-6ba7413cea00",
    credentialUrl: "https://www.udacity.com/certificate/e/1282108e-413f-11f0-be80-6ba7413cea00",
    type: "Technical",
    description: "Verified course completion covering large language model fundamentals, AWS generative AI services, prompt engineering, and foundation model fine-tuning.",
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2024 / 2025",
    type: "Technical",
    description: "Cloud-based machine learning fundamentals covering model training lifecycles, data preparation, Amazon SageMaker workflows, and inference optimization.",
  },
  {
    title: "Certificate of Appreciation — PC CLINIC",
    issuer: "BCAS Campus Kalmunai",
    date: "2024",
    type: "Honors",
    description: "Awarded in sincere appreciation for outstanding dedication, voluntary technical contributions, and teamwork in hardware diagnostics and system restoration.",
  },
  {
    title: "Pearson Assured Diploma in Information Technology",
    issuer: "Pearson, UK / BCAS Campus",
    date: "May 18, 2024",
    credentialId: "75803 :JHM63 :RG79400",
    type: "Academic",
    description: "Internationally recognized qualification in computing fundamentals, systems analysis, and enterprise software concepts.",
  },
  {
    title: "Pearson Assured Certificate in English",
    issuer: "Pearson, UK / BCAS Campus",
    date: "May 25, 2024",
    credentialId: "75803 :JHM64 :SH59625",
    type: "Academic",
    description: "Certification in professional written and spoken English proficiency for international academic and corporate settings.",
  },
];
