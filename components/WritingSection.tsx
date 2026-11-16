import { BookOpen, ExternalLink, Calendar, Clock } from "lucide-react";
import { writingArticles } from "@/content/writing";

export default function WritingSection() {
  return (
    <section id="writing" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-2.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge Sharing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F2F0E9] tracking-tight">
            Research &{" "}
            <span className="font-serif italic font-normal text-[#63DCC6]">
              Technical Writing
            </span>
          </h2>
          <p className="text-sm text-[#A4ADBB] mt-3 leading-relaxed">
            Detailed engineering breakdowns, computer vision case studies, and empirical machine learning analyses published on DEV Community and technical platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writingArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 rounded-3xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#69778A] mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#183F43] text-[#63DCC6] border border-[#63DCC6]/20 font-medium">
                    {article.platform}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F2F0E9] group-hover:text-[#63DCC6] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-[#A4ADBB] mt-3.5 leading-relaxed font-normal">
                  {article.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-lg bg-white/[0.03] text-[#A4ADBB] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#63DCC6] group-hover:translate-x-1 transition-transform">
                  Read Article
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
