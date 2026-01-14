import { createSlice } from "@reduxjs/toolkit";
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
    addToCart(state, action) {},
    removeFromCart(state, action) {},

    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    CloseCart(state) {
      state.isOpen = false;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart, CloseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
