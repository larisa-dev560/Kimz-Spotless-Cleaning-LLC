import React, { useState } from 'react';
import { Sparkles, ZoomIn, X, ArrowRight, Check } from 'lucide-react';
import { Images } from '../assets/images';

interface ProjectGalleryProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'deep';
  tag: string;
  image: string;
  description: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'deep'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Deep Kitchen Degreasing & Stove Finish',
      category: 'deep',
      tag: 'Kitchens',
      image: Images.kitchenClean,
      description: 'Complete removal of carbonized grease and food residue from cooktop, burners, and range oven.',
    },
    {
      id: 'g2',
      title: 'Pristine Living Room & Hardwood Care',
      category: 'residential',
      tag: 'Floors',
      image: Images.intro,
      description: 'Careful microfiber dusting, surface polish, and vacuuming for a modern Portsmouth residence.',
    },
    {
      id: 'g3',
      title: 'Commercial Executive Suite & Conference Room',
      category: 'commercial',
      tag: 'Offices',
      image: Images.officeCommercial,
      description: 'Low-pile modular carpet vacuuming, boardroom table polish, and high-touch surface sanitization.',
    },
    {
      id: 'g4',
      title: 'Luxury Bathroom Porcelain & Chrome Polish',
      category: 'deep',
      tag: 'Bathrooms',
      image: Images.bathroomLuxury,
      description: 'Deep tile scrubbing, limescale elimination, mirror streak-free buffing, and hygienic sanitization.',
    },
    {
      id: 'g5',
      title: 'Empty Apartment Move-Out Turnover',
      category: 'residential',
      tag: 'Move-In / Move-Out',
      image: Images.moveInOut,
      description: 'Full inspection-ready overhaul of an empty apartment including baseboards, cabinets, and floors.',
    },
    {
      id: 'g6',
      title: 'Sunlit Kitchen Surface & Appliance Buffing',
      category: 'residential',
      tag: 'Cleaning Results',
      image: Images.hero,
      description: 'Routine residential upkeep leaving quartz counters, backsplash, and fixtures sparkling clean.',
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#7030C0] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F050C0]" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200060] tracking-tight">
            Our Work & Cleaning Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Take a closer look at our spotless craftsmanship across residential homes, detailed appliance restoration, and commercial facilities.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F8F9FC] rounded-2xl max-w-md mx-auto border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                filter === 'all'
                  ? 'bg-[#200060] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#200060]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                filter === 'residential'
                  ? 'bg-[#200060] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#200060]'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                filter === 'commercial'
                  ? 'bg-[#200060] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#200060]'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('deep')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                filter === 'deep'
                  ? 'bg-[#200060] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#200060]'
              }`}
            >
              Deep Cleaning
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#200060]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#200060] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  {item.tag}
                </div>

                {/* Zoom Icon Overlay on Hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 group-hover:bg-white text-[#200060] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom title inside image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-purple-200 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-black/80 rounded-full transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-96 w-full bg-slate-900">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#7030C0] uppercase tracking-wider">
                  {activeItem.tag}
                </span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Portsmouth Area Project
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#200060]">
                {activeItem.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Guaranteed Spotless Finish
                </span>
                <button
                  onClick={() => {
                    const title = activeItem.title;
                    setActiveItem(null);
                    onOpenQuote(title);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white brand-gradient shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Quote For This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#90E0F0]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
