"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";

const BookingWidget = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search
    console.log({ destination, checkIn, checkOut, guests, rooms });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl mx-4 -mt-10 z-10 relative max-w-6xl mx-auto overflow-hidden">
      <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">BOOK YOUR STAY</h2>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Destination Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where are you going?"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Check-in Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Check-out Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rooms */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rooms</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(parseInt(e.target.value))}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 dark:from-blue-700 dark:to-indigo-700 dark:hover:from-blue-800 dark:hover:to-indigo-800"
              >
                <Star className="w-5 h-5 mr-3" />
                <span className="text-lg">SEARCH AVAILABLE ROOMS</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;