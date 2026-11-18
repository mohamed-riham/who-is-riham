"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { experiences, ExperienceItem } from "@/content/experience";
import { getAssetPath } from "@/lib/utils";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

export default function ExperienceSection() {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const INITIAL_COUNT = 2;
  const initialExperiences = experiences.slice(0, INITIAL_COUNT);
  const extraExperiences = experiences.slice(INITIAL_COUNT);

  const renderExperienceRow = (exp: ExperienceItem, idx: number) => (
    <div
      key={idx}
      className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
    >
      {/* Left Column: Date & Meta (3 cols) */}
      <div className="lg:col-span-3 space-y-2 font-mono">
        <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#C43E17] transition-colors font-sans">
          {exp.period}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#A09383]">
          <MapPin className="w-3.5 h-3.5 text-[#C43E17]" />
          <span>{exp.location}</span>
        </div>
        <div className="inline-block text-[11px] font-semibold text-[#C43E17] uppercase tracking-wider bg-[#1A0B07] border border-[#C43E17]/30 px-2 py-0.5 rounded-sm">
          {exp.type}
        </div>
      </div>

      {/* Center Column: Role, Details, Responsibilities (5 cols) */}
      <div className="lg:col-span-5 space-y-5">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
            {exp.role}
          </h3>
          <div className="text-sm font-mono text-[#D3C29F] mt-1">
            {exp.organization}
          </div>
        </div>

        <ul className="space-y-3">
          {exp.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#D3C29F] font-light leading-relaxed">
              <span className="font-mono text-[#C43E17] text-xs pt-0.5">―</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech / Capability Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {exp.tech.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-[10px] font-mono text-[#D3C29F] bg-[#120704] border border-white/10 rounded-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column: Genuine Photographic Verification (4 cols) */}
      <div className="lg:col-span-4">
        {exp.organization.includes("Axis Academy") && (
          <div className="border border-white/10 bg-[#0A0503] p-5 space-y-3 font-mono rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_24px_rgba(196,62,23,0.14)] transition-all">
            <div className="flex items-center justify-between text-xs text-white border-b border-white/10 pb-2">
              <span className="text-[#C43E17] font-semibold">Production Deployment</span>
              <span className="text-[#A09383]">Jan – Jul 2025</span>
            </div>
            <div className="space-y-1.5 text-xs text-[#D3C29F]">
              <div className="text-white font-bold">Official Academy Web Platform</div>
              <p className="text-[11px] text-[#A09383] leading-relaxed">
                Sole full-stack development, course catalog architecture, student inquiry routing, and custom domain DNS hosting.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10 text-[10px] text-white">
              <span className="px-2 py-0.5 bg-[#120704] border border-white/10 rounded-sm">Production Live</span>
              <span className="px-2 py-0.5 bg-[#120704] border border-white/10 rounded-sm">cPanel &amp; DNS</span>
              <span className="px-2 py-0.5 bg-[#120704] border border-white/10 rounded-sm">Full-Stack PHP</span>
            </div>
          </div>
        )}

        {exp.organization.includes("IT Society") && (
          <div className="border border-white/10 bg-[#0A0503] p-2 space-y-2 rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_24px_rgba(196,62,23,0.14)] transition-all">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#040202]">
              <Image
                src={getAssetPath("/images/experience/bcas-bits-honour.webp")}
                alt="Mohamed Riham receiving official BITS commendation certificate at BCAS Kalmunai Campus Auditorium"
                title="Mohamed Riham — BITS Leadership Honour"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
            <div className="p-2 bg-[#070302] text-[10px] font-mono text-white flex justify-between">
              <span>Auditorium Tribute Ceremony</span>
              <span className="text-[#C43E17] font-semibold">July 30, 2025</span>
            </div>
          </div>
        )}

        {exp.organization.includes("PC Clinic") && (
          <div className="border border-white/10 bg-[#0A0503] p-2 space-y-2 rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_24px_rgba(196,62,23,0.14)] transition-all">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040202]">
              <Image
                src={getAssetPath("/images/experience/bcas-pc-clinic-team.webp")}
                alt="Mohamed Riham as PC Clinic Official with technical diagnostics engineering team"
                title="Mohamed Riham — PC Clinic Official"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
            {/* Dual Sub-Photo Strip: Hardware Repairs & Team Diagnostics */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040202] border border-white/10">
                <Image
                  src={getAssetPath("/images/experience/pcclinic-hardware-repairs.webp")}
                  alt="Mohamed Riham hands-on PC hardware component diagnostics and motherboard repair bench"
                  title="Mohamed Riham — Hardware Diagnostics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="180px"
                />
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040202] border border-white/10">
                <Image
                  src={getAssetPath("/images/experience/pcclinic-team-monitor.webp")}
                  alt="Mohamed Riham and team analyzing operating system boot processes and diagnostics"
                  title="Mohamed Riham — Systems Diagnostics Bench"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="180px"
                />
              </div>
            </div>
            <div className="p-2 bg-[#070302] text-[10px] font-mono text-white flex justify-between">
              <span>PC Clinic Diagnostics Lab</span>
              <span className="text-[#C43E17] font-semibold">Aug 8, 2024</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );

  return (
    <section id="experience" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
              05 // EXPERIENCE &amp; SERVICE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Experience &amp; institutional service.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A09383] leading-relaxed font-light">
            Verified campus leadership, student governance, and hands-on hardware engineering field diagnostics.
          </p>
        </div>

        {/* Chronological Ledger (Hairline Divisions) */}
        <div id="experience-ledger" className="space-y-2">
          <div className="divide-y divide-white/10">
            {initialExperiences.map((exp, idx) => renderExperienceRow(exp, idx))}
          </div>

          {extraExperiences.length > 0 && (
            <SmoothExpand isExpanded={showAllExperience}>
              <div className="divide-y divide-white/10 border-t border-white/10 pt-2">
                {extraExperiences.map((exp, idx) =>
                  renderExperienceRow(exp, INITIAL_COUNT + idx)
                )}
              </div>
            </SmoothExpand>
          )}
        </div>

        {/* Progressive Disclosure Controls */}
        {experiences.length > INITIAL_COUNT && (
          <ExpandControl
            isExpanded={showAllExperience}
            onToggle={() => setShowAllExperience(!showAllExperience)}
            controlsId="experience-ledger"
            collapsedIndicator={`SHOWING ${initialExperiences.length} OF ${experiences.length} ROLES`}
            expandedIndicator={`ALL ${experiences.length} ROLES DISPLAYED`}
            collapsedLabel={`View More Experience (${experiences.length - INITIAL_COUNT} Remaining Role)`}
            expandedLabel="Show Fewer Roles"
            className="mt-6"
          />
        )}

      </div>
    </section>
  );
}