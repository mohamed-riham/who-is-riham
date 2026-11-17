"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, ExternalLink, BookOpen, Play } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";

const categories = [
  "All",
  "Computer Vision",
  "Machine Learning",
  "Intelligent Automation",
  "Tools & Web",
  "Blockchain & IoT",
  "Interactive 3D",
] as const;

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="systems" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-[#040202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              03 // Systems Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Complete engineering index.
            </h2>
          </div>

          {/* Editorial Category Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 transition-colors border ${
                  selectedCategory === cat
                    ? "bg-[#C43E17] text-[#040202] border-[#C43E17] font-bold"
                    : "bg-[#120704] text-[#D3C29F] border-[#6B503C]/30 hover:border-[#DEA355] hover:text-[#F9F9F6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Tabular Project Ledger */}
        <div className="divide-y divide-[#6B503C]/20">
          {filtered.map((project, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={project.slug}
                className="py-8 group hover:bg-[#0D0704] transition-colors px-4 -mx-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Index & Title & Problem */}
                <div className="flex items-start gap-6 lg:w-1/2">
                  <span className="font-mono text-xs text-[#8E7F70] group-hover:text-[#C43E17] transition-colors pt-1">
                    /{indexStr}
                  </span>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#DEA355]">
                        {project.category}
                      </span>
                      <span className="text-[#6B503C]">·</span>
                      <span className="text-[10px] font-mono text-[#8E7F70]">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans group-hover:text-[#DEA355] transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#D3C29F] font-light leading-relaxed max-w-xl">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Center: Empirical Highlight & Tech Stack */}
                <div className="lg:w-1/3 space-y-2">
                  {project.results && project.results.length > 0 && (
                    <div className="font-mono text-xs text-[#F9F9F6] flex items-center gap-2">
                      <span className="text-[10px] text-[#8E7F70] uppercase">Benchmark:</span>
                      <span className="text-[#C43E17] font-semibold">
                        {project.results[0].label}: {project.results[0].value}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono text-[#8E7F70] bg-[#140A06] border border-[#6B503C]/20"
                      >
                        {t}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#6B503C]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#160C07] hover:bg-[#C43E17] hover:text-[#040202] border border-[#6B503C]/35 text-[#F9F9F6] font-mono text-xs transition-colors"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>

                  {project.links.video && (
                    <a
                      href={project.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/30 text-[#DEA355] hover:text-[#F9F9F6] transition-colors"
                      title="Video Demonstration (YouTube)"
                    >
                      <Play className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/30 text-[#DEA355] hover:text-[#F9F9F6] transition-colors"
                      title="Research Paper (Academia.edu)"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/30 text-[#D3C29F] hover:text-[#F9F9F6] transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
