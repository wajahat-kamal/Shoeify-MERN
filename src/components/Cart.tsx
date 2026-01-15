import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { closeCart, checkout } from "../redux/cart/cartSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import CartItem from "./CartItem";
import cartImage from "../assets/images/cart-image.png";
import { X } from "lucide-react";

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
          <div className="text-xl md:text-2xl font-semibold text-white flex flex-row gap-1 items-center">
            <img
              src={cartImage}
              alt="Cart"
              className="h-7 w-7 md:h-10 md:w-10 object-contain opacity-90 pointer-events-none"
              loading="lazy"
            />
            <h3>Your Cart</h3>
          </div>
          <button
            onClick={() => dispatch(closeCart())}
            className="text-zinc-400 hover:text-white transition"
          >
            <X />
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
            <CartItem item={item} />
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
