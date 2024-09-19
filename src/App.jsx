import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import CategoriesGrid from './components/CategoriesGrid';
import WhyBeautyProducts from './components/WhyBeautyProducts';
import ProductCarousel from './components/ProductCarousel';
import NewArrivals from './components/NewArrivals';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import ProductDetail from './components/ProductDetail';
import BlogPage from './components/BlogPage';
import AboutUs from './components/AboutUs';
import AddToCartPopup from './components/AddToCartPopup';

function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Pass toggleCart and cartItems to Header */}
        <Header toggleCart={toggleCart} cartItems={cartItems} />

        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <CategoriesGrid />
              <WhyBeautyProducts />
              <ProductCarousel />
              <NewArrivals />
              <WhyChooseUs />
            </>
          } />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        {/* Show cart popup if isCartOpen is true */}
        {isCartOpen && <AddToCartPopup cartItems={cartItems} toggleCart={toggleCart} />}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
