import React, { useState } from 'react';
import type { Page } from '../types';
import { PlaneIcon } from './icons/PlaneIcon';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navLinks: Page[] = ['Homepage', 'Flight Booking', 'Special Offers', 'About Us', 'Contact', 'Blog / Travel Tips'];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-[#1a1a2e]/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-[#3a0ca3]/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('Homepage')}>
            <PlaneIcon className="w-8 h-8 text-[#fcbf49]" />
            <span className="text-xl font-bold text-white">Sirpy Air Travels</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  currentPage === link
                    ? 'text-[#fcbf49] underline decoration-2 underline-offset-4'
                    : 'text-gray-300 hover:text-white hover:bg-[#3a0ca3]/50'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="mt-4 space-y-2">
            {navLinks.map((link) => (
               <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-left px-3 py-2 font-medium rounded-md transition-colors duration-300 ${
                  currentPage === link
                    ? 'bg-[#3a0ca3] text-[#fcbf49]'
                    : 'text-gray-300 hover:text-white hover:bg-[#3a0ca3]/50'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;