import React from 'react';
import { motion } from 'framer-motion';

const options = [
  {
    title: 'Classroom Training',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Online Training',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Internship Programs',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=800',
  },
];

const LearningOptions = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Learning Options</h2>
          <p className="mt-3 text-slate-600">
            Choose the learning mode that fits your schedule.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {options.map((option) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-white overflow-hidden shadow-md"
            >
              <img
                src={option.image}
                alt={option.title}
                className="h-40 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{option.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;
