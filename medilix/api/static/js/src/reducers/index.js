import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from "redux";
import userReducer from "./userReducer";

export default combineReducers({
    routing,
    userReducer
});
