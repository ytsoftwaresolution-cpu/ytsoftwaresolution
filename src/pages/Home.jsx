import Ticker from '../components/Ticker';
import Hero from '../components/Hero';
import TopCourses from '../components/TopCourses';
import Trainers from '../components/Trainers';
import Features from '../components/Features';
import LearningOptions from '../components/LearningOptions';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] selection:bg-[#0A66C2] selection:text-slate-900">
      <Ticker />
      <Hero />
      <TopCourses limit={3} />
      <Trainers />
      <Features />
      <LearningOptions />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default Home;
