/**
 * Created by faradj on 5/12/17.
 */
import jQuery from 'jquery';

export function getDoctorsList() {
    return (dispatch) => {
        const url = '/users/get-doctors';
        jQuery.get(url, (response) => {
            dispatch(setDoctorsList(response))
        })
    };
}

export function getDoctorData(payload) {
    return (dispatch) => {
        const url = '/users/get-doctor-data';
        const params = {userId: payload};
        jQuery.get(url, params, (response) => {
            dispatch(setDoctorData(response))
        })
    };
}

function setDoctorsList(payload) {
   return {
        type: 'SET_DOCTORS_LIST',
        payload: payload
   }
}

function setDoctorData(payload) {
   return {
        type: 'SET_DOCTOR_DATA',
        payload: payload
   }
}

export function setFeedback(payload) {
   return {
        type: 'SET_FEEDBACK',
        payload: payload
   }
}

export function submitFeedback(payload) {
    return (dispatch, getState) => {
        const feedback = getState().doctorReducer.feedback;
        const userId = getState().userReducer.currentUser.id;
        const userGroup = getState().userReducer.currentUser.group;
        const url = '/users/submit-feedback';
        const params = {
            doctorId: payload.id,
            feedback: feedback,
            userId: userId,
            userGroup: userGroup
        };
        jQuery.ajax({
            url,
            type: 'POST',
            data: params
        }, (response) => {
            console.log("Response", response)
        })
    };
}