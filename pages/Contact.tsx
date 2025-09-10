
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
        <p className="text-lg text-gray-300 mt-2">We’re Here to Help! 📞</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Form */}
        <div className="bg-[#1f1f38] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#fcbf49]">Contact Information</h2>
          <div className="space-y-4 text-lg">
            <p><strong>Phone:</strong> <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-[#fcbf49]">+91 XXXXX XXXXX</a></p>
            <p><strong>Email:</strong> <a href="mailto:support@sirpyairtravels.com" className="text-gray-300 hover:text-[#fcbf49]">support@sirpyairtravels.com</a></p>
          </div>
          <button className="mt-6 w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.814 4.898-1.302z"/></svg>
            Chat on WhatsApp
          </button>
          
          <h2 className="text-2xl font-bold mt-10 mb-6 text-[#fcbf49]">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows={4} placeholder="Your Message" className="w-full bg-white text-black p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-[#fcbf49] transition"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#f77f00] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#fcbf49] hover:text-[#1a1a2e] transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="bg-[#1f1f38] p-4 rounded-lg flex items-center justify-center">
            <div className="w-full h-full bg-gray-700 rounded-md flex flex-col items-center justify-center text-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h3 className="text-xl font-bold">Our Office Location</h3>
                <p>(Google Maps Placeholder)</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
