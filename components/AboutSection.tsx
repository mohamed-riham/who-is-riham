"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Layers, ShieldCheck, Shuffle } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { InstagramIcon } from "@/components/Icons";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

const RANDOM_SNAPSHOTS = [
  {
    id: "colombo-urban",
    src: "/images/profile/random/colombo-urban-candid.webp",
    alt: "Mohamed Riham authentic urban portrait in Colombo, Data Science Undergraduate",
    location: "Colombo, Sri Lanka",
    badge: "Urban Candid",
  },
  {
    id: "addalaichenai-motorbike",
    src: "/images/profile/random/addalaichenai-motorbike-candid.webp",
    alt: "Mohamed Riham candid with motorbike in Addalaichenai, Sri Lanka",
    location: "Addalaichenai, Sri Lanka",
    badge: "Motorbike Candid",
  },
  {
    id: "motorbike-sunset",
    src: "/images/profile/random/motorbike-sunset-portrait.webp",
    alt: "Mohamed Riham golden hour outdoor candid portrait with motorbike",
    location: "Addalaichenai, Sri Lanka",
    badge: "Golden Hour Candid",
  },
  {
    id: "formal-sunglasses",
    src: "/images/profile/random/formal-sunglasses-portrait.webp",
    alt: "Mohamed Riham formal editorial suit and sunglasses portrait",
    location: "Addalaichenai, Sri Lanka",
    badge: "Editorial Formal",
  },
  {
    id: "formal-tie-adjust",
    src: "/images/profile/random/formal-tie-adjust.webp",
    alt: "Mohamed Riham executive tie adjustment candid portrait",
    location: "Addalaichenai, Sri Lanka",
    badge: "Executive Candid",
  },
  {
    id: "diploma-ceremony",
    src: "/images/profile/random/diploma-awards-convocation.webp",
    alt: "Mohamed Riham graduation awards convocation ceremony in Kalmunai",
    location: "Kalmunai, Sri Lanka",
    badge: "Academic Convocation",
  },
];

