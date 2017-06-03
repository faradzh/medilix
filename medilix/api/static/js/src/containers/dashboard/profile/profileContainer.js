/**
 * Created by faradj on 4/17/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientProfile from '../../../components/dashboard/profile/patientProfile';
import DoctorProfile from '../../../components/doctors/doctorProfile';
import { getProfileData } from '../../../actions/profileActions';

const mapStateToProps = (state) => {
    return {
        profileData: state.profileReducer.profileData,
        currentUserGroup: state.userReducer.currentUser.group,
        currentUserId: state.userReducer.currentUser.id
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({getProfileData}, dispatch)
};

const profileTabs = [
    {
        id: 0,
        name: 'about',
        title: 'О враче'
    },
    {
        id: 1,
        name: 'feedback',
        title: 'Все отзывы'
    }
];

class ProfileContainer extends React.Component {

    componentWillMount () {
        this.props.getProfileData();
    }

    render () {
        const currentUserGroup = this.props.currentUserGroup;
        const patientComponent = !this.props.children ? <PatientProfile data={this.props.profileData} children={this.props.children}/> : this.props.children;
        const doctorComponent = !this.props.children ? <DoctorProfile data={this.props.profileData} children={this.props.children} profileTabs={profileTabs} /> : this.props.children;
        const profile = {patient: patientComponent, doctor: doctorComponent};
        return (
            <div>
                {profile[currentUserGroup]}
            </div>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileContainer);