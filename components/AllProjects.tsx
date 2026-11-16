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
    <section className="py-16 md:py-24 border-t border-white/[0.08] bg-[#070A0F]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              Full Technical Archive
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              All Verified Projects
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0C111A] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-[#00F2FE] text-[#070A0F] font-semibold shadow-sm"
                    : "text-[#8B9BB0] hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="p-5 rounded-xl bg-[#0C111A] border border-white/[0.08] hover:border-[#00F2FE]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#00F2FE]">{project.category}</span>
                  <span className="text-[#5C6B7E]">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00F2FE] transition-colors leading-snug">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-xs text-[#8B9BB0] leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] text-[#8B9BB0] border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#5C6B7E]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.05] text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 font-medium text-[#00F2FE] hover:underline"
                >
                  Deep dive
                  <ArrowUpRight className="w-3 h-3" />
                </Link>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#8B9BB0] hover:text-white"
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
