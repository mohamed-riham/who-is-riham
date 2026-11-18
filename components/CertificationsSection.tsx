"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { certifications, CertificationItem } from "@/content/certifications";
import { getAssetPath } from "@/lib/utils";
import ExpandControl from "@/components/ExpandControl";
import SmoothExpand from "@/components/SmoothExpand";

export default function CertificationsSection() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  const INITIAL_COUNT = 3;
  const initialCerts = certifications.slice(0, INITIAL_COUNT);
  const extraCerts = certifications.slice(INITIAL_COUNT);

  const renderCertRow = (cert: CertificationItem, idx: number) => (
    <div
      key={idx}
      className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[#0A0503] rounded-sm transition-all px-4 sm:px-6 border border-transparent hover:border-[#C43E17]/40 hover:shadow-[0_0_24px_rgba(196,62,23,0.12)]"
    >
      <div className="flex items-start gap-5 md:w-2/3">
        <span className="font-mono text-xs text-[#A09383] group-hover:text-[#C43E17] transition-colors pt-1">
          /{String(idx + 1).padStart(2, "0")}
        </span>

        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C43E17]">
            <span className="font-semibold">{cert.issuer}</span>
            <span className="text-white/20">·</span>
            <span className="text-[#A09383]">{cert.date}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white font-sans group-hover:text-white transition-colors">
            {cert.title}
          </h3>

          <p className="text-xs text-[#D3C29F] font-light leading-relaxed max-w-xl">
            {cert.description}
          </p>

          {cert.title.includes("PC CLINIC") && (
            <div className="mt-3 relative aspect-[16/10] max-w-md border border-white/10 bg-[#040202] rounded-sm overflow-hidden group/img">
              <Image
                src={getAssetPath("/images/certifications/bcas-pc-clinic-award-stage.webp")}
                alt="Mohamed Riham receiving Certificate of Appreciation for PC Clinic on stage at BCAS Kalmunai Auditorium"
                title="Mohamed Riham — Stage Award Handover"
                fill
                className="object-cover object-[center_35%] group/img:scale-102 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 bg-[#040202]/90 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-white flex justify-between">
                <span>Auditorium Stage Award Handover</span>
                <span className="text-[#C43E17]">Aug 12, 2024</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 md:justify-end font-mono text-xs pl-10 md:pl-0">
        {cert.credentialId && (
          <span className="text-[11px] text-[#A09383] hidden lg:inline">
            ID: {cert.credentialId}
          </span>
        )}

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0E0604] hover:bg-[#C43E17] hover:text-[#040202] text-white border border-white/10 hover:border-[#C43E17] hover:shadow-[0_0_12px_rgba(196,62,23,0.4)] text-xs rounded-sm transition-all"
          >
            <span>Verify</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-24 lg:py-32 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C43E17]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C43E17] animate-pulse shadow-[0_0_8px_#C43E17]" />
              10 // CREDENTIAL REGISTRY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
              Certifications <span className="text-[#C43E17]">&amp; verified honors.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A09383] leading-relaxed font-light">
            Verified British computing diplomas, technical awards, and academic commendation records.
          </p>
        </div>

        {/* Credential Table */}
        <div id="certifications-registry-ledger" className="space-y-2">
          <div className="divide-y divide-white/5">
            {initialCerts.map((cert, idx) => renderCertRow(cert, idx))}
          </div>

          {extraCerts.length > 0 && (
            <SmoothExpand isExpanded={showAllCerts}>
              <div className="divide-y divide-white/5 border-t border-white/10 pt-2">
                {extraCerts.map((cert, idx) =>
                  renderCertRow(cert, INITIAL_COUNT + idx)
                )}
              </div>
            </SmoothExpand>
          )}
        </div>

        {/* Progressive Disclosure Controls */}
        {certifications.length > INITIAL_COUNT && (
          <ExpandControl
            isExpanded={showAllCerts}
            onToggle={() => setShowAllCerts(!showAllCerts)}
            controlsId="certifications-registry-ledger"
            collapsedIndicator={`SHOWING ${initialCerts.length} OF ${certifications.length} CREDENTIALS`}
            expandedIndicator={`ALL ${certifications.length} CREDENTIALS DISPLAYED`}
            collapsedLabel={`View All Credentials (${certifications.length - INITIAL_COUNT} Remaining Records)`}
            expandedLabel="Show Fewer Credentials"
            className="mt-6"
          />
        )}

      </div>
    </section>
  );
}