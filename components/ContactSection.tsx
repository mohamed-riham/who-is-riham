"use client";

import { useState } from "react";
import { Mail, Copy, Check, Download, BookOpen, Send, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/content/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.08] relative overflow-hidden bg-[#070A0F]">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#00F2FE]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-3">
          <Mail className="w-3.5 h-3.5" />
          Get In Touch
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let’s discuss your next engineering or research initiative.
        </h2>

        <p className="text-sm sm:text-base text-[#8B9BB0] max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Open to Data Science, Machine Learning, Computer Vision, and Intelligent Systems opportunities (Internships, Graduate Roles, Full-Time, and Collaborations).
        </p>

        {/* Interactive Email Bar */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-[#0C111A] border border-white/10 shadow-xl shadow-black/50 mb-8 max-w-lg w-full">
          <div className="flex-1 flex items-center gap-2.5 px-3 py-2 text-sm font-mono text-white break-all justify-center sm:justify-start">
            <Mail className="w-4 h-4 text-[#00F2FE] shrink-0" />
            <span>{profile.email}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={copyEmail}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2.5 rounded-xl transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span className="text-[#00F2FE]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8B9BB0]" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#070A0F] bg-[#00F2FE] hover:bg-[#00D2FF] px-4 py-2.5 rounded-xl transition-colors shadow-sm shadow-[#00F2FE]/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="/cv.pdf"
            download="Mohamed_Riham_CV.pdf"
            className="inline-flex items-center gap-2 text-xs font-medium text-white bg-[#121A26] hover:bg-[#1A2536] border border-white/10 px-4 py-2.5 rounded-xl transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#00F2FE]" />
            Download Complete CV
          </a>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B9BB0] hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] px-3.5 py-2.5 rounded-xl transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B9BB0] hover:text-[#00F2FE] bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] px-3.5 py-2.5 rounded-xl transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            LinkedIn
          </a>

          <a
            href={profile.socials.dev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B9BB0] hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] px-3.5 py-2.5 rounded-xl transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            DEV Articles
          </a>
        </div>

        <div className="text-[11px] font-mono text-[#5C6B7E] mt-8 flex items-center justify-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#5C6B7E]" />
          <span>Addalaichenai & Dehiwala, Colombo, Sri Lanka • Available for Remote & On-Site Roles</span>
        </div>
      </div>
    </section>
  );
}
