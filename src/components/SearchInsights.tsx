import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  User, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  GraduationCap 
} from 'lucide-react';

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
    }
  ];

  const currentSelection = faqItems.find(item => item.id === activeQueryId) || faqItems[0];

  const handleQuerySelect = (item: FAQItem) => {
    setIsTyping(true);
    setSearchSimText('');
    setActiveQueryId(item.id);
    
    // Simulate interactive keyboard typing in the search box
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

  return (
    <div id="search-insights-section" className="space-y-8 text-left">
      
      {/* Header Accent block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-[10px] tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-semibold">
            04 // Web Discovery Optimizer
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-100 tracking-tight leading-none">
            Google Search Insights & Knowledge Graph
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl font-sans">
            Curious about what makes Riham stand out? Use the simulated search engine below to explore key indexed results and query answers optimized directly for search crawlers.
          </p>
        </div>
        
        {/* Dynamic SEO Badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-400 self-start md:self-end">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SEO Schema.org Active</span>
        </div>
      </div>

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
                          ? 'bg-indigo-950/45 border-indigo-500/40 text-indigo-200' 
                          : 'bg-slate-950/80 border-slate-900 text-slate-350 hover:bg-slate-900 hover:border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-indigo-400' : 'bg-slate-600'}`} />
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
              {['mohamed riham', 'riham data science', 'who is riham', 'sri lanka', 'yolov8 spectrometer', 'credit card fraud testing', 'bcas hnd merit', 'icbt bsc candidate', 'robust software components'].map((keyword) => (
                <span key={keyword} className="text-[10px] font-sans text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: High-Fidelity Rich Snippet Detail Card (Google Knowledge Panel style) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQueryId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              id={`search-result-panel-${currentSelection.id}`}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between"
            >
              {/* Subtle top-right glow matching active index */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 blur-3xl pointer-events-none" />

              <div className="space-y-4">
                {/* Simulated Google SERP preview address */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
                    <span>https://mohamed-riham.github.io &gt; profile &gt; {currentSelection.id}</span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-heading font-bold text-indigo-400 leading-snug">
                    {currentSelection.answerTitle}
                  </h3>
                </div>

                {/* Main Body Answer Paragraph (Rich crawlable detail) */}
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                  {currentSelection.answerText}
                </p>

                {/* Dynamic Key Performance Metrics matching selection */}
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

              {/* Bot Trust Footer Annotation */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-4 flex-wrap text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Authority Status: Academically Checked</span>
                </div>
                <span>Crawl Index: SECURED</span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
