import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Zap, 
  CheckCircle2, 
  Users, 
  ArrowRight,
  Flame,
  Clock,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { clubAmenities } from '../data/clubData';

const AboutPage = ({ onOpenJoin }) => {
  const facilityZones = [
    {
      title: 'The Iron Vault',
      subtitle: 'Free Weights & Powerlifting Haven',
      description: 'Equipped with calibrated Eleiko competition discs, custom IPF-spec combo racks, dumbbells ascending to 150 lbs, and chalk bins at every station.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'The Box & Turf Yard',
      subtitle: 'CrossFit & Functional Conditioning',
      description: '60-meter high-density sprint turf, Rogue monster rigs, Concept2 RowErgs and SkiErgs, plyometric soft boxes, and heavy sled lanes.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'The Arena Studio',
      subtitle: 'Cardio & High-Octane Group Aerobics',
      description: 'State-of-the-art acoustic treatment, club lighting system, curved Woodway motorless runners, and real-time biometric heart-rate telemetry displays.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Nordic Spa & Recovery Suite',
      subtitle: 'Contrast Therapy & Muscular Regeneration',
      description: 'Finnish dry rock sauna (90°C), eucalyptus steam room, 40°F sub-zero cold plunge tubs, and Normatec compression lounge for rapid muscle flushing.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="pt-28 pb-24 space-y-24 sm:space-y-32">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-dark-900 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=80"
            alt="FITNESS CLUB Weight Room"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon/10 blur-[130px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 border border-neon/30 text-neon mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            OUR LEGACY & STANDARDS
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            ABOUT <span className="text-neon text-neon-glow">FITNESS CLUB</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed">
            Founded with one uncompromising obsession: to build the world's most results-driven training environment.
          </p>
        </div>
      </section>

      {/* Club Introduction & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <SectionHeader
              badge="Our Genesis"
              title="FORGING THE FUTURE"
              highlightTitle="OF FITNESS"
              subtitle="FITNESS CLUB was born from frustration with the generic, crowded commercial gym model. We set out to build an athletic sanctuary where serious effort is honored and real transformations are standard."
              align="left"
              className="mb-6"
            />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Every detail of our 45,000 sq ft facility was engineered by former competitive athletes and human performance scientists. From the custom vibration-dampened lifting platforms to our clinical recovery protocols, nothing is accidental.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We cater to members who refuse to settle. Whether you are stepping under a barbell for the first time or peaking for an international bodybuilding show, FITNESS CLUB provides the coaching, culture, and cutting-edge equipment to get you there.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-3xl font-black text-neon">45,000+</span>
                <span className="block text-xs uppercase font-extrabold text-white mt-0.5">Sq Ft Training Area</span>
                <span className="text-[11px] text-gray-400">Zero waiting lines</span>
              </div>
              <div>
                <span className="text-3xl font-black text-neon">24/7/365</span>
                <span className="block text-xs uppercase font-extrabold text-white mt-0.5">Unrestricted Access</span>
                <span className="text-[11px] text-gray-400">Biometric mobile entry</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
                alt="Strength Athlete at FITNESS CLUB"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-md">
                <span className="text-neon text-xs font-black uppercase tracking-wider block">OUR PROMISE</span>
                <p className="text-white text-sm font-bold mt-1">
                  "No gimmicks, no fads. Just science-backed training protocols and the relentless pursuit of human potential."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="OUR MISSION &"
          highlightTitle="CORE PILLARS"
          subtitle="Four non-negotiable principles that define every class, every coach, and every barbell at FITNESS CLUB."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-glass-card border border-white/10 rounded-2xl p-6 space-y-4 card-hover">
            <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center text-neon">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase text-white">Relentless Progression</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We measure everything: load velocity, heart-rate zones, body composition, and range of motion. What gets measured gets conquered.
            </p>
          </div>

          <div className="bg-glass-card border border-white/10 rounded-2xl p-6 space-y-4 card-hover">
            <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center text-neon">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase text-white">Biomechanic Integrity</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Longevity is performance. Our coaches correct dysfunctions before loading weight, ensuring your joints thrive for decades to come.
            </p>
          </div>

          <div className="bg-glass-card border border-white/10 rounded-2xl p-6 space-y-4 card-hover">
            <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center text-neon">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase text-white">Brotherhood of Iron</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              An inclusive, high-vibe atmosphere where everyone cheers on PRs. No judgment, no egos—just mutual respect and shared grit.
            </p>
          </div>

          <div className="bg-glass-card border border-white/10 rounded-2xl p-6 space-y-4 card-hover">
            <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center text-neon">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase text-white">Complete Recovery</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Growth happens outside the gym. Our saunas, cold plunge tanks, and custom nutrition bar ensure your body rebuilds faster than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="World-Class Environment"
          title="THE FACILITY:"
          highlightTitle="PURPOSE-BUILT ZONES"
          subtitle="Explore the dedicated arenas designed to take your specific discipline to absolute peak performance."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilityZones.map((zone, idx) => (
            <div
              key={idx}
              className="bg-glass-card border border-white/10 rounded-3xl overflow-hidden card-hover group"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-neon">Zone 0{idx + 1}</span>
                  <h3 className="text-2xl font-black uppercase text-white">{zone.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <span className="text-xs font-extrabold uppercase text-gray-300 tracking-wider block">
                  {zone.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us: Amenities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-900 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-neon/10 rounded-full blur-3xl pointer-events-none"></div>

          <SectionHeader
            badge="Club Amenities"
            title="WHY CHOOSE"
            highlightTitle="FITNESS CLUB?"
            subtitle="Every convenience has been integrated so you can focus entirely on achieving peak performance."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubAmenities.map((amenity, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-dark-950 border border-white/5 hover:border-neon/40 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-neon flex-shrink-0" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{amenity.title}</h4>
                </div>
                <p className="text-xs text-gray-400 pl-7 leading-relaxed">{amenity.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-black uppercase text-white">Experience FITNESS CLUB in person</h4>
              <p className="text-xs text-gray-400 mt-0.5">Drop in anytime during staffed hours or book a private concierge tour.</p>
            </div>
            <button
              onClick={() => onOpenJoin && onOpenJoin()}
              className="px-8 py-3.5 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider text-sm hover:bg-neon-600 transition-all shadow-neon"
            >
              Get Free Day Pass
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

