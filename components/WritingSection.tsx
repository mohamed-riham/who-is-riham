"use client";

import { ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";
import { writingArticles } from "@/content/writing";

export default function WritingSection() {
  return (
    <section id="writing" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-[#040202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              09 // Publication Index
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Research notes & technical writing.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            Engineering breakdowns, computer vision architectures, and applied machine learning analyses published on DEV and Medium.
          </p>
        </div>

        {/* Numbered Editorial Publication List */}
        <div className="divide-y divide-[#6B503C]/20">
          {writingArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group hover:bg-[#0D0704] transition-colors px-4 -mx-4"
            >
              <div className="flex items-start gap-6 lg:w-2/3">
                <span className="font-mono text-xs text-[#8E7F70] group-hover:text-[#C43E17] transition-colors pt-1">
                  /{String(idx + 1).padStart(2, "0")}
                </span>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#8E7F70]">
                    <span className="text-[#DEA355]">{article.platform}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans group-hover:text-[#DEA355] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D3C29F] font-light leading-relaxed max-w-2xl">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-4 lg:w-1/3">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono text-[#8E7F70] bg-[#140A06] border border-[#6B503C]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="p-2 bg-[#120704] text-[#D3C29F] group-hover:text-[#F9F9F6] group-hover:bg-[#C43E17] group-hover:text-[#040202] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
