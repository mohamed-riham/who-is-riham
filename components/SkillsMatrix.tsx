import { CheckCircle2, Terminal, Code2, Database, BrainCircuit, Cpu } from "lucide-react";
import { skillCategories } from "@/content/skills";

export default function SkillsMatrix() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#63DCC6]" />;
      case 1:
        return <BrainCircuit className="w-4 h-4 text-[#D9A441]" />;
      case 2:
        return <Terminal className="w-4 h-4 text-[#63DCC6]" />;
      case 3:
        return <Database className="w-4 h-4 text-[#63DCC6]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#D9A441]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#63DCC6] uppercase tracking-wider mb-2.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Empirical Capability</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F2F0E9] tracking-tight">
            Technical Skills &{" "}
            <span className="font-serif italic font-normal text-[#63DCC6]">
              Evidence
            </span>
          </h2>
          <p className="text-sm text-[#A4ADBB] mt-3 leading-relaxed">
            Skills backed by working production code, academic coursework, and empirical implementations. No arbitrary percentage bars or subjective meters.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-7 rounded-3xl bg-[#0D1422] border border-white/[0.08] hover:border-[#63DCC6]/30 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="p-2.5 rounded-xl bg-[#131E30] border border-white/5">
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-[#F2F0E9] group-hover:text-[#63DCC6] transition-colors">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-[#A4ADBB] mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list */}
                <ul className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#F2F0E9]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#63DCC6]" />
                        {skill.name}
                      </div>
                      {skill.provenIn && (
                        <div className="text-[11px] font-mono text-[#69778A] pl-3.5">
                          Evidence: <span className="text-[#A4ADBB]">{skill.provenIn}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
