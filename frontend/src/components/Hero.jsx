import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroHighlights = [
  { label: 'Training', icon: GraduationCap },
  { label: 'Development', icon: Code },
  { label: 'Placement Assistance', icon: Briefcase }
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[70vh] bg-gradient-to-b from-[#0A3D91] via-[#0F4BAA] to-[#0F4BAA]">
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="text-white text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-5xl md:text-[56px] font-extrabold leading-tight tracking-tight max-w-2xl"
            >
              Build Your Tech Career With Us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="mt-5 flex flex-wrap items-center gap-3"
            >
              {heroHighlights.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white/90 shadow-sm transition duration-300 hover:bg-white/20"
                >
                  <Icon size={16} className="text-white" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="mt-4 text-lg text-white/90 leading-relaxed max-w-2xl"
            >
              Industry-aligned training, hands-on projects, and placement support
              to help you land your dream role faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/courses"
                className="rounded-full bg-white px-7 py-3 text-sm md:text-base font-semibold text-[#0F4BAA] shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,255,255,0.7)]"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
