import { createStore, combineReducers } from "redux";
import dictionary from "./modules/dictionary";

//내가 가지고 있는 reducer를 합쳐준다
const rootReducer = combineReducers({ dictionary });

//store를 만들어준다 root!
const store = createStore(rootReducer);

// component에 주입해야한다. ->index.js
export default store;
