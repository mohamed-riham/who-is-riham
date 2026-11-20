import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Cpu,
  Code2,
  ExternalLink,
  Video,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, HuggingFaceIcon, InstagramIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: {
    absolute: "Who Is Riham? | Sri Lankan Data Science Student",
  },
  description:
    "Discover Riham, the name commonly used by Mohamed Riham, a Sri Lankan Data Science student at ICBT Campus with interests in artificial intelligence, machine learning, computer vision, and technology.",
  alternates: {
    canonical: "https://mohamed-riham.github.io/who-is-riham/riham/",
  },
  openGraph: {
    title: "Who Is Riham? | Official Identity Profile",
    description:
      "Discover Riham, a Sri Lankan Data Science student with interests in AI, machine learning, computer vision, and technology.",
    url: "https://mohamed-riham.github.io/who-is-riham/riham/",
    type: "profile",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-portrait.webp",
        width: 1122,
        height: 1326,
        alt: "Riham — Mohamed Riham, Sri Lankan Data Science Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Is Riham? | Official Identity Profile",
    description:
      "Discover Riham, a Sri Lankan Data Science student with interests in AI, machine learning, computer vision, and technology.",
    images: ["https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-portrait.webp"],
  },
};

const VERIFIED_PROJECTS = [
  {
    slug: "sri-lankan-currency-detector",
    title: "Sri Lankan Currency Detector",
    tagline: "YOLOv8 Edge Computer Vision (99.20% mAP@50)",
    summary:
      "Assistive AI system engineered to classify six Sri Lankan banknote denominations in real time with text-to-speech feedback for visually impaired users.",
    category: "Computer Vision & Edge AI",
    badge: "99.20% mAP@50",
    videoEmbed: "https://www.youtube-nocookie.com/embed/IeytAWt0NNw",
  },
  {
    slug: "edith-voice-assistant",
    title: "EDITH Offline Voice Assistant",
    tagline: "Privacy-Preserving Edge Automation & Speech Processing",
    summary:
      "Locally executed desktop automation agent designed to run system tasks, speech recognition, and queries with zero cloud telemetry.",
    category: "Intelligent Automation",
    badge: "100% Offline",
    videoEmbed: null,
  },
  {
    slug: "face-recognition-attendance-system",
    title: "Face Recognition Attendance System",
    tagline: "128D Deep Metric Embeddings & Anti-Spoofing",
    summary:
      "Automated attendance tracking using dlib 128-dimensional facial encodings, real-time camera inference, and automated timestamp logging.",
    category: "Computer Vision",
    badge: "128D Encodings",
    videoEmbed: "https://www.youtube-nocookie.com/embed/s1kjEoHqRIo",
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection Pipeline",
    tagline: "Big Data Anomaly Detection on 284,807 Transactions",
    summary:
      "High-precision classification pipeline evaluating severely imbalanced financial data using Random Forest, XGBoost, and SMOTE resamplers.",
    category: "Machine Learning & Big Data",
    badge: "99.95% ROC-AUC",
    videoEmbed: null,
  },
  {
    slug: "real-estate-tokenization-dapp",
    title: "Real Estate Tokenization DApp",
    tagline: "Solidity ERC-20 / ERC-721 Property Fractionalization",
    summary:
      "Decentralized property investment protocol implementing audited smart contracts, MetaMask wallet integration, and automated dividend distribution.",
    category: "Blockchain & Web3",
    badge: "EVM Smart Contracts",
    videoEmbed: null,
  },
  {
    slug: "smart-home-door-lock-system",
    title: "IoT Smart Home Door Lock System",
    tagline: "RFID Authentication & Hardware Telemetry",
    summary:
      "Embedded access control system integrating ESP8266/ESP32 microcontrollers with MFRC522 RFID readers, servo actuation, and cloud alerts.",
    category: "IoT & Embedded Systems",
    badge: "Hardware Prototype",
    videoEmbed: "https://www.youtube-nocookie.com/embed/S1Fof4P0N-s",
  },
];

const TECHNICAL_DOMAINS = [
  {
    title: "Artificial Intelligence & ML",
    skills: ["Supervised Learning", "Deep Neural Networks", "Scikit-Learn", "PyTorch", "Model Evaluation", "Anomaly Detection"],
  },
  {
    title: "Computer Vision",
    skills: ["YOLOv8 Object Detection", "128D Face Recognition", "OpenCV", "Edge Inference", "Transfer Learning", "Image Augmentation"],
  },
  {
    title: "Data Science & Analytics",
    skills: ["Pandas & NumPy", "Exploratory Data Analysis", "Feature Engineering", "Power BI Dashboards", "Statistical Modeling", "Big Data"],
  },
  {
    title: "Software & Systems",
    skills: ["Python", "TypeScript / Next.js", "C# / Unity", "SQL / Database Normalization", "IoT / Microcontrollers", "Git & CI/CD"],
  },
];

const VERIFIED_PROFILES = [
  { name: "GitHub", url: "https://github.com/mohamed-riham", handle: "@mohamed-riham", note: "Source code & repositories" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mohamedriham", handle: "mohamedriham", note: "Professional network" },
  { name: "Hugging Face", url: "https://huggingface.co/mohamedriham", handle: "@mohamedriham", note: "ML models & datasets" },
  { name: "DEV Community", url: "https://dev.to/mohamed-riham", handle: "mohamed-riham", note: "Technical articles" },
  { name: "Medium", url: "https://medium.com/@mohamed-riham", handle: "@mohamed-riham", note: "Engineering write-ups" },
  { name: "Instagram", url: "https://www.instagram.com/_mohamed_riham/", handle: "@_mohamed_riham", note: "Public social profile" },
  { name: "Academia.edu", url: "https://cleverchecklist.academia.edu/mohamedriham", handle: "mohamedriham", note: "Academic profile" },
];

export default function RihamIdentityPage() {
  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";
  const canonicalUrl = `${baseUrl}/riham/`;

  const rihamJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Who Is Riham? | Sri Lankan Data Science Student",
        description:
          "Official identity profile and semantic disambiguation for Riham (Mohamed Riham), a Sri Lankan Data Science undergraduate at ICBT Campus / Cardiff Metropolitan University.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        mainEntity: {
          "@id": `${baseUrl}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#portrait-primary`,
          url: `${baseUrl}/images/profile/mohamed-riham-portrait.webp`,
          contentUrl: `${baseUrl}/images/profile/mohamed-riham-portrait.webp`,
          caption: "Riham (Mohamed Riham) — Sri Lankan Data Science Student",
          width: 1122,
          height: 1326,
        },
        breadcrumb: {
          "@id": `${canonicalUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Who Is Riham?",
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "VideoObject",
        "@id": `${canonicalUrl}#video-currency`,
        name: "Sri Lankan Currency Detector (Assistive AI) — YOLOv8 Inference Demo",
        description:
          "Real-time edge computer vision model classifying 6 Sri Lankan banknote denominations with 99.20% mAP@50 and automated audio feedback developed by Riham.",
        thumbnailUrl: `${baseUrl}/og-image.png`,
        uploadDate: "2025-01-01T00:00:00Z",
        embedUrl: "https://www.youtube-nocookie.com/embed/IeytAWt0NNw",
        creator: {
          "@id": `${baseUrl}/#person`,
        },
      },
      {
        "@type": "VideoObject",
        "@id": `${canonicalUrl}#video-attendance`,
        name: "Face Recognition Attendance System Demonstration",
        description:
          "Automated student attendance evaluation loop utilizing 128D facial encodings developed by Riham.",
        thumbnailUrl: `${baseUrl}/og-image.png`,
        uploadDate: "2024-06-01T00:00:00Z",
        embedUrl: "https://www.youtube-nocookie.com/embed/s1kjEoHqRIo",
        creator: {
          "@id": `${baseUrl}/#person`,
        },
      },
      {
        "@type": "VideoObject",
        "@id": `${canonicalUrl}#video-iot`,
        name: "IoT Smart Home Door Lock System Demonstration",
        description:
          "Hardware prototype integrating ESP microcontrollers with RFID authentication and cloud telemetry developed by Riham.",
        thumbnailUrl: `${baseUrl}/og-image.png`,
        uploadDate: "2024-05-01T00:00:00Z",
        embedUrl: "https://www.youtube-nocookie.com/embed/S1Fof4P0N-s",
        creator: {
          "@id": `${baseUrl}/#person`,
        },
      },
    ],
  };

  return (
    <article className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-transparent text-[#D3C29F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rihamJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A09383] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO HOME</span>
          </Link>
          <div className="font-mono text-[11px] text-[#DEA355] flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#DEA355]" />
            <span>IDENTITY CLARIFICATION & DISAMBIGUATION</span>
          </div>
        </div>

        {/* Hero Header Block */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C43E17]/30 bg-[#C43E17]/10 text-xs font-mono text-[#C43E17]">
            <span>SRI LANKAN DATA SCIENCE STUDENT</span>
            <span>·</span>
            <span>OFFICIAL PROFILE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
            Who Is Riham?
          </h1>
          <p className="text-xl sm:text-2xl text-[#DEA355] font-serif italic max-w-3xl leading-relaxed">
            A verified guide to the identity, academic background, and technical engineering work of Riham from Sri Lanka.
          </p>
        </header>

        {/* Section 1: Who Is Riham? (Direct Answer) */}
        <section className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0E0705]/80 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DEA355] tracking-wider uppercase">
            <span>Section 01</span>
            <span>//</span>
            <span>Direct Identity Clarification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
            Riham is Mohamed Riham
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#D3C29F]">
            <p>
              <strong>Riham</strong> is the name commonly used by <strong>Mohamed Riham</strong> (legal name <em>Mohamed Ansar Mohamed Riham</em>), a Sri Lankan Data Science student at ICBT Campus. He is currently pursuing a BSc (Hons) in Data Science (Top-Up) awarded by Cardiff Metropolitan University, UK.
            </p>
            <p>
              When people search for <em>&ldquo;Who is Riham?&rdquo;</em>, <em>&ldquo;Riham from Sri Lanka&rdquo;</em>, or <em>&ldquo;Riham Data Science&rdquo;</em>, they are referring to this official portfolio and dossier representing his work in practical artificial intelligence, computer vision, data analytics, and software engineering.
            </p>
          </div>

          {/* Quick Identity Ledger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-sm font-mono">
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
              <span className="text-[#A09383] text-xs uppercase block">Publicly Used Name</span>
              <span className="text-white font-semibold">Riham</span>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
              <span className="text-[#A09383] text-xs uppercase block">Full Registered Name</span>
              <span className="text-white font-semibold">Mohamed Riham</span>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
              <span className="text-[#A09383] text-xs uppercase block">Academic Focus</span>
              <span className="text-white font-semibold">BSc (Hons) Data Science</span>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
              <span className="text-[#A09383] text-xs uppercase block">Country of Residence</span>
              <span className="text-white font-semibold">Sri Lanka</span>
            </div>
          </div>
        </section>

        {/* Section 2: Visual Identity & Sri Lankan Roots */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#160B08] shadow-2xl">
              <Image
                src="/images/profile/mohamed-riham-portrait.webp"
                alt="Riham (Mohamed Riham) — Authentic portrait of Sri Lankan Data Science student"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-3 text-center text-xs font-mono text-[#A09383]">
              Riham — Academic Candidate Portrait (Cardiff Met / ICBT Campus)
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#DEA355] tracking-wider uppercase">
              <span>Section 02</span>
              <span>//</span>
              <span>Geographic Context</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Riham from Sri Lanka
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#D3C29F]">
              <p>
                Riham is based in <strong>Sri Lanka</strong>, maintaining roots in both <strong>Addalaichenai</strong> (Eastern Province) and <strong>Colombo</strong> (Western Province), where he attends ICBT Campus.
              </p>
              <p>
                His engineering philosophy is shaped by direct practical problem-solving in the Sri Lankan context. A notable example is his development of the <strong>Sri Lankan Currency Detector</strong>, an assistive edge AI system specifically built to distinguish Sri Lankan Rupee banknotes for visually impaired citizens in the local community.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#A09383]">
              <MapPin className="w-4 h-4 text-[#C43E17]" />
              <span>Addalaichenai &amp; Colombo, Sri Lanka (GMT+5:30)</span>
            </div>
          </div>
        </section>

        {/* Section 3: Academic Background */}
        <section className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0E0705]/80 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DEA355] tracking-wider uppercase">
            <span>Section 03</span>
            <span>//</span>
            <span>Higher Education &amp; Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-[#DEA355]" />
            <span>Riham&apos;s Academic Background</span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">
                  BSc (Hons) Data Science (Top-Up)
                </h3>
                <span className="text-xs font-mono text-[#DEA355]">Nov 2025 – Expected Jun 2027</span>
              </div>
              <p className="text-sm text-[#A09383] font-mono">
                ICBT Campus Colombo (Studied in Sri Lanka) · Awarded by Cardiff Metropolitan University, UK
              </p>
              <p className="text-sm text-[#D3C29F] leading-relaxed">
                Specialized undergraduate degree curriculum covering machine learning algorithms, deep neural network architectures, statistical hypothesis testing, and enterprise business intelligence pipelines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">
                  Pearson BTEC Higher National Diploma in Software Engineering
                </h3>
                <span className="text-xs font-mono text-[#C43E17] font-semibold">Grade: Merit</span>
              </div>
              <p className="text-sm text-[#A09383] font-mono">
                BCAS Campus Kalmunai · Awarded by Pearson, UK (Completed March 2025)
              </p>
              <p className="text-sm text-[#D3C29F] leading-relaxed">
                Comprehensive British software engineering qualification completed with an overall classification of <strong>Merit</strong> (achieving 10 unit-level Distinctions and 5 unit-level Merits across 15 technical units), with comprehensive coverage of algorithms, systems security, database normalization, and discrete mathematics.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: What Is Riham Known For? */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DEA355] tracking-wider uppercase">
            <span>Section 04</span>
            <span>//</span>
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
            <Code2 className="w-7 h-7 text-[#C43E17]" />
            <span>What Is Riham Known For?</span>
          </h2>
          <p className="text-base text-[#D3C29F]">
            Riham has developed and deployed end-to-end technical projects spanning computer vision, offline automation, fraud classification, and decentralized protocols:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {VERIFIED_PROJECTS.map((project) => (
              <div
                key={project.slug}
                className="p-6 rounded-xl border border-white/10 bg-[#0E0705]/80 flex flex-col justify-between space-y-4 hover:border-[#DEA355]/40 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#A09383] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#DEA355]/10 text-[#DEA355] border border-[#DEA355]/20">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-[#DEA355] font-mono">{project.tagline}</p>
                  <p className="text-sm text-[#D3C29F] leading-relaxed pt-1">
                    {project.summary}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C43E17] hover:text-white transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Technical Interests */}
        <section className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0E0705]/80 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DEA355] tracking-wider uppercase">
            <span>Section 05</span>
            <span>//</span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
            <Cpu className="w-7 h-7 text-[#DEA355]" />
            <span>Riham&apos;s Technical Interests</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {TECHNICAL_DOMAINS.map((domain) => (
              <div key={domain.title} className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-3">
                <h3 className="text-base font-bold text-white font-sans">{domain.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#040202] text-[#D3C29F] border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Video Demonstrations */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DEA355] tracking-wider uppercase">
            <span>Section 06</span>
            <span>//</span>
            <span>Demonstrable Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
            <Video className="w-7 h-7 text-[#C43E17]" />
            <span>Verified Video Demonstrations</span>
          </h2>
          <p className="text-base text-[#D3C29F]">
            Watch authentic project walkthroughs demonstrating real-time model inference and hardware prototypes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="rounded-xl border border-white/10 bg-[#0E0705]/80 overflow-hidden space-y-4 p-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/IeytAWt0NNw"
                  title="Sri Lankan Currency Detector Inference Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Sri Lankan Currency Detector</h3>
                <p className="text-xs text-[#A09383]">
                  YOLOv8 real-time inference with voice feedback for visually impaired users.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0E0705]/80 overflow-hidden space-y-4 p-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/s1kjEoHqRIo"
                  title="Face Recognition Attendance System Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Face Recognition Attendance System</h3>
                <p className="text-xs text-[#A09383]">
                  128-dimensional deep metric facial embeddings evaluated against a database.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Official Online Presence */}
        <section className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0E0705]/80 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DEA355] tracking-wider uppercase">
            <span>Section 07</span>
            <span>//</span>
            <span>External Corroboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
            Where Can People Find Riham Online?
          </h2>
          <p className="text-base text-[#D3C29F]">
            Riham maintains verified public accounts across technical code repositories, research archives, and professional networks:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {VERIFIED_PROFILES.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#DEA355]/40 transition-colors flex items-start justify-between group"
              >
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white group-hover:text-[#DEA355] transition-colors">
                    {p.name}
                  </div>
                  <div className="text-xs font-mono text-[#A09383]">{p.handle}</div>
                  <div className="text-[11px] text-[#D3C29F]/70">{p.note}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A09383] group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </section>

        {/* Section 8: Gateway to Full Biography & Internal Discovery */}
        <section className="p-8 sm:p-10 rounded-2xl border border-[#C43E17]/30 bg-gradient-to-br from-[#1A0B07] to-[#0E0705] space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C43E17] tracking-wider uppercase">
            <span>Section 08</span>
            <span>//</span>
            <span>Full Biographical Dossier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-[#DEA355]" />
            <span>More About Mohamed Riham</span>
          </h2>
          <p className="text-base text-[#D3C29F] leading-relaxed max-w-2xl">
            This page provides concise short-name identity disambiguation for <strong>Riham</strong>. For the comprehensive biographical narrative, certified transcripts, student leadership history, and complete systems dossier, visit the official About page:
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C43E17] text-white font-mono text-sm font-semibold hover:bg-[#d6471e] transition-colors shadow-lg"
            >
              <span>Read Full Biography of Mohamed Riham</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-[#D3C29F] font-mono text-sm hover:text-white hover:border-white/30 transition-colors"
            >
              <span>Explore All Projects</span>
            </Link>
            <Link
              href="/media/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-[#D3C29F] font-mono text-sm hover:text-white hover:border-white/30 transition-colors"
            >
              <span>View Verified Photography</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
