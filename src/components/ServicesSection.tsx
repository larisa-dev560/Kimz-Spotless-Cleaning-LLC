import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, X, Phone } from 'lucide-react';
import { Images } from '../assets/images';

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  popular?: boolean;
  checklist: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'residential',
      title: 'Residential Cleaning',
      shortDesc: 'Regular cleaning solutions for homes.',
      fullDesc: 'Customized recurring and one-time home cleaning designed to keep your living room, bedrooms, bathrooms, and kitchen pristine. Ideal for weekly, bi-weekly, or monthly upkeep.',
      image: Images.intro,
      checklist: [
        'Dusting all furniture and accessible surfaces',
        'Vacuuming rugs and mopping all hard surface floors',
        'Kitchen countertop sanitization and appliance wipe-down',
        'Complete bathroom disinfection (tubs, sinks, toilets)',
        'Trash removal and liner replacement',
      ],
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      shortDesc: 'Detailed cleaning for every area.',
      fullDesc: 'An intensive, top-to-bottom scrub that tackles baked-on grease, soap scum, baseboards, vents, and hidden dirt that routine cleanings leave behind.',
      image: Images.kitchenClean,
      popular: true,
      checklist: [
        'Detailed hand-scrubbing of oven interiors & stove tops',
        'Inside refrigerator and freezer sanitization',
        'Hand-wiping all baseboards, door frames & trim',
        'Tile grout deep scrub and limescale removal',
        'Ceiling fan blades, light fixtures & switch plates',
      ],
    },
    {
      id: 'maid-services',
      title: 'Maid Services',
      shortDesc: 'Reliable home cleaning support.',
      fullDesc: 'Dedicated home support for busy households. Professional, respectful, and detail-driven staff that treat your personal space with care and discretion.',
      image: Images.bathroomLuxury,
      checklist: [
        'Linen changing and bed making',
        'Laundry folding and light organization support',
        'Thorough kitchen polish and dish loading',
        'Disinfecting high-touch areas throughout the home',
        'Customized housekeeping checklist per your instructions',
      ],
    },
    {
      id: 'move-in-out',
      title: 'Move-In / Move-Out Cleaning',
      shortDesc: 'Prepare spaces before or after moving.',
      fullDesc: 'Ensure your security deposit is protected or step into an immaculate, germ-free new home. We leave every cabinet, drawer, floor, and closet spotless.',
      image: Images.moveInOut,
      checklist: [
        'Inside all kitchen cabinets, pantries and drawers',
        'Inside and behind accessible major appliances',
        'Thorough vacuuming and wet mopping of all rooms',
        'Closet shelves, baseboards and window sills wiped',
        'Turnover inspection-ready cleanliness',
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial Cleaning',
      shortDesc: 'Professional office and business cleaning.',
      fullDesc: 'Keep your Portsmouth business or corporate office healthy, presentable, and inviting. Scheduled around your operating hours with zero disruptions.',
      image: Images.officeCommercial,
      checklist: [
        'Workstation dusting and electronic surface sanitization',
        'Commercial low-pile carpet vacuuming and edge cleaning',
        'Lobby, reception and conference room presentation polish',
        'Break room & kitchen disinfection',
        'Restroom sanitizing and continuous restocking',
      ],
    },
    {
      id: 'commercial-deep',
      title: 'Commercial Deep Cleaning',
      shortDesc: 'Detailed workplace cleaning.',
      fullDesc: 'High-level commercial decontamination, hard surface scrubbing, industrial tile cleaning, and scheduled deep scrubs for healthcare, retail, and corporate hubs.',
      image: Images.officeCommercial,
      checklist: [
        'Deep grout and floor tile machine scrub',
        'High-reach air vent, lighting and wall cleaning',
        'Commercial kitchen and breakroom heavy degreasing',
        'Full facility touchpoint disinfection protocol',
        'Flexible 24-hour scheduling for minimal downtime',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F050C0]" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            Our Cleaning Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether for your home or business, we provide dependable, tailored cleaning backed by our spotless satisfaction guarantee.
          </p>
        </div>

        {/* 6 Services Grid with REAL Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 relative"
            >
              {svc.popular && (
                <div className="absolute top-4 right-4 z-10 bg-[#F050C0] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Requested
                </div>
              )}

              {/* Real Photo Thumbnail */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                    {svc.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  {/* Highlights preview */}
                  <ul className="mt-4 space-y-2">
                    {svc.checklist.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#7030C0] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(svc)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#401090] hover:text-[#7030C0] transition-colors group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuote(svc.title)}
                    className="px-3 py-1.5 text-xs font-bold text-white brand-gradient rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-xl overflow-hidden h-48 mb-5">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-xs font-bold text-[#7030C0] uppercase tracking-wider mb-1">
              Service Details
            </div>
            <h3 className="text-2xl font-extrabold text-[#200060]">
              {selectedService.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <h4 className="mt-6 text-sm font-bold text-slate-900 mb-3">
              What's Included:
            </h4>
            <ul className="space-y-2.5">
              {selectedService.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="w-4 h-4 rounded-full bg-purple-100 text-[#7030C0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuote(title);
                }}
                className="flex-1 py-3 text-center rounded-xl font-bold text-white text-sm brand-gradient shadow-md hover:opacity-95 transition-opacity"
              >
                Get Free Quote for {selectedService.title}
              </button>
              <a
                href="tel:8562441287"
                className="py-3 px-5 text-center rounded-xl font-bold text-[#200060] bg-purple-50 hover:bg-purple-100 border border-purple-200 text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#7030C0]" />
                <span>Call (856) 244-1287</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
