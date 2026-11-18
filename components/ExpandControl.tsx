"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export interface ExpandControlProps {
  id?: string;
  isExpanded: boolean;
  onToggle: () => void;
  controlsId: string;
  /**
   * Subtle content indicator rendered above the action control
   * e.g. "SHOWING 4 OF 11 PROJECTS" or "2 FEATURED QUALIFICATIONS"
   */
  collapsedIndicator?: string;
  /**
   * Indicator when expanded
   * e.g. "ALL 11 PROJECTS DISPLAYED" or "COMPLETE ACADEMIC RECORD (4 QUALIFICATIONS)"
   */
  expandedIndicator?: string;
  /**
   * Button action label when collapsed
   * e.g. "View All 7 Remaining Projects"
   */
  collapsedLabel: string;
  /**
   * Button action label when expanded
   * e.g. "Show Fewer Projects"
   */
  expandedLabel: string;
  className?: string;
}

/**
 * Noir Editorial 5.5: Glowing Amber-Gold Expand Control
 *
 * A reusable progressive disclosure button with glowing amber-gold illumination,
 * high-contrast dark obsidian typography, fluid hover transitions, and accessible state management.
 */
export default function ExpandControl({
  id,
  isExpanded,
  onToggle,
  controlsId,
  collapsedIndicator,
  expandedIndicator,
  collapsedLabel,
  expandedLabel,
  className = "",
}: ExpandControlProps) {
  const currentIndicator = isExpanded
    ? expandedIndicator || collapsedIndicator
    : collapsedIndicator;

  return (
    <div
      id={id}
      className={`pt-10 flex flex-col items-center gap-3.5 ${className}`}
    >
      {/* Content Discovery Indicator */}
      {currentIndicator && (
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0A0503] border border-[#C43E17]/25 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#F9F9F6]/85 uppercase shadow-sm select-none"
          aria-hidden="true"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              isExpanded ? "bg-[#C43E17]" : "bg-[#C43E17] animate-pulse"
            }`}
          />
          <span>{currentIndicator}</span>
        </div>
      )}

      {/* Glowing Expansion Action Button (Noir Editorial 7.0: Burnt Orange & Obsidian) */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={controlsId}
        className={`group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 w-full sm:w-auto max-w-md text-xs sm:text-[13px] font-mono font-bold tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C43E17] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040202] motion-reduce:transition-none motion-reduce:hover:transform-none select-none cursor-pointer active:scale-[0.98] ${
          isExpanded
            ? "bg-[#0D0704] text-[#F9F9F6] hover:text-[#FFFFFF] border border-[#C43E17]/60 hover:border-[#C43E17] shadow-[0_0_12px_rgba(196,62,23,0.18),0_0_24px_rgba(196,62,23,0.10)] hover:shadow-[0_0_18px_rgba(196,62,23,0.35),0_0_32px_rgba(196,62,23,0.18)] active:shadow-[0_0_22px_rgba(196,62,23,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            : "bg-gradient-to-r from-[#DB4A1E] via-[#C43E17] to-[#A83311] text-[#FFFFFF] border border-[#FF5E33]/40 shadow-[0_0_14px_rgba(196,62,23,0.32),0_0_28px_rgba(196,62,23,0.16)] hover:shadow-[0_0_22px_rgba(196,62,23,0.55),0_0_42px_rgba(196,62,23,0.28)] active:shadow-[0_0_26px_rgba(196,62,23,0.65)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0"
        }`}
      >
        {/* Micro-accent diamond */}
        <span
          className={`w-1.5 h-1.5 rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded
              ? "bg-[#C43E17] group-hover:scale-125"
              : "bg-[#FFFFFF] group-hover:scale-125"
          }`}
          aria-hidden="true"
        />

        {/* Action text */}
        <span className="truncate transition-opacity duration-300">
          {isExpanded ? expandedLabel : collapsedLabel}
        </span>

        {/* Chevron icon with fluid 500ms rotation */}
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded
              ? "rotate-180 text-[#C43E17]"
              : "text-[#FFFFFF] group-hover:translate-y-0.5"
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
