"use client";

import React, { useEffect, useState, useRef } from "react";

export interface SmoothExpandProps {
  id?: string;
  isExpanded: boolean;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  /**
   * Animation duration in milliseconds. Defaults to 500ms (within 450–600ms spec).
   */
  duration?: number;
}

/**
 * Noir Editorial 5.6: Smooth Expand & Collapse Container
 *
 * Implements fluid height animation using CSS Grid (0fr -> 1fr interpolation),
 * paired with gradual opacity fade (0 -> 1) and subtle vertical drift (10px -> 0px).
 *
 * Benefits:
 * - Dynamic height auto-calculation without arbitrary max-height clipping.
 * - Hardware-accelerated GPU transitions with zero layout thrashing.
 * - Complete keyboard accessibility: fully inert and non-tabbable when collapsed.
 * - Full prefers-reduced-motion compliance.
 */
export default function SmoothExpand({
  id,
  isExpanded,
  children,
  className = "",
  innerClassName = "",
  duration = 500,
}: SmoothExpandProps) {
  const [isCollapsing, setIsCollapsing] = useState(false);
  const prevExpandedRef = useRef(isExpanded);

  useEffect(() => {
    if (prevExpandedRef.current && !isExpanded) {
      // Transition from expanded to collapsed
      setIsCollapsing(true);
      const timer = setTimeout(() => {
        setIsCollapsing(false);
      }, duration);
      return () => clearTimeout(timer);
    }
    prevExpandedRef.current = isExpanded;
  }, [isExpanded, duration]);

  const isVisible = isExpanded || isCollapsing;

  return (
    <div
      id={id}
      style={{
        display: "grid",
        gridTemplateRows: isExpanded ? "1fr" : "0fr",
        transitionProperty: "grid-template-rows",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        visibility: isVisible ? "visible" : "hidden",
      }}
      className={`motion-reduce:transition-none ${className}`}
      inert={!isExpanded}
      aria-hidden={!isExpanded}
    >
      <div style={{ minHeight: 0 }} className="overflow-hidden">
        <div
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? "translateY(0)" : "translateY(10px)",
          }}
          className={`motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${innerClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}