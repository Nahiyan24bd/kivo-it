"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2, MessageSquareQuote, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
  reviewText: string;
  verified: boolean;
}

const reviewsData: Review[] = [
  {
    id: "rev-1",
    name: "ড. তানভীর আহমেদ",
    role: "ব্যবস্থাপনা পরিচালক",
    company: "মেডহেলথ স্পেশালাইজড হসপিটাল",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Clinic & Hospital ERP Suite",
    reviewText: "আমাদের হসপিটালের ওপিডি টোকেন এবং প্যাথলজি বিলিং নিয়ে আগে অনেক ঝামেলা হতো। Kivo IT টিম মাত্র ১২ দিনে যে কাস্টম ERP সিস্টেম তৈরি করে দিয়েছে, তাতে আমাদের কাজের গতি তিনগুণ বেড়ে গেছে। রিয়েলি অ্যামেজিং সার্ভিস!",
    verified: true,
  },
  {
    id: "rev-2",
    name: "রাইয়ান চৌধুরী",
    role: "সিইও ও প্রতিষ্ঠাতা",
    company: "আরবান ক্রাফট ডিটুসি ব্র্যান্ড",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "High-ROAS E-Commerce Funnel",
    reviewText: "আগের সাইট স্লো থাকায় ফেসবুক অ্যাড থেকে ট্রাফিক এসেও সেল হচ্ছিল না। Kivo IT-এর Next.js আল্ট্রা-ফাস্ট স্টোর এবং সিঙ্গেল-পেজ চেকআউট নেওয়ার পর আমাদের আরওআই (ROAS) ৪.৮x এ উন্নীত হয়েছে। হাইলি রিকমেন্ডেড!",
    verified: true,
  },
  {
    id: "rev-3",
    name: "মোহাম্মদ ইকবাল হোসেন",
    role: "সেক্রেটারি",
    company: "কেন্দ্রীয় পৌরসভা সেবা কেন্দ্র",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Pouroshava Citizen Portal",
    reviewText: "নাগরিকদের ট্রেড লাইসেন্স ও হোল্ডিং ট্যাক্স কালেকশন এখন অনলাইনে ঘরের বসেই হচ্ছে। QR কোড ভেরিফিকেশন সিস্টেমটি পুরো প্রক্রিয়াকে অত্যন্ত স্বচ্ছ করেছে। তাদের সাপোর্ট টিম যেকোনো সমস্যায় ইনস্ট্যান্ট রেসপন্স করে।",
    verified: true,
  },
];

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviewsData[activeIndex];

  return (
    <section id="reviews" className="py-24 border-b border-white/10 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500/10 rounded-full pointer-events-none"
        style={{ width: "700px", height: "400px", filter: "blur(180px)" }}
      />

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          <MessageSquareQuote size={15} className="text-amber-400" />
          <span>ভেরিফাইড ক্লায়েন্ট ফিডব্যাক ও রিভিউ</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          আমাদের তৈরি করা ম্যানেজমেন্ট সিস্টেম এবং হাই-স্পিড ওয়েবসাইট ব্যবহার করে ক্লায়েন্টরা কী বলছেন তা জানুন।
        </p>
      </div>

      {/* রিভিউ কারাউসেল কার্ড */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="rounded-3xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
          
          <div className="absolute top-8 right-8 text-sky-500/20">
            <Quote size={80} />
          </div>

          <div className="relative z-10 space-y-6">
            {/* স্টার রেটিং */}
            <div className="flex items-center gap-1.5">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                Verified Client
              </span>
            </div>

            {/* রিভিউ টেক্সট */}
            <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed italic">
              &ldquo;{activeReview.reviewText}&rdquo;
            </p>

            {/* ক্লায়েন্ট ইনফো ও অপ্টিমাইজড ইমেজ */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  width={56}
                  height={56}
                  unoptimized
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-sky-500/50 shadow-md"
                />
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                    {activeReview.name}
                    {activeReview.verified && (
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    )}
                  </h3>
                  <p className="text-xs text-slate-400">{activeReview.role}, <strong className="text-slate-300">{activeReview.company}</strong></p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">প্রজেক্ট ক্যাটাগরি</span>
                <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-lg border border-sky-500/20 inline-block mt-1">
                  {activeReview.projectType}
                </span>
              </div>
            </div>
          </div>

          {/* নেভিগেশন কন্ট্রোল বাটন */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? "w-8 bg-sky-400" : "w-2 bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all active:scale-95"
                aria-label="Previous Review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all active:scale-95"
                aria-label="Next Review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};