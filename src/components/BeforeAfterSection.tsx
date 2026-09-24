import React, { useState } from 'react';
import { ArrowRight, Sliders, Sparkles, CheckCircle2 } from 'lucide-react';
import { Images } from '../assets/images';

interface BeforeAfterSectionProps {
  onViewWork: () => void;
  onOpenQuote: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onViewWork, onOpenQuote }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<'stove' | 'appliances' | 'floors'>('stove');

  // Before & After Pairs
  const transformations = {
    stove: {
      title: 'Deep Kitchen Degreasing & Stove Restoration',
      description: 'Removing tough baked-on grease, burnt residue, and carbon deposits from burner pans and heating elements back to pristine metallic shine.',
      beforeImg: Images.stoveBefore,
      afterImg: Images.kitchenClean,
      highlights: ['Burner drip pans lifted & scrubbed', 'Oven interior carbon dissolved', 'White enamel sanitized & streak-free'],
    },
    appliances: {
      title: 'Refrigerator Interior Deep Sanitization',
      description: 'Shelves, drawers, door seals, and crisper bins disinfected and odor-eliminated, leaving hygienic and food-safe surfaces.',
      beforeImg: Images.stoveBefore,
      afterImg: Images.intro,
      highlights: ['Door bins & seals sanitized', 'Spill stains eliminated', 'Food-safe organic cleaners'],
    },
    floors: {
      title: 'Precision Vacuuming & Carpet Line Grooming',
      description: 'High-filtration vacuuming with professional groomer diamond lines, lifting embedded dust and allergens.',
      beforeImg: Images.stoveBefore,
      afterImg: Images.moveInOut,
      highlights: ['Edge-to-edge baseboard vacuuming', 'Embedded dander & dust extraction', 'Signature diamond pattern grooming'],
    },
  };

  const currentPair = transformations[activeTab];

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-[#F1F4F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F050C0]" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            See The Difference
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Real cleaning results from real spaces. Slide back and forth to inspect the depth of detail Kimberly C. and her team deliver.
          </p>

          {/* Interactive Switcher */}
          <div className="mt-8 inline-flex p-1 bg-white rounded-xl shadow-xs border border-slate-200">
            <button
              onClick={() => setActiveTab('stove')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'stove'
                  ? 'bg-[#200060] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#200060]'
              }`}
            >
              Stove & Oven Deep Clean
            </button>
            <button
              onClick={() => setActiveTab('floors')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'floors'
                  ? 'bg-[#200060] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#200060]'
              }`}
            >
              Move-In Floor Scrub
            </button>
          </div>
        </div>

        {/* Transformation Showcase */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Slider on Left (or side-by-side) */}
            <div className="lg:col-span-8">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden select-none shadow-md border border-slate-100">
                {/* After Image (Full width background) */}
                <img
                  src={currentPair.afterImg}
                  alt="After cleaning result"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#200060] text-[#90E0F0] text-xs font-extrabold uppercase tracking-wider rounded-md shadow-md">
                  AFTER: SPOTLESS
                </span>

                {/* Before Image (Clipped with slider position) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentPair.beforeImg}
                    alt="Before cleaning"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 text-white text-xs font-extrabold uppercase tracking-wider rounded-md shadow-md">
                    BEFORE
                  </span>
                </div>

                {/* Vertical Divider Line with Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-9 h-9 rounded-full bg-[#200060] text-white border-2 border-white shadow-xl flex items-center justify-center -ml-4.5">
                    <Sliders className="w-4 h-4 text-[#90E0F0]" />
                  </div>
                </div>

                {/* Invisible input range for accessible touch & drag */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                  aria-label="Before and After visual comparison slider"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
                <span>&larr; Drag slider left to see After</span>
                <span>Drag slider right to see Before &rarr;</span>
              </div>
            </div>

            {/* Right Side: Details & Action */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#200060] leading-snug">
                  {currentPair.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentPair.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  {currentPair.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#7030C0] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={onViewWork}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white brand-gradient hover:opacity-95 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4 text-[#90E0F0]" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#200060] bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  Book Similar Transformation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
