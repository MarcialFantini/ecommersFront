import { createSlice } from "@reduxjs/toolkit";
import { createUserThunk, loginUserThunk } from "./thunk";

interface InitialState {
  token: string | null;
  isRegister: boolean;
}

const initialState: InitialState = { token: null, isRegister: false };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(loginUserThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.token = action.payload;
      }
    });
    build.addCase(createUserThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isRegister = true;
    });
  },
});

export const {} = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
