import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { certifications } from "@/content/certifications";

export default function CertificationsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F2F0E9] tracking-tight">
            Certifications &{" "}
            <span className="font-serif italic font-normal text-[#63DCC6]">
              Honors
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/40 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#69778A] mb-2.5">
                  <span className="text-[#A4ADBB]">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#F2F0E9] tracking-tight">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A4ADBB] mt-2.5 leading-relaxed font-normal">
                  {cert.description}
                </p>

                {cert.credentialId && (
                  <div className="mt-3.5 text-xs font-mono text-[#69778A] break-all">
                    ID: <span className="text-[#A4ADBB]">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-white/[0.06]">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#63DCC6] hover:underline"
                  >
                    Verify Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
