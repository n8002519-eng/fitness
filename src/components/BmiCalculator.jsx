import React, { useState } from 'react';
import { Activity, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BmiCalculator = () => {
  const [unit, setUnit] = useState('metric'); // 'metric' (cm/kg) or 'imperial' (ft/in/lbs)
  const [heightCm, setHeightCm] = useState(178);
  const [weightKg, setWeightKg] = useState(76);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(10);
  const [weightLbs, setWeightLbs] = useState(165);
  const [bmi, setBmi] = useState(24.0);

  const calculateBmi = () => {
    let result = 0;
    if (unit === 'metric') {
      const hMeters = Number(heightCm) / 100;
      if (hMeters > 0) {
        result = Number(weightKg) / (hMeters * hMeters);
      }
    } else {
      const totalInches = Number(heightFt) * 12 + Number(heightIn);
      if (totalInches > 0) {
        result = (Number(weightLbs) / (totalInches * totalInches)) * 703;
      }
    }
    setBmi(Math.round(result * 10) / 10);
  };

  const getBmiCategory = (val) => {
    if (val < 18.5) return { category: 'Underweight', color: 'text-blue-400', desc: 'Focus on progressive surplus and muscle hypertrophy.', program: 'Bodybuilding & Hypertrophy' };
    if (val < 25) return { category: 'Healthy Weight', color: 'text-neon', desc: 'Optimal metabolic condition. Maintain power and athletic endurance.', program: 'CrossFit & Functional Fitness' };
    if (val < 30) return { category: 'Overweight', color: 'text-yellow-400', desc: 'Accelerate fat oxidation with high-intensity cardio and resistance training.', program: 'Cardio & HIIT Conditioning' };
    return { category: 'Obesity Zone', color: 'text-red-400', desc: 'Consult our coaching specialists for low-impact conditioning and tailored nutrition.', program: '1-on-1 Personal Training' };
  };

  const info = getBmiCategory(bmi);

  return (
    <div className="bg-glass-card border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Form */}
        <div className="flex-1 w-full space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 text-neon border border-neon/20 mb-3">
              <Activity className="w-3.5 h-3.5" />
              Body Composition Tool
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              CALCULATE YOUR <span className="text-neon text-neon-glow">BMI SCORE</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Determine your current body mass index to find the perfect training routine tailored to your physique.
            </p>
          </div>

          {/* Unit Toggle */}
          <div className="flex gap-2 p-1.5 bg-dark-900 border border-white/10 rounded-xl w-fit">
            <button
              onClick={() => setUnit('metric')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                unit === 'metric' ? 'bg-neon text-black shadow-neon-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              Metric (CM / KG)
            </button>
            <button
              onClick={() => setUnit('imperial')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                unit === 'imperial' ? 'bg-neon text-black shadow-neon-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              Imperial (FT / LBS)
            </button>
          </div>

          {unit === 'metric' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Height (cm): <span className="text-neon">{heightCm} cm</span>
                </label>
                <input
                  type="number"
                  min="100"
                  max="250"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/15 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Weight (kg): <span className="text-neon">{weightKg} kg</span>
                </label>
                <input
                  type="number"
                  min="30"
                  max="250"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/15 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Feet (ft)
                </label>
                <input
                  type="number"
                  min="3"
                  max="7"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/15 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Inches (in)
                </label>
                <input
                  type="number"
                  min="0"
                  max="11"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/15 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  min="60"
                  max="450"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/15 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>
            </div>
          )}

          <button
            onClick={calculateBmi}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider text-sm hover:bg-neon-600 transition-all shadow-neon flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Compute BMI Now</span>
          </button>
        </div>

        {/* Right Result Card */}
        <div className="w-full lg:w-80 bg-dark-900 border border-neon/30 rounded-2xl p-6 text-center shadow-neon relative">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Your Calculated BMI</span>
          <div className="text-5xl font-black text-white mt-2 tracking-tight">
            {bmi || '--'}
          </div>
          <div className={`text-base font-extrabold uppercase mt-1 ${info.color}`}>
            {info.category}
          </div>

          <p className="text-xs text-gray-400 mt-3 leading-relaxed border-t border-white/10 pt-3">
            {info.desc}
          </p>

          <div className="mt-4 p-3 rounded-xl bg-dark-950 border border-white/10 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Recommended Program</span>
            <span className="text-xs font-bold text-neon block mt-0.5">{info.program}</span>
            <Link
              to="/programs"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-300 hover:text-white mt-2 group"
            >
              <span>Explore This Program</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;

