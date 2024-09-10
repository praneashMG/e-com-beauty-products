import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiX, FiMenu } from 'react-icons/fi';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-5 md:px-6 md:py-7 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">Habitat</h1>
        </div>

        {/* Nav links for desktop and tablet */}
        <nav className="hidden md:flex items-center space-x-4 md:space-x-6">
          <a href="/home" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
          <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a>
        </nav>

        {/* Icons and Hamburger for mobile */}
        <div className="flex items-center space-x-3">
          <button onClick={toggleSearch} className="text-gray-700 hover:text-gray-900">
            <FiSearch size={22} />
          </button>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FiUser size={22} />
          </a>
          <a href="#" className="relative text-gray-700 hover:text-gray-900">
            <FiShoppingCart size={22} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              3
            </span>
          </a>

          {/* Hamburger menu for mobile */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-gray-900">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 border-l border-gray-300">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
              <FiX size={24} />
            </button>
          </div>
          <div className="flex flex-col items-start px-6 py-2">
            <a href="/home" className="text-gray-700 hover:text-gray-900 py-2">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">Shop</a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">Contact</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 py-2">FAQ</a>
          </div>
        </nav>
      )}

      {/* Search Bar Section */}
      {searchOpen && (
        <div className="bg-white border-t border-gray-300">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full text-lg md:text-2xl text-gray-500 focus:outline-none"
              style={{ border: 'none', backgroundColor: 'transparent' }}
            />
            <button onClick={toggleSearch} className="text-gray-700 hover:text-gray-900 ml-4">
              <FiX size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
