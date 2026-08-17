import { PackageTier, GhatInfo, CuratedMoment, ItineraryStep, AddonOption, GalleryItem, FaqItem } from '../types';

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'royal-maharaj-deck',
    name: 'The Royal Maharaj Deck',
    hindiTitle: 'महाराज रॉयल डेक',
    subtitle: 'The ultimate panoramic open-air sanctuary overlooking the millions of ghat diyas and Dashashwamedh Maha Aarti.',
    price: 15000,
    originalPrice: 19500,
    currency: '₹',
    capacityLimit: 80,
    deckLevel: 'Upper Open Sky Deck (360° View)',
    badge: 'Most Popular',
    popular: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRFONyntckzDTsFjCSCBlIcKLwTqXZ8rNyJdWO0rqXfYSGWtYL87LkFE-9ypN_x7wf3Ip6MlsuWXgjD3CbxRZxK7T-jlOXogmfPpsOCnOupF5JPN8DwLtjPiKrq8iKsNdIgyLoFaxuZxVkQQAdcB5gIvGhF6VajiP9DOJ0H5tplGvC8a6yDihX47pWVBAuWG4PFDt4kngx1bPYceM4MvBks6iueF7ql9xwK2KnXHKjWLhLXKHIa0jc4w',
    inclusions: [
      'Priority VIP boarding with Chandan Tilak & Rudraksha Mala at Ravidas Ghat',
      'Unobstructed front-row stationary mooring at Dashashwamedh Maha Aarti',
      'Grand 5-Course Royal Banarasi & Awadhi Sattvic Dinner buffet',
      'Exclusive 360° upper-deck open sky seating with soft ambient bolsters',
      'Live guided storytelling by Vedic Scholars and Banaras Historians',
      '108 Sacred Earthen Diyas provided for floating ritual onto the Ganges',
      'Live classical Shehnai & Sitar maestro performance on deck',
      'Complimentary welcome drinks: Saffron Kesar Thandai, Kashmiri Kahwa, & Fresh Juices'
    ],
    exclusivePerks: [
      'Personalized brass diya souvenir blessed at Kashi Vishwanath sanctum',
      'High-resolution digital photography package included',
      'Air-conditioned VIP lounge access on lower deck during transit'
    ]
  },
  {
    id: 'imperial-maharaja-suite',
    name: 'The Imperial Maharaja Suite',
    hindiTitle: 'शाही महाराजा सुइट',
    subtitle: 'Ultra-exclusive private stateroom with dedicated butler, private terrace, and personal Vedic Sankalp ritual.',
    price: 28000,
    originalPrice: 35000,
    currency: '₹',
    capacityLimit: 20,
    deckLevel: 'Private Royal Cabin + Exclusive Bow Terrace',
    badge: 'Ultra Luxury (Only 20 Guests)',
    popular: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb3qMwVJzY8306sfLipjtY6KMv85W9OkszJ7lkRWqi2Tpx6RezTJ-wyuOvXTuMJxRoWpINLI9MBpzd_q1zsuQo_G7Hnq4CAGiLdmYov8uy4h3BNwPEs9RWOeP7bfno9Om7qqij3O44kCKmTSBxMrylIJtDu6nBox5s8lMfdq8HW072sfkGYpr_q6CtPg9GzSnNg1_HcNELjpR8OZOn29VxVKG_2V_ZtZtnzl0NSCj-aaE-YCDQMkPsg',
    inclusions: [
      'Private Luxury Chauffeur Pick-up & Drop from any Varanasi hotel / airport',
      'Private air-conditioned suite with royal antique wood interiors & viewing port',
      'Dedicated personal Butler & Vedic Acharya for private family Sankalp',
      'Table-served 7-course Imperial Banarasi royal degustation feast',
      'Front bow private terrace access with premium binoculars & heated cushions',
      'Exclusive Gangajal Kalash & pure Zari Banarasi Silk Angavastram gift box',
      'All perks of the Royal Maharaj Deck with 0 waiting line'
    ],
    exclusivePerks: [
      'Chauffeur Mercedes / BMW transfer included',
      'Dedicated private Vedic pandit on board for personal blessings',
      'Live private sitar recital in the stateroom'
    ]
  },
  {
    id: 'twilight-heritage-pass',
    name: 'The Twilight Heritage Pass',
    hindiTitle: 'हेरिटेज संध्या पास',
    subtitle: 'Panoramic climate-controlled glass salon with artisanal Banarasi high tea, dinner buffet, and live commentary.',
    price: 9500,
    originalPrice: 12500,
    currency: '₹',
    capacityLimit: 100,
    deckLevel: 'Lower Climate-Controlled Glass Salon',
    badge: 'Heritage Classic',
    popular: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsDsdWm0kzPy5qNpqQ8d7fL-REfua1hvEqKmG5mu9hxb9Exg69DpsnwWch5AHpigaxPrGcQdrOOWQbUfHTQMavztEJKdwpPv91McAlGj1viz1PRdIqgVKHG1HsFRffNJUsPgoL-m75bLBwl740kdVMttPaxP9yivdQ8ZvOTuZW5nVnQqdAI9vtmOQT1EMyF1xVLaXMkhIbyo2Ze91UJ6VRBHwEy0kuh-yd3mrBSpnV0nF1MtwXGJGIxg',
    inclusions: [
      'Priority boarding at Ravidas Ghat with welcome tilak',
      'Expansive panoramic glass walls overlooking the illuminated riverbank',
      'Full Sattvic Banarasi dinner buffet & dessert bar',
      'Access to open viewing promenades for photography during Aarti',
      '51 Sacred Earthen Diyas provided for the floating offering',
      'Live audio narration in English & Hindi detailing each of the 84 ghats'
    ],
    exclusivePerks: [
      'Banarasi Malaiyo & Banarasi Paan live counter',
      'Sealed holy Gangajal container with Kashi Vishwanath prasad'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb3qMwVJzY8306sfLipjtY6KMv85W9OkszJ7lkRWqi2Tpx6RezTJ-wyuOvXTuMJxRoWpINLI9MBpzd_q1zsuQo_G7Hnq4CAGiLdmYov8uy4h3BNwPEs9RWOeP7bfno9Om7qqij3O44kCKmTSBxMrylIJtDu6nBox5s8lMfdq8HW072sfkGYpr_q6CtPg9GzSnNg1_HcNELjpR8OZOn29VxVKG_2V_ZtZtnzl0NSCj-aaE-YCDQMkPsg',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXanjjYIkW1jTMupyblNx7UE-X2aXHbi_UBctHM6I468sKCf1IrGyioNRkUQ6Iogg_rrWdvVpwcl-nWL4z6WsewtaXggPuYzlDFdlc2PS2IpW90hIo_0jYeSkDtlCiB9EONayOIMo8L2Q_1xY_sev-pgq4UUs4dUOaK0S9NCGrgZcN6rb5y6B7rsXNbN8YDsI8nEcRBtC2CeXntd6cVe2ZjKxQVMP7dE_lx6wSWVQykjQenOaA0WaaA',
    coordinatesOrder: 6
  }
];

