"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { demos } from "@/data/demos";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";

const categories = ["All", "Management System", "E-Commerce", "Landing Page"] as const;

export const DemoShowcase = () => {
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const filteredDemos = selectedCat === "All" 
    ? demos 
    : demos.filter((d) => d.category === selectedCat);

  return (
    <section id="demos" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 mb-4">
            <Layers size={13} />
            <span>Interactive Live Demos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tested Software Demos & Production Blueprints
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm max-w-xl">
            Explore live prototypes of our ERPs, high-converting stores, and municipality administration portals.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCat === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDemos.map((item) => (
          <div
            key={item.slug}
            className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 shadow-sm"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.bannerImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/80 text-sky-400 backdrop-blur-md border border-white/10">
                  {item.subCategory}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.features.slice(0, 3).map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Launch Preview Link */}
            <div className="p-6 pt-0">
              <Link
                href={`/demos/${item.slug}`}
                target="_blank"
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:text-white hover:bg-sky-500 dark:hover:bg-sky-500 hover:border-sky-500 text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>View Full System Demo</span>
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};