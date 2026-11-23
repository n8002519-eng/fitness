# FITNESS CLUB - High Performance Fitness Platform

![FITNESS CLUB Banner](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80)

> **"BUILD YOUR STRONGER FUTURE"**  
> A complete, professional, modern fitness club web application built with React, Vite, Tailwind CSS, and Lucide Icons. Designed with an electric neon-accented dark sports aesthetic, high-resolution imagery, and responsive glassmorphism interfaces.

---

## 🌟 Key Features

### 1. 🏋️ Home Page
- **Hero Section**: High-impact athletic imagery, brand slogan (*"BUILD YOUR STRONGER FUTURE"*), call-to-actions, and live key statistics (15,000+ members, 50+ coaches, 75+ weekly classes, 99.2% success rate).
- **Club Advantages**: 24/7 keyless biometric entry, Olympic Eleiko equipment, zero lock-in contracts, and Nordic spa facilities.
- **Featured Disciplines**: Fast-look cards with calories burned, duration, and target audience.
- **Interactive BMI Calculator**: Switch between Metric (cm/kg) and Imperial (ft/in/lbs) with instant zone classification and tailored program recommendation.
- **Member Transformations**: Real member reviews, ratings, and body composition transformation metrics.

### 2. 🏛️ About Us Page
- **Club Genesis & Philosophy**: The story behind our 45,000 sq ft performance destination.
- **Four Core Pillars**: Relentless Progression, Biomechanic Integrity, Brotherhood of Iron, and Complete Recovery.
- **Purpose-Built Facility Zones**: Interactive tour of The Iron Vault, The Box & Turf Yard, The Arena Studio, and Nordic Spa & Recovery Suite.
- **Club Amenities List**: 24/7 keyless access, InBody 770 clinical scanner, cold plunge tubs, organic fuel bar, and luxury rain showers.

### 3. 🎯 Programs Page
- **Filterable Program Catalog**: Filter by category (All, Strength, Cardio, Functional, Recovery, Custom).
- **Detailed Program Cards**:
  - **Bodybuilding & Hypertrophy** (Targeted isolation, progressive overload)
  - **Weight Training & Powerlifting** (Squat, Bench, Deadlift, calibrated plates)
  - **Cardio & HIIT Conditioning** (VO2 Max sprints, Woodway curved runners, sled pushes)
  - **CrossFit & Functional Fitness** (Constantly varied, Olympic lifting, gymnastic rigs)
  - **Power Yoga & Mobility** (Joint decompression, postural restoration, myofascial release)
  - **1-on-1 Elite Personal Training** (Custom genetics mapping, InBody scans, 24/7 coach messaging)
- **Periodization Methodology**: 12-week macrocycle breakdown (Adaptation, Hypertrophy, Peak Strength).

### 4. 🥇 Trainers Page
- **Elite Coaches Roster**: Filterable by specialty (Hypertrophy, Olympic, Cardio, Mobility, Striking).
- **Coach Profiles**: High-resolution portraits, competition credentials, IFBB/CSCS/CrossFit certifications, years of experience, and biography.
- **Interactive Consultation Booking**: Book private 1-on-1 coaching consultations directly from coach cards.
- **The 1% Standard**: Rigorous recruitment standards for degree-holding strength coaches.

### 5. 💎 Membership Page
- **Billing Switch**: Toggle between Monthly and Annual billing (with a 20% annual discount calculation).
- **Three Transparent Tiers**:
  - **BASIC ($49/mo)**: Full gym floor access, cardio/functional zones, locker rooms, mobile app.
  - **STANDARD ($89/mo - Most Popular)**: Unlimited studio classes, CrossFit arena, Finnish sauna, guest passes, monthly InBody scan.
  - **PREMIUM ($149/mo - All Inclusive)**: 2 monthly 1-on-1 PT sessions, unlimited cryotherapy, daily protein shakes, global access.
- **Comprehensive Feature Matrix**: Side-by-side comparison table of all amenities.
- **30-Day Money-Back Guarantee** & Frequently Asked Questions (FAQ).

### 6. 📅 Schedule Page
- **Interactive Weekly Timetable**: Filter by Day of the Week (Monday through Sunday) and Discipline (Strength, Cardio, Functional, Combat, Recovery).
- **Class Detail Cards**: Start/finish times, studio location, instructor name, and real-time remaining slots badge.
- **Interactive Slot Booking**: Direct modal reservation with confirmation.

