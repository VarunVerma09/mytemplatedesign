import React from 'react';

const Nav = () => {

    return (
        <nav className="flex justify-between px-40 items-center px-6 py-4 shadow-md bg-white">
            <div className="text-2xl font-bold text-gray-800">Travels</div>

            <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
                <li className="cursor-pointer hover:text-orange-500">Destinations</li>
                <li className="cursor-pointer hover:text-orange-500">Bookings</li>
                <li className="cursor-pointer hover:text-orange-500">Home</li>
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

            <div className="md:hidden">
                <button onClick={() => setIsOpen()}>

                </button>
            </div>

        </nav>
 )}


export default Nav;
