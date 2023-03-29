import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { increment, incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  //reducer được cung cấp từ các file
  counter: counterSlice,
  global: globalSlice,
});
//thông báo:logger thay loggerMiddleWare 
// const loggerMiddleWare = (store) => (next) => (action) => { //function lồng function
//     console.log(action);
//     action.payload=100
//     next(action)
// };

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger,sagaMiddleware),
});
// store.subscribe(() => {
//   //javascript observer pattern
//   console.log(`current state : ${store.getState().counter.count}`);
// });
// store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));

export default store;
