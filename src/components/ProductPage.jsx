import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Lavender Algae Peel-off Mask', price: 32, availability: 'in stock', img: 'https://frangipani-dv.ru/wp-content/uploads/2022/08/33674215-1.jpg' },
  { id: 2, name: 'Algae Peel-off Mask', price: 32, availability: 'in stock', img: 'https://i.ebayimg.com/images/g/O1IAAOSwzBVjHOUt/s-l1600.jpg' },
  { id: 3, name: 'Hibiscus Algae Peel-off Mask', price: 32, availability: 'in stock', img: 'https://koreantica.ru/wp-content/uploads/2023/04/cosrx-aloe-soothing-sun-cream-spf50-2-768x768.jpg' },
  { id: 4, name: 'Marine Algae Face Moisturizer', price: 68, availability: 'out of stock', img: 'https://www.pepinoshop.com/ftp/immagini/27800_11315___.jpg'}
  // More products can be added here
];

const ProductPage = () => {
  const [availabilityFilter, setAvailabilityFilter] = useState(null);
  const [priceRange, setPriceRange] = useState({ from: '', to: '' });
  const [sortOption, setSortOption] = useState('featured');
  const [isAvailabilityDropdownOpen, setIsAvailabilityDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const handleFilterChange = (filter) => {
    setAvailabilityFilter(filter);
    setIsAvailabilityDropdownOpen(false); // Close dropdown after selection
  };

  const handleSortChange = (sort) => {
    setSortOption(sort);
  };

  const handlePriceChange = (type, value) => {
    setPriceRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const filteredProducts = products
    .filter((product) => {
      if (availabilityFilter) {
        return product.availability === availabilityFilter;
      }
      return true;
    })
    .filter((product) => {
      const minPrice = priceRange.from ? parseFloat(priceRange.from) : 0;
      const maxPrice = priceRange.to ? parseFloat(priceRange.to) : Infinity;
      return product.price >= minPrice && product.price <= maxPrice;
    });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'price') {
      return a.price - b.price;
    }
    return 0; // Default sort
  });

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">Skin Care</h1>
        <p className="text-lg text-black mb-6 text-center max-w-xl mx-auto">
          Keep your skin looking and feeling its best with an all-natural, plant-based routine.
        </p>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto justify-center">
            {/* Availability Filter */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setIsAvailabilityDropdownOpen(!isAvailabilityDropdownOpen)}
                className="bg-white border border-gray-400 rounded-md px-4 py-2 text-black w-full md:w-auto hover:bg-gray-100"
              >
                Availability
              </button>
              {isAvailabilityDropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-md z-10 p-4 w-full md:w-48">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <label className="cursor-pointer text-black">
                        <input
                          type="radio"
                          name="availability"
                          className="mr-2"
                          onChange={() => handleFilterChange('in stock')}
                        />
                        In stock (13)
                      </label>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <label className="cursor-pointer text-black">
                        <input
                          type="radio"
                          name="availability"
                          className="mr-2"
                          onChange={() => handleFilterChange('out of stock')}
                        />
                        Out of stock(2)
                      </label>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <label className="cursor-pointer text-black">
                        <input
                          type="radio"
                          name="availability"
                          className="mr-2"
                          onChange={() => handleFilterChange(null)}
                        />
                        Show All
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
                className="bg-white border border-gray-400 rounded-md px-4 py-2 text-black w-full md:w-auto hover:bg-gray-100"
              >
                Price
              </button>
              {isPriceDropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-md z-10 p-4 w-full md:w-64">
                  <p className="text-sm text-black mb-2">The highest price is $68.00</p>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="From"
                      value={priceRange.from}
                      onChange={(e) => handlePriceChange('from', e.target.value)}
                      className="border px-4 py-2 rounded-md w-full text-black"
                    />
                    <input
                      type="number"
                      placeholder="To"
                      value={priceRange.to}
                      onChange={(e) => handlePriceChange('to', e.target.value)}
                      className="border px-4 py-2 rounded-md w-full text-black"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sorting */}
          <div className="flex items-center space-x-4 w-full md:w-auto justify-center">
            <span className="text-black">Sort by:</span>
            <select
              className="bg-white border border-gray-400 rounded-md px-4 py-2 text-black w-full md:w-auto hover:bg-gray-100"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {sortedProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                <div className="relative h-64 w-full overflow-hidden mb-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black text-center">{product.name}</h3>
                <p className="text-black text-center">From ${product.price.toFixed(2)} CAD</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
