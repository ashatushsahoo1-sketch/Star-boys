import { Injectable } from '@angular/core';
import { LegacyMilestone, LegacyMemory } from '../models/legacy.model';
import { PujaEventConfig, ScheduleItem, PastEvent } from '../models/event.model';
import { GalleryItem } from '../models/gallery.model';
import { CommitteeMember } from '../models/committee.model';
import { DeveloperInfo } from '../models/developer.model';

@Injectable({
  providedIn: 'root'
})
export class PujaDataService {

  /* =========================================================================
     1. COMMITTEE GENERAL BRANDING & CONTACT INFO
     ========================================================================= */
  readonly committeeInfo = {
    name: 'STAR BOYS',
    fullName: 'STAR BOYS Laxmi Puja Committee',
    tagline: 'Tradition • Unity • Devotion • Celebration',
    subTagline: 'School Sahi, Ghantapada, Talcher',
    establishedYear: '2004',
    locationShort: 'School Sahi, Ghantapada, Talcher',
    fullAddress: 'STAR BOYS Puja Mandap, School Sahi, Ghantapada, Talcher, Angul, Odisha, India',
    contactNumber: '+91 97786 69092',
    contactEmail: 'starboys.ghantapada@gmail.com',
    socials: {
      facebook: 'https://facebook.com/starboysghantapada',
      instagram: 'https://instagram.com/starboysghantapada',
      youtube: 'https://youtube.com/c/starboysghantapada'
    }
  };

  /* =========================================================================
     2. ABOUT STAR BOYS & CORE PILLARS
     ========================================================================= */
  readonly aboutContent = {
    heading: 'About STAR BOYS',
    subHeading: 'A Brotherhood Bound by Devotion & Culture',
    introText: 'STAR BOYS is a premier socio-cultural youth committee dedicated to celebrating the grand festival of Maa Laxmi Puja with supreme reverence, artistic grandeur, and heartfelt community togetherness.',
    description: 'Founded in 2004 by a passionate circle of youths, STAR BOYS has evolved into a cornerstone of cultural heritage. We take immense pride in preserving sacred Odia Laxmi Puja rituals, uplifting local artisans through breathtaking pandal architecture, and fostering unity through selfless community service and vibrant cultural extravaganzas.',
    image: 'assets/images/hero/about-pandal.jpg',
    stats: [
      { count: 'Since 2004', label: 'Glorious Devotional Legacy' },
      { count: '1000+', label: 'Devotees Welcomed Annually' },
      { count: '50+', label: 'Dedicated Youths & Volunteers' },
      { count: '100%', label: 'Joy, Faith & Pure Devotion' }
    ],
    values: [
      {
        id: 'devotion',
        title: 'Devotion',
        tagline: 'Bhakti & Reverence',
        description: 'Honoring Maa Laxmi with pure Vedic rituals, soul-stirring sandhya aarti, pushpanjali, and sacred prasad seva that invoke peace and prosperity for every home.',
        icon: 'fa-solid fa-hands-praying',
        color: '#f5c542'
      },
      {
        id: 'unity',
        title: 'Unity',
        tagline: 'Strength in Togetherness',
        description: 'Bringing the entire community together as one big family across generations, uniting hearts through joyful celebration, teamwork, and mutual respect.',
        icon: 'fa-solid fa-people-group',
        color: '#ff7b00'
      },
      {
        id: 'tradition',
        title: 'Tradition',
        tagline: 'Preserving Sacred Heritage',
        description: 'Keeping our rich Odia folk art, jhoti chita decorations, classical music, and traditional puja customs alive for future generations to cherish with pride.',
        icon: 'fa-solid fa-om',
        color: '#e056fd'
      }
    ]
  };

