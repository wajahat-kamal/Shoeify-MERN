import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import cartImage from "../assets/images/cart-image.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/cart/cartSlice";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/#hero" },
  { name: "Shopping", href: "/shopping" },
  { name: "About", href: "/#about-us" },
  { name: "Testimonials", href: "/#testimonials" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const dispatch = useDispatch();
  const totalItems = useSelector(
    (state: { cart: { items: Array<{ quantity: number }> } }) =>
      state.cart.items.reduce(
        (total: number, item: { quantity: number }) => total + item.quantity,
        0
      )
  );

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
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-[950px] h-14 rounded-full bg-(--primary)/70 px-6 shadow-lg backdrop-blur-md"
      >
        <nav className="flex h-full items-center justify-between text-white">
          {/* Logo */}
          <a
            href="/"
            aria-label="Homepage"
            className="flex items-center gap-2 text-2xl font-mono font-semibold tracking-widest hover:opacity-90 transition-opacity"
          >
            <img src={logo} alt="Shoeify logo" className="w-10 h-10" />
            <span>SHOEIFY</span>
          </a>

          <div className="flex flex-row gap-1">
            <div className="flex flex-row gap-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-4">
                {navLinks.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="relative font-mono text-md font-medium text-white transition-colors group"
                  >
                    {name}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => dispatch(toggleCart())}
                aria-label="Open cart"
                className="relative flex items-center justify-center pl-4 h-11 w-14
    md:border-l border-zinc-500/60
    transition-colors duration-200
    hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-(--primary)/40"
              >
                <img
                  src={cartImage}
                  alt="Cart"
                  className="w-7 h-8 md:w-9 object-cover opacity-90 pointer-events-none"
                  loading="lazy"
                />

                {totalItems > 0 && (
                  <span
                    className="absolute -top-2 -right-2
        min-w-[20px] h-5 px-1
        bg-red-500 text-xs font-medium text-white
        flex items-center justify-center rounded-full"
                  >
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="md:hidden text-gray-200 hover:text-white transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ================= Overlay ================= */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* ================= Mobile Menu ================= */}
      {isOpen && (
        <aside
          id="mobile-menu"
          className="fixed top-20 right-4 z-45 w-52 rounded-xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition"
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
