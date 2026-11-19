"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#040202]/95 backdrop-blur-md py-16 text-xs text-[#D3C29F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-1.5 font-mono">
            <div className="text-base font-bold text-white font-sans">
              Mohamed Riham
            </div>
            <div className="text-xs text-[#A09383]">
              Who is Mohamed Riham? — Data Science Student // Cardiff Metropolitan University, UK (studied at ICBT Campus)
            </div>
            <div className="text-[11px] text-[#C43E17] font-semibold">
              Pearson BTEC HND in Software Engineering, Distinction
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <Link href="/about/" className="text-[#D3C29F] hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects/" className="text-[#D3C29F] hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/education/" className="text-[#D3C29F] hover:text-white transition-colors">
              Education
            </Link>
            <Link href="/articles/" className="text-[#D3C29F] hover:text-white transition-colors">
              Articles
            </Link>
            <Link href="/media/" className="text-[#D3C29F] hover:text-white transition-colors">
              Media
            </Link>
            <Link href="/#contact" className="text-[#C43E17] hover:text-white transition-colors font-semibold">
              Contact
            </Link>
          </div>
        </div>

        {/* Colophon & Metadata Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#A09383]">
          <div>
            ADDALAICHENAI / COLOMBO, SRI LANKA // GMT+5:30
          </div>

          <div className="flex items-center gap-4">
            <span>STATIC EXPORT // GITHUB PAGES</span>
            <span className="text-white/20">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#C43E17] hover:text-white transition-colors font-semibold"
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