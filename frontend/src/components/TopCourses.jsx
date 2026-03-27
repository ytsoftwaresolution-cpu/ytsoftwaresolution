import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Python Full Stack Development',
    slug: 'python-full-stack-development',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    duration: '6 Months',
    audience: 'Beginners to Intermediate',
    prereq: 'Basic programming',
    roles: 'Full Stack Developer',
  },
  {
    title: 'Java Full Stack Development',
    slug: 'java-full-stack-development',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    duration: '5 Months',
    audience: 'Graduates & Professionals',
    prereq: 'Math & Python basics',
    roles: 'Data Analyst, Data Scientist',
  },
  {
    title: 'Web Development (HTML, CSS, JavaScript, React)',
    slug: 'web-development',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    duration: '6 Months',
    audience: 'Tech learners',
    prereq: 'Python + ML basics',
    roles: 'ML Engineer',
  },
  {
    title: 'Data Science & Machine Learning',
    slug: 'data-science-machine-learning',
    image:
      'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800',
    duration: '4 Months',
    audience: 'Creative learners',
    prereq: 'No prior required',
    roles: 'UI/UX Designer',
  },
  {
    title: 'Artificial Intelligence (AI)',
    slug: 'artificial-intelligence',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800',
    duration: '5 Months',
    audience: 'Tech learners',
    prereq: 'Python basics',
    roles: 'AI Engineer',
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    image:
      'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800',
    duration: '4 Months',
    audience: 'Creative learners',
    prereq: 'No prior required',
    roles: 'UI/UX Designer',
  },
];

const TopCourses = ({ limit }) => {
  const [query, setQuery] = useState('');

  const visibleCourses = useMemo(() => {
    const base = typeof limit === 'number' ? courses.slice(0, limit) : courses;
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((course) => course.title.toLowerCase().includes(q));
  }, [limit, query]);

  return (
    <section className="bg-[#f5f5f5] pt-14 pb-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-5 text-center text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
          TOP COURSES TO TRANSFORM YOUR CAREER
        </h2>

        {typeof limit !== 'number' && (
          <div className="mb-6 flex justify-center">
            <div className="w-full max-w-xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
            </div>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <div
              key={course.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.18)]"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-32 w-full object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="flex flex-1 flex-col bg-[#1e293b] p-4 text-white">
                <h3 className="text-sm font-semibold leading-snug">{course.title}</h3>

                <div className="mt-auto pt-3 flex gap-2">
                  <Link
                    to={`/enroll?course=${course.slug}`}
                    className="rounded-md bg-[#0A66C2] px-3 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:shadow-md hover:scale-[1.02] text-center"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="rounded-md bg-[#60A5FA] px-3 py-2 text-[11px] font-semibold text-white text-center shadow-sm transition hover:shadow-md hover:scale-[1.02]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
