import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderGetItem, createOrder, getOrders } from "./thunk";

interface OrdersInterface {
  listOrders: OrderGetItem[];
  completed: boolean;
}

const ordersInitialState: OrdersInterface = {
  listOrders: [],
  completed: false,
};

export const orders = createSlice({
  name: "orders",
  initialState: ordersInitialState,
  reducers: {
    toggleComplete: (state) => {
      state.completed = !state.completed;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(
        getOrders.fulfilled,
        (state, action: PayloadAction<OrderGetItem[] | false>) => {
          if (action.payload) {
            state.listOrders = action.payload;
          }
        }
      )
      .addCase(createOrder.fulfilled, (state, action) => {
        console.log(action.payload);

        state.completed = true;
        state.listOrders = [];
      });
  },
});

export const { toggleComplete } = orders.actions;

export const ordersReducer = orders.reducer;
