"use client";

import React, { useState, useEffect } from "react";
import { Clock, Check, Users, Server, Flame, Sparkles, ArrowRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export const Offers = () => {
  const { openBooking } = useBooking();
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 23 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const bundles = [
    {
      title: "Clinic & Hospital ERP Suite",
      tagline: "হসপিটাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টারের স্বয়ংক্রিয় ডিজিটাল সমাধান",
      badge: "🔥 MOST POPULAR",
      regularPrice: "৳৮৫,০০০",
      offerPrice: "৳৫৮,০০০",
      saveAmount: "৳২৭,০০০ ছাড়",
      targetAudience: "ক্লিনিক, ডায়াগনস্টিক ও প্রাইভেট হসপিটাল",
      trafficCapacity: "দৈনিক ৩,৫০০+ প্রেসক্রিপশন ও ওপিডি বিলিং",
      features: [
        "ফ্রি ১ বছর প্রিমিয়াম .com ডোমেইন + হাই-স্পিড ক্লাউড সার্ভার",
        "ডাক্তার রোস্টার, প্রেসক্রিপশন জেনারেটর ও কিউ ম্যানেজমেন্ট",
        "প্যাথলজি টেস্ট রিপোর্ট অটোমেশন ও প্রিন্ট বারকোড ইনভয়েস",
        "রোগীর মোবাইলে স্বয়ংক্রিয় SMS এলার্ট ও টোকেন নোটিফিকেশন",
        "স্টাফ ও অপারেটরদের জন্য ফুল টিম অন-সাইট ট্রেইনিং সাপোর্ট",
      ],
      popular: true,
      cardTheme: "border-cyan-500/50 bg-linear-to-b from-cyan-950/40 via-slate-900/90 to-slate-950/95 shadow-[0_0_50px_rgba(6,182,212,0.15)]",
      badgeTheme: "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]",
      accentColor: "text-cyan-400",
      btnTheme: "bg-linear-to-r from-amber-400 via-emerald-400 to-cyan-400 text-slate-950 font-black hover:opacity-95 shadow-lg shadow-cyan-500/20",
    },
    {
      title: "Pouroshava & Union Portal",
      tagline: "পৌরসভা ও ইউনিয়ন পরিষদের জন্য সরকারি মানসম্মত সিটিজেন পোর্টাল",
      badge: "GOVT STANDARD",
      regularPrice: "৳৫০,০০০",
      offerPrice: "৳৩৫,০০০",
      saveAmount: "৳১৫,০০০ ছাড়",
      targetAudience: "পৌরসভা ও ইউনিয়ন ডিজিটাল সেন্টার (UDC)",
      trafficCapacity: "একসাথে ৫০,০০০+ নাগরিক সেবা ও সনদ ভেরিফিকেশন",
      features: [
        "ফ্রি ১ বছর .gov.bd / .com ডোমেইন এবং ক্লাউড সিকিউরিটি সেটআপ",
        "অনলাইন ট্রেড লাইসেন্স ও ওয়ারিশ সনদের জন্য ডিজিটাল ফরম",
        "লাইসেন্স ও সনদ জাল রোধে QR কোড স্মার্ট ভেরিফিকেশন",
        "ডিজিটাল হোল্ডিং ট্যাক্স রেকর্ড, নাগরিক রসিদ ও লেজার হিসেব",
        "আজীবন ফ্রি সিকিউরিটি প্যাচ ও নিয়মিত ডেটাবেজ ব্যাকআপ",
      ],
      popular: false,
      cardTheme: "border-amber-500/40 bg-linear-to-b from-amber-950/30 via-slate-900/90 to-slate-950/95 shadow-[0_0_40px_rgba(245,158,11,0.12)]",
      badgeTheme: "bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]",
      accentColor: "text-amber-400",
      btnTheme: "bg-white/10 hover:bg-white/20 text-white border border-white/15",
    },
    {
      title: "High-ROAS E-Commerce Funnel",
      tagline: "টার্গেটেড ফেসবুক ও গুগল বিজ্ঞাপনের জন্য তৈরি সুপারফাস্ট সেলস ফানেল",
      badge: "🚀 HIGH ROI ENGINE",
      regularPrice: "৳৪৫,০০০",
      offerPrice: "৳২৯,৫০০",
      saveAmount: "৳১৫,৫০০ ছাড়",
      targetAudience: "ডিটুসি (D2C) ব্র্যান্ড, এফ-কমার্স ও সুপারশপ",
      trafficCapacity: "প্রতি মিনিটে ১৫,০০০+ ভিজিটর ক্র্যাশ-ফ্রি স্পিড",
      features: [
        "ফ্রি ১ বছর প্রিমিয়াম .com ডোমেইন ও আনলিমিটেড এসএসডি ক্লাউড",
        "Next.js ১৫ আল্ট্রা-ফাস্ট আর্কিটেকচার (০.৭ সেকেন্ড পেজ লোড)",
        "সিঙ্গেল-পেজ ডায়নামিক চেকআউট (ড্রপ-অফ বা বাউন্স রোধ)",
        "বিকাশ, নগদ, রকেট ও ভিসা/মাস্টারকার্ড অটো পেমেন্ট গেটওয়ে",
        "অ্যাড ট্র্যাকিংয়ের জন্য Meta Pixel, Conversion API ও GA4",
      ],
      popular: false,
      cardTheme: "border-emerald-500/40 bg-linear-to-b from-emerald-950/30 via-slate-900/90 to-slate-950/95 shadow-[0_0_40px_rgba(16,185,129,0.12)]",
      badgeTheme: "bg-emerald-400 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      accentColor: "text-emerald-400",
      btnTheme: "bg-white/10 hover:bg-white/20 text-white border border-white/15",
    },
  ];

  return (
    <section id="offers" className="py-20 border-b border-white/10 relative overflow-hidden">
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-amber-500/10 rounded-full pointer-events-none"
        style={{ width: "800px", height: "400px", filter: "blur(180px)" }}
      />

      <div className="max-w-4xl mx-auto text-center mb-14 relative z-10 px-4">
        {/* টপ অ্যানিমেটেড অফার ব্যাজ */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-black bg-linear-to-r from-amber-400 via-yellow-300 to-lime-400 text-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.4)] border border-white/40 animate-bounce mb-5">
          <Flame size={16} className="text-red-600 fill-red-600 animate-pulse" />
          <span>লিমিটেড টাইম এক্সক্লুসিভ লঞ্চ অফার — আজই বুক করুন!</span>
          <Sparkles size={16} className="text-amber-700 animate-spin" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Active Packages & Launch Bundles
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          আপনার ব্যবসার রূপান্তরে সেরা রেডিমেড ম্যানেজমেন্ট সিস্টেম ও হাই-স্পিড ওয়েবসাইট প্যাকেজ
        </p>

        {/* কাউন্টডাউন টাইমার */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 p-2.5 px-5 rounded-2xl bg-slate-900/90 border border-amber-400/40 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.18)]">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase">
            <Clock size={15} className="animate-spin" />
            <span>অফার শেষ হতে বাকি:</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-black text-white">
            <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-lg border border-amber-400/30">
              {String(timeLeft.hours).padStart(2, "0")}h
            </span>
            <span className="text-amber-400">:</span>
            <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-lg border border-amber-400/30">
              {String(timeLeft.minutes).padStart(2, "0")}m
            </span>
            <span className="text-amber-400">:</span>
            <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-lg border border-amber-400/30">
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        </div>
      </div>

      {/* কার্ড গ্রিড */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {bundles.map((bundle, i) => (
          <div
            key={i}
            className={`rounded-3xl p-6 sm:p-7 border ${bundle.cardTheme} backdrop-blur-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-opacity-100 overflow-hidden`}
          >
            <div>
              {/* ব্যাজ হেডার */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shrink-0 ${bundle.badgeTheme}`}>
                  {bundle.badge}
                </span>
                <span className="text-[11px] font-bold text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-md border border-amber-400/30 shrink-0">
                  {bundle.saveAmount}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                {bundle.title}
              </h3>
             <p 
  className="mt-1.5 text-xs text-slate-300 leading-relaxed" 
  style={{ minHeight: "36px" }}
>
  {bundle.tagline}
</p>

              {/* প্রাইসিং কন্টেইনার (ওভারফ্লো প্রতিরোধে ফ্লেক্স র‍্যাপ ও ফিক্সড মার্জিন) */}
              <div className="my-5 p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {bundle.offerPrice}
                  </span>
                  <span className="text-xs text-slate-500 line-through font-mono">
                    {bundle.regularPrice}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded border border-amber-400/30 whitespace-nowrap">
                  এককালীন
                </span>
              </div>

              {/* টার্গেট অডিয়েন্স ও ক্যাপাসিটি */}
              <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <Users size={14} className={`${bundle.accentColor} shrink-0`} />
                  <span className="truncate"><strong>কাদের জন্য:</strong> {bundle.targetAudience}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Server size={14} className="text-emerald-400 shrink-0" />
                  <span className="truncate"><strong>ক্যাপাসিটি:</strong> {bundle.trafficCapacity}</span>
                </div>
              </div>

              {/* ফিচার তালিকা */}
              <div className="space-y-2.5 mb-6">
                {bundle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span className="leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* কল টু অ্যাকশন বাটন */}
            <button
              onClick={openBooking}
              className={`w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${bundle.btnTheme}`}
            >
              <span>প্যাকেজটি লক করুন</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};