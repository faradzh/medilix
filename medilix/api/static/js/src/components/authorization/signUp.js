import React from 'react';
import Form from '../forms/form';
import TextField from '../forms/textField';
import RadioButtonGroup from './../../components/forms/radioButtonGroup';
import SubmitField from '../forms/submitField';
import { check } from '../../components/validations/ruleRunner';
import FormGroup from '../../components/dashboard/profile/formGroup';

export default class SignUp extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            showErrors: false,
            validationErrors: {}
        };
        this.state.validationErrors = check(this.state, this.props.fieldValidations);
    }

    handleFieldChanged = (field) => {
        return (e) => {
            const newState = Object.assign({}, this.state, {[field]: e.target.value});
            newState.validationErrors = check(newState, this.props.fieldValidations);
            this.props.onTextChange({[field]: e.target.value});
            this.setState(newState);
        }
    };

    handleRadioButtonChanged = (field) => {
        return (e) => {
            const newState = Object.assign({}, this.state, {[field]: e.target.id});
            newState.validationErrors = check(newState, this.props.fieldValidations);
            this.props.onTextChange({[field]: e.target.id});
            this.setState(newState);
        }
    };

    handleSubmitClicked = (e) => {
        e.preventDefault();
        this.setState({showErrors: true});
        if (Object.keys(this.state.validationErrors).length != 0){
            return null;
        }
        this.props.submitForm();
    };

    errorFor = (field) => {
        return this.state.validationErrors[field];
    };

    render () {
        const buttons = [{id: 'patient', text: 'Пациент'}, {id: 'doctor', text: 'Врач'}];
        return (
            <div className="bg-white pulldown">
                <div className="content content-boxed overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                            <div className="push-30-t push-20 animated fadeIn">

                                <div className="text-center">
                                    <i className="fa fa-2x fa-medium text-primary"/>
                                    <h1 className="h3 push-10-t">Создайте аккаунт</h1>
                                </div>

                                <Form onSubmit={this.handleSubmitClicked} className="js-validation-register form-horizontal push-50-t push-50">
                                    <TextField id='register-username' type='text' placeholder='Введите имя пользователя' showError={this.state.showErrors}
                                               errorText={this.errorFor('username')} text='Имя пользователя' onFieldChanged={this.handleFieldChanged('username')}/>
                                    <TextField type='email' placeholder='Введите почтовый адрес' showError={this.state.showErrors}
                                               errorText={this.errorFor('email')} text='Почтовый адрес' onFieldChanged={this.handleFieldChanged('email')}/>
                                    <FormGroup>
                                        <RadioButtonGroup buttons={buttons} 
                                                          columnClassName="col-xs-12"
                                                          mainLabelClassName="col-xs-12"
                                                          mainLabelText="Роль"
                                                          showError={this.state.showErrors}
                                                          errorText={this.errorFor('role')} 
                                                          name="role" 
                                                          onChange={this.handleRadioButtonChanged('role')}/>
                                    </FormGroup>

                                    <TextField type='password' placeholder='Выберите надежный пароль' showError={this.state.showErrors}
                                               errorText={this.errorFor('password')} text='Пароль' onFieldChanged={this.handleFieldChanged('password')}/>
                                    <TextField type='password' placeholder='и подтвердите его' showError={this.state.showErrors}
                                               errorText={this.errorFor('password2')} text='Подтверждение пароля' onFieldChanged={this.handleFieldChanged('password2')}/>
                                    <SubmitField />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}