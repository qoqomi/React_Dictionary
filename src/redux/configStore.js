import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
//내가 가지고 있는 reducer를 합쳐준다
const rootReducer = combineReducers({ dictionary });
const store = createStore(rootReducer, enhancer);
//store를 만들어준다 root!

// component에 주입해야한다. ->index.js
export default store;
