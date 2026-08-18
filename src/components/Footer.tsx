import React from 'react';
import { Phone, Mail, MapPin, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenConcierge }) => {
  return (
    <footer className="bg-[#070a10] border-t border-[#d4af37]/30 text-[#e5e2e1] relative overflow-hidden">
      
      {/* ========================================================= */}
      {/* SECTION: FINAL CINEMATIC CTA                              */}
      {/* ========================================================= */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-[#1e2535] overflow-hidden bg-[#06080d]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1VJT4D_OZdQWRxa6Z3PvO7ekxcnXuMTsT_ZFlbZKaW7B5F9NdIsDfYSJOZNQJx-nIfXsRP6_pZmeNSnPkd6qW12-t0ozwKbYH0yk1hDHM7igNT-U3HVqI76tIZuqFbCBsR4SlEsBego2uiXcnW2EUzjeLONUYJk8y5hMMSQbf_bi_p3al48UqZJOgpVZYDOsdvDWO6oxQ41nhodJzAyB1UjGIBdUg-sU3er5FBpTNyzYXjxr-vZVulw"
            alt="Varanasi Dev Deepawali Ghats at Night"
            className="w-full h-full object-cover opacity-25 brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-[#070a10]/80 to-[#070a10]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/90 backdrop-blur-md">
            <span className="text-[#f2ca50] text-xs font-serif">ॐ</span>
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              24 November 2026 • कार्तिक पूर्णिमा महामहोत्सव
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f2ca50] to-[#ffd700] leading-tight drop-shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
            EXPERIENCE DEV DEEPAWALI FROM THE GANGA
          </h2>

          <p className="font-serif text-sm sm:text-lg md:text-xl text-[#ffe088] max-w-2xl mx-auto leading-relaxed">
            अपनी पसंद की सवारी चुनें और काशी की इस दिव्य रात का हिस्सा बनें।
          </p>

          {/* Three Prices Display: Clean mobile responsive cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 py-2 max-w-2xl mx-auto">
            <div className="p-3 sm:p-4 rounded-xl bg-[#101624]/80 border border-[#2d384e] text-center">
              <span className="text-[11px] text-[#a5b4cb] block uppercase font-serif">Choti Motor Boat</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white">₹4,999/-</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#101624]/90 border border-[#d4af37]/60 text-center shadow-lg">
              <span className="text-[11px] text-[#ffe088] block uppercase font-serif font-semibold">Double Decker Boat</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#f2ca50]">₹7,999/-</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#172033] border-2 border-[#f2ca50] text-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <span className="text-[11px] text-[#ffd700] block uppercase font-serif font-bold">Luxury Cruise</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#ffd700]">₹14,999/-</span>
            </div>
          </div>

          {/* 50% Advance Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#182438] border border-[#25D366]/50 text-xs font-serif font-bold text-[#25D366]">
            <ShieldCheck className="w-4 h-4" /> 50% ADVANCE TO RESERVE
          </div>

          {/* Booking CTA Button */}
          <div className="flex flex-col items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('booking-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-base sm:text-lg shadow-[0_0_35px_rgba(37,211,102,0.5)] hover:shadow-[0_0_55px_rgba(37,211,102,0.8)] transform hover:scale-105 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
              <span>BOOK VIA WHATSAPP</span>
            </button>

            <div className="flex flex-col items-center gap-1">
              <a
                href="https://wa.me/918840177339"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-base sm:text-lg font-bold text-[#25D366] hover:underline"
              >
                +91 8840177339
              </a>
              <p className="text-[11px] sm:text-xs text-[#8e9cb4]">
                Our booking team will confirm availability and guide you through the next steps.
              </p>
            </div>
          </div>
        </div>
      </div>

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
                50% Advance Booking Info
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
