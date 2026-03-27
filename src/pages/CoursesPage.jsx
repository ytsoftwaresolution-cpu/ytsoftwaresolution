import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/courses';

const CoursesPage = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Course Listing
            </h1>
            <p className="mt-3 text-slate-600">
              Browse our programs and view full details for each course.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.18)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F0FB] text-[#1565C0]">
                  <BookOpen size={18} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {course.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {course.shortDescription}
                </p>
                <Link
                  to={`/course/${course.slug}`}
                  className="mt-4 inline-flex rounded-lg bg-[#0A66C2] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:shadow-md hover:scale-[1.02]"
                >
                  View Details
                </Link>
              </div>
            ))}
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
