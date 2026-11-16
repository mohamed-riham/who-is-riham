import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { experiences } from "@/content/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional & Leadership Experience
          </h2>
          <p className="text-sm text-[#8B9BB0] mt-2 leading-relaxed">
            Practical development roles, student governance leadership, and community hardware support.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0C111A] border border-white/[0.08] hover:border-[#00F2FE]/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-[#00F2FE] border border-white/10">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#F5A623] mt-0.5">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-[#8B9BB0]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#5C6B7E]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-[#5C6B7E] mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#8B9BB0] mb-4 leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F0F4F8]">
                    <span className="text-[#00F2FE] mt-1 text-xs">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] text-[#8B9BB0] border border-white/[0.05]"
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
