import { createSlice } from "@reduxjs/toolkit";
import contentState from "./contentState";
import contentReducers from "./contentReducers";

export const dataSlice = createSlice({
  name: "data",
  initialState: contentState,
  reducers: {
    setContent: contentReducers.SET_CONTENT,
    setContentById: contentReducers.SET_CONTENT_BY_ID,
  },
});
export const { setContent, setContentById } = dataSlice.actions;

export default dataSlice.reducer;
