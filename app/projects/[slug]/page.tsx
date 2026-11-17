import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Play, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Layers, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";
import { getAssetPath } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

function getEmbedUrl(url: string): string | null {
  try {
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0]?.split("&")[0];
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1]?.split("&")[0]?.split("?")[0];
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";
  const canonicalUrl = `${baseUrl}/projects/${project.slug}/`;

  return {
    title: `${project.title} | Case Study | Mohamed Riham (Riham)`,
    description: `Case study on ${project.title} by Mohamed Riham (Riham), Data Science Undergraduate. ${project.summary}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Case Study | Mohamed Riham`,
      description: project.summary,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${project.title} — Mohamed Riham`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mohamed Riham Case Study`,
      description: project.summary,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const indexStr = String(projectIndex + 1).padStart(2, "0");

  return (
    <article className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-[#040202] text-[#D3C29F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-[#6B503C]/20">
          <Link
            href="/#systems"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8E7F70] hover:text-[#DEA355] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Systems Catalog</span>
          </Link>

          <span className="font-mono text-xs text-[#C43E17] uppercase tracking-wider">
            System // {indexStr}
          </span>
        </div>

        {/* =========================================================================
            CASE STUDY HERO
            ========================================================================= */}
        <div className="space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#DEA355] uppercase tracking-wider">
              <span>{project.category}</span>
              <span className="text-[#6B503C]">·</span>
              <span className="text-[#8E7F70]">{project.year}</span>
              <span className="text-[#6B503C]">·</span>
              <span className="text-[#C43E17]">{project.status}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F9F9F6] tracking-tight font-sans leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#DEA355] font-serif italic max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Full-Width Metadata Ledger */}
          <div className="p-6 bg-[#0D0704] border border-[#6B503C]/30 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <span className="text-[#8E7F70] block text-[10px] uppercase">Discipline</span>
              <span className="text-[#F9F9F6] font-semibold mt-1 block">{project.category}</span>
            </div>
            <div>
              <span className="text-[#8E7F70] block text-[10px] uppercase">Role</span>
              <span className="text-[#F9F9F6] font-semibold mt-1 block">Lead Engineer / Research</span>
            </div>
            <div>
              <span className="text-[#8E7F70] block text-[10px] uppercase">Timeline</span>
              <span className="text-[#F9F9F6] font-semibold mt-1 block">{project.year}</span>
            </div>
            <div>
              <span className="text-[#8E7F70] block text-[10px] uppercase">Evaluation</span>
              <span className="text-[#DEA355] font-semibold mt-1 block">Empirically Verified</span>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C43E17] hover:bg-[#DB4A1E] text-xs font-mono font-bold text-[#040202] uppercase tracking-wider transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.video && (
              <a
                href={project.links.video.startsWith("/") ? getAssetPath(project.links.video) : project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#140A06] hover:bg-[#1E1008] border border-[#6B503C]/35 text-xs font-mono text-[#DEA355] transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Video Demonstration</span>
              </a>
            )}

            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#140A06] hover:bg-[#1E1008] border border-[#6B503C]/35 text-xs font-mono text-[#DEA355] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Research Paper (Academia.edu)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.article && project.links.article !== project.links.paper && (
              <a
                href={project.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#140A06] hover:bg-[#1E1008] border border-[#6B503C]/35 text-xs font-mono text-[#D3C29F] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Technical Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Primary Showcase Image */}
        {project.image && (
          <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#040202]">
              <Image
                src={getAssetPath(project.image)}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="p-2 bg-[#120704] text-[11px] font-mono text-[#8E7F70] flex justify-between">
              <span>Primary Visual Demonstration</span>
              <span className="text-[#DEA355]">Inference Output // Real-World Data</span>
            </div>
          </div>
        )}

        {/* =========================================================================
            TWO-COLUMN EDITORIAL SPREAD
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-[#6B503C]/20">

          {/* Left Column: Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* Scorecard Ledger */}
            {project.results && project.results.length > 0 && (
              <div className="border border-[#6B503C]/30 bg-[#0D0704] p-5 space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#C43E17] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Evaluation Scorecard</span>
                </div>
                <div className="space-y-3 font-mono text-xs divide-y divide-[#6B503C]/20">
                  {project.results.map((r, i) => (
                    <div key={i} className="pt-2.5 flex justify-between items-baseline">
                      <span className="text-[#8E7F70]">{r.label}:</span>
                      <span className="text-[#F9F9F6] font-bold text-sm">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Matrix */}
            <div className="border border-[#6B503C]/30 bg-[#0D0704] p-5 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[#DEA355]">
                Stack & Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#140A06] border border-[#6B503C]/25"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Summary Box */}
            <div className="p-5 bg-[#120704] border border-[#6B503C]/20 font-mono text-xs text-[#8E7F70] space-y-2">
              <div className="text-[#F9F9F6]">Repository Status</div>
              <div>Available under open-source MIT / Academic license on GitHub.</div>
            </div>
          </aside>

          {/* Right Column: Deep-Dive Research Narrative (8 cols) */}
          <main className="lg:col-span-8 space-y-16">

            {/* 1. Problem Statement */}
            <section className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
                01 // Problem & Context
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F9F9F6] font-sans">
                The core problem statement.
              </h2>
              <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* 2. Technical Approach & Methodology */}
            <section className="space-y-6 pt-8 border-t border-[#6B503C]/20">
              <div className="font-mono text-xs uppercase tracking-widest text-[#DEA355]">
                02 // Methodology & Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F9F9F6] font-sans">
                Technical approach & pipeline.
              </h2>
              <p className="text-base text-[#D3C29F] font-light leading-relaxed">
                {project.solution}
              </p>

              {/* Implementation Steps */}
              <div className="space-y-3 pt-2">
                {project.approach.map((step, i) => (
                  <div key={i} className="p-4 bg-[#0D0704] border border-[#6B503C]/20 flex items-start gap-3">
                    <span className="font-mono text-xs text-[#C43E17] font-bold">↳ 0{i + 1}</span>
                    <span className="text-xs sm:text-sm text-[#F9F9F6] leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>

              {/* Architecture Blueprint Details */}
              {project.architectureDetails && (
                <div className="p-6 bg-[#070302] border border-[#6B503C]/30 space-y-2 font-mono text-xs text-[#DEA355]">
                  <div className="text-[10px] uppercase text-[#8E7F70]">Architectural Specification</div>
                  <div className="leading-relaxed">{project.architectureDetails}</div>
                </div>
              )}

              {/* Architecture Diagram (if present) */}
              {project.diagram && (
                <div className="border border-[#6B503C]/30 bg-[#0D0704] p-2 space-y-2">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#040202]">
                    <Image
                      src={getAssetPath(project.diagram)}
                      alt={`${project.title} technical architecture diagram`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#8E7F70]">
                    System Architecture Diagram & Data Flow
                  </div>
                </div>
              )}
            </section>

            {/* 3. Personal Engineering Contribution */}
            <section className="space-y-4 pt-8 border-t border-[#6B503C]/20">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
                03 // Authorship
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F9F9F6] font-sans">
                My personal engineering contribution.
              </h2>
              <p className="text-base text-[#D3C29F] font-light leading-relaxed">
                {project.contribution}
              </p>
            </section>

            {/* 4. Engineering Challenges & Known Limitations */}
            {project.limitations && (
              <section className="space-y-6 pt-8 border-t border-[#6B503C]/20">
                <div className="font-mono text-xs uppercase tracking-widest text-[#DEA355]">
                  04 // Rigor & Honest Limitations
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F9F9F6] font-sans">
                  Engineering challenges & known limitations.
                </h2>

                <div className="p-6 bg-[#0D0704] border border-[#6B503C]/25 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C43E17] uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Edge Hardware Constraints & Boundary Conditions</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D3C29F] font-light leading-relaxed">
                    {project.limitations}
                  </p>
                </div>
              </section>
            )}

            {/* 5. Live Video Demonstration */}
            {project.links.video && (
              <section className="space-y-6 pt-8 border-t border-[#6B503C]/20">
                <div className="font-mono text-xs uppercase tracking-widest text-[#DEA355] flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-[#DEA355]" />
                  <span>05 // Live Video Demonstration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F9F9F6] font-sans">
                  Real-time operation & test footage.
                </h2>

                <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-2">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#040202]">
                    {getEmbedUrl(project.links.video) ? (
                      <iframe
                        src={getEmbedUrl(project.links.video)!}
                        title={`${project.title} Video Demonstration`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={getAssetPath(project.links.video)}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain bg-black"
                      />
                    )}
                  </div>
                  <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#8E7F70] flex justify-between items-center">
                    <span>Direct Recorded Demonstration Footage</span>
                    {getEmbedUrl(project.links.video) ? (
                      <a
                        href={project.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DEA355] hover:text-[#F9F9F6] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Watch on YouTube</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[#DEA355]">In-Engine Gameplay Capture (Unity 6)</span>
                    )}
                  </div>
                </div>
              </section>
            )}

          </main>
        </div>

        {/* =========================================================================
            PREV / NEXT PROJECT NAVIGATION
            ========================================================================= */}
        <div className="pt-12 border-t border-[#6B503C]/20 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-6 border border-[#6B503C]/25 bg-[#0D0704] hover:border-[#DEA355] transition-colors group flex items-start gap-4"
            >
              <ChevronLeft className="w-5 h-5 text-[#8E7F70] group-hover:text-[#DEA355] mt-1 shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8E7F70]">Previous System</span>
                <div className="text-base font-bold text-[#F9F9F6] font-sans group-hover:text-[#DEA355] transition-colors mt-0.5">
                  {prevProject.title}
                </div>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-6 border border-[#6B503C]/25 bg-[#0D0704] hover:border-[#DEA355] transition-colors group flex items-start justify-between gap-4 text-right"
            >
              <div className="w-full">
                <span className="text-[10px] font-mono uppercase text-[#8E7F70]">Next System</span>
                <div className="text-base font-bold text-[#F9F9F6] font-sans group-hover:text-[#DEA355] transition-colors mt-0.5">
                  {nextProject.title}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8E7F70] group-hover:text-[#DEA355] mt-1 shrink-0" />
            </Link>
          ) : <div />}
        </div>

      </div>
    </article>
  );
}
