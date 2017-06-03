/**
 * Created by faradj on 3/5/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Index from './index';
import MainLayout from './components/mainLayout';
import store from './store';
import auth from './auth';
import DashboardContainer from './containers/dashboard/dashboardContainer';
import SignUpContainer from "./containers/authorization/signUpContainer";
import LoginContainer from "./containers/authorization/loginContainer";
import TimetableContainer from "./containers/dashboard/timetableContainer";
import CalendarContainer from "./containers/dashboard/calendarContainer";
import UserProfileEditContainer from "./containers/dashboard/profile/userProfileEditContainer";
import ProfileContainer from "./containers/dashboard/profile/profileContainer";
import DoctorProfileContainer from "./containers/home/profile/doctorProfileContainer";
import NotificationsContainer from "./containers/dashboard/notificationsContainer";
import AppointmentsContainer from "./containers/dashboard/appointmentsContainer";
import MedicalRecordContainer from "./containers/dashboard/medicalRecordContainer";
import DoctorsContainer from './containers/home/doctorsContainer';
const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace) {
    if(!auth.loggedIn()){
        replace({
            pathname: '/app/login/',
            state: {nextPathName: '/app/'}
        })
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='app'>
                <Route component={MainLayout}>
                    <IndexRoute component={Index}/>
                    <Route path='doctors' component={DoctorsContainer}/>
                    <Route path='doctors/:id' component={DoctorProfileContainer}>
                        <Route path='timetable' component={CalendarContainer} onEnter={requireAuth}/>
                    </Route>
                    <Route path='login' component={LoginContainer}/>
                    <Route path='signup' component={SignUpContainer}/>
                </Route>
                <Route path='dashboard' component={DashboardContainer} onEnter={requireAuth}>
                    <Route path='timetable' component={TimetableContainer}/>
                    <Route path='profile' component={ProfileContainer}>
                        <Route path='edit' component={UserProfileEditContainer}/>
                    </Route>
                    <Route path='notifications' component={NotificationsContainer}/>
                    <Route path='appointment' component={AppointmentsContainer}/>
                    <Route path='medical-record' component={MedicalRecordContainer}/>
                </Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('root-container')
);
