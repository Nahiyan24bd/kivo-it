"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, TrendingUp, Sparkles, CheckCircle2, Activity } from "lucide-react";

const wordsToType = [
  "Web Applications",
  "Management Systems",
  "E-Commerce Engines",
  "Conversion Funnels"
];

export const Hero = () => {
  // টাইপরাইটার স্টেট
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = wordsToType[currentWordIdx];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // এক এক অক্ষর টাইপ হওয়া
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // পুরো শব্দ শেষ হলে কিছুক্ষণ থামবে
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // এক এক অক্ষর ডিলিট হওয়া
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % wordsToType.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/60 dark:border-slate-800/60">
      {/* ব্যাকগ্রাউন্ড রেডিয়াল লাইট ইফেক্ট */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-136 h-96 bg-sky-500/10 dark:bg-sky-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* বাঁ দিকের টেক্সট ও কল-টু-অ্যাকশন (৭ কলাম) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* লাইভ ব্যাজ */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800/80 mb-6"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Next-Gen Engineering & Growth Agency</span>
            </motion.div>

            {/* মেইন হেডলাইন ও ক্যারেক্টার-বাই-ক্যারেক্টার টাইপরাইটার */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-slate-900 dark:text-white min-h-44 sm:min-h-48 lg:min-h-56">
              Engineering High-Speed <br />
              <span className="text-sky-500 dark:text-sky-400 inline-block">
                {currentText}
                <span className="inline-block w-0.5 h-[1em] bg-sky-500 dark:bg-sky-400 ml-1.5 animate-pulse align-middle" />
              </span>
              <br />
              That Scale Revenue.
            </h1>

            {/* সাব-হেডিং */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              We blend production-grade full-stack architecture with high-converting marketing funnels to build enterprise portals, websites, and business systems that drive measurable ROI.
            </p>

            {/* ডুয়াল বাটন */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-lg shadow-sky-500/10 hover:opacity-95 transition-all"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <span>Explore Case Studies</span>
              </a>
            </div>

            {/* ট্রাস্ট ব্যাজ */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Next.js Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Performance Funnels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Enterprise Portals</span>
              </div>
            </div>
          </div>

          {/* ডান দিকের ইন্টারঅ্যাক্টিভ কোড + পূর্ণাঙ্গ গ্রোথ কার্ভ গ্রাফ কার্ড (৫ কলাম) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0A192F]/95 backdrop-blur-xl shadow-2xl p-6 overflow-hidden">
              
              {/* ড্যাশবোর্ড উইন্ডো হেডার */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Code2 size={13} />
                  <span>kivo-growth-engine.ts</span>
                </div>
              </div>

              {/* সংক্ষিপ্ত কোড কনসোল ভিউ */}
              <div className="mt-3.5 font-mono text-xs leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50">
                <p className="text-sky-600 dark:text-sky-400 font-semibold">{"// 1. Build Scalable Core"}</p>
<p className="text-slate-700 dark:text-slate-300">
  {"const platform = await deployApp({ speed: '100ms' });"}
</p>
<p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">{"// 2. Scale Organic & Paid Funnel"}</p>
                <p className="text-slate-700 dark:text-slate-300">const analytics = await scaleRevenue(platform);</p>
              </div>

              {/* সম্পূর্ণ গ্রোথ অ্যান্ড রেভিনিউ ভেক্টর চার্ট */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Revenue & Traffic Velocity</div>
                      <div className="text-[10px] text-slate-500">Live Client Cumulative Growth</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-emerald-500">+340% ROAS</span>
                    <div className="text-[10px] text-slate-400">Scale Index</div>
                  </div>
                </div>

                {/* SVG রেসপন্সিভ এরিয়া ও কার্ভ গ্রাফ */}
                <div className="relative w-full h-40 bg-slate-50/50 dark:bg-slate-950/40 rounded-xl p-2 border border-slate-100 dark:border-slate-800/60 overflow-hidden">
                  
                  {/* গ্রিড লাইনস */}
                  <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none opacity-20">
                    <div className="w-full border-b border-slate-400 dark:border-slate-600" />
                    <div className="w-full border-b border-slate-400 dark:border-slate-600" />
                    <div className="w-full border-b border-slate-400 dark:border-slate-600" />
                  </div>

                  <svg viewBox="0 0 400 140" className="w-full h-full overflow-visible">
                    <defs>
                      {/* এরিয়া ফিলের গ্রেডিয়েন্ট */}
                      <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                      {/* কার্ভ লাইনের গ্রেডিয়েন্ট */}
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="60%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>

                    {/* ব্যাকগ্রাউন্ড ফিল এরিয়া অ্যানিমেশন */}
                    <motion.path
                      d="M 10 120 C 70 115, 120 95, 180 80 C 240 65, 290 35, 390 15 L 390 135 L 10 135 Z"
                      fill="url(#growthGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    />

                    {/* মেইন গ্রোথ কার্ভ স্ট্রোক পাথ অ্যানিমেশন */}
                    <motion.path
                      d="M 10 120 C 70 115, 120 95, 180 80 C 240 65, 290 35, 390 15"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                    />

                    {/* মূল পিক পয়েন্ট এবং পালস ইফেক্ট */}
                    <motion.circle
                      cx="390"
                      cy="15"
                      r="5"
                      fill="#10B981"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <circle cx="390" cy="15" r="9" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
                    
                    {/* ইন্টারমিডিয়েট পয়েন্ট */}
                    <circle cx="180" cy="80" r="3.5" fill="#6366F1" />
                  </svg>

                  {/* গ্রাফ ওভারলে ব্যাজ */}
                  <div className="absolute top-3 left-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-md border border-slate-200/60 dark:border-slate-700/60 text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-sm">
                    <Activity size={12} className="text-emerald-500 animate-pulse" />
                    <span>Live Output: Optimal</span>
                  </div>
                </div>

                {/* চার্টের নিচের সংক্ষিপ্ত মেট্রিক্স */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-1.5 rounded-lg border border-slate-100 dark:border-slate-800/40">
                    <div className="text-[10px] text-slate-500">Core Web Vital</div>
                    <div className="text-xs font-bold text-emerald-500">99.8%</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-1.5 rounded-lg border border-slate-100 dark:border-slate-800/40">
                    <div className="text-[10px] text-slate-500">Conversion Rate</div>
                    <div className="text-xs font-bold text-sky-500">+4.8%</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/40 p-1.5 rounded-lg border border-slate-100 dark:border-slate-800/40">
                    <div className="text-[10px] text-slate-500">Client Uptime</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">99.9%</div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};