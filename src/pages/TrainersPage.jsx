import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Sparkles,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { trainersData } from '../data/clubData';

const TrainersPage = ({ onOpenJoin }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const specialties = ['All', 'Hypertrophy', 'Olympic', 'Cardio', 'Mobility', 'Striking'];

  const filteredTrainers = selectedSpecialty === 'All'
    ? trainersData
    : trainersData.filter((t) => t.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()));

  const handleBookConsult = (trainerName) => {
    setBookingSuccess(trainerName);
    setTimeout(() => {
      setBookingSuccess(null);
    }, 4500);
  };

  return (
    <div className="pt-28 pb-24 space-y-20 sm:space-y-28">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-dark-900 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=2000&q=80"
            alt="FITNESS CLUB Master Coaches"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon/10 blur-[130px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 border border-neon/30 text-neon mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            ELITE CERTIFIED PRACTITIONERS
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            WORLD-CLASS <span className="text-neon text-neon-glow">TRAINERS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed">
            Our master coaches do not just direct reps; they curate biomechanics, periodization, and mental grit.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {bookingSuccess && (
          <div className="mb-8 p-4 rounded-2xl bg-neon/15 border border-neon text-neon text-sm text-center flex items-center justify-center gap-3 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Consultation request received for <strong>{bookingSuccess}</strong>! Our head concierge will contact you within 2 business hours.</span>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                selectedSpecialty === spec
                  ? 'bg-neon text-black shadow-neon'
                  : 'bg-dark-850 text-gray-400 hover:text-white hover:bg-dark-800 border border-white/5'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-glass-card border border-white/10 rounded-3xl overflow-hidden card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-dark-900/90 border border-neon/40 text-neon text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                      {trainer.experience}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-black uppercase text-white group-hover:text-neon transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-neon font-bold uppercase tracking-wider mt-0.5">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="p-3 rounded-xl bg-dark-900 border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Primary Focus:</span>
                    <span className="text-xs font-semibold text-white block">{trainer.specialty}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                      Certifications & Credentials:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.certifications.map((cert, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-dark-850 text-gray-200 border border-white/10"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-3">
                <button
                  onClick={() => handleBookConsult(trainer.name)}
                  className="w-full py-3.5 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider text-xs hover:bg-neon-600 transition-all shadow-neon flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Private Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trainer Recruitment Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-900 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <SectionHeader
            badge="The 1% Standard"
            title="HOW WE SELECT"
            highlightTitle="OUR COACHES"
            subtitle="Fewer than 3% of applicants meet our certification, biomechanical examination, and competitive standards."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-5 rounded-2xl bg-dark-950 border border-white/5 space-y-2 text-center">
              <Award className="w-8 h-8 text-neon mx-auto mb-2" />
              <h4 className="text-sm font-extrabold uppercase text-white">Degree-Level Science</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Every trainer holds collegiate degrees in Kinesiology, Exercise Science, or CSCS credentials.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-dark-950 border border-white/5 space-y-2 text-center">
              <ShieldCheck className="w-8 h-8 text-neon mx-auto mb-2" />
              <h4 className="text-sm font-extrabold uppercase text-white">Safety & CPR/AED Certified</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Bi-annual recertification in advanced life support and postural corrective exercise screening.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-dark-950 border border-white/5 space-y-2 text-center">
              <CheckCircle2 className="w-8 h-8 text-neon mx-auto mb-2" />
              <h4 className="text-sm font-extrabold uppercase text-white">Competitive Pedigree</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Hands-on competitive background in Olympic lifting, IFBB bodybuilding, or Division 1 athletics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainersPage;

