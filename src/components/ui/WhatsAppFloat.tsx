"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  // আপনার এজেন্সির আসল WhatsApp নাম্বার বসান (আন্তর্জাতিক কোডসহ)
  const phoneNumber = "8801924648788"; 
  const defaultMessage = encodeURIComponent(
    "Hello Kivo IT team! I want to discuss a project regarding web/management systems."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Chat with us
      </span>
    </a>
  );
};