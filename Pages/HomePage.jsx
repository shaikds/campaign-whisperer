import React from 'react';

import Hero from '../components/v2/Hero';
import Audience from '../components/v2/Audience';
import Benefits from '../components/v2/Benefits';
import About from '../components/v2/About';
import Testimonials from '../components/v2/Testimonials';
import Faq from '../components/v2/Faq';
import FinalCta from '../components/v2/FinalCta';
import WhatsAppButton from '../components/v2/WhatsappButton';
import Footer from '../components/v2/Footer';

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen flex flex-col" dir="rtl">
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Benefits />
        <Audience />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+972506618103" />
    </div>
  );
}