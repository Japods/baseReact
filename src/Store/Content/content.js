import { createSlice } from "@reduxjs/toolkit";
import Content from "./contentState";

export const contentSlicer = createSlice({
  name: "Content",
  initialState: Content,
  reducers: {
    setContent: (state, action) => {
      console.log(action, "kjasndj");
      switch (action.type) {
        case "GET_DETAILS_SUCCESS":
          return { ...state, details: action.payload };
        case "GET_DETAILS_ERROR":
          return { ...state, error: action.error };
        default:
          return state;
      }
    },
  },
});

export const { setContent } = contentSlicer.actions;

export default contentSlicer.reducer;
