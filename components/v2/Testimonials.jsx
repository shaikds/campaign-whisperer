import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
      name: "שלומי",
      text: "אני עובד עם דניאל כבר 3-4 חודשים ורוצה להמליץ בחום... לפני שהכרתי אותו הייתי סתם זורק כסף על קמפיינים בלי להבין מה קורה, הוא פשוט עזר לי לראות את הדברים אחרת, להבין איך לקרוא את המספרים ולא לבזבז זמן על שטויות.",
    },
    {
      name: "ינון",
      text: "אני רוצה לתת לכם המלצה חמה על דניאל קרנירו, אחד הטובים בארץ. קמפיינר אמיתי, מקצוען על, מי שיכנס איתו לליווי - רק ירוויח.",
    },
    {
      name: "רועי",
      text: "מהשיחה הראשונה הרגשתי שדניאל מבין בדיוק את האתגרים שלי כקמפיינר. הוא לא מדבר בסיסמאות - הוא יורד לפרקטיקה, עוזר לנתח סיטואציות אמיתיות, ומכוון אותך לחשוב כמה צעדים קדימה."  
    },
    {
      name: "נטע",
      text: "הליווי עם דניאל פתח לי את הראש. פתאום הבנתי איך לגשת לקמפיינים בצורה חכמה ולא רק טכנית - איך לקרוא נתונים, איך להציג ללקוח, ואיך לחשוב כמו מנהל אסטרטגי. זה בדיוק מה שחיפשתי."
    }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 pb-32 bg-gradient-to-br from-white via-purple-50 to-violet-100 relative">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-32 w-64 h-64 bg-gradient-to-br from-purple-200/25 to-violet-200/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl animate-bounce" style={{animationDuration: '12s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-bl from-violet-200/20 to-purple-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating stars */}
        <div className="absolute top-32 left-1/4 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>
          <Star className="w-4 h-4 text-purple-300/60 fill-current" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}>
          <Star className="w-3 h-3 text-violet-400/50 fill-current" />
        </div>
        <div className="absolute top-20 right-1/2 animate-pulse" style={{animationDelay: '3s'}}>
          <Star className="w-5 h-5 text-purple-400/40 fill-current" />
        </div>
      </div>

       <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-black font-primary text-gray-900 mb-4 animate-fade-in">
            מה הקמפיינרים אומרים על הליווי?
          </h2>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative" style={{ minHeight: '400px' }}>
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4"
                style={{
                  opacity: i === currentIndex ? 1 : 0,
                  transform: i === currentIndex ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                  pointerEvents: i === currentIndex ? 'auto' : 'none'
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 md:p-10 shadow-xl">
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="font-bold font-primary text-gray-900 text-2xl md:text-2xl">{item.name}</div>
                  </div>
                  <p className="text-gray-700 italic text-xl md:text-xl font-medium font-hebrew leading-relaxed text-center" style={{ direction: 'rtl' }}>"{item.text}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-purple-600 hover:bg-purple-100 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-purple-600 hover:bg-purple-100 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

  {/* Dot Indicators */}
<div className="flex justify-center gap-2 mt-8 scale-[0.3] md:scale-100">
  {testimonials.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`transition-all duration-300 rounded-full ${
        index === currentIndex
          ? 'bg-purple-600 w-6 h-2 shadow-lg'
          : 'bg-purple-300 w-2 h-2 hover:bg-purple-400'
      }`}
      aria-label={`Go to testimonial ${index + 1}`}
    />
  ))}
</div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </section>
  );
}