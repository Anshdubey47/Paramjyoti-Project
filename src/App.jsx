import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import HomePage, { ContactSection } from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import Services from "./components/ServicePage/Services";
import StaffAugmentation from "./components/staff-augmentation/StaffAugmentation";
import SystemIntegrate from "./components/SystemIntegrationPage/SystemIntegrate";
import TrainingUpskillingDetailPage from "./components/TrainingUpskillingDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const MotionDiv = motion.div;

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/staff" element={<StaffAugmentation />} />
              <Route path="/system" element={<SystemIntegrate />} />
              <Route path="/training" element={<TrainingUpskillingDetailPage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MotionDiv>
        </AnimatePresence>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
