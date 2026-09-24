import React from 'react';
import { KimzLogo } from './KimzLogo';
import { Phone, MapPin, Clock, Mail, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { SocialLinks, SOCIAL_LINKS } from './SocialIcons';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer id="contact" className="bg-[#120038] text-slate-300 pt-16 pb-12 border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-purple-900/40">
          {/* Brand info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <KimzLogo inverted={true} className="h-12 w-auto" />
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal pt-2">
              Kimz Spotless Cleaning LLC provides reliable residential and commercial cleaning solutions throughout Portsmouth, VA and neighboring Hampton Roads communities. Dedicated to quality, transparency, and spotless spaces.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#90E0F0] font-semibold">
              <Sparkles className="w-4 h-4 text-[#F050C0]" />
              <span>Proudly Women-Owned &bull; Owner Kimberly C.</span>
            </div>

            {/* Social media presence */}
            <div className="pt-3">
              <div className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-2.5">
                Follow & Review Us
              </div>
              <SocialLinks
                className="flex items-center gap-2.5"
                iconClassName="w-4 h-4"
                showLabels={false}
              />
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#90E0F0] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#90E0F0] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#90E0F0] transition-colors">Services</a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-[#90E0F0] transition-colors">Before & After</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#90E0F0] transition-colors">Project Gallery</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#90E0F0] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Cleaning Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Cleaning Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#90E0F0] transition-colors">Residential Home Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#90E0F0] transition-colors">Kitchen & Oven Deep Cleaning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#90E0F0] transition-colors">Maid & Housekeeping Support</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#90E0F0] transition-colors">Move-In / Move-Out Turnovers</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#90E0F0] transition-colors">Commercial Office Maintenance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#90E0F0] transition-colors">Commercial Deep Scrubbing</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contact Kimberly C.
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:8562441287"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0 text-[#90E0F0] group-hover:bg-[#401090]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">(856) 244-1287</div>
                  <div className="text-[11px] text-purple-300">Call or Text 24/7</div>
                </div>
              </a>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0 text-[#F050C0] group-hover:bg-[#401090]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-[13px] sm:text-sm whitespace-nowrap hover:underline">
                    {SOCIAL_LINKS.email}
                  </div>
                  <div className="text-[11px] text-purple-300">Direct Email Inquiries</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0 text-[#F050C0]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">3828 Towne Point Road</div>
                  <div className="text-[11px] text-purple-300">Portsmouth, VA 23703</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-900/60 flex items-center justify-center shrink-0 text-[#90E0F0]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Open 24 Hours</div>
                  <div className="text-[11px] text-purple-300">Monday &ndash; Sunday Continuous</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white brand-gradient hover:opacity-95 shadow-md transition-all text-center"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/70">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Kimz Spotless Cleaning LLC. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Portsmouth, VA</span>
            <span>&bull;</span>
            <span>Structured for WordPress Elementor</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-purple-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#90E0F0]" />
              Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
