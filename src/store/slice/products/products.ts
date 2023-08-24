import { createSlice } from "@reduxjs/toolkit";
import { thunkCreateProduct } from "./thunks";

interface ProductsState {}

export const initialState: ProductsState = {};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(thunkCreateProduct.fulfilled, (state, action) => {});
  },
});

export const {} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
