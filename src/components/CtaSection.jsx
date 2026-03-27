import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#6D28D9] to-[#1E40AF] p-10 text-center text-white shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Start Your Journey Today</h2>
          <p className="mt-3 text-slate-100">
            Join thousands of learners who transformed their careers with us.
          </p>
          <Link
            to="/enroll"
            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:scale-[1.02]"
          >
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
