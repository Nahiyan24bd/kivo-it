"use client";

import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Technical Blueprint",
    description: "We audit your workflow, define system architecture, data models, and build conversion-focused funnel targets.",
    icon: Search,
  },
  {
    step: "02",
    title: "High-Fidelity UI & System Architecture",
    description: "Crafting modern design systems with pixel-precision while setting up databases, APIs, and scalable infrastructure.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Clean-Code Engineering & Integration",
    description: "Writing robust Next.js components, integrating payment/auth modules, and optimizing Core Web Vitals for speed.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Deployment & Acquisition Scaling",
    description: "Zero-downtime production launch coupled with pixel tracking, ad split-testing, and automated maintenance.",
    icon: Rocket,
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          How We Work
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          A Predictable 4-Step Execution Framework
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          From first audit to ongoing scale, every milestone is designed for speed and transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A192F]/60 flex flex-col justify-between hover:border-sky-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-200/60 dark:border-sky-800/60">
                    <Icon size={20} />
                  </div>
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800 font-mono">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 w-full h-1 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 w-1/3 rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};