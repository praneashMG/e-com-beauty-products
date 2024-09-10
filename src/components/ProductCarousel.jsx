  import React from 'react';
  import './carousel.css'; 

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

    return (
      <div className="flex items-center justify-center bg-purple-100" style={{ backgroundColor: '#D6C7E3' }}>
        <div className="w-full max-w-screen-xl p-4">
          <div className="py-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-900">
              <span className="text-pink-600">Best Seller</span> Featured Products
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="carousel-container flex overflow-x-auto">
              {/* Render the products */}
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg mx-2"
                  style={{ width: "200px", height: "300px" }}
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
                      style={{ objectFit: 'cover' }} // Ensures images cover the container
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm md:text-lg font-semibold">{product.name}</h3>
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
              {/* Duplicate the products to create a loop */}
              {products.map((product, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg mx-2"
                  style={{ width: "200px", height: "300px" }}
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
                      style={{ objectFit: 'cover' }} // Ensures images cover the container
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm md:text-lg font-semibold">{product.name}</h3>
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
