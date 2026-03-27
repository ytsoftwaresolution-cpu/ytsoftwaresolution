import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Zap, BookOpen, Headphones } from 'lucide-react';

const features = [
  {
    title: 'Expert Trainers',
    description: 'Learn from industry veterans with years of experience in top tech companies.',
    icon: <Users className="text-[#1565C0]" />,
  },
  {
    title: 'Real-Time Projects',
    description: 'Work on actual industry projects to gain practical hands-on experience.',
    icon: <Zap className="text-[#1565C0]" />,
  },
  {
    title: 'Placement Support',
    description: 'Dedicated cell to help you land your dream job with top-tier companies.',
    icon: <Briefcase className="text-[#1565C0]" />,
  },
  {
    title: 'Internship Opportunities',
    description: 'Get guaranteed internship opportunities to kickstart your professional journey.',
    icon: <Award className="text-[#1565C0]" />,
  },
  {
    title: 'Updated Curriculum',
    description: 'Our courses are constantly updated to match the latest industry trends.',
    icon: <BookOpen className="text-[#1565C0]" />,
  },
  {
    title: '24/7 Mentorship',
    description: 'Get your doubts cleared anytime with our round-the-clock support system.',
    icon: <Headphones className="text-[#1565C0]" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#EEF4FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1565C0] font-bold tracking-widest uppercase text-sm mb-4">Why Us?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
              We Don't Just Teach, <br />
              We <span className="text-[#1565C0]">Build Careers</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Our holistic approach to training ensures that you're not just learning code, 
              but understanding how to solve real-world problems and thrive in a professional environment.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.10)]">
                <p className="text-3xl font-bold text-[#1565C0] mb-1">95%</p>
                <p className="text-sm text-slate-600">Placement Rate</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.10)]">
                <p className="text-3xl font-bold text-[#1565C0] mb-1">500+</p>
                <p className="text-sm text-slate-600">Hiring Partners</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.16)]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E7F0FB] flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
