import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShoeCard } from "../../assets/data/ShoesData";

export interface CartItem extends ShoeCard {
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
    plusQty(state, action: PayloadAction<ShoeCard>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.price = item.price * 2;
      } else {
        console.log("error in plusQty redux");
      }
    },
    minusQty(state, action: PayloadAction<ShoeCard>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        const itemPrice = item.price;
        item.price = item.price - itemPrice;
      } else {
        console.log("error in minusQty redux");
      }
    },
  },
});

export const { addToCart, removeFromCart, toggleCart, closeCart, plusQty, minusQty } =
  cartSlice.actions;

export default cartSlice.reducer;
