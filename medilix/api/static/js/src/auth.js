/**
 * Created by faradj on 3/5/17.
 */
import fetch from 'isomorphic-fetch';

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

        fetch('/users/obtain-auth-token/',
            {
                method: 'POST',
                body: form
            })
            .then((response) => {
                if (response.status >= 400){
                    throw new Error('Bad response from server.');
                }
                return response.json()
            })
            .then((response) => {
                callback({
                    authenticated: true,
                    token: response.token
                })
            })
    }
};