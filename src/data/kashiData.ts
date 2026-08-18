import { PackageTier, GhatInfo, CuratedMoment, ItineraryStep, AddonOption, GalleryItem, FaqItem } from '../types';
import assiGhatImg from '../assets/images/assi_ghat_dev_deepawali_1787045955960.jpg';
import namoGhatImg from '../assets/images/namo_ghat_dev_deepawali_1787046139285.jpg';
import chhotiBoatImg from '../assets/images/chhoti_motor_boat_ganga_1787046797124.jpg';
import doubleDeckerBoatImg from '../assets/images/double_decker_boat_ganga_1787046812140.jpg';
import luxuryCruiseImg from '../assets/images/luxury_cruise_ganga_1787046825960.jpg';

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'chhoti-motor-boat',
    name: 'Chhoti Motor Boat',
    hindiTitle: 'छोटी मोटर बोट',
    subtitle: 'Traditional motorized wooden boat offering an authentic, close-to-water sacred Ganga sailing experience.',
    price: 4999,
    originalPrice: 6500,
    currency: '₹',
    capacityLimit: 30,
    deckLevel: 'Single Deck Traditional Motor Boat',
    badge: 'Popular Budget',
    popular: false,
    image: chhotiBoatImg,
    inclusions: [
      'Welcome Entry (शाही स्वागत)',
      '1 Bottle Packaged Mineral Water per person (1 बोतल मिनरल वाटर)',
      'Sacred Flower Diya for Ganga Arpan (पुष्प दीप गंगा अर्पण)',
      'Glowing Sky Lantern to release (स्काई लैंटर्न / आकाश दीप)',
      'Sacred Memento Souvenir at farewell (पावन स्मृति चिन्ह / मोमेंटो)',
      'Complete crescent tour of all 84 illuminated Ghats & Maha Aarti view'
    ],
    exclusivePerks: [
      'Authentic close-to-water river experience',
      'Front-facing view of illuminated ghats'
    ]
  },
  {
    id: 'double-decker-boat',
    name: 'Double Decker Boat',
    hindiTitle: 'डबल डेकर बोट',
    subtitle: 'Spacious 2-tier river vessel with elevated upper deck offering panoramic views of the Maha Aarti & ghats.',
    price: 7999,
    originalPrice: 10500,
    currency: '₹',
    capacityLimit: 60,
    deckLevel: 'Dual Tier (Upper Open Deck + Lower Seating)',
    badge: 'Most Popular',
    popular: true,
    image: doubleDeckerBoatImg,
    inclusions: [
      'Welcome Entry (शाही स्वागत)',
      '1 Bottle Packaged Mineral Water per person (1 बोतल मिनरल वाटर)',
      'Sacred Flower Diya for Ganga Arpan (पुष्प दीप गंगा अर्पण)',
      'Glowing Sky Lantern to release (स्काई लैंटर्न / आकाश दीप)',
      'Sacred Memento Souvenir at farewell (पावन स्मृति चिन्ह / मोमेंटो)',
      'Elevated Upper Deck view for unobstructed photography of 84 Ghats',
      'Prime stationary mooring for Dashashwamedh 21-Priest Maha Aarti'
    ],
    exclusivePerks: [
      'Elevated panoramic vantage point',
      'Ample space for moving & photography'
    ]
  },
  {
    id: 'luxury-cruise',
    name: 'Luxury Cruise',
    hindiTitle: 'शाही लक्ज़री क्रूज़',
    subtitle: 'The flagship luxury cruise vessel with expansive 360° open-sky observation deck and VIP front-row mooring.',
    price: 14999,
    originalPrice: 19999,
    currency: '₹',
    capacityLimit: 120,
    deckLevel: '360° Open Sky Royal Observation Deck',
    badge: 'Ultra Luxury Flagship',
    popular: false,
    image: luxuryCruiseImg,
    inclusions: [
      'VIP Welcome Entry (शाही भव्य स्वागत)',
      '1 Bottle Packaged Mineral Water per person (1 बोतल मिनरल वाटर)',
      'Sacred Flower Diya for Ganga Arpan (पुष्प दीप गंगा अर्पण)',
      'Glowing Sky Lantern to release (स्काई लैंटर्न / आकाश दीप)',
      'Sacred Memento Souvenir at farewell (पावन स्मृति चिन्ह / मोमेंटो)',
      '360° Open-Air Royal Observation Deck with luxury seating',
      'VIP Front-Row Stationary Mooring directly at Dashashwamedh Aarti',
      'Live narration & Vedic chanting on board'
    ],
    exclusivePerks: [
      'VIP Boarding lane at Ravidas Ghat',
      'Maximum stability & ultra-smooth sailing'
    ]
  }
];

