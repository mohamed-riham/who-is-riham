export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Work" | "Leadership" | "Volunteering";
  summary: string;
  bullets: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Web Designer & Web Developer",
    organization: "Axis Academy",
    location: "Addalaichenai, Sri Lanka",
    period: "Jan 2025 – Jul 2025 (7 months)",
    type: "Work",
    summary:
      "Served as sole full-stack developer responsible for the architectural design, development, optimization, and deployment of the academy's official online presence.",
    bullets: [
      "Engineered and launched responsive production website with course catalogs, student inquiry workflows, and administrative dashboards using HTML5, CSS3, JavaScript, and PHP.",
      "Optimized website load times through custom image compression, script minification, and clean responsive UI architecture.",
      "Configured web hosting environments, custom DNS domain routing, on-page SEO meta-tags, and secure database schemas.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "cPanel", "SEO"],
  },
  {
    role: "Batch Representative",
    organization: "BCAS IT Society (BITS)",
    location: "Kalmunai, Sri Lanka",
    period: "May 2024 – Apr 2025",
    type: "Leadership",
    summary:
      "Elected student leader representing software engineering peers across faculty boards and technical society initiatives.",
    bullets: [
      "Liaised between the student body and academic faculty, resolving syllabus bottlenecks and scheduling academic reviews.",
      "Organized student coding workshops, algorithmic problem-solving sessions, and peer programming meetups.",
      "Increased student batch engagement in academic hackathons and competitive tech showcases.",
    ],
    tech: ["Team Leadership", "Event Coordination", "Technical Mentorship", "Communication"],
  },
  {
    role: "Volunteer Hardware Specialist",
    organization: "BCAS PC Clinic",
    location: "Kalmunai, Sri Lanka",
    period: "Oct 2024 – 2025",
    type: "Volunteering",
    summary:
      "Awarded Certificate of Appreciation for dedicated technical service repairing and optimizing campus computing hardware.",
    bullets: [
      "Diagnosed and resolved hardware faults, memory bottlenecks, motherboard issues, and power supply failures for student PCs.",
      "Conducted clean operating system installations (Windows & Linux), driver optimizations, and BIOS updates.",
      "Trained junior members on preventive hardware maintenance and electronic diagnostic protocols.",
    ],
    tech: ["Hardware Diagnostics", "OS Configuration", "Component Upgrades", "Bench Testing"],
  },
];
