import { createSlice } from "@reduxjs/toolkit";

const lightTheme = {
  textColor: "black",
  secondBackgroundColor: "white",
  backgroundColor: "#e7e7e7",
};

const darkTheme = {
  textColor: "white",
  secondTextColor: "#cccccc",
  secondBackgroundColor: "#333333",
  backgroundColor: "#212121",
};

const initialState = {
  theme: lightTheme,
};

export const colorSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    makeDark: (state) => {
      state.theme = darkTheme;
    },
    makeLight: (state) => {
      state.theme = lightTheme;
    },
  },
});

export const { makeDark, makeLight } = colorSlice.actions;

export default colorSlice.reducer;
