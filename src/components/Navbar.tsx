import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#hero-section" },
  { name: "About", href: "#about-section" },
  { name: "Shopping", href: "#shopping-section" },
  { name: "Discount", href: "#discount-section" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      {/* ================= Header ================= */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full max-w-[950px] rounded-full bg-white/35 dark:bg-white/5 px-6 shadow-lg backdrop-blur-sm z-50 relative"
      >
        <nav className="flex items-center justify-between py-2 text-white relative z-50">
          {/* Logo */}
          <a
            href="/"
            aria-label="Homepage"
            className="flex items-center gap-2 text-2xl font-mono font-semibold tracking-widest hover:opacity-90 transition-opacity"
          >
            <img className="w-11 h-11" src={logo} alt="Logo" />
            <h3>SHOEIFY</h3>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-6 text-md">
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className="group relative font-mono font-medium text-zinc-500 hover:text-white transition-colors duration-300"
              >
                {name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={handleToggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-gray-200 hover:text-white transition-colors focus:outline-none z-50 relative"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 md:hidden z-40 backdrop-blur-sm"
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <aside className="fixed top-20 right-3 w-48 rounded-xl bg-black/70 border border-white/10 backdrop-blur-xl shadow-lg md:hidden z-45">
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-lg text-gray-200 hover:text-white transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
