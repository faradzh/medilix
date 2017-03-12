import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from "redux";
import reducer from "./reducer";

export default combineReducers({
    routing,
    reducer
});
