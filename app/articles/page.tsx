import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { writingArticles } from "@/content/writing";

export const metadata: Metadata = {
  title: {
    absolute: "Mohamed Riham | Technical Articles and Research",
  },
  description:
    "Technical publications, machine learning research papers, and software engineering articles published by Mohamed Riham across DEV Community, Medium, and Academia.edu.",
  alternates: {
    canonical: "https://mohamed-riham.github.io/who-is-riham/articles/",
  },
  openGraph: {
    title: "Mohamed Riham | Technical Articles and Research",
    description:
      "Technical publications, machine learning research papers, and software engineering articles published by Mohamed Riham across DEV Community, Medium, and Academia.edu.",
    url: "https://mohamed-riham.github.io/who-is-riham/articles/",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham — Technical Articles & Research Index",
      },
    ],
  },
};

export default function ArticlesPage() {
  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";
  const canonicalUrl = `${baseUrl}/articles/`;

  const articlesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Mohamed Riham | Technical Articles and Research",
        description:
          "Index of empirical machine learning papers, computer vision breakdowns, and technical articles by Mohamed Riham.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: writingArticles.map((art, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            url: art.link,
            name: art.title,
            description: art.summary,
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
            name: "Articles",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesJsonLd) }}
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
            Publications // {writingArticles.length} Verified Articles
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#140A06] border border-[#C43E17]/40 shadow-[0_0_15px_rgba(196,62,23,0.18)] text-xs font-mono tracking-widest text-[#F9F9F6] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse" />
            <span>ORIGINAL RESEARCH PAPERS &amp; ENGINEERING NOTES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
            Technical Articles &amp; <span className="text-[#C43E17]">Research Papers.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
            Peer-reviewed empirical research, architecture post-mortems, and applied computer vision breakdowns authored by Mohamed Riham and hosted on Academia.edu, DEV Community, and Medium.
          </p>
        </div>

        {/* Articles List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {writingArticles.map((article, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-[#0A0503] px-4 sm:px-6 rounded-sm transition-all"
              >
                <div className="lg:col-span-3 font-mono space-y-1">
                  <div className="text-xs text-[#A09383]">/{indexStr}</div>
                  <div className="text-xs font-semibold text-[#C43E17] uppercase">{article.platform}</div>
                  <div className="text-xs text-[#A09383]">{article.date} · {article.readTime}</div>
                </div>

                <div className="lg:col-span-8 space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#C43E17] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#D3C29F] font-light leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1 flex justify-end">
                  <div className="p-2.5 bg-[#0E0604] border border-white/10 group-hover:border-[#C43E17] group-hover:bg-[#C43E17] group-hover:text-[#040202] text-white rounded-sm transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
