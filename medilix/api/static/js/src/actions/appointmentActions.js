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