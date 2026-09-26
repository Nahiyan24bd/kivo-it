import React from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <BrandLogo />
        
        <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
          <a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-slate-900 dark:hover:text-white transition-colors">Case Studies</a>
          <a href="#process" className="hover:text-slate-900 dark:hover:text-white transition-colors">Process</a>
          <a href="#team" className="hover:text-slate-900 dark:hover:text-white transition-colors">Team</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Kivo IT Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};