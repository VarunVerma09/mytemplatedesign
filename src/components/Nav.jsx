import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger & Close icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md bg-white px-6 py-4 md:px-40 flex justify-between items-center relative">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">Travels</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-600 font-medium items-center">
        <li className="cursor-pointer hover:text-orange-500"><Link to="/destinations">Destinations</Link></li>
        <li className="cursor-pointer hover:text-orange-500"><Link to="/bookings">Bookings</Link></li>
        <li className="cursor-pointer hover:text-orange-500"><Link to="/contact">Contact Us</Link></li>
        <li>
          <button className="ml-4 px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-100">
            Sign up
          </button>
        </li>
        <li>
          <select className="ml-2 border rounded px-2 py-1">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-40">
          <ul className="flex flex-col items-start px-6 py-4 gap-4 text-gray-700 font-medium">
            <li className="w-full border-b border-gray-200">
              <Link to="/destinations" className="w-full block py-2" onClick={() => setIsOpen(false)}>Destinations</Link>
            </li>
            <li className="w-full border-b border-gray-200">
              <Link to="/bookings" className="w-full block py-2" onClick={() => setIsOpen(false)}>Bookings</Link>
            </li>
            <li className="w-full border-b border-gray-200">
              <Link to="/contact" className="w-full block py-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
            <li className="w-full border-b border-gray-200">
              <button className="w-full px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-100">
                Sign up
              </button>
            </li>
            <li className="w-full">
              <select className="w-full border rounded px-2 py-2">
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
