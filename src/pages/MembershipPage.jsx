import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  Zap,
  Lock
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { plansData, clubFaqs } from '../data/clubData';

const MembershipPage = ({ onOpenJoin, onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  return (
    <div className="pt-28 pb-24 space-y-20 sm:space-y-28">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-dark-900 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80"
            alt="FITNESS CLUB Membership"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon/10 blur-[130px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 border border-neon/30 text-neon mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            TRANSPARENT PRICING • ZERO INITIATION FEES
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            MEMBERSHIP <span className="text-neon text-neon-glow">PLANS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed">
            Invest in your physical vitality. Pick the tier that matches your goals and experience the difference of a true championship club.
          </p>

          {/* Billing Switch */}
          <div className="pt-6 flex items-center justify-center">
            <div className="p-1.5 rounded-2xl bg-dark-900/90 border border-white/15 backdrop-blur-md flex items-center gap-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  billingCycle === 'annual'
                    ? 'bg-neon text-black shadow-neon'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] bg-black text-neon px-2 py-0.5 rounded-full font-black">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plansData.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-dark-850 to-dark-900 border-2 border-neon shadow-neon transform lg:-translate-y-4'
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
                    <span className="text-5xl font-black text-white">${price}</span>
                    <span className="text-sm text-gray-400 font-semibold">/ month</span>
                  </div>
                  <span className="text-[11px] text-neon font-semibold block mt-1">
                    {billingCycle === 'annual' ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed monthly, cancel anytime'}
                  </span>

                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="my-6 border-t border-white/10"></div>

                  {/* Included Features */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Included Privileges:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {/* Not Included Features */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-3 space-y-2 border-t border-white/5">
                        {plan.notIncluded.map((notFeat, nfIdx) => (
                          <div key={nfIdx} className="flex items-start gap-3 text-xs text-gray-500">
                            <XCircle className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                            <span>{notFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
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
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-card border border-white/10 rounded-3xl p-6 sm:p-10 overflow-x-auto shadow-2xl">
          <SectionHeader
            badge="Side-by-Side"
            title="DETAILED FEATURE"
            highlightTitle="COMPARISON"
            subtitle="Review all club privileges and access tiers before locking in your membership."
            align="left"
            className="mb-8"
          />

          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-xs font-black uppercase text-gray-400">
                <th className="py-4 pr-4">Club Feature</th>
                <th className="py-4 px-4 text-center">BASIC</th>
                <th className="py-4 px-4 text-center text-neon">STANDARD</th>
                <th className="py-4 pl-4 text-center">PREMIUM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">24/7 Keyless Biometric Entry</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 pl-4 text-center text-neon">✔</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">Eleiko Platforms & Dumbbells up to 150 lbs</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 pl-4 text-center text-neon">✔</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">Locker Rooms, Rain Showers & Wi-Fi</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 pl-4 text-center text-neon">✔</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">Unlimited Group Classes (HIIT, Spin, Yoga)</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 pl-4 text-center text-neon">✔</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">Finnish Sauna & Eucalyptus Steam Room</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 px-4 text-center text-neon">✔</td>
                <td className="py-3.5 pl-4 text-center text-neon">✔</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">InBody 770 Clinical Composition Scans</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 px-4 text-center text-neon">Monthly</td>
                <td className="py-3.5 pl-4 text-center text-neon">Unlimited</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">Monthly 1-on-1 Personal Training</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 pl-4 text-center text-neon">2 Sessions/mo</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">Cryotherapy & Cold Plunge Lounges</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 pl-4 text-center text-neon">Unlimited VIP</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-white font-semibold">Daily Protein Shake Bar Access</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                <td className="py-3.5 pl-4 text-center text-neon">✔ 1 Free Daily</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Guarantee Badge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-dark-900 border border-neon/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-neon">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-neon/15 border border-neon flex items-center justify-center text-neon flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase text-white">30-Day Zero-Risk Trial Guarantee</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                If FITNESS CLUB does not exceed your expectations in your first 30 days, cancel with a single click and receive a 100% refund of your first month dues.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenJoin && onOpenJoin()}
            className="px-8 py-3.5 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider text-sm hover:bg-neon-600 transition-all flex-shrink-0 shadow-neon"
          >
            Claim Your Guarantee
          </button>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="MEMBERSHIP"
          highlightTitle="QUESTIONS"
          subtitle="Everything you need to know about joining, canceling, guest passes, and access."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {clubFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-2"
            >
              <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon flex-shrink-0"></span>
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 pl-4 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;

