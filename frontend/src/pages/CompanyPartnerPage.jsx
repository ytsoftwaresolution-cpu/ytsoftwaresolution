import React from 'react';
import { Link } from 'react-router-dom';

const CompanyPartnerPage = () => {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Partner With Us</h1>
        <p className="mt-3 text-slate-600">
          Collaborate with us to build impactful training programs, internship pipelines,
          and enterprise solutions for your organization.
        </p>

        <div className="mt-6 rounded-xl bg-white p-6 shadow-md">
          <p className="text-sm text-slate-700">
            We partner with schools, colleges, startups, and enterprises to deliver
            customized learning pathways and technology solutions. Let's create
            something meaningful together.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-lg bg-[#0A66C2] px-6 py-2 text-sm font-semibold text-white"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyPartnerPage;
