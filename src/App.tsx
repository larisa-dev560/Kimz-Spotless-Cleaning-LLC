/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ProjectGallery } from './components/ProjectGallery';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Residential Cleaning');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-800 selection:bg-[#7030C0] selection:text-white">
      {/* 1. Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 3. Introduction Section */}
        <IntroSection
          onLearnMore={() => handleScrollToSection('services')}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 4. Services Preview Section */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Before & After Section */}
        <BeforeAfterSection
          onViewWork={() => handleScrollToSection('projects')}
          onOpenQuote={() => handleOpenQuote('Deep Cleaning')}
        />

        {/* 7. Project Gallery Preview */}
        <ProjectGallery onOpenQuote={handleOpenQuote} />

        {/* 8. Cleaning Process Section */}
        <ProcessSection onOpenQuote={() => handleOpenQuote()} />

        {/* 9. Testimonial Section */}
        <TestimonialsSection />

        {/* 10. Service Area Section */}
        <ServiceAreaSection onOpenQuote={() => handleOpenQuote()} />

        {/* 11. FAQ Section */}
        <FaqSection onOpenQuote={() => handleOpenQuote()} />

        {/* 12. Final Call To Action Section */}
        <FinalCta onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 13. Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Free Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        initialService={selectedServiceForQuote}
      />
    </div>
  );
}
