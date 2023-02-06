import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "./Count/Count";
import ContentReducer from "./Content/content";
import imageContentReducer from "./Image/image";

const rootReducer = combineReducers({
  counter: counterReducer,
  content: ContentReducer,
  image: imageContentReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
