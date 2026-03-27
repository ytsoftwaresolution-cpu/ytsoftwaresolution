import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/YTSoftware.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyLinks = [];
  const productLinks = [];

  const courseGroups = [
    {
      title: 'Basic Courses',
      items: [
        { name: 'MS Office', to: '/courses' },
        { name: 'Internet Concepts', to: '/courses' },
        { name: 'Tally ERP', to: '/courses' },
      ],
    },
    {
      title: 'Testing',
      items: [
        { name: 'Software Testing', to: '/courses' },
        { name: 'Manual Testing', to: '/courses' },
        { name: 'Selenium', to: '/courses' },
      ],
    },
    {
      title: 'Data Science',
      items: [
        { name: 'Data Science', to: '/courses' },
        { name: 'Machine Learning', to: '/courses' },
        { name: 'Artificial Intelligence', to: '/courses' },
        { name: 'Deep Learning', to: '/courses' },
      ],
    },
    {
      title: 'Programming',
      items: [
        { name: 'C / C++', to: '/courses' },
        { name: 'Java', to: '/courses' },
        { name: 'Python', to: '/courses' },
        { name: 'Full Stack', to: '/courses' },
      ],
    },
    {
      title: 'Design & Media',
      items: [
        { name: 'UI/UX', to: '/courses' },
        { name: 'Photoshop', to: '/courses' },
        { name: 'After Effects', to: '/courses' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        { name: 'AWS', to: '/courses' },
        { name: 'Linux', to: '/courses' },
        { name: 'DevOps', to: '/courses' },
      ],
    },
  ];

  const careerLinks = [];

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="page-container flex h-[72px] items-center justify-between text-slate-900">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="YT Software Solutions"
              className="h-[60px] w-auto object-contain"
              loading="eager"
            />
          </div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5 text-sm font-medium">
            <li>
              <Link to="/" className="transition-colors hover:text-[#0A66C2]">
                Home
              </Link>
            </li>

            <li>
              <Link to="/company" className="transition-colors hover:text-[#0A66C2]">
                Company
              </Link>
            </li>

            <li>
              <Link to="/courses" className="transition-colors hover:text-[#0A66C2]">
                Courses
              </Link>
            </li>

            <li>
              <Link to="/careers" className="transition-colors hover:text-[#0A66C2]">
                Careers
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition-colors hover:text-[#0A66C2]">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition-colors hover:text-[#0A66C2]">
                Contact Us
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-[#B91C1C] to-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Enroll Now
          </Link>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-black/10">
            <div className="page-container flex flex-col gap-4 py-5 text-slate-900">
              <Link to="/" className="text-base font-medium hover:text-[#0A66C2]" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/company" className="text-base font-medium hover:text-[#0A66C2]" onClick={() => setIsMobileMenuOpen(false)}>
                Company
              </Link>
              <Link to="/courses" className="text-base font-medium hover:text-[#0A66C2]" onClick={() => setIsMobileMenuOpen(false)}>
                Courses
              </Link>
              <Link to="/careers" className="text-base font-medium hover:text-[#0A66C2]" onClick={() => setIsMobileMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/products" className="text-base font-medium hover:text-[#0A66C2]" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
              <Link to="/contact" className="text-base font-medium hover:text-[#0A66C2]" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-[#B91C1C] to-[#0A66C2] px-6 py-3 text-sm font-semibold text-white shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
