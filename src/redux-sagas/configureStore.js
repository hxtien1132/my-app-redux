// import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer } from "./reducers";
// import rootSaga from "./rootSaga";

//redux thunk
const store = configureStore({
    reducer: reducer,
    middleware:(gDM) => gDM().concat(logger)
    
})


// //redux saga
// // const sagaMiddleware = createSagaMiddleware();
// const store = configureStore({
//     reducer: reducer,
//     // middleware: (gDM) => gDM().concat(logger, sagaMiddleware)
//     middleware:(gDM) => gDM().concat(logger)
    
// })
// // sagaMiddleware.run(rootSaga)
export default store