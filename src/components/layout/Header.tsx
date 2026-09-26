"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  const navLinks = [
    { label: "ডেমো সফটওয়্যার", href: "/#demos" },
    { label: "স্পেশাল প্যাকেজ", href: "/#offers" },
    { label: "বাজেট ক্যালকুলেটর", href: "/#calculator" },
    { label: "কেস স্টাডিজ", href: "/#work" },
    { label: "কাজের ধাপ", href: "/#process" },
    { label: "রিভিউ", href: "/#reviews" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col items-center">
      {/* ১. টপ ব্যানার */}
      {showBanner && (
        <div className="w-full bg-linear-to-r from-amber-500 via-emerald-500 to-sky-600 text-slate-950 font-bold text-xs sm:text-sm py-2 px-4 shadow-[0_4px_25px_rgba(16,185,129,0.3)] flex items-center justify-between relative z-10 transition-all">
          <div className="mx-auto flex items-center gap-2 text-center flex-wrap justify-center">
            <span className="bg-black text-amber-300 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              HOT OFFER
            </span>
            <span className="text-[11px] sm:text-xs">ক্লিনিক, স্কুল ও ইউনিয়ন পরিষদ সফটওয়্যার ডেলিভারি শুরু হয়েছে!</span>
            <button
              onClick={openBooking}
              className="bg-black/90 text-white hover:bg-black px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-black inline-flex items-center gap-1 transition-transform hover:scale-105"
            >
              ফ্রি ৩০-মিনিট কল <ArrowUpRight size={12} />
            </button>
          </div>
          <button 
            onClick={() => setShowBanner(false)} 
            className="text-slate-950/80 hover:text-slate-950 p-1 rounded-md hover:bg-black/10 transition-colors"
            aria-label="Close Announcement"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* ২. প্রিমিয়াম গ্লাস ন্যাভবার */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-2">
        <header className="relative rounded-2xl bg-slate-950/75 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)] px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between">
          <BrandLogo />

          {/* ডেস্কটপ নেভিগেশন */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-200">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-amber-400 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ডান পাশের অ্যাকশন ও হ্যামবার্গার বাটন */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <ThemeToggle />
            </div>

            <button
              onClick={openBooking}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-slate-950 bg-linear-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-md active:scale-95 transition-all"
            >
              <span>Book a Call</span>
              <ArrowUpRight size={13} />
            </button>

            {/* মোবাইল হ্যামবার্গার টগল বাটন */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 active:scale-90 transition-all"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {/* ৩. মোবাইল স্লাইড ডাউন মেনু */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-amber-300 hover:bg-white/5 transition-all"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full mt-2 py-3 rounded-xl text-xs font-black text-slate-950 bg-linear-to-r from-amber-400 to-emerald-400 flex items-center justify-center gap-1.5 shadow-md active:scale-95"
            >
              <span>Book a Call</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};