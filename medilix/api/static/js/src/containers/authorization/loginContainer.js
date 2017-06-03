/**
 * Created by faradj on 6/3/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../../login';

const mapStateToProps = (state) => {
    return {
        errors: state.authReducer.errors
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
};

class LoginContainer extends React.Component {

    render () {
        return <Login />
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);