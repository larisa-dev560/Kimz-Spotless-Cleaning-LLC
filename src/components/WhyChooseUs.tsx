import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  CheckCircle, 
  CalendarClock, 
  HeartHandshake,
  Star,
  Award
} from 'lucide-react';
import { Images } from '../assets/images';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Reliable Service',
      desc: 'Professional cleaning solutions you can depend on every single time. Punctual, thoroughly trained, and reliable.',
    },
    {
      icon: Sparkles,
      title: 'Attention To Detail',
      desc: 'Every area receives careful attention. We never cut corners — we dust, sanitize, and polish the details others miss.',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial',
      desc: 'Solutions for homes and businesses. From quiet family townhouses to commercial hubs, we adapt to every requirement.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Results',
      desc: 'A spotless finish every time. Backed by Kimberly C.’s uncompromising standard of cleanliness and care.',
    },
    {
      icon: CalendarClock,
      title: 'Flexible Cleaning Options',
      desc: 'Services designed around customer needs. Weekly, bi-weekly, monthly, emergency turnovers, or 24/7 night commercial sweeps.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focused',
      desc: 'Your satisfaction is important. We communicate clearly, listen to your priorities, and guarantee high-touch service.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-3">
            <Award className="w-3.5 h-3.5 text-[#F050C0]" />
            <span>The Spotless Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            Why Choose Kimz Spotless Cleaning?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We take pride in delivering spotless, hygienic spaces with unwavering reliability, local dedication, and unmatched attention to detail.
          </p>
        </div>

        {/* Content with integrated visual feature card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 4 cols: Feature Showcase Visual */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 min-h-[360px] lg:min-h-full">
            <img
              src={Images.bathroomLuxury}
              alt="Sparkling clean bathroom with polished fixtures"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#200060]/90 via-[#200060]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h4 className="text-xl font-bold font-display">Women-Owned Excellence</h4>
              <p className="text-xs text-purple-100 mt-1 leading-relaxed">
                Directly overseen by Kimberly C. to guarantee high standards and trustworthy local service for Portsmouth and surrounding areas.
              </p>
            </div>
          </div>

          {/* Right 8 cols: 6 Trust Pillars Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8F9FC] border border-slate-200/80 hover:border-purple-300 transition-all duration-200 hover:shadow-md flex flex-col justify-start"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-100 text-[#401090] flex items-center justify-center mb-4 shrink-0 shadow-xs">
                    <IconComponent className="w-5 h-5 text-[#7030C0]" />
                  </div>
                  <h3 className="text-base font-bold text-[#200060] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
