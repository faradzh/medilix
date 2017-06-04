/**
 * Created by faradj on 5/13/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNotifications, approveNotification, declineNotification } from '../../actions/notificationActions';
import Notifications from '../../components/dashboard/notifications';

const headers = {
    doctor: [
        {id: 1, children: "Имя"},
        {id: 2, style: {width: '25%'}, children: ["Жалобы"]},
        {id: 3, style: {width: '10%'}, children: ["Визит №"]},
        {id: 4, style: {width: '15%'}, children: ["Больница"]},
        {id: 5, style: {width: '10%'}, children: ["Дата"]},
        {id: 6, style: {width: '10%'}, children: ["Статус"]},
        {id: 7, className: "text-center", style: {width: '100px'}, children: ["Действия"]}
    ],
    patient: [
        {id: 1, className: "text-center", style: {width: '120px'}, children: [<i className="si si-user"/>]},
        {id: 2, children: "Имя"},
        {id: 3, style: {width: '15%'}, children: ["Больница"]},
        {id: 4, style: {width: '10%'}, children: ["Дата"]},
        {id: 5, style: {width: '10%'}, children: ["Статус"]},
        {id: 6, className: "text-center", style: {width: '100px'}, children: ["Действия"]}
    ]
};

const mapStateToProps = (state) => {
    return {
        notifications: state.notificationReducer.notifications,
        currentUserGroup: state.userReducer.currentUser.group,
        headers: headers[state.userReducer.currentUser.group]
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchNotifications, approveNotification, declineNotification}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Notifications);