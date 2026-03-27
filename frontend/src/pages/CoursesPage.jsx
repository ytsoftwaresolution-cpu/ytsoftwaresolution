import React, { useState } from 'react';
import { CheckCircle2, Plus, Minus } from 'lucide-react';
import { courseCategories } from '../data/courseCategories';

const CoursesPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-[#f5f5f5]">
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Course Listing
            </h1>
            <p className="mt-3 text-slate-600">
              Explore our complete course structure by category.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {courseCategories.map((category, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={category.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[#F2F6FB]"
                  >
                    <span className="text-base md:text-lg font-semibold text-slate-900">
                      {category.title}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-[#0A66C2]">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200 px-5 py-4">
                      <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                        {category.courses.map((course) => (
                          <li key={course.slug} className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#0A66C2]" />
                            <span>{course.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
            <h2 className="text-lg font-semibold text-slate-900">
              Common Features in All Courses
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-700">
              {[
                'Hands-on real-world projects',
                'Placement assistance',
                'Industry expert trainers',
                'Internship opportunities',
                'Flexible learning (beginner → advanced)',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1565C0]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
