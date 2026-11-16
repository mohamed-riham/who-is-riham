import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { educationList } from "@/content/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#070A0F]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-sm text-[#8B9BB0] mt-2 leading-relaxed">
            British degree and higher diploma programmes covering data science, algorithmic computation, and verified software engineering rigor.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0C111A] border border-white/[0.08] hover:border-[#00F2FE]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-[#5C6B7E] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">
                  {edu.degree}
                </h3>

                <div className="text-sm font-semibold text-[#F5A623] mt-0.5">
                  {edu.institution}
                </div>
                <div className="text-xs font-mono text-[#8B9BB0] mt-0.5">
                  Awarded by {edu.awardingBody}
                </div>

                {edu.grade && (
                  <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/20 text-xs font-mono text-[#F5A623]">
                    <Award className="w-3.5 h-3.5" />
                    {edu.grade}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#8B9BB0] mt-3 leading-relaxed">
                  {edu.description}
                </p>

                {/* Modules */}
                <div className="mt-4 pt-3 border-t border-white/[0.05]">
                  <div className="text-[11px] font-mono text-[#5C6B7E] uppercase tracking-wider mb-2">
                    Verified Key Modules:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.modules.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] text-[#F0F4F8] border border-white/[0.06]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
