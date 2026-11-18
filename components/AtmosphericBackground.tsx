"use client";

export default function AtmosphericBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* Deep Obsidian Foundation (Strict AI-Robotics Dark Palette) */}
      <div className="absolute inset-0 bg-[#040202]" />

      {/* Subtle Technical Architectural Hairline Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Primary Luminous Burnt Orange Horizon Glow — Upper Right */}
      <div
        className="absolute -top-[200px] -right-[150px] w-[750px] sm:w-[1000px] h-[600px] sm:h-[800px] rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(196, 62, 23, 0.40) 0%, rgba(140, 42, 12, 0.22) 40%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* Secondary Ambient Ember Glow — Center Left (Subtle warmth behind Hero / Principles) */}
      <div
        className="absolute top-[28%] -left-[200px] w-[600px] sm:w-[850px] h-[500px] sm:h-[700px] rounded-full blur-[160px] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(196, 62, 23, 0.32) 0%, rgba(92, 39, 18, 0.15) 45%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* Lower Horizon Warmth — Lower Right / Contact Zone */}
      <div
        className="absolute -bottom-[200px] right-[10%] w-[650px] sm:w-[900px] h-[550px] sm:h-[750px] rounded-full blur-[160px] opacity-35 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(196, 62, 23, 0.35) 0%, rgba(92, 39, 18, 0.16) 45%, rgba(4, 2, 2, 0) 75%)",
        }}
      />

      {/* Refined Vignette Edge to Focus Content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,2,2,0.55)_100%)] pointer-events-none" />
    </div>
  );
}