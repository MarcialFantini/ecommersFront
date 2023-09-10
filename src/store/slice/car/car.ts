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

    delOneProductToCar: (state, action: PayloadAction<productsList>) => {
      const isInList = () => {};
    },
    delProductCar: (state, action: PayloadAction<number>) => {
      state.listOfProducts = state.listOfProducts.filter(
        (product) => product.product.id !== action.payload
      );
    },
  },
});

export const { addProductToCar, delProductCar } = carSlice.actions;

export const carReducer = carSlice.reducer;
