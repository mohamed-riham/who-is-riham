import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#0C111A] border border-white/10 text-center space-y-4">
        <div className="inline-flex p-3 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="text-xs font-mono text-[#00F2FE]">ERROR 404 // NULL_REFERENCE</div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Page Not Located
        </h1>
        <p className="text-xs text-[#8B9BB0] leading-relaxed">
          The requested route or project resource does not exist in this registry.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#070A0F] bg-[#00F2FE] hover:bg-[#00D2FF] px-4 py-2.5 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Home Registry
          </Link>
        </div>
      </div>
    </div>
  );
}
