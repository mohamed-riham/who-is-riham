import * as React from 'react';
import { useEffect, useRef } from 'react';
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
import { playHoverTick, playCyberClick } from '../lib/audio';

export default function ProfileAvatarHub() {
  const secureProfilePhoto = "https://github.com/mohamed-riham.png";
  const radarCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = radarCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    const dots: Array<{ x: number; y: number; opacity: number; size: number }> = [];

    // Initialize telemetry dots
    for (let i = 0; i < 4; i++) {
      dots.push({
        x: Math.random() * 64 - 32,
        y: Math.random() * 64 - 32,
        opacity: Math.random(),
        size: Math.random() * 1.5 + 1
      });
    }

    const drawRadar = () => {
      ctx.clearRect(0, 0, 80, 80);
      const cx = 40;
      const cy = 40;
      const r = 36;

      // Draw ring sweeps
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.15)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      // Sweeping beam
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      
      ctx.fillStyle = 'rgba(239, 68, 68, 0.05)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, -0.4, 0);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(r, 0);
      ctx.stroke();

      ctx.restore();

      // Render dots
      dots.forEach((dot) => {
        dot.opacity -= 0.003;
        if (dot.opacity <= 0) {
          dot.x = Math.random() * 64 - 32;
          dot.y = Math.random() * 64 - 32;
          dot.opacity = 1;
        }
        ctx.fillStyle = `rgba(6, 180, 212, ${dot.opacity * 0.85})`;
        ctx.beginPath();
        ctx.arc(cx + dot.x, cy + dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      angle += 0.025;
      animId = requestAnimationFrame(drawRadar);
    };

    drawRadar();
    return () => cancelAnimationFrame(animId);
  }, []);

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
              <div className="absolute bottom-1.5 right-1.5 bg-slate-950/85 backdrop-blur-sm border border-rose-500/30 rounded-lg p-1.5" title="Verified Professional Node">
                <CheckCircle className="w-4.5 h-4.5 text-rose-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Interactive Radar Telemetry Canvas */}
          <div className="relative w-20 h-20 bg-slate-950/95 rounded-xl border border-slate-800 flex items-center justify-center group/radar overflow-hidden shadow-inner" title="Live Tactical Radar Scanner">
            <canvas ref={radarCanvasRef} width={80} height={80} className="w-full h-full" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,2,5,0.45))] pointer-events-none" />
            <span className="absolute bottom-1 text-[6.5px] font-mono text-cyan-400 tracking-wider group-hover/radar:text-rose-400 transition-colors uppercase font-bold">[Sonar active]</span>
          </div>
 
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/90 border border-rose-950/40 rounded-lg text-[10px] font-mono text-rose-300">
            <Cpu className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>SECURE LIVE CON</span>
          </div>
        </div>
 
        {/* Profile Presentation Column */}
        <div className="flex-1 space-y-4 text-center sm:text-left min-w-0">
          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-rose-400 font-bold bg-rose-500/10 px-2.5 py-1 rounded border border-rose-500/20">
                Official Live Photo
              </span>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>ONLINE PORTFOLIO</span>
              </span>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <h2 className="text-xl md:text-2xl font-heading font-extrabold text-slate-100 tracking-tight leading-normal">
                {PERSONAL_INFO.name}
              </h2>
              {/* Elegant cyber spiderman decoration */}
              <img 
                src="/src/assets/images/spiderman_icon_1782029691948.jpg" 
                alt="Cyber Spider Emblem" 
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full border border-rose-550/40 shadow-inner inline-block"
              />
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-2 font-sans max-w-xl">
              BSc (Hons) in Data Science candidate and dual-disciplinary engineer based in Sri Lanka. Blends solid, pattern-oriented software standards with modern quantitative deep learning modules.
            </p>
          </div>
   
          {/* Demographics Details Grid */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 py-1.5 border-t border-b border-slate-850/60 font-sans">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Sri Lanka (Central SLT Node)</span>
            </div>
            <div className="flex items-center gap-1.5 sm:border-l sm:border-slate-800 sm:pl-4">
              <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>BSc Data Science Undergraduate</span>
            </div>
          </div>
 
          {/* Social Profiles Interlink buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverTick}
              onClick={playCyberClick}
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
              onMouseEnter={playHoverTick}
              onClick={playCyberClick}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-lg text-xs font-semibold border border-slate-705 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
 
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverTick}
              onClick={playCyberClick}
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
