import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import {
  removeFromCart,
  closeCart,
  plusQty,
  minusQty,
  checkout,
} from "../redux/cart/cartSlice";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);

  if (!isOpen) return null;

  const checkoutHandler = () => {
    dispatch(checkout());

    toast.success("🎉 Checkout completed successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      {/* Overlay click close */}
      <div className="absolute inset-0" onClick={() => dispatch(closeCart())} />

      {/* Drawer */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="absolute right-0 top-0 h-full w-80
          bg-(--secondary) border-l border-white/10
          p-6 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Your Cart</h3>
          <button
            onClick={() => dispatch(closeCart())}
            className="text-zinc-400 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <p className="text-sm text-zinc-400 text-center mt-20">
            Your cart is empty
          </p>
        )}

        {/* Items */}
        <div className="space-y-4">
          {items.map((item) => (
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
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-6 left-6 right-6 space-y-3">
            <button
              onClick={checkoutHandler}
              className="w-full bg-(--primary) text-white py-2 rounded-xl
                hover:opacity-90 transition"
            >
              Checkout
            </button>

            <button
              onClick={() => dispatch(closeCart())}
              className="w-full text-sm text-zinc-400 hover:text-white transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
