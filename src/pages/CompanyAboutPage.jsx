import React from 'react';

const CompanyAboutPage = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          About YT Software Solutions
        </h1>
        <div className="mt-6 grid gap-8 md:grid-cols-2 items-center">
          <div className="text-slate-700 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Empowering the Future of Education and Enterprise.
            </h2>
            <p>
              At YT Software Solutions, we believe that the right tools and the
              right talent change the world. We operate at the intersection of
              technology and human potential, providing a comprehensive suite of
              solutions designed to elevate both institutions and individuals.
            </p>
            <p>
              For Schools: We provide cutting-edge educational products that
              transform classrooms into hubs of innovation.
            </p>
            <p>
              For Businesses: Our bespoke software services help companies
              navigate the digital landscape with precision and ease.
            </p>
            <p>
              For Careers: Our specialized training and placement programs bridge
              the skills gap, turning ambitious learners into industry-ready
              professionals.
            </p>
            <p>
              From the first day of school to the first day of a new career, we
              are your partners in progress.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=900"
              alt="Team collaboration"
              className="h-64 w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAboutPage;