export default function AboutSection() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showExtendedDossier, setShowExtendedDossier] = useState(false);

  useEffect(() => {
    // Automatically select a random snapshot on page load asynchronously
    const timer = setTimeout(() => {
      setPhotoIndex(Math.floor(Math.random() * RANDOM_SNAPSHOTS.length));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleNextPhoto = () => {
    setIsChanging(true);
    setTimeout(() => {
      setPhotoIndex((prev) => (prev + 1) % RANDOM_SNAPSHOTS.length);
      setIsChanging(false);
    }, 180);
  };

  const currentPhoto = RANDOM_SNAPSHOTS[photoIndex];

  return (
    <section id="dossier" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17]" />
              04 // PERSONAL DOSSIER &amp; BIOGRAPHY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Who is Mohamed Riham? <span className="text-[#C43E17]">Identity &amp; Curriculum.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A09383] bg-[#0E0604] border border-white/10 px-3 py-1.5 rounded-sm">
            LOCATION: ADDALAICHENAI / COLOMBO, SRI LANKA
          </div>
        </div>

        {/* Editorial Split Spread */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Authentic Lifestyle Photography & Ledger (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-white/10 bg-[#0A0503] p-2 relative group hover:border-[#C43E17]/40 transition-colors">
              {/* Corner crosshairs */}
              <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>

              {/* Photo Frame with Auto-Refresh Randomizer */}
              <div
                onClick={handleNextPhoto}
                className="relative aspect-[4/5] w-full overflow-hidden bg-[#040202] cursor-pointer select-none"
                title="Click or tap to shuffle candid snapshot"
              >
                <Image
                  key={currentPhoto.src}
                  src={getAssetPath(currentPhoto.src)}
                  alt={currentPhoto.alt}
                  fill
                  priority
                  className={`object-cover object-top group-hover:scale-102 transition-all duration-700 ${
                    isChanging ? "opacity-30 scale-98" : "opacity-100 scale-100"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-70 pointer-events-none" />

                {/* Top Shuffle Control Chip */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none">
                  <span className="bg-[#040202]/90 border border-white/10 px-2 py-0.5 text-[#A09383]">
                    SNAPSHOT <span className="text-[#C43E17] font-bold">0{photoIndex + 1}</span> / 0{RANDOM_SNAPSHOTS.length}
                  </span>
                  <span className="bg-[#040202]/90 border border-white/10 px-2 py-0.5 text-white flex items-center gap-1 group-hover:text-[#C43E17] transition-colors pointer-events-auto">
                    <Shuffle className="w-2.5 h-2.5 text-[#C43E17]" />
                    <span>Tap to Shuffle</span>
                  </span>
                </div>

                {/* Bottom Verified Location & Social Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="bg-[#040202]/90 border border-white/10 px-2.5 py-1 flex items-center gap-1.5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse" />
                    <span>{currentPhoto.location}</span>
                  </span>
                  <a
                    href="https://www.instagram.com/_mohamed_riham/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#040202]/90 border border-white/10 px-2.5 py-1 text-white hover:text-[#C43E17] flex items-center gap-1.5 transition-colors pointer-events-auto backdrop-blur-sm"
                  >
                    <span>{currentPhoto.badge}</span>
                    <InstagramIcon className="w-3 h-3 text-[#C43E17]" />
                  </a>
                </div>
              </div>

              {/* Technical Ledger */}
              <div className="p-4 bg-[#070302] border-t border-white/10 space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#A09383]">Awarding Body:</span>
                  <span className="text-white font-medium">Cardiff Metropolitan University, UK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09383]">Study Centre:</span>
                  <span className="text-white font-medium">ICBT Campus, Sri Lanka</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09383]">Prior Diploma:</span>
                  <span className="text-[#C43E17] font-semibold">Pearson BTEC HND (11 Distinctions)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Studio Inset (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans leading-tight">
                Bridging statistical data science with hands-on systems engineering.
              </h3>

              <p className="text-base text-[#D3C29F] font-light leading-relaxed">
                I am a final-year Data Science undergraduate at ICBT Campus, studying for a BSc (Hons) in Data Science awarded by Cardiff Metropolitan University, UK. Before this, I completed a Pearson BTEC Higher National Diploma in Software Engineering with Merit, earning 11 Distinctions across 15 technical computing units.
              </p>

              <p className="text-base text-[#D3C29F] font-light leading-relaxed">
                My engineering ethos is rooted in building working, verifiable systems. Rather than relying on simulated datasets or synthetic hype, I tackle genuine technical constraints—training a 99.20% mAP@50 YOLOv8 currency detector for the visually impaired, benchmark-testing fraud detection models across 284,807 real transactions (492 frauds, 0.172% ratio), and engineering local-first desktop automation with neural voice synthesis.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#0A0503] border border-white/10 space-y-2 rounded-sm hover:border-[#C43E17]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C43E17] uppercase font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Empirical Verification</span>
                </div>
                <p className="text-xs text-[#A09383] font-light leading-relaxed">
                  Every metric published is measured directly against confusion matrices, PR curves, and test sets. No arbitrary proficiency bars.
                </p>
              </div>

              <div className="p-5 bg-[#0A0503] border border-white/10 space-y-2 rounded-sm hover:border-[#C43E17]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C43E17] uppercase font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Physical Edge Constraints</span>
                </div>
                <p className="text-xs text-[#A09383] font-light leading-relaxed">
                  Designing lightweight models (YOLOv8n) and local-first software that run reliably on accessible edge hardware with minimal latency.
                </p>
              </div>
            </div>

            {/* Studio Workspace Image */}
            <div className="border border-white/10 bg-[#0A0503] p-2 relative group hover:border-[#C43E17]/40 transition-colors rounded-sm">
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-[#040202]">
                <Image
                  src={getAssetPath("/images/workspace/mohamed-riham-craft-studio.webp")}
                  alt="Mohamed Riham at creative maker and hardware craft studio desk"
                  title="Mohamed Riham — Hardware Craft Studio"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 bg-[#040202]/90 border border-white/10 px-2.5 py-1 text-[10px] font-mono text-white backdrop-blur-sm">
                  Maker Mindset // Hardware Craft &amp; Design Precision
                </div>
              </div>
            </div>

            {/* Communication & Focus Strip */}
            <div className="p-4 bg-[#0A0503] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A09383] rounded-sm">
              <span>COMMUNICATION: ENGLISH (PROFICIENT), TAMIL (NATIVE)</span>
              <span className="text-[#C43E17] font-semibold">AVAILABLE FOR APPLIED AI ROLES</span>
            </div>
          </div>

        </div>

        {/* Smooth Progressive Disclosure Control */}
        <ExpandControl
          isExpanded={showExtendedDossier}
          onToggle={() => setShowExtendedDossier(!showExtendedDossier)}
          controlsId="extended-dossier-faq"
          collapsedIndicator="EXECUTIVE PROFILE SUMMARY DISPLAYED"
          expandedIndicator="EXTENDED DOSSIER &amp; VERIFIED FAQ UNLOCKED"
          collapsedLabel="View Extended Dossier &amp; Verified FAQ (3 Inquiries)"
          expandedLabel="Hide Extended Dossier &amp; FAQ"
          className="mt-8"
        />

        {/* Fast Facts & Key Inquiries: Who is Mohamed Riham? */}
        <SmoothExpand id="extended-dossier-faq" isExpanded={showExtendedDossier}>
          <div className="mt-10 pt-10 border-t border-white/10 space-y-6">
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
                DOSSIER FAQ // IDENTITY &amp; VERIFICATION
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                Frequently Asked Inquiries: Who is Mohamed Riham?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#0A0503] border border-white/10 rounded-sm space-y-3 hover:border-[#C43E17]/40 transition-colors">
                <div className="font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
                  01 // Identity &amp; Origins
                </div>
                <h4 className="text-sm font-bold text-white font-sans">
                  Who is Mohamed Riham?
                </h4>
                <p className="text-xs text-[#D3C29F] font-light leading-relaxed">
                  Mohamed Riham (commonly known as Riham) is a Sri Lankan Data Science undergraduate and applied AI developer based in Addalaichenai and Colombo. He is currently completing his BSc (Hons) in Data Science awarded by Cardiff Metropolitan University, UK via ICBT Campus.
                </p>
              </div>

              <div className="p-6 bg-[#0A0503] border border-white/10 rounded-sm space-y-3 hover:border-[#C43E17]/40 transition-colors">
                <div className="font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
                  02 // Core Specializations
                </div>
                <h4 className="text-sm font-bold text-white font-sans">
                  What are his technical disciplines?
                </h4>
                <p className="text-xs text-[#D3C29F] font-light leading-relaxed">
                  Specialized in practical Computer Vision (custom YOLOv8 architectures), machine learning benchmarks on empirical datasets (Random Forest vs XGBoost fraud analytics), offline neural voice automation (EDITH), and IoT telemetry hardware.
                </p>
              </div>

              <div className="p-6 bg-[#0A0503] border border-white/10 rounded-sm space-y-3 hover:border-[#C43E17]/40 transition-colors">
                <div className="font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
                  03 // Published Work &amp; Code
                </div>
                <h4 className="text-sm font-bold text-white font-sans">
                  Where to explore his research &amp; repositories?
                </h4>
                <p className="text-xs text-[#D3C29F] font-light leading-relaxed">
                  His research is cataloged on Academia.edu and DEV Community, open-source model weights are hosted on HuggingFace, and production repositories are accessible on GitHub (@mohamed-riham).
                </p>
              </div>
            </div>
          </div>
        </SmoothExpand>

      </div>
    </section>
  );
}