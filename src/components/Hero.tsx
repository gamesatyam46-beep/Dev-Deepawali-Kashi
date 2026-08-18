import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import heroImageHd from '../assets/images/varanasi_razor_sharp_1787065726018.jpg';

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

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreGhats }) => {
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
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#06080d]">
      {/* 100% Crystal-Clear Razor-Sharp Dev Deepawali Visual Backdrop (No Haze / No Blur) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroImageHd}
          alt="Dev Deepawali Varanasi Ghats Celebrations - Crystal Clear Sharp Focus"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-100 brightness-110 contrast-115 saturate-120"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
        {/* Soft edge blend only at top and bottom edges - keeping the central photograph completely clear & crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080d]/60 via-transparent to-[#06080d]/80 pointer-events-none" />
      </div>

      {/* Responsive Center Stage with clean vertical rhythm and zero overlap */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 sm:gap-8">
        
        {/* Sacred Monogram & Date Badge with Live Countdown Timer */}
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/60 bg-[#06080d]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            <span className="text-[#f2ca50] text-xs font-serif">ॐ</span>
            <span className="text-[11px] sm:text-xs font-serif tracking-[0.15em] sm:tracking-[0.2em] text-[#ffe088] uppercase font-semibold">
              24 November 2026 • Varanasi
            </span>
          </div>

          {/* Live Dynamic Countdown Units */}
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-2xl bg-[#070a10]/90 border border-[#d4af37]/50 backdrop-blur-lg shadow-[0_6px_25px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-1.5 text-[#f2ca50] mr-1">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-[#f2ca50]" />
              <span className="text-[10px] sm:text-xs font-serif tracking-wider uppercase text-[#ffe088] font-bold hidden sm:inline">
                Countdown:
              </span>
            </div>

            {/* Days */}
            <div className="flex flex-col items-center px-1.5 sm:px-2">
              <span className="font-serif font-bold text-base sm:text-xl text-[#ffffff] [text-shadow:_0_2px_10px_rgba(212,175,55,0.5)]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#d0c5af] font-medium">
                Days
              </span>
            </div>
            <span className="text-[#d4af37]/60 font-bold text-sm sm:text-base -mt-3">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center px-1.5 sm:px-2">
              <span className="font-serif font-bold text-base sm:text-xl text-[#ffffff] [text-shadow:_0_2px_10px_rgba(212,175,55,0.5)]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#d0c5af] font-medium">
                Hours
              </span>
            </div>
            <span className="text-[#d4af37]/60 font-bold text-sm sm:text-base -mt-3">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center px-1.5 sm:px-2">
              <span className="font-serif font-bold text-base sm:text-xl text-[#ffffff] [text-shadow:_0_2px_10px_rgba(212,175,55,0.5)]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#d0c5af] font-medium">
                Mins
              </span>
            </div>
            <span className="text-[#d4af37]/60 font-bold text-sm sm:text-base -mt-3">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center px-1.5 sm:px-2">
              <span className="font-serif font-bold text-base sm:text-xl text-[#f2ca50] [text-shadow:_0_2px_10px_rgba(242,202,80,0.8)]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#ffe088] font-semibold">
                Secs
              </span>
            </div>
          </div>
        </div>

        {/* Grand Title with High-Contrast Text Glow */}
        <div className="space-y-3 sm:space-y-4 w-full">
          <div className="text-xs sm:text-sm font-serif tracking-[0.2em] sm:tracking-[0.25em] text-[#f2ca50] uppercase font-semibold">
            काशी की दिव्यता • गंगा की पवित्रता • देव दीपावली की अलौकिकता
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)] leading-tight">
            DEV DEEPAWALI 2026
          </h1>

          <div className="font-serif text-sm sm:text-xl md:text-2xl text-[#ffe088] font-bold tracking-wide px-2 drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)] uppercase">
            EXPERIENCE THE DIVINE IN VARANASI
          </div>

          <p className="font-sans text-xs sm:text-base text-[#f5deb3] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            इस देव दीपावली, काशी की रोशनी और गंगा की लहरों के बीच एक यादगार अनुभव का हिस्सा बनें।
          </p>
        </div>

        {/* Dual Call to Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-2">
          <button
            id="hero-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-sm sm:text-base shadow-[0_0_35px_rgba(37,211,102,0.5)] hover:shadow-[0_0_55px_rgba(37,211,102,0.8)] transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span>BOOK NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>

          <button
            id="hero-explore-btn"
            onClick={onExploreGhats}
            className="w-full sm:w-auto min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#06080d]/85 hover:bg-[#101624] border border-[#d4af37]/60 hover:border-[#f2ca50] text-[#ffe088] hover:text-white font-serif font-semibold text-sm sm:text-base backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#f2ca50]" />
            <span>EXPLORE EXPERIENCES</span>
          </button>
        </div>

      </div>
    </section>
  );
};
