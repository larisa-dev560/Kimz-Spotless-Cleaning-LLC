import React from 'react';
import { Phone, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onOpenQuote: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden text-white" style={{
      background: 'linear-gradient(135deg, #200060 0%, #401090 45%, #7030C0 100%)'
    }}>
      {/* Subtle Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F050C0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#90E0F0]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#90E0F0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#90E0F0] text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F050C0]" />
          <span>Experience Kimz Spotless Standards</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ready For A Spotless Space?
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Contact Kimz Spotless Cleaning LLC today for professional cleaning services.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[#200060] bg-white hover:bg-purple-50 shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#7030C0]" />
          </button>

          <a
            href="tel:8562441287"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <Phone className="w-4 h-4 text-[#90E0F0]" />
            <span>Call (856) 244-1287</span>
          </a>
        </div>

        {/* Guarantees */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-purple-200">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#90E0F0]" />
            Free, Zero-Obligation Estimates
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F050C0]" />
            100% Satisfaction Guarantee
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#90E0F0]" />
            Available 24 Hours / 7 Days
          </span>
        </div>
      </div>
    </section>
  );
};
