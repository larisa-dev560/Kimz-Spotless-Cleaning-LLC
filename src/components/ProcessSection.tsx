import React from 'react';
import { PhoneCall, FileText, Sparkles, Smile, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Contact Us',
      desc: 'Reach out by phone or our online form anytime 24/7. Tell us about your home or commercial space.',
    },
    {
      num: '02',
      icon: FileText,
      title: 'Get Your Quote',
      desc: 'Receive a fast, transparent quote tailored to your exact needs with straightforward pricing.',
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Professional Cleaning',
      desc: 'Our experienced cleaning specialists arrive on time with commercial-grade tools and eco-conscious supplies.',
    },
    {
      num: '04',
      icon: Smile,
      title: 'Enjoy Your Spotless Space',
      desc: 'Step into an immaculate, sanitized environment. Your complete satisfaction is 100% guaranteed.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F050C0]" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            Our Simple Cleaning Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            From first contact to final inspection, our 4-step workflow is smooth, dependable, and stress-free.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line behind steps on large screens */}
          <div className="hidden lg:block absolute top-1/3 left-16 right-16 h-0.5 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative z-10 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-[#401090] text-[#7030C0] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-2xl font-black text-purple-200 group-hover:text-[#7030C0] transition-colors font-display">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#200060] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#7030C0] group-hover:text-[#401090]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner under process */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white brand-gradient hover:opacity-95 shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Step 1: Request Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#90E0F0]" />
          </button>
        </div>
      </div>
    </section>
  );
};
