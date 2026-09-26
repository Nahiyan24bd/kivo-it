"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Activity, Zap, TrendingUp, Sparkles } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const words = [
  "High-Speed Systems",
  "Enterprise Portals",
  "High-Converting Stores",
  "Cloud Architectures",
  "Growth Funnels",
];

export const Hero = () => {
  const { openBooking } = useBooking();

  // Typewriter Loop Logic
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && text === currentWord) {
      typingSpeed = 2200; // পুরো শব্দ লেখার পর পজ
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      typingSpeed = 400; // পরবর্তী শব্দ শুরুর আগে পজ
    }

    const timer = setTimeout(() => {
      setText((current) =>
        isDeleting
          ? currentWord.substring(0, current.length - 1)
          : currentWord.substring(0, current.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-sky-500/15 dark:bg-sky-500/20 rounded-full pointer-events-none"
        style={{ width: "650px", height: "450px", filter: "blur(140px)" }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 bg-blue-600/10 dark:bg-indigo-600/15 rounded-full pointer-events-none"
        style={{ width: "500px", height: "380px", filter: "blur(130px)" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* বাম পাশ: টাইপরাইটার হেডিং ও কল-টু-অ্যাকশন */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 backdrop-blur-md w-fit mb-6 shadow-sm">
            <Sparkles size={13} className="text-sky-500" />
            <span>Next-Gen Engineering & Growth Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white min-h-[160px] sm:min-h-[170px] lg:min-h-[190px]">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400">
              {text}
            </span>
            <span className="inline-block w-1.5 h-10 sm:h-12 bg-sky-500 ml-1 translate-y-1 animate-pulse" />
            <br />
            That Scale Revenue.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            We blend production-grade Next.js full-stack architecture with high-converting marketing funnels to build enterprise portals, websites, and business systems that drive measurable ROI.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* iOS Glass Style Action Button */}
            <button
              onClick={openBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-sky-500/10 border border-white/20"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight size={15} />
            </button>

            <a
              href="#demos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-slate-900 dark:text-white hover:border-sky-500/50 transition-all shadow-sm"
            >
              <span>Explore Demos</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>Next.js 15 SSR</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>Conversion-Optimized</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>Custom Management ERPs</span>
            </div>
          </div>
        </div>

        {/* ডান পাশ: লার্জ, কালারফুল হাই-টেক ভিজ্যুয়ালাইজার ড্যাশবোর্ড */}
        <div className="lg:col-span-5 relative w-full">
          <div className="relative rounded-3xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-[#070D19]/80 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(14,165,233,0.18)]">
            
            {/* টার্মিনাল হেডার */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/80 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm shadow-rose-500/50" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">kivo-growth-engine.ts</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>LIVE FEED</span>
              </div>
            </div>

            {/* কোড এক্সিকিউশন প্রিভিউ */}
            <div className="font-mono text-xs space-y-1.5 bg-slate-950/40 p-3.5 rounded-2xl border border-slate-800/60">
              <p className="text-sky-400 font-semibold">{"// 1. Build Scalable Core Engine"}</p>
              <p className="text-slate-300">{"const core = await deployApp({ speed: '98ms' });"}</p>
              <p className="text-emerald-400 font-semibold pt-1">{"// 2. High-ROAS Pipeline Connected"}</p>
              <p className="text-slate-300">{"const analytics = await scaleRevenue(core);"}</p>
            </div>

            {/* লাইভ গ্রেডিয়েন্ট রেভিনিউ ভেলোসিটি চার্ট */}
            <div className="mt-5 p-4 rounded-2xl bg-linear-to-b from-slate-900/60 to-slate-950/80 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <TrendingUp size={14} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Revenue & Traffic Velocity</div>
                    <div className="text-[9px] text-slate-400">Cumulative Multi-Client Scale</div>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-400 tracking-tight">+340% ROAS</span>
              </div>

              {/* কালারফুল SVG ওয়েভ চার্ট */}
              <div className="relative h-24 w-full">
                <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                  
                  {/* ফিল এরিয়া */}
                  <path
                    d="M0,80 C70,75 120,65 180,48 C240,32 310,18 400,8 L400,100 L0,100 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* মেইন কার্ভ লাইন */}
                  <path
                    d="M0,80 C70,75 120,65 180,48 C240,32 310,18 400,8"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* পালসিং নোড */}
                  <circle cx="400" cy="8" r="5" fill="#10B981" className="animate-ping origin-center" />
                  <circle cx="400" cy="8" r="4" fill="#10B981" />
                  <circle cx="180" cy="48" r="3.5" fill="#6366F1" />
                </svg>
              </div>
            </div>

            {/* ৩ কলাম মেট্রিক্স ইনফরমেশন গ্রিড */}
            <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3 rounded-2xl bg-white/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Core Web Vital</div>
                <div className="text-base sm:text-lg font-black text-sky-400 mt-0.5">99.8%</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Conversion</div>
                <div className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">+4.8%</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/40 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Edge Uptime</div>
                <div className="text-base sm:text-lg font-black text-indigo-400 mt-0.5">99.9%</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};