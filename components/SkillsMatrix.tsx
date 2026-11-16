import { CheckCircle2, Terminal, Code2, Database, BrainCircuit, Cpu } from "lucide-react";
import { skillCategories } from "@/content/skills";

export default function SkillsMatrix() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-[#00F2FE]" />;
      case 1:
        return <BrainCircuit className="w-4 h-4 text-[#F5A623]" />;
      case 2:
        return <Terminal className="w-4 h-4 text-[#00F2FE]" />;
      case 3:
        return <Database className="w-4 h-4 text-[#00F2FE]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#F5A623]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Empirical Capability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Evidence
          </h2>
          <p className="text-sm text-[#8B9BB0] mt-2 leading-relaxed">
            Skills backed by working production code, academic coursework, and empirical implementations. No arbitrary percentage bars or subjective meters.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#0C111A] border border-white/[0.08] hover:border-[#00F2FE]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-[#8B9BB0] mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                        {skill.name}
                      </div>
                      {skill.provenIn && (
                        <div className="text-[11px] font-mono text-[#5C6B7E] pl-3.5">
                          Evidence: {skill.provenIn}
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
