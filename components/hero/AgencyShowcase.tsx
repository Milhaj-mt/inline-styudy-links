"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, ShieldCheck, Sparkles, Building2 } from "lucide-react";

export default function AgencyShowcase() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12 sm:mt-16 px-4">
      {/* 1. Main Grid Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Card: Verified Visa Stamp & Acceptance Certificate */}
        <div className="lg:col-span-4 bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 shadow-[0_15px_35px_-10px_rgba(16,42,67,0.08)] flex flex-col justify-between relative overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all">
          <div className="space-y-4">
            {/* Header with Verified Stamp */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Official Placement
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Visa Approved
              </span>
            </div>

            {/* University & Degree */}
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900 leading-tight">
                University of Oxford
              </h3>
              <p className="text-xs text-[var(--color-primary)] font-semibold mt-0.5">
                Faculty of Mathematical, Physical & Life Sciences
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[10px] font-bold text-blue-700">
                  MSc Advanced Computing
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-[10px] font-bold text-amber-700">
                  £12,000 Fellowship
                </span>
              </div>
            </div>

            {/* Student Success Metrics */}
            <div className="space-y-2 text-xs text-slate-600 pt-1">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Application Cycle</span>
                <span className="font-semibold text-slate-800">Fall 2025 Regular</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Turnaround Time</span>
                <span className="font-semibold text-slate-800">18 Working Days</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Visa Interview</span>
                <span className="font-semibold text-emerald-600">Cleared (First Attempt)</span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Seal */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
              100% Document Verified
            </span>
            <span className="font-mono text-[10px] text-slate-400">#UK-OX-8492</span>
          </div>
        </div>

        {/* Center: Hero Cinematographic Photo with Floating Glass Accents */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[320px] lg:min-h-auto shadow-[0_20px_45px_-12px_rgba(16,42,67,0.15)] group">
          <Image
            src="/images/hero/celebration.jpg"
            alt="Inline Study Links Scholars Celebrating Visa Approval and Ivy League Acceptance"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

          {/* Top Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              5,200+ Scholars Placed
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
              99.4% Visa Rate
            </span>
          </div>

          {/* Bottom Card Content */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                Direct University Partnerships
              </span>
            </div>
            <p className="text-base sm:text-lg font-black leading-snug">
              Guiding Tomorrow’s Global Leaders from Consultation to Campus
            </p>
            <p className="text-xs text-slate-300 mt-1 line-clamp-1">
              Personalized strategy for Russell Group, Ivy League & Group of Eight institutions.
            </p>
          </div>
        </div>

        {/* Right Card: Live Admissions Feed & Real-Time Offers */}
        <div className="lg:col-span-3 bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 shadow-[0_15px_35px_-10px_rgba(16,42,67,0.08)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Live Decisions Feed
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-3">
              {/* Offer Item 1 */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>Imperial College London</span>
                  <span>14m ago</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mt-0.5">
                  MSc Artificial Intelligence
                </p>
                <p className="text-[10px] text-emerald-700 font-semibold mt-1">
                  ✓ £10,000 Faculty Award
                </p>
              </div>

              {/* Offer Item 2 */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>University of Toronto</span>
                  <span>1h ago</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mt-0.5">
                  Master of Management Analytics
                </p>
                <p className="text-[10px] text-blue-700 font-semibold mt-1">
                  ✓ 3-Year PGWP Route
                </p>
              </div>

              {/* Offer Item 3 */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>Univ. of Melbourne</span>
                  <span>3h ago</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mt-0.5">
                  Master of Finance
                </p>
                <p className="text-[10px] text-purple-700 font-semibold mt-1">
                  ✓ 50% Global Grant
                </p>
              </div>
            </div>
          </div>

          <a
            href="#success-story"
            className="mt-4 pt-3 border-t border-slate-100 text-center text-xs font-bold text-[var(--color-primary)] hover:text-blue-700 transition-colors block"
          >
            View All 5,000+ Student Outcomes →
          </a>
        </div>

      </div>

      {/* 2. Global University Partner Accreditations Strip */}
      <div className="mt-10 pt-8 border-t border-slate-200/60">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
          Official Direct Representation & Certified Accreditation
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
          <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-slate-700">
            UNIVERSITY OF OXFORD
          </span>
          <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-slate-700">
            CAMBRIDGE
          </span>
          <span className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-slate-700">
            Imperial College London
          </span>
          <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-slate-700">
            HARVARD UNIVERSITY
          </span>
          <span className="font-sans text-sm sm:text-base font-bold tracking-tight text-slate-700">
            TORONTO
          </span>
          <span className="font-sans text-xs sm:text-sm font-black tracking-widest text-slate-700 uppercase">
            BRITISH COUNCIL CERTIFIED
          </span>
        </div>
      </div>
    </div>
  );
}
