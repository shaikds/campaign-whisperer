
import React from 'react';
import { CheckCircle } from 'lucide-react';

const whoIsItFor = [
  "קמפיינר בתחילת הדרך שרוצה ביטחון מקצועי וגיבוי אישי",
  "קמפיינר מנוסה שרוצה ללטש יכולות ולהעלות ריטיינר",
  "בעל עסק שמנהל קמפיינים בעצמו ורוצה לחשוב ולעבוד כמו מקצוען"
];

export default function Audience() {
  return (
    <section id="audience" className="py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-60 h-60 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl animate-bounce" style={{animationDuration: '12s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-bl from-violet-200/25 to-purple-300/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating shapes */}
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-purple-300/50 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-gradient-to-r from-violet-300/60 to-purple-400/60 rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 animate-slide-in-left">
              למי הליווי מתאים?
            </h2>
            <p className="text-2xl md:text-2xl text-gray-700 leading-relaxed mb-8 animate-fade-in-up text-center md:text-right" style={{animationDelay: '0.3s'}}>
              הליווי נועד לקמפיינרים שרוצים להפסיק להיות 'מפעילי קמפיינים' - ולהתחיל לחשוב כמו אסטרטגים אמיתיים.
              לאלה שכבר יודעים איך להריץ קמפיינים, אבל רוצים להבין את ה'למה' שמאחוריהם - ואיך לקחת שליטה מלאה על התוצאות, הזמן והערך שלהם מול הלקוחות.
            </p>
            <p className="text-2xl md:text-2xl text-gray-800 font-semibold animate-fade-in-up text-center md:text-right" style={{animationDelay: '0.4s'}}>
              אם אתה:
            </p>
          </div>
          <div className="space-y-4">
            {whoIsItFor.map((point, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center md:items-center gap-4 bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-purple-50/50 transition-all duration-300 animate-slide-in-right text-center md:text-right"
                style={{animationDelay: `${i * 0.1 + 0.5}s`}}
              >
                <CheckCircle className="w-8 h-8 md:w-8 md:h-8 text-purple-600 flex-shrink-0" />
                <span className="text-2xl md:text-2xl text-gray-800">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out both; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
      `}</style>
    </section>
  );
}
