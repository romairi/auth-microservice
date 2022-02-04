import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";

import createMiddleware from "../middleware";
import createRootReducer from "../reducers";

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  {},
  applyMiddleware(...createMiddleware(history))
);

export default store;
