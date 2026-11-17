import type { Metadata } from "next";
import { Manrope, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/who-is-riham" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-riham.github.io/who-is-riham"),
  title: {
    default: "Mohamed Riham (Riham) | Who is Mohamed Riham? — Official Portfolio",
    template: "%s | Mohamed Riham (Riham)",
  },
  description:
    "Who is Mohamed Riham? Mohamed Riham (also known as Riham) is a Data Science Undergraduate at Cardiff Metropolitan University / ICBT Campus. Creator of YOLOv8 Currency Detector (99.2% mAP), EDITH Voice AI, & published Big Data researcher.",
  keywords: [
    "Mohamed Riham",
    "Riham",
    "who is riham",
    "who is mohamed riham",
    "who is riham sri lanka",
    "who is mohamed riham sri lanka",
    "Mohamed Ansar Mohamed Riham",
    "M. Riham",
    "M. A. M. Riham",
    "Riham Data Science",
    "Mohamed Riham Portfolio",
    "Mohamed Riham AI",
    "Mohamed Riham Cardiff Metropolitan University",
    "Mohamed Riham ICBT Campus",
    "Mohamed Riham Sri Lanka",
    "Mohamed Riham GitHub",
    "Mohamed Riham LinkedIn",
    "Mohamed Riham HuggingFace",
    "Sri Lankan Currency Detector YOLOv8",
    "EDITH Assistant Mohamed Riham",
    "Credit Card Fraud Detection Big Data Mohamed Riham",
    "Automated Student Attendance Face Recognition",
    "Azirah Horror Game Mohamed Riham",
  ],
  authors: [{ name: "Mohamed Riham", url: "https://mohamed-riham.github.io/who-is-riham/" }],
  creator: "Mohamed Riham",
  publisher: "Mohamed Riham",
  alternates: {
    canonical: "https://mohamed-riham.github.io/who-is-riham/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Mohamed",
    lastName: "Riham",
    username: "mohamed-riham",
    gender: "male",
    title: "Who is Mohamed Riham? (Riham) | Data Science Undergraduate & AI Systems",
    description:
      "Official portfolio and personal dossier of Mohamed Riham (Riham). Data Science Undergraduate at Cardiff Met / ICBT Campus, creator of YOLOv8 Currency Detector, EDITH Voice AI, & published Big Data researcher.",
    url: "https://mohamed-riham.github.io/who-is-riham/",
    siteName: "Who is Mohamed Riham? — Official Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham (Riham) — Data Science Undergraduate & AI Systems",
        type: "image/png",
      },
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image-square.png",
        width: 600,
        height: 600,
        alt: "Mohamed Riham (Riham) — Data Science Undergraduate (Square Portrait)",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who is Mohamed Riham? (Riham) | Data Science & AI Portfolio",
    description:
      "Who is Mohamed Riham? Data Science undergraduate at Cardiff Met / ICBT Campus. Creator of Sri Lankan Currency Detector (YOLOv8 99.2% mAP), EDITH local voice automation & Big Data research.",
    site: "@_mohamed_riham",
    creator: "@_mohamed_riham",
    images: ["https://mohamed-riham.github.io/who-is-riham/og-image.png"],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/icon.png`, type: "image/png" },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${basePath}/manifest.json`,
  other: {
    subject: "Who is Mohamed Riham? Portfolio and Research Dossier of Data Science Undergraduate Mohamed Riham",
    author: "Mohamed Riham",
    owner: "Mohamed Riham",
    designer: "Mohamed Riham",
    "reply-to": "mohamedriham93@gmail.com",
    "identifier-URL": "https://mohamed-riham.github.io/who-is-riham/",
    directory: "submission",
    category: "Data Science, Artificial Intelligence, Software Engineering, Research",
    coverage: "Worldwide",
    distribution: "Global",
    rating: "General",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#website",
        url: "https://mohamed-riham.github.io/who-is-riham/",
        name: "Who is Mohamed Riham? | Official Portfolio",
        alternateName: [
          "Mohamed Riham",
          "Riham",
          "Who is Riham",
          "Who is Mohamed Riham",
          "Mohamed Riham Portfolio",
          "who-is-riham",
        ],
        description:
          "Official personal dossier and engineering portfolio of Mohamed Riham, Data Science Undergraduate at Cardiff Metropolitan University / ICBT Campus.",
        publisher: {
          "@id": "https://mohamed-riham.github.io/who-is-riham/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#webpage",
        url: "https://mohamed-riham.github.io/who-is-riham/",
        name: "Who is Mohamed Riham? (Riham) — Data Science Undergraduate Portfolio & Dossier",
        isPartOf: {
          "@id": "https://mohamed-riham.github.io/who-is-riham/#website",
        },
        about: {
          "@id": "https://mohamed-riham.github.io/who-is-riham/#person",
        },
        mainEntity: {
          "@id": "https://mohamed-riham.github.io/who-is-riham/#person",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
          width: 1200,
          height: 630,
        },
        breadcrumb: {
          "@id": "https://mohamed-riham.github.io/who-is-riham/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mohamed-riham.github.io/who-is-riham/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Who is Mohamed Riham?",
            item: "https://mohamed-riham.github.io/who-is-riham/#about",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#person",
        name: "Mohamed Riham",
        givenName: "Mohamed",
        familyName: "Riham",
        additionalName: "Ansar",
        alternateName: [
          "Riham",
          "who is riham",
          "who is mohamed riham",
          "Mohamed Ansar Mohamed Riham",
          "M. Riham",
          "M. A. M. Riham",
          "MR",
        ],
        gender: "https://schema.org/Male",
        nationality: {
          "@type": "Country",
          name: "Sri Lanka",
        },
        homeLocation: {
          "@type": "Place",
          name: "Addalaichenai, Sri Lanka",
        },
        workLocation: {
          "@type": "Place",
          name: "Colombo, Sri Lanka",
        },
        jobTitle: "Data Science Undergraduate",
        description:
          "Mohamed Riham (commonly known as Riham) is a final-year Data Science Undergraduate at Cardiff Metropolitan University and ICBT Campus. He specializes in practical Artificial Intelligence, Computer Vision (YOLOv8 99.2% mAP), offline voice automation (EDITH), and Big Data fraud analytics.",
        disambiguatingDescription:
          "Mohamed Riham is a Sri Lankan Data Science undergraduate, applied AI developer, and machine learning researcher at Cardiff Metropolitan University / ICBT Campus.",
        url: "https://mohamed-riham.github.io/who-is-riham/",
        image: [
          "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-portrait-cutout.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-colombo-portrait.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-lifestyle.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/random/colombo-urban-candid.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/random/addalaichenai-motorbike-candid.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/random/motorbike-sunset-portrait.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/random/formal-sunglasses-portrait.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/random/diploma-awards-convocation.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-campus.webp",
          "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-diploma.webp",
        ],
        email: "mailto:mohamedriham93@gmail.com",
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "BCAS Campus Kalmunai",
            url: "https://bcas.lk",
          },
        ],
        affiliation: [
          {
            "@type": "EducationalOrganization",
            name: "Cardiff Metropolitan University",
            url: "https://www.cardiffmet.ac.uk",
          },
          {
            "@type": "EducationalOrganization",
            name: "ICBT Campus",
            url: "https://icbt.lk",
          },
        ],
        sameAs: [
          "https://github.com/mohamed-riham",
          "https://www.linkedin.com/in/mohamedriham",
          "https://www.instagram.com/_mohamed_riham/",
          "https://huggingface.co/mohamedriham",
          "https://dev.to/mohamed-riham",
          "https://medium.com/@mohamed-riham",
          "https://cleverchecklist.academia.edu/mohamedriham",
          "https://www.academia.edu/129361586/A_Comparative_Study_of_Random_Forest_and_XGBoost_for_Detecting_Credit_Card_Fraud_Transactions_using_Big_Data",
          "https://www.academia.edu/129361519/Automated_Student_Attendance_System_Using_Face_Recognition",
        ],
        knowsAbout: [
          "Data Science",
          "Artificial Intelligence",
          "Machine Learning",
          "Computer Vision",
          "YOLOv8",
          "Deep Learning",
          "Python",
          "Power BI",
          "Big Data Analytics",
          "Credit Card Fraud Detection",
          "Voice Automation Systems",
          "Internet of Things (IoT)",
          "Unity Game Engine",
          "C#",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Mohamed Riham?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mohamed Riham (commonly known as Riham) is a final-year Data Science Undergraduate at Cardiff Metropolitan University / ICBT Campus in Sri Lanka. He is an applied Artificial Intelligence developer and machine learning researcher recognized for his work in computer vision (YOLOv8 99.2% mAP), offline voice automation (EDITH), and big data fraud detection research.",
            },
          },
          {
            "@type": "Question",
            name: "Who is Riham?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Riham refers to Mohamed Riham, a Sri Lankan Data Science undergraduate at Cardiff Metropolitan University / ICBT Campus with a Pearson BTEC Higher National Diploma in Software Engineering (11 Distinctions). He is the creator of the Sri Lankan Currency Detection model on HuggingFace and the EDITH local voice assistant system.",
            },
          },
          {
            "@type": "Question",
            name: "What research papers and projects has Mohamed Riham published?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mohamed Riham has published big data research including 'A Comparative Study of Random Forest and XGBoost for Detecting Credit Card Fraud Transactions using Big Data' and 'Automated Student Attendance System Using Face Recognition'. His engineering projects include the Sri Lankan Currency Detector on HuggingFace (YOLOv8 99.2% mAP), EDITH local-first voice automation assistant, and Smart Home Door Lock IoT telemetry.",
            },
          },
          {
            "@type": "Question",
            name: "What is the official website of Mohamed Riham?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The official portfolio and personal dossier of Mohamed Riham is hosted at https://mohamed-riham.github.io/who-is-riham/.",
            },
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#portrait-cutout",
        name: "Mohamed Riham (Riham) — Flagship Editorial Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-portrait-cutout.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-portrait-cutout.webp",
        caption: "Mohamed Riham (Riham) Data Science Undergraduate at Cardiff Metropolitan University / ICBT Campus",
        creditText: "Mohamed Riham",
        creator: {
          "@type": "Person",
          name: "Mohamed Riham",
        },
        copyrightNotice: "© Mohamed Riham",
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        acquireLicensePage: "https://mohamed-riham.github.io/who-is-riham/#contact",
        representativeOfPage: true,
      },
      {
        "@type": "ImageObject",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#candid-urban",
        name: "Mohamed Riham (Riham) — Colombo Urban Candid Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/colombo-urban-candid.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/colombo-urban-candid.webp",
        caption: "Mohamed Riham authentic urban portrait in Colombo, Sri Lanka",
        creditText: "Mohamed Riham",
        creator: {
          "@type": "Person",
          name: "Mohamed Riham",
        },
        copyrightNotice: "© Mohamed Riham",
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        acquireLicensePage: "https://mohamed-riham.github.io/who-is-riham/#contact",
      },
      {
        "@type": "ImageObject",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#candid-motorbike",
        name: "Mohamed Riham (Riham) — Addalaichenai Motorbike Candid Photograph",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/addalaichenai-motorbike-candid.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/addalaichenai-motorbike-candid.webp",
        caption: "Mohamed Riham candid with motorbike in Addalaichenai, Sri Lanka",
        creditText: "Mohamed Riham",
        creator: {
          "@type": "Person",
          name: "Mohamed Riham",
        },
        copyrightNotice: "© Mohamed Riham",
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        acquireLicensePage: "https://mohamed-riham.github.io/who-is-riham/#contact",
      },
      {
        "@type": "ImageObject",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#convocation-photo",
        name: "Mohamed Riham (Riham) — Graduation Awards Convocation Ceremony",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/diploma-awards-convocation.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/diploma-awards-convocation.webp",
        caption: "Mohamed Riham convocation ceremony stage in Kalmunai, Sri Lanka",
        creditText: "Mohamed Riham",
        creator: {
          "@type": "Person",
          name: "Mohamed Riham",
        },
        copyrightNotice: "© Mohamed Riham",
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        acquireLicensePage: "https://mohamed-riham.github.io/who-is-riham/#contact",
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#080D18] text-[#F2F0E9] font-sans antialiased selection:bg-[#63DCC6]/20 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
