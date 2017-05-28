/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../../components/dashboard/sidebar';

const mapStateToProps = (state) => {
    return {
        currentUserGroup: state.userReducer.currentUser.group
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);