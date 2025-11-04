
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
      q: "זה מתאים גם אם אני בתחילת הדרך?",
      a: "כן, הליווי מותאם אישית לפי הרמה שלך."
    },
    {
      q: "מה ההבדל מקורס אונליין?",
      a: "כאן זה אישי, פרקטי, ומותאם בדיוק לאתגרים שלך."
    },
    {
      q: "איך זה מתבצע?",
      a: "שיחות זום + קבוצת וואטסאפ פעילה."
    },
    {
      q: "כמה זמן עד שרואים תוצאות?",
      a: "כבר מהמפגש הראשון תקבל תובנות יישומיות."
    }
];

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-purple-500/8 to-violet-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-tr from-purple-400/6 to-pink-400/6 rounded-full blur-3xl animate-bounce" style={{animationDuration: '14s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-bl from-violet-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Question mark shapes */}
        <div className="absolute top-32 right-1/4 text-purple-400/20 text-6xl font-bold animate-bounce" style={{animationDelay: '1s', animationDuration: '8s'}}>?</div>
        <div className="absolute bottom-40 left-1/3 text-violet-400/15 text-4xl font-bold animate-pulse" style={{animationDelay: '3s'}}>?</div>
      </div>

      <div className="max-w-3xl mx-auto px-4 relative flex flex-col items-center">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 animate-fade-in">
            שאלות נפוצות
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
            כל מה שאתה צריך לדעת לפני שמתחילים
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-2xl space-y-3 mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-gray-800/40 border border-gray-700/40 rounded-xl hover:bg-gray-800/60 hover:border-purple-500/40 hover:shadow-md hover:shadow-purple-500/5 transition-all duration-300 animate-slide-up group cursor-pointer"
              style={{animationDelay: `${i * 0.1}s`}}
            >
              <AccordionTrigger className="text-right text-white font-semibold text-xl md:text-2xl lg:text-3xl p-4 md:p-5 hover:no-underline hover:text-purple-300 transition-colors duration-300 flex items-center gap-3 w-full cursor-pointer [&[data-state=open]]:pb-0">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  {i + 1}
                </span>
                <span className="flex-1">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 md:px-12 py-6 md:py-8 text-gray-300 text-lg md:text-xl leading-relaxed ml-12 mr-4 text-center md:text-right">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out both; }
      `}</style>
    </section>
  );
}
