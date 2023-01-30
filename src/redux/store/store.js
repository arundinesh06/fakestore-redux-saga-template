import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducers from "../reducers/rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import saga from "../../sagas";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(saga);
export default store;
