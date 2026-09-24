import React, { useState } from 'react';
import { X, CheckCircle, Phone, ArrowRight, Sparkles, Building, Home, ShieldCheck } from 'lucide-react';
import { KimzLogo } from './KimzLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Residential Cleaning',
}) => {
  const [service, setService] = useState(initialService);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [bedrooms, setBedrooms] = useState('2-3 Bedrooms');
  const [frequency, setFrequency] = useState('One-Time Deep Clean');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-purple-100 p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#200060]">
              Quote Request Received!
            </h3>
            <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{fullName}</span>! Kimberly C. from Kimz Spotless Cleaning LLC will review your request for{' '}
              <span className="font-semibold text-[#7030C0]">{service}</span> and reach out to you shortly.
            </p>

            <div className="mt-8 p-5 bg-[#F8F9FC] rounded-2xl border border-slate-200 text-left space-y-2 text-xs text-slate-600 max-w-md mx-auto">
              <div><strong className="text-slate-800">Phone:</strong> {phone}</div>
              {email && <div><strong className="text-slate-800">Email:</strong> {email}</div>}
              {address && <div><strong className="text-slate-800">Service Location:</strong> {address}</div>}
              <div><strong className="text-slate-800">Frequency:</strong> {frequency}</div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8562441287"
                className="py-3 px-6 rounded-xl font-bold text-white brand-gradient flex items-center justify-center gap-2 shadow-md hover:opacity-95"
              >
                <Phone className="w-4 h-4 text-[#90E0F0]" />
                <span>Call Directly: (856) 244-1287</span>
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-6 rounded-xl font-bold text-[#200060] bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7030C0] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F050C0]" />
              <span>Fast & Free Estimate</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#200060]">
              Request a Free Cleaning Quote
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              No obligations, no hidden fees. Kimberly C. personally ensures accurate, transparent quotes.
            </p>

            {errorMsg && (
              <div className="mt-4 p-3 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Select Cleaning Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-hidden focus:border-[#7030C0] focus:ring-2 focus:ring-purple-200 transition-all bg-white"
                >
                  <option value="Residential Cleaning">Residential Cleaning (Regular upkeep)</option>
                  <option value="Deep Cleaning">Deep Cleaning (Detailed scrub & appliances)</option>
                  <option value="Maid Services">Maid Services (Dedicated home support)</option>
                  <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning (Turnover)</option>
                  <option value="Commercial Cleaning">Commercial Cleaning (Offices & facilities)</option>
                  <option value="Commercial Deep Cleaning">Commercial Deep Cleaning (Workplace scrub)</option>
                </select>
              </div>

              {/* Property Type & Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Property Type
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPropertyType('residential')}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                        propertyType === 'residential'
                          ? 'bg-[#200060] text-white border-[#200060]'
                          : 'border-slate-300 text-slate-600 hover:border-purple-300'
                      }`}
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Residential</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('commercial')}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                        propertyType === 'commercial'
                          ? 'bg-[#200060] text-white border-[#200060]'
                          : 'border-slate-300 text-slate-600 hover:border-purple-300'
                      }`}
                    >
                      <Building className="w-3.5 h-3.5" />
                      <span>Commercial</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Size / Scope
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#7030C0] bg-white"
                  >
                    <option value="1 Bedroom / Studio (Under 800 sq ft)">1 Bed / Studio (&lt; 800 sq ft)</option>
                    <option value="2-3 Bedrooms (800 - 1,800 sq ft)">2-3 Bedrooms (800 - 1,800 sq ft)</option>
                    <option value="4+ Bedrooms (1,800 - 3,000 sq ft)">4+ Bedrooms (1,800 - 3,000 sq ft)</option>
                    <option value="Luxury Home (3,000+ sq ft)">Luxury Home (3,000+ sq ft)</option>
                    <option value="Small Commercial Office (&lt; 1,500 sq ft)">Small Office (&lt; 1,500 sq ft)</option>
                    <option value="Large Commercial Office (1,500+ sq ft)">Large Office (1,500+ sq ft)</option>
                  </select>
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Requested Frequency
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['One-Time', 'Weekly', 'Bi-Weekly', 'Monthly'].map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                        frequency === freq
                          ? 'bg-purple-100 border-[#7030C0] text-[#200060] font-bold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Kimberly or Company Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#7030C0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(856) 244-1287"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#7030C0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#7030C0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Portsmouth Address / Zip
                  </label>
                  <input
                    type="text"
                    placeholder="3828 Towne Point Rd, Portsmouth"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#7030C0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Specific Notes or Areas of Concern
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Inside oven needs heavy degreasing, move-in inspection on Friday, pet stains on carpet, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#7030C0]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white text-base brand-gradient hover:opacity-95 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Free Quote Request</span>
                  <ArrowRight className="w-4 h-4 text-[#90E0F0]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7030C0]" />
                <span>Your contact info is strictly confidential &bull; No spam guaranteed</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
