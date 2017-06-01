/**
 * Created by faradj on 4/11/17.
 */
import React from 'react';
import SignUp from '../../components/authorization/signUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions';
import { ruleRunner } from '../../components/validations/ruleRunner';
import { required, minLength, mustMatch } from '../../components/validations/rules';

const mapStateToProps = (state) => {
    return {
        userIsCreating: state.userReducer.creating,
        userIsCreated: state.userReducer.created
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({createUser}, dispatch)
};

class SignUpContainer extends React.Component {
    onTextChange = (valueObj) => {
        this.setState(valueObj)
    };

    getValidation = () => {
        return [
            ruleRunner('username', 'Username', required),
            ruleRunner('email', 'Email', required),
            ruleRunner('role', 'Role', required),
            ruleRunner('password', 'Password', required, minLength(6)),
            ruleRunner('password2', 'Password confirm', required, minLength(6), mustMatch('password', 'Password'))
        ];
    };


    onRadioButtonChange = (e) => {
        const state = {};
        state[e.target.name] = e.target.id;
        this.setState(state)
    };

    submitForm = () => {
        const formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('email', this.state.email);
        formData.append('role', this.state.role);
        formData.append('password', this.state.password);
        this.props.createUser(formData);
    };

    render () {
        return <SignUp onTextChange={this.onTextChange}
                       onRadioButtonChange={this.onRadioButtonChange}
                       submitForm={this.submitForm}
                       fieldValidations={this.getValidation()}/>
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUpContainer)