import { combineReducers } from "@reduxjs/toolkit";
import filterSlice from "../../components/4.TodoApp/Filters/filterSlice";
import todoListSlice from "../../components/4.TodoApp/TodoList/todoListSlice";



const todoReducer = combineReducers({
  filters: filterSlice,
  todoList: todoListSlice,
});
export default todoReducer;
