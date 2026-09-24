import React, { useState, useEffect } from 'react';
import { KimzLogo } from './KimzLogo';
import { Phone, Menu, X, ArrowRight, Clock, MapPin, Mail } from 'lucide-react';
import { SocialLinks, SOCIAL_LINKS } from './SocialIcons';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#200060] text-white text-xs py-2 px-4 border-b border-purple-900/40 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-200">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-purple-200">
              <Clock className="w-3.5 h-3.5 text-[#90E0F0]" />
              <span>Open 24 Hours</span>
            </span>
            <span className="hidden sm:inline text-purple-400">·</span>
            <span className="hidden sm:flex items-center gap-1.5 text-purple-200">
              <MapPin className="w-3.5 h-3.5 text-[#F050C0]" />
              <span>Portsmouth, VA</span>
            </span>
            <span className="hidden md:inline text-purple-400">·</span>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="hidden md:flex items-center gap-1.5 text-purple-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#90E0F0]" />
              <span>{SOCIAL_LINKS.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center border-r border-purple-800/80 pr-3 mr-1">
              <SocialLinks iconClassName="w-3.5 h-3.5" />
            </div>

            <a
              href="tel:8562441287"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#90E0F0] transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#90E0F0]" />
              <span>(856) 244-1287</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-scrolled py-3 border-b border-slate-200/80 shadow-md'
            : 'bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Company Logo */}
            <a href="#home" className="flex items-center group">
              <KimzLogo
                className="h-10 sm:h-12 w-auto"
                inverted={!isScrolled && false}
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 hover:text-[#7030C0] ${
                    isScrolled ? 'text-slate-700' : 'text-slate-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:8562441287"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-[#200060] bg-purple-50 hover:bg-purple-100 border border-purple-200/80 transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#7030C0]" />
                <span className="whitespace-nowrap">Call Now</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white brand-gradient hover:opacity-95 shadow-sm transition-all transform active:scale-95 whitespace-nowrap"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#90E0F0]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:8562441287"
                className="p-2 rounded-lg text-[#200060] bg-purple-100 hover:bg-purple-200 sm:hidden"
                aria-label="Call Kimz Spotless Cleaning"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#200060] hover:bg-slate-100 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-slate-800 hover:text-[#7030C0] hover:bg-purple-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Contact & Social Details */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#7030C0] rounded-lg bg-slate-50"
                >
                  <Mail className="w-4 h-4 text-[#7030C0]" />
                  <span className="truncate">{SOCIAL_LINKS.email}</span>
                </a>

                <div className="flex items-center justify-between px-3 py-2 bg-purple-50/60 rounded-lg">
                  <span className="text-xs font-bold text-[#200060]">Connect With Us:</span>
                  <div className="text-slate-700">
                    <SocialLinks iconClassName="w-4 h-4 text-[#401090]" />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:8562441287"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-[#200060] bg-purple-100 hover:bg-purple-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#7030C0]" />
                  <span>Call (856) 244-1287</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-white brand-gradient hover:opacity-95 shadow-md transition-all"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#90E0F0]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

