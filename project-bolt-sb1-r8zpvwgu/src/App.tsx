import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingModal from './components/BookingModal';
import AuthModal from './components/AuthModal';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const handleBookingClick = (packageId?: string) => {
    setSelectedPackage(packageId);
    setIsBookingModalOpen(true);
  };

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  const handleSwitchAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  };

  const handleLoginRequired = () => {
    setIsBookingModalOpen(false);
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  // Admin access (demo purposes - would be properly secured in production)
  const handleAdminAccess = () => {
    if (userEmail.includes('admin')) {
      setIsAdminPanelOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogout={handleLogout}
      />
      
      <main>
        <Hero onBookingClick={handleBookingClick} />
        <Services onBookingClick={handleBookingClick} />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        packageId={selectedPackage}
        isLoggedIn={isLoggedIn}
        onLoginRequired={handleLoginRequired}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onLogin={handleLogin}
        onSwitchMode={handleSwitchAuthMode}
      />

      <AdminPanel
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
      />

      {/* Admin Access Button (Demo) */}
      {isLoggedIn && userEmail.includes('admin') && (
        <button
          onClick={handleAdminAccess}
          className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors z-40"
          title="Admin Panel"
        >
          Admin
        </button>
      )}
    </div>
  );
}

export default App;