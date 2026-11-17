"use client";

import Image from "next/image";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { educationList } from "@/content/education";
import { getAssetPath } from "@/lib/utils";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-[#040202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              06 // Academic History
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Degrees, credentials & transcripts.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            British undergraduate degree in progress and Pearson BTEC Higher National Diploma completed with 11 Distinctions.
          </p>
        </div>

        {/* Academic Ledger */}
        <div className="divide-y divide-[#6B503C]/25">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Left Column: Timeline & Awarding Body (3 cols) */}
              <div className="lg:col-span-3 space-y-2 font-mono">
                <div className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans">
                  {edu.period}
                </div>
                <div className="text-xs text-[#8E7F70]">
                  {edu.institution}
                </div>
                <div className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#DEA355] border border-[#DEA355]/30 bg-[#DEA355]/10">
                  {edu.status}
                </div>
              </div>

              {/* Center Column: Degree, Awarding Body, Transcript (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-mono text-[#DEA355] mt-1">
                    Awarded by: {edu.awardingBody}
                  </div>
                  {edu.grade && (
                    <div className="text-xs font-mono text-[#C43E17] mt-1 font-semibold">
                      Verified Grade: {edu.grade}
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#D3C29F] font-light leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Verified Modules */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-[#8E7F70] uppercase tracking-wider">
                    Verified Curricular Modules:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.modules.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 text-[11px] font-mono text-[#D3C29F] bg-[#120704] border border-[#6B503C]/25"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Verified Photograph (3 cols) */}
              <div className="lg:col-span-3">
                {edu.degree.startsWith("BSc") && (
                  <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-2">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#040202]">
                      <Image
                        src={getAssetPath("/images/profile/mohamed-riham-portrait.webp")}
                        alt="Mohamed Riham (Riham) — Cardiff Metropolitan University academic candidate portrait"
                        title="Mohamed Riham (Riham) — Cardiff Metropolitan University"
                        fill
                        className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 280px"
                      />
                    </div>
                    <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#D3C29F] flex justify-between">
                      <span>Cardiff Met Candidate</span>
                      <span className="text-[#C43E17]">Expected 2027</span>
                    </div>
                  </div>
                )}

                {edu.degree.startsWith("BTEC") && (
                  <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-2">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#040202]">
                      <Image
                        src={getAssetPath("/images/profile/mohamed-riham-campus.webp")}
                        alt="Mohamed Riham (Riham) on campus balcony during BTEC Higher National Diploma coursework"
                        title="Mohamed Riham (Riham) — Campus Academic Life"
                        fill
                        className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 280px"
                      />
                    </div>
                    <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#D3C29F] flex justify-between">
                      <span>Campus Diploma Studies</span>
                      <span className="text-[#DEA355]">11 Distinctions</span>
                    </div>
                  </div>
                )}

                {edu.degree.startsWith("Diploma") && (
                  <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-2">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#040202]">
                      <Image
                        src={getAssetPath("/images/profile/mohamed-riham-diploma.webp")}
                        alt="Mohamed Riham (Riham) during Pearson Assured Diploma in IT studies"
                        title="Mohamed Riham (Riham) — Foundation Studies"
                        fill
                        className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 280px"
                      />
                    </div>
                    <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#D3C29F] flex justify-between">
                      <span>Foundation Studies</span>
                      <span className="text-[#DEA355]">Pearson Assured</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
