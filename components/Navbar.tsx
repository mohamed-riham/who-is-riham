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
          ? "bg-[#070A0F]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#121A26] to-[#0A1017] border border-white/10 flex items-center justify-center text-[#00F2FE] font-mono font-bold text-sm tracking-tighter group-hover:border-[#00F2FE]/50 transition-colors shadow-sm">
            MR
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-white group-hover:text-[#00F2FE] transition-colors">
              Mohamed Riham
            </div>
            <div className="text-[11px] font-mono text-[#8B9BB0]">
              Data Science Undergraduate
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0C111A]/80 px-3 py-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-[#8B9BB0] hover:text-white px-3 py-1 rounded-full hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Quick Search & Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Search Trigger */}
          <button
            onClick={triggerPalette}
            className="flex items-center gap-2 text-xs text-[#8B9BB0] hover:text-white bg-[#0C111A] hover:bg-[#121A26] border border-white/10 px-3 py-1.5 rounded-lg transition-colors group"
            title="Search or jump to section (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>Search</span>
            <kbd className="text-[10px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[#5C6B7E] group-hover:text-white">
              Ctrl+K
            </kbd>
          </button>

          <a
            href="/cv.pdf"
            download="Mohamed_Riham_CV.pdf"
            className="flex items-center gap-1.5 text-xs font-medium text-[#F0F4F8] bg-[#121A26] hover:bg-[#1A2536] border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#00F2FE]" />
            CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 text-xs font-semibold text-[#070A0F] bg-[#00F2FE] hover:bg-[#00D2FF] px-3.5 py-1.5 rounded-lg transition-colors shadow-sm shadow-[#00F2FE]/20"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={triggerPalette}
            className="p-2 rounded-lg bg-[#0C111A] border border-white/10 text-[#00F2FE]"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-[#0C111A] border border-white/10 text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#070A0F]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#8B9BB0] hover:text-white py-2 border-b border-white/[0.04]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href="/cv.pdf"
              download="Mohamed_Riham_CV.pdf"
              className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-white bg-[#121A26] border border-white/10 py-2.5 rounded-lg"
            >
              <Download className="w-3.5 h-3.5 text-[#00F2FE]" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 flex items-center justify-center text-xs font-semibold text-[#070A0F] bg-[#00F2FE] py-2.5 rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
