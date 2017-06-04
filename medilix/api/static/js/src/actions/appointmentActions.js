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

export function fillBlank(payload) {
    return {
        type: 'FILL_BLANK',
        payload: payload
    }
}

export function fillExamination(payload) {
    return {
        type: 'FILL_EXAMINATION',
        payload: payload
    }
}

export function addExaminationRow() {
    return {
        type: 'ADD_EXAMINATION_ROW'
    }
}

export function removeExaminationRow() {
    return {
        type: 'REMOVE_EXAMINATION_ROW'
    }
}

export function fillPrescription(payload) {
    return {
        type: 'FILL_PRESCRIPTION',
        payload: payload
    }
}

export function addPrescriptionRow() {
    return {
        type: 'ADD_PRESCRIPTION_ROW'
    }
}

export function removePrescriptionRow() {
    return {
        type: 'REMOVE_PRESCRIPTION_ROW'
    }
}

function stringifyObjects (list){
    let stringifiedList = [];
    list.forEach((exam) => {
        stringifiedList.push(JSON.stringify(exam))
    });
    return stringifiedList;
}

export function saveBlank() {
    return (dispatch, getState) => {
        const url = '/users/save-blank';
        const params = {
            blankId: getState().appointmentReducer.currentAppointment.blank.id,
            appointmentId: getState().appointmentReducer.currentAppointment.id,
            provDiagnosis: getState().appointmentReducer.currentAppointment.blank.provDiagnosis,
            'examinations[]': stringifyObjects(getState().appointmentReducer.currentAppointment.blank.analyses)
        };
        jQuery.ajax({
            type: 'POST',
            url,
            data: params,
            success: (response) => {
                console.log("Response", response);
                dispatch(showBlank(false))
            }
        })
    }
}


export function completeAppointment() {
    return (dispatch, getState) => {
        const url = '/users/complete-appointment';
        const params = {
            blankId: getState().appointmentReducer.currentAppointment.blank.id,
            appointmentId: getState().appointmentReducer.currentAppointment.id,
            finalDiagnosis: getState().appointmentReducer.currentAppointment.blank.finalDiagnosis,
            'examinations[]': stringifyObjects(getState().appointmentReducer.currentAppointment.blank.analyses),
            'prescription[]': stringifyObjects(getState().appointmentReducer.currentAppointment.blank.prescription)
        };
        jQuery.ajax({
            type: 'POST',
            url,
            data: params,
            success: (response) => {
                console.log("Response", response);
                dispatch(showBlank(false))
            }
        })
    }
}

