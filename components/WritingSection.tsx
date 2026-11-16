import { BookOpen, ExternalLink, Calendar, Clock } from "lucide-react";
import { writingArticles } from "@/content/writing";

export default function WritingSection() {
  return (
    <section id="writing" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Sharing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research & Technical Writing
          </h2>
          <p className="text-sm text-[#8B9BB0] mt-2 leading-relaxed">
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
              className="p-6 rounded-2xl bg-[#0C111A] border border-white/[0.08] hover:border-[#00F2FE]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#5C6B7E] mb-2.5">
                  <span className="text-[#00F2FE]">{article.platform}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00F2FE] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8B9BB0] mt-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.05]">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] text-[#8B9BB0] border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00F2FE] group-hover:translate-x-1 transition-transform">
                  Read Article
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
