import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Riham | Data Science Undergraduate",
  description:
    "Portfolio of Mohamed Riham, Data Science Undergraduate at Cardiff Metropolitan University / ICBT Campus. Practical AI, Computer Vision (YOLOv8 99.2% mAP50), Offline Voice Automation, and Big Data Research.",
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
    url: "https://mohamed-riham.github.io",
    siteName: "Mohamed Riham Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Riham | Data Science Undergraduate",
    description:
      "Data Science undergraduate at Cardiff Met / ICBT. Creator of Sri Lankan Currency Detector (YOLOv8n 99.2% mAP) & EDITH offline assistant.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Riham",
    alternateName: "Mohamed Ansar Mohamed Riham",
    jobTitle: "Data Science Undergraduate",
    description:
      "I build practical AI, machine learning, computer vision, and intelligent systems that solve real-world problems.",
    url: "https://mohamed-riham.github.io",
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
      "https://dev.to/mohamedriham",
      "https://medium.com/@mohamed-riham",
    ],
    knowsAbout: [
      "Data Science",
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "YOLOv8",
      "Python",
      "Software Engineering",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#070A0F] text-[#F0F4F8] antialiased selection:bg-[#00F2FE]/20 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
