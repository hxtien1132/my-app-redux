import { createStore, combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import todoReducer from "./todoApp/todoReducer";
import todoReducer from "./todoApp/todoReducer";
const composedEnhancers = composeWithDevTools();
const reducer = combineReducers({
  //key:value
  counter: counterReducer,

});
// const store = createStore(reducer, composedEnhancers); //reducer(counter)
const store = createStore(todoReducer, composedEnhancers);
export default store;
