import React from 'react';
import img1 from '../assets/destimg/img1.jpg';
import img2 from '../assets/destimg/img2.jpg';
import img3 from '../assets/destimg/img3.jpg';
import bg from "../assets/bg3.jpg";
import { FaLocationArrow } from "react-icons/fa6";

const Bookings = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <p className="text-center text-gray-400 font-bold">Top Selling</p>
      <h1 className="font-bold font-serif text-center pt-4 text-3xl sm:text-4xl md:text-5xl">
        Top Destinations
      </h1>

      {/* Responsive flex container */}
      <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 px-6 md:px-12 lg:px-20 py-10">
        
        {/* Card 1 */}
        <div className="w-full md:w-80 bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img src={img1} alt="" className="w-full h-90 object-cover" />
          <div className="px-5 py-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Rome, Italy</h3>
              <span className="text-gray-600 font-medium">$5.42k</span>
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-2 mt-4">
              <FaLocationArrow className="text-gray-500" /> 10 Days Trip
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-80 bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img src={img2} alt="" className="w-full h-90 object-cover" />
          <div className="px-5 py-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">London, UK</h3>
              <span className="text-gray-600 font-medium">$4.2k</span>
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-2 mt-4">
              <FaLocationArrow className="text-gray-500" /> 12 Days Trip
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-80 bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img src={img3} alt="" className="w-full h-90 object-cover" />
          <div className="px-5 py-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Full Europe</h3>
              <span className="text-gray-600 font-medium">$15k</span>
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-2 mt-4">
              <FaLocationArrow className="text-gray-500" /> 28 Days Trip
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Bookings;
