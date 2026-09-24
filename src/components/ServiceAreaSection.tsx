import React from 'react';
import { MapPin, Clock, Home, Building, Store, Phone, CheckCircle, Navigation } from 'lucide-react';

interface ServiceAreaProps {
  onOpenQuote: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaProps> = ({ onOpenQuote }) => {
  const customerTiers = [
    {
      icon: Home,
      title: 'Residential Customers',
      description: 'Single-family homes, townhouses, luxury apartments, and condominiums throughout Portsmouth and neighboring Hampton Roads communities.',
      benefits: ['Flexible recurring schedules', 'Eco-friendly supplies upon request', 'Consistent dedicated cleaners'],
    },
    {
      icon: Building,
      title: 'Commercial Customers',
      description: 'Corporate headquarters, law offices, medical and dental clinics, and multi-tenant commercial facilities seeking top-tier hygiene.',
      benefits: ['After-hours & weekend sweeps', 'Disinfection compliance logs', 'Dedicated account lead'],
    },
    {
      icon: Store,
      title: 'Local Businesses',
      description: 'Retail boutiques, salons, fitness studios, cafes, and local shops requiring welcoming, streak-free presentation for customers.',
      benefits: ['High-traffic floor maintenance', 'Sanitized restrooms & mirrors', 'Rapid 24/7 turnover support'],
    },
  ];

  const towns = [
    'Portsmouth (Churchland, Olde Towne, Cradock)',
    'Chesapeake (Western Branch, Greenbrier)',
    'Suffolk (North Suffolk, Harbour View)',
    'Norfolk (Downtown, Ghent, Ocean View)',
    'Hampton Roads Surrounding Communities',
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F4F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#F050C0]" />
            <span>Local Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            Serving Portsmouth Area & Beyond
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Based at 3828 Towne Point Road in Portsmouth, VA, Kimz Spotless Cleaning LLC delivers round-the-clock professional service across our region.
          </p>
        </div>

        {/* 3 Customer Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {customerTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#401090] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#7030C0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#200060] tracking-tight mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {tier.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#7030C0] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Location & Contact Banner */}
        <div className="bg-[#200060] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#7030C0]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#90E0F0]">
                Portsmouth Headquarters & Coverage
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
                3828 Towne Point Road, Portsmouth, VA 23703
              </h3>
              <p className="text-sm text-purple-200 mt-3 leading-relaxed">
                Operating 24 hours a day, 7 days a week to accommodate emergency turnovers, weekend deep cleans, and nocturnal corporate shifts.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {towns.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-purple-100 border border-white/15"
                  >
                    <Navigation className="w-3 h-3 text-[#90E0F0]" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="tel:8562441287"
                className="py-3.5 px-6 rounded-xl font-bold text-center text-[#200060] bg-white hover:bg-slate-100 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#7030C0]" />
                <span>Call (856) 244-1287</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="py-3.5 px-6 rounded-xl font-bold text-center text-white brand-gradient border border-purple-400/40 hover:opacity-95 shadow-md transition-all"
              >
                Schedule Area Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
