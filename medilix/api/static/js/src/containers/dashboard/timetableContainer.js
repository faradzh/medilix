/**
 * Created by faradj on 4/19/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timetable from '../../components/dashboard/timetable';
import Calendar from '../../components/dashboard/calendar';
import EventsContainer from '../../containers/dashboard/eventsContainer';
import ModalWindow from '../../components/common/modalWindow';
import { toggleModalWindow } from '../../actions/calendarActions';
import { fetchAppointments } from '../../actions/appointmentActions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.currentUser,
        appointments: state.appointmentReducer.appointments
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchAppointments}, dispatch)
};

class TimetableContainer extends React.Component {
    
    render () {
        return <Timetable>
                <EventsContainer />
                <Calendar appointments={this.props.appointments}
                          fetchAppointments={this.props.fetchAppointments}
                          currentUser={this.props.currentUser}/>
                <ModalWindow />
            </Timetable>
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(TimetableContainer);