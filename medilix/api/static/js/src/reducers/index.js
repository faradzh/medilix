import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import eventReducer from './eventReducer';
import calendarReducer from './calendarReducer';
import doctorReducer from './doctorReducer';
import notificationReducer from './notificationReducer';
import appointmentReducer from './appointmentReducer';
import authReducer from './authReducer';

export default combineReducers({
    routing,
    userReducer,
    profileReducer,
    eventReducer,
    calendarReducer,
    doctorReducer,
    notificationReducer,
    appointmentReducer,
    authReducer
});
