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
    addToCart(state, action: PayloadAction<ShoeCard>) {},
    removeFromCart(state, action: PayloadAction<ShoeCard>) {},

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
