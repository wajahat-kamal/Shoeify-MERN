import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShoeCard } from "../../assets/data/ShoesData";

interface CartItem extends ShoeCard {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ShoeCard>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    closeCart(state) {
      state.isOpen = false;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart, closeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
