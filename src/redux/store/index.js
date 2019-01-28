import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import { logger } from "redux-logger";

// REDUX CONFIGURATION ALONG WITH LOGGER AND THUNK
export default function configureStore() {
  
  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
  );
  
  return store;
}
