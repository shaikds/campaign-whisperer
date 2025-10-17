import React from 'react';
import { MessageSquare } from 'lucide-react'; // Using a supported icon library

export default function WhatsAppButton({ phoneNumber }) {
  // Format phone number for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <style jsx>{`
        @keyframes gentle-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-green-600 transition-all duration-300"
        style={{
          animation: 'gentle-bounce 2s ease-in-out infinite'
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-8 h-8 text-white" />
      </a>
    </>
  );
}