/**
 * Created by faradj on 4/19/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/userActions';
import Dashboard from '../../components/dashboard/dashboard';

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({setCurrentUser}, dispatch)
};

class DashboardContainer extends React.Component {

    componentWillMount () {
        const currentUser = JSON.parse(localStorage.currentUser);
        this.props.setCurrentUser(currentUser)
    }

    render () {
        return <Dashboard children={this.props.children}/>
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(DashboardContainer)