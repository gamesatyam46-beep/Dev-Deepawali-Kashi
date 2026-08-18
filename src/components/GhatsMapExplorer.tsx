import React, { useState } from 'react';
import { GHATS_DATA } from '../data/kashiData';
import { GhatInfo } from '../types';
import { Compass, Flame, Clock, Sparkles, Layers } from 'lucide-react';

export const GhatsMapExplorer: React.FC = () => {
  const [selectedGhat, setSelectedGhat] = useState<GhatInfo>(GHATS_DATA[0]); // Default Assi Ghat (Stop 01)

  return (
    <section id="ghats" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0e17] relative overflow-hidden border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
            <Compass className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              गंगा का अर्धचन्द्राकार पथ • The Sacred Crescent
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#f2ca50]">
            The 84 Ghats Cruise Voyage
          </h2>

          <p className="font-sans text-xs sm:text-base text-[#d0c5af] leading-relaxed">
            Follow our vessel's private cruising path along the 7-kilometer crescent from South Kashi to North Kashi, stopping at the most sacred sanctums on Dev Deepawali night.
          </p>
        </div>

        {/* Interactive Route Bar (Horizontal river steps) */}
        <div className="mb-8 sm:mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center justify-between min-w-[720px] relative px-4">
            {/* Golden River Line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#d4af37]/40 via-[#f2ca50] to-[#ff9933]/50 -translate-y-1/2 z-0" />

            {GHATS_DATA.map((ghat, idx) => {
              const isSelected = selectedGhat.id === ghat.id;
              return (
                <button
                  key={ghat.id}
                  onClick={() => setSelectedGhat(ghat)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none transition-all cursor-pointer"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#f2ca50] border-[#ffffff] text-[#241a00] shadow-[0_0_25px_rgba(242,202,80,0.8)] scale-110'
                        : 'bg-[#101624] border-[#d4af37]/40 text-[#ffe088] hover:border-[#f2ca50] hover:scale-105'
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <span
                    className={`mt-2 font-serif text-xs tracking-wide transition-colors whitespace-nowrap ${
                      isSelected ? 'text-[#f2ca50] font-bold' : 'text-[#d0c5af] group-hover:text-[#ffe088]'
                    }`}
                  >
                    {ghat.name}
                  </span>

                  <span className="text-[10px] text-[#8e9cb4] font-sans">
                    {ghat.diyaCountApprox.split(' ')[0]} Diyas
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Ghat Showcase Card: Vertical stack on mobile (<1024px) */}
        <div className="bg-[#101624]/95 border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.9)] grid grid-cols-1 lg:grid-cols-12 backdrop-blur-xl">
          {/* Left Ghat Image */}
          <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] overflow-hidden">
            <img
              src={selectedGhat.image}
              alt={selectedGhat.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101624] via-transparent to-black/30" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 border border-[#d4af37]/50 text-[#ffe088] backdrop-blur-md">
                {selectedGhat.historicalEra}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#ffe088] bg-black/75 px-3.5 py-2 rounded-xl backdrop-blur-md border border-[#d4af37]/30">
              <span className="flex items-center gap-1.5 font-medium">
                <Flame className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>{selectedGhat.diyaCountApprox}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>{selectedGhat.aartiTime}</span>
              </span>
            </div>
          </div>

          {/* Right Ghat Legend & Details */}
          <div className="lg:col-span-6 p-5 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-serif text-[#ffe088]">{selectedGhat.hindiName}</div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2ca50]">
                  {selectedGhat.name}
                </h3>
                <p className="text-xs text-[#ffb77a] font-medium tracking-wide">
                  {selectedGhat.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                {selectedGhat.story}
              </p>

              {/* Ghat Ritual Highlights: Single column vertical stack on mobile (<768px) */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-serif uppercase tracking-wider text-[#ffe088] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
                  Dev Deepawali Night Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedGhat.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-[#0a0e17] border border-[#d4af37]/25 text-xs text-[#e5e2e1] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cruise Navigation Insight */}
            <div className="p-3.5 rounded-xl bg-[#0a0e17]/90 border border-[#d4af37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-[#d0c5af]">
                <Layers className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Our vessel maintains prime slow-drift cruising at this ghat.</span>
              </div>
              <span className="text-[#ffe088] font-serif font-bold whitespace-nowrap">
                Stop #{selectedGhat.coordinatesOrder} of 6
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
