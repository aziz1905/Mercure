"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Globe, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "WHO WE ARE", href: "#" },
    { name: "OUR BRANDS & EXPERIENCES", href: "#" },
    { name: "HOTEL DEVELOPMENT", href: "#" },
    { name: "FINANCE", href: "#" },
    { name: "NEWS & STORIES", href: "#" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with secondary navigation */}
        <div className="flex justify-between items-center py-2 text-sm border-b dark:border-gray-700">
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300">
              BOOK NOW
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300">
              FIND A JOB
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300">
              <span>AC 00.000€0.00%</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </button>
            <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300">
              <Search className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/mercure" className="flex items-center">
            <div className="bg-gray-800 dark:bg-gray-700 text-white px-3 py-2 rounded font-bold text-xl">
              MERCURE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">
                  <User className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;