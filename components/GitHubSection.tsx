"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon, HuggingFaceIcon } from "@/components/Icons";
import { profile } from "@/content/profile";
import { getAssetPath } from "@/lib/utils";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

interface CuratedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
  tags: string[];
}

const curatedRepos: CuratedRepo[] = [
  {
    name: "Sri-Lankan-Currency-Detector-YOLOv8",
    description:
      "Trained YOLOv8n model and real-time audio feedback pipeline empowering visually impaired individuals to identify Sri Lankan banknotes across 6 denominations with 99.20% mAP@50.",
    language: "Python",
    languageColor: "#C43E17",
    url: "https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8",
    tags: ["YOLOv8", "Computer Vision", "PyTorch", "Streamlit"],
  },
  {
    name: "CIS6027-Ecommerce-Business-Intelligence-Analytics",
    description:
      "Enterprise dimensional modeling and executive Power BI analytics dashboard analyzing 100,000+ order records from the Olist Brazilian E-Commerce dataset for Cardiff Metropolitan University.",
    language: "Power BI",
    languageColor: "#C43E17",
    url: "https://github.com/mohamed-riham/CIS6027-Ecommerce-Business-Intelligence-Analytics",
    tags: ["Power BI", "DAX", "Star Schema", "Data Analytics"],
  },
  {
    name: "yt-video-downloader",
    description:
      "High-performance local-first media capture and transcoding utility featuring 4K 60FPS video stitching and 320 kbps audio metadata tagging via yt-dlp and FFmpeg subprocesses.",
    language: "Python",
    languageColor: "#C43E17",
    url: "https://github.com/mohamed-riham/yt-video-downloader",
    tags: ["Streamlit", "yt-dlp", "FFmpeg", "Audio/Video"],
  },
  {
    name: "Data-Science-Dashboard-python",
    description:
      "Modular Python retail sales analytics application designed under SOLID OOP principles (Factory, Observer, Singleton) with automated unit testing suites and interactive visualizations.",
    language: "Python",
    languageColor: "#C43E17",
    url: "https://github.com/mohamed-riham/Data-Science-Dashboard-python",
    tags: ["Pandas", "OOP", "unittest", "Plotly"],
  },
  {
    name: "Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control",
    description:
      "Embedded access control firmware integrating ESP8266/ESP32 microcontrollers with physical MFRC522 RFID authentication and Blynk cloud mobile telemetry.",
    language: "C++",
    languageColor: "#678292",
    url: "https://github.com/mohamed-riham/Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control",
    tags: ["ESP32", "RFID", "Blynk IoT", "Embedded"],
  },
  {
    name: "Real-Estate-Tokenization-DApp",
    description:
      "Decentralized Web3 smart contract architecture (RealEstateTokenization2.sol) exploring fractional property equity on Ethereum testnets with ERC standards.",
    language: "Solidity",
    languageColor: "#C43E17",
    url: "https://github.com/mohamed-riham/Real-Estate-Tokenization-DApp",
    tags: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
  },
];

export default function GitHubSection() {
  const [showAllRepos, setShowAllRepos] = useState(false);

  const INITIAL_COUNT = 4;
  const initialRepos = curatedRepos.slice(0, INITIAL_COUNT);
  const extraRepos = curatedRepos.slice(INITIAL_COUNT);

  const renderRepoRow = (repo: CuratedRepo, idx: number) => (
    <div
      key={repo.name}
      className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#0A0503] rounded-sm transition-all px-4 sm:px-6 border border-transparent hover:border-[#C43E17]/40 hover:shadow-[0_0_24px_rgba(196,62,23,0.12)]"
    >
      <div className="space-y-1 md:w-2/3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#A09383]">/{String(idx + 1).padStart(2, "0")}</span>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-bold text-white group-hover:text-white transition-colors font-sans inline-flex items-center gap-1.5"
          >
            <span>{repo.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C43E17]" />
          </a>
        </div>
        <p className="text-xs text-[#D3C29F] font-light leading-relaxed max-w-2xl pl-7">
          {repo.description}
        </p>
      </div>

      <div className="flex items-center gap-4 md:justify-end font-mono text-xs pl-7 md:pl-0">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: repo.languageColor }}
          />
          <span className="text-white text-xs font-semibold">{repo.language}</span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5">
          {repo.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] text-[#A09383] bg-[#120704] border border-white/10 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 text-[#A09383] hover:text-[#C43E17] transition-colors"
          title="Open Repository"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <section id="github" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
              08 // OPEN SOURCE INTELLIGENCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              GitHub repositories <span className="text-[#C43E17]">&amp; model hub.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A09383] leading-relaxed font-light">
            Public codebase records, automated pipelines, and verified model checkpoints hosted on GitHub and Hugging Face.
          </p>
        </div>

        {/* Intelligence Ledger Header (Profile Strip) */}
        <div className="p-6 lg:p-8 bg-[#0A0503] border border-white/10 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C43E17]/60 hover:shadow-[0_0_35px_rgba(196,62,23,0.18)] transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#040202]">
              <Image
                src={getAssetPath("/images/profile/mohamed-riham-github.webp")}
                alt="Mohamed Riham GitHub avatar"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="space-y-1 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-white font-sans">
                  Mohamed Riham
                </span>
                <span className="text-xs text-[#C43E17] font-semibold">@mohamed-riham</span>
              </div>
              <div className="text-xs text-[#A09383]">
                19 Public Repositories // Active Commits // Addalaichenai &amp; Colombo
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.socials.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-xs font-mono text-white rounded-sm transition-all"
            >
              <HuggingFaceIcon className="w-4 h-4 text-[#C43E17]" />
              <span>Hugging Face Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C43E17] hover:bg-[#D94519] text-xs font-mono font-bold text-[#040202] rounded-sm transition-all uppercase tracking-wider shadow-[0_0_18px_rgba(196,62,23,0.45)] hover:shadow-[0_0_28px_rgba(196,62,23,0.70)] hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Repository Table */}
        <div id="github-repos-ledger" className="space-y-2">
          <div className="divide-y divide-white/5">
            {initialRepos.map((repo, idx) => renderRepoRow(repo, idx))}
          </div>

          {extraRepos.length > 0 && (
            <SmoothExpand isExpanded={showAllRepos}>
              <div className="divide-y divide-white/5 border-t border-white/10 pt-2">
                {extraRepos.map((repo, idx) =>
                  renderRepoRow(repo, INITIAL_COUNT + idx)
                )}
              </div>
            </SmoothExpand>
          )}
        </div>

        {/* Progressive Disclosure Controls */}
        {curatedRepos.length > INITIAL_COUNT && (
          <ExpandControl
            isExpanded={showAllRepos}
            onToggle={() => setShowAllRepos(!showAllRepos)}
            controlsId="github-repos-ledger"
            collapsedIndicator={`SHOWING ${initialRepos.length} OF ${curatedRepos.length} REPOSITORIES`}
            expandedIndicator={`ALL ${curatedRepos.length} REPOSITORIES DISPLAYED`}
            collapsedLabel={`View All Repositories (${curatedRepos.length - INITIAL_COUNT} Remaining Repos)`}
            expandedLabel="Show Fewer Repositories"
            className="mt-6"
          />
        )}

      </div>
    </section>
  );
}