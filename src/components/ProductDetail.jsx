import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Lavender Algae Peel-off Mask', price: 32, availability: 'in stock', img: 'https://img.tradees.com/file/upload/2020/03/24/Private-Label-Natural-organic-purple-clay-peel-off-powder-mask.jpg' },
  { id: 2, name: 'Algae Peel-off Mask', price: 32, availability: 'in stock', img: 'https://avatars.mds.yandex.net/i?id=83266e7278c988d38a71420c771b1086674544cc-7762130-images-thumbs&n=13' },
  { id: 3, name: 'Hibiscus Algae Peel-off Mask', price: 32, availability: 'in stock', img: 'https://avatars.mds.yandex.net/i?id=f78c543705e7e6d91fc2344e6a4dd15d38cb4040-4592636-images-thumbs&n=13' },
  { id: 4, name: 'Marine Algae Face Moisturizer', price: 68, availability: 'out of stock', img: 'https://avatars.mds.yandex.net/i?id=51de6dd61eec1210bd31596879c1860700099c11-8177770-images-thumbs&n=13' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0 lg:space-x-16 px-4">
        
        {/* Product Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-full h-auto overflow-hidden rounded-lg shadow-md">
            <img
              src={product.img}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 mt-10 lg:mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{product.name}</h1>
          <p className="text-2xl text-gray-700 mb-6">${product.price.toFixed(2)} CAD</p>
          
          {/* Style Options */}
          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">Style</p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 focus:bg-gray-800 focus:text-white">Mask</button>
              <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 focus:bg-gray-800 focus:text-white">Mask + Applicator</button>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <p className="text-lg font-semibold mb-2">Quantity</p>
            <div className="flex items-center space-x-4">
              <button onClick={() => handleQuantityChange('decrease')} className="bg-gray-200 px-4 py-2 rounded-lg text-xl">
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button onClick={() => handleQuantityChange('increase')} className="bg-gray-200 px-4 py-2 rounded-lg text-xl">
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full py-3 mt-4 bg-gray-200 text-gray-800 font-semibold rounded-md mb-4 border border-gray-400 hover:bg-gray-300">
            Add to Cart
          </button>

          {/* Buy Now Button */}
          <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700">
            Buy it Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
