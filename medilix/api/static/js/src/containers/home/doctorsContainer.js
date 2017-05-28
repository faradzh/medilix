/**
 * Created by faradj on 5/12/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Doctors from '../../components/doctors/doctors';
import { getDoctorsList } from '../../actions/doctorActions';

const mapStateToProps = (state) => {
    return {
        doctors: state.doctorReducer.doctors
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({getDoctorsList}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Doctors);