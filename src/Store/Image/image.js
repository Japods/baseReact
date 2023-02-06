import { createSlice } from "@reduxjs/toolkit";
import { getImage } from "./imageAction";

export const dataSliceImage = createSlice({
  name: "image",
  initialState: {
    image: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImage.fulfilled, (state, action) => {
      state.image = action.payload;
    });
  },
});
export const { getImage1 } = dataSliceImage.actions;

export default dataSliceImage.reducer;
