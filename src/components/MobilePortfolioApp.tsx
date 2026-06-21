import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  CheckCircle, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Compass, 
  Database, 
  Sparkles, 
  BookOpen, 
  Award, 
  MessageSquareCode, 
  Wifi, 
  Battery, 
  Search, 
  Layers, 
  ChevronRight,
  ArrowRight,
  Calendar,
  Layers3,
  Flame,
  ArrowUpRight,
  MapPin,
  Instagram,
  RefreshCw
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data';
import ProjectCard from './ProjectCard';
import ResearchFeature from './ResearchFeature';
import SkillsGrid from './SkillsGrid';
import JourneyTimeline from './JourneyTimeline';
import ArticlesFeature from './ArticlesFeature';
import FooterAndContact from './FooterAndContact';
import MathMatrixLab from './MathMatrixLab';
import SearchInsights from './SearchInsights';

export default function MobilePortfolioApp() {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'research' | 'labs' | 'connect'>('home');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [batteryLevel, setBatteryLevel] = useState(98);
  const [currentTime, setCurrentTime] = useState('');
  
  const [terminalLogs, setTerminalLogs] = useState<Array<{ type: 'cmd' | 'resp'; text: string }>>([
    { type: 'resp', text: 'Initializing RihamOS Mobile Terminal...' },
    { type: 'resp', text: 'Double Core online: Software Engineering & Data Science.' },
    { type: 'resp', text: 'Tap shortcut commands below to immediately execute.' }
  ]);

  // Project Category Filter specifically for mobile cards layout
  const [mobileProjectFilter, setMobileProjectFilter] = useState<'all' | 'iot' | 'data-science' | 'software' | 'full-stack'>('all');

  useEffect(() => {
    // Dynamic pocket time
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    
    // Tiny dynamic battery drain mock simulation
    const batteryInterval = setInterval(() => {
      setBatteryLevel((prev) => (prev > 15 ? prev - 1 : 92));
    }, 180000);

    return () => {
      clearInterval(interval);
      clearInterval(batteryInterval);
    };
  }, []);

  // Mobile Router Link Support for Search Engine Crawling
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const targetPage = params.get('page') || params.get('tab') || window.location.hash.substring(1);
    
    if (targetPage) {
      const normalized = targetPage.toLowerCase();
      if (normalized === 'home' || normalized === 'journey') {
        setActiveTab('home');
      } else if (normalized === 'projects') {
        setActiveTab('projects');
      } else if (normalized === 'research') {
        setActiveTab('research');
      } else if (['labs', 'skills', 'search', 'case-studies', 'math-lab'].includes(normalized)) {
        setActiveTab('labs');
      } else if (normalized === 'contact' || normalized === 'connect') {
        setActiveTab('connect');
      }
    }
  }, []);

  const runMobileCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'cmd' as const, text: `$ ${cmdText}` }];

    if (cleanCmd === 'help') {
      newLogs.push(
        { type: 'resp', text: 'Direct macros:' },
        { type: 'resp', text: '  about     View academic and dual credentials summary.' },
        { type: 'resp', text: '  matrix    Fetch the core language competency data.' },
        { type: 'resp', text: '  contact   Reveal direct e-mail connection channels.' },
        { type: 'resp', text: '  clear     Purge previous terminal log buffer.' }
      );
    } else if (cleanCmd === 'about') {
      newLogs.push(
        { type: 'resp', text: `Candidate: ${PERSONAL_INFO.name}` },
        { type: 'resp', text: `Undergrad: BSc (Hons) in Data Science` },
        { type: 'resp', text: `Bio: Dual discipline engineer focusing on robust SOLID software architecture and neural modules.` }
      );
    } else if (cleanCmd === 'matrix') {
      newLogs.push(
        { type: 'resp', text: 'Tech Weights: Python (95%), SQL (90%), C# (80%), OpenCV (88%), YOLOv8 (90%), Git (95%)' }
      );
    } else if (cleanCmd === 'contact') {
      newLogs.push(
        { type: 'resp', text: `Security Email: ${PERSONAL_INFO.email}` },
        { type: 'resp', text: `Instagram Hub: @_mohamed_riham` },
        { type: 'resp', text: `LinkedIn Node: linkedin.com/in/mohamed-riham` }
      );
    } else if (cleanCmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({ type: 'resp', text: `Unknown node command: "${cmdText}". Try helper tabs.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    runMobileCommand(terminalInput);
  };

  const filteredMobileProjects = PROJECTS.filter(p => {
    if (mobileProjectFilter === 'all') return true;
    return p.category === mobileProjectFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between select-none relative pb-20">
      
      {/* Native-style Top Status Bar */}
      <div className="sticky top-0 bg-slate-950/90 backdrop-blur-md border-b border-rose-950/30 px-4 py-2 flex items-center justify-between z-30 text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-bold text-slate-300">RihamOS v4.11</span>
        </div>
        <div className="text-slate-300 font-semibold">{currentTime}</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <Wifi className="w-3 h-3 text-cyan-400" />
            <span className="text-[9px]">5G</span>
          </div>
          <div className="flex items-center gap-1">
            <Battery className="w-3.5 h-3.5 text-rose-500" />
            <span>{batteryLevel}%</span>
          </div>
        </div>
      </div>
  
      {/* Main Pocket Body Viewport inside tab router */}
      <div className="flex-1 w-full max-w-md mx-auto px-4 py-6 overflow-x-hidden space-y-6">
  
        <AnimatePresence mode="wait">
          
          {/* TAB 1: HOME OS DASHBOARD */}
          {activeTab === 'home' && (
            <motion.div
              key="mobile-tab-home"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.22 }}
              className="space-y-6 text-left"
            >
              {/* Dynamic Interactive Welcome Mini Header Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/20 to-slate-900/50 border border-rose-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 blur-xl pointer-events-none" />
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="https://github.com/mohamed-riham.png" 
                      alt="M.A. Mohamed Riham" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://avatar.iran.liara.run/public/boy";
                      }}
                      className="w-12 h-12 rounded-xl object-cover border border-rose-500/30 shadow"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-rose-500 border-2 border-slate-950 w-3.5 h-3.5 rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-base font-heading font-extrabold text-slate-100">
                      M.A. Mohamed Riham
                    </h2>
                    <p className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider uppercase leading-none mt-1">
                      BSc Data Science Candidate
                    </p>
                  </div>
                </div>
  
                <p className="text-xs text-slate-350 leading-relaxed mt-4 font-sans border-t border-slate-900 pt-3">
                  A dual-disciplinary developer from Sri Lanka. Integrates rigorous software design benchmarks with modern deep neural networks.
                </p>
  
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-3 text-[10px] text-slate-450 font-sans font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    Sri Lanka Node
                  </span>
                  <span className="text-slate-700">|</span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-cyan-400" />
                    Dual Discipline Core
                  </span>
                </div>
              </div>
 
              {/* Bento Quick Status Mini Grid Widget */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setActiveTab('projects')}
                  className="p-3 bg-slate-900/60 border border-slate-850 hover:bg-slate-900 rounded-xl text-left relative overflow-hidden transition-all text-slate-200"
                >
                  <Cpu className="w-5 h-5 text-cyan-400 mb-2" />
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold leading-none mb-1">Ported Code</span>
                  <span className="text-xs font-bold font-heading">Projects Deck</span>
                  <span className="block text-[8px] font-mono text-slate-500 mt-1">
                    {PROJECTS.length} Systems Compiled
                  </span>
                </button>

                <button 
                  onClick={() => setIsTerminalOpen(true)}
                  className="p-3 bg-slate-900/60 border border-slate-850 hover:bg-slate-900 rounded-xl text-left relative overflow-hidden transition-all text-slate-200"
                >
                  <Terminal className="w-5 h-5 text-pink-400 mb-2" />
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold leading-none mb-1">Terminal</span>
                  <span className="text-xs font-bold font-heading">Interactive CLI</span>
                  <span className="block text-[8px] font-mono text-slate-400 mt-1 flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Client
                  </span>
                </button>
              </div>

              {/* High Contrast Academic Path Progress Banner */}
              <div className="p-3 bg-indigo-950/15 border border-indigo-900/20 rounded-xl flex items-start gap-2.5">
                <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold block uppercase leading-none">Primary Milestone Objective</span>
                  <h4 className="text-xs font-bold text-slate-250 font-sans">
                    Refined Banknote Feature Classifier (DCNN)
                  </h4>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Engineered edge assistance models optimized for blind users with offline speed indices.
                  </p>
                </div>
              </div>

              {/* Dynamic Compact Interactive Timeline Index */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Layers3 className="w-3.5 h-3.5 text-indigo-400" />
                  Academic Milestones Stream
                </h3>
                <div className="p-3 bg-slate-900/40 border border-slate-850 rounded-xl space-y-4">
                  <JourneyTimeline />
                </div>
              </div>

              {/* Simple SEO Search Console Knowledge Module info */}
              <div className="p-3 bg-slate-900/40 border border-slate-850 rounded-xl space-y-2">
                <h4 className="text-[10.5px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                  <Search className="w-3.5 h-3.5" /> SEO Verified Index Parameters
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Configured custom `robots.txt`, XML Sitemaps, and strict redirection parameters tuned specifically for the static domain <code className="text-slate-200">who-is-riham</code>.
                </p>
              </div>

            </motion.div>
          )}

          {/* TAB 2: PROJECTS REGISTRY CAROUSEL */}
          {activeTab === 'projects' && (
            <motion.div
              key="mobile-tab-projects"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.22 }}
              className="space-y-4 text-left"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-400 font-bold block uppercase tracking-wider">02 // Code Warehouse</span>
                <h2 className="text-lg font-heading font-extrabold text-slate-100">
                  Projects Registry App
                </h2>
                <p className="text-[11px] text-slate-400">
                  Slide or toggle filter tabs below to explore real-world AI, Machine Learning, and Enterprise architectures.
                </p>
              </div>

              {/* Mobile Filter Scroll Rail */}
              <div className="flex gap-1 overflow-x-auto pb-1.5 scrollbar-thin snap-x">
                {[
                  { id: 'all', label: 'All Ware' },
                  { id: 'iot', label: 'IoT Core' },
                  { id: 'data-science', label: 'AI/ML' },
                  { id: 'software', label: 'SOLID Soft' },
                  { id: 'full-stack', label: 'Full-Stack' }
                ].map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => setMobileProjectFilter(pill.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-tight snap-start shrink-0 cursor-pointer transition-all ${
                      mobileProjectFilter === pill.id 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-slate-900 text-slate-400 border border-slate-850 hover:text-slate-200'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              {/* Touch optimized vertical list of projects cards */}
              <div className="space-y-4">
                {filteredMobileProjects.map((p) => (
                  <div key={p.id} className="bg-slate-900/40 p-1.5 rounded-xl border border-slate-850/80">
                    <ProjectCard project={p} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: FRAUD LAB RESEARCH */}
          {activeTab === 'research' && (
            <motion.div
              key="mobile-tab-research"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.22 }}
              className="space-y-5 text-left"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block uppercase tracking-wider">03 // Imbalanced Calibration</span>
                <h2 className="text-lg font-heading font-extrabold text-slate-100">
                  Fraud Detection Research
                </h2>
                <p className="text-[11px] text-slate-400">
                  Comprehensive performance studies comparing tree ensembles on transaction streams.
                </p>
              </div>

              <div className="bg-slate-900/45 p-1 rounded-2xl border border-slate-850">
                <ResearchFeature />
              </div>
            </motion.div>
          )}

          {/* TAB 4: MATHEMATICS & GROUP LABS */}
          {activeTab === 'labs' && (
            <motion.div
              key="mobile-tab-labs"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.22 }}
              className="space-y-5 text-left"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-purple-400 font-bold block uppercase tracking-wider">04 // Symmetrical Transforms</span>
                <h2 className="text-lg font-heading font-extrabold text-slate-100">
                  Computational Group Theory
                </h2>
                <p className="text-[11px] text-slate-400">
                  Interact with real-time isometric 2D vector transformations natively on your mobile phone screen. Same math core as Unity or Deep Neural layers.
                </p>
              </div>

              <div className="bg-slate-900/45 p-1.5 rounded-2xl border border-slate-850">
                <MathMatrixLab />
              </div>

              <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-xl space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  Additional Skills Index
                </h3>
                <SkillsGrid />
              </div>
            </motion.div>
          )}

          {/* TAB 5: CONNECT APP PORTAL */}
          {activeTab === 'connect' && (
            <motion.div
              key="mobile-tab-connect"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.22 }}
              className="space-y-6 text-left"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">05 // Secure Connection Map</span>
                <h2 className="text-lg font-heading font-extrabold text-slate-100">
                  Establish Connection
                </h2>
                <p className="text-[11px] text-slate-400">
                  Transmit parameters or initiate project review panels immediately. Let's build robust intelligent code together.
                </p>
              </div>

              {/* Fast Touch Social Cards */}
              <div className="grid grid-cols-1 gap-2.5">
                <a 
                  id="mobile-quicklink-mail"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3.5 bg-slate-900/80 hover:bg-slate-850 border border-slate-850 rounded-xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                      <Mail className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-slate-500 uppercase font-bold leading-none mb-1">Direct Mail</span>
                      <span className="text-slate-200 text-xs font-semibold">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-350 transition-colors" />
                </a>

                <a 
                  id="mobile-quicklink-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-900/80 hover:bg-slate-850 border border-slate-850 rounded-xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-slate-500 uppercase font-bold leading-none mb-1">Professional</span>
                      <span className="text-slate-200 text-xs font-semibold">@mohamed-riham</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-350 transition-colors" />
                </a>

                <a 
                  id="mobile-quicklink-instagram"
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-gradient-to-r from-pink-950/20 to-purple-950/20 border border-pink-950/30 rounded-xl flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-500/10 rounded-lg">
                      <Instagram className="w-4 h-4 text-pink-400" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-slate-500 uppercase font-bold leading-none mb-1">Social Feed</span>
                      <span className="text-pink-300 text-xs font-semibold">@_mohamed_riham</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-500/65 group-hover:text-pink-400 transition-colors" />
                </a>
              </div>

              {/* Comprehensive Form + Interactive FAQ Section */}
              <div className="bg-slate-900/40 p-4 border border-slate-850 rounded-xl space-y-4">
                <h3 className="text-xs font-mono font-bold text-slate-350 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Socio-Technical Case Studies
                </h3>
                <ArticlesFeature />
              </div>

              {/* Complete Native-styled responsive Contact Card Footer Panel */}
              <div className="bg-slate-900/30 p-2 rounded-xl">
                <FooterAndContact />
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>

      {/* FLOATING ACTION OVERLAY CLI DRUM SHEETS OR POPUP FOR INTEGRATED TERMINAL */}
      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            id="mobile-terminal-overlay-drawer"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed inset-x-0 bottom-0 top-12 bg-slate-950/98 border-t border-slate-800 z-50 flex flex-col justify-between"
          >
            {/* Drawer Header Tabs controls */}
            <div className="bg-slate-900 p-3.5 border-b border-slate-850 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold tracking-widest flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-pink-400 animate-pulse" />
                Mobile Core CLI Interface
              </span>
              <button
                id="btn-close-mobile-terminal"
                onClick={() => setIsTerminalOpen(false)}
                className="px-2.5 py-1 text-[10px] font-mono bg-slate-800 hover:bg-slate-700 text-slate-250 font-bold rounded-md border border-slate-700 transition-all cursor-pointer"
              >
                Close Terminal
              </button>
            </div>

            {/* Scrollable CLI Terminal logs */}
            <div className="flex-1 p-4 space-y-2.5 overflow-y-auto text-xs font-mono text-slate-300">
              {terminalLogs.map((item, index) => (
                <div key={index} className={item.type === 'cmd' ? 'text-indigo-400 font-bold' : 'text-slate-350 whitespace-pre-wrap leading-relaxed'}>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Touch Macro quick click macro shortcuts list */}
            <div className="p-3 bg-slate-900 border-t border-slate-850 space-y-2.5">
              <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                Fast Exec Shortcuts
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "Help Guide", cmd: "help" },
                  { label: "About Riham", cmd: "about" },
                  { label: "Tech Matrix", cmd: "matrix" },
                  { label: "Contact channels", cmd: "contact" },
                  { label: "Purge Logs", cmd: "clear" }
                ].map((macro, idx) => (
                  <button
                    key={idx}
                    onClick={() => runMobileCommand(macro.cmd)}
                    className="px-2.5 py-1 rounded bg-slate-950 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-800/40 text-[10px] font-mono text-indigo-400 font-semibold cursor-pointer transition-all active:scale-95"
                  >
                    {macro.cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Input keyboard submission form */}
            <form onSubmit={handleManualSubmit} className="p-4 bg-slate-950 border-t border-slate-900 flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-base font-bold animate-pulse">$</span>
              <input
                id="mobile-cli-input"
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command parameters here..."
                className="bg-transparent flex-1 focus:outline-none font-mono text-xs text-slate-200"
              />
              <button 
                type="submit" 
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-mono font-bold uppercase transition-all"
              >
                Send
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ELITE BOTTOM SAFE AREA APP NAVIGATION BAR TAB SWITCHER */}
      <div className="fixed bottom-0 inset-x-0 bg-slate-950/95 backdrop-blur-lg border-t border-slate-900/90 py-2.5 px-4 z-40 flex items-center justify-around text-slate-400">
        {[
          { tab: 'home' as const, label: 'Identity', icon: Compass },
          { tab: 'projects' as const, label: 'Projects', icon: Code2 },
          { tab: 'research' as const, label: 'Research', icon: MessageSquareCode },
          { tab: 'labs' as const, label: 'Data Lab', icon: Layers },
          { tab: 'connect' as const, label: 'Connect', icon: Mail }
        ].map((item) => {
          const isSelected = activeTab === item.tab;
          const IconComponent = item.icon;
          return (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className="flex flex-col items-center gap-1 cursor-pointer select-none transition-colors relative outline-none"
            >
              {isSelected && (
                <motion.span 
                  layoutId="mobileActiveTabGlow"
                  className="absolute -top-1 px-4 py-3 bg-indigo-500/10 rounded-full blur-sm -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                />
              )}
              <IconComponent className={`w-5 h-5 transition-transform duration-200 ${isSelected ? 'text-indigo-400 scale-110' : 'text-slate-500 hover:text-slate-350'}`} />
              <span className={`text-[9px] font-mono tracking-tight font-extrabold ${isSelected ? 'text-indigo-300 font-bold' : 'text-slate-550'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
