import React from 'react';
import { Megaphone } from 'lucide-react';

const items = [
  'Join as ML Intern',
  'Join as Software Testing Intern',
  'Join as Digital Marketing Intern',
  'Join as Java Full Stack Intern',
  'Join as Data Science Intern',
];

const Ticker = () => {
  return (
    <div className="w-full bg-[#0B1B3A] text-white overflow-hidden">
      <div className="relative">
        <div className="flex w-max gap-10 py-3 ticker-track hover:[animation-play-state:paused]">
          {[...items, ...items].map((text, idx) => (
            <div key={`${text}-${idx}`} className="flex items-center gap-2 whitespace-nowrap text-sm">
              <Megaphone size={16} className="text-white/80" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
