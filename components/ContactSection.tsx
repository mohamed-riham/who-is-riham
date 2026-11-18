"use client";

import { useState } from "react";
import { Copy, Check, Download, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, HuggingFaceIcon } from "@/components/Icons";
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
    <section id="contact" className="py-24 lg:py-36 border-b border-white/10 bg-transparent relative overflow-hidden">
      {/* Background restrained ambient warmth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial from-[#C43E17]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
            11 // CONTACT DISPATCH
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.08]">
            Let’s build something <span className="text-[#C43E17]">empirical.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
            Open to Data Science, Machine Learning, Computer Vision, and Intelligent Systems engineering opportunities (Internships, Graduate Roles, and Research Collaborations).
          </p>
        </div>

        {/* Dispatch Action Box */}
        <div className="border border-white/10 bg-[#0A0503] rounded-sm p-8 lg:p-12 space-y-8 hover:border-[#C43E17]/60 hover:shadow-[0_0_50px_rgba(196,62,23,0.18)] transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-[#A09383] uppercase tracking-wider">Direct Inquiries</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-1">
                {profile.email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-xs font-mono text-white rounded-sm transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C43E17]" />
                    <span className="text-[#C43E17] font-semibold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#A09383]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#C43E17] hover:bg-[#D94519] text-xs font-mono font-bold text-[#040202] rounded-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(196,62,23,0.45),0_0_40px_rgba(196,62,23,0.18)] hover:shadow-[0_0_30px_rgba(196,62,23,0.70),0_0_60px_rgba(196,62,23,0.30)] hover:-translate-y-0.5"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getAssetPath("/Mohamed_Riham_CV.pdf")}
                download="Mohamed_Riham_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0E0604] hover:bg-[#1A0B07] border border-white/10 hover:border-white/20 text-xs font-mono text-white rounded-sm transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#C43E17]" />
                <span>Curriculum Vitae</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A09383]">
              Verified Public Channels
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#070302] hover:bg-[#120704] border border-white/10 hover:border-[#C43E17]/60 hover:shadow-[0_0_15px_rgba(196,62,23,0.2)] text-white transition-all flex items-center justify-between rounded-sm"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#C43E17]" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#A09383]" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#070302] hover:bg-[#120704] border border-white/10 hover:border-[#C43E17]/60 hover:shadow-[0_0_15px_rgba(196,62,23,0.2)] text-white transition-all flex items-center justify-between rounded-sm"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[#C43E17]" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#A09383]" />
              </a>

              <a
                href={profile.socials.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#070302] hover:bg-[#120704] border border-white/10 hover:border-[#C43E17]/60 hover:shadow-[0_0_15px_rgba(196,62,23,0.2)] text-white transition-all flex items-center justify-between rounded-sm"
              >
                <div className="flex items-center gap-2">
                  <HuggingFaceIcon className="w-4 h-4 text-[#C43E17]" />
                  <span>HuggingFace</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#A09383]" />
              </a>

              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#070302] hover:bg-[#120704] border border-white/10 hover:border-[#C43E17]/60 hover:shadow-[0_0_15px_rgba(196,62,23,0.2)] text-white transition-all flex items-center justify-between rounded-sm"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-[#C43E17]" />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#A09383]" />
              </a>

              <a
                href={profile.socials.dev}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#070302] hover:bg-[#120704] border border-white/10 hover:border-[#C43E17]/60 hover:shadow-[0_0_15px_rgba(196,62,23,0.2)] text-white transition-all flex items-center justify-between rounded-sm"
              >
                <span>DEV</span>
                <ArrowUpRight className="w-3 h-3 text-[#A09383]" />
              </a>

              <a
                href={profile.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#070302] hover:bg-[#120704] border border-white/10 hover:border-[#C43E17]/60 hover:shadow-[0_0_15px_rgba(196,62,23,0.2)] text-white transition-all flex items-center justify-between rounded-sm"
              >
                <span>Medium</span>
                <ArrowUpRight className="w-3 h-3 text-[#A09383]" />
              </a>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A09383]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C43E17]" />
              <span>Addalaichenai &amp; Colombo, Sri Lanka</span>
            </div>
            <div className="text-white">
              RESPONSE TIME: &lt; 24 HOURS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}