/**
 * Created by faradj on 4/17/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserProfileEdit from '../../../components/dashboard/profile/userProfileEdit';
import { 
    getProfileData, 
    changeProfileData,
    changeHospitalsData,
    changeEducationData,
    addEducationRow,
    resetProfileData,
    removeEducationRow,
    submitProfileData,
    getSpecializations,
    getHospitals
} from '../../../actions/profileActions';

const mapStateToProps = (state) => {
    return {
        profileData: state.profileReducer.profileData,
        profileStatus: {
            created: state.profileReducer.created,
            rejected: state.profileReducer.rejected
        },
        currentUserGroup: state.userReducer.currentUser.group,
        currentUserId: state.userReducer.currentUser.id,
        specializations: state.profileReducer.specializations,
        hospitals: state.profileReducer.hospitals
    }
};
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeProfileData,
        changeHospitalsData,
        changeEducationData,
        addEducationRow,
        resetProfileData,
        removeEducationRow,
        submitProfileData,
        getProfileData,
        getSpecializations,
        getHospitals
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(UserProfileEdit)