"use client";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-16 md:py-24">
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            DISCOVER OUR ART OF WELCOME
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Our Heartists bring our hospitality vision to life. They blend passion for service with heartfelt care to make genuine connections and create exceptional experiences.
          </p>
          
          <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 mb-14 shadow-lg hover:shadow-xl transform hover:-translate-y-1 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
            <span className="text-lg">SEE THEIR STORIES</span>
          </button>
          
          <div className="pt-8 border-t border-blue-600/30 dark:border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              PIONEERING HOSPITALITY. FOSTERING CONNECTIONS.
            </h2>
            
            <p className="text-base md:text-lg mb-8 text-blue-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Across the globe, every day, our people, brands and hotels bring our global vision to life: creating distinctive experiences, driving sustainable performance, and boldly innovating what is next. This is Accor – welcome to our world.
            </p>
            
            <div className="grid grid-cols-2 md:flex md:justify-center md:gap-16 max-w-2xl mx-auto">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400">45+</div>
                <div className="text-base md:text-lg text-blue-200 dark:text-gray-400 mt-2">BRANDS</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400">5,700</div>
                <div className="text-base md:text-lg text-blue-200 dark:text-gray-400 mt-2">HOTELS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;