/**
 * Created by faradj on 6/3/17.
 */
import React from 'react';
import MedicalRecordRow from './medicalRecordRow';
import MedicalRecordRowData from './medicalRecordRowData';
import Record from './record';

export default class MedicalRecord extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            openRow: false
        }
    }

    componentWillMount () {
        this.props.fetchMedicalRecords();
    }

    renderClassName = () => {
        let className = 'js-table-sections-header ';
        if (this.state.openRow){
            className += 'open';
            return className
        }
        return className;
    };

    clickHandler = () => {
        this.setState({openRow: !this.state.openRow})
    };

    render () {
        console.log("MedicalRecords", this.props.medicalRecords);
        const data = this.props.medicalRecords;
        const medicalRecordRows = [];
        const medicalRecordRowsData = [];
        data.forEach((row) => {
            medicalRecordRows.push(
                <MedicalRecordRow data={row}
                                  key={row.id}
                                  id={row.id}
                                  renderClassName={this.renderClassName}
                                  clickHandler={this.clickHandler}
                                  setRecordData={this.props.setRecordData}
                                  showRecord={this.props.showRecord}/>
            );
            medicalRecordRowsData.push(
                <MedicalRecordRowData key={row.id} data={row.examinations}/>
            )
        });
        return (
            <div className="content content-boxed">
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">Медицинская карта</h3>
                    </div>
                    <div className="block-content">
                        <table className="table table-striped table-vcenter">
                            <thead>
                                <tr>
                                    <th style={{width: '20px'}}/>
                                    <th>Ф.И. врача</th>
                                    <th style={{width: '30%'}}>Диагноз</th>
                                    <th style={{width: '15%'}}>Больница</th>
                                    <th style={{width: '15%'}}>Запись</th>
                                    <th className="hidden-xs" style={{width: '15%'}}>Дата</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medicalRecordRows}
                            </tbody>
                        </table>
                        { this.props.record ? <Record data={this.props.recordData}/> : '' }
                    </div>
                </div>
            </div>
        )
    }
}