/**
 * Created by faradj on 6/3/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MedicalRecord from '../../components/dashboard/medicalRecord';
import { fetchMedicalRecords, showRecord, setRecordData } from '../../actions/medicalRecordActions';

const mapStateToProps = (state) => {
    return {
        medicalRecords: state.medicalRecordReducer.medicalRecords,
        record: state.medicalRecordReducer.record,
        recordData: state.medicalRecordReducer.recordData
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchMedicalRecords, showRecord, setRecordData}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(MedicalRecord);