"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award, BookOpen, CheckCircle2, ChevronDown, Building2, Calendar, MapPin } from "lucide-react";
import { educationList } from "@/content/education";
import { getAssetPath } from "@/lib/utils";

export default function EducationSection() {
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  // Separate the featured BSc qualification from the remaining academic history
  const bscQualification = educationList.find((edu) => edu.degree.startsWith("BSc"));
  const additionalQualifications = educationList.filter((edu) => !edu.degree.startsWith("BSc"));

  return (
    <section id="education" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

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
            British undergraduate degree in progress with previous Pearson BTEC Higher National Diploma completed with 11 Distinctions.
          </p>
        </div>

        {/* =========================================================================
            FEATURED PRIMARY QUALIFICATION (BSc HONS IN DATA SCIENCE)
            ========================================================================= */}
        {bscQualification && (
          <div className="border border-[#6B503C]/35 bg-[#0D0704] relative group shadow-2xl overflow-hidden">
            {/* Corner crosshairs */}
            <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>

            {/* Top Masthead Ribbon */}
            <div className="p-6 pb-4 border-b border-[#6B503C]/25 flex flex-wrap items-center justify-between gap-3 bg-[#140A06]">
              <div className="flex items-center gap-2.5 font-mono text-xs text-[#DEA355]">
                <GraduationCap className="w-4 h-4 text-[#C43E17]" />
                <span className="font-bold uppercase tracking-wider">
                  Primary Featured Academic Standing
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A0C06] border border-[#DEA355]/30 text-xs font-mono text-[#DEA355]">
                <span className="w-2 h-2 rounded-full bg-[#DEA355] animate-pulse" />
                <span>IN PROGRESS // EXPECTED 2027</span>
              </div>
            </div>

            {/* Split Content Body */}
            <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Academic Metadata & Curriculum (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="font-mono text-xs text-[#8E7F70] uppercase tracking-wider">
                    Current Degree Program
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F6] font-sans mt-1">
                    {bscQualification.degree}
                  </h3>
                </div>

                {/* Structured Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#120704] border border-[#6B503C]/25 font-mono text-xs">
                  <div>
                    <span className="text-[#8E7F70] block text-[10px] uppercase">Awarding University</span>
                    <span className="text-[#F9F9F6] font-bold text-sm mt-0.5 block">
                      Cardiff Metropolitan University, UK
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8E7F70] block text-[10px] uppercase">Study Centre</span>
                    <span className="text-[#DEA355] font-bold text-sm mt-0.5 block">
                      ICBT Campus, Colombo
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8E7F70] block text-[10px] uppercase">Academic Status</span>
                    <span className="text-[#F9F9F6] mt-0.5 block">
                      In Progress (Final Year)
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8E7F70] block text-[10px] uppercase">Expected Completion</span>
                    <span className="text-[#DEA355] mt-0.5 block">
                      June 2027
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#D3C29F] font-light leading-relaxed">
                  {bscQualification.description}
                </p>

                {/* Verified Modules */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-[11px] font-mono text-[#8E7F70] uppercase tracking-wider">
                    Core Degree Modules:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bscQualification.modules.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1 text-xs font-mono text-[#F9F9F6] bg-[#160C07] border border-[#6B503C]/30"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Academic Photograph (4 cols) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[280px] border border-[#6B503C]/35 bg-[#040202] p-2 space-y-2 shadow-xl">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0503]">
                    <Image
                      src={getAssetPath("/images/profile/mohamed-riham-portrait.webp")}
                      alt="Mohamed Riham — Cardiff Metropolitan University academic candidate portrait"
                      title="Mohamed Riham — Cardiff Metropolitan University"
                      fill
                      className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-40 pointer-events-none" />
                  </div>
                  <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#D3C29F] flex items-center justify-between border-t border-[#6B503C]/20">
                    <span>Cardiff Met Candidate</span>
                    <span className="text-[#DEA355]">Colombo, LK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            FUNCTIONAL BUTTON: MORE ACADEMIC HISTORY (ACCORDION / REVEAL)
            ========================================================================= */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setShowMoreHistory(!showMoreHistory)}
            aria-expanded={showMoreHistory}
            aria-controls="academic-history-expanded"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/40 hover:border-[#DEA355] text-xs font-mono font-bold text-[#F9F9F6] transition-all group shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] group-hover:scale-125 transition-transform" />
            <span>
              {showMoreHistory
                ? "Show Less Academic History"
                : `More Academic History (${additionalQualifications.length} Prior Qualifications)`}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#DEA355] transition-transform duration-300 ${
                showMoreHistory ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* =========================================================================
            EXPANDED ACADEMIC LEDGER (HND, DIPLOMA, CERTIFICATE — NO BSC DUPLICATION!)
            ========================================================================= */}
        {showMoreHistory && (
          <div
            id="academic-history-expanded"
            className="pt-6 divide-y divide-[#6B503C]/25 animate-in fade-in slide-in-from-top-4 duration-300"
          >
            {additionalQualifications.map((edu, idx) => (
              <div
                key={idx}
                className="py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
              >
                {/* Left Column: Timeline & Awarding Body (3 cols) */}
                <div className="lg:col-span-3 space-y-2 font-mono">
                  <div className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans">
                    {edu.period}
                  </div>
                  <div className="text-xs text-[#8E7F70]">
                    {edu.institution}
                  </div>
                  <div className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#DEA355] border border-[#DEA355]/30 bg-[#DEA355]/10">
                    {edu.status}
                  </div>
                </div>

                {/* Center Column: Degree, Awarding Body, Transcript (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans">
                      {edu.degree}
                    </h4>
                    <div className="text-sm font-mono text-[#DEA355] mt-1">
                      Awarded by: {edu.awardingBody}
                    </div>
                    {edu.grade && (
                      <div className="text-xs font-mono text-[#C43E17] mt-1 font-semibold">
                        Verified Result: {edu.grade}
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#D3C29F] font-light leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Modules */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono text-[#8E7F70] uppercase tracking-wider">
                      Verified Modules & Transcripts:
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
                  {edu.degree.startsWith("BTEC") && (
                    <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-2">
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#040202]">
                        <Image
                          src={getAssetPath("/images/profile/mohamed-riham-campus.webp")}
                          alt="Mohamed Riham on campus balcony during BTEC Higher National Diploma coursework"
                          title="Mohamed Riham — Campus Academic Life"
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
                          alt="Mohamed Riham during Pearson Assured Diploma in IT studies"
                          title="Mohamed Riham — Foundation Studies"
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

                  {edu.degree.startsWith("Certificate") && (
                    <div className="p-4 bg-[#0D0704] border border-[#6B503C]/30 space-y-2 font-mono text-xs">
                      <div className="text-[#DEA355] font-semibold">Pearson Assured Verification</div>
                      <div className="text-[11px] text-[#8E7F70]">BCAS Kalmunai Campus</div>
                      <div className="text-[#F9F9F6] text-xs">Professional Language Certification</div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
