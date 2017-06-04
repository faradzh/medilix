/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DoctorProfile from '../../../components/doctors/doctorProfile';
import { getProfileData } from '../../../actions/profileActions';
import { setFeedback, submitFeedback, getPermissionForFeedback, fetchFeedbacks } from '../../../actions/doctorActions';

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
const mapStateToProps = (state) => {
    return {
        profileData: state.profileReducer.profileData,
        profileTabs: profileTabs,
        feedback: state.doctorReducer.feedback,
        feedbackPermission: state.doctorReducer.feedbackPermission,
        feedbacks: state.doctorReducer.feedbacks
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({getProfileData, setFeedback, submitFeedback, getPermissionForFeedback, fetchFeedbacks}, dispatch)
};

class DoctorProfileContainer extends React.Component {
    componentWillMount () {
        const userId = this.props.params.id;
        const userGroup = 'doctor';
        this.props.getProfileData(userId, userGroup);
        this.props.getPermissionForFeedback(this.props.params.id);
        this.props.fetchFeedbacks(this.props.params.id)
    }
    
    render () {
        return (
            <div>
                {!this.props.children ? <DoctorProfile 
                    data={this.props.profileData} 
                    children={this.props.children}
                    profileTabs={this.props.profileTabs}
                    feedback={this.props.feedback}
                    feedbacks={this.props.feedbacks}
                    setFeedback={this.props.setFeedback}
                    submitFeedback={this.props.submitFeedback}
                    feedbackPermission={this.props.feedbackPermission}
                    params={this.props.params}/> : this.props.children}
            </div>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(DoctorProfileContainer);