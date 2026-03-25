import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Us</h2>
          <p className="mt-3 text-slate-600">
            Tell us about your goals and we will reach out.
          </p>
        </motion.div>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">
          <form className="p-8 md:p-10 space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Subject</label>
              <select
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              >
                <option>Course Inquiry</option>
                <option>Internship Inquiry</option>
                <option>Placement Support</option>
                <option>General Query</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your requirements..."
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>

          <div className="bg-[#0B2B6B] text-white p-8 md:p-10">
            <h3 className="text-3xl font-bold">Get in Touch</h3>
            <p className="mt-3 text-slate-200">
              Our team is ready to assist you with training, placements, and product inquiries.
            </p>

            <div className="mt-8 space-y-5 text-sm text-slate-100">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#60A5FA]" />
                <div>
                  <div className="font-semibold text-white">Headquarters</div>
                  <div>
                    5/102 Vijayanagaram Street, Proddatur, Kadapa Dist,
                    Andhra Pradesh 516360
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#60A5FA]" />
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div>+91 9940414106, +91 8886148860</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaWhatsapp className="text-[#60A5FA]" />
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div>+91 9940414106, +91 8886148860</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#60A5FA]" />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div>manohar@ytsoftwaresolution.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