### 7. 📬 Contact Page
- **Validated Contact Form**: Full Name, Email, Phone, Interest, and Message with real-time error states and success feedback.
- **Club Information**: Phone numbers, email, physical address, and operating hours.
- **Interactive Google Maps Embed**: Dark-mode stylized map locator with member parking guides.

### 8. ⚡ Global Architecture & UX
- **Interactive Join Now Modal**: Multi-step membership enrollment modal with tier selection, goal preferences, and custom Member VIP Pass generation.
- **Class Booking Modal**: Reserve spots in any scheduled class.
- **Mobile Responsive Drawer**: Smooth slide-in navigation for mobile and tablet screens.
- **Back-to-Top Floating Button**: Smooth scroll with glowing neon hover.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Montserrat (Headings) & Inter (Body) via Google Fonts
- **Deployment Ready**: Optimized for [Vercel](https://vercel.com/) with `vercel.json` SPA routing

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Clone or navigate to the repository
cd FITNESS

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to preview the website.

### 4. Build for Production
```bash
npm run build
```
The optimized production build will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📦 Project Structure

```
FITNESS/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BackToTop.jsx       # Floating smooth scroll button
│   │   ├── BmiCalculator.jsx   # Metric/Imperial interactive calculator
│   │   ├── BookClassModal.jsx  # Interactive class reservation modal
│   │   ├── Footer.jsx          # Athletic footer with newsletter & links
│   │   ├── JoinModal.jsx       # Membership sign-up modal & VIP pass generator
│   │   ├── Navbar.jsx          # Responsive sticky navigation & mobile drawer
│   │   └── SectionHeader.jsx   # Consistent uppercase section headers
│   ├── data/
│   │   └── clubData.js         # Curated programs, coaches, timetable, plans, FAQs
│   ├── pages/              # Full-page route views
│   │   ├── AboutPage.jsx       # Club story, pillars, facilities
│   │   ├── ContactPage.jsx     # Validated form, contact info, Google Maps
│   │   ├── HomePage.jsx        # Hero, stats, program teaser, testimonials
│   │   ├── MembershipPage.jsx  # 3 pricing tiers, matrix table, FAQs
│   │   ├── NotFoundPage.jsx    # 404 error page
│   │   ├── ProgramsPage.jsx    # 6 training disciplines & periodization
│   │   ├── SchedulePage.jsx    # 7-day interactive timetable
│   │   └── TrainersPage.jsx    # Coach profiles, specialties & booking
│   ├── App.jsx             # Main router & modal state management
│   ├── index.css           # Tailwind base, dark themes, and neon glow effects
│   └── main.jsx            # React root mount
├── .gitignore              # Excludes node_modules, dist, etc.
├── index.html              # Athletic HTML5 layout & fonts
├── package.json            # Project dependencies & scripts
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Custom neon & dark theme palette
├── vercel.json             # Vercel SPA client-side rewrite rules
└── README.md               # Documentation & deployment guide
```

---

## 🌐 Deploying to Vercel

The project is pre-configured with `vercel.json` for single-page application (SPA) routing, ensuring deep links like `/programs` or `/membership` reload without 404 errors.

### Method A: Deploy via GitHub (Recommended)
1. Push this project to GitHub (see instructions below).
2. Go to [Vercel](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your `FITNESS` repository.
5. In the Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your website will be live with an automatic HTTPS URL in seconds!

### Method B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🐙 Step-by-Step GitHub Upload Instructions

Follow these commands to push the project to your GitHub account:

```bash
# 1. Initialize a new Git repository
git init

# 2. Stage all project files (node_modules and dist are automatically excluded by .gitignore)
git add .

# 3. Create the initial commit
git commit -m "feat: complete production-ready FITNESS CLUB website"

# 4. Rename the default branch to main
git branch -M main

# 5. Add your remote GitHub repository URL (create an empty repo on github.com first)
git remote add origin https://github.com/YOUR_USERNAME/fitness-club.git

# 6. Push to GitHub
git push -u origin main
```

---

## 📄 License
This project is open-source and available under the **MIT License**.