export const CURATED_MOMENTS: CuratedMoment[] = [
  {
    id: 'moment-aarti',
    title: 'Maha Ganga Aarti',
    hindiTitle: 'महा गंगा आरती',
    shortDesc: 'Front-row VIP boat mooring to witness 21 Vedic priests chant sacred stotras with multi-tiered flaming brass lamps.',
    fullDesc: 'As darkness envelops the ancient river, 21 priests adorned in saffron silk take their stations at Dashashwamedh Ghat. With synchronized rhythms, blowing conches, burning incense, and towering multi-tiered brass oil lamps, the sacred chant of Har Har Gange echoes across the waters. Our luxury cruise holds a pre-reserved, stationary front-row mooring position with unobstructed 360-degree viewing.',
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
    title: 'Sky of Lights & Drones',
    hindiTitle: 'ड्रोन शो और आतिशबाजी',
    shortDesc: 'A coordinated fleet of 1,000 aerial drones weaving holy symbols over the Ganges followed by an eco-friendly fireworks grand finale.',
    fullDesc: 'Watch in awe as 1,000 luminous drones rise above the opposite sandy banks of the Ganges, morphing into radiant 3D formations of Nataraja, the Holy Trishul, the Sacred Om, and the divine Kashi Vishwanath spire, followed by a breathtaking golden firework cascade that mirrors perfectly on the dark river water.',
    timeSlot: '8:45 PM - 9:15 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXanjjYIkW1jTMupyblNx7UE-X2aXHbi_UBctHM6I468sKCf1IrGyioNRkUQ6Iogg_rrWdvVpwcl-nWL4z6WsewtaXggPuYzlDFdlc2PS2IpW90hIo_0jYeSkDtlCiB9EONayOIMo8L2Q_1xY_sev-pgq4UUs4dUOaK0S9NCGrgZcN6rb5y6B7rsXNbN8YDsI8nEcRBtC2CeXntd6cVe2ZjKxQVMP7dE_lx6wSWVQykjQenOaA0WaaA',
    iconName: 'Zap',
    badge: 'Sky Spectacle'
  },
  {
    id: 'moment-cruise',
    title: 'Royal Ganges Cruise & Banquet',
    hindiTitle: 'शाही क्रूज़ और सात्विक दावत',
    shortDesc: 'Sail in quiet luxury across the 7-kilometer crescent of all 84 ghats with live classical music and an authentic 5-course Banarasi feast.',
    fullDesc: 'Leave the packed crowds behind and experience the spiritual grandeur from the serene open deck of our bespoke vessel. Soft sitar notes waft through the air as dedicated attendants serve warm Kashmiri saffron kahwa, Banarasi tamatar chaat, hand-pressed rotis, rich subz biryani, and fragrant winter Malaiyo dessert.',
    timeSlot: '4:30 PM - 10:30 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRFONyntckzDTsFjCSCBlIcKLwTqXZ8rNyJdWO0rqXfYSGWtYL87LkFE-9ypN_x7wf3Ip6MlsuWXgjD3CbxRZxK7T-jlOXogmfPpsOCnOupF5JPN8DwLtjPiKrq8iKsNdIgyLoFaxuZxVkQQAdcB5gIvGhF6VajiP9DOJ0H5tplGvC8a6yDihX47pWVBAuWG4PFDt4kngx1bPYceM4MvBks6iueF7ql9xwK2KnXHKjWLhLXKHIa0jc4w',
    iconName: 'Ship',
    badge: 'Bespoke Comfort'
  }
];

