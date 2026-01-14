import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { ShoeCard } from "../assets/data/ShoesData";

interface ProductCardProps {
  product: ShoeCard;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: product.id * 0.1 }}
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
                 bg-(--primary) hover:bg-(--primary)/80 hover:text-black
                 text-sm font-medium transition-colors duration-300 w-full"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
