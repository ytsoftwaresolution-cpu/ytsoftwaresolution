import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Star, Users } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years Experience', icon: Award },
  { value: '10000+', label: 'Students Trained', icon: Users },
  { value: '50+', label: 'Courses', icon: BookOpen },
  { value: '4.8', label: 'Rating', icon: Star },
  { value: '95%', label: 'Placement Rate', icon: Briefcase },
];

const StatsSection = () => {
  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 -mt-6 md:-mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-2.5 text-center shadow-[0_10px_22px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.16)]"
              >
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2]/10 ring-1 ring-[#0A66C2]/20">
                  <Icon size={15} className="text-[#0A66C2]" />
                </div>
                <p className="text-[15px] font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-[11px] text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
