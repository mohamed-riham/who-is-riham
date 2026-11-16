"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Search, Sparkles } from "lucide-react";

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

  const triggerPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
  };

  const navLinks = [
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Writing", href: "/#writing" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#080D18]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-[#0D1422] border border-white/10 flex items-center justify-center text-[#63DCC6] font-mono font-bold text-xs tracking-wider group-hover:border-[#63DCC6]/50 transition-colors shadow-sm">
            MR
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#63DCC6] rounded-full border-2 border-[#080D18]" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-[#F2F0E9] group-hover:text-[#63DCC6] transition-colors">
              Mohamed Riham
            </div>
            <div className="text-[11px] font-mono text-[#A4ADBB]">
              Data Science Undergraduate
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0D1422]/90 px-3 py-1.5 rounded-full border border-white/[0.08] shadow-inner shadow-black/20">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-[#A4ADBB] hover:text-[#F2F0E9] px-3.5 py-1.5 rounded-full hover:bg-white/[0.05] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Quick Search & Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Search Trigger */}
          <button
            onClick={triggerPalette}
            className="flex items-center gap-2 text-xs text-[#A4ADBB] hover:text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-colors group"
            title="Search or jump to section (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#63DCC6]" />
            <span>Search</span>
            <kbd className="text-[10px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[#69778A] group-hover:text-[#F2F0E9]">
              Ctrl+K
            </kbd>
          </button>

          <a
            href="/cv.pdf"
            download="Mohamed_Riham_CV.pdf"
            className="flex items-center gap-1.5 text-xs font-medium text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#63DCC6]" />
            CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 text-xs font-semibold text-[#080D18] bg-[#63DCC6] hover:bg-[#78e3ce] px-3.5 py-1.5 rounded-lg transition-all shadow-sm shadow-[#63DCC6]/20 hover:shadow-[#63DCC6]/30 active:scale-95"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={triggerPalette}
            className="p-2 rounded-lg bg-[#0D1422] border border-white/10 text-[#63DCC6]"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-[#0D1422] border border-white/10 text-[#F2F0E9]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080D18]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#A4ADBB] hover:text-[#F2F0E9] py-2 border-b border-white/[0.04]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href="/cv.pdf"
              download="Mohamed_Riham_CV.pdf"
              className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-[#F2F0E9] bg-[#0D1422] border border-white/10 py-2.5 rounded-lg"
            >
              <Download className="w-3.5 h-3.5 text-[#63DCC6]" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 flex items-center justify-center text-xs font-semibold text-[#080D18] bg-[#63DCC6] py-2.5 rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
