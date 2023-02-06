import { createSlice } from "@reduxjs/toolkit";
import CountState from "./CountState";
import countReducers from "./countReducers";

export const counterSlice = createSlice({
  name: "counter",
  initialState: CountState.value,
  reducers: {
    increment: countReducers.SET_INCREMENT,
    decrement: countReducers.SET_DECREMENT,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
