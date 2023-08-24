import { createSlice } from "@reduxjs/toolkit";
import { thunkCreateProduct } from "./thunks";

interface ProductsState {
  createdProduct: boolean;
  listProducts: any[];
}

export const initialState: ProductsState = {
  listProducts: [],
  createdProduct: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(thunkCreateProduct.fulfilled, (state, action) => {
      state.createdProduct = true;
      setTimeout(() => {
        state.createdProduct = false;
      }, 500);
    });
  },
});

export const {} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
