"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight, MessageCircle } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface Addon {
  id: string;
  name: string;
  desc: string;
  price: number;
}

const projectTypes = [
  { id: "landing", name: "High-Converting Sales Funnel", desc: "বিজ্ঞাপনের জন্য সিঙ্গেল পেজ সেলস ফানেল", basePrice: 15000, days: 5 },
  { id: "ecommerce", name: "Next.js 15 E-Commerce", desc: "দ্রুতগতির আল্ট্রা-ফাস্ট অনলাইন শপ", basePrice: 35000, days: 12 },
  { id: "erp", name: "Custom Hospital / School ERP", desc: "পূর্ণাঙ্গ অটোমেটেড ম্যানেজমেন্ট সফটওয়্যার", basePrice: 60000, days: 25 },
  { id: "portal", name: "Govt / Pouroshava Portal", desc: "পৌরসভা ও ইউনিয়ন নাগরিক সেবা পোর্টাল", basePrice: 30000, days: 10 },
];

const availableAddons: Addon[] = [
  { id: "payment", name: "বিকাশ/নগদ/কার্ড অটো পেমেন্ট গেটওয়ে", desc: "ইনস্ট্যান্ট পেমেন্ট রিসিভ ও ইনভয়েস", price: 8000 },
  { id: "sms", name: "অটোমেটেড SMS এলার্ট সিস্টেম", desc: "অর্ডার ও টোকেন মেসেজ গ্রাহকের ফোনে যাবে", price: 5000 },
  { id: "admin", name: "রোল-বেসড মাল্টি এডমিন ড্যাশবোর্ড", desc: "ম্যানেজার ও স্টাফদের আলাদা পারমিশন", price: 12000 },
  { id: "speed", name: "সাব-সেকেন্ড এজ ক্লাউড অপ্টিমাইজেশন", desc: "১ সেকেন্ডের কমে ইনস্ট্যান্ট পেজ লোড", price: 6000 },
];

export const CostCalculator = () => {
  const { openBooking } = useBooking();
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [pages, setPages] = useState(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addonsTotal = selectedAddons.reduce((acc, currId) => {
    const addon = availableAddons.find((a) => a.id === currId);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const estimatedPrice = selectedType.basePrice + (pages > 5 ? (pages - 5) * 1500 : 0) + addonsTotal;
  const estimatedDays = selectedType.days + Math.floor(selectedAddons.length * 1.5);

  const getWhatsAppEstimateUrl = () => {
    const text = encodeURIComponent(
      `Hello Kivo IT! I calculated an estimate:\n- Framework: ${selectedType.name}\n- Scale: ${pages} Custom Units\n- Active Addons: ${selectedAddons.length}\n- Total Investment: ৳${estimatedPrice.toLocaleString()}\n- Timeline: ~${estimatedDays} Days.\nI want to discuss execution.`
    );
    return `https://wa.me/8801700000000?text=${text}`;
  };

  return (
    <section id="calculator" className="py-24 border-b border-white/10 relative">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/25 mb-4">
          <Calculator size={13} />
          <span>স্বচ্ছ বাজেট ও টাইমলাইন ক্যালকুলেটর</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Scope & Cost Engine
        </h2>
        <p className="mt-3 text-sm text-slate-400">
          আপনার প্রজেক্টের রিকোয়ারমেন্ট অনুযায়ী তাৎক্ষণিক খরচ ও ডেলিভারি সময় হিসাব করুন।
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* কনফিগারেশন এরিয়া */}
        <div className="lg:col-span-7 space-y-7">
          {/* ১. প্রজেক্ট টাইপ */}
          <div>
            <label className="text-xs font-black text-slate-300 uppercase tracking-wider block mb-3">
              ১. প্রজেক্ট ক্যাটাগরি বেছে নিন
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((pt) => {
                const isSelected = selectedType.id === pt.id;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedType(pt)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "border-sky-500 bg-sky-500/15 shadow-[0_0_20px_rgba(14,165,233,0.2)]"
                        : "border-white/10 bg-slate-900/40 hover:border-white/20"
                    }`}
                  >
                    <div className={`text-xs font-bold ${isSelected ? "text-sky-400" : "text-white"}`}>{pt.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{pt.desc}</div>
                    <div className="text-xs font-mono font-bold text-slate-200 mt-2">শুরু ৳{pt.basePrice.toLocaleString()}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ২. পেজ রেঞ্জ */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">
                ২. পেজ বা ড্যাশবোর্ড স্ক্রিন সংখ্যা
              </label>
              <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                {pages} টি পেজ / মডিউল
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={25}
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2">
              <span>১টি পেজ</span>
              <span>১০টি</span>
              <span>২৫টি পেজ (এন্টারপ্রাইজ)</span>
            </div>
          </div>

          {/* ৩. এড-অন ফিচারসমূহ */}
          <div>
            <label className="text-xs font-black text-slate-300 uppercase tracking-wider block mb-3">
              ৩. স্পেশাল মডিউল ও অ্যাড-অন
            </label>
            <div className="space-y-2.5">
              {availableAddons.map((addon) => {
                const active = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer select-none transition-all ${
                      active
                        ? "border-sky-500 bg-sky-500/15 shadow-sm"
                        : "border-white/10 bg-slate-900/40 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                        active ? "bg-sky-500 border-sky-500 text-white" : "border-slate-500 bg-slate-800"
                      }`}>
                        {active && <Check size={12} strokeWidth={3} />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{addon.name}</div>
                        <div className="text-[10px] text-slate-400">{addon.desc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-sky-400 shrink-0 ml-3">
                      +৳{addon.price.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ক্যালকুলেটর লাইভ প্রিভিউ কার্ড */}
        <div className="lg:col-span-5 rounded-3xl border border-sky-500/30 bg-slate-900/80 backdrop-blur-2xl p-7 shadow-[0_0_50px_rgba(14,165,233,0.15)] sticky top-28 space-y-6">
          <div className="border-b border-white/10 pb-5">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block mb-1">
              আনুমানিক প্রজেক্ট বাজেট
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              ৳{estimatedPrice.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
              <span>ডেলিভারি টাইমলাইন:</span>
              <span className="text-sky-400 font-bold bg-sky-500/10 px-2 py-0.5 rounded-md">
                ~{estimatedDays} কার্যদিবস
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>নির্বাচিত ফ্রেমওয়ার্ক:</span>
              <span className="font-bold text-white text-right">{selectedType.name}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>আর্কিটেকচার স্কেল:</span>
              <span className="font-bold text-white">{pages} Custom Views</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>যুক্ত অ্যাড-অন:</span>
              <span className="font-bold text-white">{selectedAddons.length} টি ফিচার</span>
            </div>
          </div>

          <div className="space-y-3 pt-3">
            <button
              onClick={openBooking}
              className="w-full py-3.5 rounded-2xl font-black text-xs bg-white text-slate-950 hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <span>এই বাজেটে আলোচনা শিডিউল করুন</span>
              <ArrowRight size={14} />
            </button>
            <a
              href={getWhatsAppEstimateUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-black text-xs bg-emerald-500 hover:bg-emerald-600 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <MessageCircle size={16} />
              <span>হোয়াটসঅ্যাপে হিসেব পাঠান</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};