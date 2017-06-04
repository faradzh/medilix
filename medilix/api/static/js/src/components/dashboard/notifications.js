/**
 * Created by faradj on 5/13/17.
 */
import React from 'react';
import Header from '../tables/header';
import Row from '../tables/row';
import Table from '../tables/table';

export default class Notifications extends React.Component {
    componentWillMount () {
        this.props.fetchNotifications()
    }

    generateCells = (row) => {
         const cells = {
             doctor: {
                 fullname: {label: `${row.profile.lastname} ${row.profile.firstname}`, className: 'font-w600' },
                 complaints: {label: row.complaints, className: ''},
                 visitNumber: {label: row.visitNumber, className: ''},
                 hospital: {label: row.hospital, className: ''},
                 date: {label: row.date, className: ''},
                 status: {label: row.status, className: ''},
                 actions: {label: [
                     {
                         handler: this.props.approveNotification,
                         icon: 'fa fa-thumbs-o-up',
                         label: 'Approve Notification'
                     },
                     {
                         handler: this.props.declineNotification,
                         icon: 'fa fa-times',
                         label: 'Decline Notification'
                     }
                 ], className: 'text-center'}
             },
             patient: {
                 fullname: {label: `${row.profile.lastname} ${row.profile.firstname}`, className: 'font-w600' },
                 hospital: {label: row.hospital, className: ''},
                 date: {label: row.date, className: ''},
                 status: {label: row.status, className: ''},
                 actions: {label: [
                     {
                         handler: '',
                         icon: 'fa fa-remove',
                         label: 'Delete Notification'
                     }
                 ], className: 'text-center'}
             }
         };
        return cells[this.props.currentUserGroup];
    };

    render () {
        const rows = this.props.notifications.map((notification) => {
            const cells = this.generateCells(notification);
            return <Row key={notification.id}
                        cells={cells}
                        id={notification.id}
                        currentUserGroup={this.props.currentUserGroup} />
        });
        return (
            <div className="content">
                <div className="block-content">
                    <Table header={<Header headers={this.props.headers}/>}>
                        {rows}
                    </Table>
                </div>
            </div>
        )
    }
}