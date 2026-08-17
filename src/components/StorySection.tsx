import React from 'react';
import { Sparkles, BookOpen, Compass, ShieldCheck, Flame } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0e17] relative overflow-hidden border-t border-[#d4af37]/20">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#f2ca50]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff9933]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
                पौराणिक कथा • The Sacred Legend
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f2ca50] leading-tight">
              The Night Kashi Comes Alive for the Gods
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#d0c5af] leading-relaxed">
              <p>
                Celebrated on the full moon of <strong>Kartik Purnima</strong> (fifteen days after Diwali), <span className="text-[#ffe088] font-medium">Dev Deepawali</span> marks the victory of Lord Shiva over the formidable demon Tripurasura. To honor Mahadeva’s triumph, all 33 crore celestial beings (Devas) are believed to descend from the heavens to bathe in the holy Ganges and light lamps across Kashi.
              </p>

              <p>
                As twilight settles over the eternal city, all <strong>84 magnificent stone ghats</strong>—stretching over seven kilometers in an auspicious crescent—are illuminated simultaneously with more than <strong>one million hand-lit earthen diyas</strong>. The sacred steps transform into a shimmering golden staircase connecting heaven and earth.
              </p>

              <p>
                From the historic <em>Akash Deep</em> lanterns suspended high on bamboo poles at Panchganga Ghat to the thunderous conch blasts of the 21-priest Maha Aarti at Dashashwamedh, Dev Deepawali is a sensory and spiritual spectacle found nowhere else on planet Earth.
              </p>
            </div>

            {/* Key Cultural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#101624] border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-colors shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 flex items-center justify-center mb-2">
                  <Flame className="w-4 h-4 text-[#f2ca50]" />
                </div>
                <h4 className="font-serif font-semibold text-sm text-[#e5e2e1]">Tripurari Shiva</h4>
                <p className="text-xs text-[#8e9cb4] mt-1">Celebrating Mahadeva's victory over darkness and ego.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#101624] border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-colors shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 flex items-center justify-center mb-2">
                  <Compass className="w-4 h-4 text-[#f2ca50]" />
                </div>
                <h4 className="font-serif font-semibold text-sm text-[#e5e2e1]">84 Sacred Ghats</h4>
                <p className="text-xs text-[#8e9cb4] mt-1">Centuries of royal heritage, temples, and stone architecture.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#101624] border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-colors shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 flex items-center justify-center mb-2">
                  <Sparkles className="w-4 h-4 text-[#f2ca50]" />
                </div>
                <h4 className="font-serif font-semibold text-sm text-[#e5e2e1]">10 Lakh+ Diyas</h4>
                <p className="text-xs text-[#8e9cb4] mt-1">A golden river of light reflecting upon the holy Ganges.</p>
              </div>
            </div>
          </div>

          {/* Right Visual Card with Glowing Diya Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-[0_0_40px_rgba(212,175,55,0.25)] group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDsdWm0kzPy5qNpqQ8d7fL-REfua1hvEqKmG5mu9hxb9Exg69DpsnwWch5AHpigaxPrGcQdrOOWQbUfHTQMavztEJKdwpPv91McAlGj1viz1PRdIqgVKHG1HsFRffNJUsPgoL-m75bLBwl740kdVMttPaxP9yivdQ8ZvOTuZW5nVnQqdAI9vtmOQT1EMyF1xVLaXMkhIbyo2Ze91UJ6VRBHwEy0kuh-yd3mrBSpnV0nF1MtwXGJGIxg"
                alt="Close up of a glowing brass diya on Kashi Ghats during Dev Deepawali"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-black/30" />
              
              {/* Bottom Quote Banner */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/95 to-transparent">
                <div className="font-serif text-sm sm:text-base text-[#ffe088] italic mb-1">
                  "बनारस सिर्फ एक शहर नहीं, एक अनुभव है... और देव दीपावली उस अनुभव की चरम सीमा है।"
                </div>
                <div className="text-xs text-[#d0c5af]">
                  — The Eternal City of Light (Kashi)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
