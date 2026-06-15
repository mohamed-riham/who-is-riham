import * as React from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Github, 
  Instagram,
  ArrowRight,
  MapPin,
  Award,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ProfileAvatarHub() {
  // Direct, secure live link to M.A. Mohamed Riham's official Github photo.
  // This live dynamic avatar fetches automatically and stays in sync dynamically.
  const secureProfilePhoto = "https://github.com/mohamed-riham.png";

  return (
    <div 
      id="professional-avatar-hub-comprehensive"
      className="bg-slate-900/60 border border-slate-800/85 p-6 md:p-7 rounded-2xl relative shadow-xl overflow-hidden text-left backdrop-blur-md space-y-6"
    >
      {/* Decorative ambient background subtle glows */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/5 blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
        
        {/* Secure Image Frame */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <div 
            className="group/photo relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-slate-950 p-1 flex-shrink-0 overflow-hidden border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 shadow-xl"
          >
            {/* Elegant hover ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/25 to-cyan-400/25 opacity-60 group-hover/photo:opacity-100 transition-opacity duration-300" />
            
            <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900 relative">
              <motion.img 
                src={secureProfilePhoto} 
                alt={PERSONAL_INFO.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl select-none"
                onError={(e) => {
                  // Fallback safe placeholder
                  (e.target as HTMLImageElement).src = "https://avatar.iran.liara.run/public/boy";
                }}
              />

              {/* Verified Badge Icon Absolute Overlay */}
              <div className="absolute bottom-1.5 right-1.5 bg-slate-950/80 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-1.5" title="Real Official Account">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/90 border border-slate-850 rounded-lg text-[10px] font-mono text-slate-400">
            <Cpu className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>SECURE LIVE CON</span>
          </div>
        </div>

        {/* Profile Presentation Column */}
        <div className="flex-1 space-y-4 text-center sm:text-left min-w-0">
          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
                Official Live Photo
              </span>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE PORTFOLIO</span>
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-heading font-extrabold text-slate-100 tracking-tight leading-normal">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-2 font-sans max-w-xl">
              BSc (Hons) in Data Science candidate and dual-disciplinary engineer based in Sri Lanka. Blends solid, pattern-oriented software standards with modern quantitative deep learning modules.
            </p>
          </div>

          {/* Demographics Details Grid */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 py-1.5 border-t border-b border-slate-850/60 font-sans">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Sri Lanka (Central SLT Node)</span>
            </div>
            <div className="flex items-center gap-1.5 sm:border-l sm:border-slate-800 sm:pl-4">
              <Award className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>BSc Data Science Undergraduate</span>
            </div>
          </div>

          {/* Social Profiles Interlink buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold border border-indigo-500/20 hover:border-indigo-400 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowRight className="w-3 h-3 text-slate-200" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-lg text-xs font-semibold border border-slate-705 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/40 hover:to-purple-600/40 text-pink-300 hover:text-white rounded-lg text-xs font-semibold border border-pink-500/20 hover:border-pink-500/40 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram Profile</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
