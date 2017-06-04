/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';
import Table from '../tables/table';
import Header from '../tables/header';
import RowCell from '../tables/rowCell';
import Blank from '../../components/dashboard/blank';
const profileImageSrc = require('../../../../images/dashboard/profile/avatar.png');
const path = '/static/js/dist/';

export default class Appointments extends React.Component {
    componentWillMount () {
        this.props.fetchCurrentAppointment();
    }

    render () {
        const currentAppointment = this.props.currentAppointment;
        const blank = currentAppointment.blank;
        const headers = this.props.headers;
        console.log("CurrentAppointment", currentAppointment);
        return (
            <div className="content">
                <div className="block-content">
                    <Table header={<Header headers={headers}/>}>
                        {Object.keys(currentAppointment).length > 0 ?
                            <tr>
                                <RowCell class="text-center">
                                    <img className="img-avatar img-avatar48" src={path + profileImageSrc} alt=""/>
                                </RowCell>
                                <RowCell class="">
                                    {currentAppointment.fullname}
                                </RowCell>
                                <RowCell class="">
                                    {currentAppointment.gender}
                                </RowCell>
                                <RowCell class="">
                                    {currentAppointment.age}
                                </RowCell>
                                <RowCell class="">
                                    {currentAppointment.address}
                                </RowCell>
                                <RowCell class="">
                                    {currentAppointment.visitNumber}
                                </RowCell>
                                <RowCell class="">
                                    <span className="label label-warning">{currentAppointment.status}</span>
                                </RowCell>
                                <RowCell class="text-center">
                                    <a href="javascript:void(0)">
                                        <i style={{fontSize: '30px'}} onClick={this.props.showBlank} className="fa fa-file-text-o text-primary"/>
                                    </a>
                                </RowCell>
                            </tr> : 'На данное время записи на прием отсутствуют..'
                        }
                    </Table>
                </div>
                <div className="block-content">
                    { this.props.blank ? <Blank
                        fill={this.props.fillBlank}
                        data={blank}
                        fillExamination={this.props.fillExamination}
                        addExaminationRow={this.props.addExaminationRow}
                        removeExaminationRow={this.props.removeExaminationRow}
                        fillPrescription={this.props.fillPrescription}
                        addPrescriptionRow={this.props.addPrescriptionRow}
                        removePrescriptionRow={this.props.removePrescriptionRow}
                        save={this.props.saveBlank}
                        complete={this.props.completeAppointment}/> : null }
                </div>
            </div>
        )
    }
}