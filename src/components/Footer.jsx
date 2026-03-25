import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A] py-10">
      <div className="page-container text-white">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">YT Software Solutions</div>
            <p className="mt-3 text-sm text-slate-400">
              Premium training institute focused on skills, projects, and placements.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link className="hover:text-white" to="/">Home</Link></li>
              <li><Link className="hover:text-white" to="/courses">Courses</Link></li>
              <li><Link className="hover:text-white" to="/features">Features</Link></li>
              <li><Link className="hover:text-white" to="/internships">Internships</Link></li>
              <li><Link className="hover:text-white" to="/about">About</Link></li>
              <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#60A5FA]" />
                <span>
                  5/102 Vijayanagaram Street, Proddatur, Kadapa Dist,
                  Andhra Pradesh 516360
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#60A5FA]" />
                <span>+91 9940414106, +91 8886148860</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#60A5FA]" />
                <span>manohar@ytsoftwaresolution.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          © 2026 YT Software Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
