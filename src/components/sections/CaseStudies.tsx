"use client";

import React, { useState } from "react";
import { BarChart3 } from "lucide-react";

interface CaseStudy {
  id: string;
  client: string;
  category: "Enterprise ERP" | "E-Commerce" | "Govt Digital";
  problem: string;
  solution: string;
  roi: string;
  metricLabel: string;
  tech: string[];
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-1",
    client: "MedHealth Multi-Specialty Clinic",
    category: "Enterprise ERP",
    problem: "Manual patient queueing caused 45+ minute wait times and billing errors across diagnostic counters.",
    solution: "Built unified token routing and auto-generated pathology invoice portal with role access.",
    roi: "-68% Wait Time",
    metricLabel: "Operational Velocity",
    tech: ["Next.js 15", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "cs-2",
    client: "UrbanCraft Apparel Direct Store",
    category: "E-Commerce",
    problem: "Legacy storefront dropped 62% traffic at mobile checkout due to slow load speed.",
    solution: "Engineered headless single-page cart with direct bKash tokenized payment integration.",
    roi: "+310% Orders",
    metricLabel: "Conversion Surge",
    tech: ["Next.js SSR", "Turbopack", "Redis"],
  },
  {
    id: "cs-3",
    client: "Central Pouroshava Citizen Service",
    category: "Govt Digital",
    problem: "Residents waited 7–14 days for manual trade licenses and citizen verification stampings.",
    solution: "Digitized online application pipeline with QR code verification and holding tax lookup.",
    roi: "24-Hr Issuance",
    metricLabel: "Citizen Resolution Time",
    tech: ["Next.js 15", "QR Engine", "Cloudflare Edge"],
  },
];

export const CaseStudies = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All"
    ? caseStudiesData
    : caseStudiesData.filter((c) => c.category === filter);

  return (
    <section id="work" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-4">
            <BarChart3 size={13} />
            <span>Proven Engineering Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Client Success & ROI Case Studies
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Real enterprise transformations delivered with production-grade engineering and measurable data.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Enterprise ERP", "E-Commerce", "Govt Digital"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === item
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((cs) => (
          <div
            key={cs.id}
            className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {cs.category}
                </span>
                <div className="text-right">
                  <div className="text-lg font-black text-emerald-500">{cs.roi}</div>
                  <div className="text-[9px] text-slate-400 font-semibold">{cs.metricLabel}</div>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{cs.client}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                <strong className="text-slate-700 dark:text-slate-300">Challenge:</strong> {cs.problem}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-700 dark:text-slate-300">Solution:</strong> {cs.solution}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-1.5">
              {cs.tech.map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};