import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0B0F1A] text-zinc-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Shoeify
          </h2>
          <p className="text-sm leading-relaxed">
            Shoeify delivers premium quality footwear designed for comfort,
            durability, and modern style. Step confidently, every day.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className="hover:text-(--color-primary) transition-colors">
              <Facebook size={18} />
            </a>
            <a className="hover:text-(--color-primary) transition-colors">
              <Instagram size={18} />
            </a>
            <a className="hover:text-(--color-primary) transition-colors">
              <Twitter size={18} />
            </a>
            <a className="hover:text-(--color-primary) transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers and updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg bg-[#111827] border border-white/10 text-sm focus:outline-none"
            />
            <button
              className="px-4 py-2 bg-(--color-primary) text-black rounded-r-lg text-sm font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm">
        © {new Date().getFullYear()} Shoeify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
