import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'Do you provide placement assistance?',
    a: 'Yes, we offer placement support including resume building and mock interviews.',
  },
  {
    q: 'Are courses available online?',
    a: 'Yes, we provide both online and classroom training options.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'No. Our programs start from fundamentals and progress to advanced topics.',
  },
  {
    q: 'How long are the programs?',
    a: 'Most programs run between 3 to 6 months based on the track.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
          <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
          <p className="mt-3 text-slate-600">
            Quick answers to common questions.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.q} className="rounded-xl bg-white p-5 shadow-md">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                >
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-xl">{open ? '−' : '+'}</span>
                </button>
                {open && (
                  <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
