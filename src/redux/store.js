import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk  from "redux-thunk";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import mySaga from "./saga";

const middleware = [thunk]
const sagaMiddleware = createSagaMiddleware()

if(process.env.NODE_ENV !== 'development'){
  middleware.push(logger);
  
}
middleware.push(sagaMiddleware)
export const store = createStore(rootReducer,applyMiddleware(...middleware))
sagaMiddleware.run(mySaga)