import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Dumbbell, 
  CheckCircle2, 
  Flame, 
  ShieldCheck, 
  Users, 
  Award, 
  ChevronRight, 
  Star,
  Play,
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import BmiCalculator from '../components/BmiCalculator';
import { clubStats, programsData, trainersData, plansData, testimonialsData, clubAmenities } from '../data/clubData';

const HomePage = ({ onOpenJoin, onSelectPlan }) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Background image with dramatic athletic lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
            alt="FITNESS CLUB Training Facility"
            className="w-full h-full object-cover object-center filter brightness-[0.35] scale-105 transform animate-pulse-glow"
          />
          {/* Gradients to blend seamlessly into black background */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950/80"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon/15 blur-[140px] pointer-events-none rounded-full"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/90 border border-neon/40 text-neon text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-neon-sm">
            <span className="w-2 h-2 rounded-full bg-neon animate-ping"></span>
            <span>PREMIER HIGH-PERFORMANCE FACILITY</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            FITNESS <span className="text-neon text-neon-glow">CLUB</span>
          </h1>

          {/* Powerful Slogan */}
          <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white/90">
            BUILD YOUR <span className="underline decoration-neon decoration-4 underline-offset-8">STRONGER FUTURE</span>
          </p>

          {/* Descriptive Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Step into the next generation of athletic excellence. Olympic lifting platforms, 
            certified elite coaches, biometric 24/7 keyless access, and state-of-the-art recovery spa suites.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenJoin && onOpenJoin()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neon text-black font-black uppercase tracking-wider text-base hover:bg-neon-600 transition-all duration-300 shadow-neon transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/programs"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dark-800/80 hover:bg-dark-750 text-white border border-white/20 hover:border-neon font-extrabold uppercase tracking-wider text-base backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Explore Programs</span>
              <ChevronRight className="w-5 h-5 text-neon" />
            </Link>
          </div>

          {/* Value Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-300 font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon" />
              24/7 Biometric Entry
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon" />
              Eleiko Olympic Equipment
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon" />
              Zero Lock-In Contracts
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon" />
              Nordic Spa & Cold Plunges
            </span>
          </div>
        </div>

        {/* Ambient bottom indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce hidden sm:block">
          <span className="text-[10px] uppercase font-bold tracking-widest block mb-1">Scroll Down</span>
          <div className="w-4 h-7 mx-auto rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-neon rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STATISTICS SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clubStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-glass-card border border-white/10 rounded-2xl p-6 sm:p-8 text-center card-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl sm:text-5xl font-black text-neon text-neon-glow tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <p className="text-xs text-gray-400 mt-1 font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          ABOUT US PREVIEW
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                    alt="Barbell Deadlift Training"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-44 sm:h-52">
                  <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
                    alt="Gym Weights Area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-44 sm:h-52">
                  <img
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
                    alt="CrossFit Rig Session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
                    alt="Athlete Conditioning"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-dark-900 border-2 border-neon rounded-2xl p-4 sm:p-5 shadow-neon backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-neon" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">#1 RATED GYM</div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Metropolitan Fitness Awards</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <SectionHeader
              badge="About Our Club"
              title="MORE THAN A GYM."
              highlightTitle="A TEMPLE OF POWER."
              subtitle="At FITNESS CLUB, we do not believe in average. We have eliminated crowded machine lines, broken cable pulleys, and passive workouts. Here, you train with purposeful intensity alongside athletes who share your relentless drive."
              align="left"
              className="mb-6"
            />

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-850/80 border border-white/5">
                <div className="p-2.5 rounded-lg bg-neon/10 text-neon border border-neon/20 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">Uncompromising Facility Standards</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Calibrated Eleiko plates, Rogue infinity rigs, Woodway non-motorized treadmills, and hospital-grade air exchange systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-850/80 border border-white/5">
                <div className="p-2.5 rounded-lg bg-neon/10 text-neon border border-neon/20 flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">Master Certified Strength Coaches</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Every coach holds degree-level kinesiology credentials and national competitive experience to safeguard your form and fast-track results.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-850/80 border border-white/5">
                <div className="p-2.5 rounded-lg bg-neon/10 text-neon border border-neon/20 flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">High Performance Recovery Suite</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Finnish dry heat saunas, cold plunge immersion tubs, and pneumatic compression boots ensure your recovery matches your exertion.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="px-6 py-3 rounded-xl bg-white text-black font-extrabold uppercase tracking-wider text-sm hover:bg-neon hover:text-black transition-all flex items-center gap-2"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="text-sm font-bold uppercase tracking-wider text-neon hover:underline flex items-center gap-1.5"
              >
                <span>Schedule a Club Tour</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROGRAMS PREVIEW
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Engineered Workouts"
            title="EXPLORE OUR"
            highlightTitle="PROGRAMS"
            subtitle="Custom-tailored protocols designed by Olympians and exercise physiologists to forge strength, speed, muscle mass, and endurance."
            align="left"
            className="mb-0"
          />
          <Link
            to="/programs"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-neon hover:text-white transition-colors group"
          >
            <span>View All 6 Programs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.slice(0, 6).map((prog) => (
            <div
              key={prog.id}
              className="bg-glass-card border border-white/10 rounded-2xl overflow-hidden card-hover group flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-dark-950/80 border border-neon/40 text-neon text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                    {prog.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gray-300">
                  <span className="flex items-center gap-1 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-neon" />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1 font-semibold">
                    <Flame className="w-3.5 h-3.5 text-neon" />
                    {prog.calories}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-neon transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-semibold">
                    Intensity: <strong className="text-white">{prog.intensity}</strong>
                  </span>
                  <Link
                    to="/programs"
                    className="text-xs font-black uppercase tracking-wider text-neon flex items-center gap-1 hover:underline"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          TRAINERS PREVIEW
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="World-Class Guidance"
          title="MEET YOUR"
          highlightTitle="ELITE COACHES"
          subtitle="Learn from champion competitors, certified kinesiology specialists, and master strength coaches committed to elevating your physical ceiling."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.slice(0, 4).map((trainer) => (
            <div
              key={trainer.id}
              className="bg-glass-card border border-white/10 rounded-2xl overflow-hidden card-hover group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold text-neon uppercase tracking-wider block">
                    {trainer.experience}
                  </span>
                  <h3 className="text-lg font-black uppercase text-white">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-xs text-gray-300 font-semibold line-clamp-1">
                  {trainer.role}
                </p>
                <div className="flex flex-wrap gap-1">
                  {trainer.certifications.slice(0, 2).map((cert, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-dark-800 text-gray-300 border border-white/5"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
                <Link
                  to="/trainers"
                  className="inline-block text-xs font-bold text-neon hover:underline pt-1"
                >
                  View Profile & Book →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/trainers"
            className="px-8 py-3.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-white border border-white/15 hover:border-neon font-extrabold uppercase tracking-wider text-sm transition-all inline-flex items-center gap-2"
          >
            <span>See All Certified Coaches</span>
            <ArrowRight className="w-4 h-4 text-neon" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          MEMBERSHIP PRICING SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Simple & Transparent"
          title="CHOOSE YOUR"
          highlightTitle="MEMBERSHIP PLAN"
          subtitle="No initiation traps. No annual maintenance hidden fees. Full access to world-class coaching, equipment, and recovery amenities."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                plan.highlight
                  ? 'bg-gradient-to-b from-dark-850 to-dark-900 border-2 border-neon shadow-neon transform lg:-translate-y-3'
                  : 'bg-glass-card border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon text-black text-xs font-black uppercase tracking-wider shadow-neon">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-neon mb-1">
                  {plan.subtitle}
                </div>
                <h3 className="text-3xl font-black uppercase text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">${plan.priceMonthly}</span>
                  <span className="text-sm text-gray-400 font-semibold">/ month</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {plan.description}
                </p>

                <div className="my-6 border-t border-white/10"></div>

                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    What's Included:
                  </div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => {
                    onSelectPlan && onSelectPlan(plan.id);
                    onOpenJoin && onOpenJoin();
                  }}
                  className={`w-full py-4 rounded-xl font-extrabold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? 'bg-neon text-black hover:bg-neon-600 shadow-neon'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-neon'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/membership"
            className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-neon transition-colors"
          >
            Looking for annual discounts or corporate packages? View full membership breakdown →
          </Link>
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE BMI CALCULATOR
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BmiCalculator />
      </section>

      {/* ========================================================
          TESTIMONIALS & TRANSFORMATIONS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Real Transformations"
          title="PROVEN BY OUR"
          highlightTitle="CHAMPIONS"
          subtitle="Real results from athletes and everyday professionals who made the decision to train without compromise."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-glass-card border border-white/10 rounded-2xl p-6 sm:p-8 card-hover flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-neon">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-neon/40"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <span className="text-xs text-gray-400">{item.role}</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-neon bg-neon/10 px-2.5 py-1 rounded-full border border-neon/20">
                  {item.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          CTA BANNER
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-neon/50 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 p-8 sm:p-14 text-center shadow-neon">
          <div className="absolute top-0 right-0 w-80 h-80 bg-neon/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-neon/10 border border-neon/30 text-neon text-xs font-black uppercase tracking-widest inline-block">
              READY TO ELEVATE YOUR STANDARD?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
              START YOUR TRANSFORMATION <span className="text-neon text-neon-glow">TODAY</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Claim your complimentary 1-Day VIP All-Access Pass. Experience our facilities, 
              join a high-intensity group class, and speak with our master trainers with zero commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenJoin && onOpenJoin()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neon text-black font-black uppercase tracking-wider text-sm hover:bg-neon-600 transition-all shadow-neon"
              >
                Claim Free VIP Pass
              </button>
              <Link
                to="/schedule"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dark-800 text-white border border-white/20 hover:border-neon font-extrabold uppercase tracking-wider text-sm transition-all"
              >
                View Class Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

