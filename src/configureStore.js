import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
// import { routerReducer, routerMiddleware } from "react-router-redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import * as reducers from "./reducers";

export default function configureStore(history) {
  return createStore(
    combineReducers({ ...reducers, router: connectRouter(history) }),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
}
