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
  title: "Mohamed Riham | Data Science Undergraduate",
  description:
    "Portfolio of Mohamed Riham, Data Science Undergraduate at Cardiff Metropolitan University / ICBT Campus. Practical AI, Computer Vision (YOLOv8 99.2% mAP@50), Local Voice Automation, and Big Data Research.",
  keywords: [
    "Mohamed Riham",
    "Data Science",
    "Machine Learning",
    "Computer Vision",
    "YOLOv8",
    "AI Systems",
    "Cardiff Metropolitan University",
    "ICBT Campus",
    "Sri Lanka",
    "EDITH Assistant",
  ],
  authors: [{ name: "Mohamed Riham" }],
  creator: "Mohamed Riham",
  openGraph: {
    title: "Mohamed Riham | Data Science Undergraduate",
    description:
      "I build practical AI, machine learning, computer vision, and intelligent systems that solve real-world problems.",
    url: "https://mohamed-riham.github.io/who-is-riham/",
    siteName: "Mohamed Riham Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham | Data Science Undergraduate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Riham | Data Science Undergraduate",
    description:
      "Data Science undergraduate at Cardiff Met / ICBT. Creator of Sri Lankan Currency Detector (YOLOv8n 99.2% mAP@50) & EDITH voice automation system.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Mohamed Riham",
      alternateName: "Mohamed Ansar Mohamed Riham",
      jobTitle: "Data Science Undergraduate",
      description:
        "I build practical AI, machine learning, computer vision, and intelligent systems that solve real-world problems.",
      url: "https://mohamed-riham.github.io/who-is-riham/",
      email: "mohamedriham93@gmail.com",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "BCAS Campus Kalmunai",
        },
      ],
      affiliation: {
        "@type": "EducationalOrganization",
        name: "ICBT Campus / Cardiff Metropolitan University",
      },
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
        "Machine Learning",
        "Computer Vision",
        "Deep Learning",
        "YOLOv8",
        "Python",
        "Power BI",
        "Applied AI Systems",
      ],
    },
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
