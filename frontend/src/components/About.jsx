import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-[#0B0F1A]">
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-white"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0A66C2]">
              About Us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Empowering the Future of Education and Enterprise.
            </h2>
            <div className="mt-4 space-y-4 text-slate-300">
              <p>
                At YT Software Solutions, we believe that the right tools and the
                right talent change the world. We operate at the intersection of
                technology and human potential, providing a comprehensive suite of
                solutions designed to elevate both institutions and individuals.
              </p>
              <p>
                For Schools: We provide cutting-edge educational products that
                transform classrooms into hubs of innovation.
              </p>
              <p>
                For Businesses: Our bespoke software services help companies
                navigate the digital landscape with precision and ease.
              </p>
              <p>
                For Careers: Our specialized training and placement programs
                bridge the skills gap, turning ambitious learners into
                industry-ready professionals.
              </p>
              <p>
                From the first day of school to the first day of a new career, we
                are your partners in progress.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-[#0A66C2]">10+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0A66C2]">120+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Industry Projects
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0A66C2]">5000+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Learners Trained
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Students collaborating"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0A66C2]/20 blur-2xl" />
            <div className="absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-[#0A66C2]/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
