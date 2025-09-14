import React from 'react';
import bgimg from "../assets/bg.jpg"
import { FaPlay } from "react-icons/fa";
import model from "../assets/model.jpg"
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Services from './Services';
import Bookings from './Bookings';
import bgforsection from "../assets/bg4.jpg"
import logo1 from '../assets/iocns/method/logo1.jpg';
import logo2 from '../assets/iocns/method/logo2.jpg';
import logo3 from '../assets/iocns/method/logo3.jpg';
import loction from "../assets/destimg/grice.jpg"
import { PiTelegramLogoLight, PiLeafThin, PiCityThin } from "react-icons/pi";
import { CiMap, CiHeart } from "react-icons/ci";
import Footer from '../components/Footer';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Nav />
      {/* Hero Section */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="pt-24 md:pt-48 px-6 md:pl-40 text-center md:text-left">
          <h4 className="uppercase font-black text-base md:text-xl text-[var(--font)]">
            Best Destinations around the world
          </h4>
          <h1 className="font-serif font-black pt-4 text-4xl md:text-7xl md:w-[35rem] leading-tight">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="py-6 md:py-10 text-sm md:text-base md:w-[25rem] mx-auto md:mx-0">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to
            sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <Link
              to="home"
              className="text-white px-4 py-2 bg rounded inline-block"
            >
              Find out more
            </Link>
            <p className="flex items-center gap-3">
              <FaPlay className="inline border h-9 w-9 text-white bg1 p-2 shadow-4xl rounded-full" />{" "}
              Play Demo
            </p>
          </div>
        </div>
      </div>

      <Services />
      <Bookings />

      {/* Steps Section */}
      <section
        className="min-h-screen w-full bg-cover bg-center px-6 md:px-20 py-10"
        style={{ backgroundImage: `url(${bgforsection})` }}
      >
        <p className="text-gray-400 font-bold text-center md:text-left">
          Easy and Fast
        </p>
        <main className="flex flex-col md:flex-row gap-10">
          {/* Left side */}
          <div className="flex-1">
            <h1 className="font-bold font-serif leading-snug pt-4 text-3xl md:text-5xl md:w-[32rem]">
              Book your next trip in 3 easy steps
            </h1>

            {/* Content body */}
            <div className="mt-10 space-y-8">
              <div className="flex">
                <img src={logo1} alt="" className="w-12 md:w-15" />
                <div className="pl-6">
                  <h4 className="font-black text-gray-400">Choose Destination</h4>
                  <p className="md:w-80 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                    tortor tempus.
                  </p>
                </div>
              </div>

              <div className="flex">
                <img src={logo2} alt="" className="w-12 md:w-15" />
                <div className="pl-6">
                  <h4 className="font-black text-gray-400">Make Payment</h4>
                  <p className="md:w-80 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                    tortor tempus.
                  </p>
                </div>
              </div>

              <div className="flex">
                <img src={logo3} alt="" className="w-12 md:w-15" />
                <div className="pl-6">
                  <h4 className="font-black text-gray-400">
                    Reach Airport on Selected Date
                  </h4>
                  <p className="md:w-80 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                    tortor tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 flex justify-center items-center">
            <div className="px-4 py-5 rounded-2xl flex shadow-2xl flex-col bg-white w-full max-w-sm">
              <img src={loction} alt="" className="w-full rounded-xl" />
              <div className="mt-5">
                <h4>Trip To Greece</h4>
                <p className="font-normal text-gray-400">
                  14-29 June | by Robbin joseph
                </p>

                <div className="flex gap-3 mt-3">
                  <PiLeafThin className="shadow rounded-full w-10 h-10 p-2 cursor-pointer" />
                  <CiMap className="shadow rounded-full w-10 h-10 p-2 cursor-pointer" />
                  <PiTelegramLogoLight className="shadow rounded-full w-10 h-10 p-2 cursor-pointer" />
                </div>

                <p className="font-normal mt-5 text-gray-400 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <PiCityThin className="inline w-5 h-5" /> 24 people going
                  </span>
                  <CiHeart className="inline w-6 h-6 text-blue-500" />
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
    