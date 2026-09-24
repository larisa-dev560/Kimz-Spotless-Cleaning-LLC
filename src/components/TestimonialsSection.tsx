import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Marcus & Danielle T.',
      location: 'Portsmouth, VA (Churchland)',
      service: 'Deep Cleaning & Stove Degreasing',
      rating: 5,
      date: '2 weeks ago',
      text: 'Kimberly and her crew completely revived our kitchen! Our oven and cooktop had months of baked-on grease that we couldn’t get off with store spray. Kimz Spotless Cleaning made it look literally like the day we moved in. Worth every penny!',
    },
    {
      name: 'Dr. Raymond V.',
      location: 'Portsmouth, VA (Downtown)',
      service: 'Commercial Office Nightly Clean',
      rating: 5,
      date: '1 month ago',
      text: 'As a local medical practice, hygiene is critical. Kimz Spotless Cleaning LLC handles our offices and waiting areas with supreme reliability. Having 24/7 availability gives us total peace of mind. Outstanding women-owned local business.',
    },
    {
      name: 'Sarah M.',
      location: 'Chesapeake / Portsmouth Border',
      service: 'Move-Out Cleaning',
      rating: 5,
      date: '3 weeks ago',
      text: 'We needed a fast move-out clean to secure our security deposit return. Kimberly responded immediately, gave an honest flat quote, and left the apartment immaculate—baseboards, appliances, closets, everything passed landlord inspection with zero deductions!',
    },
    {
      name: 'Tanya B.',
      location: 'Portsmouth, VA',
      service: 'Bi-Weekly Residential Maid Service',
      rating: 5,
      date: 'Just recently',
      text: 'Coming home on cleaning days is the best feeling of my week. The carpet lines are gorgeous, the bathrooms gleam, and you can smell the fresh clean air the moment you open the front door. Truly spotless!',
    },
  ];

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? reviews.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === reviews.length - 1 ? 0 : prevIdx + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F050C0]" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Real feedback from homeowners and local Portsmouth businesses who trust Kimz Spotless Cleaning LLC.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#F8F9FC] rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg relative">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-purple-100 -z-0 pointer-events-none" />

            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  5.0 Verified Review
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#200060] font-medium leading-relaxed italic">
                "{current.text}"
              </blockquote>

              {/* Author & Details */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span>{current.name}</span>
                    <ShieldCheck className="w-4 h-4 text-[#7030C0]" />
                  </h4>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {current.location} &bull; <span className="text-[#401090] font-medium">{current.service}</span>
                  </div>
                </div>

                <span className="text-xs text-slate-400 font-medium">
                  {current.date}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-slate-200 text-[#200060] hover:bg-purple-50 hover:border-purple-300 shadow-xs transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#401090]' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-slate-200 text-[#200060] hover:bg-purple-50 hover:border-purple-300 shadow-xs transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
