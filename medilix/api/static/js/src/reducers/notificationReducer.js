/**
 * Created by faradj on 5/13/17.
 */
import Moment from 'moment';
const INITIAL_STATE = {notification:{}, notifications:[]};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'CHANGE_NOTIFICATION_DATA':
            const name = action.payload.target.name;
            const value = action.payload.target.value;
            const updatedNotificationData = Object.assign({}, state.notification, {[name]: value});
            return Object.assign({}, state, {notification: updatedNotificationData});
            break;
        
        case 'CHANGE_DATE':
            const formattedDate = changeFormat(action.payload);
            const updatedNotification = Object.assign({}, state.notification, {date: formattedDate});
            return Object.assign({}, state, {notification: updatedNotification});
            break;

        case 'SET_NOTIFICATIONS':
            return Object.assign({}, state, {notifications: action.payload});
            break;

        case 'NOTIFICATION_APPROVED':
            const notificationId = action.payload;
            const updatedNotifications = state.notifications.filter((notification) => {
                return notification.id != notificationId
            });
            return Object.assign({}, state, {notifications: updatedNotifications});
            break;

        case 'NOTIFICATION_DECLINED':
            const id = action.payload;
            const filteredNotifications = state.notifications.filter((notification) => {
                return notification.id != id
            });
            return Object.assign({}, state, {notifications: filteredNotifications});
            break;

    }
    return state;
}

const changeFormat = (dateObject) => {
    let formattedDate = undefined;
    if (dateObject){
        const date = Moment(dateObject);
        formattedDate = date.format('YYYY-MM-DD HH:MM')
    }
    return formattedDate;
};