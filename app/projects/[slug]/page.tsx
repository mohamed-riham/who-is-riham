import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Play, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Layers, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";
import { getAssetPath } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
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

  return {
    title: `${project.title} | Mohamed Riham`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Mohamed Riham`,
      description: project.summary,
      type: "article",
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

  return (
    <article className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A4ADBB] hover:text-[#63DCC6] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </Link>

        {/* Case Study Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#183F43] text-[#63DCC6] border border-[#63DCC6]/20">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-[#A4ADBB] border border-white/[0.08]">
              {project.status}
            </span>
            <span className="text-[#69778A]">{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#F2F0E9] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#63DCC6] font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* Links Bar */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#63DCC6]" />
                View Source on GitHub
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#080D18] bg-[#D9A441] hover:bg-[#ebaf4c] px-4 py-2.5 rounded-xl transition-all shadow-sm shadow-[#D9A441]/20"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch YouTube Demo
              </a>
            )}
            {project.links.article && (
              <a
                href={project.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-[#63DCC6]" />
                Read Article
              </a>
            )}
          </div>
        </div>

        {/* Primary Cover Image (if available) */}
        {project.image && (
          <div className="relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-12 bg-[#0D1422] shadow-2xl">
            <Image
              src={getAssetPath(project.image)}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Key Verified Metrics Table */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#0D1422] border border-white/10 shadow-lg">
          <div className="text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verified Empirical Results & Performance</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.results.map((r, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-[#080D18] border border-white/5">
                <div className="text-[11px] font-mono text-[#69778A]">{r.label}</div>
                <div className="text-base sm:text-lg font-bold font-mono text-[#F2F0E9] mt-1">
                  {r.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Body Sections */}
        <div className="space-y-12 text-sm sm:text-base leading-relaxed text-[#A4ADBB]">
          {/* Problem */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#F2F0E9] tracking-tight">
              1. The Problem
            </h2>
            <p>{project.problem}</p>
          </section>

          {/* Solution & Approach */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#F2F0E9] tracking-tight">
              2. Solution & Technical Approach
            </h2>
            <p>{project.solution}</p>
            <ul className="space-y-3 pt-2">
              {project.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#F2F0E9]">
                  <span className="w-2 h-2 rounded-full bg-[#63DCC6] mt-2 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture Details */}
          {project.architectureDetails && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#F2F0E9] tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#63DCC6]" />
                3. System Architecture
              </h2>
              <div className="p-5 rounded-2xl bg-[#080D18] border border-white/10 font-mono text-xs text-[#63DCC6] leading-relaxed shadow-inner">
                {project.architectureDetails}
              </div>

              {project.diagram && (
                <div className="relative w-full h-[280px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 mt-5 bg-[#080D18] shadow-lg">
                  <Image
                    src={getAssetPath(project.diagram)}
                    alt={`${project.title} technical architecture diagram`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              )}
            </section>
          )}

          {/* Contribution */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#F2F0E9] tracking-tight">
              4. Personal Engineering Contribution
            </h2>
            <p>{project.contribution}</p>
          </section>

          {/* Limitations & Future Work */}
          {project.limitations && (
            <section className="space-y-3 p-6 rounded-2xl bg-[#0D1422] border border-[#D9A441]/20">
              <h3 className="text-base font-bold text-[#F2F0E9] tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#D9A441]" />
                <span>Honest Limitations & Edge Cases</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#A4ADBB] leading-relaxed">
                {project.limitations}
              </p>
            </section>
          )}

          {/* Tech Stack Chips */}
          <section className="space-y-3 pt-6 border-t border-white/[0.08]">
            <h3 className="text-xs font-mono text-[#69778A] uppercase tracking-wider">
              Technologies & Libraries Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-xl bg-[#0D1422] text-[#F2F0E9] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Next / Previous Project Pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-white/[0.08]">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-5 rounded-2xl bg-[#0D1422] border border-white/10 hover:border-[#63DCC6]/40 transition-colors flex flex-col items-start group shadow-sm"
            >
              <span className="text-xs font-mono text-[#69778A] flex items-center gap-1.5 mb-1.5">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </span>
              <span className="text-sm font-bold text-[#F2F0E9] group-hover:text-[#63DCC6] transition-colors line-clamp-1">
                {prevProject.title}
              </span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-5 rounded-2xl bg-[#0D1422] border border-white/10 hover:border-[#63DCC6]/40 transition-colors flex flex-col items-end group shadow-sm"
            >
              <span className="text-xs font-mono text-[#69778A] flex items-center gap-1.5 mb-1.5">
                Next Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-bold text-[#F2F0E9] group-hover:text-[#63DCC6] transition-colors line-clamp-1">
                {nextProject.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}
