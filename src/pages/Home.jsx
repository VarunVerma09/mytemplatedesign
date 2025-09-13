import React from 'react';
import bgimg from "../assets/bg.jpg"
import { FaPlay } from "react-icons/fa";
import model from "../assets/model.jpg"

import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


const Home = () => {
    return (
        <>
        <Nav/>
        <div
            className="h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            <div className='pt-48 pl-40 '>
                <h4 className='uppercase font-black text-xl text-[var(--font)]'>Best Destinations around the world</h4>
                <h1 className='font-serif text-7xl w-140 font-black pt-4'>Travel, enjoy
                    and live a new
                    and full life</h1>
                <p className='w-100 py-10'>Built Wicket longer admire do barton vanity itself do in it.
                     Preferred to sportsmen it engrossed listening. Park gate 
                     sell they west hard for the.</p>

                     <Link to="home" className="text-white px-4 rounded py-2 bg inline-block">Find out more</Link><p className='inline pl-10 pr-5 '><FaPlay className='inline border h-9 w-9 text-white bg1 p-2 shadow-4xl rounded-full'/> Play Demo</p>

            </div>



        </div>
        </>
    );
}

export default Home;
