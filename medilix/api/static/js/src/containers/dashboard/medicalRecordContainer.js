/**
 * Created by faradj on 6/3/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MedicalRecord from '../../components/dashboard/medicalRecord';
import { fetchMedicalRecords } from '../../actions/medicalRecordActions';

const mapStateToProps = (state) => {
    return {
        medicalRecords: state.medicalRecordReducer.medicalRecords
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchMedicalRecords}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(MedicalRecord);