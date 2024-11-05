const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-10">
      {/* Section 1: About Us */}
      <section className="container mx-auto text-center px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          BKIND is a Montreal-based brand that finds its roots in the consciousness of everything
          surrounding us. This value combined with our passion for natural skincare makes BKIND a
          company that offers natural products that are effective and of high quality.
        </p>
        <div className="w-full flex justify-center mb-10">
          <img
            src="https://u.livelib.ru/reader/Explosive/o/9e90k3b0/o-o.jpeg"
            alt="flower"
            className="h-40 md:h-52 object-contain"
          />
        </div>
      </section>
      {/* Section 2: Meet the Founder */}
      <section className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-12 mb-10 relative">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl md:w-1/2 lg:w-1/3 relative z-10">
          <h3 className="text-2xl font-bold mb-4">Meet Marilyne, BKIND Founder</h3>
          <p className="text-sm leading-relaxed">
            Marilyne, who holds a master degree in microbiology, has been developing her own
            cosmetics for years. Because of her very sensitive skin, she found that the products
            available in pharmacies and large stores  suit her. This led her to try natural
            ingredients, and she quickly realized the power of them on her skin.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            BKIND was born in 2014 and is the result of  interest in natural cosmetics and
            expertise in microbiology.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 lg:w-2/5 relative transform -translate-x-10 md:-translate-x-1/4">
          {/* Moving the image 10% towards the left on mobile, 25% on larger screens */}
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/huda-kattan-office-photgraphed-by-adam-browning-hill-1560430852.jpg"
            alt="Founder"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>
      {/* Section 3: Our Store */}
      <section className="container mx-auto flex flex-col md:flex-row-reverse items-center px-4 md:px-8 lg:px-12 relative">
        <div className="bg-yellow-100 text-gray-800 p-6 rounded-xl md:w-1/2 lg:w-1/3 relative z-10">
          <h3 className="text-2xl font-bold mb-4">Our Store</h3>
          <p className="text-sm leading-relaxed">
            We opened our first store in 2017 in the Old port of Montreal. Here, we started offering
            packaging-free and bulk products, and we could welcome our customers in person for the
            first time.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            In August 2019, we opened a new boutique on Saint-Laurent Boulevard in Montreal. This is
            where our ideas are drawn from, where our projects come to life, and where our team is
            ready to give you personalized advice on all our products.
          </p>
        </div>
        <div className="mt-7 md:mt-0 md:mr-4 w-full md:w-1/2 lg:w-2/5 relative transform translate-x-10 md:translate-x-1/4">
          {/* Moving the image 10% towards the right on mobile, 25% on larger screens */}
          <img
            src="https://i.pinimg.com/originals/53/e6/50/53e6505f4ce9cd16c062f9db13cc1a3a.jpg"
            alt="Store"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
