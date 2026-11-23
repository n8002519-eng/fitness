import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const Navbar = ({ onOpenJoin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Bar for Premium Atmosphere */}
      <div className="bg-dark-900 border-b border-white/5 text-xs text-gray-400 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-neon" />
              <span>Mon - Fri: 24/7 Access | Sat - Sun: 5:00 AM - 11:00 PM</span>
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-neon" />
              <span>Certified Olympic Facility</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+18005553488" className="flex items-center gap-1.5 text-gray-300 hover:text-neon transition-colors">
              <Phone className="w-3.5 h-3.5 text-neon" />
              <span>+1 (800) 555-FITNESS</span>
            </a>
            <span className="text-neon font-semibold tracking-wide">
              LIMITED TIME: 0$ ENROLLMENT
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-dark-950/70 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-dark-800 border border-neon/40 flex items-center justify-center text-neon shadow-neon group-hover:scale-105 transition-all">
                <Dumbbell className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                  FITNESS <span className="text-neon text-neon-glow">CLUB</span>
                </span>
                <span className="block text-[9px] tracking-widest text-gray-400 uppercase font-semibold -mt-1">
                  High Performance Center
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all relative ${
                      isActive
                        ? 'text-neon bg-neon/10 border border-neon/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-neon rounded-full shadow-neon"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => onOpenJoin && onOpenJoin()}
                className="relative group overflow-hidden px-6 py-2.5 rounded-xl bg-neon text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-neon-600 hover:shadow-neon transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2.5 rounded-xl bg-dark-800 border border-white/10 text-white hover:text-neon hover:border-neon transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-dark-900 border-l border-white/10 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="w-8 h-8 rounded-lg bg-neon text-black flex items-center justify-center font-bold">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <span className="text-lg font-black tracking-wider text-white">
                  FITNESS <span className="text-neon">CLUB</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-dark-800 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-neon bg-neon/10 border border-neon/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-neon shadow-neon"></span>}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenJoin && onOpenJoin();
              }}
              className="w-full py-3.5 rounded-xl bg-neon text-black font-extrabold text-center uppercase tracking-wider shadow-neon hover:bg-neon-600 transition-all flex items-center justify-center gap-2"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+18005553488"
              className="text-xs text-center text-gray-400 hover:text-neon transition-colors py-1 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-neon" />
              <span>Call: +1 (800) 555-3488</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

