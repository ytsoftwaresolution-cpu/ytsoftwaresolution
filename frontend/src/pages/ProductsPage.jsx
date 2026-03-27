import React from 'react';
import { motion } from 'framer-motion';
import medicalBillingImg from '../assets/medical-billing.png';

const ProductsPage = () => {
  return (
    <div className="bg-[#020617] text-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-[#1565C0] to-[#1E40AF]">
        <div className="mx-auto w-full max-w-6xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="mt-3 text-slate-100"
          >
            Smart solutions for healthcare and education
          </motion.p>
        </div>
      </section>

      {/* Medical Billing */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid gap-8 md:grid-cols-2 items-center rounded-xl bg-[#111827] p-6 shadow-md transition hover:scale-[1.01]"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Medical Billing Software</h2>
              <p className="text-slate-300">
                Our Medical Billing Software is designed to simplify and streamline healthcare
                billing processes. It helps clinics and hospitals manage patient records,
                billing, insurance claims, and payments efficiently.
              </p>
              <div className="text-sm text-slate-300 space-y-1">
                <p>Key Benefits:</p>
                <ul className="list-disc list-inside">
                  <li>Easy patient data management</li>
                  <li>Accurate billing and invoicing</li>
                  <li>Insurance claim processing</li>
                  <li>Secure and reliable system</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-[#0B1220]">
              <img
                src={medicalBillingImg}
                alt="Medical billing software"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educational Software */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid gap-8 md:grid-cols-2 items-center rounded-xl bg-[#111827] p-6 shadow-md transition hover:scale-[1.01]"
          >
            <div className="order-2 md:order-1 rounded-xl overflow-hidden bg-[#0B1220]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900"
                alt="Educational software"
                className="h-64 w-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"900\" height=\"600\"><rect width=\"100%\" height=\"100%\" fill=\"%23111827\"/><text x=\"50%\" y=\"50%\" fill=\"%23cbd5f5\" font-size=\"24\" text-anchor=\"middle\" font-family=\"Arial\">Educational Software</text></svg>';
                }}
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-2xl font-bold">Educational Software</h2>
              <p className="text-slate-300">
                Our Educational Software provides a smart platform for institutions to manage
                learning and administration. It supports digital classrooms, student tracking,
                and performance analysis.
              </p>
              <div className="text-sm text-slate-300 space-y-1">
                <p>Key Benefits:</p>
                <ul className="list-disc list-inside">
                  <li>Online learning management</li>
                  <li>Student performance tracking</li>
                  <li>Course and content management</li>
                  <li>User-friendly interface</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
