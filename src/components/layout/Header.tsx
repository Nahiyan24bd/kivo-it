"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ArrowUpRight, X } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const { openBooking } = useBooking();

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col items-center">
      {/* ১. টপ ব্যানার - স্পষ্ট এবং আলাদা রো */}
      {showBanner && (
        <div className="w-full bg-linear-to-r from-amber-500 via-emerald-500 to-sky-600 text-slate-950 font-bold text-xs sm:text-sm py-2 px-4 shadow-[0_4px_25px_rgba(16,185,129,0.3)] flex items-center justify-between relative z-10 transition-all">
          <div className="mx-auto flex items-center gap-2 text-center flex-wrap justify-center">
            <span className="bg-black text-amber-300 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              HOT OFFER
            </span>
            <span>ক্লিনিক, স্কুল ও ইউনিয়ন পরিষদ সফটওয়্যার ডেলিভারি শুরু হয়েছে!</span>
            <button
              onClick={openBooking}
              className="bg-black/90 text-white hover:bg-black px-3 py-0.5 rounded-lg text-xs font-black inline-flex items-center gap-1 transition-transform hover:scale-105 ml-1.5"
            >
              ফ্রি ৩০-মিনিট কল <ArrowUpRight size={13} />
            </button>
          </div>
          <button 
            onClick={() => setShowBanner(false)} 
            className="text-slate-950/80 hover:text-slate-950 p-1 rounded-md hover:bg-black/10 transition-colors"
            aria-label="Close Announcement"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* ২. ফ্রস্টেড আইফোন গ্লাস ন্যাভবার - পর্যাপ্ত মার্জিন সহ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <header className="relative rounded-2xl bg-slate-950/70 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)] px-5 py-3 flex items-center justify-between">
          <BrandLogo />

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-200">
            <Link href="/#demos" className="hover:text-amber-400 transition-colors">ডেমো সফটওয়্যার</Link>
            <Link href="/#offers" className="hover:text-amber-400 transition-colors">স্পেশাল প্যাকেজ</Link>
            <Link href="/#calculator" className="hover:text-amber-400 transition-colors">বাজেট ক্যালকুলেটর</Link>
            <Link href="/#work" className="hover:text-amber-400 transition-colors">কেস স্টাডিজ</Link>
            <Link href="/#process" className="hover:text-amber-400 transition-colors">কাজের ধাপ</Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <ThemeToggle />
            </div>

            <button
              onClick={openBooking}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-linear-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <span>Book a Call</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};