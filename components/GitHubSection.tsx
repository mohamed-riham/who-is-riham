"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitBranch, ExternalLink, Code2, Terminal, ChevronDown } from "lucide-react";
import { GithubIcon, HuggingFaceIcon } from "@/components/Icons";
import { profile } from "@/content/profile";
import { getAssetPath } from "@/lib/utils";

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
    languageColor: "#DEA355",
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
    languageColor: "#DEA355",
    url: "https://github.com/mohamed-riham/yt-video-downloader",
    tags: ["Streamlit", "yt-dlp", "FFmpeg", "Audio/Video"],
  },
  {
    name: "Data-Science-Dashboard-python",
    description:
      "Modular Python retail sales analytics application designed under SOLID OOP principles (Factory, Observer, Singleton) with automated unit testing suites and interactive visualizations.",
    language: "Python",
    languageColor: "#DEA355",
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
    languageColor: "#DEA355",
    url: "https://github.com/mohamed-riham/Real-Estate-Tokenization-DApp",
    tags: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
  },
];

export default function GitHubSection() {
  const [showAllRepos, setShowAllRepos] = useState(false);

  const INITIAL_COUNT = 4;
  const visibleRepos = showAllRepos ? curatedRepos : curatedRepos.slice(0, INITIAL_COUNT);

  return (
    <section id="github" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              08 // Open Source Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              GitHub repositories & model hub.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            Public codebase records, automated pipelines, and verified model checkpoints hosted on GitHub and Hugging Face.
          </p>
        </div>

        {/* Intelligence Ledger Header (Profile Strip) */}
        <div className="p-6 lg:p-8 bg-[#0D0704] border border-[#6B503C]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#6B503C]/40 shrink-0 bg-[#040202]">
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
                <span className="text-lg font-bold text-[#F9F9F6] font-sans">
                  Mohamed Riham
                </span>
                <span className="text-xs text-[#DEA355]">@mohamed-riham</span>
              </div>
              <div className="text-xs text-[#8E7F70]">
                19 Public Repositories // Active Commits // Addalaichenai & Colombo
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.socials.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#160C07] hover:bg-[#1E110A] border border-[#6B503C]/40 text-xs font-mono text-[#DEA355] transition-colors"
            >
              <HuggingFaceIcon className="w-4 h-4 text-[#DEA355]" />
              <span>Hugging Face Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C43E17] hover:bg-[#DB4A1E] text-xs font-mono font-bold text-[#040202] transition-colors uppercase tracking-wider"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Editorial Repository Table */}
        <div id="github-repos-ledger" className="divide-y divide-[#6B503C]/20 border-t border-b border-[#6B503C]/20">
          {visibleRepos.map((repo, idx) => (
            <div
              key={repo.name}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#0D0704] transition-colors px-3 sm:px-4"
            >
              <div className="space-y-1 md:w-2/3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[#8E7F70]">/{String(idx + 1).padStart(2, "0")}</span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-[#F9F9F6] group-hover:text-[#DEA355] transition-colors font-sans inline-flex items-center gap-1.5"
                  >
                    <span>{repo.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C43E17]" />
                  </a>
                </div>
                <p className="text-xs text-[#D3C29F] font-light leading-relaxed max-w-2xl pl-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 md:justify-end font-mono text-xs pl-6 md:pl-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-[#F9F9F6] text-xs">{repo.language}</span>
                </div>

                <div className="hidden lg:flex items-center gap-1.5">
                  {repo.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] text-[#8E7F70] bg-[#140A06] border border-[#6B503C]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[#8E7F70] hover:text-[#F9F9F6] transition-colors"
                  title="Open Repository"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Smart View More / Show Less Controls (Noir Editorial 5.2) */}
        {curatedRepos.length > INITIAL_COUNT && (
          <div className="pt-8 flex justify-center">
            <button
              onClick={() => setShowAllRepos(!showAllRepos)}
              aria-expanded={showAllRepos}
              aria-controls="github-repos-ledger"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/35 hover:border-[#DEA355] text-xs font-mono font-bold text-[#F9F9F6] transition-all group shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEA355] group-hover:scale-125 transition-transform" />
              <span>
                {showAllRepos
                  ? "Show Fewer Repositories"
                  : `View All Repositories (${curatedRepos.length} Curated Repos)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#DEA355] transition-transform duration-300 ${
                  showAllRepos ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
