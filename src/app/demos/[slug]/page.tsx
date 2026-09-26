import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { demos } from "@/data/demos";
import { ArrowLeft, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DemoDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = demos.find((d) => d.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4 max-w-5xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-sky-500 hover:underline mb-8"
      >
        <ArrowLeft size={16} /> Back to Main Site
      </Link>

      <div className="relative h-80 w-full rounded-3xl overflow-hidden mb-8 border border-slate-200 dark:border-slate-800">
        <Image
          src={project.bannerImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              {project.category} • {project.subCategory}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white mt-1">
              {project.title}
            </h1>
          </div>
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-2 transition-all w-fit"
          >
            <span>Launch Interactive Simulator</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Overview</h2>
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

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 h-fit space-y-4">
          <div className="flex items-center gap-2 text-sky-500 font-bold text-xs">
            <ShieldCheck size={18} />
            <span>Ready for Custom Deployment</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Need customized modules, local database hosting, or third-party SMS/Payment gateway integration for this system?
          </p>
          <a
            href={`https://wa.me/8801700000000?text=I%20am%20interested%20in%20deploying%20${encodeURIComponent(project.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center transition-all"
          >
            Request Quotation
          </a>
        </div>
      </div>
    </div>
  );
}