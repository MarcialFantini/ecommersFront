import { createSlice } from "@reduxjs/toolkit";
import { ItemPage, thunkCreateProduct, thunkGetPageProduct } from "./thunks";

interface ProductsState {
  createdProduct: boolean;
  listProducts: ItemPage[];
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
    });
    build.addCase(thunkGetPageProduct.fulfilled, (state, action) => {
      if (action.payload) {
        state.listProducts = action.payload;
      }
    });
  },
});

export const {} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
