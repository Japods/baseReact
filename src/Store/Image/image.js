import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getImage } from "./imageAction";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    image: null,
  },
  reducers: {
    reset: (state) => {
      state.image = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImage.fulfilled, (state, action) => {
      state.image = action.payload;
    });
  },
});

export default imagesSlice.reducer;
