"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X, ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { agencyNavItems, NavItemType } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for subtle elevation change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Floating Glass Pill Dock */}
        <div
          className={`w-full rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            scrolled
              ? "bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.04)]"
              : "bg-white/80 backdrop-blur-xl border border-slate-200/70 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.03)]"
          }`}
        >
          {/* 1. Brand Logo: Simply "inline." (Agency Minimalist Style) */}
          <Link
            href="/"
            className="flex items-center group py-0.5 tracking-tight focus:outline-none"
            aria-label="inline home"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 group-hover:text-[var(--color-primary)] transition-colors select-none">
              inline
              <span className="text-[var(--color-primary,#3274b5)] inline-block transition-transform group-hover:scale-125">
                .
              </span>
            </span>
          </Link>

          {/* 2. Center Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Agency Navigation"
          >
            {agencyNavItems.map((item) => {
              const isDropdownOpen = activeDropdown === item.label;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(isDropdownOpen ? null : item.label)
                      }
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                        isDropdownOpen
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen
                            ? "rotate-180 text-[var(--color-primary)]"
                            : "text-slate-400"
                        }`}
                      />
                    </button>

                    {/* Agency Mega Menu Card */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[620px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)] grid grid-cols-12 gap-5">
                          
                          {/* Left: Submenu Items */}
                          <div className="col-span-7 flex flex-col gap-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 pb-1">
                              {item.label} Overview
                            </span>
                            {item.children?.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group/sub p-2.5 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 block"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-slate-900 group-hover/sub:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                                    {sub.title}
                                    {sub.badge && (
                                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[var(--color-primary)] border border-blue-100">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                  {sub.description}
                                </p>
                              </Link>
                            ))}
                          </div>

                          {/* Right: Featured Spotlight Box */}
                          {item.featured && (
                            <div className="col-span-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
                              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
                              
                              <div>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-blue-400 mb-2">
                                  <Sparkles className="w-3 h-3" />
                                  Spotlight
                                </span>
                                <h4 className="text-xs font-bold leading-snug">
                                  {item.featured.title}
                                </h4>
                                <p className="text-[10px] text-slate-300 mt-1.5 leading-relaxed">
                                  {item.featured.description}
                                </p>
                              </div>

                              <Link
                                href={item.featured.href}
                                onClick={() => setActiveDropdown(null)}
                                className="mt-4 inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold bg-white text-slate-900 hover:bg-slate-100 px-3.5 py-2 rounded-xl transition-all shadow-xs"
                              >
                                {item.featured.ctaText}
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}

                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all flex items-center gap-1.5"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Agency Actions (Hotline + High-End CTA Button) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>{siteConfig.phone}</span>
            </a>

            {/* High-Contrast Agency CTA Button */}
            <a
              href="#enquire"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#enquire"
              className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold sm:hidden"
            >
              Consult
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Agency Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {agencyNavItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-slate-900 py-1.5"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                      {item.badge}
                    </span>
                  )}
                </Link>

                {item.children && (
                  <div className="pl-3 pt-1 flex flex-col gap-1.5">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-slate-600 hover:text-[var(--color-primary)] py-1 flex items-center justify-between"
                      >
                        <span>{sub.title}</span>
                        {sub.badge && (
                          <span className="text-[9px] text-blue-600">{sub.badge}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold shadow-md"
            >
              Book Free Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
