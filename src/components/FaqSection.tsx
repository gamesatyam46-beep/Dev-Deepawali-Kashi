import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/kashiData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Phone } from 'lucide-react';

interface FaqSectionProps {
  onOpenConcierge: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConcierge }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cruise & Boarding', 'Rituals & Dev Deepawali', 'Food & Hospitality', 'Dress & Guidelines'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0e17] relative border-t border-[#d4af37]/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#101624]/80 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              जिज्ञासा समाधान • Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2ca50]">
            Everything You Need to Know
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d0c5af]">
            Essential guidelines for boarding, rituals, dining, and traveling seamlessly in Varanasi during the Dev Deepawali festival.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#8e9cb4] absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. boarding, dress code, food)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#101624] border border-[#d4af37]/30 text-xs sm:text-sm text-[#e5e2e1] focus:border-[#f2ca50] outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#f2ca50] text-[#241a00] font-bold'
                    : 'bg-[#101624] border border-[#d4af37]/25 text-[#d0c5af] hover:text-[#f2ca50]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#101624]/90 border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#e5e2e1] hover:text-[#ffe088]">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#070a10] flex items-center justify-center text-[#f2ca50] shrink-0 border border-[#d4af37]/30">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#d0c5af] leading-relaxed border-t border-[#1e2535] pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#101624] via-[#141b2c] to-[#101624] border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#ffe088]">
              Have a Specific or Custom Query?
            </h4>
            <p className="text-xs sm:text-sm text-[#d0c5af] mt-1">
              Our 24/7 Kashi Royal Hospitality desk is here to assist with special elder arrangements, private boat charters, or VIP darshan.
            </p>
          </div>
          <button
            onClick={onOpenConcierge}
            className="px-6 py-3 rounded-full bg-[#f2ca50] text-[#241a00] font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Spiritual Concierge</span>
          </button>
        </div>
      </div>
    </section>
  );
};
