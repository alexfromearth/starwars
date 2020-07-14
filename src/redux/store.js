import redux, { createStore, combineReducers, applyMiddleware } from "redux";
import mainReduser from "./mainReduser";
import ThunkMiddleware from "redux-thunk";

let redusers = combineReducers({
  appMain: mainReduser,
});

let store = createStore(redusers, applyMiddleware(ThunkMiddleware));

export default store;
