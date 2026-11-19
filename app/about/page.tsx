import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin, Download, BookOpen } from "lucide-react";
import { profile } from "@/content/profile";
import { educationList } from "@/content/education";
import { getAssetPath } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, HuggingFaceIcon, InstagramIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: {
    absolute: "Who Is Mohamed Riham? | About Riham",
  },
  description:
    "Explore who Mohamed Riham (Riham) is: a Data Science student at ICBT Campus, pursuing a BSc (Hons) in Data Science awarded by Cardiff Metropolitan University, UK.",
  alternates: {
    canonical: "https://mohamed-riham.github.io/who-is-riham/about/",
  },
  openGraph: {
    title: "Who Is Mohamed Riham? | About Riham",
    description:
      "Explore who Mohamed Riham (Riham) is: a Data Science student at ICBT Campus, pursuing a BSc (Hons) in Data Science awarded by Cardiff Metropolitan University, UK.",
    url: "https://mohamed-riham.github.io/who-is-riham/about/",
    type: "profile",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Who is Mohamed Riham? — Data Science Student & AI Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Is Mohamed Riham? | About Riham",
    description:
      "Explore who Mohamed Riham (Riham) is: a Data Science student at ICBT Campus, pursuing a BSc (Hons) in Data Science awarded by Cardiff Metropolitan University, UK.",
    images: ["https://mohamed-riham.github.io/who-is-riham/og-image.png"],
  },
};

