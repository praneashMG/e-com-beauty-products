import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Hair</a></li>
              <li><a href="#" className="hover:underline">Body</a></li>
              <li><a href="#" className="hover:underline">Face</a></li>
              <li><a href="#" className="hover:underline">Kits</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Our story</a></li>
              <li><a href="#" className="hover:underline">Shipping and returns</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          {/* Mission and Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our mission</h3>
            <p className="text-sm mb-4">
              We make the internet’s favorite men’s products. No harmful chemicals and made in the USA.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-300"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="hover:text-gray-300"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="hover:text-gray-300"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="hover:text-gray-300"><FontAwesomeIcon icon={faTiktok} /></a>
              <a href="#" className="hover:text-gray-300"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
        </div>
        {/* Footer Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-xs">© 2024, theme-refresh-demo Powered by Nutz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
