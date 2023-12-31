import { configureStore } from "@reduxjs/toolkit";

import { themeReducer } from "./slice/Theme/theme";
import { productsReducer } from "./slice/products/products";
import { loginReducer } from "./slice/login/login";
import { carReducer } from "./slice/car/car";
import { blogsReducer } from "./slice/blogs/blogs";
import { ordersReducer } from "./slice/oders/orders";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    login: loginReducer,
    blogs: blogsReducer,
    car: carReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
