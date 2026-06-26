import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RotateCw, 
  Sparkles, 
  Grid, 
  Shuffle, 
  RefreshCw, 
  HelpCircle,
  Binary,
  Compass,
  Layers,
  Activity
} from 'lucide-react';
import { playHoverTick, playCyberClick } from '../lib/audio';

interface Point {
  x: number;
  y: number;
  label: string;
}

export default function MathMatrixLab() {
  const [activeOp, setActiveOp] = useState<string>("identity");
  
  // Symmetrical vector points forming the letter "R" (for Riham)
  const initialPoints: Point[] = [
    { x: -2, y: -3, label: "P1" },
    { x: -2, y: 3, label: "P2" },
    { x: 1, y: 3, label: "P3" },
    { x: 2, y: 1.5, label: "P4" },
    { x: 1, y: 0, label: "P5" },
    { x: -2, y: 0, label: "P6" },
    { x: 2, y: -3, label: "P7" },
  ];

  const getTransformedPoints = (): Point[] => {
    switch (activeOp) {
      case "rotate90":
        // [ 0 -1 ] [ x ] = [ -y ]
        // [ 1  0 ] [ y ] = [  x ]
        return initialPoints.map(p => ({ x: -p.y, y: p.x, label: p.label }));
      case "rotate180":
        // [ -1  0 ] [ x ] = [ -x ]
        // [  0 -1 ] [ y ] = [ -y ]
        return initialPoints.map(p => ({ x: -p.x, y: -p.y, label: p.label }));
      case "reflectX":
        // [ 1  0 ] [ x ] = [  x ]
        // [ 0 -1 ] [ y ] = [ -y ]
        return initialPoints.map(p => ({ x: p.x, y: -p.y, label: p.label }));
      case "reflectY":
        // [ -1  0 ] [ x ] = [ -x ]
        // [  0  1 ] [ y ] = [  y ]
        return initialPoints.map(p => ({ x: -p.x, y: p.y, label: p.label }));
      case "shearX":
        // [ 1  0.5 ] [ x ] = [ x + 0.5y ]
        // [ 0   1  ] [ y ] = [   y      ]
        return initialPoints.map(p => ({ x: p.x + 0.5 * p.y, y: p.y, label: p.label }));
      case "identity":
      default:
        return initialPoints;
    }
  };

  const currentPoints = getTransformedPoints();

  const getMatrixFormula = () => {
    switch (activeOp) {
      case "rotate90":
        return {
          matrix: "┌  0  -1 ┐\n└  1   0 ┘",
          desc: "90° Counter-Clockwise Rotation Matrix. Maps (x, y) ➔ (-y, x)."
        };
      case "rotate180":
        return {
          matrix: "┌ -1   0 ┐\n└  0  -1 ┘",
          desc: "180° Point Inversion (Half-Turn) Matrix. Maps (x, y) ➔ (-x, -y)."
        };
      case "reflectX":
        return {
          matrix: "┌  1   0 ┐\n└  0  -1 ┘",
          desc: "Reflection across the X-axis (Horizontal Plane). Maps (x, y) ➔ (x, -y)."
        };
      case "reflectY":
        return {
          matrix: "┌ -1   0 ┐\n└  0   1 ┘",
          desc: "Reflection across the Y-axis (Vertical Plane). Maps (x, y) ➔ (-x, y)."
        };
      case "shearX":
        return {
          matrix: "┌  1  0.5 ┐\n└  0   1  ┘",
          desc: "Shear transformation along X-axis with k=0.5. Maps (x, y) ➔ (x + 0.5y, y)."
        };
      case "identity":
      default:
        return {
          matrix: "┌  1   0 ┐\n└  0   1 ┘",
          desc: "Identity Matrix (E-operator). Zero distortion, preserves all dimensions."
        };
    }
  };

  const activeOpDetails = getMatrixFormula();

  return (
    <div 
      id="math-matrix-laboratory-root" 
      className="bg-slate-900/40 rounded-xl border border-slate-800 p-6 md:p-8 space-y-8 relative overflow-hidden backdrop-blur-md"
    >
      {/* Background visual accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Header Panel */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-rose-950 pb-6 relative z-10">
        <div className="space-y-1.5 text-left">
          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            05 // Academic Presentation Lab
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-black text-slate-100 tracking-tight leading-none bg-gradient-to-r from-rose-500 to-cyan-300 bg-clip-text text-transparent">
            Computational Group Theory &amp; Matrix Laboratory
          </h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl font-sans">
            Reflecting Riham's scholarly syllabus deck <strong className="text-rose-400">"Why Group Theory is Essential for Computing Students"</strong>. Interactively manipulate 2D space coordinate vectors with linear transformation matrices.
          </p>
        </div>
 
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-950/85 border border-rose-900/35 rounded-lg text-[10px] font-mono text-rose-400">
          <Binary className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Framer-Motion Trigonometry</span>
        </div>
      </div>

      {/* Two-Column Grid sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left column: Visual 2D coordinate plot cartesian grid vector chart */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4 bg-slate-950/95 border border-slate-900 rounded-xl p-5 relative overflow-hidden min-h-[340px]">
          <div className="absolute top-2 left-2 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
            2D Isometric Vector Projection Map
          </div>
          
          {/* Centered Graphic Area */}
          <div className="flex-1 flex items-center justify-center py-4 relative">
            <svg 
              id="math-matrix-interactive-svg"
              width="240" 
              height="240" 
              viewBox="-50 -50 100 100" 
              className="overflow-visible select-none"
            >
              {/* Coordinate axis vertical Y */}
              <line x1="0" y1="-45" x2="0" y2="45" stroke="#1A1A1A" strokeWidth="1" />
              {/* Coordinate axis horizontal X */}
              <line x1="-45" y1="0" x2="45" y2="0" stroke="#1A1A1A" strokeWidth="1" />
              
              {/* Simple subdivision rings for visual scale */}
              <circle cx="0" cy="0" r="15" fill="none" stroke="#111111" strokeWidth="0.75" strokeDasharray="2,2" />
              <circle cx="0" cy="0" r="30" fill="none" stroke="#111111" strokeWidth="0.75" strokeDasharray="x,x" />

              {/* Axis markers */}
              <text x="3" y="-40" fill="#4B5563" fontSize="5" fontFamily="monospace">+Y Axis</text>
              <text x="35" y="6" fill="#4B5563" fontSize="5" fontFamily="monospace">+X Axis</text>

              {/* Connecting polygon vector lines with beautiful dynamic framer animation */}
              <g>
                <motion.polygon
                  id="vector-polygon-drawn"
                  points={currentPoints.map(p => `${p.x * 12},${-p.y * 12}`).join(" ")}
                  fill="rgba(59, 130, 246, 0.08)"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  animate={{ d: `M ${currentPoints.map(p => `${p.x * 12} ${-p.y * 12}`).join(" L ")} Z` }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                />
              </g>

              {/* Dynamic point coordinates node bullets */}
              {currentPoints.map((p, idx) => (
                <g key={idx}>
                  <motion.circle
                    cx={p.x * 12}
                    cy={-p.y * 12}
                    r="2.5"
                    fill={idx === 0 ? "#F43F5E" : "#22D3EE"}
                    className="cursor-pointer"
                    animate={{ cx: p.x * 12, cy: -p.y * 12 }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  />
                  {/* Floating coordinate value tooltip */}
                  <motion.text
                    x={p.x * 12 + 4}
                    y={-p.y * 12 - 4}
                    fill="#9CA3AF"
                    fontSize="4.5"
                    fontFamily="monospace"
                    animate={{ x: p.x * 12 + 4, y: -p.y * 12 - 4 }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  >
                    {`${p.label}(${p.x.toFixed(1)}, ${p.y.toFixed(1)})`}
                  </motion.text>
                </g>
              ))}
            </svg>
          </div>

          {/* Symmetrical Permutation Legend */}
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-900">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Start Node (P1)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Transformation Mesh
            </span>
            <span className="flex items-center gap-1">
              Scale factor: 1u = 12px
            </span>
          </div>
        </div>

        {/* Right column: Linear algebra mathematical matrices and controls */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-400" />
              Symmetric Group Permutations (S3/D4)
            </h4>

            {/* Matrix buttons selections */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <button
                id="btn-matrix-identity"
                onMouseEnter={playHoverTick}
                onClick={() => { playCyberClick(); setActiveOp("identity"); }}
                className={`p-3 text-left rounded-xl border text-xs font-mono transition-all flex flex-col justify-between cursor-pointer ${activeOp === "identity" ? 'bg-indigo-950/50 border-rose-500/50 text-rose-300' : 'bg-slate-950 hover:bg-slate-900 border-rose-950/30 text-slate-450 hover:text-slate-200'}`}
              >
                <span className="text-[10px] text-rose-500 block uppercase font-bold mb-1">E_OP</span>
                <span>Identity Matrix</span>
              </button>

              <button
                id="btn-matrix-rotate90"
                onMouseEnter={playHoverTick}
                onClick={() => { playCyberClick(); setActiveOp("rotate90"); }}
                className={`p-3 text-left rounded-xl border text-xs font-mono transition-all flex flex-col justify-between cursor-pointer ${activeOp === "rotate90" ? 'bg-indigo-950/50 border-rose-500/50 text-rose-300' : 'bg-slate-950 hover:bg-slate-900 border-rose-950/30 text-slate-450 hover:text-slate-200'}`}
              >
                <span className="text-[10px] text-rose-500 block uppercase font-bold mb-1">C4_R90</span>
                <span>Rotate 90° CCW</span>
              </button>

              <button
                id="btn-matrix-rotate180"
                onMouseEnter={playHoverTick}
                onClick={() => { playCyberClick(); setActiveOp("rotate180"); }}
                className={`p-3 text-left rounded-xl border text-xs font-mono transition-all flex flex-col justify-between cursor-pointer ${activeOp === "rotate180" ? 'bg-indigo-950/50 border-rose-500/50 text-rose-300' : 'bg-slate-950 hover:bg-slate-900 border-rose-950/30 text-slate-450 hover:text-slate-200'}`}
              >
                <span className="text-[10px] text-rose-500 block uppercase font-bold mb-1">C2_R180</span>
                <span>Rotate 180°</span>
              </button>

              <button
                id="btn-matrix-reflectX"
                onMouseEnter={playHoverTick}
                onClick={() => { playCyberClick(); setActiveOp("reflectX"); }}
                className={`p-3 text-left rounded-xl border text-xs font-mono transition-all flex flex-col justify-between cursor-pointer ${activeOp === "reflectX" ? 'bg-indigo-950/50 border-rose-500/50 text-rose-300' : 'bg-slate-950 hover:bg-slate-900 border-rose-950/30 text-slate-450 hover:text-slate-200'}`}
              >
                <span className="text-[10px] text-rose-500 block uppercase font-bold mb-1">σ_H</span>
                <span>Reflect X-Axis</span>
              </button>

              <button
                id="btn-matrix-reflectY"
                onMouseEnter={playHoverTick}
                onClick={() => { playCyberClick(); setActiveOp("reflectY"); }}
                className={`p-3 text-left rounded-xl border text-xs font-mono transition-all flex flex-col justify-between cursor-pointer ${activeOp === "reflectY" ? 'bg-indigo-950/50 border-rose-500/50 text-rose-300' : 'bg-slate-950 hover:bg-slate-900 border-rose-950/30 text-slate-450 hover:text-slate-200'}`}
              >
                <span className="text-[10px] text-rose-500 block uppercase font-bold mb-1">σ_V</span>
                <span>Reflect Y-Axis</span>
              </button>

              <button
                id="btn-matrix-shear"
                onMouseEnter={playHoverTick}
                onClick={() => { playCyberClick(); setActiveOp("shearX"); }}
                className={`p-3 text-left rounded-xl border text-xs font-mono transition-all flex flex-col justify-between cursor-pointer ${activeOp === "shearX" ? 'bg-indigo-950/50 border-rose-500/50 text-rose-300' : 'bg-slate-950 hover:bg-slate-900 border-rose-950/30 text-slate-450 hover:text-slate-200'}`}
              >
                <span className="text-[10px] text-rose-500 block uppercase font-bold mb-1">M_SHEAR</span>
                <span>Shear Map</span>
              </button>
            </div>
          </div>

          {/* Mathematical notation display */}
          <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl space-y-3.5 text-left">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span>Matrix Operator notation</span>
              <span className="text-indigo-400 font-bold bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 font-mono">
                Active
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-6 font-mono">
              {/* Render ASCII matrix visually */}
              <div className="bg-slate-900/60 p-3 rounded border border-slate-800 text-cyan-300 text-base leading-tight font-bold whitespace-pre">
                {activeOpDetails.matrix}
              </div>

              {/* Formula and output conversion */}
              <div className="space-y-1 text-center sm:text-left">
                <span className="block text-xs font-bold text-slate-200">
                  {activeOp === "identity" ? "Preserves coordinates intact" : `Applied conversion map`}
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans max-w-sm">
                  {activeOpDetails.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive take-away */}
          <div className="p-4 bg-indigo-950/15 border border-indigo-900/20 rounded-xl text-left flex gap-3">
            <Activity className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 leading-relaxed font-sans">
              <strong>Graphic Matrix Multiplication:</strong> In 3D games (like Riham's Unity project <em>Azirah</em>) or neural layer weight updates, vertices are rotated and translated through exactly these linear transformation pools run in parallel pipelines.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
