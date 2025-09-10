import React, { useState } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import FlightBooking from './pages/FlightBooking';
import SpecialOffers from './pages/SpecialOffers';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Homepage');

  const renderPage = () => {
    switch (currentPage) {
      case 'Homepage':
        return <Homepage />;
      case 'Flight Booking':
        return <FlightBooking />;
      case 'Special Offers':
        return <SpecialOffers />;
      case 'About Us':
        return <AboutUs />;
      case 'Contact':
        return <Contact />;
      case 'Blog / Travel Tips':
        return <Blog />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main key={currentPage} className="flex-grow animate-fade-in">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
