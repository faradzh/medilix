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

// export function getDoctorData(payload) {
//     return (dispatch) => {
//         const url = '/users/get-doctor-data';
//         const params = {userId: payload};
//         jQuery.get(url, params, (response) => {
//             dispatch(setDoctorData(response))
//         })
//     };
// }

function setDoctorsList(payload) {
   return {
        type: 'SET_DOCTORS_LIST',
        payload: payload
   }
}

// function setDoctorData(payload) {
//    return {
//         type: 'SET_DOCTOR_DATA',
//         payload: payload
//    }
// }

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
            data: params,
            success: (response) => {
            // console.log("Response", response)
            }
        })
    };
}

export function getPermissionForFeedback(doctorId) {
    return (dispatch, getState) => {
        const userId = JSON.parse(localStorage.currentUser).id;
        const url = '/users/get-permission-for-feedback';
        const params = {
            userId: userId,
            doctorId: doctorId
        };
        jQuery.ajax({
            url,
            type: 'GET',
            data: params,
            success: (response) => {
                dispatch(setFeedbackPermission(response));
            }
        })
    }
}

function setFeedbackPermission(payload) {
    return {
        type: 'SET_FEEDBACK_PERMISSION',
        payload: payload
    }
}