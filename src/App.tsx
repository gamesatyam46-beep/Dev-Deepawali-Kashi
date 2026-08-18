import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { CuratedMoments } from './components/CuratedMoments';
import { GhatsMapExplorer } from './components/GhatsMapExplorer';
import { PackagesSection } from './components/PackagesSection';
import { ItineraryTimeline } from './components/ItineraryTimeline';
import { BookingFormSection } from './components/BookingFormSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileWhatsAppCTA } from './components/StickyMobileWhatsAppCTA';
import { AiConciergeModal } from './components/AiConciergeModal';

export default function App() {
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string>('double-decker-boat');

  const scrollToBooking = (tierId?: string) => {
    if (tierId) {
      setSelectedTierId(tierId);
    }
    const el = document.getElementById('booking-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreGhats = () => {
    const el = document.getElementById('ghats');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#1a1500] pb-24 sm:pb-0">
      {/* Top Luxury Navigation */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Main Experience Layout */}
      <main className="flex-grow">
        {/* 1. Hero with Countdown, Video/Image Ambience & WhatsApp Book Now */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreGhats={handleExploreGhats}
        />

        {/* 2. The Sacred Story & Legend */}
        <StorySection />

        {/* 3. Curated Moments (Aarti, Laser Show, Fireworks, Luxury Cruise) */}
        <CuratedMoments onOpenBooking={() => scrollToBooking()} />

        {/* 4. The 84 Ghats Interactive Cruise Route */}
        <GhatsMapExplorer />

        {/* 5. Royal Packages (3 Tiers: ₹4,999, ₹7,999, ₹14,999) */}
        <PackagesSection onSelectPackage={(tierId) => scrollToBooking(tierId)} />

        {/* 6. Dedicated WhatsApp Booking Form Section (Reserve Your Experience) */}
        <BookingFormSection initialTierId={selectedTierId} />

        {/* 7. Hour-by-Hour Itinerary for Nov 24, 2026 */}
        <ItineraryTimeline />

        {/* 8. Visual Splendor Gallery & Lightbox */}
        <GallerySection />

        {/* 9. FAQs & Guidance */}
        <FaqSection onOpenConcierge={() => setConciergeOpen(true)} />
      </main>

      {/* Footer & Final WhatsApp Booking CTA */}
      <Footer
        onOpenBooking={() => scrollToBooking()}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      {/* Sticky Bottom Mobile WhatsApp CTA */}
      <StickyMobileWhatsAppCTA onBookClick={() => scrollToBooking()} />

      {/* Acharya Vidyadhar AI Spiritual Concierge Modal */}
      <AiConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
      />
    </div>
  );
}
