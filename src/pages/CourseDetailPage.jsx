import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, Clock, Layers, ListChecks } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetailPage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="bg-[#f5f5f5] py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-2xl font-bold text-slate-900">Course not found</h1>
          <Link className="mt-4 inline-block text-[#0A66C2]" to="/courses">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5]">
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2]/10 px-3 py-1 text-xs font-semibold text-[#0A66C2]">
            Program Details
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            {course.title}
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            {course.fullDescription}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-slate-900">Key Topics</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                {course.topics.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ListChecks size={16} className="text-[#0A66C2] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-slate-900">Course Info</h2>
              <p className="mt-2 text-sm text-slate-600">
                Key details and career outcomes for this program.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Clock size={16} className="text-[#0A66C2]" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-700">
                  <Briefcase size={16} className="text-[#0A66C2] mt-0.5" />
                  <span>Career Opportunities: {course.roles.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Layers size={16} className="text-[#0A66C2]" />
                  <span>Program Level: Beginner to Advanced</span>
                </div>
                <Link
                  to="/contact"
                  className="mt-2 rounded-lg bg-[#0A66C2] px-6 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition text-center"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/courses"
                  className="rounded-lg border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700 text-center hover:bg-slate-50 transition"
                >
                  Back to Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
