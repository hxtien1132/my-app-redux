import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const reducer = combineReducers({
  //key:value
  counter: counterReducer,
});
