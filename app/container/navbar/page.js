"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full flex items-center justify-between py-4 px-6 z-50 ${scrolling ? 'bg-white text-gray-700 shadow-md' : 'bg-transparent'}`}>
      <div>
        <a href="/" className="text-[#385B94] text-xl font-bold">E-<span className="text-gray-700">learning</span></a>
      </div>
      <div>
        <ul className="flex space-x-6 text-lg">
          <li className="py-2"><a href="/" className="text-gray-700 hover:text-[#385B94]">Home</a></li>
          <li className="py-2"><a href="/" className="text-gray-700 hover:text-[#385B94]">Service</a></li>
          <li className="py-2"><a href="/" className="text-gray-700 hover:text-[#385B94]">About Us</a></li>
          <li className="py-2"><a href="/" className="text-gray-700 hover:text-[#385B94]">Our Team</a></li>
          <li className="py-2"><a href="/" className="text-gray-700 hover:text-[#385B94] ">Contact Us</a></li>
          <li ><button className="bg-[#385B94] text-white px-4 py-2 rounded-lg text-base font-semibold">Sign In</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
