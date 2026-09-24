import React from 'react';
import { ArrowRight, Check, Award, HeartHandshake, Shield } from 'lucide-react';
import { Images } from '../assets/images';

interface IntroSectionProps {
  onLearnMore: () => void;
  onOpenQuote: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onLearnMore, onOpenQuote }) => {
  const features = [
    {
      title: 'Women-Owned & Locally Dedicated',
      desc: 'Owned by Kimberly C., rooted right here in Portsmouth, VA with personalized client care.',
    },
    {
      title: 'Residential & Commercial Mastery',
      desc: 'Expertise across high-end homes, bustling corporate offices, retail spaces, and move transitions.',
    },
    {
      title: 'Attention To Every Corner',
      desc: 'We clean what others overlook, from baseboards and appliances to detailed carpet grooming.',
    },
    {
      title: 'Always Available (24/7)',
      desc: 'Round-the-clock availability for emergency turnovers, night office cleans, and flexible scheduling.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
              <img
                src={Images.intro}
                alt="Immaculate living room cleaned by Kimz Spotless Cleaning LLC"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#200060]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Trust Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-xl border border-purple-100 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#401090] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#90E0F0]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#200060] uppercase tracking-wider">Spotless Standard</h4>
                    <p className="text-xs text-slate-600 font-medium">Guaranteed thoroughness in every room</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#F050C0]/10 rounded-full blur-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#7030C0]/10 rounded-full blur-xl -z-10" />
          </div>

          {/* Right Column: Text & Value proposition */}
          <div className="lg:col-span-6">
            <div className="text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F050C0]" />
              <span>About Kimz Spotless Cleaning LLC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200060] tracking-tight leading-tight">
              Your Trusted Cleaning Partner
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Kimz Spotless Cleaning LLC provides reliable cleaning solutions for residential and commercial customers. From deep cleaning to regular maintenance, we focus on quality service, attention to detail, and creating spotless spaces.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-[#401090] flex items-center justify-center mt-1 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white brand-gradient hover:opacity-95 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#90E0F0]" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#401090] bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
              >
                <span>Request Pricing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