  /* =========================================================================
     3. LEGACY TIMELINE (2013 - 2026)
     ========================================================================= */
  readonly legacyItems: LegacyMilestone[] = [
    {
      year: '2013',
      title: 'Uttarakhand Flood & Divine Grace',
      tagline: 'Compassion Amidst the Deluge',
      description: 'Dedicated in reverent tribute to the Uttarakhand flood relief, this moving pandal depicted Himalayan peaks, roaring waters, and rescue helicopters, with Maa Laxmi radiating supreme peace, protection, and solace for every suffering soul.',
      image: 'assets/images/legacy/2013.jpg',
      highlights: [
        'Uttarakhand deluge & Kedarnath relief tribute theme',
        'Artistic mountain peaks, flood rescue helicopter & Shiva darshan',
        'Solemn community prayers and relief seva for flood victims'
      ]
    },
    {
      year: '2014',
      title: 'Lord Vishnu’s Dashavatara',
      tagline: 'The Ten Sacred Incarnations',
      description: 'A celestial darshan celebrating the cosmic balance of the universe, gloriously depicting the ten sacred Dashavatara incarnations of Lord Vishnu surrounding the divine Mother Maa Laxmi in golden radiance.',
      image: 'assets/images/legacy/2014.jpg',
      highlights: [
        'Epic Dashavatara sanctum portraying all 10 Vishnu avatars',
        'Intricate handcrafted motifs & spiritual narrative pandal',
        'Resonant Vedic chants and devotional Maha Aarti'
      ]
    },
    {
      year: '2015',
      title: 'Gaja Laxmi — Royal Elephant Worship',
      tagline: 'Airavata Showering Divine Abundance',
      description: 'Bringing the majestic Gaja Laxmi vision to life, where regal white celestial elephants flank Maa Laxmi, pouring sacred waters from golden kalash over the blooming lotus throne amidst blowing conches.',
      image: 'assets/images/legacy/2015.jpg',
      highlights: [
        'Grand Gaja Laxmi swaroop with celestial elephant sentinels',
        'Sacred Kalash abhishekam representation with fragrant lotus blooms',
        'Traditional Odia dhola and nisan rhythmic beats'
      ]
    },
    {
      year: '2016',
      title: 'Famous Places in Hindu Religion',
      tagline: 'The Eternal Pilgrimage of Sanatana Dharma',
      description: 'A stunning architectural showcase uniting sacred Hindu tirthas—from the holy heights of Char Dham to grand coastal temples—bringing the divine sanctity of all revered pilgrimage sites right to School Sahi.',
      image: 'assets/images/legacy/2016.jpg',
      highlights: [
        'Replicas of sacred Hindu shrines and holy Char Dham tirthas',
        'Magnificent temple spire architecture & detailed wooden carvings',
        'Unprecedented spiritual congregation of pilgrims and devotees'
      ]
    },
    {
      year: '2017',
      title: 'Sacred Laxmi Purana',
      tagline: 'The Timeless Legend of Devotion & Equality',
      description: 'Inspired by Mahapurusha Balaram Das’s revered Odia classic Laxmi Purana, depicting the Mother’s supreme compassion, righteous dignity, and grace that blesses every humble threshold without discrimination.',
      image: 'assets/images/legacy/2017.jpg',
      highlights: [
        'Visual reenactment of Balaram Das’s sacred Laxmi Purana',
        'Celebration of inclusive devotion, jhoti chita art & social equality',
        'Special distribution of traditional Odia pitha and prasad'
      ]
    },
    {
      year: '2018',
      title: 'Mountain & Waterfall Open Pandal',
      tagline: 'Nature’s Symphony in Divine Harmony',
      description: 'A breathtaking open-air landscape mandap featuring towering rocky mountain cliffs, misty gorges, and flowing natural waterfalls cascading serenely around the lotus feet of Maa Laxmi under the open sky.',
      image: 'assets/images/legacy/2018.jpg',
      highlights: [
        'Open-air natural mountain landscape with live cascading waterfalls',
        'Sensory mist effects, ambient forest lighting & natural rock stones',
        'Mesmerizing night view that drew devotees from across Angul'
      ]
    },
    {
      year: '2019',
      title: 'Biodegradable Thermocol Artisan Idol',
      tagline: 'Green Innovation Meets Sacred Craftsmanship',
      description: 'A pioneer in sustainable festivities, where master artisans sculpted the breathtaking Maa Laxmi idol entirely out of eco-friendly, biodegradable thermocol, setting an inspiring milestone for nature-friendly puja.',
      image: 'assets/images/legacy/2019.jpg',
      highlights: [
        '100% eco-friendly, biodegradable thermocol idol construction',
        'Intricate filigree jaali and delicate floral relief artistry',
        'Grand community Annadan seva serving thousands of pilgrims'
      ]
    },
    {
      year: '2020',
      title: 'Chandi Medha — Silver Filigree Splendor',
      tagline: 'Unbroken Devotion in Quiet Times',
      description: 'Adorning Maa Laxmi with the resplendent Chandi Medha (intricate silver filigree tableaus), upholding centuries-old Odia silver art while performing disciplined, soulful Vedic rituals with prayers for global healing.',
      image: 'assets/images/legacy/2020.jpg',
      highlights: [
        'Shimmering Cuttack-style Chandi Medha (silver filigree) backdrop',
        'Unbroken sacred ghee lamp rituals and prayers for universal health',
        'Digital live darshan broadcast to devotee families worldwide'
      ]
    },
    {
      year: '2021',
      title: 'Chandi Medha — Silver Grace & Renewal',
      tagline: 'Radiance of Hope & Sacred Silver',
      description: 'Continuing the divine Chandi Medha legacy with sparkling silver ornamentation and filigree aureoles, welcoming the return of festive cheer, heartfelt pushpanjali, and deep brotherhood across School Sahi.',
      image: 'assets/images/legacy/2021.jpg',
      highlights: [
        'Elaborate Chandi Medha silver filigree crown and throne backdrop',
        'Solemn Vedic Kalash Sthapana & resonant evening conch blowing',
        'Reunion of community volunteers with renewed festive spirit'
      ]
    },
    {
      year: '2022',
      title: 'Raja Darbar — Royal Imperial Court',
      tagline: 'Opulence, Royalty & Divine Majesty',
      description: 'A majestic recreation of a King’s Royal Court (Raja Darbar), featuring opulent palace arches, gilded pillars, and rich velvet canopies centered on a breathtakingly beautiful Maa Laxmi idol reigning with supreme grace.',
      image: 'assets/images/legacy/2022.jpg',
      highlights: [
        'Grand Raja Darbar theme with royal palace architecture & arches',
        'Exquisitely crafted, life-like Maa Laxmi idol in royal silk and gems',
        'Cultural evening extravaganza with classical Odissi recitals'
      ]
    },
    {
      year: '2023',
      title: 'Dry Fruits Artisan Idol',
      tagline: 'A Miracle of Nature’s Bountiful Harvest',
      description: 'An awe-inspiring artistic marvel where the holy idol and sanctum ornaments of Maa Laxmi were intricately hand-crafted using thousands of dry fruits—almonds, cashews, walnuts, and raisins—symbolizing the Mother of abundant nourishment.',
      image: 'assets/images/legacy/2023.jpg',
      highlights: [
        'Unique divine idol sculpted completely from premium dry fruits',
        'Extraordinary attention to intricate anatomical & jewel detailing',
        'Massive footfall of amazed devotees and extensive media acclaim'
      ]
    },
    {
      year: '2024',
      title: 'Plant-Based Biodegradable Thermocol Pandal',
      tagline: 'Ecological Devotion for a Greener Tomorrow',
      description: 'Championing green spirituality with an organic, plant-based biodegradable thermocol structure, blending cutting-edge eco-architecture with glorious traditional craftsmanship to honor Mother Earth.',
      image: 'assets/images/legacy/2024.jpg',
      highlights: [
        'Advanced 100% plant-derived biodegradable thermocol architecture',
        'Dazzling energy-efficient LED light symphony & midnight Maha Aarti',
        'Serving over 10,000 devotees warm Mahaprasad and sweet Kheeri'
      ]
    },
    {
      year: '2025',
      title: 'Mystic Jungle View Pandal',
      tagline: 'Sacred Wilderness & Harmony of Life',
      description: 'An immersive deep jungle sanctuary theme adorned with lush living flora, towering ancient canopies, cascading waters, and forest creatures, celebrating Maa Laxmi as the divine protector of nature and all living beings.',
      image: 'assets/images/legacy/2025.jpg',
      highlights: [
        'Immersive natural jungle view with wild foliage & bird ambient sounds',
        'Lifelike fauna sculptures honoring wildlife and sacred nature',
        'Over 15,000 pilgrims visiting the illuminated forest sanctum'
      ]
    },
    {
      year: '2026',
      title: '23rd Annual Grand Celebration',
      tagline: 'Grand Surprise Theme — Revealing Soon!',
      description: 'STAR BOYS is preparing for our most monumental celebration yet on October 25, 2026! Our grand artistic theme and surprise innovation will be unveiled soon to welcome Maa Laxmi with unprecedented splendor.',
      image: '',
      highlights: [
        'Magnificent 23rd Year milestone celebration in School Sahi',
        'Grand surprise pandal theme & divine idol concept revealing soon',
        'Special community Mahaprasad seva & mega cultural nights'
      ]
    }
  ];

