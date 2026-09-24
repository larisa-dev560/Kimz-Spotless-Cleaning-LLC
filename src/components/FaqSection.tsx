import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenQuote: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What cleaning services do you offer?',
      answer:
        'Kimz Spotless Cleaning LLC offers a complete suite of residential and commercial cleaning services. Our core offerings include regular residential maintenance, comprehensive deep cleaning, maid and housekeeping support, move-in / move-out turnover cleaning, routine commercial office upkeep, and heavy-duty commercial deep cleaning.',
    },
    {
      question: 'Do you provide deep cleaning?',
      answer:
        'Yes! Deep cleaning is one of our most requested specialties. We perform intensive, top-to-bottom cleans that include degreasing stove tops, interior oven cleaning, scrubbing refrigerator interiors and seals, detailed baseboard wiping, bathroom tile grout scrub, and sanitizing hard-to-reach areas.',
    },
    {
      question: 'Do you clean commercial properties?',
      answer:
        'Absolutely. We serve corporate offices, medical clinics, retail stores, waiting areas, and local commercial facilities across Portsmouth and Hampton Roads. Because we operate 24 hours, we can perform night, early morning, or weekend cleans so your daily operations are never interrupted.',
    },
    {
      question: 'How can I request a quote?',
      answer:
        'You can request a free, no-obligation quote in just seconds by clicking the "Get Free Quote" button anywhere on our website, or by calling us directly at (856) 244-1287. Kimberly C. personally ensures prompt responses, transparent pricing, and zero hidden fees.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We are proudly based in Portsmouth, VA (3828 Towne Point Road) and actively service the entire Portsmouth area, Churchland, Olde Towne, Chesapeake (Western Branch), Suffolk (Harbour View), Norfolk, and surrounding Hampton Roads neighborhoods.',
    },
    {
      question: 'Do I need to supply cleaning equipment and products?',
      answer:
        'No, our team arrives fully equipped with commercial-grade cleaning equipment, microfiber cloths, degreasers, and disinfectant solutions. If you have specific preferences or eco-friendly product requirements, let us know and we will gladly accommodate!',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#F050C0]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Everything you need to know about our Portsmouth cleaning services, scheduling, and guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#7030C0]/50 bg-purple-50/30 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#200060]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#401090] text-white rotate-180'
                        : 'bg-purple-100 text-[#401090]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8F9FC] border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#200060]">Have a question not answered here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Call Kimberly C. directly or send us a quick quote inquiry.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8562441287"
              className="px-4 py-2 rounded-lg text-xs font-bold text-[#200060] bg-purple-100 hover:bg-purple-200 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#7030C0]" />
              <span>(856) 244-1287</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white brand-gradient hover:opacity-95 shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>Ask Online</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#90E0F0]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
