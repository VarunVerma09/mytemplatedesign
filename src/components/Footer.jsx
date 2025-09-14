import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        
        {/* Logo + tagline */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900">Travels</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Book your trip in minutes, get full
            <br /> control for much longer.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2 text-gray-500">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">More</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        {/* Social + App */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex space-x-4">
            <Link to="#" className="bg-gray-100 p-2 rounded-full">
              <FaFacebook/>
            </Link>
            <Link to="#" className="bg-gray-100 p-2 rounded-full">
              <FaInstagram/>
            </Link>
            <Link to="#" className="bg-gray-100 p-2 rounded-full">
             <LuTwitter/>
            </Link>
          </div>
          <p className="text-gray-500">Discover our app</p>
          <div className="flex space-x-3">
            {/* <img src={googlePlay} alt="Google Play" className="h-10" />
            <img src={appStore} alt="App Store" className="h-10" /> */}
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-400 text-sm mt-12">
        All rights reserved © Varun
      </div>
    </footer>
  );
};

export default Footer;
