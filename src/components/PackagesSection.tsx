import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (tierId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070a10] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Background glowing blurs from mockup */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2ca50]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff9933]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
            <Star className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              शाही नौका विहार पैकेज • Exclusive Royal Passes
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2ca50]">
            The Luxury Cruise Experience
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d0c5af]">
            Strictly limited to 200 distinguished guests to ensure intimate, unobstructed serenity on Dev Deepawali night.
          </p>
        </div>

        {/* Featured Package Hero Card (Direct Match to User Mockup) */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#101624]/95 via-[#0d121d]/95 to-[#070a10]/95 border border-[#d4af37]/50 shadow-[0_0_50px_rgba(212,175,55,0.25)] relative overflow-hidden backdrop-blur-xl">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#f2ca50] to-[#d4af37] text-[#241a00] font-serif font-bold text-xs px-6 py-2 rounded-bl-2xl shadow-md uppercase tracking-wider">
            Signature Flagship Experience
          </div>

          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-serif text-[#ffe088] tracking-widest uppercase">महाराज रॉयल डेक</span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f2ca50]">
              The Premium Passage
            </h3>
            <div className="flex items-baseline justify-center gap-3 pt-2">
              <span className="font-serif text-5xl sm:text-6xl font-bold text-[#e5e2e1]">
                ₹15,000
              </span>
              <span className="text-xs sm:text-sm text-[#8e9cb4] line-through">₹19,500</span>
            </div>
            <p className="text-xs tracking-widest uppercase text-[#d0c5af]">
              Per Guest • All Inclusions Included • 24 Nov 2026
            </p>
          </div>

          {/* Inclusions Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-[#e5e2e1]">
                <CheckCircle2 className="w-5 h-5 text-[#ffb77a] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Priority Boarding & VIP Safe Passage at Ravidas Ghat</span>
              </li>
              <li className="flex items-start gap-3.5 text-[#e5e2e1]">
                <CheckCircle2 className="w-5 h-5 text-[#ffb77a] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Grand 5-Course Royal Banarasi & Awadhi Buffet Dinner</span>
              </li>
              <li className="flex items-start gap-3.5 text-[#e5e2e1]">
                <CheckCircle2 className="w-5 h-5 text-[#ffb77a] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Unobstructed Front-Row Mooring for Dashashwamedh Aarti</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-[#e5e2e1]">
                <CheckCircle2 className="w-5 h-5 text-[#ffb77a] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Live Guided Storytelling by Vedic Historians & Scholars</span>
              </li>
              <li className="flex items-start gap-3.5 text-[#e5e2e1]">
                <CheckCircle2 className="w-5 h-5 text-[#ffb77a] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Premium 360° Open Sky Deck Access with Soft Bolsters</span>
              </li>
              <li className="flex items-start gap-3.5 text-[#e5e2e1]">
                <CheckCircle2 className="w-5 h-5 text-[#ffb77a] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Welcome Kesar Thandai, Kahwa & 108 Sacred Earthen Diyas</span>
              </li>
            </ul>
          </div>

          {/* Action CTA */}
          <div className="text-center space-y-3">
            <button
              id="confirm-signature-seat-btn"
              onClick={() => {
                const el = document.getElementById('booking-form');
                el?.scrollIntoView({ behavior: 'smooth' });
                onSelectPackage('royal-maharaj-deck');
              }}
              className="w-full sm:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-lg sm:text-xl shadow-[0_0_35px_rgba(37,211,102,0.4)] hover:shadow-[0_0_55px_rgba(37,211,102,0.7)] transform hover:scale-105 active:scale-95 transition-all"
            >
              BOOK ₹15,000 / PERSON VIA WHATSAPP
            </button>
            <p className="text-xs text-[#d0c5af]">
              Limited Capacity: 200 Guests Only • Official Desk +91 8840177339
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
