import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Star, CheckCircle, AlertCircle } from 'lucide-react';
import { sendEmail } from '../../src/services/emailService';

export default function LeadForm({ id, theme = 'dark' }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', marketingConsent: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [phoneError, setPhoneError] = useState('');

  const validateIsraeliPhone = (phone) => {
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');

    // Israeli mobile phone formats: 05X-XXXXXXX (10 digits total)
    // Accepts: 050, 052, 053, 054, 055, 057, 058
    const israeliPhoneRegex = /^05[0-9]\d{7}$/;
    return israeliPhoneRegex.test(cleanPhone);
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setFormData({...formData, phone});

    if (phone && !validateIsraeliPhone(phone)) {
      setPhoneError('מספר טלפון לא תקין. הכנס מספר ישראלי: 050-123-4567');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number before submission
    if (!validateIsraeliPhone(formData.phone)) {
      setPhoneError('מספר טלפון לא תקין. הכנס מספר ישראלי: 050-123-4567');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setPhoneError('');

    const emailData = {
      ...formData,
      formType: 'Lead Form - Start Guidance'
    };

    const success = await sendEmail(emailData);

    setIsSubmitting(false);
    setSubmitStatus(success ? 'success' : 'error');

    if (success) {
      // Reset form on success
      setFormData({ name: '', email: '', phone: '', marketingConsent: false });
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const themeClasses = {
    dark: {
      container: "bg-gray-800/50 border-gray-700/50",
      title: "text-white",
      input: "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 hover:border-purple-500 focus:border-purple-400",
      subtext: "text-gray-400",
      success: "bg-green-900/30 border-green-500/50 text-green-300",
      error: "bg-red-900/30 border-red-500/50 text-red-300"
    },
    light: {
      container: "bg-white/60 border-purple-200/50",
      title: "text-gray-900",
      input: "bg-purple-50/50 border-gray-300 text-gray-800 placeholder-gray-500 hover:border-purple-400 focus:border-purple-500",
      subtext: "text-gray-600",
      success: "bg-green-50 border-green-200 text-green-800",
      error: "bg-red-50 border-red-200 text-red-800"
    }
  };
  
  const currentTheme = themeClasses[theme];

  return (
    <div 
      id={id} 
      className={`backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 ${theme === 'dark' ? 'animate-slide-in-right' : ''} ${currentTheme.container}`}
      dir="rtl"
    >
      <h3 className={`text-2xl md:text-2xl font-bold font-primary text-center mb-2 ${currentTheme.title}`}>השאירו פרטים ובואו נדבר</h3>
      <p className={`text-center mb-6 text-lg md:text-base font-medium font-primary ${currentTheme.subtext}`}>הצעד הראשון לשינוי מתחיל כאן. השאירו פרטים לשיחת היכרות בחינם, ללא התחייבות.</p>

      <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
        <Input 
          type="text" 
          placeholder="שם מלא" 
          className={`h-12 text-base rounded-lg transition-colors text-right ${currentTheme.input}`}
          dir="rtl"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <Input 
          type="email" 
          placeholder="אימייל" 
          className={`h-12 text-base rounded-lg transition-colors text-right ${currentTheme.input}`}
          dir="rtl"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
       <Input
  type="text"
  inputMode="tel"
  placeholder="טלפון"
  className={`h-12 rounded-lg text-base transition-colors text-right ${currentTheme.input} ${phoneError ? 'border-red-500 focus:border-red-500' : ''}`}
  dir="rtl"
  value={formData.phone}
  onChange={handlePhoneChange}
  required
/>
        {phoneError && (
          <p className={`text-red-400 text-sm mt-1 text-right ${theme === 'light' ? 'text-red-600' : 'text-red-400'}`}>{phoneError}</p>
        )}

     <div className="flex items-start gap-3 mt-4 w-full">
          <input
            type="checkbox"
            id={`${id}-marketingConsent`}
            checked={formData.marketingConsent}
            onChange={(e) => setFormData({...formData, marketingConsent: e.target.checked})}
            className="mt-1 min-w-[20px] min-h-[20px] w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded flex-shrink-0 cursor-pointer"
            required
            style={{ accentColor: '#9333ea' }}
          />
          <label htmlFor={`${id}-marketingConsent`} className={`text-sm font-medium font-primary ${currentTheme.subtext} text-right leading-relaxed flex-1 cursor-pointer`}>
            אני מסכים/ה לקבל ממך עדכונים, טיפים והצעות רלוונטיות מעת לעת
          </label>
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r text-lg from-purple-600 to-violet-600 text-white font-bold font-primary rounded-lg h-14 hover:from-purple-700 hover:to-violet-700 hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full ml-2" />
          ) : (
            <Send className="w-4 h-4 ml-2" />
          )}
          {isSubmitting ? 'שולח...' : 'אני רוצה לתאם שיחת היכרות'}
        </Button>
      </form>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 text-sm border ${currentTheme.success}`}>
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <span>תודה! הפרטים נשלחו בהצלחה. נחזור אליך בקרוב!</span>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 text-sm border ${currentTheme.error}`}>
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>שגיאה בשליחה. אנא נסה שנית או צור קשר בטלפון.</span>
        </div>
      )}

      <div className={`mt-6 space-y-2 text-sm md:text-sm font-medium font-primary ${currentTheme.subtext} flex flex-col items-center`}>
        <p className="flex items-center gap-2 text-right"><Star className="w-3 h-3 text-yellow-400 flex-shrink-0"/> שיחת היכרות ללא עלות וללא התחייבות</p>
        <p className="flex items-center gap-2 text-right"><Star className="w-3 h-3 text-yellow-400 flex-shrink-0"/> הליווי מתקיים בזום בלבד</p>
        <p className="flex items-center gap-2 text-right"><Star className="w-3 h-3 text-yellow-400 flex-shrink-0"/> מספר המקומות לליווי אישי מוגבל</p>
      </div>
    </div>
  );
}