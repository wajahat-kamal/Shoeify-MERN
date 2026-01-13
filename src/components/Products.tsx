import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ShoppingCart } from "lucide-react";
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-6 md:px-0">
        {ShoesData.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-(--secondary) border border-white/10 rounded-2xl relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-50 overflow-hidden rounded-t-2xl bg-black/40">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Category Badge */}
              <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-(--primary) text-black">
                {product.category}
              </span>
            </div>

            {/* Product Info */}
            <div className="p-3 flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center ">
                <h3 className="text-white font-semibold text-md line-clamp-1">
                  {product.name}
                </h3>

                <span className="text-(--primary) font-bold text-sm">
                  {product.price}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg
                         bg-(--primary)  hover:text-black
                         text-sm font-medium transition-colors duration-300 w-full"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          className="px-8 py-3 rounded-xl bg-(--primary) text-black font-medium
          hover:opacity-90 transition"
        >
          View All Products
        </button>
      </div>
    </section>
  );
}

export default FeaturedProducts;
