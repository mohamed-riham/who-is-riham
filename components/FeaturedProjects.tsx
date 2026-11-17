"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, ExternalLink, Cpu, BarChart2, Radio, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";
import { getAssetPath } from "@/lib/utils";

export default function FeaturedProjects() {
  const currencyDetector = projects.find((p) => p.slug === "sri-lankan-currency-detector");
  const fraudDetection = projects.find((p) => p.slug === "credit-card-fraud-detection");
  const edith = projects.find((p) => p.slug === "edith-voice-assistant");

  return (
    <section id="showcase" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-[#040202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              02 // Systems Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Selected systems & applied research.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            Engineered systems with verifiable evaluation metrics, open repositories, and production-tested architectures.
          </p>
        </div>

        {/* =========================================================================
            FEATURED PROJECT 01: SRI LANKAN CURRENCY DETECTOR (LEAD SHOWCASE)
            ========================================================================= */}
        {currencyDetector && (
          <div className="border border-[#6B503C]/30 bg-[#0A0503] grid grid-cols-1 lg:grid-cols-12 overflow-hidden group">
            {/* Left Column: Technical Narrative & Scorecard (6 cols) */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#6B503C]/25 space-y-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#C43E17] tracking-wider uppercase">System 01 // Computer Vision</span>
                  <span className="text-[#DEA355] border border-[#DEA355]/30 px-2.5 py-0.5 bg-[#DEA355]/10">
                    99.20% mAP@50
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F6] font-sans leading-tight">
                  <Link href={`/projects/${currencyDetector.slug}`} className="hover:text-[#DEA355] transition-colors">
                    {currencyDetector.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#D3C29F] leading-relaxed font-light">
                  {currencyDetector.summary}
                </p>

                {/* Scorecard Strip */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#6B503C]/20 font-mono">
                  <div className="p-3 bg-[#120704] border border-[#6B503C]/20">
                    <div className="text-[10px] text-[#8E7F70] uppercase">mAP@50</div>
                    <div className="text-lg font-bold text-[#F9F9F6] mt-0.5">99.20%</div>
                  </div>
                  <div className="p-3 bg-[#120704] border border-[#6B503C]/20">
                    <div className="text-[10px] text-[#8E7F70] uppercase">Precision</div>
                    <div className="text-lg font-bold text-[#F9F9F6] mt-0.5">99.25%</div>
                  </div>
                  <div className="p-3 bg-[#120704] border border-[#6B503C]/20">
                    <div className="text-[10px] text-[#8E7F70] uppercase">Recall</div>
                    <div className="text-lg font-bold text-[#F9F9F6] mt-0.5">99.18%</div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currencyDetector.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#160C07] border border-[#6B503C]/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Cluster */}
              <div className="pt-6 border-t border-[#6B503C]/20 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${currencyDetector.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C43E17] hover:bg-[#DB4A1E] text-[#040202] font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {currencyDetector.links.github && (
                  <a
                    href={currencyDetector.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/35 text-[#F9F9F6] font-mono text-xs transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#D3C29F]" />
                    <span>Repository</span>
                  </a>
                )}

                {(currencyDetector.links.video || currencyDetector.links.demo) && (
                  <a
                    href={currencyDetector.links.video || currencyDetector.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#DEA355] hover:underline"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Watch Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: High-Resolution Real Prediction Visual (6 cols) */}
            <div className="lg:col-span-6 bg-[#040202] p-6 lg:p-8 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="relative aspect-[4/3] w-full border border-[#6B503C]/35 overflow-hidden bg-[#0A0503]">
                <Image
                  src={getAssetPath("/images/projects/sri-lankan-currency-detector/val_batch0_pred.jpg")}
                  alt="Sri Lankan Currency Detector model predictions on test batch"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute top-3 left-3 bg-[#040202]/90 border border-[#6B503C]/40 px-3 py-1 font-mono text-[10px] text-[#F9F9F6]">
                  EVALUATION // BATCH 0 PREDICTIONS
                </div>
              </div>

              <div className="w-full mt-3 flex items-center justify-between text-[11px] font-mono text-[#8E7F70]">
                <span>1,000+ Custom Annotated Banknotes</span>
                <span className="text-[#DEA355]">Edge-deployable model</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            FEATURED PROJECT 02: CREDIT CARD FRAUD DETECTION (ALTERNATING SPREAD)
            ========================================================================= */}
        {fraudDetection && (
          <div className="border border-[#6B503C]/30 bg-[#0A0503] grid grid-cols-1 lg:grid-cols-12 overflow-hidden group">
            {/* Left Column: Visual / Confusion Matrix (6 cols) */}
            <div className="lg:col-span-6 order-2 lg:order-1 bg-[#040202] p-6 lg:p-8 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-r border-[#6B503C]/25">
              <div className="relative aspect-[4/3] w-full border border-[#6B503C]/35 overflow-hidden bg-[#0A0503] p-4 flex flex-col justify-between">
                {/* Metric Summary Card in place of image */}
                <div className="p-4 bg-[#120704] border border-[#6B503C]/25 space-y-2">
                  <div className="font-mono text-xs text-[#DEA355]">Dataset Benchmark Ledger</div>
                  <div className="text-sm text-[#F9F9F6] font-mono">284,807 European Cardholder Transactions</div>
                  <div className="text-[11px] text-[#8E7F70] font-mono">Highly Imbalanced: 492 Frauds (0.172%)</div>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 bg-[#120704] border border-[#6B503C]/20">
                    <span className="text-[#8E7F70] block text-[10px]">SIGNIFICANCE</span>
                    <span className="text-xl font-bold text-[#F9F9F6]">p = 0.0003</span>
                  </div>
                  <div className="p-3 bg-[#120704] border border-[#6B503C]/20">
                    <span className="text-[#8E7F70] block text-[10px]">TOP MODEL</span>
                    <span className="text-xl font-bold text-[#DEA355]">XGBoost</span>
                  </div>
                </div>

                <div className="p-3 bg-[#120704] border border-[#6B503C]/20 text-[11px] font-mono text-[#8E7F70] flex justify-between">
                  <span>SMOTE Resampling (Train Split)</span>
                  <span className="text-[#C43E17]">vs Random Forest</span>
                </div>
              </div>

              <div className="w-full mt-3 flex items-center justify-between text-[11px] font-mono text-[#8E7F70]">
                <span>Empirical Big Data Research</span>
                <span className="text-[#DEA355]">Comparative Model Analysis</span>
              </div>
            </div>

            {/* Right Column: Technical Narrative (6 cols) */}
            <div className="lg:col-span-6 order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#C43E17] tracking-wider uppercase">System 02 // Machine Learning</span>
                  <span className="text-[#DEA355] border border-[#DEA355]/30 px-2.5 py-0.5 bg-[#DEA355]/10">
                    XGBoost vs Random Forest
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F6] font-sans leading-tight">
                  <Link href={`/projects/${fraudDetection.slug}`} className="hover:text-[#DEA355] transition-colors">
                    {fraudDetection.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#D3C29F] leading-relaxed font-light">
                  {fraudDetection.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {fraudDetection.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#160C07] border border-[#6B503C]/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Cluster */}
              <div className="pt-6 border-t border-[#6B503C]/20 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${fraudDetection.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C43E17] hover:bg-[#DB4A1E] text-[#040202] font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {fraudDetection.links.paper && (
                  <a
                    href={fraudDetection.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/35 text-[#DEA355] hover:text-[#F9F9F6] font-mono text-xs transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#DEA355]" />
                    <span>Research Paper</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8E7F70]" />
                  </a>
                )}

                {fraudDetection.links.github && (
                  <a
                    href={fraudDetection.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/35 text-[#F9F9F6] font-mono text-xs transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#D3C29F]" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
