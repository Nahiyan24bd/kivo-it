"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Users, Briefcase, Award, ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
}

export const Team = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function loadTeam() {
      try {
        const res = await fetch("/api/team");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMembers(data);
        if (data.length > 0) {
          // মাঝের মেম্বারকে ডিফল্ট একটিভ রাখা
          setActiveIndex(Math.floor(data.length / 2));
        }
      } catch (err) {
        console.error("Failed loading team data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadTeam();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  // কার্ডের রিলেটিভ পজিশন ক্যালকুলেট করা (-2, -1, 0, 1, 2)
  const getCardStyle = (index: number) => {
    const total = members.length;
    let offset = (index - activeIndex + total) % total;
    if (offset > Math.floor(total / 2)) {
      offset -= total;
    }

    if (offset === 0) {
      // সেন্ট্রাল ফ্রন্ট কার্ড
      return {
        transform: "translateX(0%) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (offset === -1) {
      // ভেতরের বাম পাশের কার্ড (পিছনে অর্ধেক দেখা যাবে)
      return {
        transform: "translateX(-48%) scale(0.92)",
        zIndex: 20,
        opacity: 0.85,
        filter: "blur(0.5px)",
      };
    } else if (offset === 1) {
      // ভেতরের ডান পাশের কার্ড (পিছনে অর্ধেক দেখা যাবে)
      return {
        transform: "translateX(48%) scale(0.92)",
        zIndex: 20,
        opacity: 0.85,
        filter: "blur(0.5px)",
      };
    } else if (offset === -2) {
      // একদম পেছনের বাম উইং
      return {
        transform: "translateX(-88%) scale(0.84)",
        zIndex: 10,
        opacity: 0.5,
        filter: "blur(1.5px)",
      };
    } else if (offset === 2) {
      // একদম পেছনের ডান উইং
      return {
        transform: "translateX(88%) scale(0.84)",
        zIndex: 10,
        opacity: 0.5,
        filter: "blur(1.5px)",
      };
    } else {
      // অন্য কার্ড থাকলে লুকিয়ে থাকবে
      return {
        transform: "translateX(0%) scale(0.7)",
        zIndex: 0,
        opacity: 0,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section id="team" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
      {/* হেডার */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 mb-4">
          <Users size={13} />
          <span>Leadership Squad</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          The Engineers & Growth Leaders
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Interactive layer stack. Click any side card or use navigation controls to bring members to focus.
        </p>
      </div>

      {loading ? (
        <div className="h-104 max-w-sm mx-auto rounded-3xl bg-slate-200 dark:bg-slate-800/50 animate-pulse" />
      ) : (
        <div className="relative w-full max-w-5xl mx-auto px-4">
          {/* 3D লেয়ার্ড স্লাইস কন্টেইনার */}
          <div className="relative h-112 flex items-center justify-center">
            {members.map((member, index) => {
              const style = getCardStyle(index);
              const isCenter = index === activeIndex;

              return (
                <div
                  key={member.id}
                  onClick={() => setActiveIndex(index)}
                  style={style}
                  className="absolute w-72 sm:w-80 h-104 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-slate-900 shadow-2xl transition-all duration-500 ease-out cursor-pointer select-none"
                >
                  {/* ফুল ইমেজ */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 300px, 340px"
                    className="object-cover object-center pointer-events-none"
                    priority={isCenter}
                  />

                  {/* টপ এক্সপেরিয়েন্স চিপ */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-950/70 text-sky-400 backdrop-blur-md border border-white/10 shadow-sm">
                      <Award size={12} />
                      {member.experience}
                    </span>
                  </div>

                  {/* বটম ট্রান্সপারেন্ট ইনফরমেশন প্যানেল */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 bg-linear-to-t from-slate-950 via-slate-950/85 to-transparent backdrop-blur-md border-t border-white/10">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                      <Briefcase size={12} />
                      {member.role}
                    </span>

                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      {member.name}
                    </h3>

                    <p className="text-xs font-medium text-slate-300 mb-2">
                      {member.designation}
                    </p>

                    <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ক্যারোসেল কন্ট্রোল বাটন ও ডটস */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:border-sky-500/50 transition-all shadow-sm active:scale-95"
              aria-label="Previous Team Member"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {members.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-sky-500"
                      : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:border-sky-500/50 transition-all shadow-sm active:scale-95"
              aria-label="Next Team Member"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};