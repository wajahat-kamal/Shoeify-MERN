import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", href: "#hero-section" },
  { name: "About", href: "#about-section" },
  { name: "Shopping", href: "#shopping-section" },
  { name: "Discount", href: "#discount-section" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#100F0F] text-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-3xl md:text-4xl font-bold"
        >
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-2xl"
            src={logo}
            alt="WK Shoes Logo"
          />
          <span>SHOEIFY</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-foreground/80 hover:text-[#f8f05e] text-xl font-semibold transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-yellow-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 text-white px-6 py-4 space-y-3 z-40">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className="block text-lg font-semibold text-foreground/80 hover:text-[#f8f05e] transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
