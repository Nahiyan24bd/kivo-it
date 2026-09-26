"use client";

import React, { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { demos } from "@/data/demos";
import { ArrowLeft, CheckCircle2, ExternalLink, ShieldCheck, Monitor, Tablet, Smartphone, Copy, Check } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DemoDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = demos.find((d) => d.slug === slug);
  const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copied, setCopied] = useState(false);

  if (!project) notFound();

  const copyCreds = () => {
    navigator.clipboard.writeText("demo@kivoit.com / demo1234");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const deviceWidthClasses = {
    desktop: "w-full",
    tablet: "max-w-2xl mx-auto",
    mobile: "max-w-sm mx-auto",
  };

  return (
    <div className="min-h-screen py-16 px-4 max-w-6xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-sky-500 hover:underline mb-8"
      >
        <ArrowLeft size={16} /> Back to Main Site
      </Link>

      {/* ডিভাইস টপ কন্ট্রোল বার */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">{project.title}</h1>
          <p className="text-xs text-slate-500">{project.subCategory} • Live Interactive Simulator</p>
        </div>

        <div className="flex items-center gap-2">
          {/* স্ক্রিন সাইজ টগল বাটন */}
          <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${deviceMode === "desktop" ? "bg-white dark:bg-slate-800 text-sky-500" : "text-slate-400"}`}
              title="Desktop View"
            >
              <Monitor size={15} />
            </button>
            <button
              onClick={() => setDeviceMode("tablet")}
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${deviceMode === "tablet" ? "bg-white dark:bg-slate-800 text-sky-500" : "text-slate-400"}`}
              title="Tablet View"
            >
              <Tablet size={15} />
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${deviceMode === "mobile" ? "bg-white dark:bg-slate-800 text-sky-500" : "text-slate-400"}`}
              title="Mobile View"
            >
              <Smartphone size={15} />
            </button>
          </div>

          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <span>Direct Window</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* স্যান্ডবক্স আইফ্রেম / সিমুলেটর কন্টেইনার */}
      <div className={`transition-all duration-300 rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-slate-950 mb-10 ${deviceWidthClasses[deviceMode]}`}>
        <div className="h-9 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] font-mono text-slate-400 mx-auto select-none">{project.previewUrl}</span>
        </div>
        <div className="relative h-128 w-full bg-slate-900">
          <iframe
            src={project.previewUrl}
            title={project.title}
            className="w-full h-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>

      {/* ইনফরমেশন এবং ডেমো টেস্ট লগইন ক্রেডেনশিয়াল */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Architecture & System Overview</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Enterprise Modules Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ক্রেডেনশিয়াল ও ডিপ্লয়মেন্ট কার্ড */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Sandbox Test Credentials</span>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 font-mono text-xs text-sky-400 flex items-center justify-between">
              <span>demo@kivoit.com / demo1234</span>
              <button onClick={copyCreds} className="hover:text-white transition-colors" title="Copy Credentials">
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-4">
            <div className="flex items-center gap-2 text-sky-500 font-bold text-xs">
              <ShieldCheck size={18} />
              <span>Production Deployment</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Deploy this portal into your own infrastructure with zero vendor lock-in.
            </p>
            <a
              href={`https://wa.me/8801924648788?text=I%20want%20quotation%20for%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center transition-all"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}