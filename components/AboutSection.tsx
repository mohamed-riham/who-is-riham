import { User, Terminal, BookOpen, Sparkles, Globe, Brain } from "lucide-react";
import { profile } from "@/content/profile";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Avatar Graphic / Monogram Art */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-[#121A26] via-[#0C111A] to-[#070A0F] border border-white/10 p-4 flex flex-col justify-between shadow-2xl shadow-black/80 group">
              <div className="flex justify-between items-center text-xs font-mono text-[#5C6B7E]">
                <span>MOHAMED RIHAM</span>
                <span className="w-2 h-2 rounded-full bg-[#00F2FE]" />
              </div>

              {/* Central Geometric Tech Mark */}
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#00F2FE]/20 to-[#F5A623]/20 border border-[#00F2FE]/30 flex items-center justify-center text-3xl font-mono font-extrabold text-white tracking-tighter group-hover:scale-105 transition-transform">
                  MR
                </div>
                <div className="text-xs font-mono text-[#00F2FE] mt-3">
                  Data Science • Edge AI
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8B9BB0]">
                <span>ICBT / Cardiff Met</span>
                <span>Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* About Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              About Me & Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bridging statistical data science with hands-on systems engineering.
            </h2>

            <p className="text-sm sm:text-base text-[#8B9BB0] leading-relaxed">
              I am a final-year Data Science undergraduate at ICBT Campus, studying for a BSc (Hons) in Data Science awarded by Cardiff Metropolitan University, UK. Before this, I completed a Pearson BTEC Higher National Diploma in Software Engineering with Merit (earning 10 Distinctions across 15 Units).
            </p>

            <p className="text-sm sm:text-base text-[#8B9BB0] leading-relaxed">
              My core technical philosophy is grounded in building working, verifiable systems. Rather than relying on simulated datasets or abstract theory, I engineer practical solutions—ranging from a 99.2% mAP YOLOv8 currency detector for the visually impaired to 100% offline desktop automation and empirical big data fraud detection research.
            </p>

            {/* Quick Context Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-[#0C111A] border border-white/[0.06]">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Globe className="w-3.5 h-3.5 text-[#00F2FE]" />
                  Languages Spoken
                </div>
                <div className="text-xs text-[#8B9BB0]">
                  English (Pearson Assured Certified) & Tamil.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0C111A] border border-white/[0.06]">
                <div className="text-xs font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Brain className="w-3.5 h-3.5 text-[#F5A623]" />
                  Current Focus
                </div>
                <div className="text-xs text-[#8B9BB0]">
                  Edge computer vision, embedded devices & privacy-first AI.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
