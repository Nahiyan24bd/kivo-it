"use client";

import React from "react";
import { 
  Code2, 
  Layers, 
  Database, 
  Flame, 
  BarChart3, 
  Globe2, 
  Cpu, 
  Sparkles,
  Zap,
  Target
} from "lucide-react";

const techStack = [
  { name: "Next.js 15", icon: Globe2, tag: "Architecture" },
  { name: "React 19", icon: Layers, tag: "Frontend" },
  { name: "Tailwind CSS v4", icon: Sparkles, tag: "Styling" },
  { name: "Node.js & APIs", icon: Cpu, tag: "Backend" },
  { name: "Firebase", icon: Flame, tag: "Cloud & Realtime" },
  { name: "PostgreSQL & Prisma", icon: Database, tag: "Database" },
  { name: "Meta Ads Funnels", icon: Target, tag: "Growth" },
  { name: "Google Ads & GA4", icon: BarChart3, tag: "Analytics" },
  { name: "TypeScript", icon: Code2, tag: "Type Safe" },
  { name: "High-Speed CDN", icon: Zap, tag: "Performance" },
];

export const TechMarquee = () => {
  return (
    <section className="my-10 py-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/30 overflow-hidden select-none shadow-sm">
      <div className="text-center mb-6 px-4">
        <p className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
          Production-Grade Technologies & Performance Stacks
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Fade */}
      <div className="relative w-full overflow-hidden">
        {/* দুই পাশের ফেড ওভারলে - স্ক্রিনের ধারে সফট ব্লেন্ড করার জন্য */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950/90 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee whitespace-nowrap py-1 px-4">
          {[...techStack, ...techStack].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-sky-500/50 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500">
                  <IconComponent size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};