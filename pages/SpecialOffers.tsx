import React from 'react';
import type { Offer } from '../types';

const offersData: Offer[] = [
  { title: "Singapore Flight Special – Up to 15% Off 🎉", cta: "Book Now" },
  { title: "Group Fare: Book 5+ Tickets, Pay Less!", cta: "Explore Deal" },
  { title: "Seasonal Offers – Diwali, New Year, Summer", cta: "View Offers" },
  { title: "Malaysia Holiday Package - Flights + Hotel", cta: "Learn More" },
  { title: "Early Bird Discount - Book 90 Days in Advance", cta: "Save Now" },
  { title: "Last Minute Deals to Kuala Lumpur", cta: "Grab It!" },
];

const SpecialOffers: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#fcbf49]">Exclusive Offers & Deals</h1>
        <p className="text-lg text-gray-300 mt-2">Unbeatable prices for your favorite destinations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offersData.map((offer, index) => (
          <div key={index} className="relative bg-gradient-to-br from-[#3a0ca3] to-[#1f1f38] rounded-lg shadow-lg p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 group overflow-hidden">
             <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:top-0 group-hover:left-0"></div>
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-white">{offer.title}</h2>
                <button className="bg-[#f77f00] text-white font-bold py-2 px-6 rounded-full self-start group-hover:bg-[#fcbf49] group-hover:text-[#1a1a2e] transition-colors duration-300">
                {offer.cta}
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;