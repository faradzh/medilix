/**
 * Created by faradj on 6/4/17.
 */
import React from 'react';
import { Link } from 'react-router';

export default class MedicalRecordRow extends React.Component {
    setId = () => {
        this.props.setRecordData(this.props.id);
        this.props.showRecord()
    };

    render () {
        const data = this.props.data;
        const doctorFullname = data ? data.doctorFullname : '';
        const provDiagnosis = data ? data.provDiagnosis : '';
        const hospital = data ? data.hospital : '';
        const date = data ? data.date : '';
        const doctorId = data ? data.doctorId : '';

        return (
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
                    <a href="javascript:void(0)">
                        <i style={{fontSize: '30px'}} onClick={this.setId} className="fa fa-file-text-o text-primary"/>
                    </a>
                </td>
                <td className="hidden-xs">
                    <em className="text-muted">{date}</em>
                </td>
            </tr>
        )
    }
}