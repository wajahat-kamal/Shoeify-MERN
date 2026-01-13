import React from "react";
import { ShoesData } from "../assets/ShoesData.js";
import ProductCard from "./ProductCard.js";

function FeaturedProducts() {
  const limitedShoes = ShoesData.slice(0, 8);
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-0">
        {limitedShoes.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/shop"
          className="px-8 py-3 rounded-xl bg-(--primary) text-black font-medium
          hover:opacity-90 transition"
        >
          View All Products
        </a>
      </div>
    </section>
  );
}

export default FeaturedProducts;
