import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import { useFavorite } from "../../context/FavoriteContext";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { cartItems } = useCart();
  const { favorites } = useFavorite();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 text-sm font-semibold transition-colors duration-200
     ${isActive
      ? "text-yellow-500 md:border-b-2 md:border-yellow-500"
      : "text-black hover:text-yellow-500"
    }`;

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-black tracking-wide">
          Binod <span className="text-yellow-500">Jewellers</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* Favorite */}
          <Link to="/favorite" className="relative text-black hover:text-yellow-500">
            <GrFavorite className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-1.5 rounded-full">
              {favorites.length}
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative text-black hover:text-yellow-500">
            <IoCartOutline className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-1.5 rounded-full">
              {cartItems.length}
            </span>
          </Link>
        </div>

        {/* Desktop CTA + Sign In */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/contact"
            className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition"
          >
            Visit Store
          </NavLink>

          {/* Desktop Auth  & signIn */}
          <SignedOut>
            <SignInButton>
              <button className="border border-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/favorite" className="relative text-black">
            <GrFavorite className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-1.5 rounded-full">
              {favorites.length}
            </span>
          </Link>

          <Link to="/cart" className="relative text-black">
            <IoCartOutline className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-1.5 rounded-full">
              {cartItems.length}
            </span>
          </Link>

          <button onClick={() => setOpen(!open)} className="text-black">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-6 overflow-hidden transition-all duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)} className={navLinkClass}>Products</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About Us</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>

        {/* Mobile CTA */}
        <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className="block text-center bg-yellow-500 text-black py-2 rounded-full font-semibold mt-4 hover:bg-yellow-600 transition"
        >
          Visit Store
        </NavLink>

        {/* Mobile Sign In & Mobile Auth  */}
        <SignedOut>
          <SignInButton>
            <button className="w-full mt-3 border border-yellow-500 text-black py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="mt-4 flex justify-center">
            <UserButton />
          </div>
        </SignedIn>

      </div>
    </nav>
  );
};

export default Header;
