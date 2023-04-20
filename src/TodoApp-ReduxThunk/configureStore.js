import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {composeWithDevTools } from "redux-devtools-extension";
import filtersSlice from "./filtersSlice";
import TodoListSlice from "./todoListSlice";
const composedEnhancers = composeWithDevTools();


const rootReducer = combineReducers({  
    filters: filtersSlice,
    todoList:TodoListSlice
  
});

const store = configureStore({
  reducer: rootReducer,
},composedEnhancers);

export default store;
