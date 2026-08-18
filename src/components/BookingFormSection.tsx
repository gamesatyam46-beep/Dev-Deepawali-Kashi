import React, { useState, useEffect } from 'react';
import { MessageCircle, ShieldCheck, User, Phone, Sparkles, ArrowRight, Minus, Plus, CheckCircle2, Star, Clock } from 'lucide-react';
import { PACKAGE_TIERS } from '../data/kashiData';

const OFFICIAL_WHATSAPP_NUMBER = '+91 8840177339';
const WHATSAPP_PHONE_RAW = '918840177339';

interface BookingFormSectionProps {
  initialPersons?: number;
  initialTierId?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialPersons = 2,
  initialTierId = 'double-decker-boat'
}) => {
  // Tier selection state
  const [selectedTierId, setSelectedTierId] = useState<string>(initialTierId);

  // Form State (NO EMAIL per strict prompt requirements)
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [age, setAge] = useState('');
  const [persons, setPersons] = useState<number>(initialPersons);
  const [specialRequest, setSpecialRequest] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialTierId) {
      setSelectedTierId(initialTierId);
    }
  }, [initialTierId]);

  const selectedTier = PACKAGE_TIERS.find((t) => t.id === selectedTierId) || PACKAGE_TIERS[1];
  const pricePerPerson = selectedTier.price;
  const totalBookingValue = persons * pricePerPerson;
  const advanceRequired = totalBookingValue * 0.5;
  const remainingBalance = totalBookingValue - advanceRequired;

  // Validation
  const validateForm = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    if (!cleanNumber || cleanNumber.length < 10) {
      errs.whatsappNumber = 'Please enter a valid 10-digit WhatsApp contact number.';
    }

    const numAge = parseInt(age, 10);
    if (!age.trim() || isNaN(numAge) || numAge < 1 || numAge > 120) {
      errs.age = 'Please enter a valid age.';
    }

    if (persons < 1) {
      errs.persons = 'Please select at least 1 person.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Format INR currency
  const formatCurrency = (val: number) => {
    return val.toLocaleString('en-IN', {
      minimumFractionDigits: val % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    });
  };

  // Exact WhatsApp Booking Message from Master Prompt Spec
  const generateWhatsAppUrl = (): string => {
    const cleanPhone = whatsappNumber.replace(/\D/g, '');
    const message = `Namaste, I want to book Dev Deepawali 2026.

Booking Details:

Name: ${fullName.trim()}
Contact Number: ${cleanPhone}
Age: ${age.trim()}
Selected Ride: ${selectedTier.name}
Number of Persons: ${persons}

Price Per Person/Unit: ₹${formatCurrency(pricePerPerson)}

Total Booking Value: ₹${formatCurrency(totalBookingValue)}

50% Advance Required: ₹${formatCurrency(advanceRequired)}

Special Request:
${specialRequest.trim() || 'None'}

Please confirm availability and share the payment instructions.

Thank you.`;

    return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(message)}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const url = generateWhatsAppUrl();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="booking-form"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d14] relative overflow-hidden border-t border-b border-[#d4af37]/30"
    >
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#f2ca50]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#25D366]/50 bg-[#101624]/90 backdrop-blur-md">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs font-serif tracking-widest text-[#25D366] uppercase font-bold">
              आधिकारिक व्हाट्सएप बुकिंग • WhatsApp Booking Portal
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f2ca50] to-[#ffd700]">
            BOOK YOUR DEV DEEPAWALI EXPERIENCE
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d0c5af]">
            Select your preferred ride, calculate your booking value with 50% advance, and continue directly to WhatsApp (+91 8840177339) for availability confirmation.
          </p>
        </div>

        {/* Main Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#0d121d] rounded-3xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl space-y-6">
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {/* SELECT YOUR RIDE CARDS */}
              <div className="space-y-2">
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#ffe088]">
                  SELECT YOUR RIDE <span className="text-[#ff4d4d]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PACKAGE_TIERS.map((tier) => {
                    const isSelected = tier.id === selectedTierId;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#182338] border-2 border-[#f2ca50] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'bg-[#080c14] border-[#222c3f] hover:border-[#d4af37]/50 text-[#a5b4cb]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-serif font-bold text-white">
                              {tier.name}
                            </span>
                            {tier.id === 'luxury-cruise' && (
                              <Star className="w-3 h-3 text-[#f2ca50] fill-[#f2ca50]" />
                            )}
                          </div>
                          <div className="text-[10px] text-[#ffe088] font-serif mt-0.5">
                            {tier.hindiTitle}
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#1e293b]">
                          <span className="font-serif font-bold text-sm text-[#f2ca50]">
                            ₹{tier.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FULL NAME */}
              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-[#e5e2e1]">
                  FULL NAME <span className="text-[#ff4d4d]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8e9cb4] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#080c14] border ${
                      errors.fullName ? 'border-[#ff4d4d]' : 'border-[#2d384e]'
                    } text-sm text-white focus:border-[#f2ca50] outline-none transition-colors`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-[#ff4d4d]">{errors.fullName}</p>
                )}
              </div>

              {/* WHATSAPP CONTACT NUMBER & AGE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-serif font-semibold text-[#e5e2e1]">
                    WHATSAPP / CONTACT NUMBER <span className="text-[#ff4d4d]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8e9cb4] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g. 9876543210"
                      maxLength={14}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#080c14] border ${
                        errors.whatsappNumber ? 'border-[#ff4d4d]' : 'border-[#2d384e]'
                      } text-sm text-white focus:border-[#f2ca50] outline-none transition-colors`}
                    />
                  </div>
                  {errors.whatsappNumber && (
                    <p className="text-[11px] text-[#ff4d4d]">{errors.whatsappNumber}</p>
                  )}
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-serif font-semibold text-[#e5e2e1]">
                    AGE <span className="text-[#ff4d4d]">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age (e.g. 35)"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080c14] border ${
                      errors.age ? 'border-[#ff4d4d]' : 'border-[#2d384e]'
                    } text-sm text-white focus:border-[#f2ca50] outline-none transition-colors`}
                  />
                  {errors.age && (
                    <p className="text-[11px] text-[#ff4d4d]">{errors.age}</p>
                  )}
                </div>
              </div>

              {/* NUMBER OF PERSONS WITH PLUS / MINUS CONTROLS */}
              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-[#e5e2e1]">
                  NUMBER OF PERSONS <span className="text-[#ff4d4d]">*</span>
                </label>
                <div className="flex items-center justify-between p-2 rounded-xl bg-[#080c14] border border-[#2d384e]">
                  <span className="text-xs text-[#a5b4cb] pl-3">
                    Select Total Guests:
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setPersons(Math.max(1, persons - 1))}
                      className="w-9 h-9 rounded-lg bg-[#141b29] hover:bg-[#1f2a3f] border border-[#2d384e] text-white flex items-center justify-center font-bold transition-colors active:scale-95"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-serif font-bold text-lg text-[#f2ca50] min-w-[28px] text-center">
                      {persons}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPersons(persons + 1)}
                      className="w-9 h-9 rounded-lg bg-[#141b29] hover:bg-[#1f2a3f] border border-[#2d384e] text-white flex items-center justify-center font-bold transition-colors active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* SPECIAL REQUEST */}
              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-[#e5e2e1]">
                  SPECIAL REQUEST <span className="text-xs text-[#8e9cb4] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="Any senior citizen seating preference, gotra dedication, or arrival assistance notes..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080c14] border border-[#2d384e] text-xs sm:text-sm text-white focus:border-[#f2ca50] outline-none transition-colors resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                id="submit-booking-whatsapp-btn"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_45px_rgba(37,211,102,0.7)] transition-all flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>CONTINUE ON WHATSAPP (+91 8840177339)</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </button>
            </form>
          </div>

          {/* Dynamic Calculator & Booking Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dynamic Calculation Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#0d121d] border-2 border-[#d4af37]/60 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-[#222c3f] pb-4">
                <span className="text-xs font-serif uppercase tracking-widest text-[#ffe088] font-bold">
                  DYNAMIC BOOKING CALCULATOR
                </span>
                <span className="text-[10px] bg-[#141b29] px-2.5 py-1 rounded-full text-[#f2ca50] font-mono border border-[#d4af37]/30">
                  Live Pricing
                </span>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-[#a5b4cb]">
                  <span>Selected Ride:</span>
                  <span className="font-serif font-bold text-white text-right">
                    {selectedTier.name}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[#a5b4cb]">
                  <span>Price Per Person:</span>
                  <span className="font-mono font-semibold text-white">
                    ₹{formatCurrency(pricePerPerson)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[#a5b4cb]">
                  <span>Number of Persons:</span>
                  <span className="font-mono font-semibold text-[#f2ca50]">
                    {persons} {persons === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>

                {/* Total Booking Value */}
                <div className="flex justify-between items-center pt-3 border-t border-[#1e293b] text-base">
                  <span className="font-serif font-bold text-white">
                    Total Booking Value:
                  </span>
                  <span className="font-serif font-bold text-xl text-[#f2ca50]">
                    ₹{formatCurrency(totalBookingValue)}
                  </span>
                </div>

                {/* 50% Advance */}
                <div className="p-3.5 rounded-xl bg-[#141e2e] border border-[#25D366]/40 space-y-1">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#25D366]">
                    <span>50% Advance Required:</span>
                    <span className="text-base sm:text-lg">
                      ₹{formatCurrency(advanceRequired)}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#a5b4cb]">
                    Pay 50% advance to hold seats; balance of ₹{formatCurrency(remainingBalance)} due on boarding day.
                  </div>
                </div>
              </div>

              {/* 5 Inclusions Checklist */}
              <div className="pt-2 space-y-2 border-t border-[#222c3f]">
                <div className="text-[11px] uppercase tracking-wider text-[#ffe088] font-semibold">
                  Included with this booking:
                </div>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-[#d0c5af]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>🏮 One Sky Lantern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>🪔 Flower Diya for Ganga Ji</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>💧 1 Bottle Mineral Water</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>🎟️ Welcome Entry with Tilak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>🏆 One Keepsake Memento</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment & Confirmation Flow Transparency Box */}
            <div className="p-5 rounded-2xl bg-[#080c14] border border-[#2d384e] space-y-3 text-xs text-[#a5b4cb]">
              <div className="font-serif font-bold text-[#ffe088] flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#f2ca50]" /> 4-Step Transparent Booking Flow:
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex items-center gap-2 text-[#ffffff]">
                  <span className="w-5 h-5 rounded-full bg-[#172033] flex items-center justify-center text-[10px] font-bold text-[#f2ca50]">1</span>
                  <span><strong>Choose Package:</strong> Select vessel and guest count</span>
                </div>
                <div className="flex items-center gap-2 text-[#ffffff]">
                  <span className="w-5 h-5 rounded-full bg-[#172033] flex items-center justify-center text-[10px] font-bold text-[#f2ca50]">2</span>
                  <span><strong>Continue on WhatsApp:</strong> Message sent to +91 8840177339</span>
                </div>
                <div className="flex items-center gap-2 text-[#ffffff]">
                  <span className="w-5 h-5 rounded-full bg-[#172033] flex items-center justify-center text-[10px] font-bold text-[#f2ca50]">3</span>
                  <span><strong>Availability Check:</strong> Booking team confirms slot</span>
                </div>
                <div className="flex items-center gap-2 text-[#ffffff]">
                  <span className="w-5 h-5 rounded-full bg-[#172033] flex items-center justify-center text-[10px] font-bold text-[#f2ca50]">4</span>
                  <span><strong>50% Advance Payment:</strong> Official receipt & pass issued</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1e2535] text-[10px] text-[#d0c5af] leading-relaxed italic">
                *Your booking is confirmed only after availability is confirmed by the booking team and the required 50% advance payment is received.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
