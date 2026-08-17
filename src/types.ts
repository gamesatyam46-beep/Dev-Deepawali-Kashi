export interface PackageTier {
  id: string;
  name: string;
  hindiTitle: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  currency: string;
  capacityLimit: number;
  deckLevel: string;
  badge?: string;
  popular?: boolean;
  image: string;
  inclusions: string[];
  exclusivePerks: string[];
}

export interface GhatInfo {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  story: string;
  historicalEra: string;
  primaryDeityOrTheme: string;
  diyaCountApprox: string;
  aartiTime: string;
  highlights: string[];
  image: string;
  coordinatesOrder: number;
}

export interface CuratedMoment {
  id: string;
  title: string;
  hindiTitle: string;
  shortDesc: string;
  fullDesc: string;
  timeSlot: string;
  image: string;
  iconName: string;
  badge: string;
}

export interface ItineraryStep {
  time: string;
  title: string;
  hindiTitle: string;
  location: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface AddonOption {
  id: string;
  name: string;
  hindiName: string;
  price: number;
  description: string;
  icon: string;
}

export interface BookingData {
  tierId: string;
  guestName: string;
  email: string;
  phone: string;
  city: string;
  slotTime: string;
  adults: number;
  children: number;
  elders: number;
  selectedAddons: string[];
  sankalpDedication?: string;
  dietaryPreference: string;
  specialRequests?: string;
}

export interface ConfirmedReservation extends BookingData {
  bookingRef: string;
  createdAt: string;
  status: string;
  totalAmount: number;
  qrPayload: string;
}

export interface DiyaOffering {
  id: string;
  name: string;
  location: string;
  sankalp: string;
  diyaType: 'earthen' | 'brass' | 'gold';
  flowerColor: 'marigold' | 'rose' | 'lotus' | 'jasmine';
  timestamp: string;
  x?: number;
  y?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'ghats' | 'aarti' | 'laser' | 'cruise';
  image: string;
  caption: string;
  location: string;
}

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
  category: 'Cruise & Boarding' | 'Rituals & Dev Deepawali' | 'Food & Hospitality' | 'Dress & Guidelines';
}
