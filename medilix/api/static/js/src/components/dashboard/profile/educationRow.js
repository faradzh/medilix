/**
 * Created by faradj on 4/30/17.
 */
import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputField from '../../dashboard/profile/inputField';

require('react-datepicker/dist/react-datepicker.css');

export default class EducationRow extends React.Component {

    handleTextChange = (e) => {
        const educationObj = {
            id: this.props.id,
            name: e.target.name,
            value: e.target.value
        };
        this.props.changeData(educationObj)
    };

    handleStartDateChange = (date) => {
        const formattedDate = date.format('DD/MM/YYYY');
        const educationObj = {
            id: this.props.id,
            name: 'dateFrom',
            value: formattedDate
        };
        this.props.changeData(educationObj)
    };

    handleEndDateChange = (date) => {
        const formattedDate = date.format('DD/MM/YYYY');
        const educationObj = {
            id: this.props.id,
            name: 'dateTo',
            value: formattedDate
        };
        this.props.changeData(educationObj)
    };

    render () {
        const education = this.props.data;
        return this.props.display ? (
            <div className="form-group">
                <div className="col-xs-8">
                    <label htmlFor="education-datarange">Education</label>
                    <div className="input-daterange input-group" data-date-format="mm/dd/yyyy">
                        <DatePicker className="form-control"
                                    showYearDropdown
                                    showMonthDropdown
                                    name="dateFrom"
                                    placeholderText="From"
                                    selectsStart
                                    fixedHeight
                                    value={education.dateFrom}
                                    onChange={this.handleStartDateChange} />
                        <span className="input-group-addon"><i className="fa fa-chevron-right"/></span>
                        <DatePicker className="form-control"
                                    showYearDropdown
                                    showMonthDropdown
                                    name="dateTo"
                                    placeholderText="To"
                                    selectsEnd
                                    value={education.dateTo}
                                    onChange={this.handleEndDateChange} />
                    </div>
                </div>
                <InputField columnClassName="col-xs-4"
                            onChange={this.handleTextChange}
                            htmlFor="education-entity"
                            inputId="education-entity"
                            inputName="entity"
                            inputPlaceholder="University"
                            inputClassName="form-control"
                            value={education ? education.entity : ''}>
                    Entity
                </InputField>
                <InputField columnClassName="col-xs-12"
                            onChange={this.handleTextChange}
                            htmlFor="education-address"
                            inputId="education-address"
                            inputName="address"
                            inputPlaceholder="Address"
                            inputClassName="form-control"
                            value={education ? education.address : ''}>
                    Address
                </InputField>
            </div>
        ) : null;
    }
}