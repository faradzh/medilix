/**
 * Created by faradj on 6/3/17.
 */
import jQuery from 'jquery';

export function fetchMedicalRecords() {
    return (dispatch, getState) => {
        const userId = getState().userReducer.currentUser.id;
        const url = '/users/get-medical-records';
        const params = {
            user_id: userId
        };
        jQuery.get(url, params, (response) => {
            dispatch(setMedicalRecords(response))
        })
    };
}

function setMedicalRecords(payload) {
    return {
        type: 'SET_MEDICAL_RECORDS',
        payload: payload
    }
}