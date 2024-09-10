import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <LandingPage />
            <CategoriesGrid />
            <WhyBeautyProducts />
            <ProductCarousel />
            <NewArrivals />
            <WhyChooseUs />
          </>} />
          <Route path="/" element={<CategoriesGrid />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
