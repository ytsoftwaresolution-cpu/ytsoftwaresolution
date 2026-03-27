import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CompanyPage from './pages/CompanyPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CareersPage from './pages/CareersPage';
import ProductsPage from './pages/ProductsPage';
import EnrollPage from './pages/EnrollPage';

export default function App() {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith('/company');

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-[#0A66C2] selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
        <Route path="/course/:slug" element={<CourseDetailPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}
