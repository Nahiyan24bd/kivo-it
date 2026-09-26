"use client";

import React, { useState } from "react";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, Send } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const availableTimeSlots = [
  "10:00 AM - 10:30 AM",
  "11:30 AM - 12:00 PM",
  "03:00 PM - 03:30 PM",
  "04:30 PM - 05:00 PM",
  "08:00 PM - 08:30 PM",
];

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Call Scheduled!</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Booked for {selectedDate} at {selectedSlot}. Details sent to {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-sky-500 uppercase tracking-widest">Reserve Slot</span>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Schedule Strategy Call</h2>
            </div>

            {/* Date Selection */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <CalendarIcon size={14} className="text-sky-500" /> Select Date
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Clock size={14} className="text-sky-500" /> Available Open Slots
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableTimeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 rounded-xl text-[11px] font-semibold border transition-all text-center ${
                      selectedSlot === slot
                        ? "border-sky-500 bg-sky-500/10 text-sky-500 dark:text-sky-400"
                        : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs focus:outline-none focus:border-sky-500"
              />
              <input
                type="email"
                placeholder="Work Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs focus:outline-none focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              disabled={!selectedDate || !selectedSlot}
              className="w-full py-3 rounded-xl font-bold text-xs bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>Confirm Strategy Booking</span>
              <Send size={13} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};