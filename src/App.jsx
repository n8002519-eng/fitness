import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import JoinModal from './components/JoinModal';
import BookClassModal from './components/BookClassModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import TrainersPage from './pages/TrainersPage';
import MembershipPage from './pages/MembershipPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change component
const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [bookingClass, setBookingClass] = useState(null);

  const handleOpenJoin = (planId = 'standard') => {
    setSelectedPlan(planId);
    setIsJoinModalOpen(true);
  };

  const handleCloseJoin = () => {
    setIsJoinModalOpen(false);
  };

  const handleBookClass = (classItem) => {
    setBookingClass(classItem);
  };

  const handleCloseBookClass = () => {
    setBookingClass(null);
  };

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen bg-dark-950 text-white flex flex-col selection:bg-neon selection:text-black">
        {/* Sticky Header Navigation */}
        <Navbar onOpenJoin={() => handleOpenJoin('standard')} />

        {/* Dynamic Route View */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenJoin={() => handleOpenJoin('standard')}
                  onSelectPlan={(plan) => setSelectedPlan(plan)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenJoin={() => handleOpenJoin('standard')} />}
            />
            <Route
              path="/programs"
              element={
                <ProgramsPage
                  onOpenJoin={() => handleOpenJoin('standard')}
                  onBookClass={handleBookClass}
                />
              }
            />
            <Route
              path="/trainers"
              element={<TrainersPage onOpenJoin={() => handleOpenJoin('standard')} />}
            />
            <Route
              path="/membership"
              element={
                <MembershipPage
                  onOpenJoin={() => handleOpenJoin(selectedPlan)}
                  onSelectPlan={(plan) => setSelectedPlan(plan)}
                />
              }
            />
            <Route
              path="/schedule"
              element={<SchedulePage onBookClass={handleBookClass} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Universal Footer */}
        <Footer />

        {/* Interactive Modals */}
        <JoinModal
          isOpen={isJoinModalOpen}
          onClose={handleCloseJoin}
          preselectedPlan={selectedPlan}
        />

        <BookClassModal
          isOpen={!!bookingClass}
          onClose={handleCloseBookClass}
          classItem={bookingClass}
        />

        {/* Back To Top Smooth Button */}
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;

