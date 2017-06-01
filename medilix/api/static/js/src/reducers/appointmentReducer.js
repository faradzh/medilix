/**
 * Created by faradj on 5/13/17.
 */
const INITIAL_STATE = {appointments:[], currentAppointment:{}, showBlank: false};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_APPOINTMENTS':
            return Object.assign({}, state, {appointments: action.payload});
            break;
        
        case 'SET_CURRENT_APPOINTMENT':
            return Object.assign({}, state, {currentAppointment: action.payload});
            break;

        case 'SHOW_BLANK':
            return Object.assign({}, state, {showBlank: action.payload});
            break;
    }
    return state;
}