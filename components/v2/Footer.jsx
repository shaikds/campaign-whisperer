import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; {currentYear} הלוחש לקמפיינרים. כל הזכויות שמורות.</p>
        <p className="text-sm mt-2">
          נבנה באהבה כדי לעזור לקמפיינרים לצמוח
        </p>
        <p className="text-sm mt-2">
         Built by shaikds
        </p>
      </div>
    </footer>
  );
}