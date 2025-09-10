
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 mt-16">
      <div className="container mx-auto px-6 py-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sirpy Air Travels. All rights reserved.</p>
        <p className="text-sm">Fly Smart, Fly Easy.</p>
      </div>
    </footer>
  );
};

export default Footer;
