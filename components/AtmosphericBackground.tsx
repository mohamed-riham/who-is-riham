"use client";

export default function AtmosphericBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* Base Obsidian Foundation */}
      <div className="absolute inset-0 bg-[#040202]" />

      {/* =========================================================================
          UPPER AMBIENT LIGHTING
          ========================================================================= */}
      {/* Upper Green Ambient Glow: Muted Emerald (#426B4A / #527A51) offset toward upper-left */}
      <div
        className="absolute -top-[120px] left-[5%] w-[680px] sm:w-[920px] h-[580px] sm:h-[720px] rounded-full blur-[140px] opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(82, 122, 81, 0.38) 0%, rgba(66, 107, 74, 0.24) 45%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* Upper-Right Warm Burnt Orange / Dark Brown Glow (Matches Reference Image) */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[620px] sm:w-[840px] h-[540px] sm:h-[680px] rounded-full blur-[130px] opacity-45 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(196, 62, 23, 0.32) 0%, rgba(92, 39, 18, 0.28) 45%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* =========================================================================
          MID-PAGE AMBIENT LIGHTING
          ========================================================================= */}
      {/* Mid-Left Warm Glow (From Reference Image Pattern) */}
      <div
        className="absolute top-[38%] -left-[140px] w-[520px] sm:w-[700px] h-[520px] sm:h-[700px] rounded-full blur-[140px] opacity-35 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at center, rgba(92, 39, 18, 0.30) 0%, rgba(65, 31, 22, 0.20) 50%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* Mid-Right Subtle Emerald Ambient Accent */}
      <div
        className="absolute top-[48%] -right-[120px] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full blur-[140px] opacity-25 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at center, rgba(66, 107, 74, 0.26) 0%, rgba(4, 2, 2, 0) 70%)",
        }}
      />

      {/* =========================================================================
          LOWER AMBIENT LIGHTING
          ========================================================================= */}
      {/* Lower Green Ambient Glow: Muted Emerald (#426B4A) offset toward lower-right */}
      <div
        className="absolute -bottom-[100px] right-[8%] w-[640px] sm:w-[860px] h-[540px] sm:h-[680px] rounded-full blur-[150px] opacity-35 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(66, 107, 74, 0.32) 0%, rgba(82, 122, 81, 0.18) 50%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* Lower-Left Warm Grounding Glow (Dark Brown #5C2712) */}
      <div
        className="absolute -bottom-[120px] left-[2%] w-[580px] sm:w-[780px] h-[500px] sm:h-[620px] rounded-full blur-[140px] opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(92, 39, 18, 0.34) 0%, rgba(196, 62, 23, 0.16) 45%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* Subtle Editorial Technical Crosshatch Grain */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #D3C29F 1px, transparent 1px), linear-gradient(to bottom, #D3C29F 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
