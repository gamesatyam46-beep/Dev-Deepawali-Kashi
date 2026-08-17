import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreGhats: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Target: Dev Deepawali 2026 (24 November 2026, 17:00 IST)
  const targetDate = new Date('2026-11-24T17:00:00+05:30').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden bg-[#06080d]">
      {/* Crystal Clear Cinematic Night Ganga Visual Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1VJT4D_OZdQWRxa6Z3PvO7ekxcnXuMTsT_ZFlbZKaW7B5F9NdIsDfYSJOZNQJx-nIfXsRP6_pZmeNSnPkd6qW12-t0ozwKbYH0yk1hDHM7igNT-U3HVqI76tIZuqFbCBsR4SlEsBego2uiXcnW2EUzjeLONUYJk8y5hMMSQbf_bi_p3al48UqZJOgpVZYDOsdvDWO6oxQ41nhodJzAyB1UjGIBdUg-sU3er5FBpTNyzYXjxr-vZVulw"
          alt="Dev Deepawali Varanasi Ghats"
          className="w-full h-full object-cover object-center opacity-95 brightness-110 contrast-110"
        />
        {/* Subtle edge vignette only to maintain maximum photo sharpness and detail */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-[#06080d]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080d]/60 via-transparent to-transparent h-32" />
      </div>

      {/* Responsive Center Stage with crisp typography and subtle readability enhancement */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4 sm:gap-6">
        
        {/* Sacred Monogram & Date Badge with Live Countdown Timer */}
        <div className="flex flex-col items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/60 bg-[#06080d]/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            <span className="text-[#f2ca50] text-xs font-serif">ॐ</span>
            <span className="text-[10px] sm:text-xs font-serif tracking-[0.15em] sm:tracking-[0.2em] text-[#ffe088] uppercase font-semibold">
              24 November 2026 • Varanasi
            </span>
          </div>

          {/* Live Dynamic Countdown Units */}
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-2xl bg-[#070a10]/85 border border-[#d4af37]/50 backdrop-blur-lg shadow-[0_6px_25px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-1 text-[#f2ca50] mr-1">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-serif tracking-wider uppercase text-[#ffe088] font-bold hidden sm:inline">
                Countdown:
              </span>
            </div>

            {/* Days */}
            <div className="flex flex-col items-center px-1.5 sm:px-2.5">
              <span className="font-serif font-bold text-base sm:text-xl text-[#ffffff] [text-shadow:_0_2px_10px_rgba(212,175,55,0.5)]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#d0c5af] font-medium">
                Days
              </span>
            </div>
            <span className="text-[#d4af37]/60 font-bold text-sm sm:text-base -mt-3">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center px-1.5 sm:px-2.5">
              <span className="font-serif font-bold text-base sm:text-xl text-[#ffffff] [text-shadow:_0_2px_10px_rgba(212,175,55,0.5)]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#d0c5af] font-medium">
                Hours
              </span>
            </div>
            <span className="text-[#d4af37]/60 font-bold text-sm sm:text-base -mt-3">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center px-1.5 sm:px-2.5">
              <span className="font-serif font-bold text-base sm:text-xl text-[#ffffff] [text-shadow:_0_2px_10px_rgba(212,175,55,0.5)]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#d0c5af] font-medium">
                Mins
              </span>
            </div>
            <span className="text-[#d4af37]/60 font-bold text-sm sm:text-base -mt-3">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center px-1.5 sm:px-2.5">
              <span className="font-serif font-bold text-base sm:text-xl text-[#f2ca50] [text-shadow:_0_2px_10px_rgba(242,202,80,0.8)]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#ffe088] font-semibold">
                Secs
              </span>
            </div>
          </div>
        </div>

        {/* Grand Title with High-Contrast Text Glow for supreme readability on crisp photo */}
        <div className="space-y-2 sm:space-y-3 w-full py-1">
          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)] break-words [text-shadow:_0_4px_20px_rgba(0,0,0,0.95),_0_0_40px_rgba(212,175,55,0.4)]">
            DEV DEEPAWALI 2026
          </h1>
          <p className="font-serif text-sm sm:text-xl md:text-2xl text-[#f5deb3] font-medium tracking-wide px-2 drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)]">
            The Royal Ganga Luxury Cruise Experience
          </p>
        </div>

        {/* Primary Call to Action */}
        <div className="w-full sm:w-auto pt-1 sm:pt-2">
          <button
            id="hero-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-sm sm:text-base md:text-lg shadow-[0_0_35px_rgba(37,211,102,0.5)] hover:shadow-[0_0_55px_rgba(37,211,102,0.8)] transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 sm:gap-3 group"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span>BOOK NOW (₹15,000)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};




