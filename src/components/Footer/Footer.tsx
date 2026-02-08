import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Story */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Binod <span className="text-yellow-500">Jewellers</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Trusted Nepali jewellery brand offering certified gold, diamond,
            silver, and platinum jewellery. Serving families with purity,
            craftsmanship, and tradition for generations.
          </p>
          <p className="mt-3 text-sm text-yellow-500">
            Since 2058
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/" className="hover:text-yellow-500 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-yellow-500 transition">
                Gold Jewellery
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-yellow-500 transition">
                Diamond Jewellery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-yellow-500 transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-yellow-500 transition">
                Visit Our Store
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Store Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Store
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-yellow-500 mt-0.5" />
              <span>Gramthan-6, Netachowk, Morang</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-500" />
              <span>+977 98XXXXXXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-500" />
              <span>binodjewellers@gmail.com</span>
            </li>
          </ul>

          <div className="bg-[#1a1a1a] mt-5 p-4 rounded-2xl text-sm">
            <p className="text-white font-semibold mb-1">Gold Rate Updated Daily</p>
            <p className="text-gray-400 font-sans">
              Visit store for today's live gold & silver price
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div>
          <h3 className="text-lg text-c font-semibold text-white mb-4">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-6">
            <a
              href="https://www.facebook.com/uniquebinod"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1a] rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="p-3 bg-[#1a1a1a] rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@friendsclub29"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1a] rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              <FaTiktok size={18} />
            </a>

          </div>

          <p className="text-sm mb-2">Subscribe for latest designs</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-l-md focus:outline-none bg-white text-gray-900"
            />
            <button className="bg-yellow-500 px-4 rounded-r-md text-sm font-semibold text-gray-900 hover:bg-yellow-600 transition">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="border-t border-[#1f1f1f] mt-14 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Binod Jewellers • Trusted Nepali Jewellery Brand
      </div>
    </footer>
  );
};

export default Footer;
