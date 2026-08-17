import React from 'react';
import { ITINERARY_STEPS } from '../data/kashiData';
import { Clock, MapPin, Sparkles, Crown, Sun, Compass, Flame, Utensils, Gift } from 'lucide-react';

export const ItineraryTimeline: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Crown': return <Crown className="w-5 h-5 text-[#241a00]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#241a00]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#241a00]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#241a00]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#241a00]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#241a00]" />;
      case 'Gift': return <Gift className="w-5 h-5 text-[#241a00]" />;
      default: return <Clock className="w-5 h-5 text-[#241a00]" />;
    }
  };

  return (
    <section id="itinerary" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0e17] relative overflow-hidden border-t border-[#d4af37]/20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
            <Clock className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              कार्यक्रमानुसार समय सारिणी • 24 November 2026
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2ca50]">
            The Royal Evening Schedule
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d0c5af]">
            An intricately choreographed 6-hour sacred voyage designed to capture every auspicious moment of Dev Deepawali in absolute serenity.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#f2ca50] before:via-[#d4af37] before:to-[#ff9933]/40">
          {ITINERARY_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Golden Marker */}
              <div className="absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#f2ca50] to-[#d4af37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.6)] transform group-hover:scale-110 transition-transform">
                <div className="scale-75 sm:scale-90">
                  {getIcon(step.iconName)}
                </div>
              </div>

              {/* Step Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#101624]/90 border border-[#d4af37]/25 group-hover:border-[#d4af37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-base sm:text-lg text-[#f2ca50]">
                      {step.time}
                    </span>
                    <span className="text-xs text-[#ffe088] font-serif">{step.hindiTitle}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#ffe088] uppercase tracking-wider">
                      {step.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e5e2e1] mb-2 group-hover:text-[#ffe088] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#8e9cb4] pt-2 border-t border-[#1e2535]">
                  <MapPin className="w-3.5 h-3.5 text-[#f2ca50]" />
                  <span>{step.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
