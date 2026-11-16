import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { educationList } from "@/content/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#080D18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-2.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F2F0E9] tracking-tight">
            Education &{" "}
            <span className="font-serif italic font-normal text-[#63DCC6]">
              Qualifications
            </span>
          </h2>
          <p className="text-sm text-[#A4ADBB] mt-3 leading-relaxed">
            British degree and higher diploma programmes covering data science, algorithmic computation, and verified software engineering rigor.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/30 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#183F43] text-[#63DCC6] border border-[#63DCC6]/20">
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-[#69778A] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F2F0E9] tracking-tight mt-1">
                  {edu.degree}
                </h3>

                <div className="text-sm font-semibold text-[#D9A441] mt-1">
                  {edu.institution}
                </div>
                <div className="text-xs font-mono text-[#A4ADBB] mt-0.5">
                  Awarded by <span className="text-[#63DCC6]">{edu.awardingBody}</span>
                </div>

                {edu.grade && (
                  <div className="inline-flex items-center gap-1.5 mt-3.5 px-3 py-1 rounded-xl bg-[#D9A441]/10 border border-[#D9A441]/20 text-xs font-mono text-[#D9A441]">
                    <Award className="w-3.5 h-3.5" />
                    {edu.grade}
                  </div>
                )}

                <p className="text-sm text-[#A4ADBB] mt-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Modules */}
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <div className="text-xs font-mono text-[#69778A] uppercase tracking-wider mb-2.5">
                    Verified Key Modules:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.modules.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/[0.03] text-[#F2F0E9] border border-white/[0.06]"
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
