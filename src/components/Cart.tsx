import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { removeFromCart, closeCart } from "../redux/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 h-full w-80 bg-[#0A0F1C] p-6">
        <h3 className="text-xl font-semibold mb-4">Your Cart</h3>

        {items.length === 0 && <p className="text-zinc-400">Cart is empty</p>}

        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <p>{item.name}</p>
              <span className="text-sm text-zinc-400">
                Qty: {item.quantity}
              </span>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-400 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={() => dispatch(closeCart())}
          className="mt-6 w-full border border-white/10 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
