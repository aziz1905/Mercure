"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for news and offers
const newsItems = [
  {
    id: 1,
    category: "BRANDS",
    date: "30.10.2025",
    title: "Accor's New Sustainable Hospitality Initiative",
    description: "Learn how we're pioneering sustainable practices across our global hotel network.",
    image: "/placeholder-image.jpg"
  },
  {
    id: 2,
    category: "PRESS RELEASE",
    date: "24.10.2025",
    title: "Record Q3 Financial Results",
    description: "Accor announces strong financial performance and growth projections for the coming year.",
    image: "/placeholder-image.jpg"
  },
  {
    id: 3,
    category: "BRANDS",
    date: "18.10.2025",
    title: "New Mercure Locations Opening Worldwide",
    description: "Discover our newest properties in key destinations around the globe.",
    image: "/placeholder-image.jpg"
  },
  {
    id: 4,
    category: "PRESS RELEASE",
    date: "12.10.2025",
    title: "Innovation in Guest Experience",
    description: "How technology is transforming our hospitality services.",
    image: "/placeholder-image.jpg"
  }
];

const OffersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">NEWS & HIGHLIGHTS</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Stay updated with the latest news, offers, and stories from Mercure Accor.
          </p>
        </div>

        {/* News Carousel */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newsItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-48 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed border-white/30 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🏨</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-block px-4 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-5">{item.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    READ MORE
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-3xl p-10 text-center text-white shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get the Latest News from Mercure</h3>
            <p className="mb-8 text-lg text-blue-100 dark:text-blue-200">
              Subscribe to our newsletter to receive updates on special offers, new locations, and company news.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-5 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;