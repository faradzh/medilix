export default function reducer(state = {
    created: false, 
    creating: false
}, action){
    switch (action.type){
        case 'CREATE_USER':
            return Object.assign({}, state, {creating: true}, action.payload);
            break;

        case 'CREATE_USER_FULFILLED':
            return Object.assign({}, state, {created: true}, action.payload);
            break;

        case 'CREATE_USER_REJECTED':
            return Object.assign({}, state, {errors: action.payload});
            break;

        case 'SET_CURRENT_USER':
            return Object.assign({}, state, {currentUser: action.payload});
            break;
    }
    return state;
}