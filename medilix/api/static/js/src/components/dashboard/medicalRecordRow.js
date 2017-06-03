/**
 * Created by faradj on 6/4/17.
 */
import React from 'react';
import { Link } from 'react-router';

export default class MedicalRecordRow extends React.Component {
    render () {
        const data = this.props.data;
        const doctorFullname = data ? data.doctorFullname : '';
        const provDiagnosis = data ? data.provDiagnosis : '';
        const hospital = data ? data.hospital : '';
        const date = data ? data.date : '';
        const doctorId = data ? data.doctorId : '';
        return (
            <tbody className={this.props.renderClassName()} onClick={this.props.clickHandler}>
                <tr>
                    <td className="text-center">
                        <i className="fa fa-angle-right"/>
                    </td>
                    <td className="font-w600">
                        <Link to={`/app/doctors/${doctorId}`}>{doctorFullname}</Link>
                    </td>
                    <td>
                        <span className="label label-primary">{provDiagnosis}</span>
                    </td>
                    <td className="hidden-xs">
                        <em className="font-w400">{hospital}</em>
                    </td>
                    <td className="hidden-xs">
                        <em className="text-muted">{date}</em>
                    </td>
                </tr>
            </tbody>
        )
    }
}