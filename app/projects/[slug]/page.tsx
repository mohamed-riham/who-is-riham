import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Play, CheckCircle2, AlertTriangle, BookOpen, ChevronRight, ChevronLeft } from "lucide-react";
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
    title: `${project.title} | Case Study | Mohamed Riham`,
    description: `Case study on ${project.title} by Mohamed Riham, Data Science Undergraduate. ${project.summary}`,
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
    <article className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-transparent text-[#D3C29F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/#systems"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A09383] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Systems Catalog</span>
          </Link>

          <span className="font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
            System // {indexStr}
          </span>
        </div>

        {/* =========================================================================
            CASE STUDY HERO
            ========================================================================= */}
        <div className="space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
              <span className="text-[#C43E17] font-semibold">{project.category}</span>
              <span className="text-white/20">·</span>
              <span className="text-[#A09383]">{project.year}</span>
              <span className="text-white/20">·</span>
              <span className="text-white bg-[#1A0B07] border border-[#C43E17]/30 px-2 py-0.5 rounded-sm">{project.status}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#D3C29F] font-sans max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Full-Width Metadata Ledger */}
          <div className="p-6 bg-[#0A0503] border border-white/10 rounded-sm grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <span className="text-[#A09383] block text-[10px] uppercase">Discipline</span>
              <span className="text-white font-semibold mt-1 block">{project.category}</span>
            </div>
            <div>
              <span className="text-[#A09383] block text-[10px] uppercase">Role</span>
              <span className="text-white font-semibold mt-1 block">Lead Engineer / Research</span>
            </div>
            <div>
              <span className="text-[#A09383] block text-[10px] uppercase">Timeline</span>
              <span className="text-white font-semibold mt-1 block">{project.year}</span>
            </div>
            <div>
              <span className="text-[#A09383] block text-[10px] uppercase">Evaluation</span>
              <span className="text-[#C43E17] font-semibold mt-1 block">Empirically Verified</span>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C43E17] hover:bg-[#D94519] text-xs font-mono font-bold text-[#040202] uppercase tracking-wider rounded-sm transition-all shadow-[0_0_15px_rgba(196,62,23,0.35)]"
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
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-xs font-mono text-white rounded-sm transition-all"
              >
                <Play className="w-3.5 h-3.5 text-[#C43E17]" />
                <span>Video Demonstration</span>
              </a>
            )}

            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-xs font-mono text-white rounded-sm transition-all"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C43E17]" />
                <span>Research Paper</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A09383]" />
              </a>
            )}

            {project.links.article && project.links.article !== project.links.paper && (
              <a
                href={project.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-xs font-mono text-[#D3C29F] hover:text-white rounded-sm transition-all"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C43E17]" />
                <span>Technical Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A09383]" />
              </a>
            )}
          </div>
        </div>

        {/* Primary Showcase Image */}
        {project.image && (
          <div className="border border-white/10 bg-[#0A0503] p-2 rounded-sm space-y-3">
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
            <div className="p-2 bg-[#070302] text-[11px] font-mono text-[#A09383] flex justify-between">
              <span>Primary Visual Demonstration</span>
              <span className="text-[#C43E17] font-semibold">Inference Output // Real-World Data</span>
            </div>
          </div>
        )}

        {/* =========================================================================
            TWO-COLUMN SPREAD
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-white/10">

          {/* Left Column: Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* Scorecard Ledger */}
            {project.results && project.results.length > 0 && (
              <div className="border border-white/10 bg-[#0A0503] p-5 space-y-4 rounded-sm">
                <div className="font-mono text-xs uppercase tracking-wider text-[#C43E17] flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Evaluation Scorecard</span>
                </div>
                <div className="space-y-3 font-mono text-xs divide-y divide-white/10">
                  {project.results.map((r, i) => (
                    <div key={i} className="pt-2.5 flex justify-between items-baseline">
                      <span className="text-[#A09383]">{r.label}:</span>
                      <span className="text-white font-bold text-sm">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Matrix */}
            <div className="border border-white/10 bg-[#0A0503] p-5 space-y-3 rounded-sm">
              <div className="font-mono text-xs uppercase tracking-wider text-[#C43E17] font-semibold">
                Stack &amp; Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Summary Box */}
            <div className="p-5 bg-[#070302] border border-white/10 rounded-sm font-mono text-xs text-[#A09383] space-y-2">
              <div className="text-white font-semibold">Repository Status</div>
              <div>Available under open-source MIT / Academic license on GitHub.</div>
            </div>
          </aside>

          {/* Right Column: Deep-Dive Research Narrative (8 cols) */}
          <main className="lg:col-span-8 space-y-16">

            {/* 1. Problem Statement */}
            <section className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17] font-semibold">
                01 // PROBLEM &amp; CONTEXT
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                The core problem statement.
              </h2>
              <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* 2. Technical Approach & Methodology */}
            <section className="space-y-6 pt-8 border-t border-white/10">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17] font-semibold">
                02 // METHODOLOGY &amp; ARCHITECTURE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                Technical approach &amp; pipeline.
              </h2>
              <p className="text-base text-[#D3C29F] font-light leading-relaxed">
                {project.solution}
              </p>

              {/* Implementation Steps */}
              <div className="space-y-3 pt-2">
                {project.approach.map((step, i) => (
                  <div key={i} className="p-4 bg-[#0A0503] border border-white/10 rounded-sm flex items-start gap-3">
                    <span className="font-mono text-xs text-[#C43E17] font-bold">↳ 0{i + 1}</span>
                    <span className="text-xs sm:text-sm text-white leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>

              {/* Architecture Blueprint Details */}
              {project.architectureDetails && (
                <div className="p-6 bg-[#070302] border border-white/10 rounded-sm space-y-2 font-mono text-xs text-white">
                  <div className="text-[10px] uppercase text-[#A09383]">Architectural Specification</div>
                  <div className="leading-relaxed">{project.architectureDetails}</div>
                </div>
              )}

              {/* Architecture Diagram (if present) */}
              {project.diagram && (
                <div className="border border-white/10 bg-[#0A0503] p-2 space-y-2 rounded-sm">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#040202]">
                    <Image
                      src={getAssetPath(project.diagram)}
                      alt={`${project.title} technical architecture diagram`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-2 bg-[#070302] text-[10px] font-mono text-[#A09383]">
                    System Architecture Diagram &amp; Data Flow
                  </div>
                </div>
              )}
            </section>

            {/* 3. Personal Engineering Contribution */}
            <section className="space-y-4 pt-8 border-t border-white/10">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17] font-semibold">
                03 // AUTHORSHIP
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                My personal engineering contribution.
              </h2>
              <p className="text-base text-[#D3C29F] font-light leading-relaxed">
                {project.contribution}
              </p>
            </section>

            {/* 4. Engineering Challenges & Known Limitations */}
            {project.limitations && (
              <section className="space-y-6 pt-8 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17] font-semibold">
                  04 // RIGOR &amp; HONEST LIMITATIONS
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  Engineering challenges &amp; known limitations.
                </h2>

                <div className="p-6 bg-[#0A0503] border border-white/10 rounded-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C43E17] uppercase font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Edge Hardware Constraints &amp; Boundary Conditions</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D3C29F] font-light leading-relaxed">
                    {project.limitations}
                  </p>
                </div>
              </section>
            )}

            {/* 5. Live Video Demonstration */}
            {project.links.video && (
              <section className="space-y-6 pt-8 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17] flex items-center gap-2 font-semibold">
                  <Play className="w-3.5 h-3.5 text-[#C43E17]" />
                  <span>05 // LIVE VIDEO DEMONSTRATION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  Real-time operation &amp; test footage.
                </h2>

                <div className="border border-white/10 bg-[#0A0503] p-2 space-y-2 rounded-sm">
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
                  <div className="p-2 bg-[#070302] text-[10px] font-mono text-[#A09383] flex justify-between items-center">
                    <span>Direct Recorded Demonstration Footage</span>
                    {getEmbedUrl(project.links.video) ? (
                      <a
                        href={project.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#C43E17] inline-flex items-center gap-1 transition-colors font-medium"
                      >
                        <span>Watch on YouTube</span>
                        <ArrowUpRight className="w-3 h-3 text-[#C43E17]" />
                      </a>
                    ) : (
                      <span className="text-white">In-Engine Gameplay Capture (Unity 6)</span>
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
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-6 border border-white/10 bg-[#0A0503] hover:border-[#C43E17]/50 rounded-sm transition-all group flex items-start gap-4"
            >
              <ChevronLeft className="w-5 h-5 text-[#A09383] group-hover:text-[#C43E17] mt-1 shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-[#A09383]">Previous System</span>
                <div className="text-base font-bold text-white font-sans group-hover:text-white transition-colors mt-0.5">
                  {prevProject.title}
                </div>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-6 border border-white/10 bg-[#0A0503] hover:border-[#C43E17]/50 rounded-sm transition-all group flex items-start justify-between gap-4 text-right"
            >
              <div className="w-full">
                <span className="text-[10px] font-mono uppercase text-[#A09383]">Next System</span>
                <div className="text-base font-bold text-white font-sans group-hover:text-white transition-colors mt-0.5">
                  {nextProject.title}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#A09383] group-hover:text-[#C43E17] mt-1 shrink-0" />
            </Link>
          ) : <div />}
        </div>

      </div>
    </article>
  );
}