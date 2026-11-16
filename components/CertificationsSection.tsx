import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { certifications } from "@/content/certifications";

export default function CertificationsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Certifications & Honors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0C111A] border border-white/[0.08] hover:border-[#00F2FE]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#5C6B7E] mb-2">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {cert.title}
                </h3>

                <p className="text-xs text-[#8B9BB0] mt-2 leading-relaxed font-normal">
                  {cert.description}
                </p>

                {cert.credentialId && (
                  <div className="mt-3 text-[11px] font-mono text-[#5C6B7E] break-all">
                    Credential ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 mt-3 border-t border-white/[0.05]">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#00F2FE] hover:underline"
                  >
                    Verify Credential
                    <ExternalLink className="w-3 h-3" />
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
