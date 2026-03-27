import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/YTSoftware.jpeg';
import { courseCategories } from '../data/courseCategories';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const coursesRef = useRef(null);
  const categoryListRef = useRef(null);
  const categoryItemRefs = useRef([]);
  const [submenuTop, setSubmenuTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsCoursesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isCoursesOpen) return;
    const listEl = categoryListRef.current;
    const itemEl = categoryItemRefs.current[activeCourseIndex];
    if (!listEl || !itemEl) return;
    const listRect = listEl.getBoundingClientRect();
    const itemRect = itemEl.getBoundingClientRect();
    setSubmenuTop(itemRect.top - listRect.top);
  }, [activeCourseIndex, isCoursesOpen]);

  const companyLinks = [];
  const productLinks = [];
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

            <li
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              ref={coursesRef}
            >
              <button
                type="button"
                onClick={() => setIsCoursesOpen((prev) => !prev)}
                className="flex items-center gap-1 transition-colors hover:text-[#0A66C2] cursor-pointer"
                aria-haspopup="menu"
                aria-expanded={isCoursesOpen}
              >
                Courses
                <span className="text-[#0A66C2]">+</span>
              </button>
              <div
                className={`absolute left-1/2 top-full mt-4 -translate-x-1/2 transition duration-200 z-50 ${
                  isCoursesOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <div className="relative rounded-2xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
                  <div className="w-[280px] rounded-2xl bg-white">
                    <ul className="flex flex-col py-2" ref={categoryListRef}>
                      {courseCategories.map((category, index) => {
                        const isActive = activeCourseIndex === index;
                        return (
                          <li key={category.title}>
                            {category.courses.length > 0 ? (
                              <button
                                type="button"
                                ref={(el) => {
                                  categoryItemRefs.current[index] = el;
                                }}
                                onMouseEnter={() => setActiveCourseIndex(index)}
                                onClick={() => setActiveCourseIndex(index)}
                                className={`flex w-full items-center justify-between gap-3 px-5 py-3 text-left text-sm font-semibold transition ${
                                  isActive
                                    ? 'bg-[#FFF7ED] text-[#F97316]'
                                    : 'text-[#0F172A] hover:bg-[#F8FAFD]'
                                }`}
                              >
                                {category.title}
                                <span
                                  className={`text-base ${
                                    isActive ? 'text-[#F97316]' : 'text-[#1D4ED8]'
                                  }`}
                                >
                                  +
                                </span>
                              </button>
                            ) : (
                              <Link
                                to={`/course/${category.slug}`}
                                ref={(el) => {
                                  categoryItemRefs.current[index] = el;
                                }}
                                onMouseEnter={() => setActiveCourseIndex(index)}
                                onClick={() => setIsCoursesOpen(false)}
                                className={`flex w-full items-center justify-between gap-3 px-5 py-3 text-left text-sm font-semibold transition ${
                                  isActive
                                    ? 'bg-[#FFF7ED] text-[#F97316]'
                                    : 'text-[#0F172A] hover:bg-[#F8FAFD]'
                                }`}
                              >
                                {category.title}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div
                    className="absolute left-full ml-3 w-[260px] rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition-[top] duration-200"
                    style={{ top: submenuTop }}
                  >
                    <ul className="grid gap-3 text-sm font-semibold text-[#1E3A8A]">
                      {courseCategories[activeCourseIndex]?.courses.map(
                        (course) => (
                          <li key={course.slug}>
                            <Link
                              to={`/course/${course.slug}`}
                              className="transition hover:text-[#F97316]"
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              {course.title}
                            </Link>
                          </li>
                        )
                      )}
                      {courseCategories[activeCourseIndex]?.courses.length ===
                        0 && (
                        <li>
                          <Link
                            to={`/course/${courseCategories[activeCourseIndex]?.slug}`}
                            className="text-sm font-semibold text-[#1E3A8A] transition hover:text-[#F97316]"
                            onClick={() => setIsCoursesOpen(false)}
                          >
                            View Details
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
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
            to="/enroll"
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
                to="/enroll"
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
