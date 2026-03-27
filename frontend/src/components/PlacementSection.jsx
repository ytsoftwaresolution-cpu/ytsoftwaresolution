import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const logos = ['Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS', 'Accenture'];

const PlacementSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#020617] to-[#0B0F1A] py-12 px-4">
      <div className="mx-auto w-full max-w-6xl text-white">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Students Work At</h2>
          <p className="text-sm text-slate-400">
            Trusted by top companies across industries.
          </p>
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex w-40 items-center justify-center rounded-xl bg-[#111827] py-3 text-sm font-semibold text-slate-300 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] hover:scale-105"
            >
              <span>{logo}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            to="/contact"
            className="rounded-lg bg-[#0A66C2] px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(10,102,194,0.8)] hover:scale-105"
          >
            View Placements
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
