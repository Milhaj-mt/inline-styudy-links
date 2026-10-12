import React from "react";
import { ArrowDown } from "lucide-react";

interface HeroBadgeProps {
  text?: string;
  href?: string;
}

export default function HeroBadge({
  text = "Premier Global Education by Inline Study Links",
  href = "#destinations",
}: HeroBadgeProps) {
  return (
    <div className="flex justify-center mb-6">
      <a
        href={href}
        className="glass-badge group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-all hover:scale-[1.02] shadow-sm"
      >
        <span>{text}</span>
        
        {/* Blue circle button with down arrow matching image */}
        <span
          className="flex items-center justify-center w-6 h-6 rounded-full text-white shadow-sm transition-transform group-hover:translate-y-0.5"
          style={{ backgroundColor: "var(--color-primary, #3274b5)" }}
          aria-hidden="true"
        >
          <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      </a>
    </div>
  );
}
