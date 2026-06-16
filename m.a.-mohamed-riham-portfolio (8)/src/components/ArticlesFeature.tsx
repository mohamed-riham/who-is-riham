import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ExternalLink, 
  BookmarkCheck, 
  HelpCircle, 
  ShieldAlert, 
  Scan, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { ARTICLES } from '../data';

export default function ArticlesFeature() {
  const [ocrStep, setOcrStep] = useState<'idle' | 'scanning_failed' | 'scanning_success' | 'checking'>('idle');

  const runOcrSimulation = (mode: 'normal' | 'riham_hack') => {
    setOcrStep('checking');
    setTimeout(() => {
      if (mode === 'normal') {
        setOcrStep('scanning_failed');
      } else {
        setOcrStep('scanning_success');
      }
    }, 1800);
  };

  return (
    <div id="articles-feature-root" className="space-y-10">
      
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Case Study Playground */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded font-mono font-semibold">
              Interactive Case Study
            </span>
            <h3 className="text-xl font-heading font-bold text-slate-100 flex items-center gap-1.5">
              <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0" />
              The OCR Persona Failure Simulator
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              As explained in Riham's article <strong className="text-indigo-400">The LinkedIn Lockout</strong>, automated identity verification (Persona) repeatedly failed to read his Sri Lankan license because issue and expiry dates overlapped on the same coordinate. Toggle the simulations to trace the parsing error and apply Riham's physical masking remedy:
            </p>
          </div>

          {/* Interactive Terminal Simulator Card */}
          <div className="bg-slate-950 rounded-xl border border-slate-900 p-5 space-y-5 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
              Persona OCR Core v3.42
            </div>

            {/* License Visual representation */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-3 relative overflow-hidden">
              {/* Dynamic OCR laser sweeping beam */}
              {ocrStep === 'checking' && (
                <motion.div 
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.4, 
                    repeatType: 'reverse', 
                    ease: "easeInOut" 
                  }}
                  className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_12px_#22d3ee,0_0_24px_#06b6d4] z-20 pointer-events-none"
                />
              )}

              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">DRIVING LICENSE - SRI LANKA</span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              </div>

              {/* Data Fields */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] font-mono">
                <div>
                  <span className="block text-[8px] text-slate-500">Document Owner:</span>
                  <span className="text-slate-300">John Doe (Anonymized)</span>
                </div>
                <div>
                  <span className="block text-[8px] text-slate-500">Document ID:</span>
                  <span className="text-slate-300">LK-20XX-XXXXXX</span>
                </div>

                {/* Overlapped Dates Row */}
                <div className="col-span-2 relative p-2 bg-slate-950/40 rounded border border-slate-950">
                  <span className="block text-[8px] text-slate-500">Dates Matrix (Coordinate Overlap Area):</span>
                  
                  {ocrStep === 'scanning_success' ? (
                    <div className="flex justify-between items-center text-slate-400 mt-1">
                      <span className="line-through text-slate-600 uppercase" title="Physically Blocked">[ISSUE TAPPED COVERED]</span>
                      <span className="text-emerald-400 font-bold">EXP: XX.XX.20XX</span>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center text-slate-300 mt-1 font-semibold">
                      <span className="text-rose-400">ISSUE: XX.XX.20XX</span>
                      <span className="text-indigo-400">EXP: XX.XX.20XX</span>
                      {ocrStep !== 'scanning_success' && (
                        <div className="absolute inset-0 border border-dashed border-rose-500/50 bg-rose-500/5 animate-pulse rounded" />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Mask overlay indicator */}
              <AnimatePresence>
                {ocrStep === 'scanning_success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-[60px] left-3 bg-indigo-600/90 text-white font-mono text-[9px] py-1 px-3 rounded border border-indigo-500 font-semibold"
                  >
                    █ Tape Masking Applied to Issue Coordinate
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dashboard Operational Actions */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                id="btn-ocr-simulate-normal"
                onClick={() => runOcrSimulation('normal')}
                disabled={ocrStep === 'checking'}
                className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg text-xs font-mono font-semibold text-slate-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <Scan className="w-3.5 h-3.5 text-slate-400" />
                <span>Standard Native Scan</span>
              </button>
              
              <button
                id="btn-ocr-simulate-hack"
                onClick={() => runOcrSimulation('riham_hack')}
                disabled={ocrStep === 'checking'}
                className="flex-1 px-3 py-2 bg-indigo-950/45 hover:bg-indigo-900/40 border border-indigo-700/30 rounded-lg text-xs font-mono font-semibold text-indigo-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
                <span>Riham's Masking Hack</span>
              </button>
            </div>

            {/* Dynamic Terminal Output Terminal Console */}
            <div className="p-3.5 bg-slate-950 rounded border border-slate-900 min-h-24 font-mono text-xs flex flex-col justify-center">
              {ocrStep === 'idle' && (
                <div className="text-slate-500 text-center text-[11px]">
                  ⌺ STANDBY :: Select checking mechanism above to execute scanner boundary test.
                </div>
              )}

              {ocrStep === 'checking' && (
                <div className="space-y-1 text-slate-300 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
                    <span>$ EXEC PersonaOCR -i /tmp/license_sample_holder.png</span>
                  </div>
                  <div className="text-slate-500 ml-3.5">Running segment extraction, thresholding filters etc...</div>
                </div>
              )}

              {ocrStep === 'scanning_failed' && (
                <div className="space-y-1.5">
                  <div className="text-rose-400 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>OCR RESOLUTION EXCEPTION : CODE_0721</span>
                  </div>
                  <p className="text-[10px] text-slate-400 ml-5.5 leading-relaxed">
                    ERROR: Overlapping document issue/expiry date coordinates share identical lines, breaking layout classification indices. Result: Automated verification refused.
                  </p>
                </div>
              )}

              {ocrStep === 'scanning_success' && (
                <div className="space-y-1.5">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>DOCUMENT IDENTITY SOLVED : VERIFICATION OK</span>
                  </div>
                  <p className="text-[10px] text-slate-400 ml-5.5 leading-relaxed">
                    SUCCESS: Issue date masked. Expiry date extracted uniquely from layout. Persona checks cleared, unlocking account state loops.
                  </p>
                </div>
              )}
            </div>

            {/* Educational take away */}
            <div className="p-3 bg-indigo-950/15 border border-indigo-900/20 rounded-lg text-[11px] font-sans text-slate-300 leading-relaxed">
              <strong>Socio-Technical Reflection:</strong> AI-driven verification networks operate on rigid assumptions. Riham's experience underlines why global platforms must engineer adaptive human fallback paths and localize character-recognition thresholds for developing regional formats.
            </div>
          </div>
        </div>

        {/* Right Column: Dev.to Articles List */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded font-mono font-semibold">
              Public Publications
            </span>
            <h3 className="text-xl font-heading font-bold text-slate-100 flex items-center gap-1.5">
              <FileText className="w-5 h-5 text-indigo-400 shrink-0" />
              Community Articles on Dev.to
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Riham writes regularly on career pathways, transitioning between software and data fields, and UI design edge-cases.
            </p>
          </div>

          <div className="space-y-4">
            {ARTICLES.map((article) => (
              <div 
                id={`article-${article.id}`}
                key={article.id}
                className="group p-5 bg-slate-900/30 hover:bg-slate-900/55 border border-slate-800 rounded-xl transition-all duration-300 space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                    <span>{article.date} · {article.readTime}</span>
                    <span className="px-2 py-0.5 text-[9px] font-bold text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 rounded">
                      {article.platform}
                    </span>
                  </div>

                  <a 
                    id={`link-article-text-${article.id}`}
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm md:text-base font-heading font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors duration-200 leading-tight"
                  >
                    {article.title}
                  </a>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {article.excerpt}
                  </p>
                </div>

                {/* Tags and Action */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-950">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 text-[9px] font-mono text-slate-500 bg-slate-950 border border-slate-900"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    id={`link-article-btn-${article.id}`}
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
