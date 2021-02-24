import { applyMiddleware, compose, createStore } from "redux";
import mainReducer from "../reducers/reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Most basic syntax without any middleware and React devtools
// const store = createStore(mainReducer)

let middlewares = [thunk]
//Basic syntax without enabling React devtools
//const store = createStore(mainReducer, compose(applyMiddleware(...middlewares)))

//Complete syntax with middleware and devtools
const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store;