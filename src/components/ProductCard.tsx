import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { ShoeCard } from "../assets/data/shoesData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";

interface ProductCardProps {
  product: ShoeCard;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: (index + 0.5) * 0.1 }}
      viewport={{ once: true }}
      className="group bg-(--secondary) border border-white/10 rounded-2xl relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-30 md:h-45 overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 text-xs md:font-semibold rounded-full bg-(--primary) text-white">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center ">
          <h3 className="text-white font-semibold text-xs md:text-md line-clamp-1">
            {product.name}
          </h3>

          <span className="text-(--primary) md:font-bold text-xs">
            ${product.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="
    flex items-center justify-center gap-2 px-2 md:px-3 py-1.5 md:py-2
    rounded-xl bg-(--primary)/80 text-white font-medium text-xs md:text-sm
    w-full transition-all duration-300
    hover:bg-(--primary)/80 hover:scale-102
    active:scale-95
    shadow-md hover:shadow-lg
    cursor-pointer
  "
        >
          <ShoppingCart size={16} className="text-white" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
