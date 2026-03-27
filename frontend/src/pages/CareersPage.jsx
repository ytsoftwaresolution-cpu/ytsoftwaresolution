import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const CareersPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#E7F0FB] via-white to-[#EAF2FF] text-slate-900">
      {/* Join Our Team */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-5xl px-4">
          <motion.h1 {...fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Join Our Team
          </motion.h1>
          <p className="mt-3 text-center text-sm text-slate-600">
            Share your details and we’ll get back to you.
          </p>

          <motion.form
            {...fadeUp}
            className="mt-8 rounded-2xl bg-white p-8 md:p-10 shadow-lg border border-slate-100 space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-slate-700">Name *</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Mobile No. *</label>
              <input
                type="tel"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email *</label>
              <input
                type="email"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Subject *</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20"
                placeholder="Application for ..."
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Message *</label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20"
                placeholder="Tell us about yourself..."
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Resume (PDF only) *</label>
              <input
                type="file"
                accept="application/pdf"
                className="mt-2 w-full rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              />
              <p className="mt-2 text-xs text-slate-500">(Allows only PDF for file upload)</p>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#1565C0] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:scale-[1.02]"
            >
              Submit
            </button>
          </motion.form>

          <motion.div {...fadeUp} className="mt-10 text-center text-sm text-slate-600">
            If you are hardworking, enthusiastic, and result‑oriented, YT Software Solutions
            is the right place to build your career and grow with real opportunities.
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
