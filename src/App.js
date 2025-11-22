import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { FeedbackProvider } from './context/FeedbackContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './pages/Dashboard';
import Reviews from './pages/Reviews';
import BrewingPlans from './pages/BrewingPlans';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <FeedbackProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-amber-900/10 transition-colors duration-500 relative overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 aurora-bg opacity-40" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.12) 0%, transparent 40%),
                radial-gradient(circle at 40% 60%, rgba(146, 64, 14, 0.08) 0%, transparent 30%)
              `
            }} />
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <Navbar />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Dashboard />
                <Reviews />
                <BrewingPlans />
                <Contact />
              </>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/brewing-plans" element={<BrewingPlans />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.9))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  color: '#fff',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                },
              }}
            />
          </div>
        </div>
      </Router>
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App;