export default function AboutPage() {
  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";
  const canonicalUrl = `${baseUrl}/about/`;

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Who Is Mohamed Riham? | About Riham",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        mainEntity: {
          "@id": `${baseUrl}/#person`,
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
            name: "Who Is Mohamed Riham?",
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Mohamed Riham",
        givenName: "Mohamed",
        familyName: "Riham",
        additionalName: "Ansar",
        alternateName: [
          "Riham",
          "Mohamed Ansar Mohamed Riham",
        ],
        jobTitle: "Data Science Student",
        description:
          "Mohamed Riham (commonly known as Riham, legal name Mohamed Ansar Mohamed Riham) is a Sri Lankan Data Science student at ICBT Campus, pursuing a BSc (Hons) Data Science (Top-Up) delivered through Cardiff Metropolitan University. He specializes in practical Artificial Intelligence, Computer Vision (YOLOv8 99.2% mAP), offline voice automation (EDITH), and empirical machine learning validation.",
        url: `${baseUrl}/`,
        affiliation: [
          {
            "@type": "EducationalOrganization",
            name: "ICBT Campus",
            url: "https://icbt.lk",
          },
          {
            "@type": "EducationalOrganization",
            name: "Cardiff Metropolitan University",
            url: "https://www.cardiffmet.ac.uk",
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
      },
    ],
  };

  return (
    <article className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-transparent text-[#D3C29F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
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
            Entity Dossier // Primary Identity
          </span>
        </div>

        {/* Hero Identity Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#140A06] border border-[#C43E17]/40 shadow-[0_0_15px_rgba(196,62,23,0.18)] text-xs font-mono tracking-widest text-[#F9F9F6] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse" />
              <span>PRIMARY DOSSIER // MOHAMED RIHAM (RIHAM)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-sans leading-[1.04]">
              Who is <span className="text-[#C43E17]">Mohamed Riham?</span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans tracking-tight">
              Data Science Student at ICBT Campus // Cardiff Metropolitan University
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A09383]">
              <span className="flex items-center gap-1.5 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#C43E17]" />
                Addalaichenai &amp; Colombo, Sri Lanka
              </span>
              <span>·</span>
              <span>Common Name: <strong className="text-white">Riham</strong></span>
              <span>·</span>
              <span>Legal Name: <strong className="text-white">Mohamed Ansar Mohamed Riham</strong></span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-72 aspect-[4/5] border border-white/10 bg-[#0A0503] p-2 rounded-sm shadow-[0_0_40px_rgba(196,62,23,0.2)]">
              <div className="relative w-full h-full overflow-hidden bg-[#040202]">
                <Image
                  src={getAssetPath("/images/profile/mohamed-riham-portrait.webp")}
                  alt="Mohamed Riham, Data Science Student at ICBT Campus / Cardiff Metropolitan University"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-50" />
              </div>
              <div className="p-2 bg-[#050201] text-[10px] font-mono text-white flex justify-between border-t border-white/10">
                <span>Mohamed Riham</span>
                <span className="text-[#C43E17]">Official Portrait</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: The Direct Answer */}
        <section className="p-8 lg:p-12 border border-white/10 bg-[#0A0503] rounded-sm space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
            01 // DIRECT ANSWER TO: &ldquo;WHO IS RIHAM?&rdquo;
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
            Authoritative Personal Biography
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#D3C29F] font-light leading-relaxed">
            <p className="text-white font-medium">
              <strong>Mohamed Riham</strong>, also known by his legal name <strong>Mohamed Ansar Mohamed Riham</strong> (commonly known as <strong>Riham</strong>), is a Sri Lankan Data Science student at ICBT Campus, pursuing a BSc (Hons) Data Science (Top-Up) delivered through Cardiff Metropolitan University.
            </p>
            <p>
              His academic journey is supported by a completed Pearson BTEC HND in Software Engineering, Distinction. He specializes in practical artificial intelligence, computer vision architectures, and empirical machine learning validation.
            </p>
            <p>
              Rather than relying on simulated datasets or synthetic claims, he tackles real-world engineering constraints: curating and annotating a 1,000+ custom banknote dataset to train a 99.20% mAP@50 YOLOv8 currency detector for the visually impaired, benchmark-testing fraud detection models across 284,807 European cardholder transactions (492 frauds, 0.172% ratio), and engineering local-first desktop automation with neural voice synthesis.
            </p>
          </div>
        </section>

        {/* Section 2: Core Identity Facts */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-5 bg-[#050201] border border-white/10 space-y-1">
            <span className="text-[#A09383] uppercase block text-[10px]">Primary Name</span>
            <span className="text-white font-bold text-sm block">Mohamed Riham</span>
            <span className="text-[#C43E17] text-[10px] block">Public &amp; Author Name</span>
          </div>
          <div className="p-5 bg-[#050201] border border-white/10 space-y-1">
            <span className="text-[#A09383] uppercase block text-[10px]">Short Name</span>
            <span className="text-white font-bold text-sm block">Riham</span>
            <span className="text-[#C43E17] text-[10px] block">Colloquial Reference</span>
          </div>
          <div className="p-5 bg-[#050201] border border-white/10 space-y-1">
            <span className="text-[#A09383] uppercase block text-[10px]">Legal Full Name</span>
            <span className="text-white font-bold text-sm block">Mohamed Ansar Mohamed Riham</span>
            <span className="text-[#C43E17] text-[10px] block">Academic Registry</span>
          </div>
          <div className="p-5 bg-[#050201] border border-white/10 space-y-1">
            <span className="text-[#A09383] uppercase block text-[10px]">Current Status</span>
            <span className="text-white font-bold text-sm block">Data Science Student</span>
            <span className="text-[#C43E17] text-[10px] block">BSc (Hons) Final Year</span>
          </div>
        </section>

        {/* Section 3: Academic Timeline */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              02 // ACADEMIC FOUNDATIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Degrees and Verified Qualifications
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {educationList.map((edu, idx) => (
              <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3 font-mono">
                  <div className="text-sm font-bold text-white">{edu.period}</div>
                  <div className="text-xs text-[#A09383]">{edu.location}</div>
                  <div className="text-[10px] text-[#C43E17] mt-1 font-semibold uppercase">{edu.status}</div>
                </div>
                <div className="md:col-span-9 space-y-2">
                  <h3 className="text-lg font-bold text-white font-sans">{edu.degree}</h3>
                  <div className="text-xs font-mono text-[#D3C29F]">
                    {edu.institution} · Awarded by <span className="text-white font-medium">{edu.awardingBody}</span>
                  </div>
                  {edu.grade && (
                    <div className="inline-block px-2.5 py-0.5 bg-[#1A0B07] border border-[#C43E17]/40 text-[#C43E17] font-mono text-xs rounded-sm">
                      {edu.grade}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-[#A09383] font-light leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Verified Public Profiles */}
        <section className="p-8 border border-white/10 bg-[#0A0503] rounded-sm space-y-6">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              03 // DIGITAL PROFILES &amp; AUTHENTICITY
            </div>
            <h2 className="text-2xl font-extrabold text-white font-sans">
              Verified Public Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#050201] border border-white/10 hover:border-[#C43E17] rounded-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-[#C43E17]" />
                <div>
                  <div className="text-white font-bold">GitHub</div>
                  <div className="text-[10px] text-[#A09383]">@mohamed-riham</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A09383]" />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#050201] border border-white/10 hover:border-[#C43E17] rounded-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-[#C43E17]" />
                <div>
                  <div className="text-white font-bold">LinkedIn</div>
                  <div className="text-[10px] text-[#A09383]">in/mohamedriham</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A09383]" />
            </a>

            <a
              href={profile.socials.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#050201] border border-white/10 hover:border-[#C43E17] rounded-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <HuggingFaceIcon className="w-5 h-5 text-[#C43E17]" />
                <div>
                  <div className="text-white font-bold">Hugging Face</div>
                  <div className="text-[10px] text-[#A09383]">@mohamedriham</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A09383]" />
            </a>

            <a
              href={profile.socials.dev}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#050201] border border-white/10 hover:border-[#C43E17] rounded-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#C43E17]" />
                <div>
                  <div className="text-white font-bold">DEV Community</div>
                  <div className="text-[10px] text-[#A09383]">@mohamed-riham</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A09383]" />
            </a>

            <a
              href={profile.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#050201] border border-white/10 hover:border-[#C43E17] rounded-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#C43E17]" />
                <div>
                  <div className="text-white font-bold">Medium</div>
                  <div className="text-[10px] text-[#A09383]">@mohamed-riham</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A09383]" />
            </a>

            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#050201] border border-white/10 hover:border-[#C43E17] rounded-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 text-[#C43E17]" />
                <div>
                  <div className="text-white font-bold">Instagram</div>
                  <div className="text-[10px] text-[#A09383]">@_mohamed_riham</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A09383]" />
            </a>
          </div>
        </section>

        {/* Action Hub */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 font-mono text-xs">
          <Link
            href="/projects"
            className="px-6 py-3 bg-[#C43E17] hover:bg-[#DB4A1E] text-[#040202] font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(196,62,23,0.45)]"
          >
            Explore AI &amp; Data Science Projects
          </Link>
          <a
            href={getAssetPath("/Mohamed_Riham_CV.pdf")}
            download="Mohamed_Riham_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-[#C43E17] text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#C43E17]" />
            <span>Curriculum Vitae</span>
          </a>
        </div>
      </div>
    </article>
  );
}
