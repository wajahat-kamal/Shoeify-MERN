import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", href: "#hero-section" },
  { name: "About", href: "#about-section" },
  { name: "Shopping", href: "#shopping-section" },
  { name: "Discount", href: "#discount-section" },
];

const Navbar = () => {
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-full max-w-[950px] rounded-full bg-white/35 dark:bg-white/5 px-6 shadow-lg backdrop-blur-sm"
      >
        <nav className="flex items-center justify-between py-3 text-white">
          {/* -------- Logo -------- */}
          <a
            href="/"
            aria-label="Homepage"
            className="text-xl font-mono font-semibold tracking-widest hover:opacity-90 transition-opacity"
          >
            <img src={logo} alt="" />
            <span>SHOEIFY</span>
          </a>

          {/* -------- Desktop Menu -------- */}
          <div className="hidden md:flex items-center gap-x-6 text-sm">
            {navLinks.map(({ name, href }: { name: string; href: string }) => {
              return (
                <a
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center gap-2 font-mono font-medium transition-colors duration-300 text-zinc-400 hover:text-white"
                >
                  {name}
                </a>
              );
            })}
          </div>

          {/* -------- Mobile Toggle -------- */}
          <button
            onClick={handleToggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-gray-200 hover:text-white transition-colors z-[60]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </motion.header>

      {/* ================= Mobile Overlay ================= */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 md:hidden z-40"
        />
      )}

      {/* ================= Mobile Menu ================= */}
      {isOpen && (
        <aside
          className="fixed top-20 right-3 w-48 rounded-xl bg-black/70 border border-white/10
          backdrop-blur-xl shadow-lg md:hidden z-50"
        >
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map(({ name, href }: { name: string; href: string }) => {
              return (
                <a
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition text-gray-200 hover:text-white"
                >
                  {name}
                </a>
              );
            })}
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
