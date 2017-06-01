/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

require('react-big-calendar/lib/css/react-big-calendar.css');
BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
    componentWillMount () {
        const userGroup = 'doctor';
        const routerParams = this.props.params;
        if (routerParams == undefined){
            const currentUserId = this.props.currentUser.id;
            const currentUserGroup = this.props.currentUser.group;
            this.props.fetchAppointments(currentUserId, currentUserGroup);
        }
        else{
            this.props.fetchAppointments(this.props.params.id, userGroup);
        }
    }

    eventClickHandler = (date, event) => {
        console.log("Date", date.start.toString());
    };

    dateClickHandler = (info) => {
        const startDate = info.start;
        this.props.changeDate(startDate);
        $('#modal-fadein').modal('toggle');
    };

    render () {
        let events = [];
        if (this.props.appointments != undefined){
             events = this.props.appointments.map((appointment) => {
                return {
                    title: appointment.title,
                    start: new Date(appointment.dateFrom),
                    end: new Date(appointment.dateTo)
                }
            });
        }
        return <BigCalendar
            styles={{flex: '500px 0 0'}}
            events={events}
            startAccessor='start'
            endAccessor='end'
            titleAccessor='title'
            eventTimeRangeFormat=''
            onSelectEvent={this.eventClickHandler}
            selectable={true}
            onSelectSlot={this.dateClickHandler}/>
    }
}