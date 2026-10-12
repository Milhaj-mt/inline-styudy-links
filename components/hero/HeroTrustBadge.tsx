import React from "react";
import { siteConfig } from "@/data/siteConfig";

export default function HeroTrustBadge() {
  const { award, announcement } = siteConfig;

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* 1. Award / Summit Logo & Recognition */}
      <div className="flex items-center gap-3 text-left">
        {/* Red Summit Stacked Logo Badge matching image */}
        <div
          className="flex flex-col items-start leading-[1.05] tracking-tighter font-extrabold uppercase select-none text-[11px] sm:text-xs"
          style={{ color: "var(--color-award-red)" }}
        >
          <span className="text-[9px] font-medium lowercase tracking-normal italic opacity-90">
            {award.badgePrefix}
          </span>
          <span className="font-black text-xs sm:text-sm">WORLD</span>
          <span className="font-extrabold tracking-tight">EDUCATION</span>
          <span className="tracking-widest text-[9px] font-semibold">SUMMIT</span>
        </div>

        {/* Award Details Text */}
        <div className="flex flex-col border-l border-slate-300 pl-3">
          <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
            {award.title}
          </span>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
            {award.year}
          </span>
        </div>
      </div>

      {/* 2. Pulsing Green Status Dot ("Admission Open") */}
      <div className="inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: "var(--color-status-green)" }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ backgroundColor: "var(--color-status-green)" }}
          />
        </span>
        <span className="font-semibold tracking-wide">
          {announcement.text}
        </span>
      </div>
    </div>
  );
}