  /* =========================================================================
     4. LEGACY MEMORIES / GALLERY PREVIEW
     ========================================================================= */
  readonly legacyMemories: LegacyMemory[] = [
    {
      id: 'mem-2013',
      year: '2013',
      title: 'Uttarakhand Flood Tribute',
      image: 'assets/images/legacy/2013.jpg',
      caption: 'Moving tribute depicting Himalayan peaks, flood waters, and divine protection during the Uttarakhand deluge.'
    },
    {
      id: 'mem-2014',
      year: '2014',
      title: 'Lord Vishnu’s Dashavatara',
      image: 'assets/images/legacy/2014.jpg',
      caption: 'The ten sacred cosmic incarnations of Bhagwan Vishnu encircling the radiant lotus altar of Maa Laxmi.'
    },
    {
      id: 'mem-2015',
      year: '2015',
      title: 'Gaja Laxmi Elephant Worship',
      image: 'assets/images/legacy/2015.jpg',
      caption: 'White celestial elephants offering sacred kalash abhishekam to the Mother on her blooming lotus throne.'
    },
    {
      id: 'mem-2016',
      year: '2016',
      title: 'Sanatana Shrines & Tirthas',
      image: 'assets/images/legacy/2016.jpg',
      caption: 'Magnificent architectural replicas of revered Hindu holy shrines and Char Dham pilgrimage tirthas.'
    },
    {
      id: 'mem-2017',
      year: '2017',
      title: 'Sacred Laxmi Purana Lore',
      image: 'assets/images/legacy/2017.jpg',
      caption: 'Celebrating Mahapurusha Balaram Das’s timeless Odia classic of divine love, equality, and compassion.'
    },
    {
      id: 'mem-2018',
      year: '2018',
      title: 'Open Mountain & Waterfalls',
      image: 'assets/images/legacy/2018.jpg',
      caption: 'Breathtaking open-air landscape pandal featuring living waterfalls and rocky mountain cliff formations.'
    },
    {
      id: 'mem-2019',
      year: '2019',
      title: 'Biodegradable Thermocol Idol',
      image: 'assets/images/legacy/2019.jpg',
      caption: 'Pioneering green festival art with the holy idol handcrafted entirely from biodegradable thermocol.'
    },
    {
      id: 'mem-2020',
      year: '2020',
      title: 'Chandi Medha Silver Filigree',
      image: 'assets/images/legacy/2020.jpg',
      caption: 'Resplendent Cuttack-style silver filigree backdrop shining bright with uninterrupted prayer rituals.'
    },
    {
      id: 'mem-2021',
      year: '2021',
      title: 'Chandi Medha Festive Renewal',
      image: 'assets/images/legacy/2021.jpg',
      caption: 'Continuing the shimmering silver filigree tradition with joyful community pushpanjali and devotion.'
    },
    {
      id: 'mem-2022',
      year: '2022',
      title: 'Raja Darbar Imperial Court',
      image: 'assets/images/legacy/2022.jpg',
      caption: 'Royal palace court architecture with opulent arches and an exquisitely sculpted divine Maa Laxmi idol.'
    },
    {
      id: 'mem-2023',
      year: '2023',
      title: 'Dry Fruits Artisan Miracle',
      image: 'assets/images/legacy/2023.jpg',
      caption: 'An awe-inspiring idol intricately sculpted from thousands of almonds, cashews, walnuts, and raisins.'
    },
    {
      id: 'mem-2024',
      year: '2024',
      title: 'Plant-Based Thermocol Pandal',
      image: 'assets/images/legacy/2024.jpg',
      caption: '100% organic plant-based biodegradable thermocol pandal glowing brilliantly on Kumar Purnima night.'
    },
    {
      id: 'mem-2025',
      year: '2025',
      title: 'Mystic Jungle View Darshan',
      image: 'assets/images/legacy/2025.jpg',
      caption: 'Enchanting verdant forest sanctuary with lush living flora, wildlife motifs, and divine Maa Laxmi.'
    }
  ];

  /* =========================================================================
     5. UPCOMING LAXMI PUJA 2026 EVENT CONFIGURATION
     (Change this targetDate anytime to automatically update countdown!)
     ========================================================================= */
  readonly pujaEvent: PujaEventConfig = {
    title: 'MAA LAXMI PUJA 2026',
    subTitle: '23th Annual Grand Celebration',
    year: '2026',
    // Set target date (ISO format). Example: 2026-10-25 at 18:00 (Kumar Purnima evening)
    targetDate: '2026-10-25T18:00:00',
    displayDate: 'October 25, 2026 (Kumar Purnima)',
    location: 'School Sahi, Ghantapada, Talcher, Odisha',
    venueMapUrl: 'https://maps.google.com/?q=School+Sahi+Ghantapada+Talcher+Odisha',
    description: 'Join STAR BOYS for our 23th annual grand Laxmi Puja celebration at School Sahi, Ghantapada, Talcher. Experience divine darshan of Maa Laxmi, majestic pandal lighting, soul-stirring Vedic bhajans, grand Pushpanjali, and sumptuous Mahaprasad.',
    themeBanner: 'assets/images/hero/hero-banner.jpg'
  };

  /* =========================================================================
     6. EVENT SCHEDULE
     ========================================================================= */
  readonly eventSchedule: ScheduleItem[] = [
    {
      id: 'sch-1',
      time: '05:00 PM',
      title: 'Devotee Gathering & Shehnai Vadan',
      description: 'Devotees, committee members, and visitors assemble to the holy strains of traditional Shehnai and Mangala Dhwani.',
      icon: 'fa-solid fa-users',
      highlight: false
    },
    {
      id: 'sch-2',
      time: '06:00 PM',
      title: 'Ghat Kalash Sthapana & Sankalpa',
      description: 'Sacred water pot consecration and invocation of divine presence led by head Vedic priests.',
      icon: 'fa-solid fa-hands-holding-circle',
      highlight: false
    },
    {
      id: 'sch-3',
      time: '07:00 PM',
      title: 'Maha Laxmi Puja & Sandhya Aarti',
      description: 'The core Vedic Sodashopachara puja of Maa Laxmi with 108 lotus offerings and the grand rhythmic Sandhya Aarti.',
      icon: 'fa-solid fa-fire-flame-curved',
      highlight: true
    },
    {
      id: 'sch-4',
      time: '08:30 PM',
      title: 'Community Pushpanjali',
      description: 'All devotees offer holy flowers, bilva patra, and chant sacred stotrams with folded hands for peace and abundance.',
      icon: 'fa-solid fa-spa',
      highlight: false
    },
    {
      id: 'sch-5',
      time: '09:00 PM',
      title: 'Maha Prasad & Bhog Distribution',
      description: 'Serving blessed Khichdi, Payasam, Kheeri, and fruits prasad to all attendees with warm hospitality.',
      icon: 'fa-solid fa-bowl-food',
      highlight: true
    },
    {
      id: 'sch-6',
      time: '09:30 PM',
      title: 'Cultural Extravaganza & Bhajan Sandhya',
      description: 'Enchanting devotional music by acclaimed singers, traditional folk performances, and celebratory fireworks display.',
      icon: 'fa-solid fa-music',
      highlight: false
    }
  ];

