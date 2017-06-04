/**
 * Created by faradj on 4/17/17.
 */
import React from 'react';
import Form from '../../forms/form';
import 'bootstrap-notify/bootstrap-notify.min';
import 'sweetalert/dist/sweetalert.min';
import Select from 'react-select';
require('react-select/dist/react-select.css');
import Title from './title';
import ProfileStats from './profileStats';
import InputField from './inputField';
import FormGroup from './formGroup';
import SelectField from './selectField';
import TextareaField from './textAreaField';
import RadioButtonGroup from '../../forms/radioButtonGroup';
import Education from '../../dashboard/profile/education';

require('sweetalert/dist/sweetalert.css');

export default class UserProfileEdit extends React.Component {

    componentWillMount () {
        this.props.getProfileData();
        this.props.getSpecializations();
        this.props.getHospitals();
        this.profileConstructor();
    }

    // showSuccessAlert = () => {
    //     swal('Success', 'Your profile updated perfectly!', 'success');
    // };
    //
    // showErrorAlert = () => {
    //     swal('Error', 'Your profile update failed!', 'error');
    // };
    //
    // uiLoader = (action) => {
    //     const pageLoader = jQuery('#page-loader');
    //     switch (action) {
    //         case 'show':
    //             pageLoader.show();
    //             break;
    //         case 'hide':
    //             pageLoader.hide();
    //             break;
    //     }
    // };

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
        let fullname = this.notEmpty(profileData) ? `${profileData.lastname ? profileData.lastname : ''} ${profileData.firstname ? profileData.firstname : ''} ${profileData.middlename ? profileData.middlename : ''}` : '';
        fullname = fullname.length > 2 ? fullname : 'Имя отсутствует';



        // let hospitalIds = [];
        // if (this.notEmpty(profileData)){
        //     if (profileData.education != undefined){
        //          hospitalIds = profileData.hospitals.map((hospitalObject) => {
        //             return hospitalObject.id
        //         });
        //     }
        // }

        const buttons = [{id: 'мужской', text: 'Мужской'}, {id: 'женский', text: 'Женский'}];
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
                                <a href="#tab-profile-personal"><i className="fa fa-fw fa-pencil"/> Личное</a>
                            </li>
                            <li>
                                <a href="#tab-profile-password"><i className="fa fa-fw fa-asterisk"/> Пароль</a>
                            </li>
                            <li>
                                <a href="#tab-profile-privacy"><i className="fa fa-fw fa-lock"/> Приватность</a>
                            </li>
                        </ul>
                        <div className="block-content tab-content">

                            <div className="tab-pane fade in active" id="tab-profile-personal">
                                <div className="row items-push">
                                    <div className="col-sm-6 col-sm-offset-3 form-horizontal">
                                        <div className="form-group">
                                            <div className="col-xs-6">
                                                <label>Имя пользователя</label>
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
                                                        inputPlaceholder="Введите почтовый адрес..">
                                                Почта
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
                                                        inputPlaceholder="Введите ваше имя..">
                                                Имя
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
                                                        inputPlaceholder="Введите вашу фамилию..">
                                                Фамилия
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
                                                        inputPlaceholder="Введите ваше очество..">
                                                Отчество
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
                                                        inputPlaceholder="Введите ваш адрес..">
                                                Адрес
                                            </InputField>
                                            <SelectField display={this.displayComponent('specialization')}
                                                         initialOption='Выберите специализацию...'
                                                         defaultOption={specializationId}
                                                         options={specializationOptions}
                                                         columnClassName="col-xs-6"
                                                         htmlFor="profile-specialization"
                                                         selectClassName="form-control input-lg"
                                                         onChange={this.props.changeProfileData}
                                                         selectId="profile-specialization"
                                                         selectName="specializationId">
                                                Специализация
                                            </SelectField>
                                        </FormGroup>
                                        <FormGroup>
                                            <RadioButtonGroup
                                                display={this.displayComponent('gender')}
                                                buttons={buttons}
                                                columnClassName="col-xs-12"
                                                mainLabelClassName="col-xs-12"
                                                mainLabelText="Род"
                                                name="gender"
                                                defaultValue={this.notEmpty(profileData) ? profileData.gender : ''}
                                                onChange={this.props.changeProfileData} />
                                        </FormGroup>
                                        <FormGroup>
                                            <TextareaField display={this.displayComponent('bio')}
                                                           value={this.props.profileData.bio}
                                                           columnClassName="col-xs-12" htmlFor="profile-bio"
                                                           textareaClassName="form-control input-lg"
                                                           onChange={this.props.changeProfileData}
                                                           textareaId="profile-bio"
                                                           textareaName="bio"
                                                           textareaRows="15"
                                                           textareaPlaceholder="Напишите свою биографию...">
                                                Биография
                                            </TextareaField>
                                        </FormGroup>

                                        <Education data={this.props.profileData.education}
                                                   changeData={this.props.changeEducationData}
                                                   addRow={this.props.addEducationRow}
                                                   removeRow={this.props.removeEducationRow}
                                                   display={this.displayComponent('education')} />

                                        {
                                            this.displayComponent('hospitals') ?
                                                <div>
                                                    <label htmlFor="hospitals">Больницы</label>
                                                    <FormGroup>
                                                        <Select name="hospitals"
                                                                multi={true}
                                                                value={this.props.profileData.hospitals}
                                                                options={hospitalOptions}
                                                                onChange={this.props.changeHospitalsData}
                                                                placeholder={"Выберете больницы в которых вы работаете..."}/>
                                                    </FormGroup>
                                                </div> : ''
                                        }
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
                                                Возраст
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
                                                Мобильный номер
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
                                                Опыт работы
                                            </InputField>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-content block-content-full bg-gray-lighter text-center">
                            <button className="btn btn-sm btn-primary" type="submit"><i className="fa fa-check push-5-r"/> Сохранить</button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}