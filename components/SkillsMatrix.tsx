"use client";

import { Code2, BrainCircuit, Terminal, Database, Cpu, Layers } from "lucide-react";
import { skillCategories } from "@/content/skills";

export default function SkillsMatrix() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#DEA355]" />;
      case 1:
        return <BrainCircuit className="w-4 h-4 text-[#C43E17]" />;
      case 2:
        return <Terminal className="w-4 h-4 text-[#DEA355]" />;
      case 3:
        return <Database className="w-4 h-4 text-[#678292]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#DEA355]" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-[#040202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              07 // Empirical Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Technical capabilities & project citations.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            Every capability cited below is substantiated by an open repository, benchmarked evaluation, or academic distinction. No arbitrary meters.
          </p>
        </div>

        {/* Architectural Capability Ledger */}
        <div className="divide-y divide-[#6B503C]/25">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Left Column: Category Name, Icon, Description (4 cols) */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#140A06] border border-[#6B503C]/30 text-[#DEA355]">
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-xl font-bold text-[#F9F9F6] font-sans group-hover:text-[#DEA355] transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-[#D3C29F] font-light leading-relaxed max-w-sm">
                  {category.description}
                </p>
              </div>

              {/* Right Column: Skills with Empirical Project Evidence (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 bg-[#0A0503] border border-[#6B503C]/20 hover:border-[#6B503C]/40 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-[#F9F9F6]">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-[10px] text-[#8E7F70]">Verified</span>
                    </div>
                    {skill.provenIn && (
                      <p className="text-[11px] font-mono text-[#D3C29F]/80 leading-normal">
                        <span className="text-[#C43E17] mr-1">↳</span>
                        {skill.provenIn}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
