"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, Search, ArrowUpRight } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const triggerPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
  };

  const navLinks = [
    { num: "01", label: "Showcase", href: "/#showcase" },
    { num: "02", label: "Dossier", href: "/#dossier" },
    { num: "03", label: "Systems", href: "/#systems" },
    { num: "04", label: "Capabilities", href: "/#capabilities" },
    { num: "05", label: "Experience", href: "/#experience" },
    { num: "06", label: "Writing", href: "/#writing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        mobileOpen
          ? "inset-0 z-50 bg-[#040202] flex flex-col justify-between overflow-y-auto"
          : scrolled
          ? "z-40 bg-[#040202]/92 backdrop-blur-md border-b border-[#6B503C]/25 shadow-xl shadow-black/60"
          : "z-40 bg-[#040202]/40 backdrop-blur-sm border-b border-[#6B503C]/15"
      }`}
    >
      {/* Top Masthead Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between shrink-0 border-b border-[#6B503C]/20">
        {/* Editorial Brand Mark */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3.5 group shrink-0"
        >
          <div className="relative w-8 h-8 rounded-sm bg-[#160C07] border border-[#6B503C]/40 overflow-hidden group-hover:border-[#C43E17] transition-colors shrink-0">
            <Image
              src={getAssetPath("/images/profile/mohamed-riham-github.webp")}
              alt="Mohamed Riham"
              fill
              sizes="32px"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="text-sm font-bold tracking-tight text-[#F9F9F6] group-hover:text-[#DEA355] transition-colors font-sans whitespace-nowrap">
              Mohamed Riham
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E7F70] whitespace-nowrap">
              Data Science // Applied AI
            </span>
          </div>
        </Link>

        {/* Editorial Spaced Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-xs text-[#D3C29F] hover:text-[#F9F9F6] transition-colors py-1 relative"
            >
              <span className="text-[10px] font-mono text-[#8E7F70] group-hover:text-[#C43E17] transition-colors">
                {link.num}
              </span>
              <span className="tracking-wide uppercase font-medium">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C43E17] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right Action Array (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={triggerPalette}
            className="inline-flex items-center gap-2 text-xs text-[#D3C29F] hover:text-[#F9F9F6] bg-[#120A07] hover:bg-[#1C100B] border border-[#6B503C]/30 px-3 py-1.5 rounded-sm transition-colors group"
            title="Search or jump to section (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#DEA355]" />
            <span className="font-mono text-[11px] text-[#8E7F70] group-hover:text-[#D3C29F]">⌘K</span>
          </button>

          <a
            href={getAssetPath("/Mohamed_Riham_CV.pdf")}
            download="Mohamed_Riham_CV.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D3C29F] hover:text-[#F9F9F6] bg-[#120A07] hover:bg-[#1C100B] border border-[#6B503C]/30 px-3 py-1.5 rounded-sm transition-colors"
          >
            <Download className="w-3 h-3 text-[#DEA355]" />
            <span>CV</span>
          </a>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#040202] bg-[#C43E17] hover:bg-[#DB4A1E] px-4 py-1.5 rounded-sm transition-colors uppercase tracking-wider shadow-sm font-mono"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={triggerPalette}
            className="p-2 text-[#D3C29F] hover:text-[#F9F9F6] bg-[#120A07] border border-[#6B503C]/30 rounded-sm"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-[#DEA355]" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#F9F9F6] bg-[#120A07] border border-[#6B503C]/30 rounded-sm hover:border-[#C43E17] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#C43E17]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Editorial Menu Body */}
      {mobileOpen && (
        <div className="lg:hidden flex-1 px-6 py-8 flex flex-col justify-between max-w-md mx-auto w-full">
          <div className="space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#8E7F70]">
              Index Directory
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between border-b border-[#6B503C]/20 pb-3 group"
                >
                  <span className="text-2xl font-bold text-[#F9F9F6] group-hover:text-[#DEA355] transition-colors font-sans">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#C43E17]">/{link.num}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#6B503C]/20 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={getAssetPath("/Mohamed_Riham_CV.pdf")}
                download="Mohamed_Riham_CV.pdf"
                className="flex items-center justify-center gap-2 py-3 rounded-sm bg-[#120A07] border border-[#6B503C]/40 text-xs font-mono text-[#F9F9F6]"
              >
                <Download className="w-3.5 h-3.5 text-[#DEA355]" />
                Download CV
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 rounded-sm bg-[#C43E17] text-xs font-mono font-bold text-[#040202] uppercase tracking-wider"
              >
                Contact
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-[11px] font-mono text-[#8E7F70] text-center">
              Cardiff Metropolitan University // ICBT Campus
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
