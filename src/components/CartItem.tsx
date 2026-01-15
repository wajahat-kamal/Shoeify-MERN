import React from "react";
import {
  minusQty,
  plusQty,
  removeFromCart,
  type CartItemType,
} from "../redux/cart/cartSlice";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={item.id}
      className="flex items-center justify-between
            bg-white/5 border border-white/10
            rounded-lg p-2 hover:bg-white/10 transition-colors"
    >
      {/* Product Image */}
      <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden border border-white/10">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 ml-2">
        <p className="text-xs text-white leading-snug">{item.name}</p>

        <div className="flex items-center justify-start gap-8 mt-1 text-xs text-zinc-400">
          {/* Price */}
          <span className="text-white font-semibold text-sm">
            ${item.price * item.quantity}
          </span>

          {/* Quantity Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => dispatch(minusQty(item.id))}
              className="bg-white/10 text-white p-1 rounded hover:bg-white/20 transition"
            >
              <Minus size={14} />
            </button>

            <span className="px-2">{item.quantity}</span>

            <button
              onClick={() => dispatch(plusQty(item.id))}
              className="bg-white/10 text-white p-1 rounded hover:bg-white/20 transition"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-xs text-red-400 hover:text-red-300 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
