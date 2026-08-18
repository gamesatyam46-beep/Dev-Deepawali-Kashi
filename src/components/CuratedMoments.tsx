import React, { useState } from 'react';
import { CURATED_MOMENTS } from '../data/kashiData';
import { CuratedMoment } from '../types';
import { Flame, Sparkles, Zap, Ship, ArrowRight, X, Clock, MapPin } from 'lucide-react';

interface CuratedMomentsProps {
  onOpenBooking: () => void;
}

export const CuratedMoments: React.FC<CuratedMomentsProps> = ({ onOpenBooking }) => {
  const [activeMoment, setActiveMoment] = useState<CuratedMoment | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame': return <Flame className="w-5 h-5 text-[#f2ca50]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#f2ca50]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#f2ca50]" />;
      case 'Ship': return <Ship className="w-5 h-5 text-[#f2ca50]" />;
      default: return <Sparkles className="w-5 h-5 text-[#f2ca50]" />;
    }
  };

  return (
    <section id="experiences" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070a10] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              अनुभूतियाँ • Curated Highlights
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2ca50]">
            Curated Moments of Divine Splendor
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d0c5af]">
            Four signature spectacles that make Dev Deepawali in Kashi an unforgettable once-in-a-lifetime voyage.
          </p>
        </div>

        {/* 4 Cards Grid with clean consistent alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURATED_MOMENTS.map((moment) => (
            <div
              key={moment.id}
              onClick={() => setActiveMoment(moment)}
              className="group relative h-[420px] rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#0d121d] shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              {/* Background Image */}
              <img
                src={moment.image}
                alt={moment.title}
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 brightness-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/40 to-transparent" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#0d121d]/85 border border-[#d4af37]/40 text-[#ffe088] backdrop-blur-md">
                  {moment.badge}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1c1b1b]/80 border border-[#d4af37]/40 flex items-center justify-center backdrop-blur-md">
                  {getIcon(moment.iconName)}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2">
                <div className="text-xs text-[#ffe088] font-serif">{moment.hindiTitle}</div>
                <h3 className="font-serif text-2xl font-bold text-[#f2ca50] group-hover:text-[#ffe088] transition-colors">
                  {moment.title}
                </h3>

                <p className="text-xs text-[#d0c5af] line-clamp-2 leading-relaxed">
                  {moment.shortDesc}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-[#ffe088] font-medium border-t border-[#353535] opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>{moment.timeSlot}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Story */}
        {activeMoment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#0d121d] border border-[#d4af37]/60 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)] max-h-[90vh] overflow-y-auto">
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activeMoment.image}
                  alt={activeMoment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121d] via-transparent to-black/40" />
                <button
                  onClick={() => setActiveMoment(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-[#d4af37]/40 flex items-center justify-center text-[#e5e2e1] hover:text-[#f2ca50] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs text-[#ffe088] font-serif">{activeMoment.hindiTitle}</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2ca50]">
                    {activeMoment.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-[#d0c5af]">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101624] border border-[#d4af37]/30">
                    <Clock className="w-3.5 h-3.5 text-[#f2ca50]" />
                    <span>{activeMoment.timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101624] border border-[#d4af37]/30">
                    <MapPin className="w-3.5 h-3.5 text-[#f2ca50]" />
                    <span>Sacred Ganges Riverfront</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#d0c5af] leading-relaxed">
                  {activeMoment.fullDesc}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1e2535]">
                  <div className="text-xs text-[#8e9cb4]">
                    Included across all Royal Cruise Passes (Nov 24, 2026)
                  </div>
                  <button
                    onClick={() => {
                      setActiveMoment(null);
                      const el = document.getElementById('booking-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] transition-all cursor-pointer"
                  >
                    Book Experience via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
