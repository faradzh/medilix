/**
 * Created by faradj on 5/13/17.
 */
import jQuery from 'jquery';

export function fetchAppointments(userId, userGroup) {
    return (dispatch) => {
        const url = '/users/get-appointments';
        const params = {
            user_id: userId,
            user_group: userGroup
        };
        jQuery.get(url, params, (response) => {
            dispatch(setAppointments(response))
        })
    };
}

function setAppointments(payload) {
    return {
        type: 'SET_APPOINTMENTS',
        payload: payload
    }
}

export function fetchCurrentAppointment() {
    return (dispatch, getState) => {
        const userId = getState().userReducer.currentUser.id;
        const url = '/users/get-current-appointment';
        const params = {
            doctor_id: userId
        };
        jQuery.get(url, params, (response) => {
            dispatch(setCurrentAppointment(response))
        })
    };
}

function setCurrentAppointment(payload) {
    return {
        type: 'SET_CURRENT_APPOINTMENT',
        payload: payload
    }
}

export function showBlank(payload) {
    return {
        type: 'SHOW_BLANK',
        payload: payload
    }
}