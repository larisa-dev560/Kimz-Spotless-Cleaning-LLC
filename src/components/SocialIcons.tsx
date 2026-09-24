import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const YelpIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="Yelp"
  >
    <path d="M20.16 12.73c-.12-.66-.75-1.04-1.42-.87l-4.73 1.23c-.33.09-.5.42-.39.75.25.75.87 2.1 1.25 2.82.17.33.54.46.87.3l4.08-2.04c.6-.3.74-.95.34-2.19zm-3.08-5.91l-3.8 2.47c-.28.18-.36.55-.18.84.44.71 1.24 1.95 1.77 2.61.23.29.65.34.94.12l3.43-2.67c.53-.41.6-1.12.18-1.57-.42-.45-1.39-1.28-2.34-1.8zm-5.74 3.76V4.11c0-.33-.27-.61-.61-.61-.83 0-2.31.14-3.07.28-.33.06-.57.35-.55.69l.34 4.88c.03.34.33.59.67.55.83-.1 2.3-.23 3.22-.3zm-2.07 3.99l-4.6-1.63c-.32-.11-.67.04-.8.36-.3.73-.8 2.2-1.01 2.94-.09.33.07.68.39.8l4.47 1.69c.32.12.67-.04.8-.36.29-.73.8-2.2 1.01-2.94.09-.33-.07-.68-.39-.8zm1.88 1.49l-2.02 4.09c-.14.28-.06.63.19.82.63.48 1.95 1.34 2.67 1.76.29.17.66.08.83-.2l2.36-3.86c.16-.27.09-.62-.17-.8-.64-.44-1.92-1.27-2.61-1.68-.28-.17-.65-.08-.82.2z" />
  </svg>
);

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/p/Kimz-Spotless-Cleaning-LLC-61557665664512/',
  instagram: 'https://www.instagram.com/kimzspotless/',
  yelp: 'https://www.yelp.com/biz/kimz-spotless-cleaning-portsmouth-3',
  email: 'kimzspotlesscleaning@gmail.com',
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = 'flex items-center gap-3',
  iconClassName = 'w-4 h-4',
  showLabels = false,
}) => {
  return (
    <div className={className}>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kimz Spotless Cleaning LLC on Facebook"
        className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
      >
        <Facebook className={iconClassName} />
        {showLabels && <span className="text-xs">Facebook</span>}
      </a>

      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kimz Spotless Cleaning LLC on Instagram"
        className="p-1.5 rounded-lg text-slate-300 hover:text-[#F050C0] hover:bg-white/10 transition-colors flex items-center gap-1.5"
      >
        <Instagram className={iconClassName} />
        {showLabels && <span className="text-xs">Instagram</span>}
      </a>

      <a
        href={SOCIAL_LINKS.yelp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kimz Spotless Cleaning LLC on Yelp"
        className="p-1.5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-white/10 transition-colors flex items-center gap-1.5"
      >
        <YelpIcon className={iconClassName} />
        {showLabels && <span className="text-xs">Yelp</span>}
      </a>
    </div>
  );
};
