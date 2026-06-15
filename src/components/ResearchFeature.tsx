import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Database, 
  Settings, 
  Dna, 
  TrendingUp, 
  FileText, 
  FileSpreadsheet,
  Award,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { RESEARCH_DATA, RESEARCH_PRESENTATIONS } from '../data';

export default function ResearchFeature() {
  const [smoteMultiplier, setSmoteMultiplier] = useState(1);
  const [selectedMetric, setSelectedMetric] = useState<string>('Recall');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Interactive SMOTE mathematics
  const originalLegitimateCount = 994800; // 99.48% of 1M
  const originalFraudCount = 5200; // 0.52% of 1M
  
  // Calculate synthetic projections
  const syntheticFraudSynthesized = Math.round(originalFraudCount * smoteMultiplier * 15);
  const totalFraudCount = originalFraudCount + syntheticFraudSynthesized;
  const simulatedImbalancePercentage = ((totalFraudCount / (originalLegitimateCount + totalFraudCount)) * 100).toFixed(2);

  return (
    <div 
      id="research-feature-root" 
      onMouseMove={handleMouseMove}
      className="group bg-slate-900/40 rounded-xl border border-slate-800 p-6 md:p-8 space-y-8 relative overflow-hidden backdrop-blur-md"
    >
      {/* Dynamic Hover Spotlight Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.015), transparent 75%)`,
        }}
      />
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      {/* Title Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Kaggle-Linked Academic Research
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-100 leading-snug">
            {RESEARCH_DATA.title}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm">
            {RESEARCH_DATA.scope}
          </p>
        </div>

        {/* Presentation Download Action */}
        <div className="flex flex-wrap gap-2">
          <a
            id="research-presentation-slides"
            href="https://www.slideshare.net/mohamed-riham/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-950 border border-slate-800 hover:border-slate-700 rounded text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-blue-400" />
            <span>View Slides on SlideShare</span>
          </a>
        </div>
      </div>

      {/* Academic Panel Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-950/65 rounded-lg border border-slate-900 relative z-10">
        <div className="space-y-0.5">
          <span className="block text-[10px] uppercase font-mono text-slate-500 tracking-wider">Student ID Reference</span>
          <span className="text-sm font-semibold font-mono text-indigo-300">ID: 1028401</span>
        </div>
        <div className="space-y-0.5">
          <span className="block text-[10px] uppercase font-mono text-slate-500 tracking-wider">HND Course Batch</span>
          <span className="text-sm font-semibold font-mono text-indigo-300">Computing (Batch 21)</span>
        </div>
        <div className="space-y-0.5">
          <span className="block text-[10px] uppercase font-mono text-slate-500 tracking-wider">Academic Supervisor</span>
          <span className="text-sm font-semibold font-mono text-slate-100">{RESEARCH_DATA.supervisor}</span>
        </div>
        <div className="space-y-0.5">
          <span className="block text-[10px] uppercase font-mono text-slate-500 tracking-wider">Independent Assessor</span>
          <span className="text-sm font-semibold font-mono text-slate-100">{RESEARCH_DATA.assessor}</span>
        </div>
      </div>

      {/* Two-Column Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Side: Dynamic SMOTE Over-sampling Simulation */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Dna className="w-4 h-4 text-cyan-400" />
              1. Class Imbalance Mitigation Simulation
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              When dealing with over 1 Million transactions, fraud comprises only <span className="text-rose-400 font-mono font-semibold">0.52%</span> of raw logs. Without oversampling, modeling engines optimize for the majority class, creating massive false negatives. This slide rule demonstrates the <span className="text-indigo-300 font-semibold font-mono">SMOTE process</span>, generating synthetic features within vectors:
            </p>

            {/* Interactive Slider Input */}
            <div className="space-y-3 p-4 bg-slate-950 p-4 rounded-lg border border-slate-900">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">SMOTE Synthesis Ratio:</span>
                <span className="text-indigo-400 font-semibold">x{smoteMultiplier} Factor</span>
              </div>
              <input 
                id="smote-multiplier-slider"
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={smoteMultiplier} 
                onChange={(e) => setSmoteMultiplier(Number(e.target.value))}
                className="w-full accent-indigo-500 bg-slate-800 rounded-lg cursor-pointer h-1.5"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-600">
                <span>Minimal (Standard)</span>
                <span>Structured Balance Boundary (100% Synthetic Multi-Match)</span>
              </div>
            </div>

            {/* Simulated Live Stat Panels */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs font-mono">
              <div className="p-3 bg-slate-950/60 rounded border border-slate-900">
                <span className="block text-[10px] text-slate-500 uppercase">Original Fraud (0.52%)</span>
                <span className="text-slate-200 font-semibold">{originalFraudCount.toLocaleString()} Vectors</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded border border-slate-900">
                <span className="block text-[10px] text-slate-500 uppercase">Synthesized Points</span>
                <span className="text-cyan-400 font-semibold">+{syntheticFraudSynthesized.toLocaleString()} Synthesized</span>
              </div>
              <div className="col-span-2 md:col-span-1 p-3 bg-indigo-950/20 rounded border border-indigo-900/30 text-center md:text-left">
                <span className="block text-[10px] text-slate-500 uppercase">Balanced Ratio</span>
                <span className="text-indigo-300 font-semibold">{simulatedImbalancePercentage}% Training</span>
              </div>
            </div>

            {/* Graphical Class Dots representation */}
            <div className="h-28 bg-slate-950 rounded-lg border border-slate-900/80 p-3 relative overflow-hidden flex flex-col justify-end">
              <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-600 uppercase">Algorithmic Vector Boundary Map</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">Live SMOTE Simulation Visual</div>
              
              {/* Grid representation */}
              <div className="flex-1 grid grid-cols-12 gap-1 items-center justify-items-center opacity-85">
                {/* Legitimate vectors */}
                {Array.from({ length: 24 }).map((_, idx) => (
                  <motion.div 
                    key={`legit-${idx}`} 
                    initial={{ scale: 0.2, opacity: 0.3 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.01, type: "spring", stiffness: 200, damping: 12 }}
                    className="w-2 h-2 rounded-full bg-slate-700/80 border border-slate-800" 
                    title="Legitimate Node" 
                  />
                ))}
                
                {/* Original Fraud */}
                {Array.from({ length: 4 }).map((_, idx) => (
                  <motion.div 
                    key={`fraud-${idx}`} 
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5 + idx * 0.2,
                      repeatType: "reverse"
                    }}
                    className="w-2 h-2 rounded-full bg-rose-500 border border-rose-600 shadow-[0_0_8px_rgba(239,68,68,0.7)]" 
                    title="Actual Fraud Node" 
                  />
                ))}

                {/* Simulated Synthetic Points */}
                <AnimatePresence mode="popLayout">
                  {Array.from({ length: Math.min(18, smoteMultiplier * 2) }).map((_, idx) => (
                    <motion.div 
                      key={`synth-${idx}`} 
                      initial={{ scale: 0, opacity: 0, rotate: -45 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15,
                        delay: idx * 0.015 
                      }}
                      className="w-2 h-2 rounded-full bg-cyan-400 border border-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                      title="Synthesized Point" 
                    />
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-900">
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[9px] font-mono">
                  <span className="flex items-center gap-1 text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" /> Legitimate (0.52%)
                  </span>
                  <span className="flex items-center gap-1 text-rose-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Actual Fraud
                  </span>
                  <span className="flex items-center gap-1 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Synthetic (SMOTE Generated)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Comparative Scientific Metrics Panel */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              2. Algorithmic Comparison & Statistical Significance
            </h4>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard decision mechanisms fail to classify fraud precisely even after sampling. Riham compared an ensemble bagging model (<strong className="text-indigo-400">Random Forest</strong>) against an extreme gradient boosting framework (<strong className="text-cyan-400 text-semibold">XGBoost</strong>), demonstrating statistically superior boundaries:
            </p>

            {/* Metrics Toggler */}
            <div className="flex justify-start gap-1 p-1 bg-slate-950 rounded-lg border border-slate-900">
              {RESEARCH_DATA.metrics.map((m) => (
                <button
                  key={m.metric}
                  id={`btn-metric-type-${m.metric}`}
                  onClick={() => setSelectedMetric(m.metric)}
                  className={`flex-1 text-center py-1.5 px-2 rounded-md font-mono text-[11px] font-semibold transition-all cursor-pointer ${selectedMetric === m.metric ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {m.metric}
                </button>
              ))}
            </div>

            {/* Render selected metric comparison */}
            {RESEARCH_DATA.metrics.filter(m => m.metric === selectedMetric).map((m) => (
              <div key={m.metric} className="p-4 bg-slate-950/60 rounded-xl border border-slate-900/80 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-mono text-xs uppercase font-bold">{m.metric} Metric Face-off</span>
                  <span className="text-emerald-400 font-mono text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">{m.improvement} Advantage</span>
                </div>

                {/* Random Forest Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-end text-xs font-mono">
                    <span className="text-slate-400 font-medium">Random Forest Model</span>
                    <span className="text-slate-300 font-semibold">{m.randomForest}%</span>
                  </div>
                  <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${m.randomForest}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-slate-700 rounded-full"
                    />
                  </div>
                </div>

                {/* XGBoost Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-end text-xs font-mono">
                    <span className="text-cyan-400 font-semibold">XGBoost Model (Superior)</span>
                    <span className="text-cyan-300 font-bold">{m.xgboost}%</span>
                  </div>
                  <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${m.xgboost}%` }}
                      transition={{ duration: 1.1, ease: "backOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    />
                  </div>
                </div>

                <div className="p-2 bg-indigo-950/10 rounded border border-indigo-950/30 text-[10px] font-mono text-slate-400 leading-relaxed text-center">
                  {m.metric === 'Recall' && "Recall Advantage: In high-consequence fraud engines, missing a fraudulent transfer costs $150–$3,500 per transaction. XGBoost reduced skipped escapes to 0.26% representing massive savings in simulation audits."}
                  {m.metric === 'Accuracy' && "Accuracy Advantage: Extreme boosting algorithms leverage sequential loss boundary adjustments to minimize residuals across over 1 million test transactions."}
                  {m.metric === 'Precision' && "Precision Advantage: XGBoost limits client service call volume and consumer friction by minimizing the false alarm rate to absolute minimum boundaries."}
                  {m.metric === 'F1-Score' && "F1-Score: The harmonic mean proves XGBoost is statistically structured to avoid both recall leak and precision overhead under skewed data conditions."}
                </div>
              </div>
            ))}

            {/* Scientific Math Formula display */}
            <div className="p-3 bg-indigo-950/5 border border-indigo-900/15 rounded-lg flex items-start gap-3">
              <Award className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="block text-[11px] font-mono font-semibold text-slate-300">Hypothesis Statistical Test Results</span>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Null Hypothesis (H0) rejected with an absolute P-value = 0.0003. Calculated using McNemar's chi-squared test metric under severe class imbalance boundaries:
                </p>
                <div className="p-1 px-3 bg-slate-950/80 rounded border border-slate-900/60 inline-block font-mono text-[10px] text-indigo-300">
                  {"χ² = (|b - c| - 1)² / (b + c)  ⇒  P-value < 0.05"}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Conclusion Statement */}
      <div className="mt-6 p-4 bg-slate-950/40 rounded-lg border border-slate-900/60 text-xs flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <div className="flex items-center gap-2 font-mono text-slate-400">
          <Settings className="w-3.5 h-3.5 text-indigo-400" />
          <span>Research Conclusion: XGBoost is highly optimized for Streamlit real-time scoring platforms.</span>
        </div>
        <div className="flex gap-2">
          {RESEARCH_PRESENTATIONS.slice(0, 1).map((pres, idx) => (
            <div key={idx} className="text-[10px] text-slate-500 font-mono">
              Published on SlideShare Portfolio Node
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
