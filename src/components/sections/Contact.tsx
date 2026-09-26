"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Clock } from "lucide-react";

const serviceOptions = [
  "Custom Web Application",
  "Management System / ERP",
  "Performance Ads & Funnel",
  "Full-Stack Retainer"
];

export const Contact = () => {
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* তথ্য ও নিশ্চয়তা (৫ কলাম) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 mb-4">
              <MessageSquare size={13} />
              <span>Let's Build Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Ready to Upgrade Your Tech & Scale Revenue?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Tell us about your technical roadmap or growth requirements. Our engineering team reviews submissions within 24 hours.
            </p>
          </div>

          <div className="mt-8 space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <Clock size={16} className="text-sky-500" />
              <span>Typical Response Time: Under 2 Hours</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Direct Non-Disclosure Agreement (NDA) Available</span>
            </div>
          </div>
        </div>

        {/* কন্টাক্ট ফর্ম (৭ কলাম) */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A192F]/80 p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received!</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 max-w-sm">
                Thank you for reaching out. We will review your scope and get back to you with an execution plan.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Select Project Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setSelectedService(opt)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all ${
                        selectedService === opt
                          ? "border-sky-500 bg-sky-50/50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-bold"
                          : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Carter"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Project Details & Goals
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your existing stack, platform timeline, or performance goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <span>Submit Project Scope</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};