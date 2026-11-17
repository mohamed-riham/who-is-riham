"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowDown, ExternalLink } from "lucide-react";
import { profile } from "@/content/profile";
import { getAssetPath } from "@/lib/utils";
import {
  GithubIcon,
  LinkedinIcon,
  HuggingFaceIcon,
  InstagramIcon,
} from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#6B503C]/20 bg-[#040202] overflow-hidden">
      {/* Subtle Background Architectural Ambient Warmth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-radial from-[#5C2712]/30 via-[#C43E17]/05 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Headline & Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Identity Ledger Marker */}
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-wider text-[#D3C29F]">
              <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse" />
              <span>BSC (HONS) DATA SCIENCE // ICBT × CARDIFF METROPOLITAN</span>
            </div>

            {/* Monumental Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold text-[#F9F9F6] tracking-tight leading-[1.06] font-sans">
                Building applied intelligence with empirical rigor.
              </h1>

              <div className="flex items-center gap-3 pt-1">
                <span className="text-xl sm:text-2xl font-serif italic text-[#DEA355]">
                  Mohamed Riham
                </span>
                <span className="text-[#6B503C]">/</span>
                <span className="text-xs sm:text-sm font-mono text-[#D3C29F]">
                  Data Science Undergraduate
                </span>
              </div>
            </div>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-[#D3C29F] max-w-2xl leading-relaxed font-sans font-light">
              Final-year Data Science undergraduate with a Pearson BTEC HND in Software Engineering (11 Distinctions). I train custom computer vision models, benchmark machine learning on empirical datasets, and engineer local-first intelligent systems designed for practical hardware.
            </p>

            {/* Actions & Verified Profiles */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/#showcase"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-sm bg-[#C43E17] hover:bg-[#DB4A1E] text-[#040202] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore Systems</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>

              <a
                href={getAssetPath("/Mohamed_Riham_CV.pdf")}
                download="Mohamed_Riham_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#120A07] hover:bg-[#1C100B] border border-[#6B503C]/35 text-[#F9F9F6] font-mono text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#DEA355]" />
                <span>Curriculum Vitae</span>
              </a>

              {/* Verified Profiles */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-[#6B503C]/30">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm bg-[#120A07] hover:bg-[#1C100B] border border-[#6B503C]/30 text-[#D3C29F] hover:text-[#F9F9F6] transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: mohamed-riham"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm bg-[#120A07] hover:bg-[#1C100B] border border-[#6B503C]/30 text-[#D3C29F] hover:text-[#DEA355] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: mohamedriham"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm bg-[#120A07] hover:bg-[#1C100B] border border-[#6B503C]/30 text-[#D3C29F] hover:text-[#DEA355] transition-colors"
                  aria-label="Hugging Face Profile"
                  title="Hugging Face: mohamedriham"
                >
                  <HuggingFaceIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-sm bg-[#120A07] hover:bg-[#1C100B] border border-[#6B503C]/30 text-[#D3C29F] hover:text-[#C43E17] transition-colors"
                  aria-label="Instagram Profile"
                  title="Instagram: @_mohamed_riham"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Integrated Empirical Proof Ledger (Hairline Strip) */}
            <div className="pt-6 border-t border-[#6B503C]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-sans text-[#F9F9F6]">
                  99.20%
                </div>
                <div className="text-[11px] font-mono text-[#8E7F70] mt-0.5">
                  YOLOv8n mAP@50
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-sans text-[#F9F9F6]">
                  284,807
                </div>
                <div className="text-[11px] font-mono text-[#8E7F70] mt-0.5">
                  Transactions Analyzed
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-sans text-[#DEA355]">
                  11 / 15
                </div>
                <div className="text-[11px] font-mono text-[#8E7F70] mt-0.5">
                  BTEC Distinctions
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-sans text-[#F9F9F6]">
                  6 Classes
                </div>
                <div className="text-[11px] font-mono text-[#8E7F70] mt-0.5">
                  Banknote Denominations
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Cutout (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-md">
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-radial from-[#5C2712]/45 via-[#C43E17]/10 to-transparent blur-2xl pointer-events-none" />

              {/* Architectural Frame with Corner Registration Marks */}
              <div className="relative border border-[#6B503C]/35 bg-gradient-to-b from-[#160C07] via-[#0E0704] to-[#040202] p-1.5 shadow-2xl">
                {/* Crosshairs */}
                <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
                <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>

                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#120704] to-[#040202]">
                  {/* Status Indicator Pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#040202]/85 backdrop-blur-sm border border-[#6B503C]/35 px-2.5 py-1 text-[10px] font-mono text-[#D3C29F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DEA355] animate-pulse" />
                    <span>PORTRAIT DOSSIER // 2026</span>
                  </div>

                  <Image
                    src={getAssetPath("/images/profile/mohamed-riham-portrait-cutout.webp")}
                    alt="Editorial portrait of Mohamed Riham, Data Science Undergraduate"
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 440px"
                  />
                  {/* Subtle ground vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>

                {/* Minimalist Footnote Ledger */}
                <div className="p-3 border-t border-[#6B503C]/25 flex items-center justify-between text-[10px] font-mono text-[#D3C29F]">
                  <span>Addalaichenai / Colombo, Sri Lanka</span>
                  <span className="text-[#8E7F70]">CALIBRATED // VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
