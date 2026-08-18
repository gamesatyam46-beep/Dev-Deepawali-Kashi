import React from 'react';
import { CheckCircle2, Sparkles, Star, Award, ShieldCheck, Check, ArrowRight } from 'lucide-react';
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
      icon: '🏮',
      title: 'SKY LANTERN',
      subtitle: 'One Sky Lantern (आकाश दीप)',
      desc: 'A memorable part of the Dev Deepawali celebration to light and release into the celestial night sky over the holy Ganga.'
    },
    {
      num: '02',
      icon: '🪔',
      title: 'FLOWER DIYA',
      subtitle: 'Flower Diya for Ganga Ji (पुष्प दीप)',
      desc: 'To be respectfully immersed into the sacred Ganges as part of your devotional offering during the grand Aarti.'
    },
    {
      num: '03',
      icon: '💧',
      title: '1 BOTTLE WATER',
      subtitle: 'One Bottle of Water (मिनरल वाटर)',
      desc: 'Complimentary sealed packaged mineral drinking water provided for every passenger on board.'
    },
    {
      num: '04',
      icon: '🎟️',
      title: 'WELCOME ENTRY',
      subtitle: 'Welcome Entry with Tilak (शाही स्वागत)',
      desc: 'A warm traditional welcome with chandan tilak and seamless priority entry as you embark on your sacred passage.'
    },
    {
      num: '05',
      icon: '🏆',
      title: 'MOMENTO',
      subtitle: 'One Memento (पावन स्मृति चिन्ह)',
      desc: 'A sacred souvenir keepsake to remember your divine Dev Deepawali experience in Varanasi for a lifetime.'
    }
  ];

  return (
    <section id="packages" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070a10] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2ca50]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff9933]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 sm:space-y-24">
        
        {/* ========================================================= */}
        {/* SECTION: YOUR EXPERIENCE INCLUDES (5 CONFIRMED ITEMS)     */}
        {/* ========================================================= */}
        <div className="space-y-8 sm:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
              <Star className="w-4 h-4 text-[#f2ca50] fill-[#f2ca50]" />
              <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
                पुष्टि समावेशन • Guaranteed Inclusions
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#f2ca50]">
              YOUR EXPERIENCE INCLUDES
            </h2>

            <p className="font-sans text-xs sm:text-base text-[#d0c5af] leading-relaxed">
              Every booking comes standard with five sacred and memorable offerings to enrich your Dev Deepawali celebration on the Ganga.
            </p>
          </div>

          {/* Inclusions: Consistent vertical stack on mobile (<768px), 5-col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {INCLUSIONS_LIST.map((inc) => (
              <div
                key={inc.num}
                className="rounded-2xl p-5 sm:p-6 bg-[#0e1422] border border-[#d4af37]/30 hover:border-[#f2ca50] transition-all hover:-translate-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.7)] flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl" role="img" aria-label={inc.title}>{inc.icon}</span>
                    <span className="text-xs font-mono font-bold text-[#f2ca50]/80 bg-[#172033] px-2.5 py-1 rounded-full border border-[#d4af37]/20">
                      {inc.num}
                    </span>
                  </div>

                  <div className="mt-3.5 space-y-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#ffffff] group-hover:text-[#ffe088] transition-colors">
                      {inc.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#f2ca50]">
                      {inc.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-[#a5b4cb] mt-2.5 leading-relaxed">
                    {inc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1e293b] flex items-center gap-1.5 text-[11px] text-[#25D366] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Included with all rides</span>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Notice Banner */}
          <div className="max-w-3xl mx-auto text-center p-4 rounded-xl bg-[#101624]/90 border border-[#d4af37]/25 text-xs text-[#c2d0e6] leading-relaxed">
            <span className="text-[#ffe088] font-bold">Important Notice:</span> This is a sacred Dev Deepawali river viewing passage. No dinner, buffet, meals, or outside food packages are included.
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION: CHOOSE YOUR RIDE (3 DISTINCT PACKAGES)           */}
        {/* ========================================================= */}
        <div className="space-y-10 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
                सवारी चयन • Three Sacred Passages
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f2ca50] to-[#ffd700]">
              CHOOSE YOUR RIDE
            </h2>

            <p className="font-serif text-sm sm:text-xl text-[#ffe088] font-medium">
              Three ways to experience Dev Deepawali from the Ganga.
            </p>
          </div>

          {/* 3 Package Cards: Full width single column on mobile (<1024px), 3-col on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {PACKAGE_TIERS.map((tier) => {
              const isLuxury = tier.id === 'luxury-cruise';
              const isDoubleDecker = tier.id === 'double-decker-boat';

              return (
                <div
                  key={tier.id}
                  className={`rounded-3xl overflow-hidden flex flex-col justify-between relative backdrop-blur-xl transition-all duration-300 group ${
                    isLuxury
                      ? 'bg-gradient-to-b from-[#1c2233] via-[#121926] to-[#080b12] border-2 border-[#f2ca50] shadow-[0_0_40px_rgba(212,175,55,0.35)]'
                      : isDoubleDecker
                      ? 'bg-gradient-to-b from-[#141b29] via-[#0f1420] to-[#080b12] border border-[#d4af37]/70 shadow-[0_0_25px_rgba(0,0,0,0.8)]'
                      : 'bg-gradient-to-b from-[#101522] via-[#0c101a] to-[#070910] border border-[#384358] hover:border-[#d4af37]/50 shadow-2xl'
                  }`}
                >
                  {/* Full Bleed Image Header (100% card width coverage) */}
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-black">
                    <img
                      src={tier.image}
                      alt={tier.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-black/25 to-black/50" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      {isLuxury ? (
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-serif font-bold tracking-widest uppercase bg-gradient-to-r from-[#ffd700] via-[#f59e0b] to-[#d97706] text-[#1c1300] shadow-[0_0_20px_rgba(245,158,11,0.6)] flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 fill-[#1c1300]" /> PREMIUM EXPERIENCE
                        </span>
                      ) : isDoubleDecker ? (
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] font-serif font-bold tracking-wider uppercase bg-[#080c14]/90 text-[#ffe088] border border-[#d4af37]/70 backdrop-blur-md">
                          POPULAR CHOICE
                        </span>
                      ) : (
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] font-serif font-bold tracking-wider uppercase bg-[#080c14]/90 text-[#a5b4cb] border border-[#384358] backdrop-blur-md">
                          AUTHENTIC RIDE
                        </span>
                      )}

                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/75 border border-[#d4af37]/40 text-[#ffe088] backdrop-blur-md">
                        Nov 24 • Kashi
                      </span>
                    </div>

                    {/* Bottom Vessel Spec on Image */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#ffe088] font-serif bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#d4af37]/35 z-10">
                      <span className="font-semibold">{tier.deckLevel}</span>
                      <span className="text-[11px] text-[#25D366] font-sans font-medium">Ravidas Ghat VIP Jetty</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                    <div>
                      {/* Card Title & Pricing */}
                      <div className="text-center pb-5 border-b border-[#222c3f] space-y-1.5">
                        <div className="text-xs font-serif text-[#ffe088] uppercase tracking-widest">
                          {tier.hindiTitle}
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#ffffff]">
                          {tier.name.toUpperCase()}
                        </h3>
                        <p className="text-xs text-[#a5b4cb] leading-relaxed">
                          {tier.subtitle}
                        </p>

                        {/* Price Display */}
                        <div className="pt-3">
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f2ca50] drop-shadow-[0_2px_10px_rgba(242,202,80,0.3)]">
                              ₹{tier.price.toLocaleString('en-IN')}/-
                            </span>
                          </div>
                          <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ffe088] font-semibold mt-1">
                            PER BOOKING / PER PERSON*
                          </div>
                        </div>
                      </div>

                      {/* Highlights List */}
                      <div className="py-5 space-y-2.5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#ffe088] flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#f2ca50]" /> Ride Highlights:
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm">
                          <li className="flex items-start gap-2 text-[#e5e2e1]">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Dev Deepawali river experience across 84 Ghats</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#e5e2e1]">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Welcome Entry (शाही स्वागत)</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#e5e2e1]">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Sky Lantern (आकाश दीप)</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#e5e2e1]">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Flower Diya for Ganga Ji (पुष्प दीप गंगा अर्पण)</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#e5e2e1]">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                            <span>1 Bottle Water (मिनरल वाटर)</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#e5e2e1]">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                            <span>Sacred Memento (पावन स्मृति चिन्ह)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="pt-4 border-t border-[#222c3f] space-y-2 text-center">
                      <button
                        id={`book-tier-${tier.id}`}
                        onClick={() => scrollToBooking(tier.id)}
                        className={`w-full py-3.5 sm:py-4 px-5 rounded-2xl font-serif font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                          isLuxury
                            ? 'bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white shadow-[0_0_30px_rgba(37,211,102,0.5)]'
                            : 'bg-[#172033] hover:bg-[#25D366] text-[#ffe088] hover:text-white border border-[#d4af37]/40 hover:border-transparent'
                        }`}
                      >
                        <span>BOOK THIS RIDE</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="text-[11px] text-[#a5b4cb] flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#f2ca50]" /> 50% Advance to Reserve
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION: PACKAGE COMPARISON MATRIX                        */}
        {/* ========================================================= */}
        <div className="space-y-6 sm:space-y-8 pt-2">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#f2ca50]">
              Package Comparison
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#d0c5af]">
              Transparent feature-by-feature comparison across all three vessels.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#d4af37]/30 bg-[#0d121d] shadow-2xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[580px]">
              <thead>
                <tr className="border-b border-[#222c3f] bg-[#141b29] text-[#ffe088] font-serif">
                  <th className="p-3.5 sm:p-5 font-bold uppercase tracking-wider">Feature</th>
                  <th className="p-3.5 sm:p-5 font-bold uppercase tracking-wider text-center">Choti Motor Boat</th>
                  <th className="p-3.5 sm:p-5 font-bold uppercase tracking-wider text-center">Double Decker Boat</th>
                  <th className="p-3.5 sm:p-5 font-bold uppercase tracking-wider text-center text-[#f2ca50]">Luxury Cruise (Featured)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2535] text-[#d0c5af]">
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-3.5 sm:p-5 font-medium text-[#ffffff]">Price</td>
                  <td className="p-3.5 sm:p-5 text-center font-bold text-[#ffffff]">₹4,999/-</td>
                  <td className="p-3.5 sm:p-5 text-center font-bold text-[#ffffff]">₹7,999/-</td>
                  <td className="p-3.5 sm:p-5 text-center font-bold text-[#f2ca50] text-sm sm:text-base">₹14,999/-</td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-3.5 sm:p-5 font-medium text-[#ffffff]">Dev Deepawali 84 Ghats Tour</td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-3.5 sm:p-5 font-medium text-[#ffffff]">Sky Lantern</td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-3.5 sm:p-5 font-medium text-[#ffffff]">Flower Diya</td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-3.5 sm:p-5 font-medium text-[#ffffff]">1 Bottle Water</td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-3.5 sm:p-5 font-medium text-[#ffffff]">Welcome Entry</td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                </tr>
                <tr className="hover:bg-[#121926] transition-colors">
                  <td className="p-3.5 sm:p-5 font-medium text-[#ffffff]">Memento</td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                  <td className="p-3.5 sm:p-5 text-center"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION: 50% ADVANCE BOOKING INFORMATION & EXAMPLES       */}
        {/* ========================================================= */}
        <div className="rounded-3xl p-5 sm:p-10 bg-gradient-to-r from-[#141b29] via-[#101624] to-[#141b29] border-2 border-[#d4af37]/60 shadow-[0_0_40px_rgba(212,175,55,0.25)] space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#d4af37]/40 bg-[#070a10] text-[#f2ca50] text-xs font-serif uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4 text-[#f2ca50]" /> RESERVE YOUR SEAT
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#ffffff]">
              50% ADVANCE PAYMENT REQUIRED
            </h3>

            <p className="font-serif text-xs sm:text-base text-[#ffe088]">
              Booking confirm करने के लिए कुल booking amount का 50% advance payment करना होगा।
            </p>
          </div>

          {/* 3 Calculated Dynamic Examples: Stack vertically on mobile (<768px) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#080c14] border border-[#2d384e] space-y-3">
              <div className="text-xs uppercase font-serif tracking-wider text-[#a5b4cb]">
                Ride 01
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#ffffff]">
                CHOTI MOTOR BOAT
              </h4>
              <div className="space-y-1.5 text-xs text-[#d0c5af]">
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-bold text-[#ffffff]">₹4,999.00</span>
                </div>
                <div className="flex justify-between text-[#25D366] font-semibold border-t border-[#1e2535] pt-1.5">
                  <span>50% Advance:</span>
                  <span>₹2,499.50</span>
                </div>
                <div className="flex justify-between text-[#8e9cb4]">
                  <span>Balance at Boarding:</span>
                  <span>₹2,499.50</span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#080c14] border border-[#d4af37]/40 space-y-3">
              <div className="text-xs uppercase font-serif tracking-wider text-[#ffe088]">
                Ride 02 (Popular)
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#ffffff]">
                DOUBLE DECKER BOAT
              </h4>
              <div className="space-y-1.5 text-xs text-[#d0c5af]">
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-bold text-[#ffffff]">₹7,999.00</span>
                </div>
                <div className="flex justify-between text-[#25D366] font-semibold border-t border-[#1e2535] pt-1.5">
                  <span>50% Advance:</span>
                  <span>₹3,999.50</span>
                </div>
                <div className="flex justify-between text-[#8e9cb4]">
                  <span>Balance at Boarding:</span>
                  <span>₹3,999.50</span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#080c14] border-2 border-[#f2ca50] space-y-3 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
              <div className="text-xs uppercase font-serif tracking-wider text-[#f2ca50] font-bold">
                Ride 03 (Featured)
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#ffffff]">
                LUXURY CRUISE
              </h4>
              <div className="space-y-1.5 text-xs text-[#d0c5af]">
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-bold text-[#ffffff]">₹14,999.00</span>
                </div>
                <div className="flex justify-between text-[#25D366] font-bold border-t border-[#1e2535] pt-1.5">
                  <span>50% Advance:</span>
                  <span>₹7,499.50</span>
                </div>
                <div className="flex justify-between text-[#8e9cb4]">
                  <span>Balance at Boarding:</span>
                  <span>₹7,499.50</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('booking-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#f2ca50] hover:bg-[#ffe088] text-[#1c1300] font-serif font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all cursor-pointer"
            >
              CALCULATE & RESERVE YOUR SEATS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
