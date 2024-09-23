  import React, { useState } from 'react';
  import { useParams } from 'react-router-dom';
  import AddToCartPopup from './AddToCartPopup'; // Adjust the path as necessary
  import Accordion from './AccordionItem';

  // Sample product data including multiple images
  const products = [
    { 
      id: 1, 
      name: 'Lavender Algae Peel-off Mask',  
      price: 32, 
      availability: 'in stock', 
      img: 'https://frangipani-dv.ru/wp-content/uploads/2022/08/33674215-1.jpg',
      images: [
        'https://foamstore.ru/upload/photo/%D0%90%D0%A0%D0%A2-2345/%D0%90%D0%A0%D0%A2-23451.jpg',
        'https://foamstore.ru/upload/photo/%D0%90%D0%A0%D0%A2-1867/%D0%90%D0%A0%D0%A2-18671.jpg',
        'https://myondon.ru/image/cache/catalog/products/sonatural/SN18-1000x1000.jpg',
        'https://img.joomcdn.net/705716af0932fc362068c668a90814ef931ea90d_original.jpeg',
      ],
      description: 'A soothing mask infused with lavender and algae to nourish and refresh your skin. Lavender has anti-inflammatory and antiseptic properties which help in reducing skin irritations and redness. Algae is rich in vitamins and minerals, making it a fantastic skin hydrator and detoxifier. This mask will leave your skin feeling soft, smooth, and rejuvenated. Ideal for all skin types, it especially helps to soothe sensitive skin and provides an instant glow.' 
    },
    { 
      id: 2, 
      name: 'Charcoal Peel-off Mask', 
      price: 25, 
      availability: 'in stock', 
      img: 'https://i.ebayimg.com/images/g/O1IAAOSwzBVjHOUt/s-l1600.jpg',
      images: [
        'https://i.ebayimg.com/images/g/O1IAAOSwzBVjHOUt/s-l1600.jpg',
        'https://m.media-amazon.com/images/I/41724skmr2L.jpg',
        'https://i.ebayimg.com/images/g/O1IAAOSwzBVjHOUt/s-l1600.jpg',
        'https://m.media-amazon.com/images/I/71lKAXmW--L.jpg',
          
        
      ],
      description: 'A revitalizing algae peel-off mask that hydrates and detoxifies your skin. The algae extract in this mask deeply penetrates your skin, offering a burst of hydration while removing impurities. This peel-off mask works to exfoliate dead skin cells and rejuvenate the surface of your skin. Ideal for all skin types, it can be used regularly to keep your skin looking youthful and radiant.' 
    },
    { 
      id: 3, 
      name: 'Hibiscus Algae Peel-off Mask', 
      price: 32, 
      availability: 'in stock',  
      img: 'https://koreantica.ru/wp-content/uploads/2023/04/cosrx-aloe-soothing-sun-cream-spf50-2-768x768.jpg',
      images: [
        'https://koreantica.ru/wp-content/uploads/2023/04/cosrx-aloe-soothing-sun-cream-spf50-2-768x768.jpg',
        'https://a.allegroimg.com/original/11e7ae/786180dc4ae1aad390b584ac313e/COSRX-Aloe-Soothing-Sun-SPF50-Krem-Ochronny-50ml',
        'https://halykmarket.kz/s3/product/1208401009/4860127f-d734-4a63-8e01-c4b454fbe73d/4860127f-d734-4a63-8e01-c4b454fbe73d.jpg',
        'https://i.ebayimg.com/images/g/f2AAAOSwNiNZp5jb/s-l1600.jpg',
      ],
      description: 'This hibiscus-infused peel-off mask provides intense hydration and promotes a youthful glow. Hibiscus is known as the “Botox plant” because it increases skin elasticity, offering a natural firming effect. Combined with algae extract, this mask helps restore moisture to the skin while exfoliating dead skin cells, giving your face a fresh and luminous appearance. The powerful blend of antioxidants in hibiscus also helps to protect your skin from environmental stressors, making this mask a great addition to your skincare routine.' 
    },
    { 
      id: 4, 
      name: 'Marine Algae Face Moisturizer', 
      price: 68, 
      availability: 'out of stock',  
      img: 'https://www.pepinoshop.com/ftp/immagini/27800_11315___.jpg',
      images: [
        'https://example.com/charcoal-mask.jpg',
        'https://dummyimage.com/150x200/ccc/000.jpg&text=Image+5',
        'https://dummyimage.com/150x200/ccc/000.jpg&text=Image+6',
        'https://dummyimage.com/150x200/ccc/000.jpg&text=Image+7',
      ],
      description: 'A lightweight marine algae moisturizer that deeply hydrates and balances your skin. This moisturizer is rich in essential fatty acids, helping to reinforce the skin’s natural moisture barrier. It absorbs quickly into the skin without leaving a greasy residue, making it perfect for daily use under makeup or on its own. The marine algae extract works to reduce the appearance of fine lines and wrinkles, while also providing antioxidant protection. Suitable for all skin types, especially for those with dry or sensitive skin, it will leave your face feeling refreshed and hydrated all day.' 
    }
  ];

  const MAX_DESCRIPTION_LENGTH = 100;

  const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [showMore, setShowMore] = useState(false);
    const [selectedImage, setSelectedImage] = useState(product.img);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleQuantityChange = (type) => {
      if (type === 'increase') {
        setQuantity(quantity + 1);
      } else if (type === 'decrease' && quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const toggleReadMore = () => {
      setShowMore(!showMore);
    };

    const renderDescription = () => {
      if (product.description.length <= MAX_DESCRIPTION_LENGTH) {
        return product.description;
      }
      return showMore
        ? product.description
        : `${product.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`;
    };

    const handleImageClick = (imgUrl) => {
      setSelectedImage(imgUrl);
    };

    const handleAddToCart = () => {
      setIsPopupVisible(true);
      // Optionally, add logic to add the item to the cart here
    };

    const handleClosePopup = () => {
      setIsPopupVisible(false);
    };

    return (
      <div className="bg-gray-00 py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0 lg:space-x-16 px-4">
          
          {/* Product Image and Thumbnails */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            {/* Main Image */}
            <div className="w-full max-w-sm h-70 overflow-hidden rounded-lg">
              <img
                src={selectedImage}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Thumbnails Grid */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className="w-24 h-24 object-cover cursor-pointer border border-gray-300 rounded-md"
                />
              ))}   
            </div>
            <div className="container mx-auto py-10">
  <div className="flex flex-col lg:flex-row">
    <div className="w-20% lg:w-2/3 p-3 ml-20"> 
      <Accordion />
    </div>
  </div>
</div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-2">${product.price.toFixed(2)} CAD</p>  
            {/* Product Description with Read More */}
            <p className="text-lg text-gray-600 mb-6">
              {renderDescription()} 
              {product.description.length > MAX_DESCRIPTION_LENGTH && (
                <button
                  onClick={toggleReadMore}
                  className="text-blue-500 ml-2 focus:outline-none hover:underline"
                >
                  {showMore ? 'Read Less' : 'Read More'}
                </button>
              )}
            </p>
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
            <button 
              onClick={handleAddToCart} 
              className="w-full py-3 mt-4 bg-gray-200 text-gray-800 font-semibold rounded-md mb-4 border border-gray-400 hover:bg-gray-300"
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700">
              Buy it Now
              
            </button>
          </div>
        </div>

        {/* AddToCartPopup component */}
        <AddToCartPopup 
          product={product} 
          isVisible={isPopupVisible} 
          onClose={handleClosePopup} 
        />
      </div>
    
    );
  };

  export default ProductDetail;
