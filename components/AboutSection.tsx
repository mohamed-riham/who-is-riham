import { User, Terminal, BookOpen, Sparkles, Globe, Brain, ShieldCheck, GraduationCap } from "lucide-react";
import { profile } from "@/content/profile";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Technical Identity Dossier Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-[#0D1422] border border-white/10 p-6 flex flex-col justify-between shadow-2xl shadow-black/80 group">
              {/* Card Header */}
              <div className="flex justify-between items-center text-xs font-mono text-[#69778A] pb-4 border-b border-white/[0.06]">
                <span className="tracking-wider">TECHNICAL DOSSIER</span>
                <span className="inline-flex items-center gap-1.5 text-[#63DCC6]">
                  <span className="w-2 h-2 rounded-full bg-[#63DCC6]" />
                  VERIFIED
                </span>
              </div>

              {/* Central Geometric Tech Mark */}
              <div className="flex flex-col items-center justify-center py-7">
                <div className="w-24 h-24 rounded-2xl bg-[#131E30] border border-[#63DCC6]/30 flex items-center justify-center text-3xl font-mono font-bold text-[#F2F0E9] tracking-tighter group-hover:scale-105 transition-transform shadow-inner">
                  MR
                </div>
                <div className="text-sm font-semibold text-[#F2F0E9] mt-3">
                  Mohamed Riham
                </div>
                <div className="text-xs font-mono text-[#63DCC6] mt-0.5">
                  Data Science Undergraduate
                </div>
              </div>

              {/* Dossier Quick Specs */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs font-mono">
                <div className="flex justify-between text-[#A4ADBB]">
                  <span className="text-[#69778A]">Awarding University:</span>
                  <span className="text-[#F2F0E9] font-medium text-right">Cardiff Metropolitan, UK</span>
                </div>
                <div className="flex justify-between text-[#A4ADBB]">
                  <span className="text-[#69778A]">Study Centre:</span>
                  <span className="text-[#F2F0E9] font-medium text-right">ICBT Campus, Sri Lanka</span>
                </div>
                <div className="flex justify-between text-[#A4ADBB]">
                  <span className="text-[#69778A]">Prior Diploma:</span>
                  <span className="text-[#63DCC6] font-medium text-right">BTEC HND Merit (10 Dist.)</span>
                </div>
                <div className="flex justify-between text-[#A4ADBB]">
                  <span className="text-[#69778A]">Location:</span>
                  <span className="text-[#F2F0E9] font-medium text-right">Addalaichenai / Colombo</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>Identity & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F0E9] tracking-tight leading-tight">
              Bridging statistical data science with{" "}
              <span className="font-serif italic font-normal text-[#63DCC6]">
                hands-on systems engineering
              </span>
              .
            </h2>

            <p className="text-base text-[#A4ADBB] leading-relaxed">
              I am a final-year Data Science undergraduate at ICBT Campus, studying for a BSc (Hons) in Data Science awarded by Cardiff Metropolitan University, UK. Before this, I completed a Pearson BTEC Higher National Diploma in Software Engineering with Merit, earning 10 Distinctions across 15 technical units.
            </p>

            <p className="text-base text-[#A4ADBB] leading-relaxed">
              My core engineering philosophy is grounded in building working, verifiable systems. Rather than relying on simulated datasets or abstract theory, I engineer practical solutions—ranging from a 99.2% mAP YOLOv8 currency detector for the visually impaired to 100% offline desktop automation and empirical big data fraud detection research.
            </p>

            {/* Quick Context Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0D1422] border border-white/[0.07] hover:border-white/15 transition-colors">
                <div className="text-xs font-semibold text-[#F2F0E9] flex items-center gap-2 mb-1.5">
                  <Globe className="w-4 h-4 text-[#63DCC6]" />
                  Languages & Communication
                </div>
                <div className="text-xs text-[#A4ADBB] leading-normal">
                  English (Pearson Assured Certified) and Tamil (Native). Comfortable with technical documentation and cross-functional collaboration.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1422] border border-white/[0.07] hover:border-white/15 transition-colors">
                <div className="text-xs font-semibold text-[#F2F0E9] flex items-center gap-2 mb-1.5">
                  <Brain className="w-4 h-4 text-[#D9A441]" />
                  Active Technical Focus
                </div>
                <div className="text-xs text-[#A4ADBB] leading-normal">
                  Edge computer vision, extreme class imbalance mitigation, privacy-preserving local AI, and reliable web data pipelines.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
