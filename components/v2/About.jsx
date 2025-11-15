
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-purple-50 via-white to-violet-50 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-20 w-52 h-52 bg-gradient-to-br from-purple-200/20 to-violet-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-72 h-72 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl animate-bounce" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-bl from-violet-200/15 to-purple-300/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-32 left-10 w-4 h-4 bg-purple-300/60 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-gradient-to-r from-violet-300/50 to-purple-400/50 rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
        <div className="absolute top-20 right-1/3 w-2 h-12 bg-gradient-to-t from-purple-300/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 transform hover:scale-105 transition-transform duration-500 text-center md:text-right">
            <h2 className="text-4xl md:text-3xl lg:text-4xl font-black font-primary text-gray-900 mb-8 animate-slide-in-left">נעים להכיר, אני דניאל קרנירו</h2>
            <div className="space-y-4 text-xl md:text-xl font-medium font-primary text-gray-700 leading-relaxed text-center md:text-right">
              <p className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                לפני כמה שנים הייתי בדיוק במקום שלך. עבדתי שעות על גבי שעות על קמפיינים, אבל אף אחד לא באמת הבין כמה אחריות יש על הכתפיים של קמפיינר. לקוחות דרשו תוצאות, מנהלים לחצו, ובסוף - גם כשהכול עבד, עדיין הרגשתי שקוף.
              </p>
               <p className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                עם הזמן הבנתי משהו חשוב - הבעיה היא לא איך הלקוחות רואים אותנו, אלא איך אנחנו מציגים את עצמנו.
                קמפיינרים הם לא טכנאים של פרסום. אנחנו מנהלי תקציב, אנליסטים, אסטרטגים ושותפים עסקיים אמיתיים.
              </p>
              <p className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
               מתוך הרצון להרים את הרמה של הקמפיינרים בישראל, להחזיר את הכבוד למקצוע ולהפוך את הקמפיינרים לשותפים עסקיים שווים - נולד 'הלוחש לקמפיינרים'.
              </p>
               <p className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                במהלך 7 השנים האחרונות ניהלתי מאות קמפיינים hands-on בכל הפלטפורמות הגדולות (Meta, Google, TikTok, Outbrain, Taboola ועוד) - מתקציבים של מאות שקלים ועד מאות אלפים.
                למדתי עשרות קורסים, ניסיתי הכול, והיום אני כאן כדי להעביר לך את כל זה - בליווי אמיתי, בגובה העיניים, ובזום אחד בכל פעם.
              </p>
              <p className="font-bold font-primary text-gray-900 bg-gradient-to-r from-purple-100 to-violet-100 border-r-4 border-purple-500 pr-4 py-3 rounded-md shadow-lg animate-fade-in-up" style={{animationDelay: '0.7s'}}>
               המטרה שלי ברורה: שתפסיק להרגיש שקוף, ושתהפוך לשותף עסקי אמיתי - אחד שמוביל מהלכים, לא רק מבצע אותם.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-72 max-w-sm sm:w-80 sm:max-w-md md:w-96 md:max-w-lg animate-slide-in-right" style={{aspectRatio: 'auto'}}>
                {/* Soft background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-violet-100/20 to-pink-200/30 rounded-[2rem] transform -rotate-2 blur-xl"></div>

                {/* Purple rectangle behind image - gentle rotation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 to-violet-400/40 rounded-[1.8rem] transform rotate-2 shadow-md hover:-rotate-0.5 transition-transform duration-1000 ease-out"></div>

                {/* Main background with gentle gradient */}
                <div className="absolute inset-2 bg-gradient-to-br from-purple-50 via-white to-violet-50 rounded-[1.75rem] transform -rotate-1 shadow-lg"></div>

                {/* Image container with soft styling */}
                <div className="relative w-full p-3" style={{aspectRatio: 'auto'}}>
                  <div className="relative w-full rounded-[1.5rem] shadow-xl overflow-hidden" style={{aspectRatio: 'auto'}}>
                    {/* Gentle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 via-transparent to-violet-100/10 z-10"></div>

                    <img
                        src="./images/me.jpg"
                        alt="דניאל קרנירו"
                        className="w-full h-full object-contain object-center"
                        style={{
                          imageRendering: 'auto',
                          WebkitImageRendering: 'auto',
                          MozImageRendering: 'auto',
                          msImageRendering: 'high-quality',
                          imageOrientation: 'from-image',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'translate3d(0,0,0)',
                          WebkitTransform: 'translate3d(0,0,0)',
                          willChange: 'auto',
                          filter: 'contrast(1.02) saturate(1.05)',
                          maxWidth: '100%',
                          maxHeight: '100%',
                        }}
                        loading="lazy"
                        decoding="async"
                    />

                    {/* Soft inner border */}
                    <div className="absolute inset-0 rounded-[1.5rem] border border-white/30 shadow-inner"></div>
                  </div>
                </div>

                {/* Gentle floating elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-purple-300/60 to-violet-400/60 rounded-full animate-pulse shadow-lg" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-tr from-violet-200/70 to-purple-300/70 rounded-full animate-bounce shadow-md" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
                <div className="absolute top-8 -left-2 w-2 h-8 bg-gradient-to-t from-purple-200/50 to-transparent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
             </div>
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
        .animate-slide-in-right { animation: slide-in-right 1s ease-out 0.4s both; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
      `}</style>
    </section>
  );
}
