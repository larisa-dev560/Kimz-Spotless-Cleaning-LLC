import React from 'react';

interface KimzLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'horizontal';
  inverted?: boolean;
}

export const KimzLogo: React.FC<KimzLogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'horizontal',
  inverted = false,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Emblem */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square shrink-0 filter drop-shadow-sm"
        aria-label="Kimz Spotless Cleaning LLC Emblem"
      >
        <defs>
          <linearGradient id="purpleRing" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7030C0" />
            <stop offset="50%" stopColor="#401090" />
            <stop offset="100%" stopColor="#200060" />
          </linearGradient>
          <linearGradient id="cyanFoam" x1="60" y1="110" x2="140" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B6F3FC" />
            <stop offset="100%" stopColor="#76DDF0" />
          </linearGradient>
          <linearGradient id="pinkAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF66CC" />
            <stop offset="100%" stopColor="#F050C0" />
          </linearGradient>
          <clipPath id="circleClip">
            <circle cx="100" cy="112" r="62" />
          </clipPath>
        </defs>

        {/* Outer Circular Ring */}
        <circle cx="100" cy="112" r="64" fill="#380C7A" />
        <circle cx="100" cy="112" r="62" fill="#4B1299" />

        {/* Clipped interior with tile grid pattern */}
        <g clipPath="url(#circleClip)">
          {/* Subtle grid pattern representing clean tiles */}
          <path
            d="M 50,60 H 150 M 50,85 H 150 M 50,110 H 150 M 50,135 H 150 M 50,160 H 150
               M 70,50 V 175 M 95,50 V 175 M 120,50 V 175 M 145,50 V 175"
            stroke="#6325B8"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />

          {/* Left: Plunger */}
          <g transform="rotate(-22 72 105)">
            <rect x="70" y="80" width="7" height="65" rx="3.5" fill="#FFFFFF" />
            {/* Plunger cup */}
            <path
              d="M58,78 C58,62 88,62 88,78 C88,82 58,82 58,78 Z"
              fill="#200060"
            />
            <ellipse cx="73" cy="80" rx="14" ry="4" fill="#300880" />
          </g>

          {/* Right: Broom with wooden bristles */}
          <g transform="rotate(22 128 105)">
            <rect x="123" y="80" width="7" height="65" rx="3.5" fill="#FFFFFF" />
            {/* Broom purple base */}
            <rect x="120" y="74" width="13" height="12" rx="4" fill="#200060" />
            {/* Flared bristles */}
            <path
              d="M117,73 L113,44 L140,44 L136,73 Z"
              fill="#F6C38B"
            />
            {/* Bristle vertical divider lines */}
            <line x1="120" y1="44" x2="122" y2="73" stroke="#DCA268" strokeWidth="1.5" />
            <line x1="126.5" y1="44" x2="126.5" y2="73" stroke="#DCA268" strokeWidth="1.5" />
            <line x1="133" y1="44" x2="131" y2="73" stroke="#DCA268" strokeWidth="1.5" />
          </g>

          {/* Center: Spray bottle */}
          <g transform="translate(76, 88)">
            {/* Spray nozzle */}
            <path d="M22,12 C16,10 6,18 2,24 C10,22 18,20 22,23 Z" fill="#F050C0" />
            <rect x="20" y="10" width="10" height="14" rx="2" fill="#F050C0" />
            <rect x="23" y="24" width="5" height="8" fill="#FFFFFF" />
            {/* Bottle body */}
            <path
              d="M17,32 C21,28 30,28 34,32 L36,65 C36,69 34,70 25,70 C16,70 14,69 14,65 Z"
              fill="#FF6DCF"
            />
            <rect x="15" y="48" width="20" height="9" fill="#F050C0" />
          </g>

          {/* Soapy Cyan Suds & Foam Bubbles */}
          <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))">
            {/* Cyan bubbly cloud */}
            <path
              d="M 68 152 
                 C 62 144, 68 132, 78 134 
                 C 82 124, 98 122, 105 130 
                 C 114 120, 132 124, 134 136 
                 C 144 138, 146 150, 140 156 
                 C 134 164, 116 166, 102 164 
                 C 86 166, 70 162, 68 152 Z"
              fill="url(#cyanFoam)"
            />
            {/* Individual foam bubbles */}
            <circle cx="120" cy="116" r="6" fill="#90E0F0" fillOpacity="0.85" />
            <circle cx="134" cy="124" r="4" fill="#B6F3FC" fillOpacity="0.85" />
            <circle cx="72" cy="128" r="4.5" fill="#90E0F0" fillOpacity="0.85" />

            {/* Bubble shine arcs */}
            <path d="M 80 142 A 8 8 0 0 1 92 140" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 102 136 A 10 10 0 0 1 116 136" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 124 146 A 7 7 0 0 1 133 148" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          {/* Sparkle Stars */}
          <g fill="#FFFFFF">
            {/* Top sparkle */}
            <path d="M100,56 Q100,64 104,64 Q100,64 100,72 Q100,64 96,64 Q100,64 100,56 Z" />
            {/* Left sparkle */}
            <path d="M78,82 Q78,87 81,87 Q78,87 78,92 Q78,87 75,87 Q78,87 78,82 Z" />
            {/* Right sparkle */}
            <path d="M125,92 Q125,96 128,96 Q125,96 125,100 Q125,96 122,96 Q125,96 125,92 Z" />
          </g>
        </g>

        {/* Outer Ring Border */}
        <circle cx="100" cy="112" r="62" stroke="#7030C0" strokeWidth="4.5" />

        {/* Top: Window Squeegee (overlaps ring) */}
        <g id="squeegee">
          {/* Squeegee handle pole down to circle */}
          <rect x="97" y="32" width="6" height="50" fill="#FFFFFF" rx="3" />
          {/* Squeegee purple mount bracket */}
          <path d="M85,30 L115,30 L108,40 L92,40 Z" fill="#200060" />
          {/* Squeegee magenta/pink sponge bar with ribbed texture */}
          <rect x="62" y="16" width="76" height="16" rx="2" fill="url(#pinkAccent)" stroke="#200060" strokeWidth="2.5" />
          {/* Vertical ribbed lines */}
          <g stroke="#200060" strokeWidth="1.5">
            <line x1="68" y1="18" x2="68" y2="30" />
            <line x1="73" y1="18" x2="73" y2="30" />
            <line x1="78" y1="18" x2="78" y2="30" />
            <line x1="83" y1="18" x2="83" y2="30" />
            <line x1="88" y1="18" x2="88" y2="30" />
            <line x1="93" y1="18" x2="93" y2="30" />
            <line x1="98" y1="18" x2="98" y2="30" />
            <line x1="103" y1="18" x2="103" y2="30" />
            <line x1="108" y1="18" x2="108" y2="30" />
            <line x1="113" y1="18" x2="113" y2="30" />
            <line x1="118" y1="18" x2="118" y2="30" />
            <line x1="123" y1="18" x2="123" y2="30" />
            <line x1="128" y1="18" x2="128" y2="30" />
            <line x1="133" y1="18" x2="133" y2="30" />
          </g>
        </g>
      </svg>

      {/* Brand Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-tight leading-none text-base sm:text-lg md:text-xl font-display uppercase ${
              inverted ? 'text-white' : 'text-[#200060]'
            }`}
          >
            Kimz Spotless
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${
                inverted ? 'text-[#90E0F0]' : 'text-[#7030C0]'
              }`}
            >
              Cleaning LLC
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F050C0]" />
            <span
              className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase ${
                inverted ? 'text-white/80' : 'text-slate-500'
              }`}
            >
              Portsmouth, VA
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
