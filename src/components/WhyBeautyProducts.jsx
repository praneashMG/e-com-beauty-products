import React from 'react';
import { FaLeaf, FaSeedling, FaRecycle, FaAppleAlt } from 'react-icons/fa';

const WhyBeautyProducts = () => {
  return (
    <div className="py-10 md:py-20 bg-blue-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-500 mb-8 md:mb-12">
        Why Beauty Products
      </h2>
      <div className="flex flex-wrap justify-center items-center p-6 md:p-14 bg-[#D6C7E3] rounded-lg shadow-lg">
        <div className="text-center max-w-xs w-full md:w-1/4 mb-8 md:mb-0 mx-4">
          <FaLeaf className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
          <h3 className="text-base md:text-lg font-bold text-gray-800">Vegan</h3>
          <p className="text-sm md:text-gray-600">Our entire collection is vegan and cruelty-free.</p>
        </div>
        <div className="text-center max-w-xs w-full md:w-1/4 mb-8 md:mb-0 mx-4">
          <FaSeedling className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
          <h3 className="text-base md:text-lg font-bold text-gray-800">Natural</h3>
          <p className="text-sm md:text-gray-600">We only use the finest natural ingredients.</p>
        </div>
        <div className="text-center max-w-xs w-full md:w-1/4 mb-8 md:mb-0 mx-4">
          <FaRecycle className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
          <h3 className="text-base md:text-lg font-bold text-gray-800">Recyclable</h3>
          <p className="text-sm md:text-gray-600">All packaging is recyclable and eco-conscious.</p>
        </div>
        <div className="text-center max-w-xs w-full md:w-1/4 mx-4">
          <FaAppleAlt className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
          <h3 className="text-base md:text-lg font-bold text-gray-800">Compostable</h3>
          <p className="text-sm md:text-gray-600">Orders are shipped with biodegradable peanuts.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyBeautyProducts;
