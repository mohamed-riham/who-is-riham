import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { playHoverTick, playCyberClick } from '../lib/audio';

interface Node3D {
  x: number;
  y: number;
  z: number;
  label?: string;
  color: string;
}

export default function CyberGlobe3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(0.006);
  const [activeTheme, setActiveTheme] = useState<'scarlet' | 'cyan' | 'matrix'>('scarlet');

  // Track rotational angles
  const angleY = useRef(0);
  const angleX = useRef(0.2); // slight tilt

  // Drag and hover state
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = 340;
    const height = 340;
    canvas.width = width;
    canvas.height = height;

    const radius = 100;
    const cx = width / 2;
    const cy = height / 2;

    // Define 3D locations on the globe surface (spherical coordinates -> Cartesian)
    const points: Node3D[] = [];
    const landmarks = [
      { lat: 7.2906, lon: 80.6337, label: 'Sri Lanka' }, // Sri Lanka center
      { lat: 7.2404, lon: 81.8504, label: 'Addalaichenai Nodes' }, // Addalaichenai
      { lat: 35.6762, lon: 139.6503, label: 'Tokyo Datacenter' },
      { lat: 37.7749, lon: -122.4194, label: 'California Node' },
      { lat: 51.5074, lon: -0.1278, label: 'London Hub' },
      { lat: -33.8688, lon: 151.2093, label: 'Sydney Server' }
    ];

    // Helper to map lat/lon to 3D Cartesian coordinates
    const sphericalToCartesian = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        x: r * Math.sin(phi) * Math.sin(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.cos(theta)
      };
    };

    // Add landmarks
    landmarks.forEach((landmark) => {
      const pos = sphericalToCartesian(landmark.lat, landmark.lon, radius);
      points.push({
        ...pos,
        label: landmark.label,
        color: landmark.label.includes('Sri Lanka') || landmark.label.includes('Addalaichenai') ? '#f43f5e' : '#06b6d4'
      });
    });

    // Generate randomized orbit ring satellites
    for (let i = 0; i < 8; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = radius + 24 + Math.random() * 15;
      points.push({
        x: r * Math.sin(phi) * Math.sin(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.cos(theta),
        color: 'rgba(255, 255, 255, 0.45)'
      });
    }

    // Grid wireframe definition (rings of latitude and longitude)
    const ringsLat: number[][] = [];
    const ringsLon: number[][] = [];

    // Latitude lines
    for (let lat = -70; lat <= 70; lat += 20) {
      const ring: number[] = [];
      const latRad = lat * (Math.PI / 180);
      const r_ring = radius * Math.cos(latRad);
      const y_ring = radius * Math.sin(latRad);

      for (let lon = 0; lon <= 360; lon += 15) {
        const lonRad = lon * (Math.PI / 180);
        ringsLat.push([
          r_ring * Math.sin(lonRad),
          y_ring,
          r_ring * Math.cos(lonRad)
        ]);
      }
    }

    // Longitude lines
    for (let lon = 0; lon < 180; lon += 30) {
      const lonRad = lon * (Math.PI / 180);
      for (let lat = -90; lat <= 90; lat += 10) {
        const latRad = lat * (Math.PI / 180);
        ringsLon.push([
          radius * Math.cos(latRad) * Math.sin(lonRad),
          radius * Math.sin(latRad),
          radius * Math.cos(latRad) * Math.cos(lonRad)
        ]);
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Automatic rotation
      if (autoRotate && !isDragging.current) {
        angleY.current += rotationSpeed;
        angleX.current += 0.001;
      }

      // Projection parameters
      const fov = 400; // perspective focal length

      const cosY = Math.cos(angleY.current);
      const sinY = Math.sin(angleY.current);
      const cosX = Math.cos(angleX.current);
      const sinX = Math.sin(angleX.current);

      // Rotate and project points
      const rotatePoint = (x: number, y: number, z: number) => {
        // Rotate around Y axis
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;

        // Rotate around X axis
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        // Add depth perspective
        const scale = fov / (fov + z2);
        const projX = cx + x1 * scale;
        const projY = cy + y2 * scale;

        return { projX, projY, scale, visible: z2 < 10 }; // z2 < 10 represents front-hemisphere visibility
      };

      // Draw Atmospheric Aura behind the globe
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.4, cx, cy, radius * 1.5);
      if (activeTheme === 'scarlet') {
        grad.addColorStop(0, 'rgba(244, 63, 94, 0.05)');
        grad.addColorStop(0.5, 'rgba(244, 63, 94, 0.02)');
        grad.addColorStop(1, 'transparent');
      } else if (activeTheme === 'cyan') {
        grad.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
        grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
        grad.addColorStop(1, 'transparent');
      } else {
        grad.addColorStop(0, 'rgba(16, 185, 129, 0.05)');
        grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.02)');
        grad.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Determine wireframe colors
      let wireColor = 'rgba(244, 63, 94, 0.04)'; // Scarlet
      let activeColor = '#f43f5e';
      if (activeTheme === 'cyan') {
        wireColor = 'rgba(6, 182, 212, 0.04)';
        activeColor = '#06b6d4';
      } else if (activeTheme === 'matrix') {
        wireColor = 'rgba(16, 185, 129, 0.04)';
        activeColor = '#10b981';
      }

      // Draw latitude grid lines
      ctx.strokeStyle = wireColor;
      ctx.lineWidth = 0.55;
      ctx.beginPath();
      for (let i = 0; i < ringsLat.length - 1; i++) {
        const p1 = rotatePoint(ringsLat[i][0], ringsLat[i][1], ringsLat[i][2]);
        const p2 = rotatePoint(ringsLat[i+1][0], ringsLat[i+1][1], ringsLat[i+1][2]);
        
        // Skip connecting far edges
        if (Math.abs(p1.projX - p2.projX) < 100) {
          ctx.moveTo(p1.projX, p1.projY);
          ctx.lineTo(p2.projX, p2.projY);
        }
      }
      ctx.stroke();

      // Draw longitude lines
      ctx.beginPath();
      for (let i = 0; i < ringsLon.length - 1; i++) {
        const p1 = rotatePoint(ringsLon[i][0], ringsLon[i][1], ringsLon[i][2]);
        const p2 = rotatePoint(ringsLon[i+1][0], ringsLon[i+1][1], ringsLon[i+1][2]);
        
        if (Math.abs(p1.projX - p2.projX) < 100) {
          ctx.moveTo(p1.projX, p1.projY);
          ctx.lineTo(p2.projX, p2.projY);
        }
      }
      ctx.stroke();

      // Draw interactive landmarks and nodes
      points.forEach((pt) => {
        const { projX, projY, scale, visible } = rotatePoint(pt.x, pt.y, pt.z);

        // Draw node
        ctx.beginPath();
        ctx.arc(projX, projY, (pt.label ? 4 : 2) * scale, 0, Math.PI * 2);
        
        if (pt.label) {
          ctx.fillStyle = pt.color;
          ctx.shadowColor = pt.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Add elegant radar ping circle around Addalaichenai / Sri Lanka nodes
          if (pt.label.includes('Sri Lanka') || pt.label.includes('Addalaichenai')) {
            const pulseRadius = (6 + Math.sin(Date.now() * 0.005) * 4) * scale;
            ctx.strokeStyle = pt.color;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.arc(projX, projY, pulseRadius, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Render label text with line indicators
          if (visible && scale > 0.8) {
            ctx.font = '700 8px "JetBrains Mono", monospace';
            ctx.fillStyle = '#cbd5e1';
            
            // Connect label to point with a neat offset line
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(projX + 15, projY - 12);
            ctx.lineTo(projX + 45, projY - 12);
            ctx.stroke();

            ctx.fillText(pt.label.toUpperCase(), projX + 18, projY - 15);
          }
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    // Attach dragging handlers for full 3D viewport rotate interactions
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
      playCyberClick();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      angleY.current += deltaX * 0.006;
      angleX.current += deltaY * 0.006;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animId);
    };
  }, [autoRotate, rotationSpeed, activeTheme]);

  return (
    <div className="bg-slate-950/90 rounded-2xl border border-slate-800/80 p-5 shadow-2xl relative select-none">
      {/* 3D Dashboard HUD Header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider">
            3D HoloSpace Planetarium
          </span>
        </div>
        <div className="flex gap-1">
          {(['scarlet', 'cyan', 'matrix'] as const).map((theme) => (
            <button
              key={theme}
              onClick={() => {
                playHoverTick();
                setActiveTheme(theme);
              }}
              className={`w-3.5 h-3.5 rounded-full border transition-all ${
                theme === 'scarlet'
                  ? 'bg-rose-600 border-rose-400'
                  : theme === 'cyan'
                  ? 'bg-cyan-600 border-cyan-400'
                  : 'bg-emerald-600 border-emerald-400'
              } ${activeTheme === theme ? 'scale-110 ring-2 ring-white/20' : 'opacity-40 hover:opacity-100'}`}
              title={`Switch color parameters to ${theme}`}
            />
          ))}
        </div>
      </div>

      {/* Main 3D Interactive Canvas Area */}
      <div className="relative flex justify-center items-center bg-slate-900/40 rounded-xl border border-slate-850/50 p-2 cursor-grab active:cursor-grabbing overflow-hidden h-72">
        <canvas ref={canvasRef} className="w-full h-full max-w-[280px] max-h-[280px]" />
        
        {/* Parallax Overlay Rings */}
        <div className="absolute inset-0 border border-slate-900/10 rounded-full scale-95 pointer-events-none animate-spin-slow" />
        <div className="absolute inset-0 border border-slate-900/5 rounded-full scale-105 pointer-events-none animate-spin" style={{ animationDuration: '24s' }} />

        {/* Dynamic Telemetry Legend overlay */}
        <div className="absolute bottom-3 right-3 text-right">
          <p className="text-[7.5px] font-mono text-cyan-400 leading-none">LON: 81.85° E</p>
          <p className="text-[7.5px] font-mono text-rose-400 mt-1 leading-none">LAT: 7.24° N</p>
          <p className="text-[6.5px] font-mono text-slate-500 mt-1 uppercase font-bold">[Addalaichenai Sri Lanka]</p>
        </div>
        
        <div className="absolute top-3 left-3 flex flex-col gap-0.5 pointer-events-none">
          <p className="text-[7.5px] font-mono text-slate-400">FPS: 60.00</p>
          <p className="text-[7.5px] font-mono text-slate-500 uppercase">SYS_GRID_L2_ACTIVE</p>
        </div>
      </div>

      {/* Interactive Rotational Controllers */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-mono">
        <button
          onClick={() => {
            playCyberClick();
            setAutoRotate(!autoRotate);
          }}
          className={`py-1.5 px-3 rounded-lg border text-center transition-all cursor-pointer ${
            autoRotate
              ? 'bg-rose-950/30 text-rose-400 border-rose-500/40'
              : 'bg-slate-900 hover:bg-slate-850 text-slate-400 border-slate-800'
          }`}
        >
          {autoRotate ? '■ STOP ORBIT' : '▶ RESUME ORBIT'}
        </button>
        <button
          onClick={() => {
            playCyberClick();
            setRotationSpeed((prev) => (prev > 0.01 ? 0.003 : prev + 0.003));
          }}
          className="py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 border border-slate-800 text-center transition-all cursor-pointer"
        >
          ⟫ ORBIT VELOCITY
        </button>
      </div>
    </div>
  );
}
