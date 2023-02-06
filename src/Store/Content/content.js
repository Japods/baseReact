import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    setContent: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setContent } = dataSlice.actions;

export default dataSlice.reducer;
