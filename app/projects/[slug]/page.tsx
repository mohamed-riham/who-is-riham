import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Play, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Layers, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";

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
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8B9BB0] hover:text-[#00F2FE] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to all projects
        </Link>

        {/* Case Study Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[#8B9BB0] border border-white/10">
              {project.status}
            </span>
            <span className="text-[#5C6B7E]">{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#00F2FE] font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* Links Bar */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0C111A] hover:bg-[#131A26] border border-white/10 px-4 py-2 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#00F2FE]" />
                View Source on GitHub
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#070A0F] bg-[#F5A623] hover:bg-[#FFB733] px-4 py-2 rounded-lg transition-colors"
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
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Read Article
              </a>
            )}
          </div>
        </div>

        {/* Primary Cover Image (if available) */}
        {project.image && (
          <div className="relative w-full h-[320px] sm:h-[460px] rounded-2xl overflow-hidden border border-white/10 mb-12 bg-[#0C111A]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Key Verified Metrics Table */}
        <div className="mb-12 p-6 rounded-2xl bg-[#0C111A] border border-white/10">
          <div className="text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Verified Empirical Results & Performance
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.results.map((r, i) => (
              <div key={i} className="p-3 rounded-xl bg-[#070A0F] border border-white/5">
                <div className="text-[11px] font-mono text-[#5C6B7E]">{r.label}</div>
                <div className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
                  {r.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Body Sections */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[#8B9BB0]">
          {/* Problem */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. The Problem
            </h2>
            <p>{project.problem}</p>
          </section>

          {/* Solution & Approach */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Solution & Technical Approach
            </h2>
            <p>{project.solution}</p>
            <ul className="space-y-2.5 pt-2">
              {project.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F0F4F8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] mt-2 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture Details */}
          {project.architectureDetails && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#00F2FE]" />
                3. System Architecture
              </h2>
              <div className="p-4 rounded-xl bg-[#070A0F] border border-white/10 font-mono text-xs text-[#00F2FE] leading-relaxed">
                {project.architectureDetails}
              </div>

              {project.diagram && (
                <div className="relative w-full h-[280px] sm:h-[380px] rounded-xl overflow-hidden border border-white/10 mt-4 bg-[#070A0F]">
                  <Image
                    src={project.diagram}
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
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Personal Engineering Contribution
            </h2>
            <p>{project.contribution}</p>
          </section>

          {/* Limitations & Future Work */}
          {project.limitations && (
            <section className="space-y-3 p-5 rounded-xl bg-[#0C111A] border border-white/5">
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#F5A623]" />
                Honest Limitations & Edge Cases
              </h3>
              <p className="text-xs sm:text-sm text-[#8B9BB0]">
                {project.limitations}
              </p>
            </section>
          )}

          {/* Tech Stack Chips */}
          <section className="space-y-3 pt-4 border-t border-white/[0.08]">
            <h3 className="text-xs font-mono text-[#5C6B7E] uppercase tracking-wider">
              Technologies & Libraries Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-[#0C111A] text-white border border-white/10"
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
              className="p-4 rounded-xl bg-[#0C111A] border border-white/10 hover:border-[#00F2FE]/40 transition-colors flex flex-col items-start group"
            >
              <span className="text-[11px] font-mono text-[#5C6B7E] flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </span>
              <span className="text-sm font-bold text-white group-hover:text-[#00F2FE] transition-colors line-clamp-1">
                {prevProject.title}
              </span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 rounded-xl bg-[#0C111A] border border-white/10 hover:border-[#00F2FE]/40 transition-colors flex flex-col items-end group"
            >
              <span className="text-[11px] font-mono text-[#5C6B7E] flex items-center gap-1 mb-1">
                Next Project
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-bold text-white group-hover:text-[#00F2FE] transition-colors line-clamp-1">
                {nextProject.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}
