import React from 'react';
import image1 from "../assets/land.jpg";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-green-50 flex items-center justify-center p-0 m-0">
      <div className="relative w-full max-w-screen-xl">
        <img
          src={image1}
          alt="Glowing Skin"
          className="relative w-[100%] h-[100vh] md:h-screen object-cover mx-auto md:ml-[210px]"
        />
       <div className="absolute top-1/2 left-1/2 md:left-[15%] lg:left-[15%] transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] h-auto max-w-sm bg-gradient-to-b from-[#a1c4fd] via-[#c2e9fb] to-[#f6d365] rounded-lg shadow-lg p-4 sm:p-6 flex flex-col justify-center z-10">

          <h1 className="text-base sm:text-lg md:text-5xl font-bold text-[#1f2937] mb-3">
            Glowing skin, naturally
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4">
            Indulge in plant-based skin care for naturally radiant results.
          </p>
          <button className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-gray-800 transition">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
