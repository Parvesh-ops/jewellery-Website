import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Binod <span className="text-yellow-500">Jewellers</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Binod Jewellers offers premium gold, diamond, silver, and platinum
            jewellery crafted with elegance, purity, and trust for every
            occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-yellow-500 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-yellow-500 transition">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/collections" className="hover:text-yellow-500 transition">
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-yellow-500 transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-yellow-500 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-yellow-500 mt-0.5" />
              <span>Gramthan-6,Netachowk,Morang</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-500" />
              <span>+977 98XXXXXXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-500" />
              <span>info@binodjewellers.com</span>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 mb-5">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition"
            >
              <FaFacebook  size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition"
            >
              <FaTiktok size={18} />
            </a>
          </div>

          <p className="text-sm mb-2">Subscribe for latest designs</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-l-md focus:outline-none bg-white text-black"
            />
            <button className="bg-yellow-500 px-4 rounded-r-md text-sm font-semibold text-gray-900 hover:bg-yellow-600 transition">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Binod Jewellers. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
