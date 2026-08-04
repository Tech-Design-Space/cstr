'use client';

import { FaWhatsapp } from 'react-icons/fa6';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = '2347037260013', 
  message = 'Hello, I would like to make an inquiry regarding your construction and engineering services.',
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-26 right-6 z-40 group">
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-brand-dark text-white text-xs font-sans font-medium rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-slate-700">
        Chat with us on WhatsApp
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}