"use client";

import React, { useState } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  const { openBooking } = useBooking();

  if (!visible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 text-white text-[11px] font-semibold py-1.5 px-4 flex items-center justify-between shadow-md">
      <div className="mx-auto flex items-center gap-2">
        <Sparkles size={12} className="animate-spin" />
        <span>Deploying custom Union & Clinic ERPs with zero downtime.</span>
        <button
          onClick={openBooking}
          className="underline hover:text-sky-200 transition-colors inline-flex items-center gap-1 ml-1"
        >
          Book free 30-min strategy call <ArrowRight size={11} />
        </button>
      </div>
      <button onClick={() => setVisible(false)} className="text-white/80 hover:text-white">
        <X size={13} />
      </button>
    </div>
  );
};