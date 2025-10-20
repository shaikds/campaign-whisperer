import React from 'react';
import { Zap, Target, BarChart3, BookOpen, MessageSquare, Bot } from 'lucide-react';

const benefits = [
    {
      icon: Zap,
      title: 'אופטימיזציה חכמה לקמפיינים',
      description: 'ננתח את הקמפיינים שלך, נזהה מה מעכב אותך ונבנה שיטה מסודרת לשיפור ביצועים לאורך זמן.'
    },
    {
      icon: Target,
      title: 'בניית אסטרטגיות פרסום',
      description: 'נלמד לתכנן נכון לפי יעדים עסקיים (KPI), לא רק לפי מדדים טכניים.'
    },
    {
      icon: BarChart3,
      title: 'טכניקות לייעול זמנים',
      description: 'איך לעבוד חכם יותר, לנהל יותר לקוחות במקביל ולהשקיע פחות זמן.'
    },
    {
      icon: BookOpen,
      title: 'ניהול תקשורת מול לקוחות',
      description: 'איך להפוך ממכבה שריפות לשותף אמיתי עם ביטחון ותהליך שירות מסודר.'
    },
    {
      icon: Bot,
      title: 'שימוש נכון בכלי AI',
      description: 'נלמד איך להיעזר בבינה מלאכותית לכתיבת קופי, ניתוח נתונים וייעול שוטף.'
    },
    {
      icon: MessageSquare,
      title: 'קבוצת וואטסאפ סגורה',
      description: 'קהילה פעילה לשיתוף, שאלות ותשובות שלי באופן אישי.'
    }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/5 via-transparent to-violet-600/5"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-96 h-96 bg-gradient-to-tr from-violet-400/8 to-purple-600/8 rounded-full blur-3xl animate-bounce" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-bl from-purple-500/12 to-pink-500/12 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-purple-400/40 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-gradient-to-r from-violet-400/50 to-purple-500/50 rounded-full animate-bounce" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        <div className="absolute top-40 right-10 w-2 h-20 bg-gradient-to-t from-purple-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
            מה תקבלו בליווי 1 על 1?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 animate-fade-in-delay">
            הליווי איתי הוא לא שיעור תאורטי - זו עבודה אמיתית על הקמפיינים שלך. בכל מפגש נתקדם צעד נוסף בדרך להפוך אותך לקמפיינר מקצועי, רגוע, שמבין לעומק את הנתונים ויודע איך לשלוט בתוצאות ובלקוחות שלו.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 md:p-8 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-gray-800/70 animate-slide-up"
              style={{animationDelay: `${i * 0.15}s`}}
            >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-violet-600/20 text-purple-400 rounded-xl flex items-center justify-center border border-purple-500/30 mb-6 hover:scale-110 hover:rotate-12 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-base md:text-lg text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
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
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out both; }
      `}</style>
    </section>
  );
}