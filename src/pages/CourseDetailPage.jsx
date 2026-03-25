import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Briefcase, Clock, Layers } from 'lucide-react';

const courseMap = {
  'python-full-stack-development': {
    title: 'Python Full Stack Development',
    details: [
      'Duration: 6 Months',
      'Mode: Classroom / Online',
      'Skills: Python, Django, React, APIs',
      'Career Outcomes: Full Stack Developer',
    ],
  },
  'java-full-stack-development': {
    title: 'Java Full Stack Development',
    details: [
      'Duration: 6 Months',
      'Mode: Classroom / Online',
      'Skills: Java, Spring Boot, React, SQL',
      'Career Outcomes: Full Stack Developer',
    ],
  },
  'web-development': {
    title: 'Web Development (HTML, CSS, JavaScript, React)',
    details: [
      'Duration: 4 Months',
      'Mode: Classroom / Online',
      'Skills: HTML, CSS, JS, React',
      'Career Outcomes: Frontend Developer',
    ],
  },
  'data-science-machine-learning': {
    title: 'Data Science & Machine Learning',
    details: [
      'Duration: 6 Months',
      'Mode: Online',
      'Skills: Python, ML, SQL, Statistics',
      'Career Outcomes: Data Scientist',
    ],
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence (AI)',
    details: [
      'Duration: 5 Months',
      'Mode: Classroom / Online',
      'Skills: AI, ML, Python',
      'Career Outcomes: AI Engineer',
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    details: [
      'Duration: 4 Months',
      'Mode: Classroom',
      'Skills: Figma, UX Research, Prototyping',
      'Career Outcomes: UI/UX Designer',
    ],
  },
};

const CourseDetailPage = () => {
  const { slug } = useParams();
  const course = courseMap[slug];

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
            A focused, outcome-driven program designed to build real-world skills
            and help you move into a tech career with confidence.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                {course.details.map((item, idx) => (
                  <li key={item} className="flex items-center gap-3">
                    {idx === 0 && <Clock size={16} className="text-[#0A66C2]" />}
                    {idx === 1 && <BookOpen size={16} className="text-[#0A66C2]" />}
                    {idx === 2 && <Layers size={16} className="text-[#0A66C2]" />}
                    {idx === 3 && <Briefcase size={16} className="text-[#0A66C2]" />}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-slate-900">Actions</h2>
              <p className="mt-2 text-sm text-slate-600">
                Get in touch to reserve your seat or explore other programs.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#0A66C2] px-6 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition text-center"
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
