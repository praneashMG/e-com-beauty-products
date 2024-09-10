import React from 'react';

const NewArrivals = () => {
  return (
    <div className="w-full px-4 py-8 bg-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 text-center">
          New Arrivals, Top Collection <span className="text-black">Sections</span>
        </h2>

        {/* Container for the items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Item */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/01/9a/84/019a842be76da833aee82b2792e10fd3.jpg" // Replace with the actual image URL
              alt="New Arrivals"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-4xl font-bold text-center px-4">
                New Arrivals
              </h3>
              <div className="absolute bottom-4 right-4">
                <button className="text-white text-xl md:text-2xl">
                  &#x2192;
                </button>
              </div>
            </div>
          </div>

          {/* Second Item */}
          <div className="bg-purple-100 rounded-lg p-6 text-center" style={{ backgroundColor: '#D6C7E3' }}>
            <h4 className="text-gray-500 font-medium mb-4 text-sm md:text-base">
              DAILY SUN PROTECTION
            </h4>
            <img
              src="https://moonglow.md/wp-content/uploads/2022/11/Manyo-Factory_Galactomy-Sun-Serum.webp"
              alt="SPF Serum"
              className="mx-auto mb-4 w-3/4 md:w-1/2"
            />
            <h5 className="text-gray-800 font-semibold text-lg md:text-xl mb-2">
              SPF Serum
            </h5>
            <p className="text-gray-900 font-medium text-lg md:text-xl">$85.00</p>
          </div>
        </div>

        {/* Duplicate Container for the items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-purple-100 rounded-lg p-6 text-center" style={{ backgroundColor: '#D6C7E3' }}>
            <h4 className="text-gray-500 font-medium mb-4 text-sm md:text-base">
              REFRESH & REJUVENATE
            </h4>
            <img
              src="https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71_GDmtl0aS._SL1500_.jpg"
              alt="Vitamin C Serum"
              className="mx-auto mb-4 w-3/4 md:w-1/2"
            />
            <h5 className="text-gray-800 font-semibold text-lg md:text-xl mb-2">
              Vitamin C Serum
            </h5>
            <p className="text-gray-800 font-medium text-lg md:text-xl">$95.00</p>
          </div>
          {/* First Item (Duplicate) */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/49c839_fc89763d291e4742a64dd1c6ca363961~mv2.jpg/v1/fill/w_2500,h_1668,al_c/49c839_fc89763d291e4742a64dd1c6ca363961~mv2.jpg" // Replace with the actual image URL
              alt="Top Collections"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-4xl font-bold text-center px-4">
                Top Collections
              </h3>
              <div className="absolute bottom-4 left-4">
                <button className="text-white text-xl md:text-2xl">
                  &#x2190;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
