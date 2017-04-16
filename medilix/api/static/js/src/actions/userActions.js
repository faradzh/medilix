import fetch from 'isomorphic-fetch';

export function createUser(payload) {
    return (dispatch) => {
        fetch('/users/create-user', {
                method: 'POST',
                body: payload
           })
        .then(response => {console.log("Response", response); response.json()})
        .then(json => dispatch(resolvedCreateUser(json)))
    }
}

export function resolvedCreateUser(payload){
    return {
        type: 'CREATE_USER_FULFILLED',
        payload: payload
    }
}