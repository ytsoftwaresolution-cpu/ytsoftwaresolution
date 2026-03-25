import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const internships = [
  {
    title: 'Full Stack Developer Internship',
    description: 'Work on real client projects with mentor feedback every week.',
    badge: 'Popular',
  },
  {
    title: 'Data Science Internship',
    description: 'Build data pipelines and dashboards using Python and SQL.',
    badge: 'New',
  },
  {
    title: 'UI/UX Design Internship',
    description: 'Design flows, prototypes, and test with real users.',
    badge: 'Career Boost',
  },
];

const Internships = () => {
  return (
    <section id="internships" className="section bg-[#0B0F1A]">
      <div className="page-container text-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Internship Programs
          </h2>
          <p className="mt-3 text-slate-400">
            Hands-on internships designed to make you industry ready.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className="card card-hover"
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="rounded-full bg-[#0A66C2]/20 px-3 py-1 text-xs font-semibold text-[#0A66C2]">
                  {internship.badge}
                </span>
                <span className="rounded-full bg-[#D4AF37]/20 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
                  Certified
                </span>
              </div>
              <h3 className="text-lg font-semibold">{internship.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {internship.description}
              </p>
              <Link to="/careers" className="mt-5 inline-flex text-sm font-semibold text-[#0A66C2]">
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
