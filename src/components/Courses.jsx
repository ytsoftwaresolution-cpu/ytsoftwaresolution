import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const courses = [
  'Python Full Stack Development',
  'Java Full Stack Development',
  'Web Development (HTML, CSS, JavaScript, React)',
  'Data Science & Machine Learning',
  'Artificial Intelligence (AI)',
  'UI/UX Design',
];

const Courses = () => {
  return (
    <section id="courses" className="bg-[#020617] py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-[#0A66C2]">
            Programs
          </p>
          <h2 className="mt-2 mb-10 text-3xl font-bold text-white">
            Software Courses
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#111827] to-[#0B1220] p-6 text-center text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(10,102,194,0.35)]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#0A66C2]/15 blur-2xl" />
              </div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2]/15 ring-1 ring-[#0A66C2]/30">
                <FiBookOpen className="text-[#0A66C2]" size={20} />
              </div>
              <p className="text-sm font-semibold leading-relaxed">{course}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
