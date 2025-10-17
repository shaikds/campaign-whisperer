// import { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Send, Shield, Clock, Star, CheckCircle, AlertCircle } from 'lucide-react';
// import { sendEmail, FormData } from '../../src/services/emailService';

// interface HeroFormProps {
//   id?: string;
// }

// export default function HeroForm({ id }: HeroFormProps) {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [phoneError, setPhoneError] = useState('');

//   const validateIsraeliPhone = (phone: string): boolean => {
//     // Israeli phone number format: 05xxxxxxxx (10 digits starting with 05)
//     const israeliPhoneRegex = /^05\d{8}$/;
//     return israeliPhoneRegex.test(phone);
//   };

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const phone = e.target.value;
//     setFormData({...formData, phone});

//     if (phone && !validateIsraeliPhone(phone)) {
//       setPhoneError('מספר טלפון חייב להיות בפורמט: 05xxxxxxxx');
//     } else {
//       setPhoneError('');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate phone number before submission
//     if (!validateIsraeliPhone(formData.phone)) {
//       setPhoneError('מספר טלפון חייב להיות בפורמט: 05xxxxxxxx');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('idle');
//     setPhoneError('');

//     const emailData: FormData = {
//       ...formData,
//       formType: 'Hero Form - Free Consultation'
//     };

//     const success = await sendEmail(emailData);

//     setIsSubmitting(false);
//     setSubmitStatus(success ? 'success' : 'error');

//     if (success) {
//       // Reset form on success
//       setFormData({ name: '', email: '', phone: '' });
//       // Auto-hide success message after 5 seconds
//       setTimeout(() => setSubmitStatus('idle'), 5000);
//     }
//   };

//   return (
//     <div
//       id={id}
//       className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-200/50 max-w-md mx-auto"
//     >
//       {/* Form Header */}
//       <div className="text-center mb-4 sm:mb-6">
//         <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
//           קבל ייעוץ חינם עכשיו
//         </h3>
//         <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//           השאר פרטים ונחזור אליך תוך 24 שעות
//         </p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
//         <Input
//           type="text"
//           placeholder="שם מלא"
//           className="h-10 sm:h-12 rounded-lg bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:border-purple-500 focus:ring-purple-500/20"
//           value={formData.name}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
//           required
//         />

//         <Input
//           type="email"
//           placeholder="כתובת אימייל"
//           className="h-10 sm:h-12 rounded-lg bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:border-purple-500 focus:ring-purple-500/20"
//           value={formData.email}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
//           required
//         />

//         <Input
//           type="tel"
//           placeholder="מספר טלפון (05xxxxxxxx)"
//           className={`h-10 sm:h-12 rounded-lg bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 text-sm sm:text-base text-right focus:border-purple-500 focus:ring-purple-500/20 ${phoneError ? 'border-red-500 focus:border-red-500' : ''}`}
//           dir="rtl"
//           value={formData.phone}
//           onChange={handlePhoneChange}
//           required
//         />
//         {phoneError && (
//           <p className="text-red-500 text-xs mt-1 text-right">{phoneError}</p>
//         )}

//         <Button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-lg h-10 sm:h-12 md:h-14 text-sm sm:text-base hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isSubmitting ? (
//             <div className="animate-spin w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full ml-2" />
//           ) : (
//             <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
//           )}
//           {isSubmitting ? 'שולח...' : 'שלח פרטים'}
//         </Button>
//       </form>

//       {/* Status Messages */}
//       {submitStatus === 'success' && (
//         <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
//           <CheckCircle className="w-4 h-4 flex-shrink-0" />
//           <span className="text-sm">תודה! הפרטים נשלחו בהצלחה. נחזור אליך בקרוב!</span>
//         </div>
//       )}
//       {submitStatus === 'error' && (
//         <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
//           <AlertCircle className="w-4 h-4 flex-shrink-0" />
//           <span className="text-sm">שגיאה בשליחה. אנא נסה שנית או צור קשר בטלפון.</span>
//         </div>
//       )}

//       {/* Trust Indicators */}
//       <div className="mt-4 sm:mt-6 space-y-2">
//         <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
//           <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
//           <span>מידע מוגן ובטוח</span>
//         </div>
//         <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
//           <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
//           <span>מענה תוך 24 שעות</span>
//         </div>
//         <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
//           <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 flex-shrink-0" />
//           <span>ללא עלות וללא התחייבות</span>
//         </div>
//       </div>
//     </div>
//   );
// }