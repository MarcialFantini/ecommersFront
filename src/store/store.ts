import { configureStore } from "@reduxjs/toolkit";

import { themeReducer } from "./slice/Theme/theme";
import { productsReducer } from "./slice/products/products";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
