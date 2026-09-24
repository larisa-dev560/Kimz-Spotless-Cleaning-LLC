import React, { useState, useEffect, useCallback } from 'react';
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Star
} from 'lucide-react';
import { Images } from '../assets/images';

interface HeroProps {
  onOpenQuote: () => void;
}

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  category: string;
  alt: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      image: Images.hero,
      title: 'Luxury Kitchen & Open Living Space',
      category: 'Residential Cleaning',
      alt: 'Kimz Spotless Cleaning LLC pristine clean luxury kitchen and living room',
    },
    {
      id: 2,
      image: Images.intro,
      title: 'Pristine Living Room & Hardwood Care',
      category: 'Regular Maintenance',
      alt: 'Immaculate sunlit living room with polished hardwood floors',
    },
    {
      id: 3,
      image: Images.kitchenClean,
      title: 'Deep Cleaned Kitchen & Spotless Appliances',
      category: 'Deep Cleaning Specialist',
      alt: 'Deep cleaned kitchen stove and gleaming surfaces',
    },
    {
      id: 4,
      image: Images.bathroomLuxury,
      title: 'Luxury Bathroom Porcelain & Polished Chrome',
      category: 'Sanitization & Shine',
      alt: 'Spotless modern luxury bathroom with porcelain tub and chrome fixtures',
    },
    {
      id: 5,
      image: Images.moveInOut,
      title: 'Move-In & Move-Out Inspection Ready',
      category: 'Turnover Cleaning',
      alt: 'Pristine empty apartment prepared for move-in inspection',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, [heroSlides.length]);

  // Automatically cycle through background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const trustHighlights = [
    'Residential Cleaning',
    'Commercial Cleaning',
    'Deep Cleaning',
    'Move-In / Move-Out Cleaning',
  ];

  return (
    <section
      id="home"
      className="relative min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden"
    >
      {/* Background Image Slider with Seamless Cross-fade */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? 'opacity-100 z-10'
                  : 'opacity-0 -z-10 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        {/* Subtle Brand Purple Gradient Scrim for high legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#200060]/95 via-[#200060]/85 to-[#401090]/65 lg:to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#200060]/85 via-transparent to-black/30" />
      </div>

      {/* Decorative Brand Light Glow */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#7030C0]/25 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#F050C0]/15 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Quiet Trust Tagline */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold text-[#90E0F0] tracking-wide">
            <Sparkles className="w-4 h-4 text-[#F050C0]" />
            <span>Portsmouth, VA &bull; Women-Owned &bull; 24/7 Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight text-balance">
            Professional Cleaning Services You Can Trust
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-purple-100/90 leading-relaxed font-normal max-w-2xl">
            Reliable residential and commercial cleaning solutions designed to leave every space spotless.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base brand-gradient hover:opacity-95 shadow-lg shadow-purple-950/40 border border-purple-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 text-[#90E0F0]" />
            </button>

            <a
              href="tel:8562441287"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 text-[#90E0F0]" />
              <span>Call (856) 244-1287</span>
            </a>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="mt-10 pt-8 border-t border-white/15">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustHighlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/95">
                  <div className="w-5 h-5 rounded-full bg-[#7030C0] flex items-center justify-center shrink-0 shadow-xs border border-purple-300/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#90E0F0]" />
                  </div>
                  <span className="text-sm font-medium tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-purple-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 Star Quality Finish</span>
            <span className="text-purple-400">&bull;</span>
            <span className="flex items-center gap-1 text-purple-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#90E0F0]" />
              100% Satisfaction Focused
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
