import { Contact } from '@/components/sections/Contact';
import { DemoShowcase } from '@/components/sections/DemoShowcase';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Process } from '@/components/sections/Process';
import { Services } from '@/components/sections/Services';
import { Team } from '@/components/sections/Team';
import { TechMarquee } from '@/components/sections/TechMarquee';
import React from 'react';


const page = () => {
  return (
   <div className="flex flex-col min-h-screen">
      <Hero />
      <TechMarquee />
      <DemoShowcase />
      <Services />
      <Portfolio />
      <Process />
      <Team/>
      <Contact />
    </div>
  );
};

export default page;