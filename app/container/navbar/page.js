"use client"
import React, { useState, useEffect } from 'react';
import { SignIn } from '@clerk/clerk-react'; // Import SignIn component from Clerk

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

  // Handler function for custom sign-in button
  const handleSignInClick = () => {
    // Add your custom sign-in logic here
    console.log("Custom sign-in action");
  };

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
          <li className="py-2"><a href="/" className="text-gray-700 hover:text-[#385B94]">Contact Us</a></li>
          <li>
            {/* Custom sign-in button */}
            <button onClick={handleSignInClick} className="bg-[#385B94] text-white px-4 py-2 rounded-lg text-base font-semibold">Sign In</button>
          </li>
          <li>
            {/* Clerk SignIn component */}
            <SignIn />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

