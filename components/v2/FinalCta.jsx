
import React from 'react';
import LeadForm from './LeadForm'; // Import the reusable form

export default function FinalCta() {
    
  return (
    <section id="final-cta" className="py-20 md:py-28 bg-gradient-to-br from-purple-50 via-white to-violet-100 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl animate-bounce" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-bl from-violet-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating action elements */}
        <div className="absolute top-32 left-1/4 w-6 h-6 bg-gradient-to-br from-purple-400/60 to-violet-500/60 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-gradient-to-tr from-violet-400/50 to-purple-500/50 rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
        <div className="absolute top-20 right-1/4 w-3 h-16 bg-gradient-to-t from-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-4xl md:text-3xl lg:text-4xl font-black font-primary text-gray-900 mb-4 animate-fade-in">
          מוכנים לעלות ברמה ולהרוויח יותר?
        </h2>
        <p className="text-xl md:text-xl font-medium font-primary text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          הצעד הראשון לשינוי מתחיל כאן. השאירו פרטים לשיחת היכרות בחינם, ללא התחייבות.
        </p>
        
        <div className="max-w-md mx-auto animate-fade-in-delay-2">
            <LeadForm id="final-form" theme="light" />
        </div>
      </div>
    </section>
  );
}
