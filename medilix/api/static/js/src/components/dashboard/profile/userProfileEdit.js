/**
 * Created by faradj on 4/17/17.
 */
import React from 'react';
import Form from '../../forms/form';
import jQuery from 'jquery';
import 'select2/dist/js/select2.min.js';
import 'bootstrap-notify/bootstrap-notify.min';
import 'sweetalert/dist/sweetalert.min';
import EducationRow from './educationRow';
import Title from './title';
import ProfileStats from './profileStats';
import InputField from './inputField';
import FormGroup from './formGroup';
import SelectField from './selectField';
import TextareaField from './textAreaField';
import RadioButtonGroup from '../../forms/radioButtonGroup';

require('sweetalert/dist/sweetalert.css');

export default class UserProfileEdit extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            numOfEducationRows: 1,
            removeBtnShow: false
        }
    }

    componentWillMount () {
        this.props.getProfileData();
        this.props.getSpecializations();
        this.props.getHospitals();
        this.profileConstructor();
    }

    componentDidMount () {
        jQuery('#hospitals').select2();
        jQuery.fn.select2.defaults.set("1", "URFA");
    }


    componentDidUpdate () {
        // const userProfileCreated = this.props.profileStatus.created;
        // const userProfileRejected = this.props.profileStatus.rejected;
        //
        // if (userProfileCreated) {
        //     return this.showSuccessAlert();
        //
        // }
        // if (userProfileRejected) {
        //     return this.showErrorAlert();
        //
        // }
    }

    showSuccessAlert = () => {
        swal('Success', 'Your profile updated perfectly!', 'success');
    };

    showErrorAlert = () => {
        swal('Error', 'Your profile update failed!', 'error');
    };

    uiLoader = (action) => {
        const pageLoader = jQuery('#page-loader');
        switch (action) {
            case 'show':
                pageLoader.show();
                break;
            case 'hide':
                pageLoader.hide();
                break;
        }
    };

    profileConstructor = () => {
        const componentsToRender = {
            doctor: ['infobox', 'email', 'username', 'firstname', 'lastname', 'middlename', 'specialization', 'gender',
                'bio', 'education', 'hospitals', 'age', 'phoneNumber', 'experience'],
            patient: ['username', 'email', 'firstname', 'lastname', 'middlename', 'address', 'gender', 'age', 'phoneNumber']
        };
        const currentUserGroup = this.props.currentUserGroup;
        this.setState({componentsToRender: componentsToRender[currentUserGroup]});
    };

    displayComponent = (name) => {
        const components = this.state.componentsToRender;
        return components.indexOf(name) != -1;
    };

    notEmpty = (object) => {
        return Object.keys(object).length != 0
    };

    render () {
        const specializationOptions = this.props.specializations;
        const hospitalOptions = this.props.hospitals;
        const profileData = this.props.profileData;
        const specializationId = this.notEmpty(profileData) ? profileData.specializationId : '';
        const specializationName = this.notEmpty(profileData) ? profileData.specializationName : '';
        const fullname = this.notEmpty(profileData) ? `${profileData.lastname} ${profileData.firstname} ${profileData.middlename}` : '';

        let educationRows = [];
        let educationObjectsLength = 0;
        const educationObjects = this.notEmpty(profileData) ? profileData.education : [];

        let hospitalIds = [];
        if (this.notEmpty(profileData)){
            if (profileData.education != undefined){
                 hospitalIds = profileData.hospitals.map((hospitalObject) => {
                    return hospitalObject.id
                });
            }
        }

        if (educationObjects){
            for (var i=0; i<educationObjects.length; i++){
                let educationObject = educationObjects[i];
                educationRows.push(<EducationRow id={this.notEmpty(profileData) ? educationObject.id : ''}
                                                 changeEducationData={this.props.changeEducationData}
                                                 data={this.notEmpty(profileData) ? educationObject : ''}
                                                 key={i}
                                                 display={this.displayComponent('education')}/>);
            }
            educationObjectsLength = educationObjects.length;
        }
        const buttons = [{id: 'male', text: 'Male'}, {id: 'female', text: 'Female'}];
        console.log("ProfileData", profileData);
        return (
            <div className="content content-boxed">
                <div className="block">
                    <Title fullname={fullname} specialization={specializationName} />
                    <ProfileStats display={this.displayComponent('infobox')}
                             recommendedNumber="20000"
                             experienceNumber={this.props.profileData.experience}
                             patientsNumber="120"
                             ratingNumber="3500" />
                </div>

                <Form onSubmit={this.props.submitProfileData}>
                    <div className="block">
                        <ul className="nav nav-tabs nav-justified push-20" data-toggle="tabs">
                            <li className="active">
                                <a href="#tab-profile-personal"><i className="fa fa-fw fa-pencil"/> Personal</a>
                            </li>
                            <li>
                                <a href="#tab-profile-password"><i className="fa fa-fw fa-asterisk"/> Password</a>
                            </li>
                            <li>
                                <a href="#tab-profile-privacy"><i className="fa fa-fw fa-lock"/> Privacy</a>
                            </li>
                        </ul>
                        <div className="block-content tab-content">

                            <div className="tab-pane fade in active" id="tab-profile-personal">
                                <div className="row items-push">
                                    <div className="col-sm-6 col-sm-offset-3 form-horizontal">
                                        <div className="form-group">
                                            <div className="col-xs-6">
                                                <label>Username</label>
                                                <div className="form-control-static font-w700">{this.props.profileData.username}</div>
                                            </div>
                                        </div>
                                        <FormGroup>
                                            <InputField display={this.displayComponent('email')}
                                                        value={this.props.profileData.email}
                                                        columnClassName="col-xs-12"
                                                        htmlFor="profile-email"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-email"
                                                        inputName="email"
                                                        inputPlaceholder="Enter your email..">
                                                Email
                                            </InputField>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputField display={this.displayComponent('firstname')}
                                                        value={this.props.profileData.firstname}
                                                        columnClassName="col-xs-6"
                                                        htmlFor="profile-firstname"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-firstname"
                                                        inputName="firstname"
                                                        inputPlaceholder="Enter your firstname..">
                                                Firstname
                                            </InputField>
                                            <InputField display={this.displayComponent('lastname')}
                                                        value={this.props.profileData.lastname}
                                                        columnClassName="col-xs-6"
                                                        htmlFor="profile-lastname"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-lastname"
                                                        inputName="lastname"
                                                        inputPlaceholder="Enter your lastname..">
                                                Lastname
                                            </InputField>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputField display={this.displayComponent('middlename')}
                                                        value={this.props.profileData.middlename}
                                                        columnClassName="col-xs-6"
                                                        htmlFor="profile-middlename"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-middlename"
                                                        inputName="middlename"
                                                        inputPlaceholder="Enter your middlename..">
                                                Middlename
                                            </InputField>
                                            <InputField display={this.displayComponent('address')}
                                                        value={this.props.profileData.address}
                                                        columnClassName="col-xs-6"
                                                        htmlFor="profile-address"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-address"
                                                        inputName="address"
                                                        inputPlaceholder="Enter your address..">
                                                Address
                                            </InputField>
                                            <SelectField display={this.displayComponent('specialization')}
                                                         initialOption='Choose specialization...'
                                                         defaultOption={specializationId}
                                                         options={specializationOptions}
                                                         columnClassName="col-xs-6"
                                                         htmlFor="profile-specialization"
                                                         selectClassName="form-control input-lg"
                                                         onChange={this.props.changeProfileData}
                                                         selectId="profile-specialization"
                                                         selectName="specialization_id">
                                                Specialization
                                            </SelectField>
                                        </FormGroup>
                                        <FormGroup>
                                            <RadioButtonGroup
                                                display={this.displayComponent('gender')}
                                                buttons={buttons}
                                                columnClassName="col-xs-12"
                                                mainLabelClassName="col-xs-12"
                                                mainLabelText="Gender"
                                                name="gender"
                                                defaultValue={this.notEmpty(profileData) ? profileData.gender : ''}
                                                onChange={this.props.changeProfileData} />
                                        </FormGroup>
                                        <FormGroup>
                                            <TextareaField display={this.displayComponent('bio')}
                                                           value={this.props.profileData.bio}
                                                           columnNameClass="col-xs-12" htmlFor="profile-bio"
                                                           textareaClassName="form-control input-lg"
                                                           onChange={this.props.changeProfileData}
                                                           textareaId="profile-bio"
                                                           textareaName="bio"
                                                           textareaRows="15"
                                                           textareaPlaceholder="Enter a bit about yourself...">
                                                Bio
                                            </TextareaField>
                                        </FormGroup>
                                        {educationRows}
                                        {educationObjects ?
                                            <div id="edu-buttons">
                                                {
                                                    educationObjectsLength > 1 ? <button onClick={this.props.removeEducationRow} className="btn btn-danger push-5-r push-5" type="button">
                                                        <i className="fa fa-times"/> Delete
                                                    </button> : null
                                                }
                                                <button onClick={this.props.addEducationRow} className="btn btn-success push-5-r push-5" type="button">
                                                        <i className="fa fa-plus"/> Add
                                                </button>
                                            </div> : ''
                                        }
                                        <FormGroup>
                                            <SelectField display={this.displayComponent('hospitals')}
                                                         defaultOption={hospitalIds}
                                                         options={hospitalOptions}
                                                         columnClassName="col-xs-12"
                                                         selectClassName="js-select2 form-control select2-hidden-accessible"
                                                         htmlFor="profile-hospitals"
                                                         selectId="hospitals"
                                                         selectName="hospitals"
                                                         style={{width: 100 + '%'}}
                                                         dataPlaceholder="Choose hospitals.."
                                                         multiple="multiple" tabIndex="-1" ariaHidden="true">
                                                Hospitals in which you work:
                                            </SelectField>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputField display={this.displayComponent('age')}
                                                        value={this.props.profileData.age}
                                                        columnClassName="col-sm-3"
                                                        htmlFor="profile-age"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-age"
                                                        inputName="age"
                                                        inputPlaceholder="32">
                                                Age
                                            </InputField>
                                            <InputField display={this.displayComponent('phoneNumber')}
                                                        value={this.props.profileData.phoneNumber}
                                                        columnClassName="col-sm-6"
                                                        htmlFor="profile-phone"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-phone"
                                                        inputName="phoneNumber"
                                                        inputPlaceholder="0777 399933">
                                                Phone Number
                                            </InputField>
                                            <InputField display={this.displayComponent('experience')}
                                                        value={this.props.profileData.experience}
                                                        columnClassName="col-sm-3"
                                                        htmlFor="profile-experience"
                                                        inputClassName="form-control input-lg"
                                                        inputType="text"
                                                        onChange={this.props.changeProfileData}
                                                        inputId="profile-experience"
                                                        inputName="experience"
                                                        inputPlaceholder="years">
                                                Experience
                                            </InputField>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tab-profile-password">
                                <div className="row items-push">
                                    <div className="col-sm-6 col-sm-offset-3 form-horizontal">
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <label htmlFor="profile-password">Current Password</label>
                                                <input className="form-control input-lg" type="password" id="profile-password" name="profile-password"/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <label htmlFor="profile-password-new">New Password</label>
                                                <input className="form-control input-lg" type="password" id="profile-password-new" name="profile-password-new"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <label htmlFor="profile-password-new-confirm">Confirm New Password</label>
                                                <input className="form-control input-lg" type="password" id="profile-password-new-confirm" name="profile-password-new-confirm"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="tab-pane fade" id="tab-profile-privacy">
                                <div className="row items-push">
                                    <div className="col-sm-6 col-sm-offset-3 form-horizontal">
                                        <div className="form-group">
                                            <div className="col-xs-8">
                                                <div className="font-s13 font-w600">Online Status</div>
                                                <div className="font-s13 font-w400 text-muted">Show your status to all</div>
                                            </div>
                                            <div className="col-xs-4 text-right">
                                                <label className="css-input switch switch-sm switch-primary push-10-t">
                                                    <input type="checkbox"/><span/>
                                                </label>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="form-group">
                                            <div className="col-xs-8">
                                                <div className="font-s13 font-w600">Auto Updates</div>
                                                <div className="font-s13 font-w400 text-muted">Keep up to date</div>
                                            </div>
                                            <div className="col-xs-4 text-right">
                                                <label className="css-input switch switch-sm switch-primary push-10-t">
                                                    <input type="checkbox"/><span/>
                                                </label>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="form-group">
                                            <div className="col-xs-8">
                                                <div className="font-s13 font-w600">Notifications</div>
                                                <div className="font-s13 font-w400 text-muted">Do you need them?</div>
                                            </div>
                                            <div className="col-xs-4 text-right">
                                                <label className="css-input switch switch-sm switch-primary push-10-t">
                                                    <input type="checkbox" defaultChecked/><span/>
                                                </label>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="form-group">
                                            <div className="col-sm-8">
                                                <div className="font-s13 font-w600">API Access</div>
                                                <div className="font-s13 font-w400 text-muted">Enable/Disable access</div>
                                            </div>
                                            <div className="col-sm-4 text-right">
                                                <label className="css-input switch switch-sm switch-primary push-10-t">
                                                    <input type="checkbox" defaultChecked/><span/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-content block-content-full bg-gray-lighter text-center">
                            <button className="btn btn-sm btn-primary" type="submit"><i className="fa fa-check push-5-r"/> Save Changes</button>
                            <button className="btn btn-sm btn-warning" onClick={this.props.resetProfileData} type="reset"><i className="fa fa-refresh push-5-r"/> Reset</button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}