import React from 'react';

const SectionHeader = ({ badge, title, highlightTitle, subtitle, align = 'center', className = '' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-neon/10 border border-neon/30 text-neon mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
        {title} {highlightTitle && <span className="text-neon text-neon-glow">{highlightTitle}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

