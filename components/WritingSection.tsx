"use client";

import { useState } from "react";
import { ArrowUpRight, Calendar, Clock, BookOpen, ChevronDown } from "lucide-react";
import { writingArticles } from "@/content/writing";

export default function WritingSection() {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const INITIAL_COUNT = 4;
  const visibleArticles = showAllArticles ? writingArticles : writingArticles.slice(0, INITIAL_COUNT);

  return (
    <section id="writing" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-transparent">
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
        <div id="writing-publications-ledger" className="divide-y divide-[#6B503C]/20">
          {visibleArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group hover:bg-[#0D0704] transition-colors px-3 sm:px-4"
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

                <div className="p-2 bg-[#120704] text-[#D3C29F] group-hover:text-[#040202] group-hover:bg-[#C43E17] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Smart View More / Show Less Controls (Noir Editorial 5.2) */}
        {writingArticles.length > INITIAL_COUNT && (
          <div className="pt-10 flex justify-center">
            <button
              onClick={() => setShowAllArticles(!showAllArticles)}
              aria-expanded={showAllArticles}
              aria-controls="writing-publications-ledger"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/35 hover:border-[#DEA355] text-xs font-mono font-bold text-[#F9F9F6] transition-all group shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEA355] group-hover:scale-125 transition-transform" />
              <span>
                {showAllArticles
                  ? "Show Fewer Publications"
                  : `View All Publications & Research (${writingArticles.length} Total)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#DEA355] transition-transform duration-300 ${
                  showAllArticles ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
