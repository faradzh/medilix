/**
 * Created by faradj on 5/13/17.
 */
import fetch from 'isomorphic-fetch';
import jQuery from 'jquery';

export function createNotification() {
    return (dispatch, getState) => {
        const currentUserId = getState().userReducer.currentUser.id;
        const doctorId = getState().routing.locationBeforeTransitions.pathname.split('/')[3];
        const {
            complaints,
            date,
            status,
            hospital
        } = getState().notificationReducer.notification;

        const form = new FormData();
        form.append('complaints', complaints);
        form.append('date', date);
        form.append('status', status);
        form.append('hospital_id', hospital);
        form.append('doctor_id', doctorId);
        form.append('patient_id', currentUserId);

        fetch('/users/create-notification', {
                method: 'POST',
                body: form
        })
        .then((response) => {
            if (response.status == 201){
            }
        })
    }
}

export function changeNotificationData(payload) {
    return {
        type: 'CHANGE_NOTIFICATION_DATA',
        payload: payload
    }
}

export function fetchNotifications() {
    return (dispatch, getState) => {
        const userId = getState().userReducer.currentUser.id;
        const userGroup = getState().userReducer.currentUser.group;
        const url = '/users/get-notifications';
        const params = {
            user_id: userId,
            user_group: userGroup
        };
        jQuery.get(url, params, (response) => {
            dispatch(setNotifications(response))
        })
    };
}

export function approveNotification(e) {
    const id = e.target.id;
    return (dispatch) => {
        const url = '/users/approve-notification';
        const params = {notification_id: id};
        jQuery.get(url, params, (response) => {
            dispatch(notificationApproved(response))
        })
    };
}

function notificationApproved (payload) {
    return {
        type: 'NOTIFICATION_APPROVED',
        payload: payload
    }
}

export function declineNotification(e) {
    const id = e.target.id;
    return (dispatch) => {
        const url = '/users/decline-notification';
        const params = {notification_id: id};
        jQuery.get(url, params, (response) => {
            dispatch(notificationDeclined(response))
        })
    };
}

function notificationDeclined (payload) {
    return {
        type: 'NOTIFICATION_DECLINED',
        payload: payload
    }
}

function setNotifications(payload) {
    return {
        type: 'SET_NOTIFICATIONS',
        payload: payload
    }
}

export function changeDate(payload) {
    return {
        type: 'CHANGE_DATE',
        payload: payload
    }
}