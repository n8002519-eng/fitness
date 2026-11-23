import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, Twitter, Send, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
      setTimeout(() => {
        setNewsletterSent(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 text-gray-400 relative overflow-hidden">
      {/* Background neon ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon/5 blur-3xl pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-800 border border-neon/40 flex items-center justify-center text-neon shadow-neon">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black uppercase tracking-wider text-white">
                FITNESS <span className="text-neon text-neon-glow">CLUB</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The premier destination for athletes, bodybuilders, and fitness purists. 
              We combine elite coaching, Olympic-grade machinery, and a passionate community 
              committed to building a stronger future.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-neon hover:border-neon transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-neon hover:border-neon transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-neon hover:border-neon transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-neon hover:border-neon transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-extrabold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon"></span>
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-neon transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-neon transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-neon transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link to="/trainers" className="hover:text-neon transition-colors">Elite Trainers</Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-neon transition-colors">Membership Plans</Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-neon transition-colors">Class Schedule</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-neon transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs & Disciplines */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-extrabold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon"></span>
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/programs" className="hover:text-neon transition-colors">Bodybuilding & Hypertrophy</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-neon transition-colors">Weight Training & Powerlifting</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-neon transition-colors">Cardio & HIIT Conditioning</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-neon transition-colors">CrossFit & Functional</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-neon transition-colors">Power Yoga & Mobility</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-neon transition-colors">1-on-1 Personal Training</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Club Details & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-extrabold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon"></span>
              Club Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                <span>742 Evergreen Fitness Way, Suite 100, Metro City, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neon flex-shrink-0" />
                <span>+1 (800) 555-3488</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neon flex-shrink-0" />
                <span>contact@fitnessclub.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                <span>24/7 Access for All Members</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-gray-300 font-semibold mb-2">Subscribe to Workout Protocols & Deals:</p>
              {newsletterSent ? (
                <div className="p-2.5 rounded-lg bg-neon/15 border border-neon/40 text-neon text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email..."
                    className="w-full px-3 py-2 text-xs bg-dark-850 border border-white/15 rounded-lg text-white focus:outline-none focus:border-neon"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="px-3 py-2 bg-neon text-black rounded-lg hover:bg-neon-600 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} FITNESS CLUB. All rights reserved. Built for athletic excellence.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neon transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-neon transition-colors">Terms of Service</a>
            <a href="#safety" className="hover:text-neon transition-colors">Safety Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

