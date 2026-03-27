import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  { name: 'Ravindra V', title: 'Senior Trainer' },
  { name: 'Subba Reddy P', title: 'Technical Trainer' },
];

const Trainers = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-[#F8FAFC] to-[#EEF4FF]">
      <div className="mx-auto w-full max-w-6xl px-4 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Expert Trainers
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Learn from industry professionals with deep technical expertise.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="relative rounded-2xl bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.16)] border border-slate-100"
            >
              <div className="absolute top-0 left-0 h-1.5 w-full rounded-t-2xl bg-[#1565C0]/10" />
              <div className="text-base font-semibold text-slate-900">{trainer.name}</div>
              <div className="mt-1 text-sm text-slate-600">{trainer.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
