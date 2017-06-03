/**
 * Created by faradj on 6/4/17.
 */
import React from 'react';
import DropdownData from './dropdownData';

export default class MedicalRecordRowData extends React.Component {
    render () {
        const examinations = this.props.data;
        const objects = [];
        examinations.forEach((exam) => {
            objects.push(<DropdownData key={exam.id} data={exam}/>)
        });
        return (
            <tbody>
                {objects}
            </tbody>
        )
    }
}