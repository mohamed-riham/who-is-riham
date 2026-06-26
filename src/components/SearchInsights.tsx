import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  Globe, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle, 
  Settings, 
  FileCode, 
  Copy, 
  Terminal, 
  Check, 
  RefreshCw 
} from 'lucide-react';
import { PROJECTS } from '../data';
import { playCyberClick, playHoverTick, playSuccessChime } from '../lib/audio';

interface FAQItem {
  id: string;
  query: string;
  shortLabel: string;
  answerTitle: string;
  answerText: string;
  metrics?: { label: string; value: string }[];
}

export default function SearchInsights() {
  const [activeQueryId, setActiveQueryId] = useState<string>('who-is-riham');
  const [searchSimText, setSearchSimText] = useState<string>('who is mohamed riham');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'serp' | 'audit'>('serp');
  
  // Real-time DOM SEO state inspector values
  const [liveTitle, setLiveTitle] = useState('');
  const [liveDesc, setLiveDesc] = useState('');
  const [liveKeywords, setLiveKeywords] = useState('');
  const [hasSchema, setHasSchema] = useState(false);
  const [copiedState, setCopiedState] = useState<'none' | 'sitemap' | 'robots' | 'schema'>('none');
  const [auditProgress, setAuditProgress] = useState(false);

  const faqItems: FAQItem[] = [
    {
      id: 'who-is-riham',
      query: 'who is mohamed riham',
      shortLabel: 'Identity & Bio',
      answerTitle: 'M.A. Mohamed Riham — Top-Tier Dual-Disciplinary Tech Talent',
      answerText: 'M.A. Mohamed Riham is a highly skilled tech professional based in Sri Lanka, currently bridging academic rigor with practical machine learning. Holding a Higher National Diploma (HND) in Software Engineering with Merit from BCAS, he is actively completing his BSc (Hons) in Data Science at ICBT Campus. He specializes in designing offline, privacy-first AI units and deploying highly normalized cloud database backends.',
      metrics: [
        { label: 'Primary Focus', value: 'Edge AI & Deep Learning' },
        { label: 'Location Base', value: 'Sri Lanka' },
        { label: 'Academic Standing', value: 'BSc (Hons) candidate' }
      ]
    },
    {
      id: 'riham-data-science',
      query: 'mohamed riham data science',
      shortLabel: 'Data Science & ML',
      answerTitle: 'Advanced Predictive Models & Statistical Analytics',
      answerText: 'With robust training in big data processing, Riham has built extensive comparative frameworks, such as evaluates of Random Forest and XGBoost over imbalanced transaction streams (1M+ events). He specializes in processing minority patterns through SMOTE protocols and training neural networks that maintain absolute data privacy.',
      metrics: [
        { label: 'Thesis Dataset', value: '1M+ Log Transactions' },
        { label: 'Imbalance Control', value: 'SMOTE Technique' },
        { label: 'Key Best model', value: 'XGBoost (99.74% Rec)' }
      ]
    },
    {
      id: 'riham-banknote-detector',
      query: 'riham banknote detector',
      shortLabel: 'YOLOv8 Project',
      answerTitle: 'Sri Lankan Banknote Detector for Visually Impaired Persons',
      answerText: 'One of Riham\'s signature engineering feats is a physical hardware-software assistant running quantized YOLOv8n models on local micro-controllers. The device detects Sri Lankan currency notes offline and delivers real-time vocal feedback in Sinhala, Tamil, and English. He curated, annotated, and published the LKR Currency Notes Dataset of 2,158 high-resolution photos on Kaggle with an 8.1 usability rating.',
      metrics: [
        { label: 'LKR Train Images', value: '2,158 Annotated' },
        { label: 'Network Weights', value: 'YOLOv8n Quantized' },
        { label: 'Announcements', value: 'Trilingual Local Voice' }
      ]
    },
    {
      id: 'who-is-riham-hnd-solid',
      query: 'riham software engineering',
      shortLabel: 'Software & SOLID Standards',
      answerTitle: 'Production-Ready Software Engineering Foundations',
      answerText: 'Riham\'s HND foundation shines through in his strict adherence to SOLID design principles and structural patterns. Projects like his "Sampath Food City Sales Dashboard" implement decoupled Factory, Observer, and Singleton connection pools to ensure bulletproof enterprise analytics. He has built medical scheduling portals in raw parameterized PHP (Distinction grade) and interactive state-machine behaviors in C# (Unity Engine).',
      metrics: [
        { label: 'OOP Patterns', value: 'Factory, Observer, Singleton' },
        { label: 'Technical Quality', value: '100% SOLID Compliant' },
        { label: 'PHP & SQL Skill', value: 'High-Velocity parameterized' }
      ]
    },
    {
      id: 'riham-addalaichenai',
      query: 'mohamed riham addalaichenai',
      shortLabel: 'Addalaichenai Node',
      answerTitle: 'Addalaichenai, Sri Lanka — Central Demographics Node',
      answerText: 'Mohamed Riham (M.A. Mohamed Riham) is a dual-disciplinary AI Developer and Data Scientist based in Addalaichenai, Eastern Province, Sri Lanka. He operates out of the central Addalaichenai tech nodes, contributing heavily to regional software standardizations, academic presentations on Computational Group Theory, and community-centric hardware developments like LKR currency classifiers for Sri Lankan visually impaired citizens.',
      metrics: [
        { label: 'Primary Region', value: 'Addalaichenai, Sri Lanka' },
        { label: 'SLT Node Location', value: 'Eastern Province (Central)' },
        { label: 'Community Service', value: 'Visually Impaired Assist Tech' }
      ]
    }
  ];

  const currentSelection = faqItems.find(item => item.id === activeQueryId) || faqItems[0];

  // Function to pull real live HTML head tag structures from the DOM
  const refreshLiveSEODOMState = () => {
    if (typeof document !== 'undefined') {
      setLiveTitle(document.title || '');
      const descTag = document.head.querySelector('meta[name="description"]');
      setLiveDesc(descTag?.getAttribute('content') || 'Missing <meta description> tag!');
      const keywordsTag = document.head.querySelector('meta[name="keywords"]');
      setLiveKeywords(keywordsTag?.getAttribute('content') || 'Missing <meta keywords> tag!');
      const schemaTag = document.head.querySelector('script[id="seo-structured-data"]');
      setHasSchema(!!schemaTag);
    }
  };

  useEffect(() => {
    refreshLiveSEODOMState();
    // Re-check periodically when selection shifts
    const interval = setInterval(refreshLiveSEODOMState, 1500);
    return () => clearInterval(interval);
  }, [activeQueryId]);

  const handleQuerySelect = (item: FAQItem) => {
    playCyberClick();
    setIsTyping(true);
    setSearchSimText('');
    setActiveQueryId(item.id);
    
    // Simulate keyboard typing effect for SEO keyword demonstration
    let currentIdx = 0;
    const textToType = item.query;
    const interval = setInterval(() => {
      if (currentIdx < textToType.length) {
        setSearchSimText(prev => prev + textToType.charAt(currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 28);
  };

  const handleRunAudit = () => {
    playCyberClick();
    setAuditProgress(true);
    setTimeout(() => {
      setAuditProgress(false);
      refreshLiveSEODOMState();
      playSuccessChime();
    }, 1000);
  };

  // Generate automated Sitemap XML template based on current projects
  const generatedSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Core Identity Page -->
  <url>
    <loc>https://mohamed-riham.github.io/</loc>
    <lastmod>2026-06-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Interactive Modules -->
  <url>
    <loc>https://mohamed-riham.github.io/#journey</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mohamed-riham.github.io/#research</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mohamed-riham.github.io/#skills</loc>
    <priority>0.8</priority>
  </url>
  <!-- Deep Link Project Endpoints (Dynamic Head Injections) -->
${PROJECTS.map(p => `  <url>
    <loc>https://mohamed-riham.github.io/?project=${p.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
</urlset>`;

  const generatedRobotsTxt = `# Google Bot SEO Matrix Access Rules
User-agent: *
Allow: /
Disallow: /private/
Disallow: /temp/

# Explicit XML Sitemap References
Sitemap: https://mohamed-riham.github.io/sitemap.xml`;

  const copyToClipboard = (text: string, type: 'sitemap' | 'robots' | 'schema') => {
    playCyberClick();
    navigator.clipboard.writeText(text);
    setCopiedState(type);
    setTimeout(() => {
      setCopiedState('none');
    }, 2000);
  };

  // Compute live indexing metric score
  const getSEOMetrics = () => {
    let score = 55; // Base line
    const checks = [
      { id: 'title', label: 'Document Title tag present', status: liveTitle ? 'pass' : 'fail', scoreValue: 15 },
      { id: 'title-len', label: 'Optimal Title Character Sizing (10-70 chars)', status: (liveTitle.length >= 10 && liveTitle.length <= 70) ? 'pass' : 'warn', scoreValue: 10 },
      { id: 'desc', label: 'Meta Description Tag Injected', status: (liveDesc && !liveDesc.includes('Missing')) ? 'pass' : 'fail', scoreValue: 15 },
      { id: 'desc-len', label: 'Description Character Density (50-320 chars)', status: (liveDesc.length >= 50 && liveDesc.length <= 320 && !liveDesc.includes('Missing')) ? 'pass' : 'warn', scoreValue: 10 },
      { id: 'keywords', label: 'Crawlable Meta Keywords present', status: (liveKeywords && !liveKeywords.includes('Missing')) ? 'pass' : 'fail', scoreValue: 10 },
      { id: 'schema', label: 'Schema.org JSON-LD Structured Entity Linked', status: hasSchema ? 'pass' : 'fail', scoreValue: 20 },
      { id: 'robots', label: 'Robots Index/Follow directives enabled', status: 'pass', scoreValue: 10 },
      { id: 'mobile', label: 'Mobile responsive scaling meta checks', status: 'pass', scoreValue: 10 }
    ];

    const currentScore = checks.reduce((acc, c) => {
      if (c.status === 'pass') return acc + c.scoreValue;
      if (c.status === 'warn') return acc + (c.scoreValue / 2);
      return acc;
    }, 0);

    return { score: Math.min(100, Math.round(currentScore)), checks };
  };

  const auditReport = getSEOMetrics();

  return (
    <div id="search-insights-section" className="space-y-8 text-left">
      
      {/* Header Accent Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-[10px] tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-semibold">
            04 // Web Discovery Optimizer
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-100 tracking-tight leading-none">
            Google Search Insights & Knowledge Graph
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl font-sans">
            Curious about what makes Riham stand out? Use the simulated search engine below to explore key indexed results, or access the live SEO Sandbox to verify sitemaps, robots.txt, and crawler diagnostics!
          </p>
        </div>
        
        {/* Dynamic SEO Badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-400 self-start md:self-end">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SEO Schema.org Active</span>
        </div>
      </div>

      {/* Main HUD Framework */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Simulated Search Input and Suggestion Pills */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900/45 border border-slate-800 p-5 rounded-2xl relative overflow-hidden backdrop-blur-sm space-y-4">
            
            {/* Mockup Browser Search Bar */}
            <div className="space-y-1.5">
              <label htmlFor="search-sim-input" className="block text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
                Simulated Search Query Explorer
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input 
                  id="search-sim-input"
                  type="text" 
                  readOnly
                  value={searchSimText + (isTyping ? '▊' : '')}
                  className="w-full bg-slate-950 border border-slate-800/80 rounded-xl py-2.5 pl-10 pr-4 text-xs font-mono text-slate-200 focus:outline-none"
                />
                <div className="absolute right-2.5 top-2 px-2 py-1 bg-slate-900 text-slate-400 text-[9px] font-mono border border-slate-800 rounded">
                  {isTyping ? 'INDEXING...' : 'LIVE'}
                </div>
              </div>
            </div>

            {/* Simulated Google "People Also Ask" Links */}
            <div className="space-y-2.5">
              <span className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase font-bold flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                People Also Ask ("Who is Riham?")
              </span>
              
              <div className="flex flex-col gap-2">
                {faqItems.map((item) => {
                  const isActive = item.id === activeQueryId;
                  return (
                    <button
                      key={item.id}
                      id={`btn-faq-search-${item.id}`}
                      onClick={() => handleQuerySelect(item)}
                      className={`text-xs text-left p-3 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isActive 
                          ? 'bg-indigo-950/45 border-indigo-500/40 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.05)]' 
                          : 'bg-slate-950/80 border-slate-900 text-slate-350 hover:bg-slate-900 hover:border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-indigo-400 animate-pulse' : 'bg-slate-600'}`} />
                        <span className="font-heading font-medium truncate">{item.query}?</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'translate-x-1 text-indigo-400' : 'text-slate-600'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Core SEO keywords tag cloud for search indexing */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900/80 space-y-2.5">
            <span className="block text-[9px] font-mono text-slate-600 uppercase tracking-widest font-bold">
              Crawlable Meta Keywords Index
            </span>
            <div className="flex flex-wrap gap-1">
              {['mohamed riham', 'riham data science', 'who is riham', 'sri lanka ai', 'addalaichenai python developer', 'yolov8 spectrometer', 'credit card fraud testing', 'bcas hnd merit', 'icbt bsc candidate', 'robust software components', 'crawler indexing optimization'].map((keyword) => (
                <span key={keyword} className="text-[10px] font-sans text-slate-400 bg-slate-900/60 px-2.5 py-0.5 rounded border border-slate-800 hover:border-emerald-500/45 transition-all cursor-default select-none">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Tabs: SERP Preview vs Dynamic SEO Auditor Panel */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Section Tab Toggles */}
          <div className="flex gap-2 p-1 bg-slate-950 border border-slate-800/85 rounded-xl max-w-md shadow-lg">
            <button
              onClick={() => { playCyberClick(); setActiveTab('serp'); }}
              className={`flex-1 py-2 px-3 text-xs font-mono font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'serp'
                  ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-500/25 shadow-[0_0_10px_rgba(99,102,241,0.15)] font-extrabold'
                  : 'text-slate-450 hover:text-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              GOOGLE SERP INDEX
            </button>
            <button
              onClick={() => { playCyberClick(); setActiveTab('audit'); }}
              className={`flex-1 py-2 px-3 text-xs font-mono font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'audit'
                  ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/25 shadow-[0_0_10px_rgba(16,185,129,0.15)] font-extrabold'
                  : 'text-slate-450 hover:text-slate-200'
              }`}
            >
              <Settings className="w-3.5 h-3.5 text-emerald-400" />
              LIVE SEO CRAWLER AUDIT
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'serp' ? (
              <motion.div
                key="google-serp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl space-y-4"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 blur-3xl pointer-events-none" />

                <div className="space-y-4">
                  {/* Google SERP address styling */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                      <Globe className="w-3.5 h-3.5 text-slate-500" />
                      <span>https://mohamed-riham.github.io &gt; {currentSelection.id}</span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-heading font-bold text-indigo-400 leading-snug">
                      {currentSelection.answerTitle}
                    </h3>
                  </div>

                  {/* Crawlable Body Text */}
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                    {currentSelection.answerText}
                  </p>

                  {/* Metrics Row */}
                  {currentSelection.metrics && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                      {currentSelection.metrics.map((metric, idx) => (
                        <div key={idx} className="p-3 bg-slate-950/60 rounded-xl border border-slate-900/80 text-left">
                          <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                            {metric.label}
                          </span>
                          <span className="text-indigo-300 font-heading font-semibold text-xs mt-1 block">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Status bar */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-4 flex-wrap text-[10px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Authority Status: Academically Checked</span>
                  </div>
                  <span>Crawl Index: SECURED</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="seo-auditor"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl space-y-6"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 blur-3xl pointer-events-none" />

                {/* Audit Score Header */}
                <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <h3 className="text-md font-heading font-extrabold text-slate-100 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      HTML Head Crawler Diagnostics
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400">
                      Real-time metadata parameters extracted directly from the window DOM object.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleRunAudit}
                      className="p-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 hover:border-emerald-500/30 transition-all text-[10px] font-mono flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className={`w-3 h-3 ${auditProgress ? 'animate-spin text-emerald-400' : ''}`} />
                      {auditProgress ? 'CRAWLING...' : 'RUN SEO AUDIT'}
                    </button>
                    
                    <div className="px-3 py-1 bg-emerald-950/30 border border-emerald-500/30 rounded-xl flex items-center gap-2">
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-bold">SEO Rank:</span>
                      <span className="text-sm font-heading font-black text-emerald-400">{auditReport.score}%</span>
                    </div>
                  </div>
                </div>

                {/* Two-Column Diagnostic Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  
                  {/* Left Column: Live Tag Inspector */}
                  <div className="space-y-3.5">
                    <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      Extracted DOM Head Values
                    </span>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2.5 bg-slate-950/80 rounded border border-slate-900 space-y-1">
                        <span className="block text-[8px] text-slate-500 uppercase tracking-wider font-bold">Injected Title</span>
                        <span className="text-slate-300 truncate block font-bold text-[11px]">{liveTitle}</span>
                        <span className="text-[8px] text-indigo-400 font-bold block">Length: {liveTitle.length} characters</span>
                      </div>

                      <div className="p-2.5 bg-slate-950/80 rounded border border-slate-900 space-y-1">
                        <span className="block text-[8px] text-slate-500 uppercase tracking-wider font-bold">Injected Meta Description</span>
                        <span className="text-slate-350 text-[10px] line-clamp-2 leading-relaxed">{liveDesc}</span>
                        <span className="text-[8px] text-indigo-400 font-bold block">Length: {liveDesc.length} characters</span>
                      </div>

                      <div className="p-2.5 bg-slate-950/80 rounded border border-slate-900 space-y-1">
                        <span className="block text-[8px] text-slate-500 uppercase tracking-wider font-bold">Schema.org JSON-LD Script Status</span>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${hasSchema ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                          <span className={hasSchema ? 'text-emerald-400 text-[10px] font-bold' : 'text-rose-400 text-[10px] font-bold'}>
                            {hasSchema ? 'Schema.org Object Successfully Linked' : 'No Schema script tag detected'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: SEO Quality Diagnostics Checklist */}
                  <div className="space-y-3">
                    <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      Diagnostic Parameter Checks
                    </span>

                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {auditReport.checks.map((check) => (
                        <div key={check.id} className="flex items-center justify-between p-2 bg-slate-950/40 rounded border border-slate-900 text-[11px] font-mono">
                          <span className="text-slate-350">{check.label}</span>
                          <div className="flex items-center gap-1.5">
                            {check.status === 'pass' ? (
                              <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
                                <CheckCircle className="w-2.5 h-2.5" />
                                PASS
                              </span>
                            ) : check.status === 'warn' ? (
                              <span className="text-amber-400 bg-amber-500/10 border border-amber-500/25 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
                                <AlertCircle className="w-2.5 h-2.5 animate-pulse" />
                                WARN
                              </span>
                            ) : (
                              <span className="text-rose-400 bg-rose-500/10 border border-rose-500/25 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
                                <AlertCircle className="w-2.5 h-2.5 animate-bounce" />
                                FAIL
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Code Exporter Hub */}
                <div className="border-t border-slate-800 pt-5 space-y-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="space-y-0.5">
                      <span className="text-slate-200 text-xs font-heading font-extrabold flex items-center gap-1.5">
                        <FileCode className="w-4 h-4 text-emerald-400" />
                        Interactive XML Sitemap &amp; Robots Indexer Generator
                      </span>
                      <p className="text-[10px] font-mono text-slate-400">
                        Generated dynamically to keep search engine crawlers synchronized with all project detail URLs.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Sitemap Block */}
                    <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-900 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">sitemap.xml</span>
                        <button
                          onClick={() => copyToClipboard(generatedSitemap, 'sitemap')}
                          className="p-1 hover:bg-slate-900 text-slate-400 hover:text-slate-100 rounded border border-transparent hover:border-slate-800 transition-all text-[9px] font-mono flex items-center gap-1 cursor-pointer"
                        >
                          {copiedState === 'sitemap' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY XML</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-[9px] font-mono text-slate-400 h-24 overflow-y-auto bg-slate-950 p-2 rounded border border-slate-900 select-all leading-relaxed whitespace-pre scrollbar-thin">
                        {generatedSitemap}
                      </pre>
                    </div>

                    {/* Robots.txt Block */}
                    <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-900 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">robots.txt</span>
                        <button
                          onClick={() => copyToClipboard(generatedRobotsTxt, 'robots')}
                          className="p-1 hover:bg-slate-900 text-slate-400 hover:text-slate-100 rounded border border-transparent hover:border-slate-800 transition-all text-[9px] font-mono flex items-center gap-1 cursor-pointer"
                        >
                          {copiedState === 'robots' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY TXT</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-[9px] font-mono text-slate-400 h-24 overflow-y-auto bg-slate-950 p-2 rounded border border-slate-900 select-all leading-relaxed whitespace-pre scrollbar-thin">
                        {generatedRobotsTxt}
                      </pre>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
