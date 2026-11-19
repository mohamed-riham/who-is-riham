import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { educationList } from "@/content/education";

export const metadata: Metadata = {
  title: {
    absolute: "Mohamed Riham | Education and Academic Background",
  },
  description:
    "Discover the academic credentials of Mohamed Riham: BSc (Hons) Data Science (Top-Up) at ICBT Campus / Cardiff Metropolitan University and Pearson BTEC HND in Software Engineering, Distinction.",
  alternates: {
    canonical: "https://mohamed-riham.github.io/who-is-riham/education/",
  },
  openGraph: {
    title: "Mohamed Riham | Education and Academic Background",
    description:
      "Discover the academic credentials of Mohamed Riham: BSc (Hons) Data Science (Top-Up) at ICBT Campus / Cardiff Metropolitan University and Pearson BTEC HND in Software Engineering, Distinction.",
    url: "https://mohamed-riham.github.io/who-is-riham/education/",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham — Academic Credentials & Education",
      },
    ],
  },
};

export default function EducationPage() {
  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";
  const canonicalUrl = `${baseUrl}/education/`;

  const educationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Mohamed Riham | Education and Academic Background",
        description:
          "Verified higher education history and academic credentials of Mohamed Riham.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
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
            name: "Education",
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <article className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-transparent text-[#D3C29F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A09383] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>

          <span className="font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
            Registry // Academic Credentials
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#140A06] border border-[#C43E17]/40 shadow-[0_0_15px_rgba(196,62,23,0.18)] text-xs font-mono tracking-widest text-[#F9F9F6] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse" />
            <span>ACADEMIC INTEGRITY &amp; BRITISH QUALIFICATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
            Education &amp; <span className="text-[#C43E17]">Academic Foundations.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
            Factual record of degree programs, British higher education credentials, awarding universities, and verified distinction grades achieved by Mohamed Riham.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 lg:p-10 bg-[#0A0503] border border-white/10 rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_35px_rgba(196,62,23,0.18)] transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C43E17] uppercase font-semibold">
                    {idx === 0 ? <GraduationCap className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                    <span>{edu.awardingBody}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                    {edu.degree}
                  </h2>
                  <div className="text-sm font-mono text-[#A09383]">
                    {edu.institution} · {edu.location}
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="text-sm font-bold text-white">{edu.period}</div>
                  <div className="inline-block mt-1 px-2.5 py-0.5 bg-[#1A0B07] border border-[#C43E17]/40 text-[#C43E17] text-xs font-semibold rounded-sm">
                    {edu.status}
                  </div>
                </div>
              </div>

              {edu.grade && (
                <div className="p-4 bg-[#050201] border border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#A09383] uppercase">Official Grade Classification:</span>
                  <span className="text-[#C43E17] font-bold text-sm">{edu.grade}</span>
                </div>
              )}

              <p className="text-sm sm:text-base text-[#D3C29F] font-light leading-relaxed">
                {edu.description}
              </p>

              {edu.modules.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#A09383]">
                    Curriculum Modules &amp; Assessed Subjects:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {edu.modules.map((module) => (
                      <div
                        key={module}
                        className="p-3 bg-[#070302] border border-white/10 text-xs font-mono text-white flex items-center justify-between rounded-sm"
                      >
                        <span className="truncate">{module}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C43E17] shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
