import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productsList } from "../products/products";

export interface ProductCar {
  amount: number;
  product: productsList;
}

interface CarState {
  listOfProducts: ProductCar[];
}

const initialState: CarState = {
  listOfProducts: [],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addProductToCar: (state, action: PayloadAction<productsList>) => {
      const indexInList = state.listOfProducts.findIndex(
        (product) => product.product.id === action.payload.id
      );

      if (-1 === indexInList) {
        state.listOfProducts.push({ product: action.payload, amount: 1 });
      } else {
        state.listOfProducts[indexInList].amount += 1;
      }
    },

    plusProduct: (state, action: PayloadAction<number>) => {
      const indexInList = state.listOfProducts.findIndex(
        (state) => state.product.id === action.payload
      );

      state.listOfProducts[indexInList].amount =
        state.listOfProducts[indexInList].amount + 1;
    },

    delOneProductToCar: (state, action: PayloadAction<number>) => {
      const isInList = state.listOfProducts.findIndex(
        (item) => item.product.id === action.payload
      );

      const amount = state.listOfProducts[isInList].amount;

      if (amount > 1) {
        state.listOfProducts[isInList].amount = amount - 1;
      } else {
        state.listOfProducts = state.listOfProducts.filter(
          (state) => state.product.id !== action.payload
        );
      }
    },
    delProductCar: (state, action: PayloadAction<number>) => {
      state.listOfProducts = state.listOfProducts.filter(
        (product) => product.product.id !== action.payload
      );
    },
    setDefaultCar: (state) => (state = initialState),
  },
});

export const {
  setDefaultCar,
  addProductToCar,
  delProductCar,
  delOneProductToCar,
  plusProduct,
} = carSlice.actions;

export const carReducer = carSlice.reducer;
