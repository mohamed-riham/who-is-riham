"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { writingArticles, WritingItem } from "@/content/writing";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

export default function WritingSection() {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const INITIAL_COUNT = 4;
  const initialArticles = writingArticles.slice(0, INITIAL_COUNT);
  const extraArticles = writingArticles.slice(INITIAL_COUNT);

  const renderArticleRow = (article: WritingItem, idx: number) => (
    <a
      key={idx}
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="py-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group hover:bg-[#0A0503] rounded-sm transition-all px-4 sm:px-6 border border-transparent hover:border-[#C43E17]/40 hover:shadow-[0_0_24px_rgba(196,62,23,0.12)]"
    >
      <div className="flex items-start gap-5 lg:w-2/3">
        <span className="font-mono text-xs text-[#A09383] group-hover:text-[#C43E17] transition-colors pt-1">
          /{String(idx + 1).padStart(2, "0")}
        </span>

        <div className="space-y-2">
          <div className="flex items-center gap-3 font-mono text-xs text-[#A09383]">
            <span className="text-[#C43E17] font-semibold">{article.platform}</span>
            <span className="text-white/20">·</span>
            <span>{article.date}</span>
            <span className="text-white/20">·</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white font-sans group-hover:text-white transition-colors leading-snug">
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
              className="px-2 py-0.5 text-[10px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="p-2 bg-[#0E0604] border border-white/10 text-white rounded-sm group-hover:text-[#040202] group-hover:bg-[#C43E17] group-hover:border-[#C43E17] group-hover:shadow-[0_0_15px_rgba(196,62,23,0.4)] transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );

  return (
    <section id="writing" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
              09 // PUBLICATION INDEX
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Research notes <span className="text-[#C43E17]">&amp; technical writing.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A09383] leading-relaxed font-light">
            Engineering breakdowns, computer vision architectures, and applied machine learning analyses published on DEV and Medium.
          </p>
        </div>

        {/* Publication List */}
        <div id="writing-publications-ledger" className="space-y-2">
          <div className="divide-y divide-white/5">
            {initialArticles.map((article, idx) => renderArticleRow(article, idx))}
          </div>

          {extraArticles.length > 0 && (
            <SmoothExpand isExpanded={showAllArticles}>
              <div className="divide-y divide-white/5 border-t border-white/10 pt-2">
                {extraArticles.map((article, idx) =>
                  renderArticleRow(article, INITIAL_COUNT + idx)
                )}
              </div>
            </SmoothExpand>
          )}
        </div>

        {/* Progressive Disclosure Controls */}
        {writingArticles.length > INITIAL_COUNT && (
          <ExpandControl
            isExpanded={showAllArticles}
            onToggle={() => setShowAllArticles(!showAllArticles)}
            controlsId="writing-publications-ledger"
            collapsedIndicator={`SHOWING ${initialArticles.length} OF ${writingArticles.length} PUBLICATIONS`}
            expandedIndicator={`ALL ${writingArticles.length} PUBLICATIONS DISPLAYED`}
            collapsedLabel={`View All Publications & Research (${writingArticles.length - INITIAL_COUNT} Remaining Article)`}
            expandedLabel="Show Fewer Publications"
            className="mt-6"
          />
        )}

      </div>
    </section>
  );
}