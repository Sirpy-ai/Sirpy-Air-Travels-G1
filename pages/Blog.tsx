import React from 'react';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  { title: "Top 5 Tips for First-Time Singapore Travelers 🏙️", imageUrl: "https://picsum.photos/400/300?random=6", cta: "Read More" },
  { title: "How to Save on Group Flights 💸", imageUrl: "https://picsum.photos/400/300?random=7", cta: "Read More" },
  { title: "A Foodie's Guide to Kuala Lumpur", imageUrl: "https://picsum.photos/400/300?random=8", cta: "Read More" },
  { title: "Packing Essentials for a Southeast Asia Trip", imageUrl: "https://picsum.photos/400/300?random=9", cta: "Read More" },
  { title: "Navigating Changi Airport Like a Pro", imageUrl: "https://picsum.photos/400/300?random=10", cta: "Read More" },
  { title: "Hidden Gems to Discover in Malaysia", imageUrl: "https://picsum.photos/400/300?random=11", cta: "Read More" },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Travel Tips & Stories</h1>
        <p className="text-lg text-gray-300 mt-2">Inspiration for your next adventure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-[#1f1f38] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
            <div className="overflow-hidden h-56">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 h-16">{post.title}</h2>
              <button className="text-[#fcbf49] font-semibold group-hover:underline">
                {post.cta} &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;