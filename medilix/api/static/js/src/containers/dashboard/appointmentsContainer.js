/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Appointments from '../../components/dashboard/appointments';

const headers = [
    {id: 1, className: "text-center", style: {width: '200px'}, children: [<i className="si si-user"/>]},
    {id: 2, children: "Name"},
    {id: 3, style: {width: '40%'}, children: ["Address"]},
    {id: 5, style: {width: '25%'}, children: ["Date"]},
    {id: 6, style: {width: '25%'}, children: ["Appointment #"]},
    {id: 7, className: "text-center", style: {width: '200px'}, children:["Blank"]}
];

const mapStateToProps = (state) => {
    return {
        currentUserGroup: state.userReducer.currentUser.group,
        headers: headers
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Appointments);