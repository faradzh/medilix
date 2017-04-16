/**
 * Created by faradj on 4/11/17.
 */
import React from 'react';
import SignUp from '../../components/authorization/signUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions';

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

    onCheckboxChange = (e) => {
        const state = {};
        state[e.target.name] = e.target.checked;
        this.setState(state)
    };

    submitForm = () => {
        const formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        this.props.createUser(formData);
    };

    render () {
        console.log("Created", this.props.userIsCreated);
        return <SignUp onTextChange={this.onTextChange} onCheckboxChange={this.onCheckboxChange} submitForm={this.submitForm}/>
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUpContainer)