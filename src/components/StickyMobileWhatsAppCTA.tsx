import React from 'react';
import { MessageCircle } from 'lucide-react';

interface StickyMobileWhatsAppCTAProps {
  onBookClick: () => void;
}

export const StickyMobileWhatsAppCTA: React.FC<StickyMobileWhatsAppCTAProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-3 bg-[#06080d]/95 border-t border-[#d4af37]/40 backdrop-blur-xl shadow-[0_-5px_25px_rgba(0,0,0,0.9)] pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]">
      <button
        onClick={onBookClick}
        className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white font-serif font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 text-white flex-shrink-0" />
        <span>BOOK VIA WHATSAPP (₹15,000)</span>
      </button>
    </div>
  );
};

