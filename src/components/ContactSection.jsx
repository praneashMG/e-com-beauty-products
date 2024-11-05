import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 ">
        {/* Why Contact Us Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Contact Us?</h2>
          <p className="text-gray-600 leading-relaxed">
            We value your inquiries and feedback! Whether you're a potential client, partner, or just have questions, 
            we're here to assist you. Our team is available to provide prompt responses to your queries. Reach out 
            to learn more about our services, partnership opportunities, or anything else you're curious about.
          </p>
        </div>
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <p className="mb-6">Reach out to us for any inquiry</p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="relative h-80 lg:h-auto">
            <iframe
              title="Google Maps"
              className="w-full h-full border-0 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6345942329063!2d77.7808142!3d11.4079269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba967ab37b30647%3A0xe71bc597ec0cc43d!2sVeppadai%2C+Tamil+Nadu+638008!5e0!3m2!1sen!2sin!4v1695466215034!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute inset-y-0 right-0 bg-blue-500 w-10 hidden lg:block"></div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
          {/* Location */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-600">Location: VEPPADAI</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-600">Email: praneashp@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-4xl mb-4" />
            <p className="text-gray-600">Phone: +9715499118</p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      {/* <div className="absolute left-0 top-1/4 hidden lg:flex flex-col items-center">
        <span className="mb-4 rotate-90 text-gray-600">FOLLOW US</span>
        <div className="space-y-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ContactSection;
