import { createStore, applyMiddleware } from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

const router = routerMiddleware(browserHistory);
const middleware = applyMiddleware(router, thunk);
const store = createStore(reducer, middleware);

export default store;