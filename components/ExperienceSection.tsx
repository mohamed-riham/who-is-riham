import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { experiences } from "@/content/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-2.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F2F0E9] tracking-tight">
            Professional & Leadership{" "}
            <span className="font-serif italic font-normal text-[#63DCC6]">
              Experience
            </span>
          </h2>
          <p className="text-sm text-[#A4ADBB] mt-3 leading-relaxed">
            Practical development roles, student governance leadership, and community hardware support.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/30 transition-all shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-[#F2F0E9] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#183F43] text-[#63DCC6] border border-[#63DCC6]/20">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#D9A441] mt-1">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-[#69778A]">
                  <span className="flex items-center gap-1.5 text-[#A4ADBB]">
                    <Calendar className="w-3.5 h-3.5 text-[#69778A]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-[#69778A] mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#A4ADBB] mb-5 leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#F2F0E9] leading-relaxed">
                    <span className="text-[#63DCC6] mt-1 font-mono text-xs">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/[0.03] text-[#A4ADBB] border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
