// High quality curated Unsplash images for fitness club

export const clubStats = [
  { value: '15,000+', label: 'Active Members', description: 'Transforming lives worldwide' },
  { value: '50+', label: 'Elite Trainers', description: 'Certified & Olympic-grade' },
  { value: '75+', label: 'Weekly Classes', description: 'High-intensity to recovery' },
  { value: '99.2%', label: 'Success Rate', description: 'Goal achievement guaranteed' }
];

export const programsData = [
  {
    id: 'bodybuilding',
    title: 'Bodybuilding & Hypertrophy',
    category: 'Strength',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
    description: 'Sculpt your physique with advanced progressive overload, hypertrophy training, and biomechanically optimal isolation exercises.',
    benefits: ['Targeted muscle hypertrophy', 'Periodized strength cycles', 'Form optimization & injury prevention', 'Nutritional timing guidance'],
    intensity: 'High',
    duration: '60 - 75 Mins',
    calories: '600 - 800 kcal',
    target: 'Intermediate to Advanced lifters'
  },
  {
    id: 'weight-training',
    title: 'Strength & Powerlifting',
    category: 'Strength',
    tag: 'Core Discipline',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    description: 'Master the fundamental compound lifts: Squat, Bench Press, and Deadlift. Build unshakeable raw power and dense connective tissue.',
    benefits: ['Maximal 1RM strength progression', 'Central nervous system adaptation', 'Olympic lifting platform access', 'Barbell velocity tracking'],
    intensity: 'Very High',
    duration: '75 Mins',
    calories: '550 - 750 kcal',
    target: 'All strength enthusiasts'
  },
  {
    id: 'cardio-training',
    title: 'Cardio & HIIT Conditioning',
    category: 'Cardio',
    tag: 'High Energy',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80',
    description: 'Push your aerobic threshold and VO2 Max with high-octane intervals, curved treadmills, air bikes, and sled sprints.',
    benefits: ['Elevated cardiovascular stamina', 'EPOC afterburn calorie deficit', 'Dynamic athletic agility', 'Heart-rate zone monitoring'],
    intensity: 'Maximum',
    duration: '45 - 50 Mins',
    calories: '700 - 950 kcal',
    target: 'Fat loss & endurance builders'
  },
  {
    id: 'crossfit',
    title: 'CrossFit & Functional Fitness',
    category: 'Functional',
    tag: 'Intense Community',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
    description: 'Constantly varied, functional movements executed at high intensity. Combine gymnastics, plyometrics, kettlebells, and barbell conditioning.',
    benefits: ['All-round athletic readiness', 'Community camaraderie & team workouts', 'Core stability & mobility', 'Weekly WOD challenges'],
    intensity: 'Very High',
    duration: '60 Mins',
    calories: '650 - 850 kcal',
    target: 'Performance seekers'
  },
  {
    id: 'yoga',
    title: 'Power Yoga & Mobility',
    category: 'Recovery',
    tag: 'Mind & Body',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    description: 'Restore joint health, lengthen tight muscle chains, and enhance mental fortitude with vinyasa flows, myofascial release, and breathwork.',
    benefits: ['Deep joint decompression', 'Flexibility & postural correction', 'Stress reduction & lower cortisol', 'Active muscular recovery'],
    intensity: 'Moderate',
    duration: '60 Mins',
    calories: '250 - 400 kcal',
    target: 'All athletes & wellness seekers'
  },
  {
    id: 'personal-training',
    title: '1-on-1 Elite Personal Training',
    category: 'Custom',
    tag: 'VIP Coaching',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    description: 'Private 1-on-1 coaching customized to your exact genetics, goals, and schedule. Includes 3D body scans, custom nutrition, and direct 24/7 coach messaging.',
    benefits: ['100% personalized progression map', 'Weekly InBody body composition scan', 'Tailored macro & micronutrient protocol', 'Real-time form critique & spotter support'],
    intensity: 'Tailored to Goal',
    duration: '60 Mins',
    calories: '500 - 900 kcal',
    target: 'Those demanding fastest results'
  }
];

