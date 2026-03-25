import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const features = [
  {
    title: 'Expert Trainers',
    description: 'Learn from industry professionals with real experience.',
    icon: Award,
  },
  {
    title: 'Hands-on Projects',
    description: 'Build practical projects to strengthen your portfolio.',
    icon: Briefcase,
  },
  {
    title: 'Placement Support',
    description: 'Mock interviews, resume guidance, and referrals.',
    icon: Users,
  },
  {
    title: 'Industry Curriculum',
    description: 'Syllabus aligned with current hiring standards.',
    icon: GraduationCap,
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us
          </h2>
          <p className="mt-3 text-slate-600">
            A focused learning path backed by mentorship and placement support.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="card card-hover"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A66C2]/10">
                  <Icon className="h-6 w-6 text-[#0A66C2]" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
