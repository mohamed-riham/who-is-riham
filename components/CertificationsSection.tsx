"use client";

import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "@/content/certifications";
import { getAssetPath } from "@/lib/utils";

export default function CertificationsSection() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#6B503C]/20 bg-[#040202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#6B503C]/20">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              10 // Credential Registry
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9F9F6] font-sans">
              Certifications & verified honors.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#D3C29F] leading-relaxed font-light">
            Verified British computing diplomas, technical awards, and academic commendation records.
          </p>
        </div>

        {/* Document-Inspired Credential Table */}
        <div className="divide-y divide-[#6B503C]/20">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#0D0704] transition-colors px-4 -mx-4"
            >
              <div className="flex items-start gap-6 md:w-2/3">
                <span className="font-mono text-xs text-[#8E7F70] group-hover:text-[#DEA355] transition-colors pt-1">
                  /{String(idx + 1).padStart(2, "0")}
                </span>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#DEA355]">
                    <span>{cert.issuer}</span>
                    <span className="text-[#6B503C]">·</span>
                    <span className="text-[#8E7F70]">{cert.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#F9F9F6] font-sans group-hover:text-[#DEA355] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#D3C29F] font-light leading-relaxed max-w-xl">
                    {cert.description}
                  </p>

                  {cert.title.includes("PC CLINIC") && (
                    <div className="mt-3 relative aspect-[16/10] max-w-md border border-[#6B503C]/35 bg-[#040202] overflow-hidden group/img">
                      <Image
                        src={getAssetPath("/images/certifications/bcas-pc-clinic-award-stage.webp")}
                        alt="Mohamed Riham receiving Certificate of Appreciation for PC Clinic on stage at BCAS Kalmunai Auditorium"
                        fill
                        className="object-cover object-[center_35%] group-hover/img:scale-102 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 bg-[#040202]/90 border border-[#6B503C]/30 px-2 py-0.5 text-[10px] font-mono text-[#DEA355] flex justify-between">
                        <span>Auditorium Stage Award Handover</span>
                        <span>Aug 12, 2024</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 md:justify-end font-mono text-xs pl-12 md:pl-0">
                {cert.credentialId && (
                  <span className="text-[11px] text-[#8E7F70] hidden lg:inline">
                    ID: {cert.credentialId}
                  </span>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#160C07] hover:bg-[#C43E17] hover:text-[#040202] text-[#DEA355] border border-[#6B503C]/30 text-xs transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