export const trainersData = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Strength & Bodybuilding',
    experience: '12+ Years Experience',
    certifications: ['IFBB Pro Athlete', 'CSCS Certified', 'Precision Nutrition L2'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    bio: 'Former collegiate decathlete and IFBB competitive bodybuilder specializing in biomechanics, muscle hypertrophy, and contest prep.',
    specialty: 'Hypertrophy & Contest Prep',
    socials: { instagram: '#', linkedin: '#', twitter: '#' }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Master CrossFit & Olympic Lifting Coach',
    experience: '9+ Years Experience',
    certifications: ['CrossFit Level 3 (CCFT)', 'USA Weightlifting L2', 'NASM-CPT'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    bio: 'Regional CrossFit Games competitor with an uncompromising passion for barbell technique, explosive speed, and mental tenacity.',
    specialty: 'Olympic Barbell & Functional Conditioning',
    socials: { instagram: '#', linkedin: '#', twitter: '#' }
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Cardio & HIIT Performance Director',
    experience: '8+ Years Experience',
    certifications: ['ACSM Certified Exercise Physiologist', 'TRX Senior Coach', 'Kettlebell Master'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    bio: 'Specialist in metabolic conditioning, athletic speed work, and cardiovascular efficiency for endurance athletes and fat loss.',
    specialty: 'VO2 Max & Athletic Agility',
    socials: { instagram: '#', linkedin: '#', twitter: '#' }
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Lead Yoga & Movement Specialist',
    experience: '10+ Years Experience',
    certifications: ['E-RYT 500 Yoga Alliance', 'Functional Movement Screen (FMS)', 'MobilityWOD Certified'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    bio: 'Dedicated to helping heavy lifters and everyday athletes restore full kinetic chain mobility, balance autonomic nervous systems, and prevent injuries.',
    specialty: 'Kinetic Mobility & Recovery',
    socials: { instagram: '#', linkedin: '#', twitter: '#' }
  },
  {
    id: 'tariq-al-mansoor',
    name: 'Tariq Al-Mansoor',
    role: 'Senior Combat & Conditioning Coach',
    experience: '11+ Years Experience',
    certifications: ['Golden Gloves Boxing Coach', 'Muay Thai Specialist', 'ACE-CPT'],
    image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=80',
    bio: 'Former professional striking coach blending pugilistic footwork, heavy bag power intervals, and functional athletic conditioning.',
    specialty: 'Striking & Fight Conditioning',
    socials: { instagram: '#', linkedin: '#', twitter: '#' }
  },
  {
    id: 'chloe-armstrong',
    name: 'Chloe Armstrong',
    role: 'Biomechanics & Rehabilitation Coach',
    experience: '7+ Years Experience',
    certifications: ['B.S. Kinesiology', 'NASM Corrective Exercise Specialist (CES)', 'Post-Rehab Conditioning'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80',
    bio: 'Bridging the gap between physical therapy and peak performance. Helps members overcome chronic back, shoulder, and knee pain permanently.',
    specialty: 'Corrective Exercise & Injury Rehab',
    socials: { instagram: '#', linkedin: '#', twitter: '#' }
  }
];

export const plansData = [
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'Essential Fitness Access',
    priceMonthly: 49,
    priceAnnual: 39,
    badge: null,
    highlight: false,
    description: 'Perfect for disciplined self-starters seeking full gym floor and machine access.',
    features: [
      'Full Gym Floor & Free Weights Access',
      'Cardio & Functional Training Zones',
      'Locker Rooms & Rain Showers',
      'Complimentary High-Speed Wi-Fi',
      'Free Fitness Club Mobile App',
      'Single Location Access'
    ],
    notIncluded: [
      'Unlimited Group Studio Classes',
      'Sauna, Steam & Cryo Lounge Access',
      'Monthly 1-on-1 Personal Training',
      'Guest Passes'
    ]
  },
  {
    id: 'standard',
    name: 'STANDARD',
    subtitle: 'Most Popular Choice',
    priceMonthly: 89,
    priceAnnual: 69,
    badge: 'MOST POPULAR',
    highlight: true,
    description: 'Our flagship tier for athletes wanting premium classes, recovery amenities, and multi-club freedom.',
    features: [
      'All BASIC Features Included',
      'Unlimited Group Fitness Classes (HIIT, Spin, Yoga)',
      'CrossFit Arena & Turf Zone Access',
      'Finnish Dry Sauna & Steam Room',
      '2 Guest Passes per Month',
      'Free Monthly Body Composition Scan (InBody)',
      'Multi-Club Access (National)'
    ],
    notIncluded: [
      'Dedicated 1-on-1 Monthly PT Session',
      'Private VIP Locker with Laundry'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    subtitle: 'The Ultimate Elite Experience',
    priceMonthly: 149,
    priceAnnual: 119,
    badge: 'ALL INCLUSIVE',
    highlight: false,
    description: 'Uncompromising VIP luxury with dedicated personal coaching, cryotherapy, and full international access.',
    features: [
      'All STANDARD Features Included',
      '2 Monthly 1-on-1 Personal Training Sessions',
      'Unlimited Cryotherapy & Infrared Sauna',
      'Complimentary Protein Shake Bar (Daily)',
      'Unlimited VIP Guest Passes',
      'Private Reserved Locker & Towel Service',
      'Customized Diet & Macro Nutrition Plan',
      'Global All-Club Passport Access'
    ],
    notIncluded: []
  }
];

export const scheduleData = [
  // Monday
  { id: 'm1', day: 'Monday', time: '06:00 AM - 07:00 AM', title: 'Early Rise HIIT Blitz', type: 'Cardio', trainer: 'David Chen', room: 'Arena Studio A', spots: 4 },
  { id: 'm2', day: 'Monday', time: '08:30 AM - 09:45 AM', title: 'Heavy Barbell Compound', type: 'Strength', trainer: 'Marcus Vance', room: 'Iron Vault', spots: 6 },
  { id: 'm3', day: 'Monday', time: '12:00 PM - 01:00 PM', title: 'Power Vinyasa Flow', type: 'Recovery', trainer: 'Sarah Jenkins', room: 'Zen Loft', spots: 8 },
  { id: 'm4', day: 'Monday', time: '05:30 PM - 06:30 PM', title: 'CrossFit WOD: Iron Will', type: 'Functional', trainer: 'Elena Rostova', room: 'The Box', spots: 2 },
  { id: 'm5', day: 'Monday', time: '07:00 PM - 08:00 PM', title: 'Combat Boxing Conditioning', type: 'Combat', trainer: 'Tariq Al-Mansoor', room: 'Ring Zone', spots: 5 },

  // Tuesday
  { id: 't1', day: 'Tuesday', time: '06:30 AM - 07:30 AM', title: 'Cardio Core & Plyo', type: 'Cardio', trainer: 'David Chen', room: 'Arena Studio A', spots: 7 },
  { id: 't2', day: 'Tuesday', time: '10:00 AM - 11:15 AM', title: 'Bodybuilding Hypertrophy: Upper', type: 'Strength', trainer: 'Marcus Vance', room: 'Iron Vault', spots: 5 },
  { id: 't3', day: 'Tuesday', time: '01:00 PM - 02:00 PM', title: 'Mobility & Joint Rehab', type: 'Recovery', trainer: 'Chloe Armstrong', room: 'Zen Loft', spots: 10 },
  { id: 't4', day: 'Tuesday', time: '06:00 PM - 07:00 PM', title: 'Olympic Snatch & Clean Workshop', type: 'Functional', trainer: 'Elena Rostova', room: 'The Box', spots: 3 },
  { id: 't5', day: 'Tuesday', time: '07:30 PM - 08:30 PM', title: 'Candlelight Yin Yoga', type: 'Recovery', trainer: 'Sarah Jenkins', room: 'Zen Loft', spots: 9 },

  // Wednesday
  { id: 'w1', day: 'Wednesday', time: '06:00 AM - 07:00 AM', title: 'VO2 Max Tread & Sled', type: 'Cardio', trainer: 'David Chen', room: 'Arena Studio A', spots: 3 },
  { id: 'w2', day: 'Wednesday', time: '09:00 AM - 10:15 AM', title: 'Deadlift & Posterior Chain', type: 'Strength', trainer: 'Marcus Vance', room: 'Iron Vault', spots: 4 },
  { id: 'w3', day: 'Wednesday', time: '12:00 PM - 01:00 PM', title: 'High-Energy Fight Circuit', type: 'Combat', trainer: 'Tariq Al-Mansoor', room: 'Ring Zone', spots: 6 },
  { id: 'w4', day: 'Wednesday', time: '05:30 PM - 06:45 PM', title: 'CrossFit Hero WOD', type: 'Functional', trainer: 'Elena Rostova', room: 'The Box', spots: 2 },
  { id: 'w5', day: 'Wednesday', time: '07:15 PM - 08:15 PM', title: 'Athletic Stretch & Deep Foam Roll', type: 'Recovery', trainer: 'Chloe Armstrong', room: 'Zen Loft', spots: 8 },

  // Thursday
  { id: 'th1', day: 'Thursday', time: '06:30 AM - 07:30 AM', title: 'Tabata Burn Extreme', type: 'Cardio', trainer: 'David Chen', room: 'Arena Studio A', spots: 5 },
  { id: 'th2', day: 'Thursday', time: '10:00 AM - 11:15 AM', title: 'Squat & Leg Hypertrophy Lab', type: 'Strength', trainer: 'Marcus Vance', room: 'Iron Vault', spots: 4 },
  { id: 'th3', day: 'Thursday', time: '01:00 PM - 02:00 PM', title: 'Desk Worker Posture Correction', type: 'Recovery', trainer: 'Chloe Armstrong', room: 'Zen Loft', spots: 11 },
  { id: 'th4', day: 'Thursday', time: '06:00 PM - 07:00 PM', title: 'Kettlebell Velocity & Core', type: 'Functional', trainer: 'Elena Rostova', room: 'The Box', spots: 4 },
  { id: 'th5', day: 'Thursday', time: '07:30 PM - 08:30 PM', title: 'Muay Thai Clinch & Strike', type: 'Combat', trainer: 'Tariq Al-Mansoor', room: 'Ring Zone', spots: 6 },

  // Friday
  { id: 'f1', day: 'Friday', time: '06:00 AM - 07:00 AM', title: 'Friday Sweat & Sled Rush', type: 'Cardio', trainer: 'David Chen', room: 'Arena Studio A', spots: 2 },
  { id: 'f2', day: 'Friday', time: '09:00 AM - 10:15 AM', title: 'Chest, Delts & Arms Pump', type: 'Strength', trainer: 'Marcus Vance', room: 'Iron Vault', spots: 5 },
  { id: 'f3', day: 'Friday', time: '12:00 PM - 01:00 PM', title: 'Warrior Yoga & Breath Dynamics', type: 'Recovery', trainer: 'Sarah Jenkins', room: 'Zen Loft', spots: 7 },
  { id: 'f4', day: 'Friday', time: '05:30 PM - 06:45 PM', title: 'Team Partner CrossFit Challenge', type: 'Functional', trainer: 'Elena Rostova', room: 'The Box', spots: 3 },
  { id: 'f5', day: 'Friday', time: '07:00 PM - 08:00 PM', title: 'Friday Night Fight Club Sparring', type: 'Combat', trainer: 'Tariq Al-Mansoor', room: 'Ring Zone', spots: 4 },

  // Saturday
  { id: 'sa1', day: 'Saturday', time: '08:00 AM - 09:15 AM', title: 'Weekend Monster WOD', type: 'Functional', trainer: 'Elena Rostova', room: 'The Box', spots: 4 },
  { id: 'sa2', day: 'Saturday', time: '09:45 AM - 11:00 AM', title: 'Masterclass: Olympic Barbell', type: 'Strength', trainer: 'Marcus Vance', room: 'Iron Vault', spots: 5 },
  { id: 'sa3', day: 'Saturday', time: '11:30 AM - 12:30 PM', title: 'Speed & Agility Track Run', type: 'Cardio', trainer: 'David Chen', room: 'Outdoor Track', spots: 8 },
  { id: 'sa4', day: 'Saturday', time: '02:00 PM - 03:15 PM', title: 'Full Body Reset & Hot Sauna Flow', type: 'Recovery', trainer: 'Sarah Jenkins', room: 'Zen Loft & Spa', spots: 6 },

  // Sunday
  { id: 'su1', day: 'Sunday', time: '09:00 AM - 10:15 AM', title: 'Sunday Strongman & Carries', type: 'Functional', trainer: 'Marcus Vance', room: 'Turf Yard', spots: 5 },
  { id: 'su2', day: 'Sunday', time: '10:45 AM - 11:45 AM', title: 'Cardio Enduro Zone 2 Run', type: 'Cardio', trainer: 'David Chen', room: 'Arena Studio A', spots: 10 },
  { id: 'su3', day: 'Sunday', time: '04:00 PM - 05:15 PM', title: 'Deep Tissue Mobility & Sound Healing', type: 'Recovery', trainer: 'Sarah Jenkins', room: 'Zen Loft', spots: 12 }
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Jason Thorne',
    role: 'Member for 2 Years',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'FITNESS CLUB completely changed my life. I dropped 32 lbs of body fat and added 15 lbs of lean muscle under Marcus’s guidance. The vibe here is electric and unlike any commercial gym.',
    stats: '-32 lbs / +15 lbs Muscle',
    rating: 5
  },
  {
    id: 2,
    name: 'Melissa Rodriguez',
    role: 'CrossFit Competitor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'The equipment here is world-class: Eleiko plates, Rogue rigs, and woodway runners. The community pushes you every single day to be the absolute strongest version of yourself.',
    stats: 'CrossFit Games Finalist',
    rating: 5
  },
  {
    id: 3,
    name: 'Alexander Ward',
    role: 'Tech Executive & Marathoner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote: 'As a busy executive, efficiency is everything. The 24/7 access, private cryotherapy, and precision coaching keep my energy levels peak all week long. Worth every penny.',
    stats: 'Sub 3-Hr Marathon PR',
    rating: 5
  }
];

export const clubAmenities = [
  { title: '24/7 VIP Keyless Access', desc: 'Work out on your schedule with biometric entry, 365 days a year.' },
  { title: 'Olympic Lifting Platforms', desc: 'Eleiko bars, competition bumpers, calibrated plates, and chalk bowls.' },
  { title: 'Nordic Spa & Cryo Chamber', desc: 'Finnish saunas, eucalyptus steam rooms, and sub-zero cold plunge tubs.' },
  { title: 'Organic Smoothie & Fuel Bar', desc: 'Cold-pressed juices, grass-fed isolate shakes, and clean energy meals.' },
  { title: 'InBody 770 Composition Scanner', desc: 'Clinical-grade segmental muscle, visceral fat, and water analysis.' },
  { title: 'Luxury Rain Showers & Lockers', desc: 'Full towel service, Dyson hair care, and Malin+Goetz grooming products.' }
];

export const clubFaqs = [
  {
    q: 'Can I test out FITNESS CLUB before committing to a membership?',
    a: 'Absolutely! We offer a complimentary 1-Day All-Access VIP Pass so you can experience our facility, try a group class, and consult with a trainer before choosing a membership.'
  },
  {
    q: 'Are group classes included in the membership?',
    a: 'Yes, both the STANDARD and PREMIUM tiers include unlimited access to all group studio classes, including HIIT, CrossFit, Boxing, and Yoga.'
  },
  {
    q: 'Can I freeze or cancel my membership if I travel or move?',
    a: 'Yes. You can freeze your membership anytime via our mobile app for up to 3 months per year with zero fees. Cancellations require a simple 30-day notice with no hidden penalties.'
  },
  {
    q: 'Do you offer custom nutrition and meal planning?',
    a: 'Yes. Our certified sports nutritionists design custom macronutrient and calorie targets matched to your training schedule and body composition goals.'
  },
  {
    q: 'Is there parking available on-site?',
    a: 'Yes, we provide 3 hours of complimentary secure underground parking for all active members with direct elevator access to our reception floor.'
  }
];

