"use client";

import { useState } from "react";
import { Mail, Copy, Check, Download, BookOpen, Send, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/content/profile";
import { getAssetPath } from "@/lib/utils";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/[0.08] relative overflow-hidden bg-[#080D18] ambient-glow-bottom">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-[#183F43]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold text-[#F2F0E9] tracking-tight mb-5 leading-tight">
          Let’s discuss your next{" "}
          <span className="font-serif italic font-normal text-[#63DCC6]">
            engineering or research
          </span>{" "}
          initiative.
        </h2>

        <p className="text-base text-[#A4ADBB] max-w-xl mx-auto mb-10 font-normal leading-relaxed">
          Open to Data Science, Machine Learning, Computer Vision, and Intelligent Systems opportunities (Internships, Graduate Roles, Full-Time, and Collaborations).
        </p>

        {/* Interactive Email Bar */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2.5 rounded-3xl bg-[#0D1422] border border-white/10 shadow-2xl shadow-black/60 mb-10 max-w-lg w-full">
          <div className="flex-1 flex items-center gap-3 px-3 py-2 text-sm font-mono text-[#F2F0E9] break-all justify-center sm:justify-start">
            <Mail className="w-4 h-4 text-[#63DCC6] shrink-0" />
            <span>{profile.email}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={copyEmail}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-medium text-[#F2F0E9] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-4 py-2.5 rounded-2xl transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#63DCC6]" />
                  <span className="text-[#63DCC6] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A4ADBB]" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#080D18] bg-[#63DCC6] hover:bg-[#78e3ce] px-4.5 py-2.5 rounded-2xl transition-all shadow-sm shadow-[#63DCC6]/20 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href={getAssetPath("/cv.pdf")}
            download="Mohamed_Riham_CV.pdf"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-4.5 py-2.5 rounded-2xl transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#63DCC6]" />
            Download Complete CV
          </a>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#A4ADBB] hover:text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-4 py-2.5 rounded-2xl transition-colors shadow-sm"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#A4ADBB] hover:text-[#63DCC6] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-4 py-2.5 rounded-2xl transition-colors shadow-sm"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            LinkedIn
          </a>

          <a
            href={profile.socials.dev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#A4ADBB] hover:text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-4 py-2.5 rounded-2xl transition-colors shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            DEV Articles
          </a>
        </div>

        <div className="text-xs font-mono text-[#69778A] mt-10 flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#69778A]" />
          <span>Addalaichenai & Colombo, Sri Lanka • Available for Remote & On-Site Roles</span>
        </div>
      </div>
    </section>
  );
}
