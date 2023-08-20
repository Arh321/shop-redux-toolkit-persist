import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, payload) => {
      const copy = state.cart.find((item) => item.id == payload.payload.id);
      if (!copy) {
        state.cart = [...state.cart, payload.payload];
      }
    },
    addAmount: (state) => {
      let amountItems = 0;
      state.cart.forEach((item) => {
        amountItems += item.amount;
      });

      state.amount = amountItems;
    },
    minesAmount: (state, payload) => {
      const cartItem = state.cart.find((item) => item.id == payload.payload.id);
      cartItem.amount = cartItem.amount - 1;
      state.amount = state.amount - 1;
    },
    addAmountItem: (state, payload) => {
      const cartItem = state.cart.find((item) => item.id == payload.payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    calculateTotal: (state) => {
      let amountItems = 0;
      let totalPrice = 0;
      state.cart.forEach((item) => {
        amountItems += item.amount;
        totalPrice += item.amount * item.price;
      });
      state.total = totalPrice;
    },
    remove: (state, payload) => {
      const cartItem = state.cart.filter(
        (item) => item.id !== payload.payload.id
      );
      state.cart = [...cartItem];
    },
    cleare: (state) => {
      state.cart = [];
      state.amount = 0;
      state.total = 0;
    },
  },
});

export const {
  addItemCart,
  addAmount,
  addAmountItem,
  minesAmount,
  calculateTotal,
  remove,
  cleare,
} = cartSlice.actions;

export default cartSlice.reducer;
