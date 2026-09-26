"use client";

import React from "react";
import { Users, Mail, Globe, Share2 } from "lucide-react";

const teamMembers = [
  {
    name: "Nahiyan",
    role: "Founder & Lead Architect",
    specialty: "Full-Stack Web & Performance Scaling",
    bio: "Passionate about building scalable Next.js systems and ROI-driven marketing architectures for modern businesses.",
    social: {
      web: "https://github.com",
      share: "https://linkedin.com",
      email: "nahiyan@kivoit.com",
    },
  },
  {
    name: "Tanvir Hasan",
    role: "Senior Systems Engineer",
    specialty: "Cloud Architecture & PostgreSQL",
    bio: "Focuses on robust database design, API security, and high-availability enterprise management portals.",
    social: {
      web: "https://github.com",
      share: "https://linkedin.com",
      email: "tanvir@kivoit.com",
    },
  },
  {
    name: "Sabbir Ahmed",
    role: "Growth & Acquisition Lead",
    specialty: "Meta Ads, Google PPC & CRO",
    bio: "Specializes in full-funnel ad campaigns, conversion rate optimization, and tracking infrastructure.",
    social: {
      web: "https://github.com",
      share: "https://linkedin.com",
      email: "sabbir@kivoit.com",
    },
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 mb-4">
          <Users size={13} />
          <span>Core Squad</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          The Engineers & Growth Strategists
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Direct communication with the experts building and scaling your platform—no middle-management delays.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A192F]/70 p-6 flex flex-col justify-between hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all shadow-sm"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-5 shadow-md">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1">
                {member.role}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mb-4">
                {member.specialty}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {member.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3 text-slate-400">
              <a
                href={member.social.web}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
              <a
                href={member.social.share}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Network"
              >
                <Share2 size={16} />
              </a>
              <a
                href={`mailto:${member.social.email}`}
                className="p-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};