import React from "react";
import AdmissionsFilter from "./AdmissionsFilter";
import AgencyShowcase from "./AgencyShowcase";
import { ArrowUpRight, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero - Inline Study Links"
      className="relative pt-12 sm:pt-16 md:pt-20 pb-16 overflow-hidden hero-glow-bg flex flex-col items-center justify-start min-h-[calc(100vh-80px)]"
    >
      {/* Subtle architectural tactile background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(50, 116, 181, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Main Centered Content */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center">
        
        {/* 1. Agency Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-[11px] sm:text-xs font-semibold text-slate-700 tracking-wide mb-6 shadow-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-bold text-slate-900">Fall 2025 / 2026 Admissions</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">Official Partner to 500+ Universities</span>
        </div>

        {/* 2. Bold, Authoritative Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0f2438] tracking-tight leading-[1.08] sm:leading-[1.05] max-w-4xl mx-auto text-balance">
          Study at the World’s{" "}
          <br className="hidden sm:inline" />
          Most Selective{" "}
          <span
            className="bg-clip-text text-transparent underline decoration-[var(--color-primary)]/20 decoration-wavy"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-primary, #3274b5) 0%, #0284c7 60%, #ff7a00 100%)",
            }}
          >
            Universities.
          </span>
        </h1>

        {/* 3. Agency Subtitle (No Clichéd AI Copy) */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          Inline Study Links is the premier overseas advisory engineering bespoke admissions,
          merit scholarships, and high-precision visa filing for ambitious students globally.
        </p>

        {/* 4. Interactive Admissions Discovery Bar (Agency Product Component) */}
        <AdmissionsFilter />

        {/* 5. Proof Metric Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 pt-4 border-t border-slate-200/60 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 / 5</span>
            <span className="text-slate-400">• Verified Student Reviews</span>
          </div>

          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-900">99.4%</span>
            <span className="text-slate-400">Visa Acceptance Rate</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">£14.2M+</span>
            <span className="text-slate-400">Scholarships Secured</span>
          </div>
        </div>

      </div>

      {/* 6. Agency Art-Directed Visual Showcase */}
      <AgencyShowcase />
    </section>
  );
}
