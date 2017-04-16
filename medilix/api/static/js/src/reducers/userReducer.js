export default function reducer(state = {
    created: false, 
    creating: false
}, action){
    switch (action.type){
        case 'CREATE_USER':
            return Object.assign({}, state, {creating: true}, action.PAYLOAD);
            break;

        case 'CREATE_USER_FULFILLED':
            return Object.assign({}, state, {created: true}, action.PAYLOAD);
            break;

        case 'CREATE_USER_REJECTED':
            return Object.assign({}, state, {errors: action.PAYLOAD});
            break;
    }
    return state;
}