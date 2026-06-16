import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  ArrowRight,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';
import { CAREER_TIMELINE } from '../data';

export default function JourneyTimeline() {
  const [filter, setFilter] = useState<'all' | 'academic' | 'career'>('all');

  const filteredTimeline = CAREER_TIMELINE.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div id="journey-timeline-root" className="space-y-8">
      
      {/* Visual Transition Dashboard Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded font-semibold">
            Strategic Path Model
          </span>
          <h3 className="text-lg md:text-xl font-heading font-bold text-slate-100">
            A Dual-Disciplinary Engineering Transition
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            How Riham bypassed the theoretical entry-level bottleneck by marrying <strong className="text-emerald-400 font-medium">Software Engineering discipline</strong> (clean code architecture, local DB schemas) with <strong className="text-cyan-400 font-medium font-mono">BSc Data Science analytical models</strong>.
          </p>
        </div>

        {/* Dynamic Metric Toggler */}
        <div className="flex gap-1.5 p-1 bg-slate-950 rounded border border-slate-900">
          <button 
            id="timeline-filter-all"
            onClick={() => setFilter('all')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded cursor-pointer transition-all ${filter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            All Milestones
          </button>
          <button 
            id="timeline-filter-academic"
            onClick={() => setFilter('academic')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded cursor-pointer transition-all ${filter === 'academic' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Academics
          </button>
          <button 
            id="timeline-filter-career"
            onClick={() => setFilter('career')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded cursor-pointer transition-all ${filter === 'career' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Experience
          </button>
        </div>
      </div>

      {/* Vertical Graphic Journey Tracker */}
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-10 py-2">
        <AnimatePresence mode="popLayout">
          {filteredTimeline.map((item, idx) => {
            const isAcademic = item.category === 'academic';
            
            return (
              <motion.div 
                id={`timeline-card-${item.id}`}
                key={item.id} 
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeInOut",
                  layout: { type: "spring", stiffness: 220, damping: 20 }
                }}
                className="relative group space-y-3"
              >
                {/* Custom Bullet Node Connector */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${isAcademic ? 'bg-slate-950 border-cyan-500 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950' : 'bg-slate-950 border-emerald-500 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950'}`}>
                  {isAcademic ? (
                    <GraduationCap className="w-3.5 h-3.5" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Timestamp Period Indicator */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className={`px-2 py-0.5 text-[9px] font-mono rounded border capitalize font-bold ${isAcademic ? 'text-cyan-400 border-cyan-500/10 bg-cyan-500/5' : 'text-emerald-400 border-emerald-500/10 bg-emerald-500/5'}`}>
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono text-slate-400 bg-slate-950 rounded border border-slate-900 font-semibold font-bold">
                    {item.status}
                  </span>
                </div>

                {/* Content Panel Frame */}
                <motion.div 
                  whileHover={{ y: -4, borderColor: "#2563eb" }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="bg-slate-900/30 hover:bg-slate-900/55 rounded-xl border border-slate-800/80 p-5 md:p-6 transition-colors duration-300 space-y-3 shadow-md"
                >
                  <div>
                    <h4 className="text-base md:text-lg font-heading font-bold text-slate-100 leading-tight">
                      {item.title}
                    </h4>
                    <span className="text-xs text-indigo-400 font-mono block mt-0.5">
                      {item.institution}
                    </span>
                  </div>

                  {/* Main Focus statement */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                    {item.coreFocus}
                  </p>

                  {/* Sub-Details Checkpoints */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-950">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-indigo-400 text-xs font-mono select-none">›</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
}
