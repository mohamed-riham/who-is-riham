"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Award, Wrench, Shuffle } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { HuggingFaceIcon, GithubIcon, InstagramIcon } from "@/components/Icons";
import { profile } from "@/content/profile";

const BENTO_CANDIDS = [
  {
    src: "/images/profile/mohamed-riham-lifestyle.webp",
    alt: "Mohamed Riham Addalaichenai motorbike candid photograph",
    location: "Addalaichenai, Sri Lanka",
    badge: "Motorbike Candid",
  },
  {
    src: "/images/profile/random/colombo-urban-candid.webp",
    alt: "Mohamed Riham Colombo urban candid portrait",
    location: "Colombo, Sri Lanka",
    badge: "Urban Candid",
  },
  {
    src: "/images/profile/random/motorbike-sunset-portrait.webp",
    alt: "Mohamed Riham outdoor golden hour portrait with motorbike",
    location: "Addalaichenai, Sri Lanka",
    badge: "Golden Hour Candid",
  },
];

export default function BentoGrid() {
  const [bentoIdx, setBentoIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBentoIdx(Math.floor(Math.random() * BENTO_CANDIDS.length));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleNextBentoPhoto = () => {
    setBentoIdx((prev) => (prev + 1) % BENTO_CANDIDS.length);
  };

  const currentBentoPhoto = BENTO_CANDIDS[bentoIdx];
  return (
    <section id="dossier" className="py-20 lg:py-28 border-b border-[#6B503C]/20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              01 // The Dossier
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Asymmetric intelligence ledger.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            An empirical overview spanning computer vision research, campus governance, hands-on hardware engineering, and open model development.
          </p>
        </div>

        {/* Asymmetric Bento Composition */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Module 1 (8 cols): Flagship Vision System */}
          <div className="lg:col-span-8 border border-[#6B503C]/30 bg-[#0D0704] flex flex-col justify-between overflow-hidden relative group">
            {/* Top Bar */}
            <div className="p-6 pb-4 flex items-center justify-between border-b border-[#6B503C]/20">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#C43E17]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#F9F9F6]">
                  Flagship Vision System // Assistive AI
                </span>
              </div>
              <span className="font-mono text-xs text-[#DEA355] bg-[#DEA355]/10 px-2 py-0.5 border border-[#DEA355]/30">
                99.20% mAP@50
              </span>
            </div>

            {/* Content Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#F9F9F6] font-sans leading-tight">
                  Sri Lankan Banknote Detection & Audio Guidance
                </h3>
                <p className="text-sm text-[#D3C29F] leading-relaxed font-light">
                  Trained a custom YOLOv8 convolutional detector on 1,000+ labeled banknotes across all six denominations to empower visually impaired citizens. Integrates edge text-to-speech audio guidance for immediate hands-free verification.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href="/projects/sri-lankan-currency-detector"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#C43E17] hover:text-[#DB4A1E] transition-colors"
                  >
                    <span>Read Deep-Dive Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Visual Demonstration Preview */}
              <div className="relative aspect-[4/3] w-full border border-[#6B503C]/30 bg-[#0A0503] overflow-hidden p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={getAssetPath("/images/projects/sri-lankan-currency-detector/results.png")}
                    alt="YOLOv8 training loss and mAP50 convergence metrics across 50 epochs"
                    fill
                    className="object-contain group-hover:scale-102 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-[#040202]/90 backdrop-blur-sm border border-[#6B503C]/30 px-2.5 py-1 text-[10px] font-mono text-[#D3C29F] flex justify-between">
                  <span>YOLOv8n Convergence Metrics</span>
                  <span className="text-[#DEA355]">50 Epochs // mAP@50: 99.20%</span>
                </div>
              </div>
            </div>

            {/* Bottom Technical Spec Bar */}
            <div className="p-4 bg-[#140A06] border-t border-[#6B503C]/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E7F70]">
              <div className="flex gap-4">
                <span>Precision: <strong className="text-[#F9F9F6]">99.25%</strong></span>
                <span>Recall: <strong className="text-[#F9F9F6]">99.18%</strong></span>
                <span>Classes: <strong className="text-[#F9F9F6]">6 Denominations</strong></span>
              </div>
              <span className="text-[#DEA355]">Edge-Deployable</span>
            </div>
          </div>

          {/* Module 2 (4 cols): Personal Lifestyle Dossier */}
          <div className="lg:col-span-4 border border-[#6B503C]/30 bg-[#0D0704] flex flex-col justify-between overflow-hidden group">
            <div className="p-6 pb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#6B503C]/20">
              <span className="font-mono text-xs uppercase tracking-wider text-[#F9F9F6]">
                Personal Identity // Candid
              </span>
              <a
                href="https://www.instagram.com/_mohamed_riham/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#DEA355] hover:text-[#F9F9F6] flex items-center gap-1 transition-colors"
              >
                <span>@_mohamed_riham</span>
                <InstagramIcon className="w-3 h-3" />
              </a>
            </div>

            <div className="p-6 space-y-4">
              {/* Lifestyle Photo Embed with Auto-Refresh Randomizer */}
              <div
                onClick={handleNextBentoPhoto}
                className="relative aspect-[16/10] w-full border border-[#6B503C]/30 bg-[#040202] overflow-hidden cursor-pointer select-none"
                title="Click or tap to shuffle candid snapshot"
              >
                <Image
                  key={currentBentoPhoto.src}
                  src={getAssetPath(currentBentoPhoto.src)}
                  alt={currentBentoPhoto.alt}
                  fill
                  className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                <div className="absolute top-2 right-2 bg-[#040202]/85 backdrop-blur-sm border border-[#6B503C]/30 px-2 py-0.5 text-[9px] font-mono text-[#D3C29F] flex items-center gap-1">
                  <Shuffle className="w-2.5 h-2.5 text-[#DEA355]" />
                  <span>Tap to Shuffle</span>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#040202]/85 backdrop-blur-sm border border-[#6B503C]/30 px-2 py-0.5 text-[10px] font-mono text-[#F9F9F6] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DEA355] animate-pulse" />
                  <span>{currentBentoPhoto.location}</span>
                </div>
              </div>

              <p className="text-xs text-[#D3C29F] leading-relaxed font-light">
                Grounded in empirical inquiry and practical curiosity. Balancing academic computing with real-world exploration, automotive mechanics, and photography.
              </p>
            </div>

            <div className="p-4 bg-[#140A06] border-t border-[#6B503C]/20 text-[11px] font-mono text-[#8E7F70] flex justify-between">
              <span>Cardiff Metropolitan UK</span>
              <span className="text-[#F9F9F6]">Expected 2027</span>
            </div>
          </div>

          {/* Module 3 (4 cols): Governance & BITS Batch Representative */}
          <div className="lg:col-span-4 border border-[#6B503C]/30 bg-[#0D0704] flex flex-col justify-between overflow-hidden group">
            <div className="p-6 pb-4 flex items-center justify-between border-b border-[#6B503C]/20">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#DEA355]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#F9F9F6]">
                  Student Leadership // BITS
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#8E7F70]">
                2024–2025
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="relative aspect-[16/10] w-full border border-[#6B503C]/30 bg-[#040202] overflow-hidden">
                <Image
                  src={getAssetPath("/images/experience/bcas-bits-honour.webp")}
                  alt="Mohamed Riham receiving official commendation at BCAS IT Society ceremony in Kalmunai"
                  fill
                  className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                <div className="absolute bottom-2 left-2 bg-[#040202]/85 backdrop-blur-sm border border-[#6B503C]/30 px-2 py-0.5 text-[10px] font-mono text-[#DEA355]">
                  Auditorium Tribute Ceremony
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#F9F9F6] font-sans">
                  Batch Representative, BCAS IT Society
                </h4>
                <p className="text-xs text-[#D3C29F] mt-1 leading-relaxed font-light">
                  Elected liaison bridging students and faculty. Led peer programming circles, organized technical symposiums, and coordinated academic support.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#140A06] border-t border-[#6B503C]/20 text-[11px] font-mono text-[#8E7F70]">
              Official Signed Commendation Awarded
            </div>
          </div>

          {/* Module 4 (4 cols): Hardware Lab Engineering */}
          <div className="lg:col-span-4 border border-[#6B503C]/30 bg-[#0D0704] flex flex-col justify-between overflow-hidden group">
            <div className="p-6 pb-4 flex items-center justify-between border-b border-[#6B503C]/20">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#C43E17]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#F9F9F6]">
                  Systems Lab // Hardware
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#8E7F70]">
                Aug 2024
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="relative aspect-[16/10] w-full border border-[#6B503C]/30 bg-[#040202] overflow-hidden">
                <Image
                  src={getAssetPath("/images/experience/bcas-pc-clinic-software-bench.webp")}
                  alt="Mohamed Riham and technical team at BCAS PC Clinic software and diagnostics bench"
                  fill
                  className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                <div className="absolute bottom-2 left-2 bg-[#040202]/85 backdrop-blur-sm border border-[#6B503C]/30 px-2 py-0.5 text-[10px] font-mono text-[#C43E17]">
                  Software & Diagnostics Bench
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#F9F9F6] font-sans">
                  Volunteer Hardware Specialist
                </h4>
                <p className="text-xs text-[#D3C29F] mt-1 leading-relaxed font-light">
                  Conducted physical motherboard diagnostics, power supply testing, custom tower assembly, and OS kernel recovery for student computing stations.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#140A06] border-t border-[#6B503C]/20 text-[11px] font-mono text-[#8E7F70]">
              Diagnostic Bench // Component Testing
            </div>
          </div>

          {/* Module 5 (4 cols): Open Source & Model Hub */}
          <div className="lg:col-span-4 border border-[#6B503C]/30 bg-[#0D0704] flex flex-col justify-between overflow-hidden group">
            <div className="p-6 pb-4 flex items-center justify-between border-b border-[#6B503C]/20">
              <div className="flex items-center gap-2.5">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#6B503C]/40 bg-[#040202]">
                  <Image
                    src={getAssetPath("/images/profile/mohamed-riham-github.webp")}
                    alt="Mohamed Riham"
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#F9F9F6]">
                  Open Intelligence // Models
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#DEA355]">
                19 Public Repos
              </span>
            </div>

            <div className="p-6 space-y-5">
              <div className="p-4 bg-[#140A06] border border-[#6B503C]/25 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#F9F9F6]">
                    <HuggingFaceIcon className="w-4 h-4 text-[#DEA355]" />
                    <span>huggingface.co/mohamedriham</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E7F70]" />
                </div>
                <p className="text-[11px] text-[#D3C29F] font-light leading-relaxed">
                  Public repository for trained YOLOv8 model weights, inference checkpoints, and open computer vision datasets.
                </p>
              </div>

              <div className="p-4 bg-[#140A06] border border-[#6B503C]/25 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#F9F9F6]">
                    <GithubIcon className="w-4 h-4 text-[#F9F9F6]" />
                    <span>github.com/mohamed-riham</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E7F70]" />
                </div>
                <p className="text-[11px] text-[#D3C29F] font-light leading-relaxed">
                  Clean commit histories, modular Python architectures, and reproducible machine learning experiments.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#140A06] border-t border-[#6B503C]/20 flex items-center justify-between text-[11px] font-mono">
              <a
                href={profile.socials.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DEA355] hover:underline"
              >
                Explore HF Hub ↗
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D3C29F] hover:underline"
              >
                View GitHub ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
