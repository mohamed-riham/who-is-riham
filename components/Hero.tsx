import { Download, ArrowRight, BookOpen, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/content/profile";
import { getAssetPath } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden noir-grid ambient-glow-top">
      {/* Restrained Noir Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#183F43]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[200px] bg-[#63DCC6]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Availability & Academic Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1422] border border-white/10 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#63DCC6] animate-pulse" />
          <span className="text-xs font-mono text-[#A4ADBB] tracking-tight">
            BSc (Hons) Data Science <span className="text-white/20">•</span> Cardiff Met / ICBT Campus
          </span>
        </div>

        {/* Hero Title & Positioning */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2F0E9] mb-6 leading-[1.08]">
            Engineering{" "}
            <span className="font-serif italic font-normal text-[#63DCC6]">
              Intelligent Systems
            </span>{" "}
            that solve real-world problems.
          </h1>

          <p className="text-base sm:text-xl text-[#A4ADBB] leading-relaxed mb-9 max-w-2xl font-normal">
            {profile.positioning}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#080D18] bg-[#63DCC6] hover:bg-[#78e3ce] px-5 py-3 rounded-xl transition-all duration-200 shadow-md shadow-[#63DCC6]/20 hover:translate-y-[-1px] active:scale-98"
            >
              Explore Featured Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getAssetPath("/cv.pdf")}
              download="Mohamed_Riham_CV.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#F2F0E9] bg-[#0D1422] hover:bg-[#131E30] border border-white/10 px-5 py-3 rounded-xl transition-all duration-200 hover:border-white/20 active:scale-98"
            >
              <Download className="w-4 h-4 text-[#63DCC6]" />
              Download CV
            </a>

            {/* Social Link Chips */}
            <div className="flex items-center gap-2 sm:ml-2 pl-2 sm:border-l border-white/10">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0D1422] hover:bg-[#131E30] border border-white/10 text-[#A4ADBB] hover:text-[#F2F0E9] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0D1422] hover:bg-[#131E30] border border-white/10 text-[#A4ADBB] hover:text-[#63DCC6] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.dev}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0D1422] hover:bg-[#131E30] border border-white/10 text-[#A4ADBB] hover:text-[#F2F0E9] transition-colors"
                aria-label="DEV Community Profile"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Terminal Command Line Snippet */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0D1422] border border-white/[0.08] font-mono text-xs text-[#A4ADBB] mb-14 shadow-inner">
            <span className="text-[#63DCC6]">$</span>
            <span className="text-[#F2F0E9]">yolo predict</span>
            <span className="text-[#69778A]">model=currency_yolov8n.pt</span>
            <span className="hidden sm:inline text-[#69778A]">conf=0.85 imgsz=640</span>
            <span className="w-1.5 h-3 bg-[#63DCC6] animate-pulse" />
          </div>
        </div>

        {/* Proof Strip - 4 Verified Fact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/[0.08]">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#0D1422]/90 border border-white/[0.07] hover:border-[#63DCC6]/30 transition-all duration-200 group"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#F2F0E9] tracking-tight group-hover:text-[#63DCC6] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#F2F0E9] mt-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#69778A] mt-0.5 font-mono">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
