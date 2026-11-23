import React, { useState } from 'react';
import { 
  Dumbbell, 
  Flame, 
  Clock, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Sparkles,
  Zap,
  Info
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { programsData } from '../data/clubData';

const ProgramsPage = ({ onOpenJoin, onBookClass }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProgram, setActiveModalProgram] = useState(null);

  const categories = ['All', 'Strength', 'Cardio', 'Functional', 'Recovery', 'Custom'];

  const filteredPrograms = selectedCategory === 'All'
    ? programsData
    : programsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="pt-28 pb-24 space-y-20 sm:space-y-28">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-dark-900 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=2000&q=80"
            alt="FITNESS CLUB Training"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon/10 blur-[130px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 border border-neon/30 text-neon mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            CHAMPIONSHIP-GRADE PROTOCOLS
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            TRAINING <span className="text-neon text-neon-glow">PROGRAMS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed">
            Engineered progressive training systems designed to dismantle plateaus and deliver athletic breakthroughs.
          </p>
        </div>
      </section>

      {/* Main Program Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-neon text-black shadow-neon'
                  : 'bg-dark-850 text-gray-400 hover:text-white hover:bg-dark-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-glass-card border border-white/10 rounded-3xl overflow-hidden card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-dark-900/90 border border-neon/40 text-neon text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                      {prog.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1 font-semibold bg-dark-950/70 px-2 py-1 rounded-lg backdrop-blur-sm">
                      <Clock className="w-3.5 h-3.5 text-neon" />
                      {prog.duration}
                    </span>
                    <span className="flex items-center gap-1 font-semibold bg-dark-950/70 px-2 py-1 rounded-lg backdrop-blur-sm">
                      <Flame className="w-3.5 h-3.5 text-neon" />
                      {prog.calories}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neon">
                      {prog.category} Discipline
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white group-hover:text-neon transition-colors mt-0.5">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Target Audience */}
                  <div className="p-3 rounded-xl bg-dark-900 border border-white/5 text-xs text-gray-300">
                    <span className="text-gray-400 font-bold uppercase block text-[10px]">Target Athlete:</span>
                    <span className="text-white font-medium mt-0.5 block">{prog.target}</span>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                      Program Highlights:
                    </span>
                    {prog.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenJoin && onOpenJoin()}
                  className="w-full py-3.5 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider text-xs hover:bg-neon-600 transition-all shadow-neon flex items-center justify-center gap-2"
                >
                  <span>Enroll in Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Methodology Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-900 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <SectionHeader
            badge="The Science"
            title="PERIODIZATION &"
            highlightTitle="PROGRESSION"
            subtitle="Every workout inside our club fits into a structured 12-week macrocycle to ensure consistent neuro-muscular adaptation without burnout."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-dark-950 border border-white/5 space-y-3">
              <span className="text-2xl font-black text-neon">Phase 01</span>
              <h4 className="text-base font-bold uppercase text-white">Anatomical Adaptation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Establishing impeccable movement mechanics, strengthening connective tendons, and dialing in core stability.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-dark-950 border border-white/5 space-y-3">
              <span className="text-2xl font-black text-neon">Phase 02</span>
              <h4 className="text-base font-bold uppercase text-white">Hypertrophy & Overload</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Increasing mechanical tension, volume density, and metabolic stress for rapid lean muscle expansion.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-dark-950 border border-white/5 space-y-3">
              <span className="text-2xl font-black text-neon">Phase 03</span>
              <h4 className="text-base font-bold uppercase text-white">Peak Strength & Power</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Tapering volume while driving 1RM power velocity, central nervous system firing, and maximal endurance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;

