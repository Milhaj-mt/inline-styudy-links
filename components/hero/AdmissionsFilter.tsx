"use client";

import React, { useState } from "react";
import { Search, Globe2, GraduationCap, Calendar, ArrowRight } from "lucide-react";

export default function AdmissionsFilter() {
  const [country, setCountry] = useState("United Kingdom");
  const [level, setLevel] = useState("Master's (Postgrad)");
  const [intake, setIntake] = useState("Fall 2025");

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 sm:mt-10">
      <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(16,42,67,0.12)]">
        <form
          action="#enquire"
          className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
        >
          {/* 1. Country Selection */}
          <div className="sm:col-span-4 px-3 py-2 rounded-2xl bg-slate-50/80 border border-slate-100/80 hover:border-slate-200 transition-colors">
            <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              <Globe2 className="w-3 h-3 text-[var(--color-primary)]" />
              <span>Target Country</span>
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="United Kingdom">🇬🇧 United Kingdom</option>
              <option value="United States">🇺🇸 United States</option>
              <option value="Canada">🇨🇦 Canada</option>
              <option value="Australia">🇦🇺 Australia</option>
              <option value="Ireland">🇮🇪 Ireland & Europe</option>
            </select>
          </div>

          {/* 2. Degree Level */}
          <div className="sm:col-span-3 px-3 py-2 rounded-2xl bg-slate-50/80 border border-slate-100/80 hover:border-slate-200 transition-colors">
            <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              <GraduationCap className="w-3 h-3 text-[var(--color-primary)]" />
              <span>Study Level</span>
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="Master's (Postgrad)">Master's (Postgraduate)</option>
              <option value="Bachelor's (Undergrad)">Bachelor's (Undergraduate)</option>
              <option value="MBA / Executive">MBA / Executive</option>
              <option value="Doctorate (PhD)">Doctorate (PhD)</option>
            </select>
          </div>

          {/* 3. Intake Season */}
          <div className="sm:col-span-2 px-3 py-2 rounded-2xl bg-slate-50/80 border border-slate-100/80 hover:border-slate-200 transition-colors">
            <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              <Calendar className="w-3 h-3 text-[var(--color-primary)]" />
              <span>Intake</span>
            </label>
            <select
              value={intake}
              onChange={(e) => setIntake(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="Fall 2025">Fall 2025</option>
              <option value="Spring 2026">Spring 2026</option>
              <option value="Fall 2026">Fall 2026</option>
            </select>
          </div>

          {/* 4. Action Button */}
          <div className="sm:col-span-3">
            <button
              type="submit"
              className="w-full h-full py-3 sm:py-3.5 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold tracking-tight shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>

      {/* Subtext Trust Micro-Bar */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-3 text-[11px] text-slate-500 font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          500+ Partner Universities
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Scholarships up to 100% Tuition
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          99.4% Student Visa Success
        </span>
      </div>
    </div>
  );
}
