import React, { useState } from 'react';
import { X, CheckCircle, Dumbbell, ShieldCheck, Zap } from 'lucide-react';
import { plansData } from '../data/clubData';

const JoinModal = ({ isOpen, onClose, preselectedPlan = 'standard' }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(preselectedPlan);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    fitnessGoal: 'muscle',
    startDate: '',
    preferredTime: 'morning'
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const currentPlan = plansData.find((p) => p.id === selectedPlanId) || plansData[1];
  const price = billingCycle === 'annual' ? currentPlan.priceAnnual : currentPlan.priceMonthly;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-dark-900 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-white animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-xl bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-750 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-neon/15 border-2 border-neon text-neon flex items-center justify-center shadow-neon animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                WELCOME TO THE <span className="text-neon text-neon-glow">CLUB!</span>
              </h3>
              <p className="text-gray-300 max-w-md mx-auto text-sm">
                Congratulations, <strong className="text-white">{formData.fullName}</strong>! Your membership application for the <strong className="text-neon">{currentPlan.name}</strong> plan has been processed successfully.
              </p>
            </div>

            {/* VIP Pass Mock Card */}
            <div className="bg-dark-950 border border-neon/40 rounded-xl p-5 text-left max-w-md mx-auto shadow-neon-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-neon" />
                  <span className="font-extrabold text-sm tracking-wider">FITNESS CLUB VIP PASS</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-neon/20 text-neon font-bold">ACTIVE</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400 block">Member Name</span>
                  <span className="text-white font-semibold">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Membership Tier</span>
                  <span className="text-neon font-bold">{currentPlan.name} ({billingCycle.toUpperCase()})</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Access ID</span>
                  <span className="text-white font-mono">FC-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Orientation</span>
                  <span className="text-white font-semibold">Complimentary PT Session Included</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              A confirmation email and mobile biometric key have been sent to <span className="text-white">{formData.email}</span>. Please bring your photo ID on your first visit.
            </p>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider hover:bg-neon-600 transition-all shadow-neon"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Join Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 text-neon border border-neon/30 mb-2">
                <Zap className="w-3.5 h-3.5" />
                Instant Membership Activation
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                Join <span className="text-neon">FITNESS CLUB</span> Today
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Choose your membership tier and lock in our guaranteed rate. No hidden cancellation fees.
              </p>
            </div>

            {/* Plan Selector Buttons */}
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Select Your Plan:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {plansData.map((plan) => {
                  const isSelected = selectedPlanId === plan.id;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-neon/10 border-neon text-white shadow-neon-sm'
                          : 'bg-dark-800 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <div className="text-xs font-black uppercase tracking-wider">{plan.name}</div>
                      <div className="text-lg font-black text-white mt-0.5">
                        ${billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly}
                        <span className="text-[10px] text-gray-400 font-normal">/mo</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-dark-800 border border-white/10 mb-6">
              <span className="text-xs font-semibold text-gray-300">Billing Preference:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    billingCycle === 'monthly' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    billingCycle === 'annual' ? 'bg-neon text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>Annual</span>
                  <span className="text-[10px] bg-black/30 px-1 rounded">SAVE 20%</span>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Miller"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border text-white text-sm focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-neon'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border text-white text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/15 focus:border-neon'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border text-white text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-white/15 focus:border-neon'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.fitnessGoal}
                    onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/15 text-white text-sm focus:outline-none focus:border-neon"
                  >
                    <option value="muscle">Muscle Hypertrophy & Bodybuilding</option>
                    <option value="strength">Raw Strength & Powerlifting</option>
                    <option value="fatloss">Fat Loss & Conditioning</option>
                    <option value="crossfit">CrossFit & Athletic Performance</option>
                    <option value="mobility">Flexibility, Yoga & Posture</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-between text-xs text-neon">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  30-Day Money-Back Satisfaction Guarantee
                </span>
                <span className="font-extrabold text-white text-sm">
                  ${price} <span className="text-xs text-gray-400 font-normal">due today</span>
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-neon text-black font-black uppercase tracking-wider text-sm hover:bg-neon-600 transition-all shadow-neon"
              >
                Complete Registration & Join Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;

