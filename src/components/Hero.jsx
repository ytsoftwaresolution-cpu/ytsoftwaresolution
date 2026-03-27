import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Laptop2, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const techIcons = ['PY', 'JAVA', 'HTML', 'DB'];

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1] via-[#1565C0] to-[#1E40AF]" />

      <motion.div
        className="absolute -top-28 right-8 h-80 w-80 rounded-full bg-[#60A5FA]/20 blur-[100px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-36 left-6 h-[420px] w-[420px] rounded-full bg-[#64A3FF]/15 blur-[130px]"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 flex min-h-[85vh] items-center gap-12 lg:flex-row flex-col">
          <div className="text-white lg:text-left text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-5xl md:text-[56px] font-extrabold leading-tight tracking-tight max-w-xl mx-auto lg:mx-0"
            >
              Build Your Tech Career With Us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90">
                <GraduationCap size={14} className="text-white" />
                Training
              </span>
              <span className="text-white/50">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90">
                <Laptop2 size={14} className="text-white" />
                Development
              </span>
              <span className="text-white/50">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90">
                <LineChart size={14} className="text-white" />
                Placement Assistance
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="mt-4 text-lg text-slate-100/90 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Industry-aligned training, hands-on projects, and placement support
              to help you land your dream role faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/courses"
                className="rounded-full bg-white px-7 py-3 text-sm md:text-base font-semibold text-slate-900 shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,255,255,0.7)]"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#9CC7FF] to-[#1565C0]">
              <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="Student"
                  className="h-[360px] w-[300px] rounded-2xl object-cover transition duration-500 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {techIcons.map((label, index) => (
              <div
                key={label}
                className="absolute px-3 py-1.5 rounded-full bg-white/95 text-[11px] font-bold text-slate-900 shadow-lg ring-1 ring-slate-200/70 backdrop-blur-sm"
                style={{
                  top: ['8%', '25%', '68%', '55%'][index],
                  left: ['-6%', '92%', '85%', '-8%'][index],
                }}
              >
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
