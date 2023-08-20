import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

// products/add
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.products = action.payload;
    },
    remove: (state, action) => {
      state.products.filter((id) => id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = productsSlice.actions;

export default productsSlice.reducer;
