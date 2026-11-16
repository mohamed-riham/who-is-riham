import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, ExternalLink, Cpu, ShieldCheck, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5" />
              Verified Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Research
            </h2>
          </div>
          <p className="text-sm text-[#8B9BB0] max-w-md font-normal">
            Rigorous applied AI models, localized offline automation, and distributed systems backed by actual repository source code and empirical datasets.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top 1 Hero Project: Sri Lankan Currency Detector (Span 12) */}
          {featured[0] && (
            <div className="md:col-span-12 rounded-2xl bg-gradient-to-b from-[#0F1622] to-[#0A0F17] border border-white/10 hover:border-[#00F2FE]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center group">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                    {featured[0].category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-[#8B9BB0] border border-white/10">
                    {featured[0].status}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20">
                    99.20% mAP@50
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#00F2FE] transition-colors">
                  <Link href={`/projects/${featured[0].slug}`}>
                    {featured[0].title}
                  </Link>
                </h3>

                <p className="text-sm text-[#8B9BB0] leading-relaxed">
                  {featured[0].problem} {featured[0].solution}
                </p>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {featured[0].results.map((r, i) => (
                    <div key={i} className="bg-[#070A0F]/80 p-2.5 rounded-lg border border-white/5">
                      <div className="text-[11px] font-mono text-[#5C6B7E]">{r.label}</div>
                      <div className="text-sm font-bold font-mono text-white">{r.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featured[0].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-[#8B9BB0] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3">
                  <Link
                    href={`/projects/${featured[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#070A0F] bg-[#00F2FE] hover:bg-[#00D2FF] px-4 py-2 rounded-lg transition-colors"
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {featured[0].links.github && (
                    <a
                      href={featured[0].links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      GitHub Repo
                    </a>
                  )}
                  {featured[0].links.video && (
                    <a
                      href={featured[0].links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5A623] bg-[#F5A623]/10 hover:bg-[#F5A623]/20 px-3.5 py-2 rounded-lg border border-[#F5A623]/20 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Visual preview */}
              <div className="w-full lg:w-[460px] h-[280px] sm:h-[320px] relative rounded-xl overflow-hidden border border-white/10 bg-[#070A0F]">
                {featured[0].image && (
                  <Image
                    src={featured[0].image}
                    alt="YOLOv8 Sri Lankan Currency Detection bounding box output"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F17] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 bg-[#070A0F]/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[11px] font-mono text-[#00F2FE]">
                  1,000+ Custom Annotated Dataset
                </div>
              </div>
            </div>
          )}

          {/* Cards 2 & 3: Fraud Detection Study (Span 6) & EDITH Voice Assistant (Span 6) */}
          {featured.slice(1, 3).map((project) => (
            <div
              key={project.slug}
              className="md:col-span-6 rounded-2xl bg-gradient-to-b from-[#0C121B] to-[#080C12] border border-white/10 hover:border-[#00F2FE]/30 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#5C6B7E]">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#00F2FE] transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#8B9BB0] leading-relaxed line-clamp-3">
                  {project.problem}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {project.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="bg-[#070A0F]/80 p-2.5 rounded-lg border border-white/5">
                      <div className="text-[10px] font-mono text-[#5C6B7E]">{r.label}</div>
                      <div className="text-xs font-bold font-mono text-white">{r.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] text-[#8B9BB0] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-4 border-t border-white/[0.06]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#00F2FE] hover:underline"
                >
                  Read Deep Dive
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#8B9BB0] hover:text-white ml-auto"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}
                {project.links.article && (
                  <a
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#8B9BB0] hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Article
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Cards 4 & 5: NOIR Downloader (Span 6) & Real Estate Tokenization DApp (Span 6) */}
          {featured.slice(3, 5).map((project) => (
            <div
              key={project.slug}
              className="md:col-span-6 rounded-2xl bg-gradient-to-b from-[#0C121B] to-[#080C12] border border-white/10 hover:border-[#00F2FE]/30 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#5C6B7E]">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#00F2FE] transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#8B9BB0] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {project.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="bg-[#070A0F]/80 p-2.5 rounded-lg border border-white/5">
                      <div className="text-[10px] font-mono text-[#5C6B7E]">{r.label}</div>
                      <div className="text-xs font-bold font-mono text-white">{r.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] text-[#8B9BB0] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-4 border-t border-white/[0.06]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#00F2FE] hover:underline"
                >
                  Read Deep Dive
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#8B9BB0] hover:text-white ml-auto"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
