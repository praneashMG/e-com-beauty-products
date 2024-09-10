import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-[#D6C7E3] dark:bg-gray-900">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100">
          <span className="text-pink-500 dark:text-pink-400">Why</span> Choose Us
        </h2>
        <p className="text-gray-700 mt-4 text-base md:text-lg dark:text-gray-300">
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since."
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0 flex justify-center md:justify-start">
            <img
              src="https://i.pinimg.com/736x/c1/15/fe/c115feb5fcbff9d9e64b15fff8944c82.jpg"
              alt="Why Choose Us"
              className="rounded-lg"
              style={{
                width: '120px',
                height: 'auto',
                borderTopRightRadius: '120px',
              }}
            />
          </div>
          <div className="flex flex-wrap justify-center md:justify-start md:w-3/4">
            {[
              { icon: '🛠️', title: 'Accessibility', description: 'It is a long established fact that a reader will be distracted by the readable content.' },
              { icon: '🌿', title: 'Sustainable', description: 'It is a long established fact that a reader will be distracted by the readable content.' },
              { icon: '🚀', title: 'Journey', description: 'It is a long established fact that a reader will be distracted by the readable content.' }
            ].map(({ icon, title, description }, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 text-center">
                <div className="p-6 rounded-lg bg-white shadow-md dark:bg-gray-800 dark:shadow-lg">
                  <div className="mb-4 text-3xl md:text-4xl text-gray-500 dark:text-gray-300">{icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
                  <p className="text-gray-600 text-sm md:text-base dark:text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
