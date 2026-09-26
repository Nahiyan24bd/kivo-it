"use client";

import React, { useState } from "react";
import { ArrowUpRight, BarChart3, ExternalLink, Sparkles } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "ApexCare Hospital Management System",
    category: "Management System",
    description: "Multi-branch hospital ERP with automated patient queuing, doctor schedules, diagnostic billing, and role-based staff permissions.",
    metrics: [
      { label: "Admin Workflow Time", value: "-65%" },
      { label: "Billing Accuracy", value: "99.9%" },
      { label: "Daily Transactions", value: "10K+" }
    ],
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
    gradient: "from-sky-500/20 to-blue-600/10",
  },
  {
    id: 2,
    title: "UrbanAura E-Commerce Engine & Funnel",
    category: "Web & Performance Marketing",
    description: "High-converting headless storefront coupled with full-funnel Meta Ads and abandoned cart recovery systems.",
    metrics: [
      { label: "Blended ROAS", value: "4.2x" },
      { label: "Conversion Rate", value: "4.9%" },
      { label: "Load Speed", value: "0.8s" }
    ],
    tech: ["Next.js 15", "Meta Ads", "Tailwind CSS", "Stripe"],
    gradient: "from-emerald-500/20 to-teal-600/10",
  },
  {
    id: 3,
    title: "EduPulse Multi-Campus School ERP",
    category: "Management System",
    description: "Student attendance, automated fee processing, gradebook generation, and parent communication portal built for 5,000+ students.",
    metrics: [
      { label: "Fee Collection Speed", value: "+80%" },
      { label: "Server Latency", value: "45ms" },
      { label: "Parent Retention", value: "98%" }
    ],
    tech: ["React", "Node.js", "Firebase", "Tailwind"],
    gradient: "from-purple-500/20 to-indigo-600/10",
  },
];

const categories = ["All", "Management System", "Web & Performance Marketing"];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(p => p.category.includes(activeCategory));

  return (
    <section id="work" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 mb-4">
            <Sparkles size={13} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Outcomes, Not Just Code
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Real enterprise portals and growth funnels we’ve deployed with measurable performance metrics.
          </p>
        </div>

        {/* ফিল্টার বাটন */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* প্রজেক্ট কার্ড গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A192F]/80 p-6 flex flex-col justify-between hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300 hover:shadow-xl shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {project.category}
                </span>
                <span className="p-1 rounded-lg text-slate-400 group-hover:text-sky-500 transition-colors">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* মেট্রিক্স গ্রিড */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 mb-6">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-sm font-extrabold text-emerald-500">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* টেক স্ট্যাক ট্যাগসমূহ */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
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