import React from "react";
import Link from "next/link";

export const BrandLogo = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-3 group select-none">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0A192F] border border-slate-700 shadow-sm transition-transform duration-200 group-hover:scale-105">
        <div className="absolute top-2 left-2 flex gap-1">
          <span className="w-1 h-1 rounded-full bg-red-500" />
          <span className="w-1 h-1 rounded-full bg-amber-500" />
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
        </div>

        <svg viewBox="0 0 24 24" className="w-5 h-5 mt-1" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="4" x2="6" y2="20" stroke="#FFFFFF" />
          <polyline points="16 5 8 12" stroke="#38BDF8" />
          <polyline points="9 11 17 19" stroke="#FFFFFF" />
          <polyline points="13 19 17 19 17 15" stroke="#FFFFFF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Kivo
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 border border-sky-300 dark:bg-slate-800 dark:text-sky-400 dark:border-sky-500/30">
            IT
          </span>
        </div>
        <span className="text-[8px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
          Engineering & Growth
        </span>
      </div>
    </Link>
  );
};