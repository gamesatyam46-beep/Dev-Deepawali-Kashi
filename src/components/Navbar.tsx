import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking();
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080d]/95 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-[0_4px_25px_rgba(0,0,0,0.9)] py-3.5'
          : 'bg-gradient-to-b from-[#06080d]/90 via-[#06080d]/30 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Minimal Luxury Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 flex items-center justify-center text-[#f2ca50] text-xs sm:text-sm font-serif">
            ॐ
          </div>
          <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f7e7ce] to-[#d4af37] whitespace-nowrap">
            DEV DEEPAWALI 2026
          </span>
        </a>

        {/* Essential Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium text-[#b8c2d6]">
          <a href="#story" className="hover:text-[#f2ca50] transition-colors">
            The Legend
          </a>
          <a href="#experiences" className="hover:text-[#f2ca50] transition-colors">
            Experiences
          </a>
          <a href="#ghats" className="hover:text-[#f2ca50] transition-colors">
            84 Ghats
          </a>
          <a href="#packages" className="hover:text-[#f2ca50] transition-colors">
            Packages
          </a>
          <a href="#itinerary" className="hover:text-[#f2ca50] transition-colors">
            Itinerary
          </a>
        </nav>

        {/* Primary Booking Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="nav-book-now-btn"
            onClick={scrollToBooking}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 min-h-[40px] sm:min-h-[44px] rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transform active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
            <span>Book Now</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#b8c2d6] hover:text-[#f2ca50] rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06080d]/98 backdrop-blur-2xl border-b border-[#d4af37]/20 px-6 py-5 mt-2 space-y-3 shadow-2xl animate-in fade-in duration-150">
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b8c2d6] hover:text-[#f2ca50] text-sm font-medium py-2 min-h-[44px] flex items-center"
          >
            The Legend
          </a>
          <a
            href="#experiences"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b8c2d6] hover:text-[#f2ca50] text-sm font-medium py-2 min-h-[44px] flex items-center"
          >
            Experiences
          </a>
          <a
            href="#ghats"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b8c2d6] hover:text-[#f2ca50] text-sm font-medium py-2 min-h-[44px] flex items-center"
          >
            84 Ghats
          </a>
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b8c2d6] hover:text-[#f2ca50] text-sm font-medium py-2 min-h-[44px] flex items-center"
          >
            Packages
          </a>
          <a
            href="#itinerary"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#b8c2d6] hover:text-[#f2ca50] text-sm font-medium py-2 min-h-[44px] flex items-center"
          >
            Itinerary
          </a>
          <div className="pt-3 border-t border-[#1e2535]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToBooking();
              }}
              className="w-full min-h-[48px] py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-serif font-bold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


