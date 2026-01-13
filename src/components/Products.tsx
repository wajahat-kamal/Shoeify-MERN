import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { ShoesData } from "../assets/ShoesData.js";

function FeaturedProducts() {
  return (
    <section id="shopping" className="w-full py-24 px-6 md:px-20 bg-[#0B0F1A]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Featured Products ⭐
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Discover our most popular shoes crafted for comfort, performance, and
          everyday style.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {ShoesData.map((product, index) => (
          <motion.div
            key={`${product.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-[#111827]/80 border border-white/10 rounded-2xl p-5
            hover:border-(--color-primary) transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-52 mb-4 overflow-hidden rounded-xl bg-black/40">
              <img
                src={`${product.image}`}
                alt={`${product.name}`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Info */}
            <h3 className="text-white font-medium text-lg mb-1">
              {product.name}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-(--color-primary) font-semibold">
                {product.price}
              </span>

              <button
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg
                bg-white/5 hover:bg-(--color-primary) hover:text-black transition"
              >
                <ShoppingBag size={16} />
                Buy
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          className="px-8 py-3 rounded-xl bg-(--color-primary) text-black font-medium
          hover:opacity-90 transition"
        >
          View All Products
        </button>
      </div>
    </section>
  );
}

export default FeaturedProducts;
