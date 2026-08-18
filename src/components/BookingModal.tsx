import React, { useState, useEffect } from 'react';
import { PACKAGE_TIERS, ADDON_OPTIONS } from '../data/kashiData';
import { PackageTier, BookingData, ConfirmedReservation } from '../types';
import { X, Check, CheckCircle2, ShieldCheck, Sparkles, User, Mail, Phone, MapPin, Calendar, Clock, CreditCard, Download, Printer, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTierId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTierId = 'double-decker-boat',
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedTierId, setSelectedTierId] = useState<string>(initialTierId);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [elders, setElders] = useState<number>(0);
  const [slotTime, setSlotTime] = useState<string>('04:30 PM - Sunset & Aarti Special');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [guestName, setGuestName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [dietaryPreference, setDietaryPreference] = useState<string>('Sattvic Vegetarian (No Onion / Garlic)');
  const [sankalpDedication, setSankalpDedication] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedReservation | null>(null);

  useEffect(() => {
    if (initialTierId) {
      setSelectedTierId(initialTierId);
    }
  }, [initialTierId]);

  if (!isOpen) return null;

  const currentTier = PACKAGE_TIERS.find((t) => t.id === selectedTierId) || PACKAGE_TIERS[0];
  const totalGuests = adults + children + elders;

  // Calculate pricing
  const tierCost = currentTier.price * (adults + elders) + currentTier.price * 0.6 * children;
  const addonsCost = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);
  const totalAmount = tierCost + addonsCost;

  const handleToggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfirmReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingPayload: BookingData = {
      tierId: selectedTierId,
      guestName,
      email,
      phone,
      city,
      slotTime,
      adults,
      children,
      elders,
      selectedAddons,
      sankalpDedication,
      dietaryPreference,
      specialRequests,
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload),
      });
      const data = await res.json();
      if (data.booking) {
        setConfirmedBooking({
          ...data.booking,
          totalAmount,
        });
      } else {
        // Fallback offline mock
        setConfirmedBooking({
          ...bookingPayload,
          bookingRef: `KASHI-DD26-${Math.floor(100000 + Math.random() * 900000)}`,
          createdAt: new Date().toISOString(),
          status: 'Confirmed & VIP Pass Issued',
          totalAmount,
          qrPayload: `DEV-DEEPAWALI-2026|${guestName}|${currentTier.name}|${totalGuests} Guests`,
        });
      }

      setStep(4);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f2ca50', '#ff9933', '#ffd700', '#ffffff'],
      });
    } catch (err) {
      setConfirmedBooking({
        ...bookingPayload,
        bookingRef: `KASHI-DD26-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toISOString(),
        status: 'Confirmed & VIP Pass Issued',
        totalAmount,
        qrPayload: `DEV-DEEPAWALI-2026|${guestName}|${currentTier.name}|${totalGuests} Guests`,
      });
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrintPass = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-3xl my-8 bg-[#131313] border border-[#d4af37]/60 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.35)] overflow-hidden text-[#e5e2e1]">
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#1c1b1b] via-[#24211b] to-[#1c1b1b] border-b border-[#d4af37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50]/50 flex items-center justify-center font-serif text-[#f2ca50]">
              ॐ
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f2ca50]">
                Dev Deepawali 2026 • Royal Cruise Reservation
              </h3>
              <p className="text-xs text-[#d0c5af]">
                Kartik Purnima • 24 November 2026 • Ravidas Ghat VIP Jetty
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#0e0e0f] border border-[#353535] flex items-center justify-center text-[#99907c] hover:text-[#e5e2e1] hover:border-[#f2ca50]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator (Only if not confirmed) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-[#0e0e0f] border-b border-[#353535] flex items-center justify-between text-xs">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#f2ca50] font-bold' : 'text-[#99907c]'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">1</span>
              <span>Package & Guests</span>
            </div>
            <span className="text-[#353535]">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#f2ca50] font-bold' : 'text-[#99907c]'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">2</span>
              <span>Bespoke Add-ons</span>
            </div>
            <span className="text-[#353535]">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#f2ca50] font-bold' : 'text-[#99907c]'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>
              <span>Guest Details</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Package & Party Size */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#ffe088] mb-2">
                  Select Your Royal Package Tier:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PACKAGE_TIERS.map((tier) => {
                    const isSelected = tier.id === selectedTierId;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-4 rounded-xl border text-left transition-all relative ${
                          isSelected
                            ? 'border-[#f2ca50] bg-[#f2ca50]/15 shadow-[0_0_20px_rgba(242,202,80,0.25)]'
                            : 'border-[#353535] bg-[#1a1a1c] text-[#d0c5af] hover:border-[#d4af37]/50'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#f2ca50] text-[#241a00] flex items-center justify-center text-[10px] font-bold">
                            ✓
                          </div>
                        )}
                        <div className="font-serif font-bold text-sm text-[#ffe088]">{tier.name}</div>
                        <div className="text-xs text-[#99907c] mt-0.5">{tier.deckLevel.split('(')[0]}</div>
                        <div className="font-serif text-lg font-bold text-[#e5e2e1] mt-3">
                          ₹{tier.price.toLocaleString()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guest Counts */}
              <div className="p-4 rounded-xl bg-[#1c1b1b] border border-[#353535] space-y-4">
                <div className="font-serif text-sm font-bold text-[#ffe088] flex items-center justify-between">
                  <span>Number of Guests</span>
                  <span className="text-xs font-sans text-[#99907c]">Max 10 per single reservation</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  {/* Adults */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#121214] border border-[#353535]">
                    <div>
                      <div className="font-semibold text-[#e5e2e1]">Adults (12+ yrs)</div>
                      <div className="text-[10px] text-[#99907c]">Full fare (₹{currentTier.price.toLocaleString()})</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded bg-[#20201f] border border-[#4d4635] text-sm flex items-center justify-center hover:text-[#f2ca50]"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm text-[#f2ca50] w-4 text-center">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(Math.min(8, adults + 1))}
                        className="w-6 h-6 rounded bg-[#20201f] border border-[#4d4635] text-sm flex items-center justify-center hover:text-[#f2ca50]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Elders */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#121214] border border-[#353535]">
                    <div>
                      <div className="font-semibold text-[#e5e2e1]">Elders (60+ yrs)</div>
                      <div className="text-[10px] text-[#99907c]">Wheelchair assistance</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setElders(Math.max(0, elders - 1))}
                        className="w-6 h-6 rounded bg-[#20201f] border border-[#4d4635] text-sm flex items-center justify-center hover:text-[#f2ca50]"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm text-[#f2ca50] w-4 text-center">{elders}</span>
                      <button
                        type="button"
                        onClick={() => setElders(Math.min(6, elders + 1))}
                        className="w-6 h-6 rounded bg-[#20201f] border border-[#4d4635] text-sm flex items-center justify-center hover:text-[#f2ca50]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#121214] border border-[#353535]">
                    <div>
                      <div className="font-semibold text-[#e5e2e1]">Children (4-11 yrs)</div>
                      <div className="text-[10px] text-[#99907c]">40% Concession</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded bg-[#20201f] border border-[#4d4635] text-sm flex items-center justify-center hover:text-[#f2ca50]"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm text-[#f2ca50] w-4 text-center">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(Math.min(6, children + 1))}
                        className="w-6 h-6 rounded bg-[#20201f] border border-[#4d4635] text-sm flex items-center justify-center hover:text-[#f2ca50]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Summary Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#353535]">
                <div>
                  <div className="text-xs text-[#99907c]">Estimated Total ({totalGuests} Guests):</div>
                  <div className="font-serif text-2xl font-bold text-[#f2ca50]">
                    ₹{totalAmount.toLocaleString()}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <span>Continue to Add-ons</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Bespoke Add-ons & Departure Slot */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Departure Slot Selection */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#ffe088] mb-2">
                  Boarding Slot (Ravidas Ghat VIP Jetty):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { slot: '04:30 PM - Sunset & Aarti Special', desc: 'Recommended: Catch full golden hour & 108 diya lighting ritual' },
                    { slot: '05:45 PM - Prime Maha Aarti & Fireworks', desc: 'Direct prime anchor for 21-Priest Aarti & laser spectacle' },
                  ].map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSlotTime(s.slot)}
                      className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                        slotTime === s.slot
                          ? 'border-[#f2ca50] bg-[#f2ca50]/15 text-[#ffe088]'
                          : 'border-[#353535] bg-[#1a1a1c] text-[#d0c5af]'
                      }`}
                    >
                      <div className="font-bold text-sm text-[#e5e2e1]">{s.slot.split(' - ')[0]}</div>
                      <div className="text-[11px] text-[#f2ca50] font-medium">{s.slot.split(' - ')[1]}</div>
                      <div className="text-[10px] text-[#99907c] mt-1">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bespoke Add-ons */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#ffe088] mb-2">
                  Bespoke Ritual & Concierge Add-ons (Optional):
                </label>
                <div className="space-y-3">
                  {ADDON_OPTIONS.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => handleToggleAddon(addon.id)}
                        className={`p-4 rounded-xl border cursor-pointer flex items-start justify-between gap-4 transition-all ${
                          isChecked
                            ? 'border-[#f2ca50] bg-[#f2ca50]/15'
                            : 'border-[#353535] bg-[#1a1a1c] hover:border-[#d4af37]/40'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center text-xs transition-colors ${
                              isChecked
                                ? 'bg-[#f2ca50] border-[#f2ca50] text-[#241a00] font-bold'
                                : 'border-[#4d4635] bg-[#0e0e0f]'
                            }`}
                          >
                            {isChecked && '✓'}
                          </div>
                          <div>
                            <div className="font-serif font-bold text-sm text-[#ffe088]">{addon.name}</div>
                            <div className="text-[11px] text-[#f2ca50] font-serif">{addon.hindiName}</div>
                            <p className="text-xs text-[#d0c5af] mt-1">{addon.description}</p>
                          </div>
                        </div>
                        <div className="font-serif font-bold text-sm text-[#e5e2e1] shrink-0">
                          +₹{addon.price.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#353535]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full border border-[#353535] text-xs text-[#d0c5af] hover:text-[#e5e2e1] flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <div className="text-right">
                  <div className="text-xs text-[#99907c]">Total: <strong className="text-[#f2ca50] font-serif text-lg">₹{totalAmount.toLocaleString()}</strong></div>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="mt-1 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-bold text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <span>Proceed to Guest Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Guest Details & Spiritual Dedication */}
          {step === 3 && (
            <form onSubmit={handleConfirmReservation} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#d0c5af] mb-1">
                    Primary Devotee / Guest Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#99907c] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Satyam Prajapati"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0e0e0f] border border-[#4d4635] text-[#e5e2e1] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#d0c5af] mb-1">
                    Email for VIP e-Pass *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#99907c] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="satyamprajapati4736@gmail.com"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0e0e0f] border border-[#4d4635] text-[#e5e2e1] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#d0c5af] mb-1">
                    WhatsApp Phone Number (For Jetty Dispatch) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#99907c] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0e0e0f] border border-[#4d4635] text-[#e5e2e1] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#d0c5af] mb-1">
                    City of Residence
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#99907c] absolute left-3 top-3" />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Mumbai, New Delhi, London"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0e0e0f] border border-[#4d4635] text-[#e5e2e1] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Gotra / Sankalp Dedication */}
              <div>
                <label className="block text-xs font-medium text-[#d0c5af] mb-1">
                  Family Gotra & Spiritual Dedication (For Onboard Sankalp)
                </label>
                <input
                  type="text"
                  value={sankalpDedication}
                  onChange={(e) => setSankalpDedication(e.target.value)}
                  placeholder="e.g. Kashyap Gotra • Prayers for family prosperity and health"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0e0e0f] border border-[#4d4635] text-[#e5e2e1] focus:border-[#d4af37] outline-none"
                />
              </div>

              {/* Dietary Preferences */}
              <div>
                <label className="block text-xs font-medium text-[#d0c5af] mb-1">
                  Culinary Preference
                </label>
                <select
                  value={dietaryPreference}
                  onChange={(e) => setDietaryPreference(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0e0e0f] border border-[#4d4635] text-[#e5e2e1] focus:border-[#d4af37] outline-none"
                >
                  <option value="Sattvic Vegetarian (No Onion / Garlic)">Strict Sattvic Vegetarian (Pure Ghee, No Onion/Garlic)</option>
                  <option value="Jain Pure Vegetarian">Jain Pure Vegetarian</option>
                  <option value="Vegan Sattvic">Vegan Sattvic</option>
                  <option value="Gluten-Free Vegetarian">Gluten-Free Vegetarian</option>
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-medium text-[#d0c5af] mb-1">
                  Special Notes (Wheelchair assistance, Anniversary, Senior seating)
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Tell us if you have any accessibility needs or special family celebrations..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0e0e0f] border border-[#4d4635] text-[#e5e2e1] focus:border-[#d4af37] outline-none resize-none"
                />
              </div>

              {/* Total & Submit */}
              <div className="p-4 rounded-xl bg-[#1c1b1b] border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <div className="text-xs text-[#99907c]">Total Payable Amount:</div>
                  <div className="font-serif text-2xl font-bold text-[#f2ca50]">
                    ₹{totalAmount.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Includes 18% GST & VIP Police Clearances
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded-full border border-[#353535] text-xs text-[#d0c5af]"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-8 py-3 rounded-full bg-gradient-to-r from-[#f2ca50] via-[#e9c349] to-[#d4af37] text-[#241a00] font-serif font-bold text-sm shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Confirming...' : 'Generate VIP Boarding Pass'}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmed Digital Luxury Boarding Pass */}
          {step === 4 && confirmedBooking && (
            <div className="space-y-6 animate-in fade-in">
              <div className="text-center space-y-1">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#ffe088]">
                  Jai Shri Kashi Vishwanath!
                </h4>
                <p className="text-xs text-[#d0c5af]">
                  Your VIP Passage for Dev Deepawali 2026 has been successfully confirmed.
                </p>
              </div>

              {/* The Official Luxury Boarding Pass */}
              <div
                id="printable-boarding-pass"
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1e1c17] via-[#161512] to-[#0f0e0c] border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.4)] relative overflow-hidden"
              >
                {/* Gold Watermark Ornament */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 font-serif text-9xl text-[#f2ca50]/5 pointer-events-none select-none">
                  ॐ
                </div>

                {/* Pass Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/40">
                  <div>
                    <div className="font-serif text-xs text-[#ffe088] uppercase tracking-widest">
                      काशी देव दीपावली महामहोत्सव 2026
                    </div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-[#f2ca50]">
                      VIP ROYAL CRUISE BOARDING PASS
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-[#99907c] uppercase">Booking Ref</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-[#ffe088]">
                      {confirmedBooking.bookingRef}
                    </div>
                  </div>
                </div>

                {/* Pass Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-b border-[#353535] text-xs">
                  <div>
                    <div className="text-[10px] uppercase text-[#99907c]">Lead Devotee</div>
                    <div className="font-bold text-[#e5e2e1] text-sm">{confirmedBooking.guestName}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#99907c]">Package Tier</div>
                    <div className="font-bold text-[#f2ca50]">{currentTier.name}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#99907c]">Total Devotees</div>
                    <div className="font-bold text-[#e5e2e1]">{totalGuests} Guests ({adults}A, {elders}E, {children}C)</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#99907c]">Date & Departure</div>
                    <div className="font-bold text-[#ffe088]">24 Nov 2026 • 04:30 PM</div>
                  </div>
                </div>

                {/* Location & QR Code Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <div className="space-y-1 text-xs text-[#d0c5af]">
                    <div><strong>VIP Jetty:</strong> Ravidas Ghat (Assi Confluence), Varanasi</div>
                    <div><strong>Deck Access:</strong> {currentTier.deckLevel}</div>
                    <div><strong>Special Inclusions:</strong> Front-Row Mooring, 108 Diyas, Sattvic 5-Course Dinner</div>
                    {confirmedBooking.sankalpDedication && (
                      <div className="text-[11px] text-[#f2ca50] italic">
                        <strong>Sankalp:</strong> {confirmedBooking.sankalpDedication}
                      </div>
                    )}
                  </div>

                  {/* QR Box */}
                  <div className="p-3 bg-white rounded-xl text-black flex flex-col items-center shrink-0 shadow-lg">
                    <div className="w-20 h-20 bg-black/10 rounded flex items-center justify-center font-mono text-[10px] font-bold text-center p-1">
                      [KASHI-VIP-QR]
                      <br />
                      {confirmedBooking.bookingRef}
                    </div>
                    <span className="text-[9px] font-mono mt-1 font-semibold">SCAN AT JETTY</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={handlePrintPass}
                  className="px-6 py-2.5 rounded-full bg-[#1c1b1b] border border-[#d4af37] text-[#f2ca50] hover:bg-[#d4af37]/20 font-semibold text-xs flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" /> Print / Save VIP Pass
                </button>
                <button
                  onClick={onClose}
                  className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-bold text-xs shadow-md"
                >
                  Close & View Experience
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
