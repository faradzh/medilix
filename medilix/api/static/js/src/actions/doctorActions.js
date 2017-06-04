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
        const userId = JSON.parse(localStorage.currentUser).id;
        const userGroup = JSON.parse(localStorage.currentUser).group;
        const url = '/users/submit-feedback';
        const params = {
            doctorId: payload.id,
            content: feedback.content,
            qualification: feedback.qualification,
            attentiveness: feedback.attentiveness,
            qualityToPrice: feedback.qualityToPrice,
            recommendation: feedback.recommendation,
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

export function fetchFeedbacks(doctorId) {
    return (dispatch, getState) => {
        const currentUserId = JSON.parse(localStorage.currentUser).id;
        const url = '/users/get-feedbacks';
        let user_id;
        if (doctorId){
            user_id = doctorId;
        }
        else{
            user_id = currentUserId;
        }
        const params = {
            user_id: user_id
        };
        jQuery.ajax({
            url,
            type: 'GET',
            data: params,
            success: (response) => {
                dispatch(setFeedbacks(response));
            }
        })
    }
}

function setFeedbacks(payload) {
    return {
        type: 'SET_FEEDBACKS',
        payload: payload
    }
}