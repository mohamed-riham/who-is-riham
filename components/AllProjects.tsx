"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Play } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects, Project } from "@/content/projects";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

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
  const [showAll, setShowAll] = useState(false);

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const INITIAL_COUNT = 4;
  const initialProjects = filtered.slice(0, INITIAL_COUNT);
  const extraProjects = filtered.slice(INITIAL_COUNT);

  const renderProjectRow = (project: Project, idx: number) => {
    const indexStr = String(idx + 1).padStart(2, "0");
    return (
      <div
        key={project.slug}
        className="py-7 group hover:bg-[#0A0503] transition-all px-4 sm:px-6 rounded-sm border border-transparent hover:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
      >
        {/* Left: Index & Title & Problem */}
        <div className="flex items-start gap-5 lg:w-1/2">
          <span className="font-mono text-xs text-[#A09383] group-hover:text-[#C43E17] transition-colors pt-1">
            /{indexStr}
          </span>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C43E17] font-semibold">
                {project.category}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[10px] font-mono text-[#A09383]">
                {project.year}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white font-sans group-hover:text-white transition-colors">
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
            <div className="font-mono text-xs text-white flex items-center gap-2">
              <span className="text-[10px] text-[#A09383] uppercase">Benchmark:</span>
              <span className="text-[#C43E17] font-semibold">
                {project.results[0].label}: {project.results[0].value}
              </span>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10 rounded-sm"
              >
                {t}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#A09383]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0E0604] hover:bg-[#C43E17] hover:text-[#040202] border border-white/10 hover:border-[#C43E17] text-white font-mono text-xs rounded-sm transition-all"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>

          {project.links.video && (
            <a
              href={project.links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 text-white hover:text-[#C43E17] rounded-sm transition-colors"
              title="Video Demonstration (YouTube)"
            >
              <Play className="w-3.5 h-3.5 text-[#C43E17]" />
            </a>
          )}

          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 text-white hover:text-[#C43E17] rounded-sm transition-colors"
              title="Research Paper (Academia.edu)"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#C43E17]" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 text-white hover:text-[#C43E17] rounded-sm transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#A09383]" />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="systems" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17]" />
              03 // SYSTEMS CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Complete engineering index.
            </h2>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`text-xs font-mono px-3.5 py-1.5 transition-all rounded-sm border ${
                  selectedCategory === cat
                    ? "bg-[#C43E17] text-[#040202] border-[#C43E17] font-bold shadow-[0_0_12px_rgba(196,62,23,0.35)]"
                    : "bg-[#0A0503] text-[#D3C29F] border-white/10 hover:border-[#C43E17] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tabular Project Ledger */}
        <div id="projects-catalog-ledger" className="space-y-2">
          <div className="divide-y divide-white/5">
            {initialProjects.map((project, idx) => renderProjectRow(project, idx))}
          </div>

          {extraProjects.length > 0 && (
            <SmoothExpand isExpanded={showAll}>
              <div className="divide-y divide-white/5 border-t border-white/10 pt-2">
                {extraProjects.map((project, idx) =>
                  renderProjectRow(project, INITIAL_COUNT + idx)
                )}
              </div>
            </SmoothExpand>
          )}
        </div>

        {/* Progressive Disclosure Controls */}
        {filtered.length > INITIAL_COUNT && (
          <ExpandControl
            isExpanded={showAll}
            onToggle={() => setShowAll(!showAll)}
            controlsId="projects-catalog-ledger"
            collapsedIndicator={`SHOWING ${initialProjects.length} OF ${filtered.length} PROJECTS`}
            expandedIndicator={`ALL ${filtered.length} PROJECTS DISPLAYED`}
            collapsedLabel={`View All ${filtered.length - INITIAL_COUNT} Remaining Projects`}
            expandedLabel="Show Fewer Projects"
            className="mt-6"
          />
        )}

      </div>
    </section>
  );
}