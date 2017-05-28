/**
 * Created by faradj on 5/13/17.
 */
const INITIAL_STATE = {appointments:[]};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_APPOINTMENTS':
            return Object.assign({}, state, {appointments: action.payload});
            break;
    }
    return state;
}