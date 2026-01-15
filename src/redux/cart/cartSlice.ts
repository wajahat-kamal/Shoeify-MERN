import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShoeCard } from "../../assets/data/ShoesData";

const loadCartItems = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export interface CartItemType extends ShoeCard {
  quantity: number;
}

interface CartState {
  items: CartItemType[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: loadCartItems(),
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
    plusQty(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (!item) return;
      if (item?.quantity >= 1) {
        item.quantity += 1;
      } else {
        console.log("error in plusQty redux");
      }
    },
    minusQty(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== item.id);
      }
    },
    checkout(state) {
      state.items = [];
      state.isOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleCart,
  closeCart,
  plusQty,
  minusQty,
  checkout,
} = cartSlice.actions;

export default cartSlice.reducer;
