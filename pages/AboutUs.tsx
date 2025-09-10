
import React from 'react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { name: "Selvarajan Sirpy", role: "Founder", photoUrl: "https://picsum.photos/200/200?random=4" },
  { name: "Poornima Praveen", role: "Travel Consultant", photoUrl: "https://picsum.photos/200/200?random=5" }
];

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Your Trusted Travel Partner ✈️</h1>
      </section>

      <section className="max-w-3xl mx-auto bg-black/20 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-[#fcbf49]">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">
          Sirpy Air Travels has been serving travelers from India to Singapore, Malaysia, and beyond, providing affordable flights, personalized travel assistance, and unmatched customer support. Our journey began with a simple goal: to make international travel accessible and hassle-free for everyone.
        </p>
      </section>

      <section className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1f1f38] p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-[#f77f00]">Our Mission</h3>
          <p className="text-gray-300">To make every journey seamless and memorable.</p>
        </div>
        <div className="bg-[#1f1f38] p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-[#f77f00]">Our Vision</h3>
          <p className="text-gray-300">To be the most reliable and customer-friendly travel agency in the region.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.photoUrl} alt={member.name} className="w-40 h-40 rounded-full mb-4 border-4 border-[#3a0ca3] object-cover mx-auto" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-[#fcbf49]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
