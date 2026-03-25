import React from 'react';
import { Facebook, Instagram, Mail, Phone, Search, Youtube } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0A66C2] via-[#B91C1C] to-[#0A66C2] text-white">
      <div className="page-container flex h-10 items-center justify-between text-xs">
        <div className="hidden sm:flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Phone size={14} />
            +91XXXXXXXXXX
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} />
            info@domain.com
          </span>
        </div>

        <div className="flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search courses..."
              className="h-8 w-full rounded-full bg-white/90 pl-9 pr-3 text-xs text-slate-700 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="transition hover:opacity-80" aria-label="social">
              <Icon size={14} />
            </a>
          ))}
          <a href="#" className="transition hover:opacity-80" aria-label="whatsapp">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white text-[8px] font-bold">
              W
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
