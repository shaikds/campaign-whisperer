// import { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Phone, Users, Zap, CheckCircle, AlertCircle } from 'lucide-react';
// import { sendEmail, FormData } from '../../src/services/emailService';

// interface FinalCtaFormProps {
//   id?: string;
// }

// export default function FinalCtaForm({ id }: FinalCtaFormProps) {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [phoneError, setPhoneError] = useState('');

//   const validateIsraeliPhone = (phone: string): boolean => {
//     // Remove all non-digit characters for validation
//     const cleanPhone = phone.replace(/\D/g, '');

//     // Israeli mobile phone formats: 05X-XXXXXXX (10 digits total)
//     // Accepts: 050, 052, 053, 054, 055, 057, 058
//     const israeliPhoneRegex = /^05[0-9]\d{7}$/;
//     return israeliPhoneRegex.test(cleanPhone);
//   };

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const phone = e.target.value;
//     setFormData({...formData, phone});

//     if (phone && !validateIsraeliPhone(phone)) {
//       setPhoneError('מספר טלפון לא תקין. הכנס מספר ישראלי: 050-123-4567');
//     } else {
//       setPhoneError('');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate phone number before submission
//     if (!validateIsraeliPhone(formData.phone)) {
//       setPhoneError('מספר טלפון לא תקין. הכנס מספר ישראלי: 050-123-4567');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('idle');
//     setPhoneError('');

//     const emailData: FormData = {
//       ...formData,
//       formType: 'Final CTA Form - Schedule Call'
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
//       className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-gray-700/50 max-w-lg mx-auto"
//     >
//       {/* Form Header */}
//       <div className="text-center mb-6 sm:mb-8">
//         <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mb-4">
//           <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//         </div>
//         <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
//           בוא נקבע שיחה
//         </h3>
//         <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
//           זה הזמן לעשות את הצעד הבא. השאר פרטים ונקבע שיחת ייעוץ שתשנה לך את הקריירה
//         </p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" dir="rtl">
//         <Input
//           type="text"
//           placeholder="השם שלך"
//           className="h-12 sm:h-14 rounded-xl bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 text-sm sm:text-base text-right focus:border-purple-400 focus:ring-purple-400/20"
//           dir="rtl"
//           value={formData.name}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
//           required
//         />

//         <Input
//           type="email"
//           placeholder="האימייל שלך"
//           className="h-12 sm:h-14 rounded-xl bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 text-sm sm:text-base text-right focus:border-purple-400 focus:ring-purple-400/20"
//           dir="rtl"
//           value={formData.email}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
//           required
//         />

//         <Input
//           type="tel"
//           placeholder="הטלפון שלך (05xxxxxxxx)"
//           className={`h-12 sm:h-14 rounded-xl bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 text-sm sm:text-base text-right focus:border-purple-400 focus:ring-purple-400/20 ${phoneError ? 'border-red-500 focus:border-red-500' : ''}`}
//           dir="rtl"
//           value={formData.phone}
//           onChange={handlePhoneChange}
//           required
//         />
//         {phoneError && (
//           <p className="text-red-400 text-xs mt-1 text-right">{phoneError}</p>
//         )}

//         <Button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl h-12 sm:h-14 md:h-16 text-base sm:text-lg hover:from-purple-700 hover:to-violet-700 hover:scale-[1.02] transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//         >
//           {isSubmitting ? (
//             <div className="animate-spin w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full ml-2" />
//           ) : (
//             <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
//           )}
//           {isSubmitting ? 'שולח...' : 'קבע שיחה עכשיו!'}
//         </Button>
//       </form>

//       {/* Status Messages */}
//       {submitStatus === 'success' && (
//         <div className="mt-4 p-4 bg-green-900/30 border border-green-500/50 rounded-xl flex items-center gap-3 text-green-300">
//           <CheckCircle className="w-5 h-5 flex-shrink-0" />
//           <span className="text-sm sm:text-base">שיחת הייעוץ נקבעה! נחזור אליך בקרוב עם פרטים.</span>
//         </div>
//       )}
//       {submitStatus === 'error' && (
//         <div className="mt-4 p-4 bg-red-900/30 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-300">
//           <AlertCircle className="w-5 h-5 flex-shrink-0" />
//           <span className="text-sm sm:text-base">שגיאה בשליחה. אנא נסה שנית או צור קשר בוואטסאפ.</span>
//         </div>
//       )}

//       {/* Benefits */}
//       <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
//         <div className="flex flex-col items-center text-gray-300">
//           <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-1 sm:mb-2" />
//           <span className="text-xs sm:text-sm font-medium">מומחה בתחום</span>
//         </div>
//         <div className="flex flex-col items-center text-gray-300">
//           <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-1 sm:mb-2" />
//           <span className="text-xs sm:text-sm font-medium">תוצאות מהירות</span>
//         </div>
//         <div className="flex flex-col items-center text-gray-300">
//           <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-1 sm:mb-2" />
//           <span className="text-xs sm:text-sm font-medium">ליווי אישי</span>
//         </div>
//       </div>

//       {/* Urgency */}
//       <div className="mt-4 sm:mt-6 text-center">
//         <p className="text-xs sm:text-sm text-yellow-400 font-semibold">
//           ⚡ מקומות מוגבלים לחודש זה - אל תפספס!
//         </p>
//       </div>
//     </div>
//   );
// }