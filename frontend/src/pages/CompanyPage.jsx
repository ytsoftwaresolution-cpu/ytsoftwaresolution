import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiLayers, FiUsers } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const CompanyPage = () => {
  return (
    <div className="bg-[#f5f5f5] text-slate-900">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-[#1565C0] to-[#1E40AF] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 text-center">
          <motion.h1 {...fadeUp} className="text-3xl md:text-4xl font-extrabold">
            Empowering the Future of Education and Enterprise
          </motion.h1>
          <motion.p {...fadeUp} className="mt-4 text-slate-100 max-w-3xl mx-auto">
            At YT Software Solutions, we believe that the right tools and the right
            talent change the world. We operate at the intersection of technology
            and human potential, providing a comprehensive suite of solutions designed
            to elevate both institutions and individuals.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div {...fadeUp} className="space-y-4 text-slate-700">
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
                From the first day of school to the first day of a new career, we are
                your partners in progress.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=900"
                alt="Team collaboration"
                className="h-72 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold">
            Our Services
          </motion.h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'For Schools',
                desc: 'Innovative educational products that transform learning environments.',
              },
              {
                title: 'For Businesses',
                desc: 'Custom software services for modern digital transformation.',
              },
              {
                title: 'For Careers',
                desc: 'Training and placement programs that build job-ready talent.',
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl bg-white p-6 shadow-md transition border border-slate-200"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold">
            Why Choose Us
          </motion.h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Expert Trainers', desc: 'Industry professionals with real experience.', icon: FiAward },
              { title: 'Hands-on Projects', desc: 'Practical work that builds confidence.', icon: FiBriefcase },
              { title: 'Placement Support', desc: 'Guided interviews and resume support.', icon: FiUsers },
              { title: 'Industry Curriculum', desc: 'Updated syllabus aligned to hiring needs.', icon: FiLayers },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-xl bg-white p-6 shadow-md transition border border-slate-200"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2]/10">
                  <item.icon className="text-[#0A66C2]" />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold">
            Success Stories
          </motion.h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Rahul Sharma',
                role: 'Full Stack Developer',
                course: 'Full Stack Development',
                desc: 'Gained real project experience and secured a tech role quickly.',
              },
              {
                name: 'Priya Patel',
                role: 'Data Analyst',
                course: 'Data Science',
                desc: 'Transitioned from non-tech to analytics with guided mentorship.',
              },
              {
                name: 'Ankit Verma',
                role: 'UI/UX Designer',
                course: 'UI/UX Design',
                desc: 'Built a strong portfolio and landed a design role.',
              },
            ].map((s) => (
              <motion.div
                key={s.name}
                {...fadeUp}
                className="rounded-xl bg-white p-5 shadow-md border border-slate-200"
              >
                <h3 className="text-base font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.role}</p>
                <p className="mt-2 text-sm text-slate-700">Course: {s.course}</p>
                <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#0A66C2] p-8 text-center shadow-lg text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Partner With Us</h2>
            <p className="mt-3 text-slate-100">
              Collaborate with us to deliver impactful training and technology solutions.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-lg bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-md hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] transition"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-16 bg-[#0B0F1A] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 grid gap-8 md:grid-cols-4 text-slate-300">
          <div>
            <h3 className="text-lg font-semibold text-white">YT Software Solutions</h3>
            <p className="mt-3 text-sm">
              Premium training institute focused on skills, projects, and placements.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Home</li>
              <li>Courses</li>
              <li>Features</li>
              <li>Internships</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <p className="mt-3 text-sm">Hyderabad</p>
            <p className="text-sm">+91 9940414106</p>
            <p className="text-sm">+91 8886148860</p>
            <p className="text-sm">manohar@ytsoftwaresolution.com</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Social</h4>
            <div className="mt-3 flex gap-3 text-white">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyPage;
