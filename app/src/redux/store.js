import { createStore, applyMiddleware } from "redux";
import productReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
