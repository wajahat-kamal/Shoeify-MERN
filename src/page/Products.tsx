import React, { useState } from "react";
import { ShoesData } from "../assets/ShoesData.js";
import ProductCard from "../components/ProductCard.js";

function Products() {
  const [category, setCategory] = useState("All");
  const categorys = ["All", "Men", "Women"];

  const filterdShoes = ShoesData.filter(
    (shoe) => category === "All" || shoe.category === category
  );

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

      <div className="flex flex-wrap items-center justify-center md:gap-6 gap-2 max-sm:gap-1.5 mb-6">
        {categorys.map((category) => (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className="relative
                   px-4 py-1.5 md:px-4 md:py-1.5
                   max-sm:px-2.5 max-sm:py-1      
                   text-sm md:text-[15px] max-sm:text-xs  
                   font-medium rounded-4xl overflow-hidden
                   bg-gray-100 text-gray-600 shadow-sm
                   transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-0">
        {filterdShoes.map((product) => (
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

export default Products;
