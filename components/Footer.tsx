"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#6B503C]/20 bg-[#040202]/90 backdrop-blur-md py-16 text-xs text-[#D3C29F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-1.5 font-mono">
            <div className="text-base font-bold text-[#F9F9F6] font-sans">
              Mohamed Riham
            </div>
            <div className="text-xs text-[#8E7F70]">
              Who is Mohamed Riham? — BSc (Hons) Data Science // Cardiff Metropolitan University, UK (via ICBT Campus)
            </div>
            <div className="text-[11px] text-[#DEA355]">
              Former Pearson BTEC HND Software Engineering // 11 Distinctions
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <Link href="/#showcase" className="text-[#D3C29F] hover:text-[#F9F9F6] transition-colors">
              Showcase
            </Link>
            <Link href="/#dossier" className="text-[#D3C29F] hover:text-[#F9F9F6] transition-colors">
              Dossier
            </Link>
            <Link href="/#systems" className="text-[#D3C29F] hover:text-[#F9F9F6] transition-colors">
              Systems
            </Link>
            <Link href="/#capabilities" className="text-[#D3C29F] hover:text-[#F9F9F6] transition-colors">
              Capabilities
            </Link>
            <Link href="/#experience" className="text-[#D3C29F] hover:text-[#F9F9F6] transition-colors">
              Experience
            </Link>
            <Link href="/#writing" className="text-[#D3C29F] hover:text-[#F9F9F6] transition-colors">
              Writing
            </Link>
            <Link href="/#contact" className="text-[#DEA355] hover:text-[#F9F9F6] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Colophon & Metadata Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8E7F70]">
          <div>
            ADDALAICHENAI / COLOMBO, SRI LANKA // GMT+5:30
          </div>

          <div className="flex items-center gap-4">
            <span>STATIC EXPORT // GITHUB PAGES</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#DEA355] hover:text-[#F9F9F6] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
