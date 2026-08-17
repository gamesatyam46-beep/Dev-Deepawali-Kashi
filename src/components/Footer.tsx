import React from 'react';
import { Phone, Mail, MapPin, Sparkles, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenConcierge }) => {
  return (
    <footer className="bg-[#070a10] border-t border-[#d4af37]/30 text-[#e5e2e1] relative overflow-hidden">
      {/* Final Grand Banner CTA from User Specification */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-[#1e2535] relative bg-gradient-to-b from-[#0a0e17] via-[#101624] to-[#070a10]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
            <span className="text-[#f2ca50] text-xs font-serif">ॐ</span>
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              24 November 2026 • कार्तिक पूर्णिमा महामहोत्सव
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f2ca50] to-[#d4af37] leading-tight drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]">
            READY TO EXPERIENCE DEV DEEPAWALI FROM THE GANGA?
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d0c5af] max-w-2xl mx-auto">
            Limited seats available. Advance booking is compulsory.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('booking-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-lg sm:text-xl shadow-[0_0_35px_rgba(37,211,102,0.5)] hover:shadow-[0_0_55px_rgba(37,211,102,0.8)] transform hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <span>🟢 BOOK VIA WHATSAPP</span>
            </button>

            <div className="flex flex-col items-center gap-1">
              <a
                href="https://wa.me/918840177339"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-lg font-bold text-[#25D366] hover:underline"
              >
                +91 8840177339
              </a>
              <p className="text-xs text-[#8e9cb4]">
                Our booking team will confirm availability and guide you through the next steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">
        {/* Brand & Sanskrit Mantra */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#d4af37]/60 bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50] font-serif text-lg">
              ॐ
            </div>
            <div>
              <div className="font-serif text-lg font-bold text-[#f2ca50]">
                देव दीपावली 2026
              </div>
              <div className="text-[10px] text-[#8e9cb4] uppercase tracking-wider">
                Kashi Luxury Experience
              </div>
            </div>
          </div>

          <p className="text-[#d0c5af] leading-relaxed">
            The premier luxury cruise and cultural celebration along the 84 ghats of Varanasi on Kartik Purnima night.
          </p>

          <div className="text-[#ffe088] font-serif italic text-sm">
            ।। ॐ नमः पार्वती पतये हर हर महादेव ।।
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-sm text-[#ffe088] uppercase tracking-wider">
            Curated Experiences
          </h4>
          <ul className="space-y-2 text-[#d0c5af]">
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">21-Priest Maha Ganga Aarti</a></li>
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">3D Laser & Heritage Mapping</a></li>
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">Vedic Drone & Sky Fireworks</a></li>
            <li><a href="#experiences" className="hover:text-[#f2ca50] transition-colors">Live Shehnai & Sitar Recitals</a></li>
            <li><a href="#ghats" className="hover:text-[#f2ca50] transition-colors">84 Ghats Cruise Route</a></li>
          </ul>
        </div>

        {/* Packages & Booking */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-sm text-[#ffe088] uppercase tracking-wider">
            Royal Passes
          </h4>
          <ul className="space-y-2 text-[#d0c5af]">
            <li><button onClick={onOpenBooking} className="hover:text-[#f2ca50] transition-colors">The Royal Maharaj Deck (₹15,000)</button></li>
            <li><button onClick={onOpenBooking} className="hover:text-[#f2ca50] transition-colors">The Imperial Maharaja Suite (₹28,000)</button></li>
            <li><button onClick={onOpenBooking} className="hover:text-[#f2ca50] transition-colors">The Twilight Heritage Pass (₹9,500)</button></li>
            <li><a href="#itinerary" className="hover:text-[#f2ca50] transition-colors">Nov 24 Schedule & Timings</a></li>
            <li><a href="#faq" className="hover:text-[#f2ca50] transition-colors">VIP Vehicle Pass Verification</a></li>
          </ul>
        </div>

        {/* Boarding Point & Contact */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-sm text-[#ffe088] uppercase tracking-wider">
            VIP Boarding Location
          </h4>
          <div className="space-y-2 text-[#d0c5af]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
              <span>Ravidas Ghat VIP Jetty (Near Assi Confluence), Varanasi, Uttar Pradesh - 221005</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#f2ca50] shrink-0" />
              <span>+91 8840177339</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#f2ca50] shrink-0" />
              <span>concierge@kashidevdeepawali2026.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Terms */}
      <div className="bg-[#05070c] border-t border-[#1e2535] py-6 px-4 text-center text-xs text-[#8e9cb4]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Dev Deepawali Kashi Luxury Experience. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-[#f2ca50] transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-[#f2ca50] transition-colors">Terms of Service</a>
            <a href="#faq" className="hover:text-[#f2ca50] transition-colors">Safety Protocols</a>
            <button onClick={onOpenConcierge} className="hover:text-[#f2ca50] transition-colors flex items-center gap-1 text-[#f2ca50]">
              <Sparkles className="w-3.5 h-3.5" /> Acharya AI
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
