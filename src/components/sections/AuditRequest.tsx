"use client";

import React, { useState } from "react";
import { ShieldAlert, Send, CheckCircle2 } from "lucide-react";

export const AuditRequest = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setUrl("");
      setEmail("");
    }, 4000);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto rounded-3xl border border-sky-500/20 bg-linear-to-b from-sky-500/5 to-transparent p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 mb-4">
          <ShieldAlert size={13} />
          <span>Zero-Cost Engineering Audit</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Get a Free Performance & System Architecture Review
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Submit your existing site or app URL. We will inspect Core Web Vitals, checkout drop-offs, and database latency.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-emerald-500 font-bold text-xs bg-emerald-500/10 p-3 rounded-xl max-w-md mx-auto">
            <CheckCircle2 size={16} />
            <span>Audit request received! Our engineers will email you a PDF report within 24 hours.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-12 gap-2">
            <input
              type="text"
              placeholder="e.g. yourbusiness.com"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="sm:col-span-5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:outline-none focus:border-sky-500"
            />
            <input
              type="email"
              placeholder="Work Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:col-span-4 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="sm:col-span-3 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              <span>Analyze</span>
              <Send size={12} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};