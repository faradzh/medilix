/**
 * Created by faradj on 5/13/17.
 */
import React from 'react';
import RowCell from './rowCell';

export default class NotificationRow extends React.Component {
    render () {
        const {
            id,
            fullname,
            complaints,
            hospital,
            date,
            status,
            currentUserGroup
        } = this.props;

        return (
            <tr>
                <RowCell className="text-center">
                    <img className="img-avatar img-avatar48" src="assets/img/avatars/avatar7.jpg" alt=""/>
                </RowCell>
                <td className="font-w600">{fullname}</td>
                {
                    currentUserGroup == 'doctor' ?
                        <td>{complaints}</td> : null
                }
                <td>{hospital}</td>
                <td>{date}</td>
                <td>
                    <span className="label label-warning">{status}</span>
                </td>
                {
                    currentUserGroup == 'doctor' ?
                    <td className="text-center">
                        <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="" data-original-title="Approve Notification"><i id={id} onClick={this.props.onApproveClick} className="fa fa-thumbs-o-up"/></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="" data-original-title="Remove Notification"><i id={id} onClick={this.props.onDeclineClick} className="fa fa-times"/></button>
                        </div>
                    </td> : null
                }
            </tr>
        )
    }
}