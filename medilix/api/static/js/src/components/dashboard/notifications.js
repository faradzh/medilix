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


    render () {
        const rows = this.props.notifications.map((notification) => {
            return <Row id={notification.id}
                    key={notification.id}
                    fullname={`${notification.profile.lastname}
                    ${notification.profile.firstname}`}
                    complaints={notification.complaints}
                    hospital={notification.hospital}
                    date={notification.date}
                    status={notification.status}
                    onApproveClick={this.props.approveNotification}
                    onDeclineClick={this.props.declineNotification}
                    currentUserGroup={this.props.currentUserGroup}/>
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