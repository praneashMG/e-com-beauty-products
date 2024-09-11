import React from 'react';
import { FaLeaf, FaSeedling, FaRecycle, FaAppleAlt } from 'react-icons/fa';

const WhyBeautyProducts = () => {
  return (
    <div className="py-1 md:py-1">
      {/* Full-width container */}
      <div className="w-full p-6 md:p-12 bg-white rounded-lg shadow-sg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-500 mb-8 md:mb-12">
          Why Beauty Products
        </h2>
        <div className="flex flex-wrap justify-between items-center p-6 md:p-14 bg-[] rounded-lg shadow-sg">
          <div className="text-center flex-1 min-w-[150px] md:min-w-[200px] mb-8 mx-4">
            <FaLeaf className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
            <h3 className="text-base md:text-lg font-bold text-gray-800">Vegan</h3>
            <p className="text-sm md:text-gray-600">Our entire collection is vegan and cruelty-free.</p>
          </div>
          <div className="text-center flex-1 min-w-[150px] md:min-w-[200px] mb-8 mx-4">
            <FaSeedling className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
            <h3 className="text-base md:text-lg font-bold text-gray-800">Natural</h3>
            <p className="text-sm md:text-gray-600">We only use the finest natural ingredients.</p>
          </div>
          <div className="text-center flex-1 min-w-[150px] md:min-w-[200px] mb-8 mx-4">
            <FaRecycle className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
            <h3 className="text-base md:text-lg font-bold text-gray-800">Recyclable</h3>
            <p className="text-sm md:text-gray-600">All packaging is recyclable and eco-conscious.</p>
          </div>
          <div className="text-center flex-1 min-w-[150px] md:min-w-[200px] mb-8 mx-4">
            <FaAppleAlt className="mx-auto mb-4 text-4xl md:text-5xl text-gray-800" />
            <h3 className="text-base md:text-lg font-bold text-gray-800">Compostable</h3>
            <p className="text-sm md:text-gray-600">Orders are shipped with biodegradable peanuts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBeautyProducts;
