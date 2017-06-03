/**
 * Created by faradj on 6/3/17.
 */
const INITIAL_STATE = {errors:''};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_ERRORS':
            return Object.assign({}, state, {errors: action.payload});
            break;
    }
    return state;
}
