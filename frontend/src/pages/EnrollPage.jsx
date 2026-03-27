import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { courses } from '../data/courses';
import { courseCategories } from '../data/courseCategories';

const EnrollPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const slug = params.get('course');
  const apiBaseUrl =
    import.meta.env.VITE_API_URL || 'http://localhost:4000';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCourse = useMemo(
    () => courses.find((course) => course.slug === slug),
    [slug]
  );

  const selectedCategory = useMemo(() => {
    if (!slug) return null;
    return courseCategories.find((category) => {
      if (category.slug && category.slug === slug) return true;
      return category.courses.some((course) => course.slug === slug);
    });
  }, [slug]);

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          category: selectedCategory?.title || 'General Inquiry',
          course: selectedCourse?.title || 'All Courses'
        })
      });
      const payload = await response.json();
      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'Unable to submit enrollment');
      }
      setStatus({
        type: 'success',
        message: 'Enrollment submitted! Our team will contact you shortly.'
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Enroll Now
            </h1>
            <p className="mt-3 text-slate-600">
              Share your details and our team will get back to you shortly.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#E7F0FB] px-3 py-1 text-xs font-semibold text-[#0A66C2]">
                  Selected Course
                </span>
                {selectedCategory && (
                  <span className="text-sm font-semibold text-slate-700">
                    {selectedCategory.title}
                  </span>
                )}
                {selectedCourse && (
                  <span className="text-sm font-semibold text-slate-900">
                    {selectedCourse.title}
                  </span>
                )}
              </div>

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange('name')}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your mobile number"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Course Category
                  </label>
                  <input
                    type="text"
                    value={selectedCategory?.title || 'General Inquiry'}
                    readOnly
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Selected Course
                  </label>
                  <input
                    type="text"
                    value={selectedCourse?.title || 'All Courses'}
                    readOnly
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your preferred timings or questions..."
                    value={formData.message}
                    onChange={handleChange('message')}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                  />
                </div>
                {status.type !== 'idle' && (
                  <div
                    className={`rounded-lg px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                </button>
              </form>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <h2 className="text-xl font-semibold text-slate-900">
                Enrollment Summary
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We will confirm your course and share the next steps.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Category
                  </div>
                  <div className="mt-1 text-base font-semibold text-slate-900">
                    {selectedCategory?.title || 'All Categories'}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Course
                  </div>
                  <div className="mt-1 text-base font-semibold text-slate-900">
                    {selectedCourse?.title || 'Any Course'}
                  </div>
                </div>
                {selectedCourse?.duration && (
                  <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Duration
                    </div>
                    <div className="mt-1 text-base font-semibold text-slate-900">
                      {selectedCourse.duration}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollPage;
