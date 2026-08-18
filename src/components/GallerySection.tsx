import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/kashiData';
import { GalleryItem } from '../types';
import { Camera, X, Maximize2, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ghats' | 'aarti' | 'laser' | 'cruise'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#070a10] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
            <Camera className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              दृश्यावली • Visual Splendor
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#f2ca50]">
            The City of Light in Photos
          </h2>

          <p className="font-sans text-xs sm:text-base text-[#d0c5af] leading-relaxed">
            Glimpses of the celestial grandeur that awaits you on the sacred night of Dev Deepawali.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {[
              { id: 'all', label: 'All Perspectives' },
              { id: 'ghats', label: '84 Ghats of Gold' },
              { id: 'aarti', label: 'Maha Ganga Aarti' },
              { id: 'laser', label: 'Laser & Sky Show' },
              { id: 'cruise', label: 'Royal Cruise' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#f2ca50] text-[#241a00] font-semibold shadow-[0_0_15px_rgba(242,202,80,0.5)]'
                    : 'bg-[#101624] border border-[#d4af37]/30 text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#d4af37]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid: Single column vertical stack on mobile (<768px), 2-col on tablet, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative min-h-[280px] sm:h-80 rounded-2xl overflow-hidden border border-[#d4af37]/30 hover:border-[#d4af37] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:-translate-y-1 bg-[#0d121d] flex flex-col justify-end"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-115 contrast-110 saturate-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-[#070a10]/35 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-[#d4af37]/40 flex items-center justify-center text-[#ffe088] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="relative p-5 space-y-1 z-10">
                <div className="flex items-center gap-1.5 text-[11px] text-[#f2ca50]">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#e5e2e1] group-hover:text-[#ffe088] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-4xl w-full bg-[#0d121d] border border-[#d4af37]/60 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.4)] max-h-[90vh] overflow-y-auto">
              <div className="relative max-h-[60vh] sm:max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain max-h-[60vh] sm:max-h-[70vh] mx-auto"
                />
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 border border-[#d4af37]/40 flex items-center justify-center text-[#e5e2e1] hover:text-[#f2ca50] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 sm:p-6 bg-[#0d121d] border-t border-[#1e2535] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#f2ca50] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lightboxItem.location}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#ffe088]">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-xs text-[#d0c5af] mt-1">{lightboxItem.caption}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
