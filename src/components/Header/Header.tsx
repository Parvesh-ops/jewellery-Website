import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-yellow-500 border-b-2 border-yellow-500"
        : "text-white hover:text-yellow-500"
    }`;

  return (
    <nav className="w-full bg-[#0f0f0f] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-wide">
            Binod <span className="text-yellow-500">Jewellers</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/collections" className={navLinkClass}>Collections</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-block bg-yellow-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition"
        >
          Visit Store
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f0f0f] shadow-lg px-6 pb-4 space-y-2 transform transition-all duration-300 ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/collections" onClick={() => setOpen(false)} className={navLinkClass}>
          Collections
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)} className={navLinkClass}>
          Products
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>
          About Us
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>
          Contact
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className="block text-center bg-yellow-500 text-white py-2 rounded-full font-semibold mt-3 hover:bg-yellow-600 transition"
        >
          Visit Store
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
