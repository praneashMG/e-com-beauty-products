// src/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-pink-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-pink-600">Welcome to Beauty Products Shop</h1>
          <p className="mt-4 text-lg text-gray-700">Find the best beauty products for your needs</p>
          <button className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-700">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Product 1</h3>
                <p className="mt-2 text-gray-600">Description of Product 1.</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Product 2</h3>
                <p className="mt-2 text-gray-600">Description of Product 2.</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Product 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Product 3</h3>
                <p className="mt-2 text-gray-600">Description of Product 3.</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Beauty Products Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
