import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-transparent">
      <div className="max-w-md w-full p-8 rounded-sm bg-[#0A0503] border border-white/10 text-center space-y-5 hover:border-[#C43E17]/50 transition-colors">
        <div className="inline-flex p-3 rounded-sm bg-[#1A0B07] text-[#C43E17] border border-[#C43E17]/30">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-[#C43E17] font-semibold">
          ERROR 404 // NULL_REFERENCE
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
          Page Not Located
        </h1>
        <p className="text-xs sm:text-sm text-[#D3C29F] leading-relaxed font-light">
          The requested route or project resource does not exist in this engineering registry.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#040202] bg-[#C43E17] hover:bg-[#D94519] px-5 py-2.5 rounded-sm transition-all shadow-[0_0_15px_rgba(196,62,23,0.35)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Index
          </Link>
        </div>
      </div>
    </div>
  );
}