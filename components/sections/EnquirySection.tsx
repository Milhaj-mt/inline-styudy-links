"use client";

import React, { useState } from "react";
import { PhoneCall, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "United Kingdom",
    courseLevel: "Postgraduate (Masters)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10"
            style={{ background: "var(--color-primary-glow)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Free Consultation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102a43] tracking-tight">
                Request a Call Back from Our Senior Overseas Advisors
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Get expert advice for educational milestones — step-by-step guidance on profile shortlisting, university applications, scholarships, and 100% visa processing.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Free Profile Evaluation & Country Shortlisting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Exclusive Scholarship Guidance up to £15,000 / $20,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Complete Visa Documentation & Mock Interviews</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3 text-xs text-slate-600">
                <PhoneCall className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Direct Hotline: <strong className="text-slate-900">{siteConfig.phone}</strong></span>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Call Request Received!</h3>
                  <p className="text-xs text-slate-600">
                    Thank you, {formData.name || "Student"}! An Inline Study Links counsellor will call you within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-full text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Destination
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[var(--color-primary)] focus:bg-white"
                      >
                        <option value="United Kingdom">United Kingdom (UK)</option>
                        <option value="United States">United States (USA)</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Ireland">Ireland & Europe</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Degree Level
                      </label>
                      <select
                        value={formData.courseLevel}
                        onChange={(e) => setFormData({ ...formData, courseLevel: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[var(--color-primary)] focus:bg-white"
                      >
                        <option value="Postgraduate (Masters)">Postgraduate (Masters)</option>
                        <option value="Undergraduate (Bachelors)">Undergraduate (Bachelors)</option>
                        <option value="Doctoral (PhD)">Doctoral (PhD)</option>
                        <option value="Diploma / Foundation">Diploma / Foundation</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-pill-primary py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Free Counselling Call</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
