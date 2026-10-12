import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import InlineLogo from "@/components/common/InlineLogo";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#0a192f] border-t border-slate-800 pt-16 pb-12 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                inline<span className="text-blue-400">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Empowering students to achieve their international study milestones with
              transparent guidance, Ivy-league profile building, and 100% visa assistance.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Certified Overseas Advisors
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                500+ Partner Universities
              </span>
            </div>
          </div>

          {/* Col 2: Study Destinations */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Study Destinations
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#uk" className="hover:text-blue-400 transition-colors">Study in United Kingdom</a>
              </li>
              <li>
                <a href="#usa" className="hover:text-blue-400 transition-colors">Study in United States</a>
              </li>
              <li>
                <a href="#canada" className="hover:text-blue-400 transition-colors">Study in Canada</a>
              </li>
              <li>
                <a href="#australia" className="hover:text-blue-400 transition-colors">Study in Australia</a>
              </li>
              <li>
                <a href="#ireland" className="hover:text-blue-400 transition-colors">Study in Ireland & Europe</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Consultancy Services
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">University Shortlisting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">SOP & LOR Mentorship</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Scholarship Guidance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Visa Interview Preparation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Pre-Departure Briefing</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Support
            </p>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{siteConfig.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
