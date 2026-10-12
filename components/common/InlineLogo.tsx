import React from "react";

interface InlineLogoProps {
  size?: "sm" | "md" | "lg";
  withRing?: boolean;
  withTagline?: boolean;
  className?: string;
}

export default function InlineLogo({
  size = "md",
  withRing = true,
  withTagline = false,
  className = "",
}: InlineLogoProps) {
  // Dimensions based on size
  const dimensions = {
    sm: { box: "w-10 h-10", text: "text-base", sub: "text-[7px]", tag: "text-[6px]" },
    md: { box: "w-12 h-12", text: "text-lg", sub: "text-[8px]", tag: "text-[7px]" },
    lg: { box: "w-20 h-20", text: "text-2xl", sub: "text-[10px]", tag: "text-[8px]" },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Circular Emblem with Gradient Ring matching image */}
      <div
        className={`relative ${dimensions.box} rounded-full p-[2.5px] shrink-0 transition-transform hover:scale-105`}
        style={{
          background: withRing
            ? "linear-gradient(135deg, #ff7a00 0%, #ff007a 45%, #d946ef 100%)"
            : "transparent",
        }}
      >
        {/* White Inner Circle */}
        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center relative overflow-hidden shadow-inner p-1">
          {/* Circular Arc Swoosh over "Inline" */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M 50 15 A 35 35 0 1 0 85 50"
              stroke="var(--color-primary, #3274b5)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
          </svg>

          {/* "Inline" typography */}
          <span
            className="font-bold tracking-tight leading-none text-center select-none"
            style={{
              color: "var(--color-primary, #3274b5)",
              fontSize: size === "lg" ? "18px" : size === "md" ? "12px" : "10px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Inline
          </span>

          {/* — STUDY LINKS — */}
          <div className="flex items-center justify-center gap-0.5 w-full mt-0.5">
            <span className="h-[0.5px] w-2 bg-[var(--color-primary,#3274b5)] opacity-60" />
            <span
              className="font-bold uppercase tracking-widest text-[5px] sm:text-[6px] select-none"
              style={{ color: "var(--color-primary, #3274b5)" }}
            >
              STUDY LINKS
            </span>
            <span className="h-[0.5px] w-2 bg-[var(--color-primary,#3274b5)] opacity-60" />
          </div>

          {/* Slogan underneath inside circle if large */}
          {size === "lg" && (
            <span
              className="text-[4.5px] italic text-center text-slate-500 mt-1 select-none font-medium leading-none"
            >
              Expert advice for educational milestones
            </span>
          )}
        </div>
      </div>

      {/* Brand Text for Navbar and Header */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className="text-xl sm:text-2xl font-black tracking-tight leading-none"
            style={{ color: "var(--color-text-primary, #1e3a5f)" }}
          >
            Inline
          </span>
          <span
            className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
            style={{
              background: "linear-gradient(135deg, #ff7a00 0%, #ff007a 100%)",
            }}
          >
            STUDY LINKS
          </span>
        </div>
        
        {/* Exact Tagline from Logo */}
        <span
          className="text-[10px] sm:text-[11px] font-medium italic mt-0.5"
          style={{ color: "var(--color-primary, #3274b5)" }}
        >
          Expert advice for educational milestones
        </span>
      </div>
    </div>
  );
}
