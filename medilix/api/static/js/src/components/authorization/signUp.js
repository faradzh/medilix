import React from 'react';
import Form from '../forms/form';
import TextField from '../forms/textField';
import SubmitField from '../forms/submitField';
import { ruleRunner, check } from '../validations/ruleRunner';
import { required, minLength, mustMatch } from '../validations/rules';

const fieldValidations = [
    ruleRunner('username', 'Username', required),
    ruleRunner('email', 'Email', required),
    ruleRunner('password', 'Password', required, minLength(6)),
    ruleRunner('password2', 'Password confirm', required, minLength(6), mustMatch('password', 'Password'))
];
export default class SignUp extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            showErrors: false,
            validationErrors: {}
        };
        this.state.validationErrors = check(this.state, fieldValidations);
    }

    handleFieldChanged = (field) => {
        return (e) => {
            const newState = Object.assign({}, this.state, {[field]: e.target.value});
            newState.validationErrors = check(newState, fieldValidations);
            this.props.onTextChange({[field]: e.target.value});
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
        return (
            <div className="bg-white pulldown">
                <div className="content content-boxed overflow-hidden">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                            <div className="push-30-t push-20 animated fadeIn">

                                <div className="text-center">
                                    <i className="fa fa-2x fa-circle-o-notch text-primary"/>
                                    <h1 className="h3 push-10-t">Create Account</h1>
                                </div>

                                <Form onSubmit={this.handleSubmitClicked} className="js-validation-register form-horizontal push-50-t push-50">
                                    <TextField type='text' placeholder='Please enter a username' showError={this.state.showErrors}
                                               errorText={this.errorFor('username')} text='Username' onFieldChanged={this.handleFieldChanged('username')}/>
                                    <TextField type='email' placeholder='Please enter an email' showError={this.state.showErrors}
                                               errorText={this.errorFor('email')} text='Email' onFieldChanged={this.handleFieldChanged('email')}/>
                                    <TextField type='password' placeholder='Choose a strong password' showError={this.state.showErrors}
                                               errorText={this.errorFor('password')} text='Password' onFieldChanged={this.handleFieldChanged('password')}/>
                                    <TextField type='password' placeholder='and confirm it' showError={this.state.showErrors}
                                               errorText={this.errorFor('password2')} text='Password confirm' onFieldChanged={this.handleFieldChanged('password2')}/>
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

SignUp.defaultProps = {

};