import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }
  };

  return (
    <div className="pt-28 pb-24 space-y-20 sm:space-y-28">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-dark-900 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=2000&q=80"
            alt="Contact FITNESS CLUB"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon/10 blur-[130px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neon/10 border border-neon/30 text-neon mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            24/7 MEMBER CONCIERGE
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            GET IN <span className="text-neon text-neon-glow">TOUCH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed">
            Have questions about membership, private personal training, or scheduling a facility walkthrough? Our concierge team is at your service.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-glass-card border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-neon">Headquarters</span>
                <h3 className="text-2xl font-black uppercase text-white mt-1">FITNESS CLUB METRO</h3>
              </div>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-neon/10 border border-neon/20 text-neon flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-white block">Facility Address:</span>
                    <span className="text-gray-400 text-xs">742 Evergreen Fitness Way, Suite 100, Metro City, NY 10001</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-neon/10 border border-neon/20 text-neon flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-white block">Toll-Free Hotline:</span>
                    <a href="tel:+18005553488" className="text-gray-400 hover:text-neon text-xs">+1 (800) 555-3488</a>
                    <span className="block text-[11px] text-gray-500">Direct Front Desk: +1 (212) 555-8900</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-neon/10 border border-neon/20 text-neon flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-white block">Official Email:</span>
                    <a href="mailto:contact@fitnessclub.com" className="text-gray-400 hover:text-neon text-xs">contact@fitnessclub.com</a>
                    <span className="block text-[11px] text-gray-500">concierge@fitnessclub.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-neon/10 border border-neon/20 text-neon flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-white block">Operating Hours:</span>
                    <span className="text-xs text-neon font-bold block">Members: 24/7/365 (Keyless Biometric)</span>
                    <span className="text-gray-400 text-xs block">Staffed Concierge: Mon - Sun, 6:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                  Follow Our Athletes:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-dark-850 border border-white/10 text-gray-300 hover:text-black hover:bg-neon hover:border-neon transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-dark-850 border border-white/10 text-gray-300 hover:text-black hover:bg-neon hover:border-neon transition-all"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-dark-850 border border-white/10 text-gray-300 hover:text-black hover:bg-neon hover:border-neon transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-dark-850 border border-white/10 text-gray-300 hover:text-black hover:bg-neon hover:border-neon transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-dark-900 border border-white/10 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-neon">Send a Message</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                  HOW CAN WE HELP YOU?
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Fill out the form below. We typically respond within 60 minutes during staffed concierge hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-neon/15 border border-neon text-neon flex items-center justify-center shadow-neon">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black uppercase text-white">Message Dispatched!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out to FITNESS CLUB. Our senior member advisor will review your message and reply via email or phone promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jason Miller"
                        className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-white text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/15 focus:border-neon'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jason@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-white text-sm focus:outline-none transition-colors ${
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
                        className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-white text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-white/15 focus:border-neon'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Interest / Program
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/15 text-white text-sm focus:outline-none focus:border-neon"
                      >
                        <option value="General Inquiry">General Club Inquiry</option>
                        <option value="Membership Membership">Membership Tiers & VIP Tour</option>
                        <option value="Personal Training">1-on-1 Personal Training Consultation</option>
                        <option value="Corporate Wellness">Corporate Wellness & Teams</option>
                        <option value="CrossFit / Group">CrossFit & Group Class Booking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness history, specific goals, or questions..."
                      className={`w-full px-4 py-3 rounded-xl bg-dark-850 border text-white text-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500' : 'border-white/15 focus:border-neon'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-neon text-black font-black uppercase tracking-wider text-sm hover:bg-neon-600 transition-all shadow-neon flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Interactive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neon">Location & Parking</span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white mt-0.5">
                FIND FITNESS CLUB ON THE MAP
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Located in the heart of Metro City, with 3 hours of complimentary secure underground member parking.
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold uppercase tracking-wider text-xs inline-flex items-center gap-2 whitespace-nowrap transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-neon" />
            </a>
          </div>

          {/* Interactive dark stylized Google Maps Embed */}
          <div className="relative h-80 sm:h-96 w-full bg-dark-950 overflow-hidden">
            <iframe
              title="FITNESS CLUB Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-125 opacity-80 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay Pin Card */}
            <div className="absolute top-4 left-4 p-4 rounded-2xl bg-dark-950/90 border border-neon/50 text-white backdrop-blur-md shadow-neon text-xs space-y-1 pointer-events-none hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neon animate-ping"></span>
                <span className="font-black text-sm uppercase">FITNESS CLUB FLAGSHIP</span>
              </div>
              <p className="text-gray-400">742 Evergreen Fitness Way, NY</p>
              <span className="text-[10px] text-neon font-bold block pt-1">● OPEN NOW — 24/7 ACCESS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

