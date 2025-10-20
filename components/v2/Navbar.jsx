import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: '#about', label: 'עליי' },
  { href: '#benefits', label: 'מה מקבלים' },
  { href: '#audience', label: 'למי זה מתאים' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#faq', label: 'שאלות נפוצות' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // 80px offset for navbar height
        behavior: 'smooth',
      });
    }
  };
  
  const whatsappUrl = `https://wa.me/972506618103`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold cursor-pointer text-white"
          >
            הלוחש לקמפיינרים
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-lg px-6 py-3 hover:opacity-90 transition-opacity"
              >
                שיחת ייעוץ חינם
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
    
  );
}