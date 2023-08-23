import { createSlice } from "@reduxjs/toolkit";

interface ThemeInterface {
  isThemeDark: boolean;
}
const initialState: ThemeInterface = {
  isThemeDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