  /* =========================================================================
     7. PAST CELEBRATIONS ARCHIVE
     ========================================================================= */
  readonly pastEvents: PastEvent[] = [
    {
      year: '2025',
      title: 'Laxmi Puja 2025: Mystic Jungle View',
      theme: 'Theme: Jungle View & Sacred Wilderness Sanctuary',
      coverImage: 'assets/images/legacy/2025.jpg',
      description: 'An enchanting deep forest sanctuary bringing lush living flora, towering canopy trees, and wildlife motifs to the lotus feet of Maa Laxmi.',
      attendeesCount: '15,000+ Devotees',
      highlightText: 'Mystic Jungle Pandal & Grand Aarti'
    },
    {
      year: '2024',
      title: 'Laxmi Puja 2024: Green Pandal Innovation',
      theme: 'Theme: Plant-Based Biodegradable Thermocol',
      coverImage: 'assets/images/legacy/2024.jpg',
      description: 'A revolutionary green mandap sculpted completely from 100% plant-based biodegradable thermocol with glittering midnight lighting.',
      attendeesCount: '13,500+ Devotees',
      highlightText: 'Plant-Based Eco Architecture'
    },
    {
      year: '2023',
      title: 'Laxmi Puja 2023: Dry Fruits Miracle',
      theme: 'Theme: Sacred Dry Fruits Artisan Idol',
      coverImage: 'assets/images/legacy/2023.jpg',
      description: 'A mesmerizing artistic feat where Maa Laxmi was sculpted using almonds, cashews, raisins, and walnuts to symbolize divine nourishment.',
      attendeesCount: '12,000+ Devotees',
      highlightText: 'Dry Fruits Idol & Anna Seva'
    },
    {
      year: '2022',
      title: 'Laxmi Puja 2022: Royal Raja Darbar',
      theme: 'Theme: Raja Darbar Palace Court',
      coverImage: 'assets/images/legacy/2022.jpg',
      description: 'A magnificent royal imperial court with grand golden arches and an extraordinarily beautiful idol commanding supreme reverence.',
      attendeesCount: '11,000+ Devotees',
      highlightText: 'Raja Darbar & Classical Odissi'
    }
  ];

