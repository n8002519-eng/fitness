import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Home, ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-dark-900 border border-neon/40 flex items-center justify-center text-neon shadow-neon">
          <Dumbbell className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <span className="text-neon font-black text-6xl tracking-tight block">404</span>
          <h1 className="text-3xl font-black uppercase text-white">PAGE NOT FOUND</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            The page you are looking for does not exist or has been moved to another station.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-neon text-black font-extrabold uppercase tracking-wider text-xs hover:bg-neon-600 transition-all shadow-neon flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/programs"
            className="px-6 py-3 rounded-xl bg-dark-800 border border-white/10 hover:border-neon text-white font-extrabold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

