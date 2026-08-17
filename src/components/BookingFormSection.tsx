import React, { useState } from 'react';
import { MessageCircle, CheckCircle, ShieldCheck, Flame, Users, Calendar, User, Phone, Sparkles, ArrowRight, ArrowLeft, AlertCircle, RefreshCw } from 'lucide-react';

const OFFICIAL_WHATSAPP_NUMBER = '+91 8840177339';
const WHATSAPP_PHONE_RAW = '918840177339';
const PRICE_PER_PERSON = 15000;
const OFFICIAL_EVENT_DATE = '24 November 2026 (Kartik Purnima, Dev Deepawali)';

interface BookingFormSectionProps {
  initialPersons?: number;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({ initialPersons = 2 }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [age, setAge] = useState('');
  const [persons, setPersons] = useState(initialPersons);
  const [specialRequest, setSpecialRequest] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Flow State: 'form' | 'review' | 'submitted'
  const [flowStep, setFlowStep] = useState<'form' | 'review' | 'submitted'>('form');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const estimatedTotal = persons * PRICE_PER_PERSON;

  // Validation
  const validateForm = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    if (!cleanNumber || cleanNumber.length !== 10 || !/^[6-9]\d{9}$/.test(cleanNumber)) {
      errs.whatsappNumber = 'Please enter a valid 10-digit Indian WhatsApp mobile number.';
    }

    const numAge = parseInt(age, 10);
    if (!age.trim() || isNaN(numAge) || numAge < 1 || numAge > 120) {
      errs.age = 'Please enter a valid age.';
    }

    if (persons < 1) {
      errs.persons = 'Please select at least 1 person.';
    }

    if (!agreedToTerms) {
      errs.terms = 'Please accept the booking terms and conditions.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Generate WhatsApp Message URL
  const generateWhatsAppUrl = (): string => {
    const cleanPhone = whatsappNumber.replace(/\D/g, '');
    const message = `Namaste, I would like to book the Dev Deepawali Luxury Cruise.

Booking Details:

Name: ${fullName.trim()}
Contact Number: +91 ${cleanPhone}
Age: ${age.trim()}
Number of Persons: ${persons}
Booking Date: ${OFFICIAL_EVENT_DATE}
Estimated Total: ₹${estimatedTotal.toLocaleString('en-IN')}

Special Request:
${specialRequest.trim() || 'None'}

Please confirm my booking and share the next steps.

Thank you.`;

    return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(message)}`;
  };

  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFlowStep('review');
    }
  };

  const handleOpenWhatsApp = () => {
    const url = generateWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
    setFlowStep('submitted');
  };

  const handleResetForm = () => {
    setFlowStep('form');
    setFullName('');
    setWhatsappNumber('');
    setAge('');
    setPersons(2);
    setSpecialRequest('');
    setAgreedToTerms(false);
    setErrors({});
  };

  return (
    <section
      id="booking-form"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0d14] relative overflow-hidden border-t border-b border-[#d4af37]/30"
    >
      {/* Background Image: Night Ghats with Subtle Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1VJT4D_OZdQWRxa6Z3PvO7ekxcnXuMTsT_ZFlbZKaW7B5F9NdIsDfYSJOZNQJx-nIfXsRP6_pZmeNSnPkd6qW12-t0ozwKbYH0yk1hDHM7igNT-U3HVqI76tIZuqFbCBsR4SlEsBego2uiXcnW2EUzjeLONUYJk8y5hMMSQbf_bi_p3al48UqZJOgpVZYDOsdvDWO6oxQ41nhodJzAyB1UjGIBdUg-sU3er5FBpTNyzYXjxr-vZVulw')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14] via-[#0a0d14]/90 to-[#0a0d14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#121824]/90 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <Flame className="w-4 h-4 text-[#f2ca50] animate-pulse" />
            <span className="text-xs font-serif tracking-widest text-[#ffe088] uppercase">
              काशी देव दीपावली 2026 • आधिकारिक आरक्षण
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f2ca50] to-[#ffd700] uppercase tracking-wide drop-shadow-md">
            RESERVE YOUR EXPERIENCE
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#d0c5af]">
            Fill in your details and continue on WhatsApp to complete your booking.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-[#25D366] bg-[#121e1a] px-3.5 py-1.5 rounded-full border border-[#25D366]/30 font-medium">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Direct WhatsApp Booking: {OFFICIAL_WHATSAPP_NUMBER}</span>
          </div>
        </div>

        {/* STEP 1: Main Reservation Form */}
        {flowStep === 'form' && (
          <div className="bg-[#101522]/95 border border-[#d4af37]/50 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl relative">
            {/* Corner Diya Ornaments */}
            <div className="absolute top-4 left-4 text-[#f2ca50]/40 text-xs font-serif select-none pointer-events-none">
              🪔 ।। शुभम् भवतु ।।
            </div>
            <div className="absolute top-4 right-4 text-[#f2ca50]/40 text-xs font-serif select-none pointer-events-none">
              ।। हर हर महादेव ।। 🪔
            </div>

            <form onSubmit={handleProceedToReview} className="space-y-6 mt-2">
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#ffe088] mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#99907c] absolute left-4 top-3.5" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                      }}
                      placeholder="Enter your full name"
                      className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-[#080b12] border ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#384358]'
                      } text-white placeholder-[#717d96] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Contact WhatsApp Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#ffe088] mb-2">
                    Contact Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3.5 py-3 rounded-l-xl bg-[#172033] border-y border-l border-[#384358] text-xs sm:text-sm font-semibold text-[#ffe088]">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={whatsappNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setWhatsappNumber(val);
                        if (errors.whatsappNumber) setErrors((prev) => ({ ...prev, whatsappNumber: '' }));
                      }}
                      placeholder="Enter your WhatsApp number"
                      className={`flex-1 pl-3 pr-4 py-3 text-sm rounded-r-xl bg-[#080b12] border ${
                        errors.whatsappNumber ? 'border-red-500 ring-1 ring-red-500' : 'border-[#384358]'
                      } text-white placeholder-[#717d96] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all`}
                    />
                  </div>
                  {errors.whatsappNumber && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.whatsappNumber}
                    </p>
                  )}
                </div>

                {/* 3. Age */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#ffe088] mb-2">
                    Age <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={120}
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                      if (errors.age) setErrors((prev) => ({ ...prev, age: '' }));
                    }}
                    placeholder="Enter your age"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-[#080b12] border ${
                      errors.age ? 'border-red-500 ring-1 ring-red-500' : 'border-[#384358]'
                    } text-white placeholder-[#717d96] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all`}
                  />
                  {errors.age && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.age}
                    </p>
                  )}
                </div>

                {/* 4. Number of Persons (Quantity Selector) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#ffe088] mb-2">
                    NUMBER OF PERSONS <span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center justify-between px-4 py-2 bg-[#080b12] border border-[#384358] rounded-xl">
                    <span className="text-xs text-[#d0c5af] font-medium">
                      Guests (₹15,000 / person)
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setPersons((prev) => Math.max(1, prev - 1))}
                        disabled={persons <= 1}
                        className="w-8 h-8 rounded-lg bg-[#172033] border border-[#485672] text-[#ffe088] font-bold text-base flex items-center justify-center hover:bg-[#d4af37]/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      >
                        -
                      </button>
                      <span className="font-serif font-bold text-lg text-[#f2ca50] w-6 text-center">
                        {persons}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPersons((prev) => Math.min(25, prev + 1))}
                        className="w-8 h-8 rounded-lg bg-[#172033] border border-[#485672] text-[#ffe088] font-bold text-base flex items-center justify-center hover:bg-[#d4af37]/20 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {errors.persons && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.persons}
                    </p>
                  )}
                </div>
              </div>

              {/* 5. Booking Date (Automatic & Locked to Dev Deepawali Event) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#ffe088] mb-2">
                  BOOKING DATE
                </label>
                <div className="p-3.5 rounded-xl bg-[#080b12] border border-[#384358] flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-white">
                    <Calendar className="w-4 h-4 text-[#f2ca50]" />
                    <span className="font-serif font-semibold text-[#ffe088]">{OFFICIAL_EVENT_DATE}</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#d4af37]/20 text-[#f2ca50] border border-[#d4af37]/40 font-medium">
                    Official Event Date
                  </span>
                </div>
              </div>

              {/* 6. Special Request (Optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#ffe088] mb-2">
                  Special Request <span className="text-[#99907c] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="Any special request? (e.g. Family booking, Birthday, Special seating request, Elder assistance)"
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#080b12] border border-[#384358] text-white placeholder-[#717d96] focus:border-[#d4af37] outline-none resize-none transition-all"
                />
              </div>

              {/* 7. Live Price Calculator Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#141b2a] via-[#1a2236] to-[#141b2a] border-2 border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs uppercase tracking-widest text-[#ffe088] font-serif font-bold">
                    {persons} {persons === 1 ? 'PERSON' : 'PERSONS'} × ₹15,000
                  </div>
                  <div className="text-xs text-[#a5b4cb] mt-0.5">
                    Dev Deepawali 2026 Royal Ganges Cruise Experience
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <div className="text-[10px] uppercase tracking-widest text-[#d0c5af] font-semibold">
                    ESTIMATED TOTAL
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe088] via-[#f2ca50] to-[#ffd700] drop-shadow-md">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* 8. Terms Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      if (errors.terms) setErrors((prev) => ({ ...prev, terms: '' }));
                    }}
                    className="w-4 h-4 mt-0.5 rounded border-[#485672] text-[#f2ca50] focus:ring-[#f2ca50] focus:ring-offset-0 bg-[#080b12] cursor-pointer"
                  />
                  <span className="text-xs text-[#d0c5af] leading-relaxed">
                    I confirm that the information provided is correct and I agree to the booking terms and conditions.
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.terms}
                  </p>
                )}
              </div>

              {/* 9. Continue to Review Button */}
              <button
                type="submit"
                id="booking-form-submit-btn"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-base sm:text-lg tracking-wide shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_45px_rgba(37,211,102,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span>REVIEW & CONTINUE ON WHATSAPP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center text-[11px] text-[#8e9cb4] flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f2ca50]" />
                <span>No payment required now. Booking team confirms availability on WhatsApp.</span>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: Review Booking Details Before Opening WhatsApp */}
        {flowStep === 'review' && (
          <div className="bg-[#101522]/95 border-2 border-[#d4af37] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-in fade-in space-y-6">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50] flex items-center justify-center mx-auto text-[#f2ca50] mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#ffe088]">
                Review Your Booking Details
              </h3>
              <p className="text-xs text-[#d0c5af]">
                Please verify your details below. Clicking continue will open WhatsApp with your pre-filled reservation message.
              </p>
            </div>

            {/* Summary Details Table */}
            <div className="rounded-2xl bg-[#080b12] border border-[#384358] p-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-2 border-b border-[#252f44]">
                <span className="text-[#99907c] uppercase tracking-wider">Full Name</span>
                <span className="font-bold text-white text-base">{fullName}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#252f44]">
                <span className="text-[#99907c] uppercase tracking-wider">WhatsApp Number</span>
                <span className="font-bold text-[#25D366]">+91 {whatsappNumber}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#252f44]">
                <span className="text-[#99907c] uppercase tracking-wider">Age</span>
                <span className="font-bold text-white">{age} Years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#252f44]">
                <span className="text-[#99907c] uppercase tracking-wider">Number of Persons</span>
                <span className="font-bold text-[#ffe088] text-base">{persons} Guest{persons > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#252f44]">
                <span className="text-[#99907c] uppercase tracking-wider">Event Date</span>
                <span className="font-bold text-white">{OFFICIAL_EVENT_DATE}</span>
              </div>
              {specialRequest.trim() && (
                <div className="flex justify-between items-start py-2 border-b border-[#252f44]">
                  <span className="text-[#99907c] uppercase tracking-wider">Special Request</span>
                  <span className="font-medium text-[#d0c5af] max-w-[60%] text-right">{specialRequest}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#f2ca50]">ESTIMATED TOTAL</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#f2ca50]">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setFlowStep('form')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#172033] border border-[#384358] text-xs sm:text-sm text-[#d0c5af] hover:text-white flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Edit Details
              </button>

              <button
                type="button"
                id="confirm-and-open-whatsapp-btn"
                onClick={handleOpenWhatsApp}
                className="w-full flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#22c55e] hover:to-[#15803d] text-white font-serif font-bold text-base sm:text-lg tracking-wide shadow-[0_0_35px_rgba(37,211,102,0.5)] hover:shadow-[0_0_55px_rgba(37,211,102,0.7)] flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                <span>CONTINUE ON WHATSAPP</span>
              </button>
            </div>

            <p className="text-center text-[11px] text-[#99907c]">
              Official booking desk: {OFFICIAL_WHATSAPP_NUMBER}
            </p>
          </div>
        )}

        {/* STEP 3: Post-Click Confirmation Screen */}
        {flowStep === 'submitted' && (
          <div className="bg-[#101522]/95 border border-[#25D366]/50 rounded-3xl p-8 sm:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-in fade-in space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center mx-auto text-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.4)]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#f2ca50]">
                YOUR BOOKING DETAILS ARE READY
              </h3>
              <p className="text-xs sm:text-sm text-[#d0c5af] max-w-lg mx-auto leading-relaxed">
                Your booking information has been prepared for WhatsApp. Continue the conversation with our booking team to confirm your reservation.
              </p>
            </div>

            {/* Official Booking Desk Badge */}
            <div className="inline-flex flex-col items-center p-4 rounded-2xl bg-[#080b12] border border-[#384358] max-w-sm mx-auto w-full">
              <span className="text-[10px] text-[#99907c] uppercase tracking-widest font-semibold">Official WhatsApp Desk</span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#25D366] mt-0.5">
                {OFFICIAL_WHATSAPP_NUMBER}
              </span>
              <span className="text-[11px] text-[#d0c5af] mt-1">
                Estimated Total: <strong>₹{estimatedTotal.toLocaleString('en-IN')}</strong> ({persons} Person{persons > 1 ? 's' : ''})
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white font-serif font-bold text-base shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:shadow-[0_0_50px_rgba(37,211,102,0.8)] flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>OPEN WHATSAPP</span>
              </button>

              <button
                type="button"
                onClick={handleResetForm}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#172033] border border-[#384358] text-xs text-[#d0c5af] hover:text-white flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Submit Another Request</span>
              </button>
            </div>

            <p className="text-[11px] text-[#8e9cb4] italic">
              Note: Actual booking confirmation happens only after our booking team confirms seat availability on WhatsApp.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
