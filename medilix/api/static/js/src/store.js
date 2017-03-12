import { createStore, applyMiddleware } from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import reducer from "./reducers/index";

const router = routerMiddleware(browserHistory);
const middleware = applyMiddleware(router);
const store = createStore(reducer, middleware);

export default store;