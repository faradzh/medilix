/**
 * Created by faradj on 3/5/17.
 */
import fetch from 'isomorphic-fetch';
import { setErrors } from './actions/authActions';
import Store from './store';
const { dispatch } = Store;

module.exports = {
    login: function (username, password, callback) {
        if (localStorage.token){
            if (callback){
                callback(true);
                return;
            }
        }
        this.getToken(username, password, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token;
                localStorage.currentUser = JSON.stringify({
                    id: res.id,
                    group: res.userGroup
                });
                if (callback) callback(true)
            } else {
                if (callback) callback(false)
            }
        })
    },

    logout: function () {
        delete localStorage.token;
    },

    loggedIn: function () {
        return !!localStorage.token;
    },

    createForm: function (username, password) {
        const form = new FormData();
        form.append('username', username);
        form.append('password', password);
        return form
    },

    getToken: function (username, password, callback) {
        const form = this.createForm(username, password);

        fetch('/users/custom-auth-token/',
            {
                method: 'POST',
                body: form
            })
            .then((response) => {
                if (response.status >= 400){
                    dispatch(setErrors(response));
                    throw new Error('Bad response from server.');
                }
                return response.json()
            })
            .then((response) => {
                console.log("Response", response);
                callback({
                    authenticated: true,
                    token: response.token,
                    id: response.id,
                    userGroup: response.user_group
                })
            })
    }
};