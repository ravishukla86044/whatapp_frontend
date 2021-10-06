import { authReducer } from "./reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

const rootreducer = combineReducers({
  auth: authReducer,
});
const customMiddleware = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const store = createStore(rootreducer, applyMiddleware(customMiddleware));

export { store };
