import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 text-sm font-semibold transition-colors duration-200
     ${isActive
      ? "text-yellow-500 md:border-b-2 md:border-yellow-500"
      : "text-black hover:text-yellow-500"
    }`;

  return (
    <nav className="w-full bg-[#ffffff] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-black tracking-wide">
          Binod <span className="text-yellow-500">Jewellers</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/collections" className={navLinkClass}>Collections</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* Favorite */}
          <Link to="/favorite" className="relative text-black hover:text-yellow-500">
            <GrFavorite className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative text-black hover:text-yellow-500">
            <IoCartOutline className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>
        </div>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-block bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition"
        >
          Visit Store
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f0f0f] px-6 overflow-hidden transition-all duration-300
  ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
      >

        <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
        <NavLink to="/collections" onClick={() => setOpen(false)} className={navLinkClass}>Collections</NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)} className={navLinkClass}>Products</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About Us</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>

        {/* Mobile Cart & Favorite */}
        <div className="flex items-center justify-around mt-4 pt-4 border-t border-gray-700">

          {/* Favorite */}
          <Link
            to="/favorite"
            onClick={() => setOpen(false)}
            className="relative text-black hover:text-yellow-500 flex items-center gap-2"
          >
            <GrFavorite className="h-6 w-6" />
            <span className="text-sm font-medium">Favorite</span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-black text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="relative text-black hover:text-yellow-500 flex items-center gap-2"
          >
            <IoCartOutline className="h-6 w-6" />
            <span className="text-sm font-medium">Cart</span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-black text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>
        </div>

        {/* Mobile CTA */}
        <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className="block text-center bg-yellow-500 text-black py-2 rounded-full font-semibold mt-4 hover:bg-yellow-600 transition"
        >
          Visit Store
        </NavLink>
      </div>

    </nav>
  );
};

export default Header;
