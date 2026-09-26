import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { TechMarquee } from '@/components/sections/TechMarquee';
import { DemoShowcase } from '@/components/sections/DemoShowcase';
import { CostCalculator } from '@/components/sections/CostCalculator';
import { Services } from '@/components/sections/Services';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Portfolio } from '@/components/sections/Portfolio';
import { Offers } from '@/components/sections/Offers';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { AuditRequest } from '@/components/sections/AuditRequest';
import { Contact } from '@/components/sections/Contact';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ১. ভ্যালু প্রপোজিশন ও টাইপিং অ্যানিমেশন */}
      <Hero />

      {/* ২. পার্টনার ও টেক স্ট্যাক ট্রাস্ট সিগন্যাল */}
      <TechMarquee />

      {/* ৩. লাইভ ডেমো ও ম্যানেজমেন্ট সিস্টেম ক্যাটাগরি */}
      <DemoShowcase />

      {/* ৪. ইন্টারঅ্যাক্টিভ প্রাইসিং ও স্কোপ ক্যালকুলেটর */}
      <CostCalculator />

      {/* ৫. কোর ডেভেলপমেন্ট ও গ্রোথ সার্ভিসেস */}
      <Services />

      {/* ৬. ক্লায়েন্ট মেট্রিক্স ও আরওআই ভিত্তিক কেস স্টাডি */}
      <CaseStudies />

      {/* ৭. কমপ্লিট ক্লায়েন্ট ওয়ার্ক ও পোর্টফোলিও */}
      <Portfolio />

      {/* ৮. লিমিটেড-টাইম অফার ও লঞ্চ বান্ডেল */}
      <Offers />

      {/* ৯. ৪-ধাপের এক্সিকিউশন প্রসেস */}
      <Process />

      {/* ১০. কোডিং ও গ্রোথ ইঞ্জিনিয়ার্স টিম */}
      <Team />

      {/* ১১. জিরো-কস্ট সাইট/সিস্টেম অডিট লিড ফর্ম */}
      <AuditRequest />

      {/* ১২. ডিরেক্ট ইনকোয়ারি ও অফিস কন্টাক্ট */}
      <Contact />
    </div>
  );
};

export default Page;