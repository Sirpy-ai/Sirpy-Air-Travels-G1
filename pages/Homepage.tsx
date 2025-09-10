import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../types';
import { PlaneIcon } from '../components/icons/PlaneIcon';
import { TicketIcon } from '../components/icons/TicketIcon';
import { GroupIcon } from '../components/icons/GroupIcon';
import { PersonalizedIcon } from '../components/icons/PersonalizedIcon';
import { HeadphonesIcon } from '../components/icons/HeadphonesIcon';

const features = [
  { text: "Low-cost tickets", icon: <TicketIcon className="w-12 h-12 mb-4 text-[#fcbf49]" /> },
  { text: "Group fares & family packages", icon: <GroupIcon className="w-12 h-12 mb-4 text-[#fcbf49]" /> },
  { text: "Personalized travel assistance", icon: <PersonalizedIcon className="w-12 h-12 mb-4 text-[#fcbf49]" /> },
  { text: "24/7 customer support", icon: <HeadphonesIcon className="w-12 h-12 mb-4 text-[#fcbf49]" /> }
];

const testimonialsData: Testimonial[] = [
  { quote: "Great service and cheap tickets! The entire process was seamless.", name: "Ravi Kumar", photoUrl: "https://picsum.photos/100/100?random=1" },
  { quote: "Booking was so easy and fast. I found the best deals here.", name: "Priya Sharma", photoUrl: "https://picsum.photos/100/100?random=2" },
  { quote: "Excellent support throughout my trip. Highly recommended!", name: "Ankit Patel", photoUrl: "https://picsum.photos/100/100?random=3" }
];

const Homepage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1a1a2e]/50 to-[#3a0ca3]/50 pt-24 pb-32 text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-0 plane-animation">
                <PlaneIcon className="w-24 h-24 text-white" />
            </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>Fly Smart, Fly Easy with Sirpy Air Travels ✈️</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Exclusive flight deals from India to Singapore, Malaysia & beyond!</p>
          <button className="bg-[#fcbf49] text-[#1a1a2e] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#f77f00] transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Book Your Flight Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-black/20 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
            >
              {feature.icon}
              <p className="text-lg font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diwali Banner */}
      <section className="bg-gradient-to-r from-[#f77f00] to-[#fcbf49] py-6 shimmer-bg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl font-bold text-[#1a1a2e]">🎉 Diwali 2025 Offer – Book Your Tickets Today & Save Big!</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
        <div className="relative max-w-2xl mx-auto h-64">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={testimonial.photoUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 border-4 border-[#fcbf49]" />
              <p className="text-xl italic text-gray-300 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-lg text-white">- {testimonial.name}</p>
            </div>
          ))}
        </div>
         <div className="flex justify-center mt-4 space-x-2">
            {testimonialsData.map((_, index) => (
              <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-[#fcbf49]' : 'bg-gray-600'}`}></button>
            ))}
          </div>
      </section>
    </div>
  );
};

export default Homepage;