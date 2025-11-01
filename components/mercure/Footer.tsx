const Footer = () => {
  const footerSections = [
    {
      title: "WHO WE ARE",
      links: [
        "Accor at a Glance",
        "People at Our Heart",
        "Sustainable Hospitality"
      ]
    },
    {
      title: "OUR BRANDS & EXPERIENCES",
      links: [
        "Our Hotel Brands",
        "Our Experience Portfolio",
        "ALL Accor Booking & Loyalty"
      ]
    },
    {
      title: "HOTEL DEVELOPMENT",
      links: [
        "Develop with Accor",
        "Solutions for Every Project",
        "Contact Our Team"
      ]
    },
    {
      title: "FINANCE",
      links: [
        "Accor Share",
        "Financial Results",
        "Individual Shareholders"
      ]
    },
    {
      title: "NEWS & STORIES",
      links: [
        "All our News & Stories",
        "Trends & Insights",
        "Pressroom"
      ]
    }
  ];

  const socialMedia = [
    { name: "Instagram", icon: "📷" },
    { name: "Facebook", icon: "f" },
    { name: "YouTube", icon: "▶" },
    { name: "TikTok", icon: "🎵" },
    { name: "Twitter", icon: "🐦" },
    { name: "LinkedIn", icon: "💼" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6 text-blue-400">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm flex items-center group"
                    >
                      <span className="group-hover:ml-1 transition-all">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 dark:border-gray-700 my-8"></div>

        {/* Social Media and Additional Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex space-x-6 mb-6 justify-center md:justify-start">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-2xl transition-transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Accor. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-7">
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors">
              FIND A JOB
            </a>
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors">
              BOOK NOW
            </a>
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors">
              Cookies
            </a>
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors">
              Legal terms
            </a>
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;