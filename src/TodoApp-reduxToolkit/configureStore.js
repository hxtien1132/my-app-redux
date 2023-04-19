import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
});

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger,sagaMiddleware),
});

export default store;
