import React from 'react';
import { CheckCircle2, Sparkles, Star, Award, ShieldCheck, Check, ArrowRight, Crown } from 'lucide-react';
import { PACKAGE_TIERS } from '../data/kashiData';

interface PackagesSectionProps {
  onSelectPackage: (tierId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const scrollToBooking = (tierId: string) => {
    onSelectPackage(tierId);
    const el = document.getElementById('booking-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const INCLUSIONS_LIST = [
    {
      num: '01',
      icon: '⛵',
      title: '84 GHATS TOUR',
      subtitle: 'Dev Deepawali 84 Ghats Tour (4:30 - 9:00 PM)',
      desc: 'Complete sacred river cruise covering all 84 illuminated heritage ghats from Assi to Namo Ghat.'
    },
    {
      num: '02',
      icon: '🏮',
      title: 'SKY LANTERN',
      subtitle: 'Sky Lantern (स्काई लालटेन)',
      desc: 'Enchanting sky lanterns rising into the sacred night sky of Varanasi creating a celestial spectacle.'
    },
    {
      num: '03',
      icon: '🪔',
      title: 'FLOWER DIYA',
      subtitle: 'Flower Diya for Ganga Ji (पुष्प दीप अर्पण)',
      desc: 'Sacred floral lamp offering for devotional immersion into Mother Ganga during the grand Aarti.'
    },
    {
      num: '04',
      icon: '💧',
      title: '1 BOTTLE WATER',
      subtitle: '1 Bottle Water (मिनरल वाटर)',
      desc: 'Complimentary sealed packaged mineral drinking water provided for every passenger on board.'
    },
    {
      num: '05',
      icon: '🎟️',
      title: 'WELCOME ENTRY',
      subtitle: 'Welcome Entry with Tilak (शाही स्वागत)',
      desc: 'A warm traditional welcome with chandan tilak and seamless priority boarding at Ravidas Ghat Jetty.'
    },
    {
      num: '06',
      icon: '🏆',
      title: 'MEMENTO',
      subtitle: 'Sacred Memento (पावन स्मृति चिन्ह / मोमेंटो)',
      desc: 'A divine Dev Deepawali souvenir keepsake of Kashi to take home and cherish for a lifetime.'
    }
  ];

  return (
    <section id="packages" className="py-12 sm:py-18 px-4 sm:px-6 lg:px-8 bg-[#070a10] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#f2ca50]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff9933]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================= */}
        {/* SECTION: YOUR EXPERIENCE INCLUDES (6 CONFIRMED ITEMS)     */}
        {/* ========================================================= */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#f2ca50] fill-[#f2ca50]" />
              <span className="text-[11px] font-serif tracking-widest text-[#ffe088] uppercase">
                पुष्टि समावेशन • Guaranteed Inclusions
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#f2ca50]">
              YOUR EXPERIENCE INCLUDES
            </h2>

            <p className="font-sans text-xs sm:text-base text-[#d0c5af] leading-relaxed">
              Every booking comes standard with six sacred and memorable offerings to enrich your Dev Deepawali celebration on the Ganga.
            </p>
          </div>

          {/* Inclusions: 1-col on mobile, 2-col on sm, 3-col on md, 6-col on xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
            {INCLUSIONS_LIST.map((inc) => (
              <div
                key={inc.num}
                className="rounded-2xl p-4 sm:p-5 bg-[#0e1422] border border-[#d4af37]/30 hover:border-[#f2ca50] transition-all hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.7)] flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl" role="img" aria-label={inc.title}>{inc.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-[#f2ca50]/80 bg-[#172033] px-2 py-0.5 rounded-full border border-[#d4af37]/20">
                      {inc.num}
                    </span>
                  </div>

                  <div className="mt-2.5 space-y-0.5">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#ffffff] group-hover:text-[#ffe088] transition-colors">
                      {inc.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#f2ca50]">
                      {inc.subtitle}
                    </div>
                  </div>

                  <p className="text-[11px] text-[#a5b4cb] mt-2 leading-relaxed">
                    {inc.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#1e293b] flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#25D366] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Included with all rides</span>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Notice Banner */}
          <div className="max-w-3xl mx-auto text-center p-3 rounded-xl bg-[#101624]/90 border border-[#d4af37]/25 text-xs text-[#c2d0e6] leading-relaxed">
            <span className="text-[#ffe088] font-bold">Important Notice:</span> This is a sacred Dev Deepawali river viewing passage. No dinner, buffet, meals, or outside food packages are included.
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION: CHOOSE YOUR RIDE (3 BOATS)                       */}
        {/* ========================================================= */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
              <span className="text-[11px] font-serif tracking-widest text-[#ffe088] uppercase">
                सवारी चयन • Sacred Passages
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f2ca50] to-[#ffd700]">
              CHOOSE YOUR RIDE
            </h2>

            <p className="font-serif text-xs sm:text-base text-[#ffe088] font-medium">
              Select your preferred vessel to experience Dev Deepawali across all 84 Ghats.
            </p>
          </div>

          {/* 3 Package Cards: 1-col on mobile, 2-col on tablet, 3-col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-7xl mx-auto items-stretch">
            {PACKAGE_TIERS.map((tier) => {
              const isDoubleDecker = tier.id === 'double-decker-boat';
              const isLuxuryCruise = tier.id === 'luxury-cruise';

              return (
                <div
                  key={tier.id}
                  className={`rounded-3xl overflow-hidden flex flex-col justify-between relative backdrop-blur-xl transition-all duration-300 group ${
                    isLuxuryCruise
                      ? 'bg-gradient-to-b from-[#181a28] via-[#101320] to-[#080a12] border-2 border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.35)]'
                      : isDoubleDecker
                      ? 'bg-gradient-to-b from-[#141b29] via-[#0f1420] to-[#080b12] border-2 border-[#f2ca50] shadow-[0_0_35px_rgba(212,175,55,0.3)]'
                      : 'bg-gradient-to-b from-[#101522] via-[#0c101a] to-[#070910] border border-[#d4af37]/40 hover:border-[#d4af37]/80 shadow-2xl'
                  }`}
                >
                  {/* Image Header */}
                  <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#0a0e17]">
                    <img
                      src={tier.image}
                      alt={tier.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-115 contrast-110 saturate-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-black/15 to-black/35" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      {isLuxuryCruise ? (
                        <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-serif font-bold tracking-wider uppercase bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#1c1300] shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center gap-1">
                          <Crown className="w-3 h-3 fill-[#1c1300]" /> ULTRA LUXURY
                        </span>
                      ) : isDoubleDecker ? (
                        <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-serif font-bold tracking-wider uppercase bg-[#f2ca50] text-[#1c1300] shadow-[0_0_15px_rgba(242,202,80,0.5)] flex items-center gap-1">
                          <Star className="w-3 h-3 fill-[#1c1300]" /> MOST POPULAR
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-serif font-bold tracking-wider uppercase bg-[#080c14]/90 text-[#ffe088] border border-[#d4af37]/50 backdrop-blur-md">
                          AUTHENTIC RIDE
                        </span>
                      )}

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/75 border border-[#d4af37]/40 text-[#ffe088] backdrop-blur-md">
                        Nov 24 • Kashi
                      </span>
                    </div>

                    {/* Bottom Vessel Spec on Image */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-[#ffe088] font-serif bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-[#d4af37]/35 z-10">
                      <span className="font-semibold truncate pr-2">{tier.deckLevel}</span>
                      <span className="text-[10px] text-[#25D366] font-sans font-medium shrink-0">Ravidas Jetty</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      {/* Card Title & Pricing */}
                      <div className="text-center pb-3.5 border-b border-[#222c3f] space-y-1">
                        <div className="text-xs font-serif text-[#ffe088] uppercase tracking-widest">
                          {tier.hindiTitle}
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#ffffff]">
                          {tier.name.toUpperCase()}
                        </h3>
                        <p className="text-[11px] text-[#a5b4cb] leading-relaxed line-clamp-2">
                          {tier.subtitle}
                        </p>

                        {/* Price Display */}
                        <div className="pt-2">
                          <div className="flex items-baseline justify-center gap-1.5">
                            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#f2ca50] drop-shadow-[0_2px_10px_rgba(242,202,80,0.3)]">
                              ₹{tier.price.toLocaleString('en-IN')}/-
                            </span>
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-[#ffe088] font-semibold mt-0.5">
                            PER BOOKING / PER PERSON*
                          </div>
                        </div>
                      </div>

                      {/* Highlights List */}
                      <div className="py-3 space-y-1.5">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#ffe088] flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#f2ca50]" /> Inclusions:
                        </div>

                        <ul className="space-y-1.5 text-xs">
                          <li className="flex items-start gap-1.5 text-[#e5e2e1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Dev Deepawali 84 Ghats Tour (4:30 - 9:00 PM)</span>
                          </li>
                          <li className="flex items-start gap-1.5 text-[#e5e2e1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Sky Lantern (स्काई लालटेन)</span>
                          </li>
                          <li className="flex items-start gap-1.5 text-[#e5e2e1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Flower Diya (पुष्प दीप)</span>
                          </li>
                          <li className="flex items-start gap-1.5 text-[#e5e2e1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                            <span>1 Bottle Water (मिनरल वाटर)</span>
                          </li>
                          <li className="flex items-start gap-1.5 text-[#e5e2e1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Welcome Entry (शाही स्वागत)</span>
                          </li>
                          <li className="flex items-start gap-1.5 text-[#e5e2e1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Memento (पावन स्मृति चिन्ह)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="pt-3 border-t border-[#222c3f] space-y-2 text-center">
                      <button
                        id={`book-tier-${tier.id}`}
                        onClick={() => scrollToBooking(tier.id)}
                        className={`w-full py-2.5 sm:py-3 px-4 rounded-2xl font-serif font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                          isLuxuryCruise
                            ? 'bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#e6b800] text-[#1a1400] shadow-[0_0_25px_rgba(212,175,55,0.6)] font-extrabold'
                            : isDoubleDecker
                            ? 'bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)]'
                            : 'bg-[#172033] hover:bg-[#25D366] text-[#ffe088] hover:text-white border border-[#d4af37]/40 hover:border-transparent'
                        }`}
                      >
                        <span>BOOK THIS RIDE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="text-[10px] text-[#a5b4cb] flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#f2ca50]" /> Verified Seat Reservation
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION: PACKAGE COMPARISON MATRIX (Zero-Scroll Mobile)   */}
        {/* ========================================================= */}
        <div className="space-y-4 sm:space-y-6 pt-2 max-w-5xl mx-auto">
          <div className="text-center space-y-1.5">
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#f2ca50]">
              Package Comparison
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#d0c5af]">
              Direct side-by-side comparison between Chhoti Boat, Double Decker, and Luxury Cruise.
            </p>
          </div>

          {/* Compact Zero-Scroll Table: Fits 100% in mobile viewport without horizontal scrolling */}
          <div className="w-full rounded-2xl border border-[#d4af37]/35 bg-[#0d121d] shadow-xl overflow-hidden">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="border-b border-[#222c3f] bg-[#141b29] text-[#ffe088] font-serif text-[10px] sm:text-xs md:text-sm">
                  <th className="w-[34%] p-2 sm:p-3.5 font-bold uppercase tracking-wider">Inclusions</th>
                  <th className="w-[22%] p-2 sm:p-3.5 font-bold uppercase tracking-wider text-center">Chhoti ₹4,999</th>
                  <th className="w-[22%] p-2 sm:p-3.5 font-bold uppercase tracking-wider text-center text-[#f2ca50]">D-Decker ₹7,999</th>
                  <th className="w-[22%] p-2 sm:p-3.5 font-bold uppercase tracking-wider text-center text-[#ffd700]">Cruise ₹14,999</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2535] text-[#d0c5af] text-[10px] sm:text-xs md:text-sm">
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-2 sm:p-3.5 font-medium text-[#ffffff]">Price per Person</td>
                  <td className="p-2 sm:p-3.5 text-center font-bold text-[#ffffff]">₹4,999</td>
                  <td className="p-2 sm:p-3.5 text-center font-bold text-[#f2ca50]">₹7,999</td>
                  <td className="p-2 sm:p-3.5 text-center font-bold text-[#ffd700]">₹14,999</td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-2 sm:p-3.5 font-medium text-[#ffffff]">Dev Deepawali 84 Ghats Tour</td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-2 sm:p-3.5 font-medium text-[#ffffff]">Sky Lantern</td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-2 sm:p-3.5 font-medium text-[#ffffff]">Flower Diya</td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-2 sm:p-3.5 font-medium text-[#ffffff]">1 Bottle Water</td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-2 sm:p-3.5 font-medium text-[#ffffff]">Welcome Entry</td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-2 sm:p-3.5 font-medium text-[#ffffff]">Memento</td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                  <td className="p-2 sm:p-3.5 text-center"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('booking-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#f2ca50] hover:bg-[#ffe088] text-[#1c1300] font-serif font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all cursor-pointer"
            >
              PROCEED TO BOOKING
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
