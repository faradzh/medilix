/**
 * Created by faradj on 5/13/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNotifications, approveNotification, declineNotification } from '../../actions/notificationActions';
import Notifications from '../../components/dashboard/notifications';

const doctorHeaders = [
    {id: 1, className: "text-center", style: {width: '120px'}, children: [<i className="si si-user"/>]},
    {id: 2, children: "Name"},
    {id: 3, style: {width: '25%'}, children: ["Complaints"]},
    {id: 4, style: {width: '15%'}, children: ["Hospital"]},
    {id: 5, style: {width: '10%'}, children: ["Date"]},
    {id: 6, style: {width: '10%'}, children: ["Status"]},
    {id: 7, className: "text-center", style: {width: '100px'}, children:["Actions"]}
];

const mapStateToProps = (state) => {
    return {
        notifications: state.notificationReducer.notifications,
        currentUserGroup: state.userReducer.currentUser.group,
        headers: doctorHeaders
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchNotifications, approveNotification, declineNotification}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Notifications);