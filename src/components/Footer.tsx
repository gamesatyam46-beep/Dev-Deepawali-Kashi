import React from 'react';
import { Phone, Mail, MapPin, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenConcierge }) => {
  return (
    <footer className="bg-[#070a10] border-t border-[#d4af37]/30 text-[#e5e2e1] relative overflow-hidden">
      {/* Main Footer Links: Vertical stack on mobile (<768px) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-xs">
        {/* Brand & Sanskrit Mantra */}
        <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#d4af37]/60 bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50] font-serif text-lg shrink-0">
              ॐ
            </div>
            <div>
              <div className="font-serif text-base sm:text-lg font-bold text-[#f2ca50]">
                देव दीपावली 2026
              </div>
              <div className="text-[10px] text-[#8e9cb4] uppercase tracking-wider">
                Kashi Experience
              </div>
            </div>
          </div>

          <p className="text-[#d0c5af] leading-relaxed">
            The premier boat and luxury cruise celebration along the 84 sacred ghats of Varanasi on Kartik Purnima night.
          </p>

          <div className="text-[#ffe088] font-serif italic text-xs sm:text-sm pt-1">
            ।। ॐ नमः पार्वती पतये हर हर महादेव ।।
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-xs sm:text-sm text-[#ffe088] uppercase tracking-wider">
            Curated Experiences
          </h4>
          <ul className="space-y-2 text-[#d0c5af]">
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">21-Priest Maha Ganga Aarti</a></li>
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">3D Laser & Heritage Mapping</a></li>
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">Vedic Drone & Sky Fireworks</a></li>
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">Sky Lantern & Flower Diya Arpan</a></li>
            <li><a href="#ghats" className="hover:text-[#f2ca50] transition-colors">84 Ghats Cruise Route</a></li>
          </ul>
        </div>

        {/* Packages & Booking */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-xs sm:text-sm text-[#ffe088] uppercase tracking-wider">
            Boat & Cruise Passes
          </h4>
          <ul className="space-y-2 text-[#d0c5af]">
            <li>
              <button onClick={onOpenBooking} className="hover:text-[#f2ca50] transition-colors text-left">
                Choti Motor Boat — ₹4,999/-
              </button>
            </li>
            <li>
              <button onClick={onOpenBooking} className="hover:text-[#f2ca50] transition-colors text-left">
                Double Decker Boat — ₹7,999/-
              </button>
            </li>
            <li>
              <button onClick={onOpenBooking} className="hover:text-[#f2ca50] transition-colors text-left text-[#ffe088] font-semibold">
                Luxury Cruise — ₹14,999/-
              </button>
            </li>
            <li>
              <a href="#packages" className="hover:text-[#f2ca50] transition-colors text-[#25D366]">
                Ride Comparison & Details
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Help */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-xs sm:text-sm text-[#ffe088] uppercase tracking-wider">
            Official Desk
          </h4>
          <div className="space-y-2 text-[#d0c5af]">
            <a
              href="https://wa.me/918840177339"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>+91 8840177339 (WhatsApp)</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
              <span>Assi Ghat & Ravidas Ghat, Varanasi, UP</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenConcierge}
                className="px-3.5 py-1.5 rounded-lg bg-[#141b29] border border-[#d4af37]/30 text-[#ffe088] hover:bg-[#1a2438] flex items-center gap-1.5 transition-all text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>AI Spiritual Concierge</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e2535] py-6 px-4 text-center text-[11px] text-[#8e9cb4]">
        <p>© 2026 Dev Deepawali Varanasi Boat & Cruise Booking. All rights reserved.</p>
        <p className="mt-1 text-[#6b7a90]">
          Experience the celestial night of 24 November 2026 on the sacred waters of Maa Ganga.
        </p>
      </div>
    </footer>
  );
};
