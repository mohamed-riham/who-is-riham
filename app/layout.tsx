import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import AtmosphericBackground from "@/components/AtmosphericBackground";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#040202" },
    { media: "(prefers-color-scheme: light)", color: "#040202" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-riham.github.io/who-is-riham"),
  title: {
    default: "Mohamed Riham | Data Science Student, AI & Machine Learning",
    template: "%s | Mohamed Riham",
  },
  description:
    "Explore the official portfolio of Mohamed Riham, a Data Science student at ICBT Campus. Discover his background, AI and machine learning projects, computer vision experiments, technical research, and professional work.",
  keywords: [
    "Mohamed Riham",
    "Riham",
    "Who is Riham?",
    "Who is Mohamed Riham?",
    "Who is Mohamed Ansar Mohamed Riham?",
    "About Mohamed Riham",
    "Tell me about Riham",
    "Who exactly is Riham?",
    "Who is this Mohamed Riham?",
    "Mohamed Riham biography",
    "Mohamed Ansar Mohamed Riham",
    "Ansar Mohamed Riham",
    "Ansar Riham",
    "Mohamed Ansar",
    "Ansar",
    "Mohamed Riham Data Science",
    "Riham Data Science Student",
    "Mohamed Riham ICBT",
    "Mohamed Riham Cardiff Metropolitan University",
    "Mohamed Riham AI",
    "Mohamed Riham Machine Learning",
    "Mohamed Riham Artificial Intelligence",
    "Mohamed Riham Portfolio",
    "Mohamed Riham Projects",
    "Mohamed Riham Sri Lanka",
    "Riham AI Developer",
    "Riham GitHub",
    "Riham LinkedIn",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "googlec670c563eeceb59a",
  },
  openGraph: {
    type: "profile",
    firstName: "Mohamed",
    lastName: "Riham",
    username: "mohamed-riham",
    gender: "male",
    title: "Mohamed Riham | Data Science Student, AI & Machine Learning",
    description:
      "Explore the official portfolio of Mohamed Riham, a Data Science student at ICBT Campus. Discover his background, AI and machine learning projects, computer vision experiments, technical research, and professional work.",
    url: "https://mohamed-riham.github.io/who-is-riham/",
    siteName: "Mohamed Riham — Official Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        secureUrl: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham, Data Science Student at ICBT Campus / Cardiff Metropolitan University.",
        type: "image/png",
      },
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image-square.png",
        secureUrl: "https://mohamed-riham.github.io/who-is-riham/og-image-square.png",
        width: 600,
        height: 600,
        alt: "Mohamed Riham, Data Science Student (Square Preview).",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Riham | Data Science Student, AI & Machine Learning",
    description:
      "Explore the official portfolio of Mohamed Riham, a Data Science student at ICBT Campus. Discover his background, AI and machine learning projects, computer vision experiments, technical research, and professional work.",
    site: "@_mohamed_riham",
    creator: "@_mohamed_riham",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham, Data Science Student at ICBT Campus / Cardiff Metropolitan University.",
      },
    ],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/icon-192.png`, sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: `${basePath}/safari-pinned-tab.svg`,
        color: "#C43E17",
      },
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
        name: "Mohamed Riham | Official Portfolio",
        alternateName: [
          "Mohamed Riham Portfolio",
          "who-is-riham",
        ],
        description:
          "Official personal dossier and engineering portfolio of Mohamed Riham, Data Science Student at ICBT Campus / Cardiff Metropolitan University.",
        publisher: {
          "@id": "https://mohamed-riham.github.io/who-is-riham/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#webpage",
        url: "https://mohamed-riham.github.io/who-is-riham/",
        name: "Who is Mohamed Riham? — Data Science Student Portfolio & Dossier",
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
            item: "https://mohamed-riham.github.io/who-is-riham/#dossier",
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
          "Mohamed Ansar Mohamed Riham",
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
        jobTitle: "Data Science Student",
        hasOccupation: {
          "@type": "Occupation",
          name: "Data Science Student",
          occupationalCategory: "15-2051.00",
        },
        description:
          "Mohamed Riham (commonly known as Riham, legal name Mohamed Ansar Mohamed Riham) is a Sri Lankan Data Science student at ICBT Campus, pursuing a BSc (Hons) Data Science (Top-Up) delivered through Cardiff Metropolitan University. He specializes in practical Artificial Intelligence, Computer Vision (YOLOv8 99.2% mAP), offline voice automation (EDITH), and empirical machine learning validation.",
        disambiguatingDescription:
          "Mohamed Riham is a Sri Lankan Data Science student and applied AI developer at ICBT Campus / Cardiff Metropolitan University.",
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
        "@type": "ImageObject",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#portrait-cutout",
        name: "Mohamed Riham — Flagship Editorial Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-portrait-cutout.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-portrait-cutout.webp",
        caption: "Mohamed Riham Data Science Undergraduate at Cardiff Metropolitan University / ICBT Campus",
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
        name: "Mohamed Riham — Colombo Urban Candid Portrait",
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
        name: "Mohamed Riham — Addalaichenai Motorbike Candid Photograph",
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
        name: "Mohamed Riham — Graduation Awards Convocation Ceremony",
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
      {
        "@type": "ImageObject",
        "@id": "https://mohamed-riham.github.io/who-is-riham/#colombo-portrait",
        name: "Mohamed Riham — Colombo Urban Editorial Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-colombo-portrait.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-colombo-portrait.webp",
        caption: "Mohamed Riham portrait in Colombo, Sri Lanka",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#lifestyle-portrait",
        name: "Mohamed Riham — Lifestyle & Technology Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-lifestyle.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-lifestyle.webp",
        caption: "Mohamed Riham lifestyle portrait",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#campus-portrait",
        name: "Mohamed Riham — Cardiff Metropolitan / ICBT Campus Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-campus.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-campus.webp",
        caption: "Mohamed Riham at ICBT Campus / Cardiff Metropolitan University",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#diploma-portrait",
        name: "Mohamed Riham — Pearson BTEC HND Convocation Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-diploma.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/mohamed-riham-diploma.webp",
        caption: "Mohamed Riham Pearson BTEC Higher National Diploma convocation",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#formal-sunglasses",
        name: "Mohamed Riham — Formal Sunglasses Editorial Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/formal-sunglasses-portrait.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/formal-sunglasses-portrait.webp",
        caption: "Mohamed Riham formal sunglasses portrait in Sri Lanka",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#formal-tie",
        name: "Mohamed Riham — Formal Convocation Tie Adjustment Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/formal-tie-adjust.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/formal-tie-adjust.webp",
        caption: "Mohamed Riham adjusting formal tie at convocation ceremony",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#motorbike-sunset",
        name: "Mohamed Riham — Golden Hour Motorbike Sunset Portrait",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/motorbike-sunset-portrait.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/profile/random/motorbike-sunset-portrait.webp",
        caption: "Mohamed Riham sunset motorbike portrait in Eastern Province, Sri Lanka",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#og-cover",
        name: "Mohamed Riham — Flagship NOIR EDITORIAL Social Profile Cover",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        caption: "Mohamed Riham official portfolio social card and credentials",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#bits-honour",
        name: "Mohamed Riham — BCAS IT Society Leadership & Honour",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/experience/bcas-bits-honour.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/experience/bcas-bits-honour.webp",
        caption: "Mohamed Riham executive leadership recognition at BCAS IT Society",
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
        "@id": "https://mohamed-riham.github.io/who-is-riham/#award-stage",
        name: "Mohamed Riham — PC Clinic Community Service Award Stage",
        contentUrl: "https://mohamed-riham.github.io/who-is-riham/images/certifications/bcas-pc-clinic-award-stage.webp",
        url: "https://mohamed-riham.github.io/who-is-riham/images/certifications/bcas-pc-clinic-award-stage.webp",
        caption: "Mohamed Riham receiving award at PC Clinic community initiative",
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
      <body className="min-h-screen flex flex-col bg-[#040202] text-[#F9F9F6] font-sans antialiased selection:bg-[#C43E17]/35 selection:text-[#F9F9F6] relative">
        <AtmosphericBackground />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
