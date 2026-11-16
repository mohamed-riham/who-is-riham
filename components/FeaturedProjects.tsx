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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Verified Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F2F0E9] tracking-tight">
              Featured Projects &{" "}
              <span className="font-serif italic font-normal text-[#63DCC6]">
                Applied Research
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#A4ADBB] max-w-md font-normal leading-relaxed">
            Applied computer vision models, local automation engines, and distributed systems backed by empirical datasets and verifiable code.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top 1 Hero Project: Sri Lankan Currency Detector (Span 12) */}
          {featured[0] && (
            <div className="md:col-span-12 rounded-3xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/40 transition-all duration-300 p-6 sm:p-9 flex flex-col lg:flex-row gap-8 items-center group shadow-xl">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#183F43] text-[#63DCC6] border border-[#63DCC6]/20">
                    {featured[0].category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-[#A4ADBB] border border-white/[0.08]">
                    {featured[0].status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#D9A441]/10 text-[#D9A441] border border-[#D9A441]/20 font-medium">
                    99.20% mAP@50
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F0E9] tracking-tight group-hover:text-[#63DCC6] transition-colors">
                  <Link href={`/projects/${featured[0].slug}`}>
                    {featured[0].title}
                  </Link>
                </h3>

                <p className="text-sm text-[#A4ADBB] leading-relaxed">
                  {featured[0].problem} {featured[0].solution}
                </p>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  {featured[0].results.map((r, i) => (
                    <div key={i} className="bg-[#080D18] p-3 rounded-xl border border-white/[0.06]">
                      <div className="text-[10px] font-mono text-[#69778A]">{r.label}</div>
                      <div className="text-sm font-bold font-mono text-[#F2F0E9] mt-0.5">{r.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featured[0].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/[0.03] text-[#A4ADBB] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href={`/projects/${featured[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#080D18] bg-[#63DCC6] hover:bg-[#78e3ce] px-4 py-2.5 rounded-xl transition-all shadow-sm shadow-[#63DCC6]/20 active:scale-95"
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {featured[0].links.github && (
                    <a
                      href={featured[0].links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F2F0E9] bg-white/[0.04] hover:bg-white/[0.08] px-3.5 py-2.5 rounded-xl border border-white/10 transition-colors"
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
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D9A441] bg-[#D9A441]/10 hover:bg-[#D9A441]/20 px-3.5 py-2.5 rounded-xl border border-[#D9A441]/20 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Visual preview */}
              <div className="w-full lg:w-[480px] h-[280px] sm:h-[340px] relative rounded-2xl overflow-hidden border border-white/10 bg-[#080D18] shadow-2xl">
                {featured[0].image && (
                  <Image
                    src={featured[0].image}
                    alt="YOLOv8 Sri Lankan Currency Detection bounding box output"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 bg-[#080D18]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-[#63DCC6]">
                  1,000+ Custom Annotated Dataset
                </div>
              </div>
            </div>
          )}

          {/* Cards 2 & 3: Fraud Detection Study (Span 6) & EDITH Voice Assistant (Span 6) */}
          {featured.slice(1, 3).map((project) => (
            <div
              key={project.slug}
              className="md:col-span-6 rounded-3xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/30 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#183F43] text-[#63DCC6] border border-[#63DCC6]/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#69778A]">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F2F0E9] tracking-tight group-hover:text-[#63DCC6] transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-sm text-[#A4ADBB] leading-relaxed line-clamp-3">
                  {project.problem}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {project.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="bg-[#080D18] p-3 rounded-xl border border-white/[0.06]">
                      <div className="text-[10px] font-mono text-[#69778A]">{r.label}</div>
                      <div className="text-xs font-bold font-mono text-[#F2F0E9] mt-0.5">{r.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/[0.03] text-[#A4ADBB] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-white/[0.06]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#63DCC6] hover:underline"
                >
                  Read Deep Dive
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A4ADBB] hover:text-[#F2F0E9] ml-auto transition-colors"
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
                    className="inline-flex items-center gap-1 text-xs text-[#A4ADBB] hover:text-[#F2F0E9] transition-colors"
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
              className="md:col-span-6 rounded-3xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/30 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#183F43] text-[#63DCC6] border border-[#63DCC6]/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#69778A]">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F2F0E9] tracking-tight group-hover:text-[#63DCC6] transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-sm text-[#A4ADBB] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {project.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="bg-[#080D18] p-3 rounded-xl border border-white/[0.06]">
                      <div className="text-[10px] font-mono text-[#69778A]">{r.label}</div>
                      <div className="text-xs font-bold font-mono text-[#F2F0E9] mt-0.5">{r.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/[0.03] text-[#A4ADBB] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-white/[0.06]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#63DCC6] hover:underline"
                >
                  Read Deep Dive
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A4ADBB] hover:text-[#F2F0E9] ml-auto transition-colors"
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
