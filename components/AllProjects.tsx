"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects, Project } from "@/content/projects";

const categories = [
  "All",
  "Computer Vision",
  "Machine Learning",
  "Intelligent Automation",
  "Tools & Web",
  "Blockchain & IoT",
] as const;

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08] bg-[#080D18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-2.5">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Technical Project Archive</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F2F0E9] tracking-tight">
              All Verified{" "}
              <span className="font-serif italic font-normal text-[#63DCC6]">
                Systems
              </span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#0D1422] border border-white/10 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? "bg-[#63DCC6] text-[#080D18] font-semibold shadow-sm"
                    : "text-[#A4ADBB] hover:text-[#F2F0E9] hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="p-6 rounded-2xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:translate-y-[-2px]"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#63DCC6] font-medium">{project.category}</span>
                  <span className="text-[#69778A]">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-[#F2F0E9] group-hover:text-[#63DCC6] transition-colors leading-snug">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#A4ADBB] leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[10px] font-mono rounded-lg bg-white/[0.03] text-[#A4ADBB] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-[#69778A]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 mt-4 border-t border-white/[0.06] text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#63DCC6] hover:underline"
                >
                  Deep dive
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#A4ADBB] hover:text-[#F2F0E9] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source
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
