import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

export function createUser(payload) {
    return (dispatch) => {
        fetch('/users/create-user', {
                method: 'POST',
                body: payload
           })
        .then((response) => {
            console.log("Response", response);
            if (response.status >= 400){
                console.log("User rejected");
                dispatch(createUserRejected(response.json));
                return;
            }
            console.log("User created");
            dispatch(createUserResolved(response.json));
        })
    }
}

export function createUserResolved (payload){
    return (dispatch) => {
        dispatch(createUserFulfilled(payload));
        dispatch(push('/app/login'));
    }
}

export function createUserRejected (payload){
    return {
        type: 'CREATE_USER_REJECTED',
        payload: payload
    }
}

function createUserFulfilled (payload) {
    return {
        type: 'CREATE_USER_FULFILLED',
        payload: payload
    }
}
export function setCurrentUser (payload) {
    return {
        type: 'SET_CURRENT_USER',
        payload: payload
    }
}