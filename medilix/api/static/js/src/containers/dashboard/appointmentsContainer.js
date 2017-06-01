/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Appointments from '../../components/dashboard/appointments';
import { fetchCurrentAppointment, showBlank } from '../../actions/appointmentActions';

const headers = {
    doctor: [
        {id: 1, className: "text-center", style: {width: '200px'}, children: [<i className="si si-user"/>]},
        {id: 2, style: {width: '20%'}, children: "Имя"},
        {id: 3, style: {width: '10%'}, children: ["Пол"]},
        {id: 4, style: {width: '20%'}, children: ["Дата рождения"]},
        {id: 5, style: {width: '30%'}, children: ["Адрес"]},
        {id: 6, style: {width: '15%'}, children: ["Визит №"]},
        {id: 7, style: {width: '20%'}, children: ["Статус"]},
        {id: 8, className: "text-center", style: {width: '200px'}, children:["Бланк"]}
    ]
};

const mapStateToProps = (state) => {
    return {
        currentUserGroup: state.userReducer.currentUser.group,
        headers: headers[state.userReducer.currentUser.group],
        currentAppointment: state.appointmentReducer.currentAppointment,
        blank: state.appointmentReducer.showBlank
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchCurrentAppointment, showBlank}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Appointments);