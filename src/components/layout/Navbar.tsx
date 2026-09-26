"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ArrowUpRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export const Navbar = () => {
  const { openBooking } = useBooking();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        {/* iOS Style Floating Glass Pill Container */}
        <div className="relative rounded-2xl bg-white/60 dark:bg-slate-950/65 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <BrandLogo />

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Link href="/#services" className="hover:text-sky-500 transition-colors">Services</Link>
            <Link href="/#work" className="hover:text-sky-500 transition-colors">Case Studies</Link>
            <Link href="/#demos" className="hover:text-sky-500 transition-colors">Demos</Link>
            <Link href="/#process" className="hover:text-sky-500 transition-colors">Process</Link>
            <Link href="/#team" className="hover:text-sky-500 transition-colors">Team</Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="p-1 rounded-xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md">
              <ThemeToggle />
            </div>

            {/* iOS Glass Button */}
            <button
              onClick={openBooking}
              className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-bold text-white bg-linear-to-r from-sky-500/90 to-blue-600/90 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/25 border border-white/30 backdrop-blur-lg active:scale-95 transition-all duration-200"
            >
              <span>Book a Call</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};