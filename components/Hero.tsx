"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowDown } from "lucide-react";
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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-white/10 bg-transparent overflow-hidden">
      {/* Subtle Background Warmth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-radial from-[#C43E17]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Impact Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Identity Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#140A06] border border-[#C43E17]/40 shadow-[0_0_15px_rgba(196,62,23,0.18)] text-xs font-mono tracking-widest text-[#F9F9F6] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
              <span>MOHAMED RIHAM // DATA SCIENCE STUDENT · APPLIED AI</span>
            </div>

            {/* Massive Bold Geometric Headline (AI Robotics Reference Style) */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-[#F9F9F6] tracking-tighter leading-[0.96] font-sans">
                <span className="sr-only">Mohamed Riham — </span>
                Data Science <br />
                <span className="text-[#C43E17] drop-shadow-[0_0_35px_rgba(196,62,23,0.45)]">&amp; Applied AI.</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans tracking-tight pt-1">
                Mohamed Riham — Building applied intelligence with empirical rigor.
              </p>
            </div>

            {/* Concise Introduction */}
            <p className="text-sm sm:text-base text-[#D3C29F]/85 max-w-xl font-light leading-relaxed font-sans">
              Data Science student at ICBT Campus, pursuing a BSc (Hons) Data Science (Top-Up) delivered through Cardiff Metropolitan University. I build applied AI systems, computer vision models, and practical machine learning solutions supported by a Pearson BTEC HND in Software Engineering, Merit.
            </p>

            {/* Action Buttons & Verified Profiles */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Action Button (Vivid Burnt Orange with rich glow) */}
              <Link
                href="/#showcase"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C43E17] hover:bg-[#DB4A1E] text-[#040202] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_22px_rgba(196,62,23,0.45),0_0_44px_rgba(196,62,23,0.20)] hover:shadow-[0_0_32px_rgba(196,62,23,0.70),0_0_64px_rgba(196,62,23,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>

              {/* Secondary Action Button (Crisp Dark/Orange Outline) */}
              <a
                href={getAssetPath("/Mohamed_Riham_CV.pdf")}
                download="Mohamed_Riham_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0D0704] hover:bg-[#160E0A] border border-white/15 hover:border-[#C43E17] text-[#F9F9F6] font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#C43E17]" />
                <span>Download CV</span>
              </a>

              {/* Verified Profiles Social Cluster */}
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0D0704] hover:bg-[#160E0A] border border-white/10 hover:border-[#C43E17] text-[#D3C29F] hover:text-[#FFFFFF] transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: mohamed-riham"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0D0704] hover:bg-[#160E0A] border border-white/10 hover:border-[#C43E17] text-[#D3C29F] hover:text-[#C43E17] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: mohamedriham"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0D0704] hover:bg-[#160E0A] border border-white/10 hover:border-[#C43E17] text-[#D3C29F] hover:text-[#C43E17] transition-colors"
                  aria-label="Hugging Face Profile"
                  title="Hugging Face: mohamedriham"
                >
                  <HuggingFaceIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#0D0704] hover:bg-[#160E0A] border border-white/10 hover:border-[#C43E17] text-[#D3C29F] hover:text-[#C43E17] transition-colors"
                  aria-label="Instagram Profile"
                  title="Instagram: @_mohamed_riham"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Technical Portrait Panel (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-md group">
              {/* Luminous Ambient Halo Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C43E17]/30 via-[#DEA355]/15 to-transparent blur-2xl opacity-65 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              {/* Architectural Frame with Corner Registration Crosshairs */}
              <div className="relative border border-white/15 group-hover:border-[#C43E17]/60 group-hover:shadow-[0_0_35px_rgba(196,62,23,0.22)] bg-gradient-to-b from-[#140A06] via-[#0A0503] to-[#040202] p-2 shadow-2xl transition-all duration-500">
                {/* Burnt Orange Corner Crosshairs */}
                <span className="absolute -top-1.5 -left-1.5 font-mono text-[11px] text-[#C43E17] select-none font-bold">+</span>
                <span className="absolute -top-1.5 -right-1.5 font-mono text-[11px] text-[#C43E17] select-none font-bold">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[11px] text-[#C43E17] select-none font-bold">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[11px] text-[#C43E17] select-none font-bold">+</span>

                {/* Portrait Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#120704] to-[#040202]">
                  {/* Status Indicator Pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-[#040202]/90 backdrop-blur-sm border border-white/15 px-3 py-1 text-[10px] font-mono text-[#F9F9F6] shadow-[0_0_12px_rgba(196,62,23,0.15)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
                    <span>AVAILABLE FOR APPLIED AI ROLES</span>
                  </div>

                  <Image
                    src={getAssetPath("/images/profile/mohamed-riham-portrait-cutout.webp")}
                    alt="Mohamed Riham — Data Science Undergraduate portrait photograph"
                    title="Mohamed Riham — Data Science Undergraduate"
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 440px"
                  />
                  {/* Subtle ground vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Minimalist Footnote Strip */}
                <div className="p-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D3C29F]">
                  <span>Mohamed Riham</span>
                  <span className="text-[#C43E17]">Cardiff Met · ICBT Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
