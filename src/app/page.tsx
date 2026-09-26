import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { TechMarquee } from '@/components/sections/TechMarquee';
import { DemoShowcase } from '@/components/sections/DemoShowcase';
import { CostCalculator } from '@/components/sections/CostCalculator';
import { Services } from '@/components/sections/Services';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Portfolio } from '@/components/sections/Portfolio';
import { Offers } from '@/components/sections/Offers';
import { Reviews } from '@/components/sections/Reviews'; // নতুন ইমপোর্ট
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { AuditRequest } from '@/components/sections/AuditRequest';
import { Contact } from '@/components/sections/Contact';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TechMarquee />
      <DemoShowcase />
      <CostCalculator />
      <Services />
      <CaseStudies />
      <Portfolio />
      <Offers />
      <Reviews /> {/* অফার ও প্রসেসের মাঝখানে রিভিউ */}
      <Process />
      <Team />
      <AuditRequest />
      <Contact />
    </div>
  );
};

export default Page;