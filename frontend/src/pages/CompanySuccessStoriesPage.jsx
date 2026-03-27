import React from 'react';

const stories = [
  {
    name: 'Rahul Sharma',
    role: 'Full Stack Developer',
    course: 'Full Stack Development',
    desc: 'Gained practical skills and cracked his first tech role within months.',
  },
  {
    name: 'Priya Patel',
    role: 'Data Analyst',
    course: 'Data Science',
    desc: 'Transitioned from non-tech to analytics with real project experience.',
  },
  {
    name: 'Ankit Verma',
    role: 'UI/UX Designer',
    course: 'UI/UX Design',
    desc: 'Built a portfolio that helped him land a design role quickly.',
  },
];

const CompanySuccessStoriesPage = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Success Stories</h1>
        <p className="mt-3 text-slate-600">Real outcomes from real learners.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.name} className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.role}</p>
              <p className="mt-2 text-sm text-slate-700">Course: {s.course}</p>
              <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySuccessStoriesPage;
