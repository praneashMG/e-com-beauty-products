import React, { useEffect, useRef } from 'react';

const ProductCarousel = () => {
  const products = [
    {
      name: "Lip Balm",
      oldPrice: "19.00",
      newPrice: "16.00",
      currency: "CAD",
      imgSrc: "https://beautystorage.ru/upload/iblock/1dc/1dc99e9e11123f4a26b20d4fbc4bbbdd.JPG",
      onSale: true,
    },
    {
      name: "Monoi Conditioner",
      price: "28.00",
      currency: "CAD",
      imgSrc: "https://i.pinimg.com/736x/65/50/21/655021769e19590ebdb06f69929b2429.jpg",
      onSale: false,
    },
    {
      name: "Turmeric Sponge",
      price: "16.00",
      currency: "CAD",
      imgSrc: "https://maed.co/wp-content/uploads/2018/08/the-magic-of-the-konjac-sponge-for-smooth-skin-hero.jpg",
      onSale: false,
    },
    {
      name: "Nail Polish: Atwater",
      oldPrice: "20.00",
      newPrice: "16.00",
      currency: "CAD",
      imgSrc: "https://3.bp.blogspot.com/-0gi_6MEbXdA/TvzaEln2spI/AAAAAAAAFGo/-cPX7j1eqbA/s1600/ZP587_Bevin_focus_RGB_sm.jpg",
      onSale: true,
    },
  ];

  const duplicatedProducts = [...products, ...products, ...products, ...products];

  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 2; // Increase the scroll speed for visibility
    const scrollStep = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        // Scroll left by scrollSpeed amount
        carousel.scrollLeft += scrollSpeed;
        // Reset scroll when reaching the end
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollStep, 20); // Adjust the interval for smoother scroll

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center bg-purple-00" style={{ backgroundColor: '' }}>
      <div className="w-full max-w-screen-xl p-4">
        <div className="py-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-purple-900">
            <span className="text-pink-600">Best Seller</span> Featured Products
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-4 py-4 whitespace-nowrap"
            style={{ scrollbarWidth: 'none' }} // Hide scrollbar for smooth appearance
          >
            {duplicatedProducts.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-96 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="relative w-full h-3/4">
                  {product.onSale && (
                    <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Sale
                    </span>
                  )}
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xs md:text-sm lg:text-lg font-semibold">{product.name}</h3>
                  {product.oldPrice ? (
                    <div className="mt-2">
                      <span className="text-gray-400 line-through">
                        {product.currency} {product.oldPrice}
                      </span>{" "}
                      <span className="text-black font-bold">
                        {product.currency} {product.newPrice}
                      </span>
                    </div>
                  ) : (
                    <div className="mt-2 text-black font-bold">
                      {product.currency} {product.price}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
