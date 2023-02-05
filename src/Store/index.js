import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "./Count/Count";
import Content from "./Content/Content";

const rootReducer = combineReducers({
  counter: counterReducer,
  content: Content,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
