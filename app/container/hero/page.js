import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-between items-center w-full max-w-screen-xl p-10">
        <div className="w-1/2 text-left">
          <h1 className="text-6xl font-bold mb-4">Lets Grow Your<br/> <span className="text-[#385B94]"> Education</span> Level up<br/> with E-learning</h1>
          <button className="bg-[#385B94] text-white px-6 py-3 rounded-lg text-lg font-semibold">Get Started</button>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src="/assets/5.png" alt="e-learning" className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

