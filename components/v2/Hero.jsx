
import React from 'react';
import { Button } from "@/components/ui/button";
import LeadForm from './LeadForm';

export default function Hero() {
    const handleScrollTo = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
        }
    };
    
  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-bl from-violet-500/25 to-purple-600/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-grid-gray-700/5 [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Brand Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300">
              הלוחש לקמפיינרים
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center animate-hero-enter">
          
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              מקמפיינר <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 via-violet-400 to-purple-300">שקוף</span>,<br/>לשותף עסקי שאי אפשר בלעדיו
            </h1>
            <p className="text-2xl md:text-2xl text-gray-300 mb-6 max-w-xl mx-auto md:mx-0 text-center md:text-right">
              בוא להפוך מקמפיינר "טכני" לקמפיינר אמיתי, ששותף לערך, לאסטרטגיה ולשיווק שמייצר ערך אמיתי, שמצדיק ריטיינר גבוה יותר ובונה קריירה רווחית ויציבה.
            </p>
            <p className="text-2xl md:text-2xl font-bold text-center text-white my-8 animate-fade-in-delay-2 bg-gradient-to-r from-purple-100/20 to-violet-100/20 border-r-4 border-purple-400 pr-4 py-3 rounded-md shadow-lg backdrop-blur-sm">
             "קמפיינר מקצועי יותר = מכניס יותר כסף ללקוח = מכניס יותר כסף לעצמך"
            </p>
            <p className="text-2xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 text-center md:text-right">
              <span className="font-bold">איך?</span><br/>
              נרשמים לשיחות זום 1 על 1 איתי, ובתוך מספר שיעורים, אתה כבר תרגיש את הרמה המקצועית שלך עולה.
            </p>
          </div>
          
          <LeadForm id="hero-form" />

        </div>
      </div>

      <style jsx>{`
        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-hero-enter {
          animation: hero-enter 1.2s ease-out;
        }
      `}</style>
    </section>
  );
}