export const GHATS_DATA: GhatInfo[] = [
  {
    id: 'assi-ghat',
    name: 'Assi Ghat',
    hindiName: 'अस्सी घाट',
    tagline: 'The Sacred Confluence & Awakening of the River',
    story: 'Where the Assi river merges with the divine Ganges. Pilgrims start their sacred Panchatirthi yatra here. On Dev Deepawali, over 100,000 diyas form glowing mandalas across its expansive stone steps.',
    historicalEra: 'Ancient / Puranic Era (Mentioned in Kashi Khanda)',
    primaryDeityOrTheme: 'Lord Asisangameshwar & Morning Subah-e-Banaras',
    diyaCountApprox: '1,25,000+ Diyas',
    aartiTime: '5:45 PM',
    highlights: ['Vedic Hawan & Chanting', 'Deepdaan by 500+ local students', 'Classical Raga Yaman on Sitar'],
    image: assiGhatImg,
    coordinatesOrder: 1
  },
  {
    id: 'chet-singh-ghat',
    name: 'Chet Singh Ghat & Fort',
    hindiName: 'चेत सिंह घाट',
    tagline: 'The Fortress of Valor & 3D Light Symphony',
    story: 'A massive 18th-century fortress built by Maharaja Chet Singh. On Dev Deepawali night, the imposing stone turrets and battlements become the screen for a majestic 3D Laser & Sound show depicting Shiva’s victory over Tripurasura.',
    historicalEra: 'Mid 18th Century (Maharaja Chet Singh)',
    primaryDeityOrTheme: 'Historical Fortress & Laser Projection',
    diyaCountApprox: '75,000+ Diyas',
    aartiTime: '8:00 PM (Laser & Sound Show)',
    highlights: ['Multi-color architectural laser projections', 'Dramatic soundscapes reverberating over water', 'Illuminated stone fortress walls'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGaxTEZCQBx5bTVU5nwZuLlUtQfeV630VQSNQBoyMjYHCK4DivduCwagcqMBZ23HcsPsTPh5Yskpe7lNHyq7PtdPm49fYdMsWqrkg92r2L4ZA6KkasCQYOusIeFi1SAuV_PsZk6Nvxt5R4jSpSTcrmgNsAPbwumAs54xOtiuG79RfUKCxCz0_FRH9MxHuOSUDaG-8JAQG_ZMB-ktNJgk-LGMHp4fQH0BtknTNcexHHrgCmeaojfoJIA',
    coordinatesOrder: 2
  },
  {
    id: 'dashashwamedh-ghat',
    name: 'Dashashwamedh Ghat',
    hindiName: 'दशाश्वमेध घाट',
    tagline: 'The Epicenter of Dev Deepawali & 21-Priest Maha Aarti',
    story: 'The most sacred and vibrant ghat in Varanasi, where Lord Brahma performed the ten-horse sacrifice (Dasa Ashwamedha). On this night, 21 young Vedic priests in saffron robes perform the grandest Maha Aarti in the world with multi-tiered flaming brass lamps.',
    historicalEra: 'Puranic & 1748 AD (Rebuilt by Ahilyabai Holkar)',
    primaryDeityOrTheme: 'Grand Maha Ganga Aarti & Brahma Yajna',
    diyaCountApprox: '3,00,000+ Diyas',
    aartiTime: '7:00 PM (Grand Maha Aarti)',
    highlights: ['21 Flaming Brass Towers (Deepams)', 'Resonant Conch Shells & Vedic Mantras', 'Front-row stationary cruise anchoring'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb3qMwVJzY8306sfLipjtY6KMv85W9OkszJ7lkRWqi2Tpx6RezTJ-wyuOvXTuMJxRoWpINLI9MBpzd_q1zsuQo_G7Hnq4CAGiLdmYov8uy4h3BNwPEs9RWOeP7bfno9Om7qqij3O44kCKmTSBxMrylIJtDu6nBox5s8lMfdq8HW072sfkGYpr_q6CtPg9GzSnNg1_HcNELjpR8OZOn29VxVKG_2V_ZtZtnzl0NSCj-aaE-YCDQMkPsg',
    coordinatesOrder: 3
  },
  {
    id: 'manikarnika-ghat',
    name: 'Manikarnika Ghat',
    hindiName: 'मणिकर्णिका घाट',
    tagline: 'The Eternal Flame & The Gate to Moksha',
    story: 'The Great Cremation Ghat where the sacred fire has burned uninterrupted for over 3,000 years. On Dev Deepawali, thousands of lamps are offered here in remembrance of departed souls and brave martyrs of the armed forces.',
    historicalEra: 'Eternal / Sanatan Antiquity',
    primaryDeityOrTheme: 'Moksha Dayini Ganga & Taraka Mantra',
    diyaCountApprox: '1,50,000+ Diyas',
    aartiTime: 'Continuous Sacred Fire',
    highlights: ['Deepdaan for Martyrs (Amar Jawan tribute)', 'Ancient Shiva Temples half-submerged', 'Solemn spiritual reflection'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsDsdWm0kzPy5qNpqQ8d7fL-REfua1hvEqKmG5mu9hxb9Exg69DpsnwWch5AHpigaxPrGcQdrOOWQbUfHTQMavztEJKdwpPv91McAlGj1viz1PRdIqgVKHG1HsFRffNJUsPgoL-m75bLBwl740kdVMttPaxP9yivdQ8ZvOTuZW5nVnQqdAI9vtmOQT1EMyF1xVLaXMkhIbyo2Ze91UJ6VRBHwEy0kuh-yd3mrBSpnV0nF1MtwXGJGIxg',
    coordinatesOrder: 4
  },
  {
    id: 'panchganga-ghat',
    name: 'Panchganga Ghat',
    hindiName: 'पंचगंगा घाट',
    tagline: 'The Confluence of Five Mystic Rivers & Sky Lanterns',
    story: 'Where five sacred rivers (Ganga, Yamuna, Saraswati, Kirana, and Dhutpapa) are said to meet invisibly. The origin point of Akash Deep (lanterns suspended high on bamboo poles to guide ancestors across the celestial realm).',
    historicalEra: 'Ancient & Peshwa Era Architecture',
    primaryDeityOrTheme: 'Akash Deep (Sky Lanterns) & Bindu Madhava',
    diyaCountApprox: '1,80,000+ Diyas',
    aartiTime: '6:30 PM',
    highlights: ['Hundreds of suspended glowing bamboo sky lamps', 'Peshwa stone stone palaces', 'Serene acoustic chanting'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXanjjYIkW1jTMupyblNx7UE-X2aXHbi_UBctHM6I468sKCf1IrGyioNRkUQ6Iogg_rrWdvVpwcl-nWL4z6WsewtaXggPuYzlDFdlc2PS2IpW90hIo_0jYeSkDtlCiB9EONayOIMo8L2Q_1xY_sev-pgq4UUs4dUOaK0S9NCGrgZcN6rb5y6B7rsXNbN8YDsI8nEcRBtC2CeXntd6cVe2ZjKxQVMP7dE_lx6wSWVQykjQenOaA0WaaA',
    coordinatesOrder: 5
  },
  {
    id: 'namo-ghat',
    name: 'Namo Ghat',
    hindiName: 'नमो घाट',
    tagline: 'The Grand Modern Gateway & Vedic Namaste Sculptures',
    story: 'The northern anchor of Varanasi featuring colossal folding-hands (Namaste) brass sculptures illuminated in radiant gold. The stage for mega drone light choreography and the state fireworks finale.',
    historicalEra: 'Contemporary Masterpiece (2022)',
    primaryDeityOrTheme: 'Surya Namaskar & Modern Cultural Arena',
    diyaCountApprox: '2,00,000+ Diyas',
    aartiTime: '8:45 PM (Grand Sky Fireworks & Drones)',
    highlights: ['Massive glowing 75-ft Namaste metal sculptures', 'Synchronized 1000-drone aerial light formations', 'Grand eco-friendly aerial firework finale'],
    image: namoGhatImg,
    coordinatesOrder: 6
  }
];

export const CURATED_MOMENTS: CuratedMoment[] = [
  {
    id: 'moment-aarti',
    title: 'Maha Ganga Aarti',
    hindiTitle: 'महा गंगा आरती',
    shortDesc: 'Front-row boat mooring to witness 21 Vedic priests chant sacred stotras with multi-tiered flaming brass lamps.',
    fullDesc: 'As darkness envelops the ancient river, 21 priests adorned in saffron silk take their stations at Dashashwamedh Ghat. With synchronized rhythms, blowing conches, burning incense, and towering multi-tiered brass oil lamps, the sacred chant of Har Har Gange echoes across the waters. Our vessels hold a pre-reserved stationary mooring position for prime viewing.',
    timeSlot: '7:00 PM - 7:45 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb3qMwVJzY8306sfLipjtY6KMv85W9OkszJ7lkRWqi2Tpx6RezTJ-wyuOvXTuMJxRoWpINLI9MBpzd_q1zsuQo_G7Hnq4CAGiLdmYov8uy4h3BNwPEs9RWOeP7bfno9Om7qqij3O44kCKmTSBxMrylIJtDu6nBox5s8lMfdq8HW072sfkGYpr_q6CtPg9GzSnNg1_HcNELjpR8OZOn29VxVKG_2V_ZtZtnzl0NSCj-aaE-YCDQMkPsg',
    iconName: 'Flame',
    badge: 'Spiritual Pinnacle'
  },
  {
    id: 'moment-laser',
    title: '3D Laser & Heritage Projection',
    hindiTitle: '3D लेज़र और हेरिटेज प्रोजेक्शन',
    shortDesc: 'Spectacular laser beams cutting through the night sky over Chet Singh Fort, illustrating the epic of Tripurasura Samhara.',
    fullDesc: 'State-of-the-art multi-spectrum laser projectors transform the ancient 18th-century stone battlements of Chet Singh Ghat into a moving canvas. Witness the divine story of Lord Shiva destroying the three demon cities (Tripura) and why the entire celestial realm rejoices by lighting lamps in Kashi.',
    timeSlot: '8:00 PM - 8:30 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGaxTEZCQBx5bTVU5nwZuLlUtQfeV630VQSNQBoyMjYHCK4DivduCwagcqMBZ23HcsPsTPh5Yskpe7lNHyq7PtdPm49fYdMsWqrkg92r2L4ZA6KkasCQYOusIeFi1SAuV_PsZk6Nvxt5R4jSpSTcrmgNsAPbwumAs54xOtiuG79RfUKCxCz0_FRH9MxHuOSUDaG-8JAQG_ZMB-ktNJgk-LGMHp4fQH0BtknTNcexHHrgCmeaojfoJIA',
    iconName: 'Sparkles',
    badge: 'Visual Marvel'
  },
  {
    id: 'moment-fireworks',
    title: 'Sky Lanterns & Drones',
    hindiTitle: 'स्काई लैंटर्न व आकाश दीप',
    shortDesc: 'Release glowing sky lanterns into the celestial night sky alongside synchronized aerial drones and fireworks.',
    fullDesc: 'Experience the magic of releasing your own glowing Sky Lantern (Akash Deep) over the holy river Ganges, joining thousands of floating lights in the sky and one million earthen lamps on the 84 stone ghats below.',
    timeSlot: '8:45 PM - 9:15 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXanjjYIkW1jTMupyblNx7UE-X2aXHbi_UBctHM6I468sKCf1IrGyioNRkUQ6Iogg_rrWdvVpwcl-nWL4z6WsewtaXggPuYzlDFdlc2PS2IpW90hIo_0jYeSkDtlCiB9EONayOIMo8L2Q_1xY_sev-pgq4UUs4dUOaK0S9NCGrgZcN6rb5y6B7rsXNbN8YDsI8nEcRBtC2CeXntd6cVe2ZjKxQVMP7dE_lx6wSWVQykjQenOaA0WaaA',
    iconName: 'Zap',
    badge: 'Sky Spectacle'
  },
  {
    id: 'moment-cruise',
    title: '84 Ghats Sailing & Flower Diya Arpan',
    hindiTitle: '84 घाट नौका विहार व पुष्प दीप अर्पण',
    shortDesc: 'Sail across the 7-kilometer crescent of all 84 ghats with traditional welcome, flower diya Ganga arpan, and sacred memento.',
    fullDesc: 'Glide serenely across Mother Ganga as the entire ghat embankment glimmers with over one million diyas. Every guest is gifted a sacred flower diya for personal Ganga arpan, packaged mineral water, a glowing sky lantern, and a cherished memento to remember this sacred evening forever.',
    timeSlot: '4:30 PM - 10:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRFONyntckzDTsFjCSCBlIcKLwTqXZ8rNyJdWO0rqXfYSGWtYL87LkFE-9ypN_x7wf3Ip6MlsuWXgjD3CbxRZxK7T-jlOXogmfPpsOCnOupF5JPN8DwLtjPiKrq8iKsNdIgyLoFaxuZxVkQQAdcB5gIvGhF6VajiP9DOJ0H5tplGvC8a6yDihX47pWVBAuWG4PFDt4kngx1bPYceM4MvBks6iueF7ql9xwK2KnXHKjWLhLXKHIa0jc4w',
    iconName: 'Ship',
    badge: 'Divine Passage'
  }
];

export const ITINERARY_STEPS: ItineraryStep[] = [
  {
    time: '04:30 PM',
    title: 'Welcome Entry & Tilak Ceremony',
    hindiTitle: 'शाही स्वागत व तिलक संस्कार',
    location: 'Ravidas Ghat VIP Jetty',
    description: 'Welcome entry with auspicious Chandan tilak, Rudraksha blessing, and 1 complimentary bottle of packaged mineral water per guest.',
    iconName: 'Crown',
    tag: 'Welcome Entry'
  },
  {
    time: '05:15 PM',
    title: 'Sunset Departure & Flower Diya Arpan',
    hindiTitle: 'सूर्यास्त प्रस्थान व पुष्प दीप अर्पण',
    location: 'Assi to Tulsi Ghat',
    description: 'Departure onto holy Ganga. Guests are provided fresh Flower Diyas with sacred wicks to light and offer (Arpan) onto the tranquil waters as sunset colors the sky.',
    iconName: 'Sun',
    tag: 'Flower Diya'
  },
  {
    time: '06:00 PM',
    title: 'The Golden Crescent: 84 Illuminated Ghats',
    hindiTitle: '84 घाटों का स्वर्णिम दर्शन',
    location: 'Sailing along the Sacred Crescent',
    description: 'Witness over 1 million diyas light up all 84 ghats simultaneously. Sail past historic maratha palaces, submerged Shiva temples, and sacred bathing ghats.',
    iconName: 'Compass',
    tag: '84 Ghats Tour'
  },
  {
    time: '07:00 PM',
    title: 'Front-Row Dashashwamedh Maha Aarti',
    hindiTitle: 'दशाश्वमेध महा गंगा आरती',
    location: 'Dashashwamedh Ghat Sanctum',
    description: 'Stationary mooring facing the 21 Vedic priests performing the world-famous Maha Aarti with towering flaming brass deepams and conch resonance.',
    iconName: 'Flame',
    tag: 'Maha Aarti'
  },
  {
    time: '08:00 PM',
    title: '3D Laser & Drone Light Spectacle',
    hindiTitle: '3D लेज़र और ड्रोन प्रकाश उत्सव',
    location: 'Chet Singh Ghat & Namo Ghat',
    description: 'Panoramic viewing of the multi-beam laser projection on Chet Singh Fort stone walls and the drone light formations over the river.',
    iconName: 'Sparkles',
    tag: 'Laser Show'
  },
  {
    time: '08:45 PM',
    title: 'Sky Lantern (Akash Deep) Release',
    hindiTitle: 'स्काई लैंटर्न / आकाश दीप विसर्जन',
    location: 'Open River Waters',
    description: 'Guests release their glowing Sky Lanterns into the sacred night sky, creating a celestial galaxy of lights connecting earth and heaven.',
    iconName: 'Zap',
    tag: 'Sky Lantern'
  },
  {
    time: '09:45 PM',
    title: 'Farewell & Sacred Memento Handover',
    hindiTitle: 'विदाई एवं पावन स्मृति चिन्ह (मोमेंटो) भेंट',
    location: 'Ravidas Ghat VIP Jetty',
    description: 'Smooth disembarkation where each guest receives an auspicious blessed Memento (स्मृति चिन्ह) as a lifetime keepsake of Dev Deepawali 2026.',
    iconName: 'Gift',
    tag: 'Memento'
  }
];

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'private-sankalp',
    name: 'Personal Vedic Sankalp & Puja',
    hindiName: 'निजी वैदिक संकल्प पूजा',
    price: 3500,
    description: 'A 15-minute dedicated ritual conducted by a Senior Acharya on board in your family’s gotra and name with pure Ganga jal, flowers, and special shlokas.',
    icon: 'Flame'
  },
  {
    id: 'pro-photography',
    name: 'Private Candid Photographer',
    hindiName: 'व्यक्तिगत फोटोग्राफी पैकेज',
    price: 4500,
    description: 'A dedicated luxury photographer capturing your family with prime Dev Deepawali ghat lighting. Includes 35 retouched high-res photos and reel videos.',
    icon: 'Camera'
  },
  {
    id: 'chauffeur-transfer',
    name: 'Luxury Mercedes / Innova Airport Transfer',
    hindiName: 'लक्ज़री एयरपोर्ट / होटल पिकअप व ड्रॉप',
    price: 3000,
    description: 'Seamless round-trip private chauffeur transit avoiding city traffic bottlenecks on Dev Deepawali night with priority police clearance passes.',
    icon: 'Car'
  },
  {
    id: 'banarasi-silk-gift',
    name: 'Pure Handwoven Zari Banarasi Silk Stole',
    hindiName: 'हथकरघा बनारसी सिल्क अंगवस्त्रम',
    price: 2500,
    description: 'An authentic master-weaver pure silk stole in auspicious royal saffron and gold zari, blessed at the Kashi Vishwanath sanctum.',
    icon: 'Gift'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-0',
    title: 'Assi Ghat Illuminated at Night',
    category: 'ghats',
    image: assiGhatImg,
    caption: 'Ancient stone steps of Assi Ghat illuminated with over 100,000 glowing golden diyas and evening rituals.',
    location: 'Assi Ghat'
  },
  {
    id: 'gal-1',
    title: 'Maha Aarti at Dashashwamedh',
    category: 'aarti',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb3qMwVJzY8306sfLipjtY6KMv85W9OkszJ7lkRWqi2Tpx6RezTJ-wyuOvXTuMJxRoWpINLI9MBpzd_q1zsuQo_G7Hnq4CAGiLdmYov8uy4h3BNwPEs9RWOeP7bfno9Om7qqij3O44kCKmTSBxMrylIJtDu6nBox5s8lMfdq8HW072sfkGYpr_q6CtPg9GzSnNg1_HcNELjpR8OZOn29VxVKG_2V_ZtZtnzl0NSCj-aaE-YCDQMkPsg',
    caption: '21 Vedic priests holding sacred multi-tiered brass lamps at Dashashwamedh Ghat.',
    location: 'Dashashwamedh Ghat'
  },
  {
    id: 'gal-2',
    title: 'The Golden Stairway of Kashi',
    category: 'ghats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1VJT4D_OZdQWRxa6Z3PvO7ekxcnXuMTsT_ZFlbZKaW7B5F9NdIsDfYSJOZNQJx-nIfXsRP6_pZmeNSnPkd6qW12-t0ozwKbYH0yk1hDHM7igNT-U3HVqI76tIZuqFbCBsR4SlEsBego2uiXcnW2EUzjeLONUYJk8y5hMMSQbf_bi_p3al48UqZJOgpVZYDOsdvDWO6oxQ41nhodJzAyB1UjGIBdUg-sU3er5FBpTNyzYXjxr-vZVulw',
    caption: 'Over 1 million clay diyas lighting the sacred stone steps from Assi to Namo Ghat.',
    location: 'Crescent of 84 Ghats'
  },
  {
    id: 'gal-3',
    title: 'Floating Prayer on the Holy Ganga',
    category: 'ghats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsDsdWm0kzPy5qNpqQ8d7fL-REfua1hvEqKmG5mu9hxb9Exg69DpsnwWch5AHpigaxPrGcQdrOOWQbUfHTQMavztEJKdwpPv91McAlGj1viz1PRdIqgVKHG1HsFRffNJUsPgoL-m75bLBwl740kdVMttPaxP9yivdQ8ZvOTuZW5nVnQqdAI9vtmOQT1EMyF1xVLaXMkhIbyo2Ze91UJ6VRBHwEy0kuh-yd3mrBSpnV0nF1MtwXGJGIxg',
    caption: 'Earthen diya with marigold flowers floating serenely under the Kartik Purnima full moon.',
    location: 'Ganges River'
  },
  {
    id: 'gal-4',
    title: '3D Laser Symphony on Chet Singh Fort',
    category: 'laser',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGaxTEZCQBx5bTVU5nwZuLlUtQfeV630VQSNQBoyMjYHCK4DivduCwagcqMBZ23HcsPsTPh5Yskpe7lNHyq7PtdPm49fYdMsWqrkg92r2L4ZA6KkasCQYOusIeFi1SAuV_PsZk6Nvxt5R4jSpSTcrmgNsAPbwumAs54xOtiuG79RfUKCxCz0_FRH9MxHuOSUDaG-8JAQG_ZMB-ktNJgk-LGMHp4fQH0BtknTNcexHHrgCmeaojfoJIA',
    caption: 'Dynamic laser beams narrating ancient lore across 18th-century stone fortifications.',
    location: 'Chet Singh Ghat'
  },
  {
    id: 'gal-5',
    title: 'Namo Ghat & Sky Fireworks Finale',
    category: 'laser',
    image: namoGhatImg,
    caption: 'Iconic illuminated Namaste sculptures and drone constellations over the sacred river.',
    location: 'Namo Ghat'
  },
  {
    id: 'gal-6',
    title: 'Royal Luxury Cruise Salon',
    category: 'cruise',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRFONyntckzDTsFjCSCBlIcKLwTqXZ8rNyJdWO0rqXfYSGWtYL87LkFE-9ypN_x7wf3Ip6MlsuWXgjD3CbxRZxK7T-jlOXogmfPpsOCnOupF5JPN8DwLtjPiKrq8iKsNdIgyLoFaxuZxVkQQAdcB5gIvGhF6VajiP9DOJ0H5tplGvC8a6yDihX47pWVBAuWG4PFDt4kngx1bPYceM4MvBks6iueF7ql9xwK2KnXHKjWLhLXKHIa0jc4w',
    caption: 'Warm ambient interiors, fine brass dining, and unobstructed water views.',
    location: 'Onboard Luxury Vessel'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Cruise & Boarding',
    question: 'Where and when does the luxury cruise board on November 24, 2026?',
    answer: 'Boarding takes place at the private VIP Jetty at Ravidas Ghat (near Assi Ghat) from 4:00 PM to 4:45 PM. The cruise will cast off promptly at 5:00 PM to catch the sunset and prime lighting of the ghats.'
  },
  {
    category: 'Cruise & Boarding',
    question: 'How do we navigate Varanasi traffic on Dev Deepawali night?',
    answer: 'Dev Deepawali is the busiest night in Varanasi with strict vehicle diversions. All our registered guests receive an official District Administration VIP Vehicle Pass allowing direct access to the Ravidas Ghat parking zone. Guests who book the Imperial Suite or Chauffeur Add-on receive dedicated luxury door-to-door transit.'
  },
  {
    category: 'Rituals & Dev Deepawali',
    question: 'What is the religious significance of Dev Deepawali (Kartik Purnima)?',
    answer: 'Dev Deepawali (The Diwali of the Gods) is celebrated exactly 15 days after Diwali on Kartik Purnima. According to the Shiva Purana, Lord Shiva defeated the demon Tripurasura on this day. In jubilation, the 330 million Hindu Devas (Gods) descend from heaven to take a holy dip in the Ganges and illuminate the ghats with millions of lamps.'
  },
  {
    category: 'Rituals & Dev Deepawali',
    question: 'Will we be able to offer and float our own diyas on the river?',
    answer: 'Yes! Every guest is provided with authentic hand-crafted earthen diyas, organic cotton wicks, pure cow ghee, and marigold flower offerings. Under the guidance of our onboard Vedic priest, you will take part in the collective deepdaan blessing.'
  },
  {
    category: 'Package Inclusions',
    question: 'What items and experiences are included in the package?',
    answer: 'Each pass includes 5 signature offerings: 1. Traditional Welcome Entry, 2. Packaged Mineral Water (1 bottle per guest), 3. Sacred Flower Diya for Ganga Arpan, 4. Glowing Sky Lantern (Akash Deep) for release, and 5. A consecrated blessed Memento (स्मृति चिन्ह) keepsake at farewell, along with the full 84-ghat river cruise and Dashashwamedh Maha Aarti viewing. (Note: Dinner is not included).'
  },
  {
    category: 'Dress & Guidelines',
    question: 'What is the recommended dress code for the evening?',
    answer: 'We recommend elegant traditional Indian attire (Kurta-Churidar, Silk Saree, Nehru Jacket, or Salwar Suit) or smart semi-formal evening wear. The river breeze can be slightly cool in late November (18°C to 22°C), so carrying a light pashmina or blazer is recommended.'
  },
  {
    category: 'Cruise & Boarding',
    question: 'Is the cruise safe for elderly guests and children?',
    answer: 'Absolutely. Our vessel is a modern twin-engine luxury catamaran equipped with gentle boarding ramps, wheelchair assistance, elevator access to deck, US Coast Guard-certified life safety equipment, on-board medical staff, and climate-controlled indoor salons.'
  }
];
