import React from "react";
import { GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

const destinations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    highlights: ["2-Year Post-Study Work Visa", "Up to £10,000 Scholarships", "No GRE/GMAT Required"],
    popular: "Oxford, Cambridge, Imperial, UCL, Manchester",
    intakes: "Sept 2025 & Jan 2026",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    highlights: ["3-Year STEM OPT Extension", "Research Assistantships", "Top Global University Ranking"],
    popular: "MIT, Stanford, Harvard, NYU, Purdue",
    intakes: "Fall & Spring Intakes",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    highlights: ["Post-Graduation Work Permit (PGWP)", "Permanent Residency Pathways", "Paid Co-op Programs"],
    popular: "Toronto, UBC, McGill, Waterloo, Alberta",
    intakes: "Sept, Jan & May Intakes",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    highlights: ["Group of Eight Universities", "Generous Regional Scholarships", "Simplified Student Visa"],
    popular: "Melbourne, Sydney, UNSW, ANU, Monash",
    intakes: "Feb & July Intakes",
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[var(--color-primary)] border border-blue-200 mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Top Global Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102a43] tracking-tight">
            Where Do You Want to Study?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Choose from the world’s most prestigious higher education hubs with high visa success rates and direct university partnerships.
          </p>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.country}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between group border border-slate-200 shadow-sm hover:border-[var(--color-primary)] hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{dest.flag}</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {dest.intakes}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                  {dest.country}
                </h3>
                
                <div className="mt-4 space-y-2">
                  {dest.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Top Hubs:</span> {dest.popular}
                </p>
                <a
                  href="#enquire"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] group-hover:translate-x-0.5 transition-transform"
                >
                  Explore Universities
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
