import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  CheckCircle2, 
  Filter, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { scheduleData } from '../data/clubData';

const SchedulePage = ({ onBookClass }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [activeDay, setActiveDay] = useState('Monday');
  const [selectedType, setSelectedType] = useState('All');

  const types = ['All', 'Strength', 'Cardio', 'Functional', 'Combat', 'Recovery'];

  const filteredSchedule = scheduleData.filter((item) => {
    const matchesDay = item.day === activeDay;
    const matchesType = selectedType === 'All' || item.type.toLowerCase() === selectedType.toLowerCase();
    return matchesDay && matchesType;
  });

  return (
    <div className="pt-28 pb-24 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-dark-900 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=80"
            alt="FITNESS CLUB Schedule"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon/10 blur-[130px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 border border-neon/30 text-neon mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            LIVE CLASS ROSTER
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            TRAINING <span className="text-neon text-neon-glow">TIMETABLE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed">
            Reserve your spot in our high-energy group studio sessions, Olympic workshops, and recovery sound baths.
          </p>
        </div>
      </section>

      {/* Interactive Schedule Controller */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Days of Week Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeDay === day
                  ? 'bg-neon text-black shadow-neon scale-105'
                  : 'bg-dark-850 text-gray-400 hover:text-white hover:bg-dark-800 border border-white/5'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Discipline Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs uppercase font-extrabold text-gray-400 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-neon" /> Filter:
          </span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedType === t
                  ? 'bg-white text-black'
                  : 'bg-dark-900 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Timetable Cards Grid */}
        <div className="mt-10 space-y-4">
          {filteredSchedule.length === 0 ? (
            <div className="text-center py-16 bg-dark-900 border border-white/10 rounded-2xl space-y-3">
              <Calendar className="w-10 h-10 text-gray-500 mx-auto" />
              <h3 className="text-lg font-bold uppercase text-white">No Classes Found</h3>
              <p className="text-xs text-gray-400">There are no {selectedType} classes scheduled on {activeDay}.</p>
            </div>
          ) : (
            filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="bg-glass-card border border-white/10 rounded-2xl p-5 sm:p-6 card-hover flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                {/* Time & Discipline Badge */}
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-dark-950 border border-white/10 text-center min-w-[130px] sm:min-w-[150px]">
                    <div className="flex items-center justify-center gap-1.5 text-neon font-black text-xs sm:text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-0.5">
                      {item.day}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neon bg-neon/10 px-2 py-0.5 rounded border border-neon/20">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white group-hover:text-neon transition-colors mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Trainer, Room & Spots */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-neon" />
                    <span>Coach: <strong className="text-white">{item.trainer}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neon" />
                    <span>{item.room}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-neon bg-neon/10 px-2.5 py-1 rounded-full border border-neon/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.spots} Slots Remaining</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div>
                  <button
                    onClick={() => onBookClass && onBookClass(item)}
                    className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider text-xs hover:bg-neon-600 transition-all shadow-neon flex items-center justify-center gap-2"
                  >
                    <span>Book Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-900 border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-lg font-black uppercase text-white">Class Etiquette & Booking Policy</h4>
            <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
              Bookings open 7 days in advance. Please arrive 10 minutes before class start time for mobility warmups. 
              Towels and ionized mineral water stations are provided complimentary in all studio zones.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 rounded-xl bg-dark-800 border border-white/20 text-white hover:border-neon font-bold uppercase tracking-wider text-xs whitespace-nowrap transition-colors"
          >
            Print / Save Timetable
          </button>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;

