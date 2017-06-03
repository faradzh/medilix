/**
 * Created by faradj on 6/3/17.
 */

const INITIAL_STATE = {medicalRecords:[]};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_MEDICAL_RECORDS':
            return Object.assign({}, state, {medicalRecords: action.payload});
            break;
    }
    return state;
}
