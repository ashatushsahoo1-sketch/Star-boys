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
    establishedYear: '2010',
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
      { count: '22+', label: 'Glorious Years of Legacy' },
      { count: '10000+', label: 'Devotees Welcomed Annually' },
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
     3. LEGACY TIMELINE (2010 - 2026)
     ========================================================================= */
  readonly legacyItems: LegacyMilestone[] = [
    {
      year: '2004',
      title: 'The Beginning',
      tagline: 'A Spark of Devotion & Brotherhood',
      description: 'STAR BOYS began its glorious journey with a small group of enthusiastic youths who came together with empty pockets but hearts full of devotion to install our first Maa Laxmi Puja mandap.',
      image: 'assets/images/legacy/2004.jpg',
      highlights: ['First sacred kalash sthapana', 'Modest bamboo & fabric pandal', '20 founding youth members']
    },
    {
      year: '2007',
      title: 'Growing Together',
      tagline: 'Community Embraces the Vision',
      description: 'Over the years, the celebration expanded with overwhelming love and participation from the entire neighborhood. Grand lighting gates and traditional bhajan nights were introduced.',
      image: 'assets/images/legacy/2007.jpg',
      highlights: ['First decorative illuminated gate', 'Community Anna Prasad distribution', 'Folk dance & Odissi night']
    },
    {
      year: '2016',
      title: 'A New Chapter',
      tagline: 'Artistic Excellence & Social Impact',
      description: 'STAR BOYS scaled new heights with magnificent architectural pandal replicas, introducing social blood donation camps, blanket drives, and vibrant inter-school cultural contests.',
      image: 'assets/images/legacy/2016.jpg',
      highlights: ['Theme-based eco-friendly idol', 'Annual charity & blood drive launch', '5-day mega festival format']
    },
    {
      year: '2020',
      title: 'Together Through Challenges',
      tagline: 'Devotion Unbroken by Adversity',
      description: 'Even during challenging global times, the flame of faith and brotherhood burned bright. We conducted disciplined rituals with live broadcasts and delivered prasad to hundreds of doorsteps.',
      image: 'assets/images/legacy/2020.jpg',
      highlights: ['Digital live darshan for devotees', 'Doorstep prasad delivery seva', 'Essential food relief distribution']
    },
    {
      year: '2023',
      title: 'A Celebration of Tradition',
      tagline: 'Passing the Torch to New Generations',
      description: 'New energetic youths joined hands with veteran founders, blending modern digital creativity with sacred time-honored rituals, creating our most magnificent golden idol showcase yet.',
      image: 'assets/images/legacy/2023.jpg',
      highlights: ['30-ft Grand Golden Temple Facade', 'Symphonic Bhajan & Light spectacle', 'Over 12,000 visitors in 4 days']
    },
    {
      year: '2026',
      title: 'The Journey Continues',
      tagline: '16 Years of Unmatched Glory',
      description: 'STAR BOYS steps into 2026 with unyielding faith, lifelong friendship, rich cultural pride, and renewed commitment to make this year’s Laxmi Puja the most spiritually uplifting milestone yet.',
      image: 'assets/images/legacy/2026.jpg',
      highlights: ['Grand 16-Year Celebration Pandal', 'Digital Heritage Archiving', 'Expanded Youth & Women Cultural Wings']
    }
  ];

  /* =========================================================================
     4. LEGACY MEMORIES / GALLERY PREVIEW
     ========================================================================= */
  readonly legacyMemories: LegacyMemory[] = [
    {
      id: 'mem-1',
      year: '2010',
      title: 'The Humble First Darshan',
      image: 'assets/images/legacy/mem-2010.jpg',
      caption: 'The founding members performing the inaugural Maha Aarti with clay diyas.'
    },
    {
      id: 'mem-2',
      year: '2013',
      title: 'First Mega Prasad Seva',
      image: 'assets/images/legacy/mem-2013.jpg',
      caption: 'Serving thousands of devotees hot Khichdi and Kheer prasad with pure joy.'
    },
    {
      id: 'mem-3',
      year: '2016',
      title: 'Artisans Crafting the Pandal',
      image: 'assets/images/legacy/mem-2016.jpg',
      caption: 'Master artisans creating intricate Odia wooden filigree and golden arches.'
    },
    {
      id: 'mem-4',
      year: '2020',
      title: 'Quiet Faith & Eternal Bond',
      image: 'assets/images/legacy/mem-2020.jpg',
      caption: 'Maintaining the uninterrupted sacred diya rituals with heartfelt prayers for global healing.'
    },
    {
      id: 'mem-5',
      year: '2023',
      title: 'Golden Dazzle & Night Aarti',
      image: 'assets/images/legacy/mem-2023.jpg',
      caption: 'The majestic night glow of Maa Laxmi surrounded by thousand glittering diyas.'
    },
    {
      id: 'mem-6',
      year: '2025',
      title: 'Youth Brigade in Action',
      image: 'assets/images/legacy/mem-2025.jpg',
      caption: 'STAR BOYS members united in traditional attire during the grand pushpanjali.'
    }
  ];

  /* =========================================================================
     5. UPCOMING LAXMI PUJA 2026 EVENT CONFIGURATION
     (Change this targetDate anytime to automatically update countdown!)
     ========================================================================= */
  readonly pujaEvent: PujaEventConfig = {
    title: 'MAA LAXMI PUJA 2026',
    subTitle: '16th Annual Grand Celebration',
    year: '2026',
    // Set target date (ISO format). Example: 2026-10-25 at 18:00 (Kumar Purnima evening)
    targetDate: '2026-10-25T18:00:00',
    displayDate: 'October 25, 2026 (Kumar Purnima)',
    location: 'School Sahi, Ghantapada, Talcher, Odisha',
    venueMapUrl: 'https://maps.google.com/?q=School+Sahi+Ghantapada+Talcher+Odisha',
    description: 'Join STAR BOYS for our 16th annual grand Laxmi Puja celebration at School Sahi, Ghantapada, Talcher. Experience divine darshan of Maa Laxmi, majestic pandal lighting, soul-stirring Vedic bhajans, grand Pushpanjali, and sumptuous Mahaprasad.',
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
      title: 'Laxmi Puja 2025: Swarna Mandap',
      theme: 'Theme: Golden Temple of Devotion',
      coverImage: 'assets/images/events/past-2025.jpg',
      description: 'A breathtaking 4-day extravaganza featuring a 35-foot replica of the Konark Sun Temple sanctum and 14,000+ devotees.',
      attendeesCount: '14,000+ Devotees',
      highlightText: 'Grand Sandhya Aarti & Fireworks'
    },
    {
      year: '2024',
      title: 'Laxmi Puja 2024: Lotus Divine',
      theme: 'Theme: Sahasradala Padma',
      coverImage: 'assets/images/events/past-2024.jpg',
      description: 'An eco-friendly pandal handcrafted from bamboo, jute, and thousands of fresh pink lotus blooms from Chilika.',
      attendeesCount: '12,500+ Devotees',
      highlightText: 'Classical Odissi Dance Recital'
    },
    {
      year: '2023',
      title: 'Laxmi Puja 2023: Vedic Glow',
      theme: 'Theme: Ancient Vedic Chants',
      coverImage: 'assets/images/events/past-2023.jpg',
      description: 'Illuminated by over 5,000 brass lamps and mesmerizing light tunnels along the entire avenue.',
      attendeesCount: '11,000+ Devotees',
      highlightText: 'Mega Community Anna Seva'
    },
    {
      year: '2022',
      title: 'Laxmi Puja 2022: Reborn Spirit',
      theme: 'Theme: Harmony & Unity',
      coverImage: 'assets/images/events/past-2022.jpg',
      description: 'A historic comeback after the pandemic with unprecedented fervor, devotional fervor, and massive youth participation.',
      attendeesCount: '10,000+ Devotees',
      highlightText: 'Folk Sambalpuri Night'
    }
  ];

  /* =========================================================================
     8. PHOTO GALLERY (FILTERABLE CATEGORIES)
     ========================================================================= */
  readonly galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Divya Maa Laxmi Darshan',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/gallery/puja-1.jpg',
      year: '2025',
      description: 'Close-up darshan of Maa Laxmi adorned in pure silk, golden ornaments, and fresh lotus garland.'
    },
    {
      id: 'gal-2',
      title: '108 Diyas Sandhya Maha Aarti',
      category: 'puja',
      categoryLabel: 'Puja & Rituals',
      image: 'assets/images/gallery/puja-2.jpg',
      year: '2025',
      description: 'Priests performing the grand twilight aarti with sacred conch blowing and chanting.'
    },
    {
      id: 'gal-3',
      title: 'Golden Arch Pandal Entrance',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/gallery/dec-1.jpg',
      year: '2025',
      description: 'Illuminated entryway with intricate Odia jhoti motifs and cascading golden LED curtains.'
    },
    {
      id: 'gal-4',
      title: 'Handcrafted Lotus Sanctum',
      category: 'decoration',
      categoryLabel: 'Decoration & Lighting',
      image: 'assets/images/gallery/dec-2.jpg',
      year: '2024',
      description: 'Artisans shaping the monumental lotus sanctum using eco-friendly natural materials.'
    },
    {
      id: 'gal-5',
      title: 'Devotional Bhajan Sandhya',
      category: 'cultural',
      categoryLabel: 'Cultural Programs',
      image: 'assets/images/gallery/cult-1.jpg',
      year: '2025',
      description: 'Renowned vocalists singing soul-stirring Odia Jananas and Laxmi Vandanas under the starry sky.'
    },
    {
      id: 'gal-6',
      title: 'Classical Odissi Dance Recital',
      category: 'cultural',
      categoryLabel: 'Cultural Programs',
      image: 'assets/images/gallery/cult-2.jpg',
      year: '2024',
      description: 'Graceful dancers depicting Dashavatara and Maa Laxmi\'s arrival on Earth.'
    },
    {
      id: 'gal-7',
      title: 'Community Mahaprasad Seva',
      category: 'community',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/gallery/comm-1.jpg',
      year: '2025',
      description: 'Volunteers serving hot prasad with love and devotion to thousands of smiling visitors.'
    },
    {
      id: 'gal-8',
      title: 'Youth Volunteer Camp',
      category: 'community',
      categoryLabel: 'Community & Seva',
      image: 'assets/images/gallery/comm-2.jpg',
      year: '2025',
      description: 'STAR BOYS brigade coordinating crowd safety, elder assistance, and health camp services.'
    },
    {
      id: 'gal-9',
      title: 'Brotherhood Through The Decades',
      category: 'memories',
      categoryLabel: 'Nostalgic Memories',
      image: 'assets/images/gallery/mem-1.jpg',
      year: '2018',
      description: 'Founders and young volunteers capturing a candid moment of pure joy after the grand aarti.'
    },
    {
      id: 'gal-10',
      title: 'Visarjan Sobhayatra Carnival',
      category: 'memories',
      categoryLabel: 'Nostalgic Memories',
      image: 'assets/images/gallery/mem-2.jpg',
      year: '2023',
      description: 'Joyful immersion procession accompanied by Dulduli drums, cymbals, and flower showers.'
    }
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
      image: 'assets/images/members/karta-1.jpg',
      bio: 'Leading the sacred Sankalpa, Ghat Sthapana, and Vedic Sodashopachara Puja of Maa Laxmi on behalf of all devotees and the STAR BOYS family.',
      phone: '+91 97786 69092',
      socials: [
        { platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }
      ]
    },
    {
      id: 'karta-2',
      name: 'Shri Ramachandra sahoo',
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
      name: 'Suman Sahoo',
      role: 'Sound, Visuals & Tech Coordinator',
      category: 'tech',
      badge: 'Audio/Visuals',
      image: 'assets/images/members/tech-4.jpg',
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
      image: 'assets/images/members/president.jpg',
      bio: 'Guiding the STAR BOYS family with inspiring vision, administrative harmony, and deep devotion to Maa Laxmi.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-2',
      name: 'Satyananda Sahoo',
      role: 'Working President (Karyakari Sabhapati)',
      category: 'leadership',
      badge: 'Working President',
      image: 'assets/images/members/vp1.jpg',
      bio: 'Overseeing daily ground operations, sub-committee alignments, and government authority liaison.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-3',
      name: 'Gautam Pradhan',
      role: 'Vice President (Upa Sabhapati)',
      category: 'leadership',
      badge: 'Vice President',
      image: 'assets/images/members/vp2.jpg',
      bio: 'Championing community outreach, public relations, and devotee hospitality arrangements.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-4',
      name: 'Akashya Pradhan',
      role: 'Vice President (Upa Sabhapati)',
      category: 'leadership',
      badge: 'Vice President',
      image: 'assets/images/members/vp3.jpg',
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
      image: 'assets/images/members/joint-sec1.jpg',
      bio: 'Assisting in administrative coordination, communications, and logistical follow-ups.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-7',
      name: 'Chagli Pradhan',
      role: 'Joint Secretary (Sahakari Sampadaka)',
      category: 'leadership',
      badge: 'Joint Secretary',
      image: 'assets/images/members/joint-sec2.jpg',
      bio: 'Coordinating cultural evening artists, sound schedules, and youth wing deployments.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-8',
      name: 'Surendra Sahoo',
      role: 'Treasurer & Finance Lead (Kosadhyaksha)',
      category: 'seva',
      badge: 'Treasurer',
      image: 'assets/images/members/treasurer.jpg',
      bio: 'Managing festival funds, donation receipts, vendor disbursements with transparent accounting.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-9',
      name: 'Manas Sahoo',
      role: 'Assistant Cashier (Sahakari Kosadhyaksha)',
      category: 'seva',
      badge: 'Asst. Cashier',
      image: 'assets/images/members/cashier.jpg',
      bio: 'Maintaining daily ledger accounts, receipt book tracking, and prasad fund records.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-10',
      name: 'Shrikant Pradhan',
      role: 'Chief Advisor (Mukhya Paramarsadata)',
      category: 'advisor',
      badge: 'Chief Advisor',
      image: 'assets/images/members/advisor1.jpg',
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
      image: 'assets/images/members/pr-lead.jpg',
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
      image: 'assets/images/members/youth-lead1.jpg',
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
      image: 'assets/images/members/logistics-lead.jpg',
      bio: 'Managing vehicle logistics, material transport, and emergency transit arrangements.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-29',
      name: 'Dabliu sahoo',
      role: 'Vedic Aarti Seva Incharge',
      category: 'seva',
      badge: 'Aarti Seva',
      image: 'assets/images/members/aarti-lead.jpg',
      bio: 'Arranging grand 108-diya aarti, camphor lamps, and holy bells for the evening sandhya aarti.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-30',
      name: 'Gudu',
      role: 'Community Seva Volunteer Lead',
      category: 'seva',
      badge: 'Social Seva',
      image: 'assets/images/members/seva-lead.jpg',
      bio: 'Facilitating wheel-chair access, drinking water kiosks, and medical first-aid desks.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-31',
      name: 'Udhaba Pradhan',
      role: 'Generator & Power Backup Incharge',
      category: 'organizer',
      badge: 'Power Systems',
      image: 'assets/images/members/power-lead.jpg',
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
      image: 'assets/images/members/youth-cmd.jpg',
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
      image: 'assets/images/members/queue-lead.jpg',
      bio: 'Guiding women, children, and elderly devotees for smooth and serene darshan.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-37',
      name: 'Babaji',
      role: 'Procurement & Supplies Incharge',
      category: 'seva',
      badge: 'Supplies Lead',
      image: 'assets/images/members/supplies-lead.jpg',
      bio: 'Handling grocery, flower, and tentage inventory for all festival operations.',
      socials: [{ platform: 'phone', url: 'tel:+919778669092', icon: 'fa-solid fa-phone', label: 'Call' }]
    },
    {
      id: 'mem-38',
      name: 'Jagannath Behera',
      role: 'Cultural Events Assistant',
      category: 'youth',
      badge: 'Youth Wing',
      image: 'assets/images/members/cultural-asst.jpg',
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
      name: 'to be updated',
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
