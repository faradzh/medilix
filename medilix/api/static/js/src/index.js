/**
 * Created by faradj on 3/5/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import App from './app';
import Doctors from './components/doctors/doctors';
import Home from './components/home/home';
import MainLayout from './components/main-layout';
import store from "./store";
import auth from "./auth";
import Login from "./login";
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
            <Route path='/app' component={App} onEnter={requireAuth}>
                <Route component={MainLayout}>
                    <IndexRoute component={Home}/>
                    <Route path='doctors' component={Doctors}/>
                </Route>
            </Route>
            <Route path='/app/login' component={Login}/>
        </Router>
    </Provider>, document.getElementById("root-container")
);
