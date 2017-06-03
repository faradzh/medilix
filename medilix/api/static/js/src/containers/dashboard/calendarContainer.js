/**
 * Created by faradj on 4/19/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Calendar from '../../components/dashboard/calendar';
import ModalWindow from '../../components/common/modalWindow';
import TextareaField from '../../components/dashboard/profile/textAreaField';
import FormGroup from '../../components/dashboard/profile/formGroup';
import SelectField from '../../components/dashboard/profile/selectField';
import CheckboxField from '../../components/dashboard/profile/checkboxField';
import { changeNotificationData, createNotification, changeDate } from '../../actions/notificationActions';
import { fetchAppointments } from '../../actions/appointmentActions';

const mapStateToProps = (state) => {
    return {
        hospitals: state.profileReducer.profileData.hospitals,
        appointments: state.appointmentReducer.appointments
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeNotificationData,
        createNotification,
        changeDate,
        fetchAppointments
    }, dispatch)
};

class CalendarContainer extends React.Component {

    render () {
        const buttons = [
            <button key='1' className="btn btn-sm btn-primary" onClick={this.props.createNotification} type="button" data-dismiss="modal"><i className="fa fa-check"/> Submit</button>
        ];
        const hospitalOptions = [];
        if (this.props.hospitals){
            this.props.hospitals.forEach((hospital) => {
                hospitalOptions.push({id: hospital.value, name: hospital.label});
            });
        }
        console.log("Hospitals", hospitalOptions);
        return (
            <div>
                <div className="bg-primary-dark">
                    <section className="content content-full content-boxed">
                    </section>
                </div>
                <div className="content bg-white">
                    <div className="row items-push">

                        <div className="col-md-10 col-md-offset-1 col-lg-offset-1 col-lg-10">
                            <Calendar fetchAppointments={this.props.fetchAppointments}
                                      appointments={this.props.appointments}
                                      changeDate={this.props.changeDate}
                                      params={this.props.params} />
                            <ModalWindow header="Enter your data:" buttons={buttons}>
                                <div className="row">
                                    <FormGroup>
                                        <TextareaField onChange={this.props.changeNotificationData} display={true} columnNameClass="col-xs-12" htmlFor="complaints"
                                                       textareaClassName="form-control input-lg" textareaId="complaints"
                                                       textareaName="complaints" textareaRows="8" textareaPlaceholder="Enter your complaints...">
                                            Complaints
                                        </TextareaField>
                                    </FormGroup>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <FormGroup>
                                            <SelectField onChange={this.props.changeNotificationData} display={true} options={hospitalOptions} columnClassName="col-xs-12" selectClassName="form-control"
                                            htmlFor="appointment-hospital" selectId="appointment-hospital" selectName="hospital" style={{width: 100 + '%'}}
                                                         dataPlaceholder="Choose hospital.." tabIndex="-1" ariaHidden="true" initialOption="Select hospital...">
                                                Hospital
                                            </SelectField>
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-6">
                                        <FormGroup>
                                            <CheckboxField columnClassName="col-xs-6" className="css-input css-checkbox css-checkbox-primary">
                                                Repeat visit?
                                            </CheckboxField>
                                        </FormGroup>
                                    </div>
                                </div>
                            </ModalWindow>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(CalendarContainer);