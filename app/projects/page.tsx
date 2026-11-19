import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Mohamed Riham | AI, Machine Learning & Data Science Projects",
  },
  description:
    "Explore all applied AI, computer vision, machine learning, and data analytics projects engineered by Mohamed Riham, Data Science student at ICBT Campus.",
  alternates: {
    canonical: "https://mohamed-riham.github.io/who-is-riham/projects/",
  },
  openGraph: {
    title: "Mohamed Riham | AI, Machine Learning & Data Science Projects",
    description:
      "Explore all applied AI, computer vision, machine learning, and data analytics projects engineered by Mohamed Riham, Data Science student at ICBT Campus.",
    url: "https://mohamed-riham.github.io/who-is-riham/projects/",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham — Projects & Systems Catalog",
      },
    ],
  },
};

export default function ProjectsCatalogPage() {
  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";
  const canonicalUrl = `${baseUrl}/projects/`;

  const catalogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Mohamed Riham | AI, Machine Learning & Data Science Projects",
        description:
          "Complete engineering catalog of applied AI, computer vision, and machine learning projects developed by Mohamed Riham.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            url: `${baseUrl}/projects/${p.slug}/`,
            name: p.title,
            description: p.summary,
          })),
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
            name: "Projects",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
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
            Systems Ledger // {projects.length} Total Projects
          </span>
        </div>

        {/* Catalog Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#140A06] border border-[#C43E17]/40 shadow-[0_0_15px_rgba(196,62,23,0.18)] text-xs font-mono tracking-widest text-[#F9F9F6] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse" />
            <span>APPLIED AI &amp; MACHINE LEARNING REPOSITORIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
            Technical Projects &amp; <span className="text-[#C43E17]">Research Work.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
            Every system below documents practical AI architectures, computer vision models, or empirical data science research engineered by Mohamed Riham, supported by open repositories and benchmark evaluations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={project.slug}
                className="p-6 bg-[#0A0503] border border-white/10 rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_35px_rgba(196,62,23,0.18)] transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#C43E17] font-semibold">{project.category}</span>
                    <span className="text-[#A09383]">/{indexStr}</span>
                  </div>

                  {project.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#040202] border border-white/10 rounded-sm">
                      <Image
                        src={getAssetPath(project.image)}
                        alt={`${project.title} — Mohamed Riham`}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-white font-sans group-hover:text-[#C43E17] transition-colors">
                      <Link href={`/projects/${project.slug}/`}>
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-[#D3C29F] font-light leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="text-[#C43E17] hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A09383] hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
