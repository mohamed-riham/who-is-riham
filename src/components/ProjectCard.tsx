import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Cpu, 
  BookOpen, 
  AlertCircle, 
  CheckCircle, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Database
} from 'lucide-react';
import { Project } from '../types';
import TiltCard from './TiltCard';
import SEOMetadataManager from './SEOMetadataManager';
import { playCyberClick, playHoverTick } from '../lib/audio';

interface ProjectCardProps {
  project: Project;
  key?: string;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // 🌍 Deep-Linking & Search Crawler Sync Effect
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('project') === project.id) {
        setIsOpen(true);
      }
    }
  }, [project.id]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const activeProjectQuery = params.get('project');
      
      if (isOpen) {
        if (activeProjectQuery !== project.id) {
          params.set('project', project.id);
          const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
          window.history.pushState({ project: project.id }, '', newUrl);
        }
      } else {
        if (activeProjectQuery === project.id) {
          params.delete('project');
          const searchString = params.toString();
          const newUrl = `${window.location.pathname}${searchString ? `?${searchString}` : ''}${window.location.hash}`;
          window.history.pushState({ project: null }, '', newUrl);
        }
      }
    }
  }, [isOpen, project.id]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const categoryLabels: Record<string, string> = {
    'software': 'SOLID Software System',
    'data-science': 'ML & AI Ecosystem',
    'iot': 'Edge AI & IoT Hardware',
    'game': '3D Interactive Engine',
    'full-stack': 'Full-Stack Integration'
  };

  const categoryColors: Record<string, string> = {
    'software': 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
    'data-science': 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5',
    'iot': 'text-amber-400 border-amber-500/30 bg-amber-500/5',
    'game': 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/5',
    'full-stack': 'text-blue-400 border-blue-500/30 bg-blue-500/5'
  };

  return (
    <TiltCard id={`project-card-tilt-${project.id}`} className="h-full">
      <div 
        id={`project-card-${project.id}`}
        onMouseMove={handleMouseMove}
        onClick={() => { playCyberClick(); setIsOpen(true); }}
        className="group relative flex flex-col justify-between bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800/80 overflow-hidden hover:border-indigo-500/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300 h-full cursor-pointer select-none"
      >
      {/* Dynamic Hover Spotlight Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.08), rgba(6, 182, 212, 0.02), transparent 70%)`,
        }}
      />

      {/* Visual Accent Corner Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl group-hover:from-indigo-400/20 transition-all duration-500 pointer-events-none" />

      {/* Project Cover Presentation Banner */}
      {project.image && (
        <div id={`project-cover-banner-${project.id}`} className="relative w-full h-48 overflow-hidden border-b border-slate-800/60 bg-slate-950">
          <img 
            src={project.image} 
            alt={project.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
          
          {/* High Contrast Absolute Floating Badge */}
          <span className={`absolute top-4 left-4 text-[9px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded bg-slate-950/90 backdrop-blur-md border ${categoryColors[project.category] || 'text-slate-400 border-slate-800'}`}>
            {categoryLabels[project.category] || project.category}
          </span>
        </div>
      )}

      {/* Main Card Grid */}
      <div className="p-6">
        {/* Header Status (Simplified) */}
        {!project.image && (
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className={`text-[10px] uppercase tracking-widest font-mono font-semibold px-2.5 py-1 border rounded-full ${categoryColors[project.category] || 'text-slate-400 border-slate-800'}`}>
              {categoryLabels[project.category] || project.category}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>Deployed Core</span>
            </div>
          </div>
        )}

        {project.image && (
          <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-slate-500 mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>Active Sandbox</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-heading font-semibold text-slate-100 group-hover:text-white transition-colors duration-200 leading-tight mb-2">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Quick Tech Specs / Pill Containers */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span 
              key={idx} 
              className="px-2 py-0.5 text-[11px] font-mono bg-slate-950 text-slate-400 rounded-sm border border-slate-900"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] font-mono bg-slate-950 text-slate-500 rounded-sm">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Custom Stats Displays */}
        {project.customStats && project.customStats.length > 0 && (
          <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-slate-950/85 rounded-lg border border-slate-900 mb-2">
            {project.customStats.map((stat, sIdx) => (
              <div key={sIdx} className="text-center">
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">{stat.label}</span>
                <span className="text-sm font-semibold font-mono text-indigo-300">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-900/65 flex items-center justify-between">
        <button 
          id={`btn-toggle-details-${project.id}`}
          onClick={() => setIsOpen(true)}
          className="text-xs font-mono font-medium text-slate-400 group-hover:text-indigo-400 flex items-center gap-1.5 transition-colors duration-200 cursor-pointer"
        >
          <span>Architecture Specs</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.kaggleUrl && (
            <a 
              id={`link-kaggle-${project.id}`}
              href={project.kaggleUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 bg-slate-950 text-slate-400 hover:text-cyan-400 border border-slate-900 hover:border-slate-800 rounded transition-all"
              title="Kaggle Dataset"
            >
              <Database className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a 
              id={`link-github-${project.id}`}
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 bg-slate-950 text-slate-400 hover:text-white border border-slate-900 hover:border-slate-800 rounded transition-all"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* High Fidelity Technical Details Modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          >
            <SEOMetadataManager activeProject={project} />
            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Header Panel */}
              <div className="p-6 border-b border-slate-800/80 sticky top-0 bg-slate-900 z-10 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 border rounded-sm ${categoryColors[project.category] || 'text-slate-400 border-slate-800'}`}>
                      {categoryLabels[project.category] || project.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Local Environment Node</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <button 
                  id={`btn-close-modal-${project.id}`}
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-950 rounded border border-slate-800 cursor-pointer font-mono text-xs"
                >
                  ESC ✕
                </button>
              </div>

              {/* Main Content Body */}
              <div className="p-6 space-y-6">
                {/* Long Description and Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-[11px] uppercase tracking-widest font-semibold font-mono text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    System Architecture Overview
                  </h4>
                  <p className="text-slate-300 text-[14px] leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Problem vs. Solution Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problem */}
                  <div className="p-4 bg-rose-950/15 border border-rose-500/20 rounded-lg">
                    <h5 className="text-xs font-mono font-semibold text-rose-400 flex items-center gap-1.5 mb-2">
                      <AlertCircle className="w-4 h-4" />
                      Root Challenge Identified
                    </h5>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 bg-emerald-950/15 border border-emerald-500/20 rounded-lg">
                    <h5 className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                      <CheckCircle className="w-4 h-4" />
                      Engineered Response
                    </h5>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Functional Features List */}
                {project.features && (
                  <div className="space-y-2.5">
                    <h4 className="text-[11px] uppercase tracking-widest font-semibold font-mono text-slate-400 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Technical Features & Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-950/40 p-2.5 border border-slate-950 rounded">
                          <span className="text-indigo-400 font-mono select-none">[{fIdx + 1}]</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Hardware Specifications (if applicable) */}
                {project.hardwareSpecs && (
                  <div className="space-y-2">
                    <h4 className="text-[11px] uppercase tracking-widest font-semibold font-mono text-slate-400 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-amber-500" />
                      Physical Physical Interfaces & Hardware Mapping
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {project.hardwareSpecs.map((hardware, hIdx) => (
                        <div key={hIdx} className="p-2 text-center bg-slate-950 border border-slate-800 rounded font-mono text-[10px] text-slate-300">
                          {hardware}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantifiable Results List */}
                <div className="space-y-2">
                  <h4 className="text-[11px] uppercase tracking-widest font-semibold font-mono text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    Validation & Measurable Outcomes
                  </h4>
                  <ul className="space-y-1.5">
                    {project.results.map((res, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-500">✔</span>
                        <span className="leading-relaxed">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Complete Tech Stack Detailed List */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-semibold font-mono text-slate-400 mb-2">
                    Complete Code Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 text-xs font-mono bg-slate-950 text-indigo-300 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Sticky Footer */}
              <div className="p-6 border-t border-slate-800 sticky bottom-0 bg-slate-900 z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">M.A.M. Riham Core System</span>
                <div className="flex gap-2">
                  {project.kaggleUrl && (
                    <a 
                      id={`modal-kaggle-btn-${project.id}`}
                      href={project.kaggleUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
                    >
                      <Database className="w-3.5 h-3.5" />
                      <span>Kaggle Profile</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      id={`modal-github-btn-${project.id}`}
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white rounded text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </TiltCard>
  );
}
