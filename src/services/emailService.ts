import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// Validate environment variables
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('Missing EmailJS environment variables. Please check your .env file.');
  console.error('Required variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
}

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  formType?: string;
}

export const sendEmail = async (formData: FormData): Promise<boolean> => {
  // Check if EmailJS is properly configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS is not properly configured. Please set up your environment variables.');
    return false;
  }

  try {
    // Template parameters that will be sent to EmailJS
    const templateParams = {
      to_email: 'daniekarniro@gmail.com',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      time: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }),
      form_type: formData.formType || 'Contact Form',
      message: `
        New form submission from Campaign Whisperer website:

        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Form Type: ${formData.formType || 'Contact Form'}

        Date: ${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}
      `
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
