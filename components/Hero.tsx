import { Download, ArrowRight, BookOpen, Terminal, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid">
      {/* Luminous Glow highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#00F2FE]/10 via-[#00F2FE]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C111A] border border-white/10 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
          <span className="text-xs font-mono text-[#8B9BB0]">
            BSc (Hons) Data Science • Cardiff Met / ICBT Campus
          </span>
        </div>

        {/* Hero Title & Positioning */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0F7FA] to-[#00F2FE]">
              Intelligent Systems
            </span>{" "}
            that solve real-world problems.
          </h1>

          <p className="text-base sm:text-lg text-[#8B9BB0] leading-relaxed mb-8 max-w-2xl font-normal">
            {profile.positioning}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#070A0F] bg-[#00F2FE] hover:bg-[#00D2FF] px-5 py-3 rounded-lg transition-all duration-200 shadow-md shadow-[#00F2FE]/20 hover:translate-y-[-1px]"
            >
              Explore Featured Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/cv.pdf"
              download="Mohamed_Riham_CV.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#0C111A] hover:bg-[#131A26] border border-white/10 px-5 py-3 rounded-lg transition-all duration-200 hover:border-white/20"
            >
              <Download className="w-4 h-4 text-[#00F2FE]" />
              Download CV
            </a>

            {/* Social Link Chips */}
            <div className="flex items-center gap-2 sm:ml-2 pl-2 sm:border-l border-white/10">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0C111A] hover:bg-[#131A26] border border-white/10 text-[#8B9BB0] hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0C111A] hover:bg-[#131A26] border border-white/10 text-[#8B9BB0] hover:text-[#00F2FE] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.dev}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0C111A] hover:bg-[#131A26] border border-white/10 text-[#8B9BB0] hover:text-white transition-colors"
                aria-label="DEV Community Profile"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Terminal Command Line Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0C111A] border border-white/[0.08] font-mono text-xs text-[#8B9BB0] mb-12">
            <span className="text-[#00F2FE]">$</span>
            <span className="text-[#F0F4F8]">yolo predict</span>
            <span className="text-[#5C6B7E]">model=currency_yolov8n.pt</span>
            <span className="hidden sm:inline text-[#5C6B7E]">source=camera_0</span>
            <span className="w-1.5 h-3 bg-[#00F2FE] animate-pulse" />
          </div>
        </div>

        {/* Proof Strip - 4 Verified Fact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/[0.08]">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0C111A]/80 border border-white/[0.06] hover:border-[#00F2FE]/30 transition-colors group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight group-hover:text-[#00F2FE] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#F0F4F8] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#5C6B7E] mt-0.5 font-mono">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
