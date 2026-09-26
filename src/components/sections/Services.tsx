"use client";

import React from "react";
import { 
  Laptop, 
  TrendingUp, 
  Layers, 
  Workflow, 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  BarChart2 
} from "lucide-react";

const services = [
  {
    id: "custom-web",
    title: "Custom Web & App Engineering",
    category: "Full-Stack Development",
    description: "Next-gen web applications, lightning-fast landing engines, and custom e-commerce platforms engineered for speed, SEO, and global conversion.",
    icon: Laptop,
    badges: ["Next.js Architecture", "High-Converting UI", "Zero-Bloat Code"],
    colSpan: "lg:col-span-7",
  },
  {
    id: "management-systems",
    title: "Enterprise Management Portals",
    category: "Operations & Cloud",
    description: "Custom ERP, Hospital Management, School ERP, and Office Admin systems with role-based auth, dashboards, and automated invoicing.",
    icon: Workflow,
    badges: ["Role RBAC", "Real-Time DB", "Export & Reporting"],
    colSpan: "lg:col-span-5",
  },
  {
    id: "growth-marketing",
    title: "Performance Ads & Growth Funnels",
    category: "Marketing & CRO",
    description: "Data-driven Meta and Google ad operations designed to lower CPA, maximize ROAS, and scale measurable recurring revenue.",
    icon: TrendingUp,
    badges: ["Meta Ads Funnel", "Google PPC", "Pixel & GA4 Tracking"],
    colSpan: "lg:col-span-5",
  },
  {
    id: "tech-maintenance",
    title: "24/7 Tech Ops & Digital Scaling",
    category: "Maintenance & Security",
    description: "Ongoing platform upgrades, cloud optimizations, database backups, security patches, and continuous A/B testing for steady scaling.",
    icon: ShieldCheck,
    badges: ["99.9% Uptime", "Automated Backups", "Speed Audits"],
    colSpan: "lg:col-span-7",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 mb-4">
            <Layers size={13} />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            End-to-End Capabilities Built for Growth
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From modern web engineering to full-funnel digital acquisition, Kivo IT bridges tech precision with commercial performance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`${srv.colSpan} group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A192F]/80 p-8 flex flex-col justify-between hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200/60 dark:border-sky-800/60 flex items-center justify-center text-sky-600 dark:text-sky-400">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {srv.badges.map((b, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        <Check size={11} className="text-emerald-500" />
                        {b}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Discuss Scope</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};