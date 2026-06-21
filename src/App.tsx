import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { 
  Terminal, 
  ArrowDownCircle, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Code2, 
  CheckCircle, 
  ExternalLink,
  Shield,
  FileSpreadsheet,
  Menu,
  X
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from './data';
import ProjectCard from './components/ProjectCard';
import ResearchFeature from './components/ResearchFeature';
import SkillsGrid from './components/SkillsGrid';
import JourneyTimeline from './components/JourneyTimeline';
import ArticlesFeature from './components/ArticlesFeature';
import FooterAndContact from './components/FooterAndContact';
import ProfileAvatarHub from './components/ProfileAvatarHub';
import SearchInsights from './components/SearchInsights';
import MathMatrixLab from './components/MathMatrixLab';
import MobilePortfolioApp from './components/MobilePortfolioApp';
import QuantumSpideyCanvas from './components/QuantumSpideyCanvas';

export default function App() {
  const [activeSection, setActiveSection] = useState('journey');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'iot' | 'data-science' | 'software' | 'full-stack'>('all');
  const [terminalCommand, setTerminalCommand] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'cmd' | 'resp'; text: string }>>([
    { type: 'resp', text: 'Initializing Riham-Core compiler v4.11...' },
    { type: 'resp', text: 'Status: Dual-disciplinary system ready (Software Engineering × Data Science). [Theme Mode: Dark Spider]' },
    { type: 'resp', text: 'Type "help" to view custom academic and professional operational macros.' }
  ]);

  // Premium Mouse Spotlight Dynamics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, { damping: 35, stiffness: 220, mass: 0.5 });
  const glowY = useSpring(mouseY, { damping: 35, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  // Dynamic Query Parameter & Hash Routing for Indexability and "Real Extra Pages"
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const targetPage = params.get('page') || params.get('tab') || window.location.hash.substring(1);
    
    if (targetPage) {
      const normalized = targetPage.toLowerCase();
      let targetId = '';
      if (normalized === 'home' || normalized === 'architect' || normalized === 'journey') {
        targetId = 'journey';
      } else if (normalized === 'projects' || normalized === 'web' || normalized === 'tech-web') {
        targetId = 'projects';
      } else if (normalized === 'research' || normalized === 'fraud' || normalized === 'quantum-fraud') {
        targetId = 'research';
      } else if (normalized === 'skills' || normalized === 'badges' || normalized === 'genetic') {
        targetId = 'skills';
      } else if (normalized === 'search' || normalized === 'insights' || normalized === 'multiverse') {
        targetId = 'search';
      } else if (normalized === 'case-studies' || normalized === 'cases' || normalized === 'chronicle') {
        targetId = 'case-studies';
      } else if (normalized === 'math-lab' || normalized === 'math' || normalized === 'labs' || normalized === 'wormhole') {
        targetId = 'math-lab';
      } else if (normalized === 'contact' || normalized === 'connect' || normalized === 'portal') {
        targetId = 'contact';
      }

      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(targetId);
          }
        }, 300);
      }
    }
  }, []);

  const navLinks = [
    { id: 'journey', label: 'Career Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Fraud Research' },
    { id: 'skills', label: 'Skills & Badges' },
    { id: 'search', label: 'Search Insights' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'math-lab', label: 'Math Lab' },
    { id: 'contact', label: 'Contact Node' }
  ];

  // Dynamic Scroll Highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const executeCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalCommand.trim()) return;

    const cmd = terminalCommand.trim().toLowerCase();
    const newHistory = [...terminalHistory, { type: 'cmd' as const, text: `$ ${terminalCommand}` }];

    if (cmd === 'help') {
      newHistory.push(
        { type: 'resp', text: 'Available commands:' },
        { type: 'resp', text: '  about      Display biography and dual-disciplinary credentials.' },
        { type: 'resp', text: '  skills     View grouped list of primary language indices.' },
        { type: 'resp', text: '  contact    Print direct social email links.' },
        { type: 'resp', text: '  clear      Purge current log buffer records.' }
      );
    } else if (cmd === 'about') {
      newHistory.push(
        { type: 'resp', text: `Name: ${PERSONAL_INFO.name}` },
        { type: 'resp', text: `Title: ${PERSONAL_INFO.title}` },
        { type: 'resp', text: `Bio: ${PERSONAL_INFO.biography}` }
      );
    } else if (cmd === 'skills' || cmd === 'webs') {
      newHistory.push(
        { type: 'resp', text: 'Primary Matrix: Python (95%), SQL (90%), C# (80%), OpenCV (88%), YOLOv8 (90%), Streamlit (92%)' }
      );
    } else if (cmd === 'contact' || cmd === 'portal') {
      newHistory.push(
        { type: 'resp', text: `Direct Mail: ${PERSONAL_INFO.email}` },
        { type: 'resp', text: 'GitHub Hub: github.com/mohamed-riham' },
        { type: 'resp', text: 'LinkedIn: linkedin.com/in/mohamed-riham' }
      );
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalCommand('');
      return;
    } else {
      newHistory.push({ type: 'resp', text: `Command not found: "${cmd}". Type "help" for macros.` });
    }

    setTerminalHistory(newHistory);
    setTerminalCommand('');
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.category === projectFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden relative font-sans">
      
      {/* 🌌 Space-Time Web Continuum Layer */}
      <QuantumSpideyCanvas />
      
      {/* ─── DESKTOP PC PORTAL (lg:block hidden) ─── */}
      <div className="hidden lg:block relative w-full z-10">
      {/* Smooth Mouse Tracking Spotlight Glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          transform: 'translate(-50%, -50%)',
        }}
        className="fixed w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),rgba(6,182,212,0.035),transparent_65%)] rounded-full pointer-events-none z-[1] select-none"
      />

      {/* Decorative Atmospheric Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-950/15 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-950/15 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />

      {/* 1. Header Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-rose-950/35 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <motion.div 
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-600 to-indigo-900 flex items-center justify-center font-heading text-lg text-white shadow-lg border border-rose-500/25 select-none"
            >
              🕸️
            </motion.div>
            <div>
              <span className="font-heading font-black text-sm tracking-tight block text-slate-100 leading-none">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[9px] font-mono text-rose-400 font-bold tracking-widest leading-none mt-1.5 block uppercase">
                [SE × DS] DOUBLE CORE
              </span>
            </div>
          </div>

          {/* Nav Links Desktop */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="relative px-3 py-1.5 uppercase tracking-wider font-semibold transition-colors duration-200 text-center"
                >
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavBackground"
                      className="absolute inset-x-0 bottom-[-4px] h-[3px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className={isActive ? 'text-indigo-400 font-bold' : 'text-slate-400 hover:text-slate-100'}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Controls Right */}
          <div className="flex items-center gap-2">
            {/* Social Icons Desktop/Tablet */}
            <div className="flex items-center gap-2">
              <a 
                id="header-shortcut-github"
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 rounded transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                id="header-shortcut-linkedin"
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 rounded transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Mobile Menu Open/Close Button Toggle */}
            <button
              id="mobile-nav-burger-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 bg-slate-900 hover:bg-slate-850 hover:text-slate-100 border border-slate-850 rounded text-slate-400 transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle navigation parameters"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-900/60 bg-slate-950/95 backdrop-blur-lg overflow-hidden absolute left-0 w-full"
            >
              <div className="p-4 flex flex-col gap-2.5 text-xs font-mono">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        isActive 
                          ? 'bg-indigo-950/40 border-indigo-600/40 text-indigo-300 font-bold' 
                          : 'bg-slate-900/20 border-transparent text-slate-400 hover:bg-slate-900/40 hover:text-slate-200'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:py-36 min-h-[90vh] flex items-center select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Core Pitch */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.12 } 
              }
            }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Interactive Profile Picture & Portfolio Hub */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, delay: 0.1 } }
              }}
              className="mb-4"
            >
              <ProfileAvatarHub />
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/15 rounded-full font-mono text-xs font-semibold uppercase tracking-wider"
            >
              <Cpu className="w-3.5 h-3.5 animate-spin-slow text-rose-500" />
              <span>Full-Stack AI &amp; Analytics Node</span>
            </motion.div>
 
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-100 tracking-tight leading-none"
            >
              M.A. Mohamed <span className="bg-gradient-to-r from-rose-500 via-rose-300 to-cyan-400 bg-clip-text text-transparent">Riham</span>
            </motion.h1>
 
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg md:text-xl font-medium text-slate-300 max-w-2xl mx-auto lg:mx-0"
            >
              {PERSONAL_INFO.subTitle}
            </motion.p>
 
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-sm md:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              {PERSONAL_INFO.biography}
            </motion.p>
 
            {/* Quick Actions */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                id="hero-scroll-projects"
                href="#projects"
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-550 bg-rose-700/80 hover:bg-rose-650 text-white rounded-lg text-xs font-mono font-semibold transition-all shadow-md cursor-pointer flex items-center gap-2 border border-rose-500/30"
              >
                <span>Access Projects Registry</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <a
                id="hero-scroll-research"
                href="#research"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-850 rounded-lg text-xs font-mono font-semibold text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-rose-500" />
                <span>Read Fraud Report</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Block: Animated Interactive Terminal Dashboard */}
          <div className="lg:col-span-5 relative z-10 w-full max-w-lg mx-auto">
            {/* Ambient Background Box Glow */}
            <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full" />
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              {/* Header Tab */}
              <div className="bg-slate-950 p-3 border-b border-slate-900 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] uppercase font-mono text-slate-500 font-bold tracking-widest flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  riham@core_terminal:~
                </span>
              </div>

              {/* Terminal Logs */}
              <div className="p-4 space-y-2 h-56 overflow-y-auto text-xs font-mono pr-1">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className={item.type === 'cmd' ? 'text-indigo-400' : 'text-slate-300 whitespace-pre-line'}>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Input Terminal Form */}
              <form onSubmit={executeCommand} className="border-t border-slate-900 p-3 bg-slate-950/80 flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-xs select-none">$</span>
                <input
                  id="terminal-cli-input"
                  type="text"
                  value={terminalCommand}
                  onChange={(e) => setTerminalCommand(e.target.value)}
                  placeholder="Type 'help' to dump system indexes..."
                  className="bg-transparent flex-1 focus:outline-none font-mono text-xs text-slate-200"
                />
                <button type="submit" className="hidden">Execute</button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Section: Career Timeline */}
      <section id="journey" className="py-20 md:py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-slate-500">
              01 // Evolution Blueprint
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-100 tracking-tight leading-none">
              Academic Foundations & Transition Study
            </h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
              Chronological milestones documenting the evolution from basic software architectures to cloud-scale data science structures.
            </p>
          </div>

          <JourneyTimeline />
        </div>
      </section>

      {/* 4. Section: Interactive Projects Registry */}
      <section id="projects" className="py-20 md:py-24 border-t border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-slate-500">
                02 // Implemented Ware
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-100 tracking-tight leading-none">
                Software & Machine Learning Portfolio
              </h2>
              <p className="text-slate-400 text-xs md:text-sm">
                Authentic, operational solutions proving expertise in edge computer vision, local speech engines, and SOLID standards.
              </p>
            </div>

            {/* Quick Filter Pill Controls */}
            <div className="flex flex-wrap gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto self-center md:self-end">
              <button
                id="btn-project-filter-all"
                onClick={() => setProjectFilter('all')}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold cursor-pointer transition-all ${projectFilter === 'all' ? 'bg-indigo-600 font-bold text-white' : 'text-slate-400 hover:text-slate-300'}`}
              >
                All Ware
              </button>
              <button
                id="btn-project-filter-iot"
                onClick={() => setProjectFilter('iot')}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold cursor-pointer transition-all ${projectFilter === 'iot' ? 'bg-indigo-600 font-bold text-white' : 'text-slate-400 hover:text-slate-300'}`}
              >
                IoT & Hardware
              </button>
              <button
                id="btn-project-filter-data"
                onClick={() => setProjectFilter('data-science')}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold cursor-pointer transition-all ${projectFilter === 'data-science' ? 'bg-indigo-600 font-bold text-white' : 'text-slate-400 hover:text-slate-300'}`}
              >
                AI & ML
              </button>
              <button
                id="btn-project-filter-software"
                onClick={() => setProjectFilter('software')}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold cursor-pointer transition-all ${projectFilter === 'software' ? 'bg-indigo-600 font-bold text-white' : 'text-slate-400 hover:text-slate-300'}`}
              >
                SOLID Soft
              </button>
              <button
                id="btn-project-filter-fullstack"
                onClick={() => setProjectFilter('full-stack')}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold cursor-pointer transition-all ${projectFilter === 'full-stack' ? 'bg-indigo-600 font-bold text-white' : 'text-slate-400 hover:text-slate-300'}`}
              >
                Full-Stack
              </button>
            </div>
          </div>

          {/* Grid Layout Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ 
                    duration: 0.35,
                    layout: { type: "spring", stiffness: 220, damping: 20 }
                  }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. Section: Dedicated ML Research Feature */}
      <section id="research" className="py-20 md:py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-slate-500">
              03 // Scientific Calculus
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-100 tracking-tight leading-none">
              Fraud Detection Algorithmic Research
            </h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
              An evaluation comparing Random Forest and XGBoost over imbalanced transaction datasets.
            </p>
          </div>

          <ResearchFeature />
        </div>
      </section>

      {/* 6. Section: Technical Skills and Certified Badges */}
      <section id="skills" className="py-20 md:py-24 border-t border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SkillsGrid />
        </div>
      </section>

      {/* 7. Section: Search Insights & SEO Knowledge Panel */}
      <section id="search" className="py-20 md:py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SearchInsights />
        </div>
      </section>

      {/* 8. Section: Socio-Technical Articles & OCR Playground */}
      <section id="case-studies" className="py-20 md:py-24 border-t border-slate-900 bg-slate-950/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ArticlesFeature />
        </div>
      </section>

      {/* 9. Section: Computational Mathematics & Group Theory Lab */}
      <section id="math-lab" className="py-20 md:py-24 border-t border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <MathMatrixLab />
        </div>
      </section>

      {/* 10. Section: Contact Node & Footer Connections Dashboard */}
      <section id="contact" className="py-20 md:py-24 border-t border-slate-900 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FooterAndContact />
        </div>
      </section>
      </div>

      {/* ─── MOBILE CLIENT OS PORTAL (block lg:hidden) ─── */}
      <div className="block lg:hidden relative w-full">
        <MobilePortfolioApp />
      </div>

    </div>
  );
}
