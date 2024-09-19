import React, { useState, useEffect } from 'react';

const AddToCartPopup = ({ product, isVisible, onClose }) => {
  const [cart, setCart] = useState([]);

  // Retrieve cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 right-0 w-72 bg-white shadow-lg p-6 z-50 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.172 7.707 7.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <h2 className="ml-2 text-sm font-medium">Item added to your cart</h2>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <div className="flex items-center mb-6">
        <img
          src={product.img}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <p className="ml-4 text-md font-semibold">{product.name}</p>
      </div>
      <button className="w-full py-3 mb-4 border border-gray-400 text-gray-800 rounded-lg font-medium hover:bg-gray-100">
        View my cart ({cart.length})
      </button>
      <button className="w-full py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 mb-4" onClick={() => addToCart(product)}>
        Check out
      </button>
      <button onClick={onClose} className="block text-center mt-2 text-sm text-purple-700 hover:underline">
        Continue shopping
      </button>
    </div>
  );
};

export default AddToCartPopup;
    