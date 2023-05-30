import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.result = state.result + action.payload;
    },

    minus: (state, action) => {
      state.result = state.result - action.payload;
    },

    multiPlay: (state, action) => {
      state.result = state.result * action.payload;
    },

    suntract: (state, action) => {
      state.result = state.result / action.payload;
    },
  },
});

export const CalculatActions = calculatorSlice.actions;
console.log(CalculatActions);
