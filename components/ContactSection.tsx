"use client";

import { useState } from "react";
import { Mail, Copy, Check, Download, ArrowUpRight, MapPin } from "lucide-react";
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
    <section id="contact" className="py-24 lg:py-36 border-b border-[#6B503C]/20 bg-[#040202] relative overflow-hidden">
      {/* Background radial ambient warmth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial from-[#5C2712]/30 via-[#C43E17]/05 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
            11 // Contact Dispatch
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F9F9F6] font-sans leading-[1.08]">
            Let’s build something empirical.
          </h2>
          <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
            Open to Data Science, Machine Learning, Computer Vision, and Intelligent Systems engineering opportunities (Internships, Graduate Roles, and Research Collaborations).
          </p>
        </div>

        {/* Dispatch Action Box */}
        <div className="border border-[#6B503C]/35 bg-[#0D0704] p-8 lg:p-12 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#6B503C]/20">
            <div>
              <div className="text-xs font-mono text-[#8E7F70] uppercase">Direct Inquiries</div>
              <div className="text-2xl sm:text-3xl font-bold text-[#F9F9F6] font-sans mt-1">
                {profile.email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#160C07] hover:bg-[#1E110A] border border-[#6B503C]/40 text-xs font-mono text-[#F9F9F6] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#DEA355]" />
                    <span className="text-[#DEA355] font-semibold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#D3C29F]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#C43E17] hover:bg-[#DB4A1E] text-xs font-mono font-bold text-[#040202] uppercase tracking-wider transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getAssetPath("/Mohamed_Riham_CV.pdf")}
                download="Mohamed_Riham_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/35 text-xs font-mono text-[#DEA355] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8E7F70]">
              Verified Public Channels
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120704] hover:bg-[#1A0B05] border border-[#6B503C]/20 hover:border-[#DEA355] text-[#D3C29F] hover:text-[#F9F9F6] transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#8E7F70]" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120704] hover:bg-[#1A0B05] border border-[#6B503C]/20 hover:border-[#DEA355] text-[#D3C29F] hover:text-[#DEA355] transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#8E7F70]" />
              </a>

              <a
                href={profile.socials.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120704] hover:bg-[#1A0B05] border border-[#6B503C]/20 hover:border-[#DEA355] text-[#D3C29F] hover:text-[#DEA355] transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <HuggingFaceIcon className="w-4 h-4" />
                  <span>HuggingFace</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#8E7F70]" />
              </a>

              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120704] hover:bg-[#1A0B05] border border-[#6B503C]/20 hover:border-[#C43E17] text-[#D3C29F] hover:text-[#C43E17] transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#8E7F70]" />
              </a>

              <a
                href={profile.socials.dev}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120704] hover:bg-[#1A0B05] border border-[#6B503C]/20 hover:border-[#DEA355] text-[#D3C29F] hover:text-[#F9F9F6] transition-colors flex items-center justify-between"
              >
                <span>DEV</span>
                <ArrowUpRight className="w-3 h-3 text-[#8E7F70]" />
              </a>

              <a
                href={profile.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120704] hover:bg-[#1A0B05] border border-[#6B503C]/20 hover:border-[#DEA355] text-[#D3C29F] hover:text-[#F9F9F6] transition-colors flex items-center justify-between"
              >
                <span>Medium</span>
                <ArrowUpRight className="w-3 h-3 text-[#8E7F70]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
