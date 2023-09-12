import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserThunk, loginUserThunk } from "./thunk";

interface LoginState {
  token: string | null;
  isRegister: boolean;
  isAdmin: boolean;
}

const initialState: LoginState = {
  token: null,
  isRegister: false,
  isAdmin: false,
};

// Verificar si estamos en el lado del cliente antes de usar localStorage
if (typeof window !== "undefined") {
  const tokenLocal = localStorage.getItem("token") || null;
  const isAdmin = Boolean(localStorage.getItem("isAdmin"));

  if (tokenLocal) {
    initialState.token = tokenLocal;
    initialState.isAdmin = isAdmin;
  }
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("token", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("token");
      }
    },
    setIsRegister: (state, action: PayloadAction<boolean>) => {
      state.isRegister = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.token = action.payload.token;
          state.isAdmin = action.payload.isAdmin;
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem(
            "isAdmin",
            JSON.stringify(action.payload.isAdmin)
          );
        }
      })
      .addCase(createUserThunk.fulfilled, (state) => {
        state.isRegister = true;
      });
  },
});

export const { setToken, setIsRegister } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
