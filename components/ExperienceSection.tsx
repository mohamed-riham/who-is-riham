"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Wrench, Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { experiences } from "@/content/experience";
import { getAssetPath } from "@/lib/utils";

export default function ExperienceSection() {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const INITIAL_COUNT = 2;
  const visibleExperiences = showAllExperience ? experiences : experiences.slice(0, INITIAL_COUNT);

  return (
    <section id="experience" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              05 // Chronological Ledger
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Experience & institutional service.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            Verified campus leadership, student governance, and hands-on hardware engineering field diagnostics.
          </p>
        </div>

        {/* Chronological Ledger (Hairline Divisions) */}
        <div id="experience-ledger" className="divide-y divide-[#6B503C]/25">
          {visibleExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Left Column: Large Date & Meta (3 cols) */}
              <div className="lg:col-span-3 space-y-2 font-mono">
                <div className="text-2xl sm:text-3xl font-bold text-[#F9F9F6] group-hover:text-[#DEA355] transition-colors font-sans">
                  {exp.period}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#8E7F70]">
                  <MapPin className="w-3.5 h-3.5 text-[#C43E17]" />
                  <span>{exp.location}</span>
                </div>
                <div className="text-[11px] text-[#DEA355] uppercase tracking-wider">
                  {exp.type}
                </div>
              </div>

              {/* Center Column: Role, Details, Responsibilities (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans">
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
                      className="px-2 py-0.5 text-[10px] font-mono text-[#8E7F70] bg-[#140A06] border border-[#6B503C]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Genuine Photographic Verification (4 cols) */}
              <div className="lg:col-span-4">
                {exp.organization.includes("Axis Academy") && (
                  <div className="border border-[#6B503C]/35 bg-[#0D0704] p-4 space-y-3 font-mono">
                    <div className="flex items-center justify-between text-xs text-[#DEA355] border-b border-[#6B503C]/20 pb-2">
                      <span>Production Deployment</span>
                      <span className="text-[#8E7F70]">Jan – Jul 2025</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-[#D3C29F]">
                      <div className="text-[#F9F9F6] font-bold">Official Academy Web Platform</div>
                      <p className="text-[11px] text-[#8E7F70] leading-relaxed">
                        Sole full-stack development, course catalog architecture, student inquiry routing, and custom domain DNS hosting.
                      </p>
                    </div>
                    <div className="pt-2 flex flex-wrap gap-1.5 border-t border-[#6B503C]/20 text-[10px] text-[#DEA355]">
                      <span className="px-2 py-0.5 bg-[#120704] border border-[#6B503C]/25">Production Live</span>
                      <span className="px-2 py-0.5 bg-[#120704] border border-[#6B503C]/25">cPanel & DNS</span>
                      <span className="px-2 py-0.5 bg-[#120704] border border-[#6B503C]/25">Full-Stack PHP</span>
                    </div>
                  </div>
                )}

                {exp.organization.includes("IT Society") && (
                  <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#040202]">
                      <Image
                        src={getAssetPath("/images/experience/bcas-bits-honour.webp")}
                        alt="Mohamed Riham receiving official BITS commendation certificate at BCAS Kalmunai Campus Auditorium"
                        title="Mohamed Riham — BITS Leadership Honour"
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 360px"
                      />
                    </div>
                    <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#D3C29F] flex justify-between">
                      <span>Auditorium Tribute Ceremony</span>
                      <span className="text-[#DEA355]">July 30, 2025</span>
                    </div>
                  </div>
                )}

                {exp.organization.includes("PC Clinic") && (
                  <div className="border border-[#6B503C]/35 bg-[#0D0704] p-2 space-y-2">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040202]">
                      <Image
                        src={getAssetPath("/images/experience/bcas-pc-clinic-team.webp")}
                        alt="Mohamed Riham as PC Clinic Official with technical diagnostics engineering team"
                        title="Mohamed Riham — PC Clinic Official"
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 360px"
                      />
                    </div>
                    {/* Dual Sub-Photo Strip: Hardware Repairs & Team Diagnostics */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040202] border border-[#6B503C]/20">
                        <Image
                          src={getAssetPath("/images/experience/pcclinic-hardware-repairs.webp")}
                          alt="Mohamed Riham hands-on PC hardware component diagnostics and motherboard repair bench"
                          title="Mohamed Riham — Hardware Diagnostics"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="180px"
                        />
                      </div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040202] border border-[#6B503C]/20">
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
                    <div className="p-2 bg-[#120704] text-[10px] font-mono text-[#D3C29F] flex justify-between">
                      <span>PC Clinic Diagnostics Lab</span>
                      <span className="text-[#C43E17]">Aug 8, 2024</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Smart View More / Show Less Controls (Noir Editorial 5.2) */}
        {experiences.length > INITIAL_COUNT && (
          <div className="pt-10 flex justify-center">
            <button
              onClick={() => setShowAllExperience(!showAllExperience)}
              aria-expanded={showAllExperience}
              aria-controls="experience-ledger"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#120704] hover:bg-[#1C0E07] border border-[#6B503C]/35 hover:border-[#DEA355] text-xs font-mono font-bold text-[#F9F9F6] transition-all group shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEA355] group-hover:scale-125 transition-transform" />
              <span>
                {showAllExperience
                  ? "Show Fewer Roles"
                  : `View More Experience (${experiences.length} Total Roles)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#DEA355] transition-transform duration-300 ${
                  showAllExperience ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