  /* =========================================================================
     8. PHOTO GALLERY (YEAR-WISE ARCHIVE: 2013 - 2025)
     ========================================================================= */
  readonly galleryItems: GalleryItem[] = [
    // 2025 Photos - Theme: Jungle View
    {
      id: 'gal-2025-1',
      title: 'Mystic Jungle View — Divya Maa Laxmi Darshan',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/2025.jpg',
      year: '2025',
      description: 'Enchanting deep jungle mandap adorned with lush greenery, living flora, and wildlife motifs, with Maa Laxmi blessing devotees as the divine protector of nature.'
    }, {
      id: 'gal-2025-2',
      title: 'Vasani',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/7f48c716-63ad-48fa-b988-21a34776a39f.jpg',
      year: '2025',
      description: 'Enchanting deep jungle mandap adorned with lush greenery, living flora, and wildlife motifs, with Maa Laxmi blessing devotees as the divine protector of nature.'
    },
    {
      id: 'gal-2025-3',
      title: 'Vasani',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/a0a9b515-8d96-4e48-bbef-5c2b335f6095.jpg',
      year: '2025',
      description: 'Enchanting deep jungle mandap adorned with lush greenery, living flora, and wildlife motifs, with Maa Laxmi blessing devotees as the divine protector of nature.'
    },
    {
      id: 'gal-2025-4',
      title: 'Vasani',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/d34fa0bf-c3fd-4520-ad12-9de7c95a1c53.jpg',
      year: '2025',
      description: 'Enchanting deep jungle mandap adorned with lush greenery, living flora, and wildlife motifs, with Maa Laxmi blessing devotees as the divine protector of nature.'
    },


    // 2024 Photos - Theme: Plant-Based Biodegradable Thermocol
    {
      id: 'gal-2024-1',
      title: 'Plant-Based Biodegradable Thermocol Pandal',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/2024.jpg',
      year: '2024',
      description: 'Magnificent eco-friendly pandal architecture crafted entirely from plant-based, biodegradable thermocol glowing across Ghantapada on Kumar Purnima night.'
    },
    {
      id: 'gal-2024-2',
      title: 'Plant-Based Biodegradable Thermocol Pandal',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/a44eda8f-1f7a-4c35-bd92-2416f116b4d1.jpg',
      year: '2024',
      description: 'Magnificent eco-friendly pandal architecture crafted entirely from plant-based, biodegradable thermocol glowing across Ghantapada on Kumar Purnima night.'
    },
    {
      id: 'gal-2024-3',
      title: 'Plant-Based Biodegradable Thermocol Pandal',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/90aa543c-3ab7-4413-bf49-e2ff1c742ec5.jpg',
      year: '2024',
      description: 'Magnificent eco-friendly pandal architecture crafted entirely from plant-based, biodegradable thermocol glowing across Ghantapada on Kumar Purnima night.'
    },
    {
      id: 'gal-2024-4',
      title: 'Plant-Based Biodegradable Thermocol Pandal',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/005aade2-711a-44fe-8d94-2a84e626ab29.jpg',
      year: '2024',
      description: 'Magnificent eco-friendly pandal architecture crafted entirely from plant-based, biodegradable thermocol glowing across Ghantapada on Kumar Purnima night.'
    },
    {
      id: 'gal-2024-5',
      title: 'Plant-Based Biodegradable Thermocol Pandal',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/6aa5dc4c-d258-4af8-b93a-ff7bfe9bf7bd.jpg',
      year: '2024',
      description: 'Magnificent eco-friendly pandal architecture crafted entirely from plant-based, biodegradable thermocol glowing across Ghantapada on Kumar Purnima night.'
    },
    {
      id: 'gal-2024-6',
      title: 'Plant-Based Biodegradable Thermocol Pandal',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/47c47f3c-9420-40b9-8fe2-ed67e694ed08.jpg',
      year: '2024',
      description: 'Magnificent eco-friendly pandal architecture crafted entirely from plant-based, biodegradable thermocol glowing across Ghantapada on Kumar Purnima night.'
    },

    // 2023 Photos - Theme: Idol Made Up of Dry Fruits
    {
      id: 'gal-2023-1',
      title: 'Divine Idol Sculpted from Dry Fruits',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/2023.jpg',
      year: '2023',
      description: 'An extraordinary artisan marvel where the divine idol and ornaments of Maa Laxmi were painstakingly handcrafted using thousands of premium dry fruits—almonds, cashews, raisins, and walnuts.'
    },
    {
      id: 'gal-2023-2',
      title: 'Divine Idol Sculpted from Dry Fruits',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/0ceaa5a6-e880-4845-9ff4-9b0e58249957.jpg',
      year: '2023',
      description: 'An extraordinary artisan marvel where the divine idol and ornaments of Maa Laxmi were painstakingly handcrafted using thousands of premium dry fruits—almonds, cashews, raisins, and walnuts.'
    },
    {
      id: 'gal-2023-3',
      title: 'Divine Idol Sculpted from Dry Fruits',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/01d388ee-917b-456f-9a9f-8562dc2370d7.jpg',
      year: '2023',
      description: 'An extraordinary artisan marvel where the divine idol and ornaments of Maa Laxmi were painstakingly handcrafted using thousands of premium dry fruits—almonds, cashews, raisins, and walnuts.'
    },
    {
      id: 'gal-2023-4',
      title: 'Divine Idol Sculpted from Dry Fruits',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/58e4643b-b86b-4972-94d9-57f6869919f7.jpg',
      year: '2023',
      description: 'An extraordinary artisan marvel where the divine idol and ornaments of Maa Laxmi were painstakingly handcrafted using thousands of premium dry fruits—almonds, cashews, raisins, and walnuts.'
    },
    {
      id: 'gal-2023-5',
      title: 'Divine Idol Sculpted from Dry Fruits',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/d47668d7-9cb3-43fa-8b81-42321ea933c2.jpg',
      year: '2023',
      description: 'An extraordinary artisan marvel where the divine idol and ornaments of Maa Laxmi were painstakingly handcrafted using thousands of premium dry fruits—almonds, cashews, raisins, and walnuts.'
    },
    {
      id: 'gal-2023-6',
      title: 'Divine Idol Sculpted from Dry Fruits',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/a1ef279f-e679-47ed-9dea-89c620877801.jpg',
      year: '2023',
      description: 'An extraordinary artisan marvel where the divine idol and ornaments of Maa Laxmi were painstakingly handcrafted using thousands of premium dry fruits—almonds, cashews, raisins, and walnuts.'
    },

    // 2022 Photos - Theme: Raja Darbar
    {
      id: 'gal-2022-1',
      title: 'Raja Darbar — Royal Imperial Palace Court',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/2022.jpg',
      year: '2022',
      description: 'Opulent Raja Darbar theme featuring gilded royal arches, velvet drapes, and an exquisitely sculpted Maa Laxmi idol reigning with supreme grace.'
    },
    {
      id: 'gal-2022-2',
      title: 'Raja Darbar — Royal Imperial Palace Court',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/00e10f27-3f38-4122-836b-61a5987db7de.jpg',
      year: '2022',
      description: 'Opulent Raja Darbar theme featuring gilded royal arches, velvet drapes, and an exquisitely sculpted Maa Laxmi idol reigning with supreme grace.'
    },
    {
      id: 'gal-2022-3',
      title: 'Raja Darbar — Royal Imperial Palace Court',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/98adb4c8-9457-4fc0-9808-c66ffbe39dcd.jpg',
      year: '2022',
      description: 'Opulent Raja Darbar theme featuring gilded royal arches, velvet drapes, and an exquisitely sculpted Maa Laxmi idol reigning with supreme grace.'
    },
    {
      id: 'gal-2022-4',
      title: 'Raja Darbar — Royal Imperial Palace Court',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/9cfeab7e-6590-4243-b084-89cd8e03d24b.jpg',
      year: '2022',
      description: 'Opulent Raja Darbar theme featuring gilded royal arches, velvet drapes, and an exquisitely sculpted Maa Laxmi idol reigning with supreme grace.'
    },
    {
      id: 'gal-2022-5',
      title: 'Raja Darbar — Royal Imperial Palace Court',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/9463c3e3-a408-41db-8e8f-6af7f5be09df.jpg',
      year: '2022',
      description: 'Opulent Raja Darbar theme featuring gilded royal arches, velvet drapes, and an exquisitely sculpted Maa Laxmi idol reigning with supreme grace.'
    },

    // 2021 Photos - Theme: Chandi Medha
    {
      id: 'gal-2021-1',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/2021.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },
    {
      id: 'gal-2021-2',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/20211023_205142.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },
    {
      id: 'gal-2021-3',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Vasani',
      image: 'assets/images/legacy/20211025_185334.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },
    {
      id: 'gal-2021-4',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/IMG-20211020-WA0003.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },
    {
      id: 'gal-2021-5',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/IMG-20211020-WA0012.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },
    {
      id: 'gal-2021-6',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/IMG-20211023-WA0012.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },
    {
      id: 'gal-2021-7',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/IMG-20211023-WA0021.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },
    {
      id: 'gal-2021-8',
      title: 'Chandi Medha — Sparkling Silver Filigree Splendor',
      category: 'puja',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/IMG-20211023-WA0018.jpg',
      year: '2021',
      description: 'Grand Cuttack-style Chandi Medha silver filigree tableau framing Maa Laxmi, bringing divine silver radiance and festive renewal.'
    },


    // 2020 Photos - Theme: Chandi Medha
    {
      id: 'gal-2020-1',
      title: 'Chandi Medha — Pure Silver Filigree Altar',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/2020.jpg',
      year: '2020',
      description: 'Traditional Chandi Medha silver filigree backdrop shining bright amidst disciplined rituals and earnest prayers for global healing.'
    },


    // 2019 Photos - Theme: Bio-Degradable Thermocol Idol
    {
      id: 'gal-2019-1',
      title: 'Biodegradable Thermocol Eco-Friendly Idol',
      category: 'community',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/2019.jpg',
      year: '2019',
      description: 'A pioneering green initiative featuring the divine Maa Laxmi idol and intricate sanctum filigree sculpted entirely from biodegradable thermocol.'
    },
    {
      id: 'gal-2019-2',
      title: 'Vasani',
      category: 'community',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/acc03467-b19a-4ea5-a1a2-464648f1a2ce.jpg',
      year: '2019',
      description: 'STAR BOYS volunteers distributing steaming hot Khichdi and Kheeri Mahaprasad to thousands of visiting pilgrims with warm love.'
    },
    {
      id: 'gal-2019-2',
      title: 'Puja Mandap',
      category: 'community',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/legacy/20191018_193732.jpg',
      year: '2019',
      description: 'STAR BOYS volunteers distributing steaming hot Khichdi and Kheeri Mahaprasad to thousands of visiting pilgrims with warm love.'
    },

    // 2018 Photos - Theme: Open Pandal Mountain and Waterfall
    {
      id: 'gal-2018-1',
      title: 'Open Pandal with Rocky Mountains & Waterfalls',
      category: 'cultural',
      categoryLabel: 'Cultural Programs',
      image: 'assets/images/legacy/2018.jpg',
      year: '2018',
      description: 'Breathtaking open-air landscape mandap featuring natural mountain cliff formations, mist, and living cascading waterfalls flowing around the lotus feet of Maa Laxmi.'
    },
    {
      id: 'gal-2018-2',
      title: 'Open Pandal with Rocky Mountains & Waterfalls',
      category: 'cultural',
      categoryLabel: 'Cultural Programs',
      image: 'assets/images/legacy/f1421c60-dc6f-436a-9ce0-7a7ddfae8b74.jpg',
      year: '2018',
      description: 'Breathtaking open-air landscape mandap featuring natural mountain cliff formations, mist, and living cascading waterfalls flowing around the lotus feet of Maa Laxmi.'
    },

    // 2017 Photos - Theme: Laxmi Purana
    {
      id: 'gal-2017-1',
      title: 'Sacred Tale of Balaram Das’s Laxmi Purana',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/2017.jpg',
      year: '2017',
      description: 'Thematic pandal depicting the sacred Odia classic Laxmi Purana, honoring the Mother’s supreme grace, righteousness, and universal equality.'
    },
    {
      id: 'gal-2017-2',
      title: 'Sacred Tale of Balaram Das’s Laxmi Purana',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/20171.jpg',
      year: '2017',
      description: 'Thematic pandal depicting the sacred Odia classic Laxmi Purana, honoring the Mother’s supreme grace, righteousness, and universal equality.'
    },

    // 2016 Photos - Theme: Famous Places in Hindu Religion
    {
      id: 'gal-2016-1',
      title: 'Famous Places & Holy Shrines in Hindu Religion',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/legacy/2016.jpg',
      year: '2016',
      description: 'Architectural masterpiece uniting sacred Hindu tirthas and holy Char Dham shrines at School Sahi to celebrate Sanatana heritage.'
    },

    // 2015 Photos - Theme: Elephants Worshipping Laxmi (Gaja Laxmi)
    {
      id: 'gal-2015-1',
      title: 'Gaja Laxmi — Royal Elephants Worshipping the Mother',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/legacy/2015.jpg',
      year: '2015',
      description: 'Splendid Gaja Laxmi swaroop with royal white celestial elephants showering sacred holy waters over Maa Laxmi on her lotus throne.'
    },

    // 2014 Photos - Theme: God Vishnu's Dashavatara
    {
      id: 'gal-2014-1',
      title: 'Bhagwan Vishnu’s Sacred Dashavatara',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/2014.jpg',
      year: '2014',
      description: 'Cosmic pandal depicting the ten holy incarnations (Dashavatara) of Lord Vishnu surrounding the radiant divine Mother Maa Laxmi.'
    },

    // 2013 Photos - Theme: Uttarakhand Flood Relief
    {
      id: 'gal-2013-1',
      title: 'Uttarakhand Flood Relief & Divine Protection',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/2013.jpg',
      year: '2013',
      description: 'A moving tribute pandal depicting Kedarnath mountains, flood deluge, rescue helicopters, and Lord Shiva, with Maa Laxmi standing as the savior of all.'
    },
    // 2013 Photos 
    {
      id: 'gal-2008-1',
      title: '',
      category: 'memories',
      categoryLabel: 'Golden Memories',
      image: 'assets/images/legacy/1a2922f3-d040-4073-986f-54ce2ce00a1c.jpg',
      year: '2008',
      description: ''
    },
  ];

  /* =========================================================================
     8. PUJA KARTA (2 PROFILES - CHIEF PATRONS)
     ========================================================================= */
  readonly kartaMembers: CommitteeMember[] = [
    {
      id: 'karta-1',
      name: 'Shri Dushasan Sahoo',
      role: 'Mukhya Puja Karta (Chief Ritual Patron)',
      category: 'karta',
      badge: 'Mukhya Karta',
      image: 'assets/images/members/katra1.jpeg',
      bio: 'Leading the sacred Sankalpa, Ghat Sthapana, and Vedic Sodashopachara Puja of Maa Laxmi on behalf of all devotees and the STAR BOYS family.',
      phone: '+91 97786 69092',
      socials: [
        { platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }
      ]
    },
    {
      id: 'karta-2',
      name: 'Prafulla Sahoo',
      role: 'Saha Puja Karta (Co-Ritual Patron)',
      category: 'karta',
      badge: 'Saha Karta',
      image: 'assets/images/members/karta-2.jpg',
      bio: 'Partnering in the divine rituals, Hawan, Sandhya Aarti, and Mahaprasad Samarpana to bestow blessings upon School Sahi and Ghantapada.',
      phone: '+91 97786 69092',
      socials: [
        { platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }
      ]
    }
  ];

  /* =========================================================================
     9. TECHNICAL & DIGITAL MEDIA TEAM (4 TECH SPECIALISTS)
     ========================================================================= */
  readonly techMembers: CommitteeMember[] = [
    {
      id: 'tech-1',
      name: 'Ashatush Sahoo',
      role: 'Tech Lead & Full Stack Architect',
      category: 'tech',
      badge: 'Lead Developer',
      image: 'assets/images/developer/developer.jpg',
      bio: 'Architected the official STAR BOYS Angular 19 portal, responsive user interface, and interactive festival experience.',
      email: 'ashatushsahoo786@gmail.com',
      socials: [
        { platform: 'github', url: 'https://github.com/ashatushsahoo', icon: 'fa-brands fa-github', label: 'GitHub' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/ashatushsahoo', icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
        { platform: 'email', url: 'mailto:ashatushsahoo786@gmail.com', icon: 'fa-solid fa-envelope', label: 'Email' }
      ]
    },
    {
      id: 'tech-2',
      name: 'Sudeep sahoo',
      role: 'UI/UX Designer & Frontend Specialist',
      category: 'tech',
      badge: 'UI/UX Lead',
      image: 'assets/images/members/tech-2.jpg',
      bio: 'Crafting digital flyers, motion banners, festive graphics, and user experience layouts for puja announcements.',
      socials: [
        { platform: 'instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram', label: 'Instagram' },
        { platform: 'email', url: 'mailto:tech@starboys.org', icon: 'fa-solid fa-envelope', label: 'Email' }
      ]
    },
    {
      id: 'tech-3',
      name: 'Tapas Sahoo',
      role: 'Digital Media & Live Streaming Lead',
      category: 'tech',
      badge: 'Live Broadcast',
      image: 'assets/images/members/tech-3.jpg',
      bio: 'Managing 4K YouTube/Facebook live streams, photography coverage, and drone videography throughout the 11-day celebration.',
      socials: [
        { platform: 'youtube', url: 'https://youtube.com/c/starboysghantapada', icon: 'fa-brands fa-youtube', label: 'YouTube' },
        { platform: 'instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram', label: 'Instagram' }
      ]
    },
    {
      id: 'tech-4',
      name: 'Tushar Kant Sahoo',
      role: 'Sound, Visuals & Tech Coordinator',
      category: 'tech',
      badge: 'Audio/Visuals',
      image: 'assets/images/members/8707b0ac-87af-45ff-ad47-823fdfb810a6.jpg',
      bio: 'Supervising digital LED walls, synchronized audio mixers, lighting automation, and backup power systems at the mandap.',
      socials: [
        { platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }
      ]
    }
  ];

  /* =========================================================================
     10. COMMITTEE MEMBERS (40 MEMBER PROFILES)
     ========================================================================= */
  readonly committeeMembers: CommitteeMember[] = [
    {
      id: 'mem-1',
      name: 'Rinku Pradhan',
      role: 'President (Sabhapati)',
      category: 'leadership',
      badge: 'President',
      image: 'assets/images/members/17b6e3a5-e19f-43c0-957f-051b0467f546.jpg',
      bio: 'Guiding the STAR BOYS family with inspiring vision, administrative harmony, and deep devotion to Maa Laxmi.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-2',
      name: 'Surendra Sahoo',
      role: 'Working President (Karyakari Sabhapati)',
      category: 'leadership',
      badge: 'Working President',
      image: 'assets/images/members/04f2902c-1eea-4b5f-b956-0d0ba4bb6d6c.jpg',
      bio: 'Overseeing daily ground operations, sub-committee alignments, and government authority liaison.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-3',
      name: 'Gautam Pradhan',
      role: 'Vice President (Upa Sabhapati)',
      category: 'leadership',
      badge: 'Vice President',
      image: 'assets/images/members/e919b0db-c33d-446a-bbf8-1aea8f2933bb.jpg',
      bio: 'Championing community outreach, public relations, and devotee hospitality arrangements.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-4',
      name: 'Akashya Pradhan',
      role: 'Vice President (Upa Sabhapati)',
      category: 'leadership',
      badge: 'Vice President',
      image: 'assets/images/members/258557c9-a3f0-4e12-a95b-5c9ffd8faac5.jpg',
      bio: 'Leading the safety protocols, volunteer management, and visitor queue arrangements.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-5',
      name: 'Babuli Pradhan',
      role: 'General Secretary (Sadharana Sampadaka)',
      category: 'leadership',
      badge: 'General Secretary',
      image: 'assets/images/members/secretary.jpg',
      bio: 'Master planner for festival schedules, meeting minutes, administrative approvals, and event continuity.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-6',
      name: 'Satru Sahoo',
      role: 'Joint Secretary (Sahakari Sampadaka)',
      category: 'leadership',
      badge: 'Joint Secretary',
      image: 'assets/images/members/86839225-291d-415a-b92d-9649b5abe6d6.jpg',
      bio: 'Assisting in administrative coordination, communications, and logistical follow-ups.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-7',
      name: 'Chagli Pradhan',
      role: 'Joint Secretary (Sahakari Sampadaka)',
      category: 'leadership',
      badge: 'Joint Secretary',
      image: 'assets/images/members/3930a0df-599e-4017-b0e8-aecf04957185.jpg',
      bio: 'Coordinating cultural evening artists, sound schedules, and youth wing deployments.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-8',
      name: 'Satyananda Sahoo',
      role: 'Treasurer & Finance Lead (Kosadhyaksha)',
      category: 'seva',
      badge: 'Treasurer',
      image: 'assets/images/members/8f8b4bf6-731e-43c8-a342-4a95373730ee.jpg',
      bio: 'Managing festival funds, donation receipts, vendor disbursements with transparent accounting.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-9',
      name: 'Manas Sahoo',
      role: 'Assistant Cashier (Sahakari Kosadhyaksha)',
      category: 'seva',
      badge: 'Asst. Cashier',
      image: 'assets/images/members/428ab165-7e63-42b7-92f1-249ec8c67b00.jpg',
      bio: 'Maintaining daily ledger accounts, receipt book tracking, and prasad fund records.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-10',
      name: 'Shrikant Pradhan',
      role: 'Chief Advisor (Mukhya Paramarsadata)',
      category: 'advisor',
      badge: 'Chief Advisor',
      image: 'assets/images/members/ab68d95e-acb0-4d6e-a879-0570900b49aa.jpg',
      bio: 'Veteran community elder advising on Vedic rituals, community harmony, and long-term legacy.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-11',
      name: 'Sahadaba Pradhan',
      role: 'Senior Advisor (Baristha Paramarsadata)',
      category: 'advisor',
      badge: 'Senior Advisor',
      image: 'assets/images/members/advisor2.jpg',
      bio: 'Guiding festival traditions, community peace, and youth mentorship for over 16 years.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-12',
      name: 'Situ Sahoo',
      role: 'Advisory Board Member',
      category: 'advisor',
      badge: 'Advisory Board',
      image: 'assets/images/members/advisor3.jpg',
      bio: 'Providing strategic counsel for festival security, civic coordination, and VIP protocol.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-13',
      name: 'Ashish Pradhan',
      role: 'Advisory Board Member',
      category: 'advisor',
      badge: 'Advisory Board',
      image: 'assets/images/members/advisor4.jpg',
      bio: 'Advising on cultural programs, traditional Odia music preservation, and local engagement.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-14',
      name: 'Ranu Sahoo',
      role: 'Pandal & Mandap Incharge',
      category: 'organizer',
      badge: 'Pandal Incharge',
      image: 'assets/images/members/pandal-lead.jpg',
      bio: 'Supervising the grand architectural pandal erection, safety clearances, and artisan works.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-15',
      name: 'Siku Pradhan',
      role: 'Light & Sound Coordinator',
      category: 'organizer',
      badge: 'Light & Sound',
      image: 'assets/images/members/light-lead.jpg',
      bio: 'Curating dynamic festive illumination, roadway arches, and high-fidelity sound systems.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-16',
      name: 'Bijesh Sahoo',
      role: 'Stage & Cultural Secretary',
      category: 'organizer',
      badge: 'Cultural Secretary',
      image: 'assets/images/members/cultural-lead.jpg',
      bio: 'Organizing Bhajan Sandhya, devotional music nights, and children talent competitions.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-17',
      name: 'Kanha Sahoo',
      role: 'Maha Prasad & Bhog Coordinator',
      category: 'seva',
      badge: 'Maha Prasad Seva',
      image: 'assets/images/members/bhog-lead.jpg',
      bio: 'Organizing hygienic cooking and holy distribution of Khichdi, Kheeri, and Anna Mahaprasad.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-18',
      name: 'Kalia Sahoo',
      role: 'Prasad Seva Incharge',
      category: 'seva',
      badge: 'Prasad Seva',
      image: 'assets/images/members/prasad-lead.jpg',
      bio: 'Ensuring seamless distribution of dry bhog, fruits, and pushpanjali offerings to thousands of devotees.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-19',
      name: 'Sibu Sahoo',
      role: 'Volunteer Captain & Discipline Lead',
      category: 'organizer',
      badge: 'Volunteer Captain',
      image: 'assets/images/members/volunteer-capt.jpg',
      bio: 'Mobilizing and directing 100+ youth volunteers across queues, entry gates, and darshan lines.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-20',
      name: 'Babu Biswal',
      role: 'Security & Crowd Management',
      category: 'organizer',
      badge: 'Security Lead',
      image: 'assets/images/members/security-lead.jpg',
      bio: 'Coordinating with local police, private security, CCTV surveillance, and fire safety systems.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-21',
      name: 'Mukul Sahoo',
      role: 'Public Relations (PR) & Media Incharge',
      category: 'organizer',
      badge: 'PR & Media',
      image: 'assets/images/members/090a7fad-7bf6-4a77-b9aa-0c03a600c87e.jpg',
      bio: 'Managing print press releases, television coverage, and dignitary reception at the mandap.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-22',
      name: 'Siri Pradhan',
      role: 'Floral Decoration & Jhoti Lead',
      category: 'organizer',
      badge: 'Decoration Lead',
      image: 'assets/images/members/decor-lead.jpg',
      bio: 'Designing traditional Odia Alpona/Jhoti floor art and fragrant flower garlands for Maa Laxmi.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-23',
      name: 'Ajaya Pradhan',
      role: 'Puja Samagri & Ritual Assistant',
      category: 'seva',
      badge: 'Puja Samagri',
      image: 'assets/images/members/samagri-lead.jpg',
      bio: 'Procuring 108 fresh lotuses, pure ghee, chandan, bilva leaves, and Vedic homa samagri.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-24',
      name: 'Sankar Pradhan',
      role: 'Cultural Night Manager',
      category: 'organizer',
      badge: 'Stage Manager',
      image: 'assets/images/members/stage-manager.jpg',
      bio: 'Coordinating stage schedules, felicitations, and artist hospitality during the festival.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-25',
      name: 'Dilu Sahoo',
      role: 'Reception & Guest Relations',
      category: 'leadership',
      badge: 'Reception Lead',
      image: 'assets/images/members/guest-lead.jpg',
      bio: 'Welcoming VIPs, community leaders, and visiting committees with warm Odia hospitality.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-26',
      name: 'Suman Sahoo',
      role: 'Youth Brigade Leader',
      category: 'youth',
      badge: 'Youth Wing',
      image: 'assets/images/members/18aca2a2-acb1-43bc-bbee-5b885c5cdc96.jpg',
      bio: 'Inspiring and coordinating the energy of School Sahi youth for seamless festival seva.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-27',
      name: 'Suman Sahoo',
      role: 'Youth Coordinator',
      category: 'youth',
      badge: 'Youth Wing',
      image: 'assets/images/members/youth-lead2.jpg',
      bio: 'Organizing youth volunteers across pandal maintenance, gate control, and visitor support.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-28',
      name: 'Amit sahoo',
      role: 'Logistics & Transport Incharge',
      category: 'organizer',
      badge: 'Logistics Lead',
      image: 'assets/images/members/fe6f1ae1-7cfd-49b6-b58b-4ca3e86a99d1.jpg',
      bio: 'Managing vehicle logistics, material transport, and emergency transit arrangements.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-29',
      name: 'Dablu sahoo',
      role: 'Vedic Aarti Seva Incharge',
      category: 'seva',
      badge: 'Aarti Seva',
      image: 'assets/images/members/12aee478-8bf7-496b-9503-71bac369455d.jpg',
      bio: 'Arranging grand 108-diya aarti, camphor lamps, and holy bells for the evening sandhya aarti.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-30',
      name: 'Gudu',
      role: 'Community Seva Volunteer Lead',
      category: 'seva',
      badge: 'Social Seva',
      image: 'assets/images/members/8e32dda0-5c72-4252-b3e7-5390eba4fd16.jpg',
      bio: 'Facilitating wheel-chair access, drinking water kiosks, and medical first-aid desks.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-31',
      name: 'Udhaba Pradhan',
      role: 'Generator & Power Backup Incharge',
      category: 'organizer',
      badge: 'Power Systems',
      image: 'assets/images/members/cb76ead5-7e1f-49be-be7d-b44a5acbc2da.jpg',
      bio: 'Ensuring 24x7 uninterrupted silent generator power supply for pandal and roadway lights.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-32',
      name: 'Sipun Sahoo',
      role: 'Electrical & Lighting Supervisor',
      category: 'organizer',
      badge: 'Electricals',
      image: 'assets/images/members/electric-lead.jpg',
      bio: 'Directing complex animated LED lighting arches and decorative chandelier installations.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-33',
      name: 'Hagru Pradhan',
      role: 'Food & Refreshments Incharge',
      category: 'seva',
      badge: 'Food Seva',
      image: 'assets/images/members/food-lead.jpg',
      bio: 'Supervising water stations, volunteer food packs, and tea stalls during late night shifts.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-34',
      name: 'Himansu Behera',
      role: 'Youth Volunteer Commander',
      category: 'youth',
      badge: 'Youth Wing',
      image: 'assets/images/members/462d2f32-a010-43db-9703-80ee39bddfab.jpg',
      bio: 'Supervising the volunteer team for orderly darshan queues and pushpanjali batches.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-35',
      name: 'Raja Sahoo',
      role: 'Social Outreach & Volunteer',
      category: 'youth',
      badge: 'Youth Wing',
      image: 'assets/images/members/youth-outreach.jpg',
      bio: 'Assisting in local flyer distribution, elder devotee guidance, and seva activities.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-36',
      name: 'Sandeep Pradhan',
      role: 'Devotee Queue & Assistance Incharge',
      category: 'organizer',
      badge: 'Devotee Seva',
      image: 'assets/images/members/2ef07b64-fce0-433d-bc16-18c6ffa6ba8f.jpg',
      bio: 'Guiding women, children, and elderly devotees for smooth and serene darshan.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-37',
      name: 'Babu Swain',
      role: 'Procurement & Supplies Incharge',
      category: 'seva',
      badge: 'Supplies Lead',
      image: 'assets/images/members/WhatsApp Image 2026-08-23 at 9.18.42 PM.jpeg',
      bio: 'Handling grocery, flower, and tentage inventory for all festival operations.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-38',
      name: 'Jagannath Behera',
      role: 'Cultural Events Assistant',
      category: 'youth',
      badge: 'Youth Wing',
      image: 'assets/images/members/dfg.jpg',
      bio: 'Coordinating microphones, audio tracks, and green-room arrangements for performers.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-39',
      name: 'Suman Kumar Sahoo',
      role: 'to be updated',
      category: 'organizer',
      badge: 'Art & Decor',
      image: 'assets/images/members/art-lead.jpg',
      bio: 'Maintaining the aesthetics, cleanliness, and structural integrity of the puja mandap.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-40',
      name: 'Pinku',
      role: 'Executive Volunteer & Immersion Lead',
      category: 'youth',
      badge: 'Youth Wing',
      image: 'assets/images/members/immersion-lead.jpg',
      bio: 'Leading the grand Visarjan Bhasani procession, flower shower carts, and brass band coordinators.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    }
  ];

  /* =========================================================================
     11. DEVELOPER INFORMATION
     ========================================================================= */
  readonly developerInfo: DeveloperInfo = {
    name: 'Ashatush Sahoo',
    role: 'Angular Web Developer & UI/UX Craftsman',
    subtitle: 'Crafted with ❤️ & Devotion for STAR BOYS Laxmi Puja Committee, School Sahi, Ghantapada, Talcher',
    bio: 'Passionate frontend engineer dedicated to creating high-performance, accessible, and culturally rich digital experiences. Engineered using Angular 19 standalone architecture, SCSS, and modern responsive design.',
    avatarImage: 'assets/images/developer/developer.jpg',
    email: 'ashatushsahoo786@gmail.com',
    portfolioUrl: 'https://github.com/ashatushsahoo',
    githubUrl: 'https://github.com/ashatushsahoo',
    linkedinUrl: 'https://linkedin.com/in/ashatushsahoo',
    techStack: ['Angular 19', 'TypeScript', 'SCSS', 'HTML5', 'Standalone Components', 'Canvas Particles', 'Responsive Grid']
  };

  /* Helper getters for components */
  getCommitteeInfo() {
    return this.committeeInfo;
  }

  getAboutContent() {
    return this.aboutContent;
  }

  getLegacyItems() {
    return this.legacyItems;
  }

  getLegacyMemories() {
    return this.legacyMemories;
  }

  getPujaEventConfig() {
    return this.pujaEvent;
  }

  getEventSchedule() {
    return this.eventSchedule;
  }

  getPastEvents() {
    return this.pastEvents;
  }

  getGalleryItems() {
    return this.galleryItems;
  }

  getKartaMembers() {
    return this.kartaMembers;
  }

  getTechMembers() {
    return this.techMembers;
  }

  getCommitteeMembers() {
    return this.committeeMembers;
  }

  getDeveloperInfo() {
    return this.developerInfo;
  }
}