export const ITINERARY_STEPS: ItineraryStep[] = [
  {
    time: '04:30 PM',
    title: 'Royal Welcome & Tilak Ceremony',
    hindiTitle: 'शाही स्वागत व तिलक संस्कार',
    location: 'Ravidas Ghat VIP Jetty',
    description: 'Private red-carpet boarding, auspicious Chandan-Kumkum tilak by Vedic priests, sacred Rudraksha garland welcome, and welcome drinks (Kesar Thandai / Badam Milk).',
    iconName: 'Crown',
    tag: 'Boarding'
  },
  {
    time: '05:15 PM',
    title: 'Sunset Departure & Diya Lighting',
    hindiTitle: 'सूर्यास्त प्रस्थान व 108 दीपदान',
    location: 'Assi to Tulsi Ghat',
    description: 'The cruise departs as the crimson sun sets over the ancient skyline. Guests are handed brass pooja thalis with 108 earthen diyas and marigold petals to light and float upon the sacred waters.',
    iconName: 'Sun',
    tag: 'Sacred Ritual'
  },
  {
    time: '06:00 PM',
    title: 'The Golden Crescent: 84 Illuminated Ghats',
    hindiTitle: '84 घाटों का स्वर्णिम दर्शन',
    location: 'Sailing along the Sacred Crescent',
    description: 'As twilight turns to darkness, over 1.2 million diyas illuminate the 84 ghats in unison. Live commentary by Banaras historians reveals the hidden legends of each stone palace and ghat.',
    iconName: 'Compass',
    tag: 'Sightseeing'
  },
  {
    time: '07:00 PM',
    title: 'Front-Row Dashashwamedh Maha Aarti',
    hindiTitle: 'दशाश्वमेध महा गंगा आरती',
    location: 'Dashashwamedh Ghat Sanctum',
    description: 'Our vessel takes reserved front-row mooring. Experience the celestial resonance of 21 priests waving flaming brass towers with reverberating shankha naad and mantras.',
    iconName: 'Flame',
    tag: 'Highlight'
  },
  {
    time: '08:00 PM',
    title: '3D Laser & Drone Light Spectacle',
    hindiTitle: '3D लेज़र और ड्रोन प्रकाश उत्सव',
    location: 'Chet Singh Ghat & Namo Ghat',
    description: 'Panoramic viewing of the multi-beam laser projection on Chet Singh Fort stone walls and the 1,000-drone aerial formation over the sacred river.',
    iconName: 'Sparkles',
    tag: 'Show'
  },
  {
    time: '08:45 PM',
    title: 'Royal Banarasi Sattvic Degustation Dinner',
    hindiTitle: 'शाही सात्विक बनारसी रात्रिभोज',
    location: 'Cruise Dining Deck',
    description: 'Indulge in a 5-course gourmet vegetarian feast featuring royal recipes of the Maharaja of Benares, followed by authentic Banarasi Paan and winter Malaiyo.',
    iconName: 'Utensils',
    tag: 'Gourmet Feast'
  },
  {
    time: '10:00 PM',
    title: 'Farewell & Sacred Prasadam Memento',
    hindiTitle: 'विदाई एवं प्रसाद भेंट',
    location: 'Ravidas Ghat VIP Jetty',
    description: 'Disembarkation with complimentary holy Gangajal kalash, Kashi Vishwanath blessed prasadam, and private luxury vehicle drop-off.',
    iconName: 'Gift',
    tag: 'Disembark'
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
    title: 'Sky Spectacle & Fireworks',
    category: 'laser',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXanjjYIkW1jTMupyblNx7UE-X2aXHbi_UBctHM6I468sKCf1IrGyioNRkUQ6Iogg_rrWdvVpwcl-nWL4z6WsewtaXggPuYzlDFdlc2PS2IpW90hIo_0jYeSkDtlCiB9EONayOIMo8L2Q_1xY_sev-pgq4UUs4dUOaK0S9NCGrgZcN6rb5y6B7rsXNbN8YDsI8nEcRBtC2CeXntd6cVe2ZjKxQVMP7dE_lx6wSWVQykjQenOaA0WaaA',
    caption: 'Fireworks and drone constellations illuminating the night sky over the holy river.',
    location: 'Namo Ghat & Sand Banks'
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
    category: 'Food & Hospitality',
    question: 'What is the culinary experience like onboard?',
    answer: 'We serve an authentic 5-course Banarasi and Royal Awadhi sattvic banquet. All preparations are strictly vegetarian and prepared with pure ghee, without onion or garlic, adhering to the highest sanctified traditions. Live counters include Banarasi Chaat, warm Malaiyo, fresh Jalebi with Rabdi, Saffron Thandai, and Paan.'
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
