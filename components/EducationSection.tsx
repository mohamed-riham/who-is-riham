"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";
import { educationList } from "@/content/education";
import { getAssetPath } from "@/lib/utils";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

export default function EducationSection() {
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  // Both BSc and Pearson BTEC HND are featured primary qualifications (Always Visible)
  const bscQualification = educationList.find((edu) => edu.degree.startsWith("BSc"));
  const hndQualification = educationList.find((edu) => edu.degree.includes("Higher National Diploma"));
  const priorQualifications = educationList.filter(
    (edu) => !edu.degree.startsWith("BSc") && !edu.degree.includes("Higher National Diploma")
  );

  return (
    <section id="education" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
              06 // ACADEMIC RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Degrees, credentials <span className="text-[#C43E17]">&amp; transcripts.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A09383] leading-relaxed font-light">
            British undergraduate degree in progress with previous Pearson BTEC Higher National Diploma completed with 11 Distinctions.
          </p>
        </div>

        {/* =========================================================================
            FEATURED PRIMARY QUALIFICATION (BSc HONS IN DATA SCIENCE)
            ========================================================================= */}
        {bscQualification && (
          <div className="border border-white/10 bg-[#0A0503] relative group rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_40px_rgba(196,62,23,0.18)] transition-all duration-300 overflow-hidden">
            {/* Corner crosshairs */}
            <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>

            {/* Top Masthead Ribbon */}
            <div className="p-6 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#070302]">
              <div className="flex items-center gap-2.5 font-mono text-xs text-white">
                <GraduationCap className="w-4 h-4 text-[#C43E17]" />
                <span className="font-bold uppercase tracking-wider text-[#C43E17]">
                  PRIMARY FEATURED ACADEMIC STANDING
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A0B07] border border-[#C43E17]/30 text-xs font-mono text-[#C43E17]">
                <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse" />
                <span>IN PROGRESS // EXPECTED 2027</span>
              </div>
            </div>

            {/* Split Content Body */}
            <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Academic Metadata & Curriculum (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="font-mono text-xs text-[#A09383] uppercase tracking-wider">
                    Current Degree Program
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans mt-1">
                    {bscQualification.degree}
                  </h3>
                </div>

                {/* Structured Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#050201] border border-white/10 font-mono text-xs rounded-sm">
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Awarding University</span>
                    <span className="text-white font-bold text-sm mt-0.5 block">
                      Cardiff Metropolitan University, UK
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Study Centre</span>
                    <span className="text-[#C43E17] font-bold text-sm mt-0.5 block">
                      ICBT Campus, Colombo
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Academic Status</span>
                    <span className="text-white mt-0.5 block">
                      In Progress (Final Year)
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Expected Completion</span>
                    <span className="text-[#C43E17] mt-0.5 block">
                      June 2027
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#D3C29F] font-light leading-relaxed">
                  {bscQualification.description}
                </p>

                {/* Verified Modules */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-[11px] font-mono text-[#A09383] uppercase tracking-wider">
                    Core Degree Modules:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bscQualification.modules.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1 text-xs font-mono text-white bg-[#120704] border border-white/10 rounded-sm"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Academic Photograph (4 cols) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[280px] border border-white/10 bg-[#040202] p-2 space-y-2 rounded-sm hover:border-[#C43E17]/40 transition-colors">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#070302]">
                    <Image
                      src={getAssetPath("/images/profile/mohamed-riham-portrait.webp")}
                      alt="Mohamed Riham — Cardiff Metropolitan University academic candidate portrait"
                      title="Mohamed Riham — Cardiff Metropolitan University"
                      fill
                      className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-40 pointer-events-none" />
                  </div>
                  <div className="p-2 bg-[#0A0503] text-[10px] font-mono text-white flex items-center justify-between border-t border-white/10">
                    <span>Cardiff Met Candidate</span>
                    <span className="text-[#C43E17] font-semibold">Colombo, LK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            FEATURED SECONDARY QUALIFICATION (PEARSON BTEC HND // 11 DISTINCTIONS)
            ========================================================================= */}
        {hndQualification && (
          <div className="border border-white/10 bg-[#0A0503] relative group rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_40px_rgba(196,62,23,0.18)] transition-all duration-300 overflow-hidden">
            {/* Corner crosshairs */}
            <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#C43E17] select-none">+</span>

            {/* Top Masthead Ribbon */}
            <div className="p-6 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#070302]">
              <div className="flex items-center gap-2.5 font-mono text-xs text-white">
                <Award className="w-4 h-4 text-[#C43E17]" />
                <span className="font-bold uppercase tracking-wider text-white">
                  SECONDARY FEATURED ACADEMIC FOUNDATION
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A0B07] border border-[#C43E17]/30 text-xs font-mono text-[#C43E17]">
                <span className="w-2 h-2 rounded-full bg-[#C43E17]" />
                <span>COMPLETED // 11 DISTINCTIONS (OVERALL MERIT)</span>
              </div>
            </div>

            {/* Split Content Body */}
            <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Academic Metadata & Curriculum (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="font-mono text-xs text-[#A09383] uppercase tracking-wider">
                    Higher National Diploma
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sans mt-1">
                    {hndQualification.degree}
                  </h3>
                </div>

                {/* Structured Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#050201] border border-white/10 font-mono text-xs rounded-sm">
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Awarding Body</span>
                    <span className="text-white font-bold text-sm mt-0.5 block">
                      Pearson, UK
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Study Centre</span>
                    <span className="text-[#C43E17] font-bold text-sm mt-0.5 block">
                      BCAS Campus, Kalmunai
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Verified Result</span>
                    <span className="text-white mt-0.5 block">
                      Overall Merit (11 Distinctions, 4 Merits across 15 Units)
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A09383] block text-[10px] uppercase">Graduation / Timeline</span>
                    <span className="text-[#C43E17] mt-0.5 block">
                      Dec 2023 – Mar 2025
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#D3C29F] font-light leading-relaxed">
                  {hndQualification.description}
                </p>

                {/* Verified Modules */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-[11px] font-mono text-[#A09383] uppercase tracking-wider">
                    Curriculum &amp; Distinction Breakdown:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hndQualification.modules.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1 text-xs font-mono text-white bg-[#120704] border border-white/10 rounded-sm"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Academic Photograph (4 cols) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[280px] border border-white/10 bg-[#040202] p-2 space-y-2 rounded-sm hover:border-[#C43E17]/40 transition-colors">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#070302]">
                    <Image
                      src={getAssetPath("/images/profile/mohamed-riham-campus.webp")}
                      alt="Mohamed Riham on campus balcony during BTEC Higher National Diploma coursework"
                      title="Mohamed Riham — Campus Academic Life"
                      fill
                      className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-40 pointer-events-none" />
                  </div>
                  <div className="p-2 bg-[#0A0503] text-[10px] font-mono text-white flex items-center justify-between border-t border-white/10">
                    <span>Pearson BTEC HND</span>
                    <span className="text-[#C43E17] font-semibold">11 Distinctions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            EXPANDED PRIOR ACADEMIC LEDGER (DIPLOMA & CERTIFICATES)
            ========================================================================= */}
        {priorQualifications.length > 0 && (
          <SmoothExpand id="academic-history-expanded" isExpanded={showMoreHistory}>
            <div className="pt-6 divide-y divide-white/10 border-t border-white/10">
              {priorQualifications.map((edu, idx) => (
                <div
                  key={idx}
                  className="py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
                >
                  {/* Left Column: Timeline & Awarding Body (3 cols) */}
                  <div className="lg:col-span-3 space-y-2 font-mono">
                    <div className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {edu.period}
                    </div>
                    <div className="text-xs text-[#A09383]">
                      {edu.institution}
                    </div>
                    <div className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#C43E17] border border-[#C43E17]/30 bg-[#1A0B07] rounded-sm">
                      {edu.status}
                    </div>
                  </div>

                  {/* Center Column: Degree, Awarding Body, Transcript (6 cols) */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white font-sans">
                        {edu.degree}
                      </h4>
                      <div className="text-sm font-mono text-[#D3C29F] mt-1">
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
                      <div className="text-[11px] font-mono text-[#A09383] uppercase tracking-wider">
                        Verified Modules &amp; Transcripts:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.modules.map((m) => (
                          <span
                            key={m}
                            className="px-2.5 py-1 text-[11px] font-mono text-white bg-[#120704] border border-white/10 rounded-sm"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Verified Photograph / Certificate (3 cols) */}
                  <div className="lg:col-span-3">
                    {edu.degree.startsWith("Diploma") && (
                      <div className="border border-white/10 bg-[#0A0503] p-2 space-y-2 rounded-sm hover:border-[#C43E17]/40 transition-colors">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#040202]">
                          <Image
                            src={getAssetPath("/images/profile/mohamed-riham-diploma.webp")}
                            alt="Mohamed Riham during Pearson Assured Diploma in IT studies"
                            title="Mohamed Riham — Foundation Studies"
                            fill
                            className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 280px"
                          />
                        </div>
                        <div className="p-2 bg-[#070302] text-[10px] font-mono text-white flex justify-between">
                          <span>Foundation Studies</span>
                          <span className="text-[#C43E17] font-semibold">Pearson Assured</span>
                        </div>
                      </div>
                    )}

                    {edu.degree.startsWith("Certificate") && (
                      <div className="p-4 bg-[#0A0503] border border-white/10 space-y-2 font-mono text-xs rounded-sm">
                        <div className="text-[#C43E17] font-semibold">Pearson Assured Verification</div>
                        <div className="text-[11px] text-[#A09383]">BCAS Kalmunai Campus</div>
                        <div className="text-white text-xs">Professional Language Certification</div>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </SmoothExpand>
        )}

        {/* Progressive Disclosure Controls */}
        {priorQualifications.length > 0 && (
          <ExpandControl
            isExpanded={showMoreHistory}
            onToggle={() => setShowMoreHistory(!showMoreHistory)}
            controlsId="academic-history-expanded"
            collapsedIndicator="2 FEATURED QUALIFICATIONS"
            expandedIndicator="COMPLETE ACADEMIC RECORD (4 QUALIFICATIONS)"
            collapsedLabel={`View Additional Academic History (${priorQualifications.length} Prior Qualifications)`}
            expandedLabel="Hide Additional Qualifications"
            className="mt-6"
          />
        )}

      </div>
    </section>
  );
}