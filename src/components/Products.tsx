import React, { useState } from "react";
import { ShoesData } from "../assets/ShoesData.js";
import ProductCard from "./ProductCard.js";
import { useLocation } from "react-router-dom";

function Products() {
  const { pathname } = useLocation();

  const [category, setCategory] = useState("All");
  const categories = ["All", "Men", "Women"];

  const limitedShoes = ShoesData.slice(0, 8);

  const filterdShoes =
    pathname === "/"
      ? limitedShoes.filter(
          (shoe) => category === "All" || shoe.category === category
        )
      : ShoesData.filter(
          (shoe) => category === "All" || shoe.category === category
        );

  return (
    <section id="shopping" className="w-full py-24 px-6 md:px-20 bg-[#0B0F1A]">
      {/* Heading */}
      {pathname === "/" ? (
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Featured Products ⭐
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Discover our most popular shoes crafted for comfort, performance,
            and everyday style.
          </p>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-8">
        {categories.map((category) => {
          const isActive = category === category;

          return (
            <button
              key={category}
              onClick={() => setCategory(category)}
              className={`
          relative px-4 py-1.5 sm:px-5 sm:py-2
          text-xs sm:text-sm font-medium rounded-full
          border transition-all duration-300
          ${
            isActive
              ? "bg-(--color-primary) text-black border-(--color-primary) shadow-md"
              : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:text-white"
          }
        `}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-0">
        {filterdShoes.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

      {pathname !== "/shopping" && (
        <div className="text-center mt-16">
          <a
            href="/shopping"
            className="px-8 py-3 rounded-xl bg-(--primary) text-black font-medium
          hover:opacity-90 transition"
          >
            View All Products
          </a>
        </div>
      )}
    </section>
  );
}

export default Products;
