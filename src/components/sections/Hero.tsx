"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Terminal, TrendingUp, Zap } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const words = ["High-Converting", "Cloud-Scalable", "Enterprise ERPs", "Sub-Second Fast"];

export const Hero = () => {
  const { openBooking } = useBooking();
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const updateRate = isDeleting ? 45 : 95;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, updateRate);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative pt-6 pb-20 lg:pt-10 lg:pb-32 overflow-hidden">
      {/* অ্যাম্বিয়েন্ট স্পটলাইট গ্লো */}
      <div 
        className="absolute top-0 left-1/4 -translate-x-1/2 bg-sky-500/15 rounded-full pointer-events-none"
        style={{ width: "650px", height: "450px", filter: "blur(160px)" }}
      />
      <div 
        className="absolute top-1/3 right-10 bg-indigo-600/15 rounded-full pointer-events-none"
        style={{ width: "550px", height: "400px", filter: "blur(180px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* বাঁ দিকের কনটেন্ট */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-400 text-xs font-bold shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-md">
              <Sparkles size={14} className="text-sky-400 animate-pulse" />
              <span className="tracking-wide">Next-Gen Web Engineering & Growth Agency</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight text-white leading-[1.08]">
              Engineering{" "}
              <span className="bg-linear-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                {displayText}
              </span>
              <span className="inline-block w-1 h-9 sm:h-14 bg-sky-400 ml-1.5 animate-pulse align-middle" />
              <br />
              That Scale Revenue.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
              We blend production-grade Next.js full-stack architecture with high-converting marketing funnels to build enterprise portals, websites, and business systems that drive measurable ROI.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={openBooking}
                className="px-7 py-4 rounded-2xl font-black text-xs sm:text-sm bg-linear-to-r from-sky-400 via-cyan-300 to-emerald-400 text-slate-950 hover:brightness-110 shadow-[0_0_35px_rgba(56,189,248,0.35)] active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <Link
                href="/#demos"
                className="px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/15 hover:border-sky-500/50 backdrop-blur-xl transition-all active:scale-95"
              >
                Explore Live Demos
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              {[
                { label: "Next.js 15 SSR", icon: Zap },
                { label: "Conversion-Optimized", icon: TrendingUp },
                { label: "Custom ERP Engines", icon: Terminal },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-slate-300"
                  >
                    <Icon size={13} className="text-sky-400" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ডান দিকের টার্মিনাল ও ৩D গ্রাফিক্স ইন্টারফেস */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.3)] backdrop-blur-xl flex items-center gap-2 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono font-bold text-emerald-300">⚡ 98ms Global Latency</span>
            </div>

            <div className="rounded-3xl border border-white/15 bg-slate-950/80 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-6 relative overflow-hidden transition-all hover:border-sky-500/40">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="text-[11px] font-mono font-bold text-slate-400 ml-2">kivo-growth-engine.ts</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE FEED</span>
                </div>
              </div>

              {/* ফিক্সড কমেন্ট স্ট্রিং সহ কোড ব্লক */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/5 font-mono text-[11px] sm:text-xs leading-relaxed space-y-2 mb-4">
                <p className="text-slate-500">{"// 1. Build Scalable Core Engine"}</p>
                <p className="text-slate-300">
                  <span className="text-purple-400">const</span> core = <span className="text-purple-400">await</span> <span className="text-sky-400">deployApp</span>({"{"} <span className="text-amber-300">speed</span>: <span className="text-emerald-400">&apos;98ms&apos;</span> {"}"});
                </p>
                <p className="text-slate-500 pt-1">{"// 2. High-ROAS Pipeline Connected"}</p>
                <p className="text-slate-300">
                  <span className="text-purple-400">const</span> analytics = <span className="text-purple-400">await</span> <span className="text-sky-400">scaleRevenue</span>(core);
                </p>
              </div>

              {/* অ্যানালিটিক্স গ্রাফ */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
                      <TrendingUp size={14} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Revenue & Traffic Velocity</h4>
                      <p className="text-[10px] text-slate-400">Cumulative Multi-Client Scale</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/20">
                    +340% ROAS
                  </span>
                </div>

                <div className="relative h-24 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,65 Q80,55 150,38 T300,8 L300,80 L0,80 Z"
                      fill="url(#glowGrad)"
                    />
                    <path
                      d="M0,65 Q80,55 150,38 T300,8"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      className="drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                    />
                    <circle cx="150" cy="38" r="4" fill="#38bdf8" className="animate-ping" />
                    <circle cx="150" cy="38" r="3" fill="#ffffff" />
                    <circle cx="300" cy="8" r="4" fill="#34d399" />
                  </svg>
                </div>
              </div>

              {/* ৩-কলাম মেট্রিক্স */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {[
                  { label: "CORE WEB VITAL", val: "99.8%", color: "text-sky-400" },
                  { label: "CONVERSION", val: "+4.8%", color: "text-emerald-400" },
                  { label: "EDGE UPTIME", val: "99.9%", color: "text-purple-400" },
                ].map((stat, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span className="text-[9px] font-mono font-bold text-slate-400 block tracking-tight">
                      {stat.label}
                    </span>
                    <span className={`text-sm sm:text-base font-black ${stat.color} tracking-tight mt-0.5 block`}>
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};