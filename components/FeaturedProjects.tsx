"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, ExternalLink, BookOpen, ShieldCheck, Activity } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";
import { getAssetPath } from "@/lib/utils";

export default function FeaturedProjects() {
  const currencyDetector = projects.find((p) => p.slug === "sri-lankan-currency-detector");
  const fraudDetection = projects.find((p) => p.slug === "credit-card-fraud-detection");
  const edith = projects.find((p) => p.slug === "edith-voice-assistant");

  return (
    <section id="showcase" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17]" />
              02 // SYSTEMS SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Selected systems <span className="text-[#C43E17]">& applied research.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A09383] leading-relaxed font-light">
            Engineered systems with verifiable evaluation metrics, open repositories, and production-tested architectures.
          </p>
        </div>

        {/* =========================================================================
            SYSTEM 01: SRI LANKAN CURRENCY DETECTOR (LEAD SHOWCASE)
            ========================================================================= */}
        {currencyDetector && (
          <div className="border border-white/10 bg-[#0A0503] rounded-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden group hover:border-[#C43E17]/60 hover:shadow-[0_0_45px_rgba(196,62,23,0.20)] transition-all duration-500">
            {/* Left Column: Technical Narrative & Scorecard (6 cols) */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A0B07] text-[#C43E17] border border-[#C43E17]/40 shadow-[0_0_12px_rgba(196,62,23,0.2)] tracking-wider uppercase text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
                    COMPUTER VISION // ASSISTIVE AI
                  </span>
                  <span className="text-white border border-white/10 px-2.5 py-1 bg-white/5 font-semibold">
                    99.20% mAP@50
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans leading-tight">
                    <Link href={`/projects/${currencyDetector.slug}`} className="hover:text-[#C43E17] transition-colors">
                      {currencyDetector.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#D3C29F] leading-relaxed font-light">
                    {currencyDetector.summary}
                  </p>
                </div>

                {/* Scorecard Strip */}
                <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
                  <div className="p-3 bg-[#050201] border border-white/10">
                    <div className="text-[10px] text-[#A09383] uppercase tracking-wider">mAP@50</div>
                    <div className="text-xl font-bold text-white mt-0.5">99.20%</div>
                  </div>
                  <div className="p-3 bg-[#050201] border border-white/10">
                    <div className="text-[10px] text-[#A09383] uppercase tracking-wider">Precision</div>
                    <div className="text-xl font-bold text-white mt-0.5">99.25%</div>
                  </div>
                  <div className="p-3 bg-[#050201] border border-white/10">
                    <div className="text-[10px] text-[#A09383] uppercase tracking-wider">Recall</div>
                    <div className="text-xl font-bold text-white mt-0.5">99.18%</div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currencyDetector.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Cluster */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <Link
                  href={`/projects/${currencyDetector.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C43E17] hover:bg-[#D94519] text-[#040202] font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(196,62,23,0.45),0_0_40px_rgba(196,62,23,0.18)] hover:shadow-[0_0_30px_rgba(196,62,23,0.70),0_0_60px_rgba(196,62,23,0.30)] hover:-translate-y-0.5"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {currencyDetector.links.github && (
                  <a
                    href={currencyDetector.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-white font-mono text-xs transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#C43E17]" />
                    <span>Repository</span>
                  </a>
                )}

                {(currencyDetector.links.video || currencyDetector.links.demo) && (
                  <a
                    href={currencyDetector.links.video || currencyDetector.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#D3C29F] hover:text-[#C43E17] transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 text-[#C43E17]" />
                    <span>Watch Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: High-Resolution Real Prediction Visual (6 cols) */}
            <div className="lg:col-span-6 bg-[#040202] p-6 lg:p-8 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="relative aspect-[4/3] w-full border border-white/10 overflow-hidden bg-[#0A0503]">
                <Image
                  src={getAssetPath("/images/projects/sri-lankan-currency-detector/val_batch0_pred.jpg")}
                  alt="Sri Lankan Currency Detector model predictions on test batch"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute top-3 left-3 bg-[#040202]/90 border border-white/20 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-sm">
                  EVALUATION // BATCH 0 PREDICTIONS
                </div>
                <div className="absolute bottom-3 right-3 bg-[#C43E17]/90 text-white px-2.5 py-0.5 font-mono text-[10px] font-bold">
                  YOLOv8n · 50 EPOCHS
                </div>
              </div>

              <div className="w-full mt-3 flex items-center justify-between text-[11px] font-mono text-[#A09383]">
                <span>1,000+ Custom Annotated Banknotes</span>
                <span className="text-[#C43E17] font-semibold">6 Denominations · Edge Target</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SYSTEM 02: CREDIT CARD FRAUD DETECTION (EMPIRICAL RESEARCH)
            ========================================================================= */}
        {fraudDetection && (
          <div className="border border-white/10 bg-[#0A0503] rounded-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden group hover:border-[#C43E17]/60 hover:shadow-[0_0_45px_rgba(196,62,23,0.20)] transition-all duration-300">
            {/* Left Column: Visual / Benchmark Analytics Panel (6 cols) */}
            <div className="lg:col-span-6 order-2 lg:order-1 bg-[#040202] p-6 lg:p-8 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-r border-white/10">
              <div className="relative aspect-[4/3] w-full border border-white/10 overflow-hidden bg-[#070302] p-6 flex flex-col justify-between">
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C43E17]" />
                    <span className="font-mono text-xs text-white font-semibold">EMPIRICAL BENCHMARK LEDGER</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#A09383] uppercase">IEEE / ACADEMIA</span>
                </div>

                {/* Big Stat Display */}
                <div className="py-4 space-y-2">
                  <div className="text-[11px] font-mono text-[#A09383] uppercase tracking-wider">
                    Total Transactions Evaluated
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    284,807
                  </div>
                  <div className="text-xs font-mono text-[#C43E17] flex items-center gap-2">
                    <span>Extreme Scarcity: 492 Frauds (0.172%)</span>
                  </div>
                </div>

                {/* Statistical Comparison Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 bg-[#0E0604] border border-white/10">
                    <span className="text-[#A09383] block text-[10px] uppercase">HYPOTHESIS TEST</span>
                    <span className="text-lg font-bold text-white">p = 0.0003</span>
                  </div>
                  <div className="p-3 bg-[#0E0604] border border-[#C43E17]/30 bg-[#1A0B07]/40">
                    <span className="text-[#C43E17] block text-[10px] uppercase font-semibold">SUPERIOR MODEL</span>
                    <span className="text-lg font-bold text-[#C43E17]">XGBoost</span>
                  </div>
                </div>

                {/* Resampling footer */}
                <div className="p-2.5 bg-[#050201] border border-white/10 text-[11px] font-mono text-[#A09383] flex items-center justify-between">
                  <span>SMOTE (Train Folds Only)</span>
                  <span className="text-white font-medium">No Data Leakage</span>
                </div>
              </div>

              <div className="w-full mt-3 flex items-center justify-between text-[11px] font-mono text-[#A09383]">
                <span>European Cardholder Benchmark</span>
                <span className="text-[#C43E17] font-semibold">Comparative Analysis</span>
              </div>
            </div>

            {/* Right Column: Technical Narrative (6 cols) */}
            <div className="lg:col-span-6 order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A0B07] text-[#C43E17] border border-[#C43E17]/40 shadow-[0_0_12px_rgba(196,62,23,0.2)] tracking-wider uppercase text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
                    MACHINE LEARNING // EMPIRICAL RESEARCH
                  </span>
                  <span className="text-white border border-white/10 px-2.5 py-1 bg-white/5 font-semibold">
                    XGBoost vs Random Forest
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans leading-tight">
                    <Link href={`/projects/${fraudDetection.slug}`} className="hover:text-[#C43E17] transition-colors">
                      {fraudDetection.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#D3C29F] leading-relaxed font-light">
                    {fraudDetection.summary}
                  </p>
                </div>

                {/* Scorecard Strip */}
                <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
                  <div className="p-3 bg-[#050201] border border-white/10">
                    <div className="text-[10px] text-[#A09383] uppercase tracking-wider">Dataset</div>
                    <div className="text-sm font-bold text-white mt-0.5">284.8K Rows</div>
                  </div>
                  <div className="p-3 bg-[#050201] border border-white/10">
                    <div className="text-[10px] text-[#A09383] uppercase tracking-wider">Imbalance</div>
                    <div className="text-sm font-bold text-white mt-0.5">0.172% Fraud</div>
                  </div>
                  <div className="p-3 bg-[#050201] border border-[#C43E17]/30 bg-[#1A0B07]/40">
                    <div className="text-[10px] text-[#C43E17] uppercase tracking-wider font-semibold">Outcome</div>
                    <div className="text-sm font-bold text-[#C43E17] mt-0.5">p = 0.0003</div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {fraudDetection.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Cluster */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <Link
                  href={`/projects/${fraudDetection.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C43E17] hover:bg-[#D94519] text-[#040202] font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(196,62,23,0.45),0_0_40px_rgba(196,62,23,0.18)] hover:shadow-[0_0_30px_rgba(196,62,23,0.70),0_0_60px_rgba(196,62,23,0.30)] hover:-translate-y-0.5"
                >
                  <span>Explore Research</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {fraudDetection.links.paper && (
                  <a
                    href={fraudDetection.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-white font-mono text-xs transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C43E17]" />
                    <span>Research Paper</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A09383]" />
                  </a>
                )}

                {fraudDetection.links.article && (
                  <a
                    href={fraudDetection.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#D3C29F] hover:text-[#C43E17] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#C43E17]" />
                    <span>Slide Deck</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SYSTEM 03: EDITH VOICE ASSISTANT (INTELLIGENT AUTOMATION)
            ========================================================================= */}
        {edith && (
          <div className="border border-white/10 bg-[#0A0503] rounded-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden group hover:border-[#C43E17]/60 hover:shadow-[0_0_45px_rgba(196,62,23,0.20)] transition-all duration-300">
            {/* Left Column: Technical Narrative & Scorecard (6 cols) */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A0B07] text-[#C43E17] border border-[#C43E17]/40 shadow-[0_0_12px_rgba(196,62,23,0.2)] tracking-wider uppercase text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
                    INTELLIGENT AUTOMATION // LOCAL AI
                  </span>
                  <span className="text-white border border-white/10 px-2.5 py-1 bg-white/5 font-semibold">
                    Zero Audio Telemetry
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans leading-tight">
                    <Link href={`/projects/${edith.slug}`} className="hover:text-[#C43E17] transition-colors">
                      {edith.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#D3C29F] leading-relaxed font-light">
                    {edith.summary}
                  </p>
                </div>

                {/* Scorecard Strip */}
                <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
                  <div className="p-3 bg-[#050201] border border-white/10">
                    <div className="text-[10px] text-[#A09383] uppercase tracking-wider">Architecture</div>
                    <div className="text-sm font-bold text-white mt-0.5">Local-First</div>
                  </div>
                  <div className="p-3 bg-[#050201] border border-white/10">
                    <div className="text-[10px] text-[#A09383] uppercase tracking-wider">Vocalization</div>
                    <div className="text-sm font-bold text-white mt-0.5">edge-tts Neural</div>
                  </div>
                  <div className="p-3 bg-[#050201] border border-[#C43E17]/30 bg-[#1A0B07]/40">
                    <div className="text-[10px] text-[#C43E17] uppercase tracking-wider font-semibold">Intent Parser</div>
                    <div className="text-sm font-bold text-[#C43E17] mt-0.5">Levenshtein</div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {edith.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Cluster */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <Link
                  href={`/projects/${edith.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C43E17] hover:bg-[#D94519] text-[#040202] font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(196,62,23,0.45),0_0_40px_rgba(196,62,23,0.18)] hover:shadow-[0_0_30px_rgba(196,62,23,0.70),0_0_60px_rgba(196,62,23,0.30)] hover:-translate-y-0.5"
                >
                  <span>Explore System</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {edith.links.article && (
                  <a
                    href={edith.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-white font-mono text-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#C43E17]" />
                    <span>Dev.to Architecture</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Simulated Terminal & Pipeline Console (6 cols) */}
            <div className="lg:col-span-6 bg-[#040202] p-6 lg:p-8 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="w-full aspect-[4/3] border border-white/10 bg-[#070302] p-5 flex flex-col justify-between font-mono text-xs">
                {/* Console header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C43E17] shadow-[0_0_8px_#C43E17]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DEA355]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 text-[11px] text-[#A09383]">edith-core.py // local_listener</span>
                  </div>
                  <span className="text-[10px] text-[#C43E17]">LIVE LOG</span>
                </div>

                {/* Console logs */}
                <div className="space-y-2 py-3 text-[11px] leading-relaxed">
                  <p className="text-[#A09383]">[00:00:01] Initializing PyAudio speech recognition buffer...</p>
                  <p className="text-white flex items-center gap-1.5">
                    <span className="text-[#C43E17]">&gt;</span> Wake-word detected: <span className="text-[#C43E17] font-semibold">&quot;EDITH&quot;</span> (confidence 0.94)
                  </p>
                  <p className="text-[#A09383]">[00:00:02] Audio packet isolated: 2,400ms duration</p>
                  <p className="text-[#D3C29F]">
                    [00:00:02] Fuzzy match routing: <span className="text-white">&quot;capture screen and check status&quot;</span>
                  </p>
                  <p className="text-[#A09383]">[00:00:03] Executing OpenCV trigger &amp; PyAutoGUI event</p>
                  <p className="text-[#C43E17] font-semibold">
                    [00:00:04] edge-tts vocal response synthesized: &quot;Screen captured, all systems nominal.&quot;
                  </p>
                </div>

                {/* Console footer badge */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#A09383]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C43E17]" />
                    Private execution · No Cloud APIs
                  </span>
                  <span className="text-white font-mono">LATENCY &lt; 280ms</span>
                </div>
              </div>

              <div className="w-full mt-3 flex items-center justify-between text-[11px] font-mono text-[#A09383]">
                <span>Desktop Automation Core</span>
                <span className="text-[#C43E17] font-semibold">Python 3.10+ Native</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}