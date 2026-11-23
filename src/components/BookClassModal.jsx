import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, MapPin, User, ShieldCheck } from 'lucide-react';

const BookClassModal = ({ isOpen, onClose, classItem }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen || !classItem) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-dark-900 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-white animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-xl bg-dark-800 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-neon/15 border-2 border-neon text-neon flex items-center justify-center shadow-neon">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black uppercase text-white">Class Spot Reserved!</h3>
              <p className="text-gray-300 text-sm">
                You’re all set for <strong className="text-neon">{classItem.title}</strong>!
              </p>
            </div>
            <div className="p-4 rounded-xl bg-dark-950 border border-white/10 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Class:</span>
                <span className="text-white font-bold">{classItem.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time:</span>
                <span className="text-neon font-semibold">{classItem.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Coach:</span>
                <span className="text-white">{classItem.trainer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="text-white">{classItem.room}</span>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              We’ve sent a calendar invite and locker room instructions to <span className="text-white">{email}</span>.
            </p>
            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider hover:bg-neon-600 transition-all shadow-neon"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-neon bg-neon/10 px-2.5 py-1 rounded-full border border-neon/20">
                Reserve Class Spot
              </span>
              <h3 className="text-2xl font-black uppercase text-white mt-2">
                {classItem.title}
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-300 bg-dark-950 p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neon" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neon" />
                  <span>{classItem.trainer}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neon" />
                  <span>{classItem.room}</span>
                </div>
                <div className="flex items-center gap-1.5 text-neon font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-neon" />
                  <span>{classItem.spots} Spots Left</span>
                </div>
              </div>
            </div>

            {error && <div className="p-3 mb-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-xs">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Hunter"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 012-3456"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-neon"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-neon text-black font-black uppercase tracking-wider text-sm hover:bg-neon-600 transition-all shadow-neon mt-2"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookClassModal;

