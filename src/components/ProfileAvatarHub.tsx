import * as React from 'react';
import { 
  Linkedin, 
  Github, 
  ArrowRight,
  MapPin,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ProfileAvatarHub() {
  // Use the verified, static GitHub profile picture securely
  const avatarUrl = "https://github.com/mohamed-riham.png";

  return (
    <div 
      id="professional-avatar-hub"
      className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl relative shadow-xl overflow-hidden text-left backdrop-blur-md"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        
        {/* Profile Picture Frame (Pure Presentation, No Edit Triggers) */}
        <div 
          className="group/photo relative w-32 h-32 rounded-2xl bg-slate-950 p-1 flex-shrink-0 overflow-hidden border border-slate-800/80 transition-all duration-300"
        >
          {/* Subtle elegant gradient backdrop highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
          
          <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900 relative">
            <img 
              src={avatarUrl} 
              alt={PERSONAL_INFO.name} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover/photo:scale-105"
            />
          </div>
        </div>

        {/* Professional Presentation Card Details */}
        <div className="flex-1 space-y-3.5 text-center md:text-left min-w-0">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-400 font-bold">VERIFIED_PORTFOLIO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            
            <h2 className="text-xl font-sans font-semibold text-slate-100 tracking-tight leading-normal mt-1">
              M.A. Mohamed Riham
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed mt-1 font-sans">
              BSc (Hons) in Data Science candidate and tech professional specializing in robust, data-driven systems. Use the verified professional links below to connect or browse active projects.
            </p>
          </div>

          {/* Quick Demographics / Accents */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 py-1 font-sans">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Sri Lanka</span>
            </div>
            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-4">
              <Award className="w-3.5 h-3.5 text-slate-500" />
              <span>Data Science BSc</span>
            </div>
          </div>

          {/* Connected Professional Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1.5">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-550 text-white rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-100" />
              <span>Connect on LinkedIn</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
