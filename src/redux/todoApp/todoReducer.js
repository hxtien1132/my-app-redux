import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "../../components/4.TodoApp/Filters/filterSlice";
import todoListReducer from "../../components/4.TodoApp/TodoList/todoListSlice";



const todoReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});
export default todoReducer;
