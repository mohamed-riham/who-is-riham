"use client";

import { ShieldCheck, Cpu, HeartHandshake, ArrowUpRight } from "lucide-react";

const principles = [
  {
    num: "01",
    tag: "VERIFIABLE RIGOR",
    title: "Empirical First",
    description:
      "Every important claim should be supported by measurable evidence and proper evaluation. Benchmarked metrics over theoretical speculation.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    tag: "APPLIED EXECUTION",
    title: "Build to Prove",
    description:
      "I prioritize functioning, testable systems instead of relying on theoretical descriptions alone. Working prototypes that run on real hardware.",
    icon: Cpu,
  },
  {
    num: "03",
    tag: "ACCESSIBILITY & PURPOSE",
    title: "Human-Centred Intelligence",
    description:
      "I aim to build practical intelligent systems that solve meaningful problems. Assistive AI that directly impacts human autonomy and daily life.",
    icon: HeartHandshake,
  },
];

export default function PrinciplesSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#140A06] border border-[#C43E17]/30 text-xs font-mono tracking-widest text-[#C43E17] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17]" />
              <span>01 // Core Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F9F9F6] font-sans">
              Engineering <span className="text-[#C43E17]">Principles.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F]/80 leading-relaxed font-light">
            Core foundations guiding my applied machine learning models, custom computer vision pipelines, and system architectures.
          </p>
        </div>

        {/* 3 Distinctive Modular Cards (AI Robotics Reference Pattern) */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.num}
                className="group relative bg-[#0A0503] border border-white/10 hover:border-[#C43E17]/70 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(196,62,23,0.24)] overflow-hidden"
              >
                {/* Subtle top corner accent */}
                <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C43E17]/40 group-hover:border-[#C43E17] group-hover:drop-shadow-[0_0_8px_rgba(196,62,23,0.6)] transition-all" />

                <div className="space-y-6">
                  {/* Top Bar: Icon Container & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-[#140A06] border border-[#C43E17]/40 flex items-center justify-center text-[#C43E17] group-hover:bg-[#C43E17] group-hover:text-[#040202] group-hover:shadow-[0_0_20px_rgba(196,62,23,0.5)] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#8E7F70] group-hover:text-[#C43E17] transition-colors tracking-widest font-semibold">
                      /{p.num}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-2.5">
                    <div className="font-mono text-[10px] tracking-wider text-[#C43E17] uppercase font-semibold">
                      {p.tag}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F9F9F6] font-sans group-hover:text-[#C43E17] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D3C29F]/80 font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Hairline & Action Indicator */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8E7F70] group-hover:text-[#F9F9F6] transition-colors">
                  <span className="uppercase tracking-wider">Methodology</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C43E17] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
