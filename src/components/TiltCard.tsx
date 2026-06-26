import * as React from 'react';
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { playHoverTick } from '../lib/audio';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function TiltCard({ children, className = '', id }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking cursor relative to element center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement with spring animations
  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  // Light flare position tracking
  const flareX = useSpring(useTransform(x, [-0.5, 0.5], ['0%', '100%']), springConfig);
  const flareY = useSpring(useTransform(y, [-0.5, 0.5], ['0%', '100%']), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized coordinate positions (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHoverTick();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {/* Dynamic Glowing Flare Layer on Hover */}
        {isHovered && (
          <motion.div
            style={{
              left: flareX,
              top: flareY,
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute w-44 h-44 bg-[radial-gradient(circle,rgba(244,63,94,0.14),rgba(6,182,212,0.04),transparent_60%)] rounded-full pointer-events-none z-20 mix-blend-screen"
          />
        )}
        
        {/* Render children inside styled card */}
        {children}
      </motion.div>
    </div>
  );
}
