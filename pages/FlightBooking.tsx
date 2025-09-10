import React, { useState } from 'react';
import { PlaneIcon } from '../components/icons/PlaneIcon';
import { SeatIcon } from '../components/icons/SeatIcon';
import { PaymentIcon } from '../components/icons/PaymentIcon';

const FlightBooking: React.FC = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Search Form Section */}
        <section className="bg-[#1f1f38] p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#fcbf49]">Find Your Perfect Flight</h2>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <label htmlFor="from" className="block text-sm font-medium text-gray-300 mb-1">From</label>
              <input type="text" id="from" placeholder="e.g., Chennai" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition" />
            </div>
            <div className="lg:col-span-1">
              <label htmlFor="to" className="block text-sm font-medium text-gray-300 mb-1">To</label>
              <input type="text" id="to" placeholder="e.g., Singapore" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition" />
            </div>
            <div className="lg:col-span-1">
              <label htmlFor="departure" className="block text-sm font-medium text-gray-300 mb-1">Departure Date</label>
              <input type="date" id="departure" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition" />
            </div>
             <div className="lg:col-span-1">
              <label htmlFor="return" className="block text-sm font-medium text-gray-300 mb-1">Return Date</label>
              <input type="date" id="return" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition" />
            </div>
             <div className="lg:col-span-1">
              <label htmlFor="passengers" className="block text-sm font-medium text-gray-300 mb-1">Passengers</label>
              <input type="number" id="passengers" placeholder="1" min="1" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition" />
            </div>
             <div className="lg:col-span-1">
              <label htmlFor="class" className="block text-sm font-medium text-gray-300 mb-1">Class</label>
              <select id="class" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition">
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
            <div className="md:col-span-2 lg:col-span-3 text-center mt-4">
              <button type="submit" className="bg-[#f77f00] text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-[#fcbf49] hover:text-[#1a1a2e] transition duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto" disabled={loading}>
                {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching...
                    </div>
                  ) : "Search Flights"}
              </button>
            </div>
          </form>
        </section>

        {/* Booking Steps Section */}
        <section className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Book in 3 Simple Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-[#3a0ca3] rounded-full w-24 h-24 flex items-center justify-center text-4xl mb-4">
                      <PlaneIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">1. Search your flight</h3>
                </div>
                 <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-[#3a0ca3] rounded-full w-24 h-24 flex items-center justify-center text-4xl mb-4">
                      <SeatIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">2. Select your seat</h3>
                </div>
                 <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-[#3a0ca3] rounded-full w-24 h-24 flex items-center justify-center text-4xl mb-4">
                      <PaymentIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">3. Make payment securely</h3>
                </div>
            </div>
        </section>
        
        {/* Tips Section */}
        <section className="bg-black/20 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-[#fcbf49]">Pro Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Book early to get the best prices!</li>
            <li>Check out our group and family fares for extra savings.</li>
            <li>Be flexible with your travel dates for cheaper options.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FlightBooking;