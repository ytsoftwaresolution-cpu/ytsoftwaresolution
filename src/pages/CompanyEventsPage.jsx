import React from 'react';

const events = [
  { title: 'Career Guidance Webinar', date: 'Aug 12, 2026' },
  { title: 'AI & ML Demo Day', date: 'Sep 05, 2026' },
  { title: 'Full Stack Bootcamp', date: 'Sep 20, 2026' },
];

const CompanyEventsPage = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Upcoming Events</h1>
        <p className="mt-3 text-slate-600">Stay updated with our workshops and webinars.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <div key={e.title} className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">{e.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{e.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyEventsPage;
