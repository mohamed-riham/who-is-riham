import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Globe2, 
  Library, 
  Laptop, 
  Presentation, 
  ChevronRight, 
  ExternalLink,
  Check,
  Search,
  BookOpen,
  Award,
  BookMarked
} from 'lucide-react';
import { SKILL_GROUPS, CERTIFICATIONS, RESEARCH_PRESENTATIONS } from '../data';

export default function SkillsGrid() {
  const [activeGroup, setActiveGroup] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const groupIcons: Record<string, any> = {
    "Programming Languages": Code2,
    "AI & Machine Learning": Cpu,
    "Web & Microservices": Globe2,
    "Hardware & IoT": Laptop,
    "Systems & Developer Tools": Library
  };

  const getFilteredSkills = () => {
    let allGroupSkills = SKILL_GROUPS;
    if (activeGroup !== "All") {
      allGroupSkills = SKILL_GROUPS.filter(g => g.category === activeGroup);
    }

    const flatSkillsWithGroup = allGroupSkills.flatMap(g => 
      g.skills.map(s => ({ ...s, group: g.category }))
    );

    if (!searchQuery.trim()) {
      return flatSkillsWithGroup;
    }

    return flatSkillsWithGroup.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredSkills = getFilteredSkills();

  return (
    <div 
      id="skills-grid-section-root" 
      onMouseMove={handleMouseMove}
      className="group/skills space-y-12 relative overflow-hidden"
    >
      {/* Dynamic Hover Spotlight Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover/skills:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.015), transparent 75%)`,
        }}
      />
      
      {/* 1. Skill Indexer Search + Filters */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-heading font-bold text-slate-100 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-400" />
              Technical Skills Inventory
            </h3>
            <p className="text-xs text-slate-500">
              Interactive directories categorizing dual systems capability across web, local models and hardware pipelines.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              id="skill-search-input"
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 text-slate-200 text-xs pl-9 pr-4 py-2 rounded-lg border border-slate-900 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Group Tab Buttons */}
        <div className="flex flex-wrap gap-1 p-1 bg-slate-950 rounded-lg border border-slate-900 overflow-x-auto">
          <button
            id="btn-skill-filter-all"
            onClick={() => setActiveGroup("All")}
            className={`px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${activeGroup === "All" ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            All Repositories
          </button>
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.category}
              id={`btn-skill-filter-${group.category.split(' ')[0]}`}
              onClick={() => setActiveGroup(group.category)}
              className={`px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${activeGroup === group.category ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Skills Results List */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, idx) => {
                const Icon = groupIcons[skill.group] || Code2;
                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -3, borderColor: "#2563eb" }}
                    key={`${skill.name}-${idx}`} 
                    id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 rounded-lg p-4 space-y-3 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-slate-950 rounded border border-slate-800 text-indigo-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block font-semibold font-heading text-slate-200 text-sm leading-tight">{skill.name}</span>
                          <span className="block text-[9px] font-mono text-slate-500 uppercase">{skill.group}</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {skill.description}
                    </p>

                    {/* Level gauge tracking line */}
                    <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full bg-indigo-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center text-xs font-mono text-slate-600 border border-slate-900 rounded-xl bg-slate-950/20"
              >
                No matching skill matrices located in query buffer records.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 2. Credentials and Certified AWS/Udacity Badges */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-heading font-bold text-slate-100 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Verified AWS & Educational Credentials
          </h3>
          <p className="text-xs text-slate-500">
            Professional cloud platforms and machine learning validation credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div 
              id={`cert-card-${cert.id}`}
              key={cert.id}
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              {/* Badge visual header */}
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.badgeColor} p-2.5 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]`}>
                  <Award className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-semibold text-amber-400 tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h4 className="text-sm font-heading font-bold text-slate-100 group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-mono font-medium block">
                    Issued: {cert.date}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2">
                  {cert.description}
                </p>
              </div>

              {/* Verified tags validation */}
              <div className="mt-6 space-y-3 pt-3 border-t border-slate-900">
                <div className="flex flex-wrap gap-1">
                  {cert.skillsValidated.map((skillBadge) => (
                    <span 
                      key={skillBadge} 
                      className="px-2 py-0.5 text-[9px] font-mono bg-slate-950 text-slate-500 rounded border border-slate-900"
                    >
                      {skillBadge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SlideShare Theoretical Publications Shelf */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-heading font-bold text-slate-100 flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-blue-400" />
            Science & Enterprise Slides Archives
          </h3>
          <p className="text-xs text-slate-500">
            A selection of academic presentation decks showing research in group theory, software testing lifecycles, and network topologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_PRESENTATIONS.map((pres, idx) => (
            <div 
              key={idx}
              id={`presentation-item-${idx}`}
              className="bg-slate-900/30 p-5 rounded-lg border border-slate-800 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 text-[9px] font-mono text-indigo-400 bg-indigo-500/5 rounded border border-indigo-400/20">
                    {pres.platform} Archive
                  </span>
                  <span className="text-[10px] font-mono text-slate-600">Slide Presentation</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider block">
                    {pres.focus}
                  </span>
                  <h4 className="text-xs font-heading font-bold text-slate-200 leading-snug">
                    {pres.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {pres.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-950 flex justify-end">
                <a 
                  id={`link-slideshare-${idx}`}
                  href="https://www.slideshare.net/mohamed-riham/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Access Deck Node</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
