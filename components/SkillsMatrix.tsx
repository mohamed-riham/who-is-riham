"use client";

import { useState } from "react";
import { Code2, BrainCircuit, Database, Cpu, CheckCircle2, ShieldCheck } from "lucide-react";
import { skillCategories } from "@/content/skills";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

export default function SkillsMatrix() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Group into primary 4 pillars for AI Robotics showcase:
  const mlCategory = skillCategories.find((c) => c.title.includes("Machine Learning")) || skillCategories[1];
  const dsCategory = skillCategories.find((c) => c.title.includes("Data Science")) || skillCategories[2];
  const seCategory = skillCategories.find((c) => c.title.includes("Software Engineering")) || skillCategories[3];
  const iotCategory = skillCategories.find((c) => c.title.includes("Embedded")) || skillCategories[4];

  const primaryCards = [
    {
      id: "ml-ai",
      title: "Machine Learning & AI",
      tag: "CORE SPECIALIZATION",
      icon: <BrainCircuit className="w-5 h-5 text-[#C43E17]" />,
      description: "Applied artificial intelligence, neural architectures, computer vision, and rigorous empirical validation.",
      skills: mlCategory.skills.slice(0, 6),
    },
    {
      id: "ds-analytics",
      title: "Data Science & Analytics",
      tag: "EMPIRICAL RESEARCH",
      icon: <Database className="w-5 h-5 text-[#C43E17]" />,
      description: "Statistical modeling, big data class imbalance mitigation, PCA, and business intelligence dashboards.",
      skills: dsCategory.skills.slice(0, 6),
    },
    {
      id: "automation-iot",
      title: "Intelligent Automation & IoT",
      tag: "HARDWARE & SYSTEMS",
      icon: <Cpu className="w-5 h-5 text-[#C43E17]" />,
      description: "Local-first desktop agents, neural vocalization pipelines, ESP32 microcontrollers, and physical sensor telemetry.",
      skills: iotCategory.skills.slice(0, 6),
    },
    {
      id: "software-eng",
      title: "Engineering & Architecture",
      tag: "SYSTEMS DISCIPLINES",
      icon: <Code2 className="w-5 h-5 text-[#C43E17]" />,
      description: "SOLID object-oriented design, automated unit testing, stream muxing, and production-tested codebases.",
      skills: seCategory.skills.slice(0, 6),
    },
  ];

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="capabilities" className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
              07 // CAPABILITIES &amp; EVIDENCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Technical capabilities <span className="text-[#C43E17]">&amp; project citations.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A09383] leading-relaxed font-light">
            Every capability cited below is substantiated by an open repository, benchmarked evaluation, or academic distinction. No arbitrary meters.
          </p>
        </div>

        {/* 4 Primary Modular Cards (AI Robotics Architecture Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {primaryCards.map((card, idx) => (
            <div
              key={card.id}
              className="p-8 bg-[#0A0503] border border-white/10 rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_35px_rgba(196,62,23,0.18)] transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-[#120704] border border-white/10 group-hover:border-[#C43E17]/50 group-hover:shadow-[0_0_15px_rgba(196,62,23,0.3)] transition-all rounded-sm">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#C43E17] uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>
                  <span className="text-[#A09383] font-mono text-[11px]">0{idx + 1}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#A09383] font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Sub-skills list with proof links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                  {card.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-[#070302] border border-white/10 rounded-sm space-y-1 group-hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-white">
                        <span className="font-semibold truncate">{skill.name}</span>
                        <CheckCircle2 className="w-3 h-3 text-[#C43E17] shrink-0" />
                      </div>
                      {skill.provenIn && (
                        <p className="text-[10px] font-mono text-[#A09383] truncate" title={skill.provenIn}>
                          {skill.provenIn}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A09383]">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C43E17]" />
                  Empirically Verified
                </span>
                <span className="text-[#C43E17] font-semibold">{card.skills.length} Cited Systems</span>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Skills Inventory (Smooth Expand) */}
        <div id="skills-inventory-ledger" className="space-y-6">
          <SmoothExpand isExpanded={showAllSkills}>
            <div className="pt-8 border-t border-white/10 space-y-10">
              <div className="space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
                  FULL INVENTORY // ALL 5 TECHNICAL CATEGORIES
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">
                  Comprehensive Skills &amp; Repository Mappings ({totalSkills} Skills)
                </h3>
              </div>

              <div className="divide-y divide-white/10">
                {skillCategories.map((category) => (
                  <div
                    key={category.title}
                    className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
                  >
                    <div className="lg:col-span-4 space-y-2">
                      <h4 className="text-lg font-bold text-white font-sans group-hover:text-[#C43E17] transition-colors">
                        {category.title}
                      </h4>
                      <p className="text-xs text-[#A09383] font-light leading-relaxed max-w-sm">
                        {category.description}
                      </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 bg-[#0A0503] border border-white/10 rounded-sm space-y-1"
                        >
                          <div className="flex items-center justify-between font-mono text-xs text-white">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-[10px] text-[#C43E17] font-mono">VERIFIED</span>
                          </div>
                          {skill.provenIn && (
                            <p className="text-[10px] font-mono text-[#A09383]">
                              ↳ {skill.provenIn}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SmoothExpand>

          {/* Smooth Progressive Disclosure Control */}
          <ExpandControl
            isExpanded={showAllSkills}
            onToggle={() => setShowAllSkills(!showAllSkills)}
            controlsId="skills-inventory-ledger"
            collapsedIndicator="4 PRIMARY MODULAR DISCIPLINES DISPLAYED"
            expandedIndicator={`COMPLETE SKILLS INVENTORY UNLOCKED (${skillCategories.length} CATEGORIES, ${totalSkills} SKILLS)`}
            collapsedLabel={`Explore Complete Skills Inventory (${skillCategories.length} Categories, ${totalSkills} Skills)`}
            expandedLabel="Show 4 Primary Disciplines Only"
            className="mt-6"
          />
        </div>

      </div>
    </section>
  );
}