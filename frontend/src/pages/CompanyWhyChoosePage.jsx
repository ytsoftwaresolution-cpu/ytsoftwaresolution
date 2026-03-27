import React from 'react';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const features = [
  { title: 'Expert Trainers', desc: 'Learn from professionals with deep industry experience.', icon: Award },
  { title: 'Hands-on Projects', desc: 'Build real projects that strengthen your portfolio.', icon: Briefcase },
  { title: 'Placement Support', desc: 'Mock interviews, resume guidance, and referrals.', icon: Users },
  { title: 'Industry Curriculum', desc: 'Updated syllabus aligned with current hiring needs.', icon: GraduationCap },
];

const CompanyWhyChoosePage = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Us</h1>
        <p className="mt-3 text-slate-600">
          A learner-first approach with practical training and career support.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2]/10">
                <f.icon size={18} className="text-[#0A66C2]" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyWhyChoosePage;
