import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getImage } from "./imageAction";
import imageReducers from "./imageReducers";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    image: "",
  },
  reducers: {
    setImage: imageReducers.SET_IMAGE,
  },
});
export const { setImage } = imagesSlice.actions;
export default imagesSlice.reducer;
