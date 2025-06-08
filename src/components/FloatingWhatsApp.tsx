import React, { memo } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = memo(() => {
  const whatsappUrl = "https://wa.me/6281234567890?text=Hello%20BaliFastboat,%20I%20have%20a%20question%20about%20fastboat%20information.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 transition-all duration-300 ease-out group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </a>
  );
});

export default FloatingWhatsApp;