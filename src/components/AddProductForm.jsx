// AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('in stock');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && price && img) {
      const newProduct = {
        id: Date.now(), 
        name,
        price: parseFloat(price),
        availability,
        img
      };
      onAddProduct(newProduct);
      setName('');
      setPrice('');
      setAvailability('in stock');
      setImg('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 w-full rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-4 py-2 w-full rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="availability">Availability</label>
        <select
          id="availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border px-4 py-2 w-full rounded-md"
        >
          <option value="in stock">In stock</option>
          <option value="out of stock">Out of stock</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="img">Image URL</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="border px-4 py-2 w-full rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
